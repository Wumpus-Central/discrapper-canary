n.d(t, { A: () => x });
var r,
    i = n(311907),
    a = n(73153),
    s = n(287809),
    o = n(652215);
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
let u = o.XlH.CLOSED,
    d = null,
    f = {},
    p = {},
    _ = {},
    h = null,
    m = null,
    g = !1,
    E = null,
    b = [],
    y = null;
function O(e) {
    A(e);
}
function A(e) {
    var t, n, r, i;
    let a = s.default.getCurrentUser();
    if (null == a) return v();
    (d = null != (t = e.section) ? t : d),
        null != e.subsection && null != d && (f[d] = e.subsection),
        null != e.scrollPosition && null != d && (p[d] = e.scrollPosition),
        (g = !!e.openWithoutBackstack),
        (u = o.XlH.OPEN),
        (_ = {}),
        (m = c(
            {},
            (h = {
                [o.nc_.ACCOUNT]: {
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
        (E = null != (n = e.analyticsLocation) ? n : null),
        (b = null != (r = e.analyticsLocations) ? r : []),
        (y = null != (i = e.searchParams) ? i : null);
}
function v() {
    (u = o.XlH.CLOSED), (h = null), (m = null), (d = null), (f = {}), (p = {}), (E = null), (b = []), (y = null);
}
function S(e) {
    var t;
    (d = e.section),
        (E = null),
        (b = null != (t = e.analyticsLocations) ? t : []),
        null != e.subsection && (f[d] = e.subsection);
}
function I(e) {
    let { forSection: t } = e;
    null != t ? delete f[t] : null != d && delete f[d];
}
function T(e) {
    let { forSection: t } = e;
    null != t ? delete p[t] : null != d && delete p[d];
}
function C(e) {
    let { settings: t } = e;
    null == m && (m = {});
    let n = m[o.nc_.ACCOUNT];
    m[o.nc_.ACCOUNT] = c({}, n, t);
}
function N() {
    u = o.XlH.SUBMITTING;
}
function R() {
    let e = s.default.getCurrentUser();
    w(),
        null != e &&
            (m = c(
                {},
                (h = {
                    [o.nc_.ACCOUNT]: {
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
    (u = o.XlH.OPEN), (_ = {});
}
function P(e) {
    var t;
    if (u !== o.XlH.SUBMITTING) return !1;
    (u = o.XlH.OPEN), (d = o.nc_.ACCOUNT), (_ = null != (t = e.errors) ? t : {});
}
class D extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.default);
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
        return E;
    }
    getAnalyticsLocations() {
        return b;
    }
    getErrors() {
        return _;
    }
    getSubmitting() {
        return u === o.XlH.SUBMITTING;
    }
    getSettings() {
        return m;
    }
    getOpenWithoutBackstack() {
        return g;
    }
    getSearchParams() {
        return y;
    }
}
l(D, "displayName", "UserSettingsModalStore");
let x = new D(a.h, {
    USER_SETTINGS_MODAL_OPEN: O,
    USER_SETTINGS_MODAL_INIT: A,
    USER_SETTINGS_MODAL_CLOSE: v,
    LOGOUT: v,
    USER_SETTINGS_MODAL_SUBMIT: N,
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: P,
    USER_SETTINGS_MODAL_SET_SECTION: S,
    USER_SETTINGS_MODAL_CLEAR_SUBSECTION: I,
    USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: T,
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: C,
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: w,
    USER_SETTINGS_MODAL_RESET: R,
});
