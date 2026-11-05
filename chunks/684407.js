var i = n(855986),
    r = n(73153);
let l = {},
    E = {},
    a = {},
    d = !1,
    s = !1,
    u = !1;
function S(e) {
    let { guild: t } = e.invite;
    return t?.welcome_screen != null && ((E[t.id] = t.welcome_screen), !0);
}
function o(e) {
    let { welcomeScreen: t, guildId: n } = e;
    E[n] = t ?? l;
}
class _ extends i.Ay.Store {
    static displayName = "WelcomeScreenStore";
    get(e) {
        if (null != e) return E[e];
    }
    isFetching() {
        return s;
    }
    hasError() {
        return u;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? d : a[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = E[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
let T = new _(r.h, {
    INVITE_RESOLVE_SUCCESS: S,
    INVITE_ACCEPT_SUCCESS: S,
    WELCOME_SCREEN_SUBMIT_SUCCESS: o,
    WELCOME_SCREEN_UPDATE: o,
    WELCOME_SCREEN_VIEW: function (e) {
        let { guildId: t, isLurking: n } = e;
        ((a[t] = !0), n && (d = !0));
    },
    GUILD_STOP_LURKING: function () {
        d = !1;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        a[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        ((s = !0), (u = !1));
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
        ((s = !1), (u = !1));
        let { welcomeScreen: t, guildId: n } = e;
        E[n] = t ?? l;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        ((s = !1), (u = !0));
    },
});
n.d(t, {}, { A: T, E: l });
