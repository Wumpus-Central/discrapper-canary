n.d(t, { A: () => g, E: () => a });
var l = n(311907),
    r = n(73153);
let a = {},
    i = {},
    s = {},
    o = !1,
    E = !1,
    u = !1;
function c(e) {
    let { guild: t } = e.invite;
    return t?.welcome_screen != null && ((i[t.id] = t.welcome_screen), !0);
}
function _(e) {
    let { welcomeScreen: t, guildId: n } = e;
    i[n] = t ?? a;
}
class d extends l.Ay.Store {
    static displayName = "WelcomeScreenStore";
    get(e) {
        if (null != e) return i[e];
    }
    isFetching() {
        return E;
    }
    hasError() {
        return u;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? o : s[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = i[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
let g = new d(r.h, {
    INVITE_RESOLVE_SUCCESS: c,
    INVITE_ACCEPT_SUCCESS: c,
    WELCOME_SCREEN_SUBMIT_SUCCESS: _,
    WELCOME_SCREEN_UPDATE: _,
    WELCOME_SCREEN_VIEW: function (e) {
        let { guildId: t, isLurking: n } = e;
        (s[t] = !0), n && (o = !0);
    },
    GUILD_STOP_LURKING: function () {
        o = !1;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        s[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        (E = !0), (u = !1);
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
        (E = !1), (u = !1);
        let { welcomeScreen: t, guildId: n } = e;
        i[n] = t ?? a;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        (E = !1), (u = !0);
    },
});
