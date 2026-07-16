i.d(t, { A: () => g, E: () => a });
var n = i(17928),
    l = i(228366);
let a = {},
    r = {},
    E = {},
    s = !1,
    d = !1,
    h = !1;
function c(e) {
    let { guild: t } = e.invite;
    return t?.welcome_screen != null && ((r[t.id] = t.welcome_screen), !0);
}
function o(e) {
    let { welcomeScreen: t, guildId: i } = e;
    r[i] = t ?? a;
}
class u extends n.Ay.Store {
    static displayName = "WelcomeScreenStore";
    get(e) {
        if (null != e) return r[e];
    }
    isFetching() {
        return d;
    }
    hasError() {
        return h;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? s : E[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = r[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
let g = new u(l.h, {
    INVITE_RESOLVE_SUCCESS: c,
    INVITE_ACCEPT_SUCCESS: c,
    WELCOME_SCREEN_SUBMIT_SUCCESS: o,
    WELCOME_SCREEN_UPDATE: o,
    WELCOME_SCREEN_VIEW: function (e) {
        let { guildId: t, isLurking: i } = e;
        (E[t] = !0), i && (s = !0);
    },
    GUILD_STOP_LURKING: function () {
        s = !1;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        E[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        (d = !0), (h = !1);
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
        (d = !1), (h = !1);
        let { welcomeScreen: t, guildId: i } = e;
        r[i] = t ?? a;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        (d = !1), (h = !0);
    },
});
