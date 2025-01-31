n.d(t, { Z: () => G });
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(594174),
    u = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = u.QZA.CLOSED,
    f = null,
    _ = null,
    p = {},
    h = {},
    m = {},
    g = null,
    E = null,
    v = !1,
    y = !1,
    I = null,
    b = null,
    T = [],
    S = null,
    A = null;
function N(e) {
    (v = !0), C(e);
}
function C(e) {
    var t, n, i, r, a, s;
    let o = l.default.getCurrentUser();
    if (null == o) return R();
    (_ = null !== (t = e.section) && void 0 !== t ? t : _),
        (S = null !== (n = e.section) && void 0 !== n ? n : _),
        null != e.subsection && null != _ && (p[_] = e.subsection),
        null != e.scrollPosition && null != _ && (h[_] = e.scrollPosition),
        (y = !!e.openWithoutBackstack),
        (d = u.QZA.OPEN),
        (m = {}),
        (E = {
            ...(g = {
                [u.oAB.ACCOUNT]: {
                    userId: o.id,
                    username: o.username,
                    discriminator: o.discriminator,
                    email: o.email,
                    avatar: o.avatar,
                    password: '',
                    newPassword: null,
                    claimed: o.isClaimed()
                }
            })
        }),
        (I = null !== (i = e.onClose) && void 0 !== i ? i : null),
        (b = null !== (r = e.analyticsLocation) && void 0 !== r ? r : null),
        (T = null !== (a = e.analyticsLocations) && void 0 !== a ? a : []),
        (A = null !== (s = e.impressionSource) && void 0 !== s ? s : null);
}
function R() {
    (d = u.QZA.CLOSED), (v = !1), (g = null), (S = null), (E = null), (f = null), (_ = null), (p = {}), (h = {}), (I = null), (b = null), (T = []), (A = null);
}
function O(e) {
    var t;
    (f = _), (_ = e.section), (b = null), (T = null !== (t = e.analyticsLocations) && void 0 !== t ? t : []), null != e.subsection && (p[_] = e.subsection);
}
function D(e) {
    let { forSection: t } = e;
    null != t ? delete p[t] : null != _ && delete p[_];
}
function x(e) {
    let { forSection: t } = e;
    null != t ? delete h[t] : null != _ && delete h[_];
}
function L(e) {
    let { settings: t } = e;
    null == E && (E = {});
    let n = E[u.oAB.ACCOUNT];
    E[u.oAB.ACCOUNT] = {
        ...n,
        ...t
    };
}
function P() {
    d = u.QZA.SUBMITTING;
}
function w() {
    let e = l.default.getCurrentUser();
    M(),
        null != e &&
            (E = {
                ...(g = {
                    [u.oAB.ACCOUNT]: {
                        userId: e.id,
                        username: e.username,
                        discriminator: e.discriminator,
                        email: e.email,
                        avatar: e.avatar,
                        password: '',
                        newPassword: null,
                        claimed: e.isClaimed()
                    }
                })
            });
}
function M() {
    (d = u.QZA.OPEN), (m = {});
}
function k(e) {
    var t;
    if (d !== u.QZA.SUBMITTING) return !1;
    (d = u.QZA.OPEN), (_ = u.oAB.ACCOUNT), (m = null !== (t = e.errors) && void 0 !== t ? t : {});
}
class U extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(l.default);
    }
    hasChanges() {
        return null != E && null != g && !!this.isOpen() && !a().isEqual(E, g);
    }
    isOpen() {
        return v;
    }
    getPreviousSection() {
        return f;
    }
    getSection() {
        return _;
    }
    getSubsection() {
        return null != _ ? p[_] : null;
    }
    getScrollPosition() {
        return null != _ ? h[_] : null;
    }
    shouldOpenWithoutBackstack() {
        return y;
    }
    getProps() {
        return {
            submitting: d === u.QZA.SUBMITTING,
            section: _,
            subsection: null != _ ? p[_] : null,
            scrollPosition: null != _ ? h[_] : null,
            settings: E,
            errors: m,
            hasChanges: this.hasChanges(),
            openWithoutBackstack: y,
            analyticsLocation: b,
            analyticsLocations: T,
            initialSection: S,
            impressionSource: A
        };
    }
    get onClose() {
        return I;
    }
}
c(U, 'displayName', 'UserSettingsModalStore');
let G = new U(o.Z, {
    USER_SETTINGS_MODAL_OPEN: N,
    USER_SETTINGS_MODAL_INIT: C,
    USER_SETTINGS_MODAL_CLOSE: R,
    LOGOUT: R,
    USER_SETTINGS_MODAL_SUBMIT: P,
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: k,
    USER_SETTINGS_MODAL_SET_SECTION: O,
    USER_SETTINGS_MODAL_CLEAR_SUBSECTION: D,
    USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: x,
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: L,
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: M,
    USER_SETTINGS_MODAL_RESET: w
});
