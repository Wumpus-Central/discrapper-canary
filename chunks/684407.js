"use strict";
n.d(t, { A: () => h, E: () => s });
var i = n(17928),
    r = n(228366);
let s = {},
    a = {},
    o = {},
    l = !1,
    u = !1,
    c = !1;
function d(e) {
    let { guild: t } = e.invite;
    return t?.welcome_screen != null && ((a[t.id] = t.welcome_screen), !0);
}
function _(e) {
    let { welcomeScreen: t, guildId: n } = e;
    a[n] = t ?? s;
}
class f extends i.Ay.Store {
    static displayName = "WelcomeScreenStore";
    get(e) {
        if (null != e) return a[e];
    }
    isFetching() {
        return u;
    }
    hasError() {
        return c;
    }
    hasSeen(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null != e && (t ? l : o[e] || !1);
    }
    isEmpty(e) {
        if (null == e) return !0;
        let t = a[e];
        return null == t || 0 === t.welcome_channels.length;
    }
}
let h = new f(r.h, {
    INVITE_RESOLVE_SUCCESS: d,
    INVITE_ACCEPT_SUCCESS: d,
    WELCOME_SCREEN_SUBMIT_SUCCESS: _,
    WELCOME_SCREEN_UPDATE: _,
    WELCOME_SCREEN_VIEW: function (e) {
        let { guildId: t, isLurking: n } = e;
        (o[t] = !0), n && (l = !0);
    },
    GUILD_STOP_LURKING: function () {
        l = !1;
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        o[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
        (u = !0), (c = !1);
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
        (u = !1), (c = !1);
        let { welcomeScreen: t, guildId: n } = e;
        a[n] = t ?? s;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
        (u = !1), (c = !0);
    },
});
