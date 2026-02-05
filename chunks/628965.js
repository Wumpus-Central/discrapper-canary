"use strict";
n.d(t, { A: () => O });
var r = n(311907),
    i = n(73153),
    a = n(287809),
    s = n(652215);
let o = s.XlH.CLOSED,
    l = null,
    u = {},
    c = {},
    d = {},
    _ = null,
    f = null,
    p = null,
    h = [],
    m = null;
function g(e) {
    E(e);
}
function E(e) {
    let t = a.default.getCurrentUser();
    if (null == t) return A();
    (l = e.section ?? l),
        null != e.subsection && null != l && (u[l] = e.subsection),
        null != e.scrollPosition && null != l && (c[l] = e.scrollPosition),
        (o = s.XlH.OPEN),
        (d = {}),
        (f = {
            ...(_ = {
                [s.nc_.ACCOUNT]: {
                    userId: t.id,
                    username: t.username,
                    discriminator: t.discriminator,
                    email: t.email,
                    avatar: t.avatar,
                    password: "",
                    newPassword: null,
                    claimed: t.isClaimed(),
                },
            }),
        }),
        (p = e.analyticsLocation ?? null),
        (h = e.analyticsLocations ?? []),
        (m = e.searchParams ?? null);
}
function A() {
    (o = s.XlH.CLOSED), (_ = null), (f = null), (l = null), (u = {}), (c = {}), (p = null), (h = []), (m = null);
}
function I(e) {
    (l = e.section), (p = null), (h = e.analyticsLocations ?? []), null != e.subsection && (u[l] = e.subsection);
}
function T(e) {
    let { forSection: t } = e;
    null != t ? delete u[t] : null != l && delete u[l];
}
function y(e) {
    let { forSection: t } = e;
    null != t ? delete c[t] : null != l && delete c[l];
}
function S(e) {
    let { settings: t } = e;
    null == f && (f = {});
    let n = f[s.nc_.ACCOUNT];
    f[s.nc_.ACCOUNT] = { ...n, ...t };
}
function v() {
    o = s.XlH.SUBMITTING;
}
function C() {
    let e = a.default.getCurrentUser();
    b(),
        null != e &&
            (f = {
                ...(_ = {
                    [s.nc_.ACCOUNT]: {
                        userId: e.id,
                        username: e.username,
                        discriminator: e.discriminator,
                        email: e.email,
                        avatar: e.avatar,
                        password: "",
                        newPassword: null,
                        claimed: e.isClaimed(),
                    },
                }),
            });
}
function b() {
    (o = s.XlH.OPEN), (d = {});
}
function N(e) {
    if (o !== s.XlH.SUBMITTING) return !1;
    (o = s.XlH.OPEN), (l = s.nc_.ACCOUNT), (d = e.errors ?? {});
}
class R extends r.Ay.Store {
    static displayName = "UserSettingsModalStore";
    initialize() {
        this.waitFor(a.default);
    }
    getSection() {
        return l;
    }
    getSubsection() {
        return null != l ? u[l] : null;
    }
    getScrollPosition() {
        return null != l ? c[l] : null;
    }
    getAnalyticsLocation() {
        return p;
    }
    getAnalyticsLocations() {
        return h;
    }
    getErrors() {
        return d;
    }
    getSubmitting() {
        return o === s.XlH.SUBMITTING;
    }
    getSettings() {
        return f;
    }
    getSearchParams() {
        return m;
    }
}
let O = new R(i.h, {
    USER_SETTINGS_MODAL_OPEN: g,
    USER_SETTINGS_MODAL_INIT: E,
    USER_SETTINGS_MODAL_CLOSE: A,
    LOGOUT: A,
    USER_SETTINGS_MODAL_SUBMIT: v,
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: N,
    USER_SETTINGS_MODAL_SET_SECTION: I,
    USER_SETTINGS_MODAL_CLEAR_SUBSECTION: T,
    USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: y,
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: S,
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: b,
    USER_SETTINGS_MODAL_RESET: C,
});
