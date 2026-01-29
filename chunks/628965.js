n.d(t, {
    A: () => D,
});
var r,
    i = n(311907),
    a = n(73153),
    o = n(287809),
    s = n(652215);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = s.XlH.CLOSED,
    d = null,
    f = {},
    p = {},
    _ = {},
    h = null,
    m = null,
    g = null,
    E = [],
    y = null;

function b(e) {
    O(e);
}

function O(e) {
    var t, n, r, i;
    let a = o.default.getCurrentUser();
    if (null == a) return v();
    (d = null != (t = e.section) ? t : d),
        null != e.subsection && null != d && (f[d] = e.subsection),
        null != e.scrollPosition && null != d && (p[d] = e.scrollPosition),
        (u = s.XlH.OPEN),
        (_ = {}),
        (m = c(
            {},
            (h = {
                [s.nc_.ACCOUNT]: {
                    userId: a.id,
                    username: a.username,
                    discriminator: a.discriminator,
                    email: a.email,
                    avatar: a.avatar,
                    password: "",
                    newPassword: null,
                    claimed: a.isClaimed(),
                },
            }),
        )),
        (g = null != (n = e.analyticsLocation) ? n : null),
        (E = null != (r = e.analyticsLocations) ? r : []),
        (y = null != (i = e.searchParams) ? i : null);
}

function v() {
    (u = s.XlH.CLOSED), (h = null), (m = null), (d = null), (f = {}), (p = {}), (g = null), (E = []), (y = null);
}

function A(e) {
    var t;
    (d = e.section),
        (g = null),
        (E = null != (t = e.analyticsLocations) ? t : []),
        null != e.subsection && (f[d] = e.subsection);
}

function I(e) {
    let { forSection: t } = e;
    null != t ? delete f[t] : null != d && delete f[d];
}

function S(e) {
    let { forSection: t } = e;
    null != t ? delete p[t] : null != d && delete p[d];
}

function T(e) {
    let { settings: t } = e;
    null == m && (m = {});
    let n = m[s.nc_.ACCOUNT];
    m[s.nc_.ACCOUNT] = c({}, n, t);
}

function C() {
    u = s.XlH.SUBMITTING;
}

function N() {
    let e = o.default.getCurrentUser();
    w(),
        null != e &&
            (m = c(
                {},
                (h = {
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
            ));
}

function w() {
    (u = s.XlH.OPEN), (_ = {});
}

function R(e) {
    var t;
    if (u !== s.XlH.SUBMITTING) return !1;
    (u = s.XlH.OPEN), (d = s.nc_.ACCOUNT), (_ = null != (t = e.errors) ? t : {});
}
class P extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.default);
    }
    getSection() {
        return d;
    }
    getSubsection() {
        return null != d ? f[d] : null;
    }
    getScrollPosition() {
        return null != d ? p[d] : null;
    }
    getAnalyticsLocation() {
        return g;
    }
    getAnalyticsLocations() {
        return E;
    }
    getErrors() {
        return _;
    }
    getSubmitting() {
        return u === s.XlH.SUBMITTING;
    }
    getSettings() {
        return m;
    }
    getSearchParams() {
        return y;
    }
}
l(P, "displayName", "UserSettingsModalStore");
let D = new P(a.h, {
    USER_SETTINGS_MODAL_OPEN: b,
    USER_SETTINGS_MODAL_INIT: O,
    USER_SETTINGS_MODAL_CLOSE: v,
    LOGOUT: v,
    USER_SETTINGS_MODAL_SUBMIT: C,
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: R,
    USER_SETTINGS_MODAL_SET_SECTION: A,
    USER_SETTINGS_MODAL_CLEAR_SUBSECTION: I,
    USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: S,
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: T,
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: w,
    USER_SETTINGS_MODAL_RESET: N,
});
