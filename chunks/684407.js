n.d(t, { A: () => S, E: () => r });
var l = n(17928),
    i = n(228366);
let r = {},
    E = {},
    a = {},
    u = !1,
    c = !1,
    o = !1;
function s(e) {
    let { guild: t } = e.invite;
    return t?.welcome_screen != null && ((E[t.id] = t.welcome_screen), !0);
}
function d(e) {
    let { welcomeScreen: t, guildId: n } = e;
    E[n] = t ?? r;
}
class _ extends l.Ay.Store {
    static displayName = "WelcomeScreenStore";
    get(e) {
        if (null != e) return E[e];
    }
    isFetching() {
        return c;
    }
    hasError() {
        return o;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? u : a[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = E[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
let S = new _(i.h, {
    INVITE_RESOLVE_SUCCESS: s,
    INVITE_ACCEPT_SUCCESS: s,
    WELCOME_SCREEN_SUBMIT_SUCCESS: d,
    WELCOME_SCREEN_UPDATE: d,
    WELCOME_SCREEN_VIEW: function (e) {
        let { guildId: t, isLurking: n } = e;
        (a[t] = !0), n && (u = !0);
    },
    GUILD_STOP_LURKING: function () {
        u = !1;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        a[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        (c = !0), (o = !1);
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
        (c = !1), (o = !1);
        let { welcomeScreen: t, guildId: n } = e;
        E[n] = t ?? r;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        (c = !1), (o = !0);
    },
});
