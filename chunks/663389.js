var i,
    a = r(392711),
    s = r.n(a),
    o = r(442837),
    l = r(570140),
    u = r(594174),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = c.QZA.CLOSED,
    _ = null,
    h = null,
    p = {},
    m = {},
    g = {},
    E = null,
    v = null,
    I = !1,
    T = !1,
    b = null,
    y = null,
    S = null,
    A = [],
    N = null,
    C = null;
function R(e) {
    (I = !0), O(e);
}
function O(e) {
    var n, r, i, a, s, o;
    let l = u.default.getCurrentUser();
    if (null == l) return D();
    (h = null !== (n = e.section) && void 0 !== n ? n : h),
        (N = null !== (r = e.section) && void 0 !== r ? r : h),
        null != e.subsection && null != h && (p[h] = e.subsection),
        null != e.scrollPosition && null != h && (m[h] = e.scrollPosition),
        (T = !!e.openWithoutBackstack),
        (f = c.QZA.OPEN),
        (g = {}),
        (v = {
            ...(E = {
                [c.oAB.ACCOUNT]: {
                    userId: l.id,
                    username: l.username,
                    discriminator: l.discriminator,
                    email: l.email,
                    avatar: l.avatar,
                    password: '',
                    newPassword: null,
                    claimed: l.isClaimed()
                }
            })
        }),
        (y = null !== (i = e.onClose) && void 0 !== i ? i : null),
        (S = null !== (a = e.analyticsLocation) && void 0 !== a ? a : null),
        (A = null !== (s = e.analyticsLocations) && void 0 !== s ? s : []),
        (C = null !== (o = e.impressionSource) && void 0 !== o ? o : null);
}
function D() {
    (f = c.QZA.CLOSED), (I = !1), (E = null), (N = null), (v = null), (_ = null), (h = null), (p = {}), (m = {}), (y = null), (S = null), (A = []), (C = null);
}
function L(e) {
    var n;
    (_ = h), (h = e.section), (S = null), (A = null !== (n = e.analyticsLocations) && void 0 !== n ? n : []), null != e.subsection && (p[h] = e.subsection);
}
function x(e) {
    let { forSection: n } = e;
    null != n ? delete p[n] : null != h && delete p[h];
}
function w(e) {
    let { forSection: n } = e;
    null != n ? delete m[n] : null != h && delete m[h];
}
function P(e) {
    let { settings: n } = e;
    null == v && (v = {});
    let r = v[c.oAB.ACCOUNT];
    v[c.oAB.ACCOUNT] = {
        ...r,
        ...n
    };
}
function M() {
    f = c.QZA.SUBMITTING;
}
function k() {
    let e = u.default.getCurrentUser();
    U(),
        null != e &&
            (v = {
                ...(E = {
                    [c.oAB.ACCOUNT]: {
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
function U() {
    (f = c.QZA.OPEN), (g = {});
}
function B(e) {
    var n;
    if (f !== c.QZA.SUBMITTING) return !1;
    (f = c.QZA.OPEN), (h = c.oAB.ACCOUNT), (g = null !== (n = e.errors) && void 0 !== n ? n : {});
}
function G(e) {
    return (
        (b = e.tab),
        null == h &&
            b === c.cII.USER_SETTINGS &&
            O({
                type: 'USER_SETTINGS_MODAL_INIT',
                section: null,
                subsection: null,
                scrollPosition: null,
                openWithoutBackstack: !1
            })
    );
}
class F extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    hasChanges() {
        return null != v && null != E && (!!this.isOpen() || b === c.cII.USER_SETTINGS) && !s().isEqual(v, E);
    }
    isOpen() {
        return I;
    }
    getPreviousSection() {
        return _;
    }
    getSection() {
        return h;
    }
    getSubsection() {
        return null != h ? p[h] : null;
    }
    getScrollPosition() {
        return null != h ? m[h] : null;
    }
    shouldOpenWithoutBackstack() {
        return T;
    }
    getProps() {
        return {
            submitting: f === c.QZA.SUBMITTING,
            section: h,
            subsection: null != h ? p[h] : null,
            scrollPosition: null != h ? m[h] : null,
            settings: v,
            errors: g,
            hasChanges: this.hasChanges(),
            openWithoutBackstack: T,
            analyticsLocation: S,
            analyticsLocations: A,
            initialSection: N,
            impressionSource: C
        };
    }
    get onClose() {
        return y;
    }
}
d(F, 'displayName', 'UserSettingsModalStore'),
    (n.Z = new F(l.Z, {
        USER_SETTINGS_MODAL_OPEN: R,
        USER_SETTINGS_MODAL_INIT: O,
        USER_SETTINGS_MODAL_CLOSE: D,
        LOGOUT: D,
        USER_SETTINGS_MODAL_SUBMIT: M,
        USER_SETTINGS_MODAL_SUBMIT_FAILURE: B,
        USER_SETTINGS_MODAL_SET_SECTION: L,
        USER_SETTINGS_MODAL_CLEAR_SUBSECTION: x,
        USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: w,
        USER_SETTINGS_MODAL_UPDATE_ACCOUNT: P,
        USER_SETTINGS_MODAL_SUBMIT_COMPLETE: U,
        USER_SETTINGS_MODAL_RESET: k,
        DRAWER_SELECT_TAB: G
    }));
