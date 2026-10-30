n.d(t, { A: () => _, E: () => l });
var i = n(17928),
    a = n(73153);
let l = {},
    r = {},
    s = {},
    d = !1,
    E = !1,
    o = !1;
function c(e) {
    let { guild: t } = e.invite;
    return t?.welcome_screen != null && ((r[t.id] = t.welcome_screen), !0);
}
function u(e) {
    let { welcomeScreen: t, guildId: n } = e;
    r[n] = t ?? l;
}
class h extends i.Ay.Store {
    static displayName = "WelcomeScreenStore";
    get(e) {
        if (null != e) return r[e];
    }
    isFetching() {
        return E;
    }
    hasError() {
        return o;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? d : s[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = r[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
let _ = new h(a.h, {
    INVITE_RESOLVE_SUCCESS: c,
    INVITE_ACCEPT_SUCCESS: c,
    WELCOME_SCREEN_SUBMIT_SUCCESS: u,
    WELCOME_SCREEN_UPDATE: u,
    WELCOME_SCREEN_VIEW: function (e) {
        let { guildId: t, isLurking: n } = e;
        ((s[t] = !0), n && (d = !0));
    },
    GUILD_STOP_LURKING: function () {
        d = !1;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        s[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        ((E = !0), (o = !1));
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
        ((E = !1), (o = !1));
        let { welcomeScreen: t, guildId: n } = e;
        r[n] = t ?? l;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        ((E = !1), (o = !0));
    },
});
