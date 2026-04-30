l.d(t, { A: () => C, E: () => c });
var a = l(17928),
    s = l(228366);
let c = {},
    i = {},
    E = {},
    n = !1,
    h = !1,
    r = !1;
function d(e) {
    let { guild: t } = e.invite;
    return t?.welcome_screen != null && ((i[t.id] = t.welcome_screen), !0);
}
function o(e) {
    let { welcomeScreen: t, guildId: l } = e;
    i[l] = t ?? c;
}
class _ extends a.Ay.Store {
    static displayName = "WelcomeScreenStore";
    get(e) {
        if (null != e) return i[e];
    }
    isFetching() {
        return h;
    }
    hasError() {
        return r;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? n : E[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = i[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
let C = new _(s.h, {
    INVITE_RESOLVE_SUCCESS: d,
    INVITE_ACCEPT_SUCCESS: d,
    WELCOME_SCREEN_SUBMIT_SUCCESS: o,
    WELCOME_SCREEN_UPDATE: o,
    WELCOME_SCREEN_VIEW: function (e) {
        let { guildId: t, isLurking: l } = e;
        (E[t] = !0), l && (n = !0);
    },
    GUILD_STOP_LURKING: function () {
        n = !1;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        E[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        (h = !0), (r = !1);
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
        (h = !1), (r = !1);
        let { welcomeScreen: t, guildId: l } = e;
        i[l] = t ?? c;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        (h = !1), (r = !0);
    },
});
