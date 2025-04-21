n.d(t, { Z: () => J }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(831579), n(415506);
var r,
    i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(616254),
    c = n(442837),
    u = n(570140),
    d = n(710845),
    f = n(857192),
    _ = n(358085),
    p = n(998502),
    h = n(228488),
    m = n(248977),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = new d.Z('PopoutWindowStore'),
    T = {},
    A = {},
    N = {},
    C = {},
    R = {},
    P = new Set(),
    w = 'app-mount',
    D = () => X.emitChange(),
    L = s().debounce(D, 150),
    x = !1;
function M(e, t) {
    let n = t.document,
        r = n.body;
    for (let e of (a()(null != r, 'Body for popout window is null!'), document.querySelectorAll('style'))) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
}
function k(e) {
    let t = N[e];
    null == t ||
        t.closed ||
        (T[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!_.isPlatformEmbedded && A[e]
        });
}
function j(e) {
    let t = N[e];
    a()(null != t, 'Popout window was null during unmount'), t.removeEventListener('focus', D), t.removeEventListener('blur', D), t.removeEventListener('resize', L);
    let n = C[e];
    a()(null != n, 'Window root was null while unmounting'), n.unmount(), delete N[e], delete A[e], delete R[e], delete C[e];
}
function U(e, t, r) {
    let i = e.document,
        o = new URL(t).origin,
        s = new URL(''.concat(window.location.protocol, '//').concat(window.location.host)).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : '';
    if (o !== s && o !== l) return void S.warn('Not injecting stylesheet, unrecognized origin', o);
    let c = i.createElement('link');
    (c.href = t), (c.rel = 'stylesheet'), (c.integrity = r), a()(null != i.head, 'Document head was null'), i.head.appendChild(c);
}
function G(e, t) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) U(t, e.href, e.integrity);
}
function B(e) {
    let t = N[e],
        n = R[e];
    if (null == t) return void S.warn('Failed to open window', e);
    let r = t.document;
    (0, h.uF)(r, D), t.addEventListener('focus', D), t.addEventListener('blur', D), t.addEventListener('resize', L), x ? M(e, t) : G(e, t);
    let i = (0, l.createRoot)(r.getElementById(w));
    a()(null != i, 'No render target for popout!'), (C[e] = i), i.render(n(e));
}
function F(e) {
    let { key: t, features: n, render: r } = e;
    if (_.isPlatformEmbedded && !p.ZP.supportsFeature(g.eRX.POPOUT_WINDOWS)) throw Error('Popout windows not supported on this native module version!');
    let i = !0 === n.outOfProcessOverlay,
        a = N[t],
        o = null != a && !a.closed;
    if (o && !i) return _.isPlatformEmbedded ? p.ZP.focus(t) : null != a && a.focus(), !1;
    if (o && i) return S.info('Already has open window, skipping focus'), !1;
    let { defaultWidth: s, defaultHeight: l, defaultAlwaysOnTop: c = !1 } = n,
        u = O(n, ['defaultWidth', 'defaultHeight', 'defaultAlwaysOnTop']),
        d = v(b({}, u), {
            width: null != s ? s : u.width,
            height: null != l ? l : u.height
        }),
        f = c,
        h = T[t];
    if (null != h) {
        let { width: e, height: t, x: n, y: r, alwaysOnTop: i } = h;
        (f = null != i ? i : c),
            (d = v(b({}, d), {
                width: null != e && 0 !== e ? e : s,
                height: null != t && 0 !== t ? t : l,
                left: n,
                top: r
            }));
    }
    let E = window.open(g.Z5c.POPOUT_WINDOW, t, (0, m.Z)(d));
    (E.windowKey = t), i ? S.verbose('Opening out of process overlay window', t) : null == E || E.focus(), (N[t] = E), (R[t] = r), _.isPlatformEmbedded && (p.ZP.setAlwaysOnTop(t, f), (A[t] = f), p.ZP.isAlwaysOnTop(t).then((e) => (A[t] = e))), P.add(t);
}
function V(e) {
    P.has(e) && (B(e), P.delete(e), X.emitChange());
}
function Z(e) {
    let t = N[e];
    null != t &&
        (t.closed || k(e),
        j(e),
        setTimeout(() => {
            Y(t);
        }, 100),
        X.emitChange());
}
function H(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case g.l9w.LOADED:
                return V(n.key);
            case g.l9w.UNLOADED:
                return Z(n.key);
        }
}
function Y(e) {
    if (null != e && !e.closed)
        try {
            e.close();
        } catch (e) {
            S.error('Error closing popout window', e);
        }
}
function W(e) {
    let { key: t } = e,
        n = N[t];
    null != n && !n.closed && (k(t), f.default.preventPopoutClose || Y(n));
}
function K() {
    for (let e of Object.keys(N)) {
        let t = N[e];
        null != t && Y(t);
    }
}
function z(e) {
    let { key: t, alwaysOnTop: n } = e;
    _.isPlatformEmbedded && (p.ZP.setAlwaysOnTop(t, n), (A[t] = n), p.ZP.isAlwaysOnTop(t).then((e) => (A[t] = e)));
}
function q(e) {
    let { url: t, integrity: n } = e;
    for (let e of Object.values(N)) null == e || e.closed || U(e, t, n);
}
class Q extends (r = c.ZP.PersistedStore) {
    initialize(e) {
        window.addEventListener('message', H), window.addEventListener('beforeunload', K), (T = null != e ? e : {});
    }
    getWindow(e) {
        return N[e];
    }
    getWindowState(e) {
        return T[e];
    }
    getWindowKeys() {
        return Object.keys(N);
    }
    getWindowOpen(e) {
        let t = N[e];
        return null != t && !t.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!A[e];
    }
    getWindowFocused(e) {
        var t, n;
        let r = N[e];
        return null != (n = null == r || null == (t = r.document) ? void 0 : t.hasFocus()) && n;
    }
    getWindowVisible(e) {
        var t;
        let n = N[e];
        return (null == n || null == (t = n.document) ? void 0 : t.visibilityState) === 'visible';
    }
    getState() {
        return T;
    }
    isWindowFullyInitialized(e) {
        return null != N[e] && null != C[e] && null != R[e];
    }
    isWindowFullScreen(e) {
        var t, n;
        let r = N[e];
        return (null == r || null == (n = r.document) || null == (t = n.fullscreenElement) ? void 0 : t.id) === w;
    }
    unmountWindow(e) {
        return this.isWindowFullyInitialized(e) || S.warn('Attempted to unmount partially initialized window '.concat(e)), Z(e);
    }
}
E(Q, 'displayName', 'PopoutWindowStore'), E(Q, 'persistKey', 'PopoutWindowStore');
let X = new Q(u.Z, {
        POPOUT_WINDOW_OPEN: F,
        POPOUT_WINDOW_ADD_STYLESHEET: q,
        POPOUT_WINDOW_CLOSE: W,
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: z,
        LOGOUT: K
    }),
    J = X;
