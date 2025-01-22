var i,
    a = r(392711),
    o = r.n(a),
    s = r(442837),
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
    p = null,
    h = null,
    _ = {},
    m = {},
    g = {},
    E = null,
    v = null,
    y = !1,
    b = !1,
    I = null,
    T = null,
    S = [],
    A = null,
    C = null;
function N(e) {
    (y = !0), R(e);
}
function R(e) {
    var n, r, i, a, o, s;
    let l = u.default.getCurrentUser();
    if (null == l) return O();
    (h = null !== (n = e.section) && void 0 !== n ? n : h),
        (A = null !== (r = e.section) && void 0 !== r ? r : h),
        null != e.subsection && null != h && (_[h] = e.subsection),
        null != e.scrollPosition && null != h && (m[h] = e.scrollPosition),
        (b = !!e.openWithoutBackstack),
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
        (I = null !== (i = e.onClose) && void 0 !== i ? i : null),
        (T = null !== (a = e.analyticsLocation) && void 0 !== a ? a : null),
        (S = null !== (o = e.analyticsLocations) && void 0 !== o ? o : []),
        (C = null !== (s = e.impressionSource) && void 0 !== s ? s : null);
}
function O() {
    (f = c.QZA.CLOSED), (y = !1), (E = null), (A = null), (v = null), (p = null), (h = null), (_ = {}), (m = {}), (I = null), (T = null), (S = []), (C = null);
}
function D(e) {
    var n;
    (p = h), (h = e.section), (T = null), (S = null !== (n = e.analyticsLocations) && void 0 !== n ? n : []), null != e.subsection && (_[h] = e.subsection);
}
function L(e) {
    let { forSection: n } = e;
    null != n ? delete _[n] : null != h && delete _[h];
}
function x(e) {
    let { forSection: n } = e;
    null != n ? delete m[n] : null != h && delete m[h];
}
function w(e) {
    let { settings: n } = e;
    null == v && (v = {});
    let r = v[c.oAB.ACCOUNT];
    v[c.oAB.ACCOUNT] = {
        ...r,
        ...n
    };
}
function P() {
    f = c.QZA.SUBMITTING;
}
function M() {
    let e = u.default.getCurrentUser();
    k(),
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
function k() {
    (f = c.QZA.OPEN), (g = {});
}
function U(e) {
    var n;
    if (f !== c.QZA.SUBMITTING) return !1;
    (f = c.QZA.OPEN), (h = c.oAB.ACCOUNT), (g = null !== (n = e.errors) && void 0 !== n ? n : {});
}
class B extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    hasChanges() {
        return null != v && null != E && !!this.isOpen() && !o().isEqual(v, E);
    }
    isOpen() {
        return y;
    }
    getPreviousSection() {
        return p;
    }
    getSection() {
        return h;
    }
    getSubsection() {
        return null != h ? _[h] : null;
    }
    getScrollPosition() {
        return null != h ? m[h] : null;
    }
    shouldOpenWithoutBackstack() {
        return b;
    }
    getProps() {
        return {
            submitting: f === c.QZA.SUBMITTING,
            section: h,
            subsection: null != h ? _[h] : null,
            scrollPosition: null != h ? m[h] : null,
            settings: v,
            errors: g,
            hasChanges: this.hasChanges(),
            openWithoutBackstack: b,
            analyticsLocation: T,
            analyticsLocations: S,
            initialSection: A,
            impressionSource: C
        };
    }
    get onClose() {
        return I;
    }
}
d(B, 'displayName', 'UserSettingsModalStore'),
    (n.Z = new B(l.Z, {
        USER_SETTINGS_MODAL_OPEN: N,
        USER_SETTINGS_MODAL_INIT: R,
        USER_SETTINGS_MODAL_CLOSE: O,
        LOGOUT: O,
        USER_SETTINGS_MODAL_SUBMIT: P,
        USER_SETTINGS_MODAL_SUBMIT_FAILURE: U,
        USER_SETTINGS_MODAL_SET_SECTION: D,
        USER_SETTINGS_MODAL_CLEAR_SUBSECTION: L,
        USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: x,
        USER_SETTINGS_MODAL_UPDATE_ACCOUNT: w,
        USER_SETTINGS_MODAL_SUBMIT_COMPLETE: k,
        USER_SETTINGS_MODAL_RESET: M
    }));
