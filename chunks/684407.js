n.d(t, { A: () => S, E: () => a });
var i = n(17928),
    l = n(73153);
let a = {},
    r = {},
    s = {},
    E = !1,
    d = !1,
    o = !1;
function u(e) {
    let { guild: t } = e.invite;
    return t?.welcome_screen != null && ((r[t.id] = t.welcome_screen), !0);
}
function c(e) {
    let { welcomeScreen: t, guildId: n } = e;
    r[n] = t ?? a;
}
class h extends i.Ay.Store {
    static displayName = "WelcomeScreenStore";
    get(e) {
        if (null != e) return r[e];
    }
    isFetching() {
        return d;
    }
    hasError() {
        return o;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? E : s[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = r[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
let S = new h(l.h, {
    INVITE_RESOLVE_SUCCESS: u,
    INVITE_ACCEPT_SUCCESS: u,
    WELCOME_SCREEN_SUBMIT_SUCCESS: c,
    WELCOME_SCREEN_UPDATE: c,
    WELCOME_SCREEN_VIEW: function (e) {
        let { guildId: t, isLurking: n } = e;
        ((s[t] = !0), n && (E = !0));
    },
    GUILD_STOP_LURKING: function () {
        E = !1;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        s[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        ((d = !0), (o = !1));
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
        ((d = !1), (o = !1));
        let { welcomeScreen: t, guildId: n } = e;
        r[n] = t ?? a;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        ((d = !1), (o = !0));
    },
});
