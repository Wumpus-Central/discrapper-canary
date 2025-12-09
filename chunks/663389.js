n.d(t, { Z: () => x });
var r,
    i = n(442837),
    a = n(570140),
    o = n(594174),
    s = n(981631);
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
let u = s.QZA.CLOSED,
    d = null,
    f = {},
    p = {},
    _ = {},
    m = null,
    h = null,
    g = !1,
    E = null,
    b = [],
    y = null;
function O(e) {
    v(e);
}
function v(e) {
    var t, n, r, i;
    let a = o.default.getCurrentUser();
    if (null == a) return S();
    (d = null != (t = e.section) ? t : d),
        null != e.subsection && null != d && (f[d] = e.subsection),
        null != e.scrollPosition && null != d && (p[d] = e.scrollPosition),
        (g = !!e.openWithoutBackstack),
        (u = s.QZA.OPEN),
        (_ = {}),
        (h = c(
            {},
            (m = {
                [s.oAB.ACCOUNT]: {
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
function S() {
    (u = s.QZA.CLOSED), (m = null), (h = null), (d = null), (f = {}), (p = {}), (E = null), (b = []), (y = null);
}
function I(e) {
    var t;
    (d = e.section),
        (E = null),
        (b = null != (t = e.analyticsLocations) ? t : []),
        null != e.subsection && (f[d] = e.subsection);
}
function T(e) {
    let { forSection: t } = e;
    null != t ? delete f[t] : null != d && delete f[d];
}
function A(e) {
    let { forSection: t } = e;
    null != t ? delete p[t] : null != d && delete p[d];
}
function C(e) {
    let { settings: t } = e;
    null == h && (h = {});
    let n = h[s.oAB.ACCOUNT];
    h[s.oAB.ACCOUNT] = c({}, n, t);
}
function N() {
    u = s.QZA.SUBMITTING;
}
function P() {
    let e = o.default.getCurrentUser();
    R(),
        null != e &&
            (h = c(
                {},
                (m = {
                    [s.oAB.ACCOUNT]: {
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
function R() {
    (u = s.QZA.OPEN), (_ = {});
}
function D(e) {
    var t;
    if (u !== s.QZA.SUBMITTING) return !1;
    (u = s.QZA.OPEN), (d = s.oAB.ACCOUNT), (_ = null != (t = e.errors) ? t : {});
}
class w extends (r = i.ZP.Store) {
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
        return E;
    }
    getAnalyticsLocations() {
        return b;
    }
    getErrors() {
        return _;
    }
    getSubmitting() {
        return u === s.QZA.SUBMITTING;
    }
    getSettings() {
        return h;
    }
    getOpenWithoutBackstack() {
        return g;
    }
    getSearchParams() {
        return y;
    }
}
l(w, "displayName", "UserSettingsModalStore");
let x = new w(a.Z, {
    USER_SETTINGS_MODAL_OPEN: O,
    USER_SETTINGS_MODAL_INIT: v,
    USER_SETTINGS_MODAL_CLOSE: S,
    LOGOUT: S,
    USER_SETTINGS_MODAL_SUBMIT: N,
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: D,
    USER_SETTINGS_MODAL_SET_SECTION: I,
    USER_SETTINGS_MODAL_CLEAR_SUBSECTION: T,
    USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: A,
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: C,
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: R,
    USER_SETTINGS_MODAL_RESET: P,
});
