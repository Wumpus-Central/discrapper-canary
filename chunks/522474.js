n.d(t, { Z: () => Q }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(519149), n(411104);
var r,
    i = n(512722),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(616254),
    c = n(442837),
    u = n(570140),
    d = n(710845),
    f = n(857192),
    p = n(358085),
    _ = n(998502),
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
function v(e) {
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
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = new d.Z('PopoutWindowStore'),
    S = {},
    I = {},
    T = {},
    N = {},
    A = {},
    C = new Set(),
    R = 'app-mount',
    P = () => q.emitChange(),
    w = s().debounce(P, 150),
    D = !1;
function x(e, t) {
    let n = t.document,
        r = n.body;
    for (let e of (o()(null != r, 'Body for popout window is null!'), document.querySelectorAll('style'))) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
}
function L(e) {
    let t = T[e];
    null == t ||
        t.closed ||
        (S[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!p.isPlatformEmbedded && I[e]
        });
}
function M(e) {
    let t = T[e];
    o()(null != t, 'Popout window was null during unmount'), t.removeEventListener('focus', P), t.removeEventListener('blur', P), t.removeEventListener('resize', w);
    let n = N[e];
    o()(null != n, 'Window root was null while unmounting'), n.unmount(), delete T[e], delete I[e], delete A[e], delete N[e];
}
function k(e, t, r) {
    let i = e.document,
        a = new URL(t).origin,
        s = new URL(''.concat(window.location.protocol, '//').concat(window.location.host)).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : '';
    if (a !== s && a !== l) {
        O.warn('Not injecting stylesheet, unrecognized origin', a);
        return;
    }
    let c = i.createElement('link');
    (c.href = t), (c.rel = 'stylesheet'), (c.integrity = r), o()(null != i.head, 'Document head was null'), i.head.appendChild(c);
}
function j(e, t) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) k(t, e.href, e.integrity);
}
function U(e) {
    let t = T[e],
        n = A[e];
    if (null == t) {
        O.warn('Failed to open window', e);
        return;
    }
    let r = t.document;
    (0, h.uF)(r, P), t.addEventListener('focus', P), t.addEventListener('blur', P), t.addEventListener('resize', w), D ? x(e, t) : j(e, t);
    let i = (0, l.createRoot)(r.getElementById(R));
    o()(null != i, 'No render target for popout!'), (N[e] = i), i.render(n(e));
}
function G(e) {
    let { key: t, features: n, render: r } = e;
    if (p.isPlatformEmbedded && !_.ZP.supportsFeature(g.eRX.POPOUT_WINDOWS)) throw Error('Popout windows not supported on this native module version!');
    let i = !0 === n.outOfProcessOverlay,
        o = T[t],
        a = null != o && !o.closed;
    if (a && !i) return p.isPlatformEmbedded ? _.ZP.focus(t) : null != o && o.focus(), !1;
    if (a && i) return O.info('Already has open window, skipping focus'), !1;
    let { defaultWidth: s, defaultHeight: l, defaultAlwaysOnTop: c = !1 } = n,
        u = b(n, ['defaultWidth', 'defaultHeight', 'defaultAlwaysOnTop']),
        d = c,
        f = S[t];
    if (null != f) {
        let { width: e, height: t, x: n, y: r, alwaysOnTop: i } = f;
        (d = null != i ? i : c),
            (u = v(
                {
                    width: null != e && 0 !== e ? e : s,
                    height: null != t && 0 !== t ? t : l,
                    left: n,
                    top: r
                },
                u
            ));
    }
    let h = window.open(g.Z5c.POPOUT_WINDOW, t, (0, m.Z)(u));
    (h.windowKey = t), i || null == h || h.focus(), (T[t] = h), (A[t] = r), p.isPlatformEmbedded && (_.ZP.setAlwaysOnTop(t, d), (I[t] = d), _.ZP.isAlwaysOnTop(t).then((e) => (I[t] = e))), C.add(t);
}
function B(e) {
    C.has(e) && (U(e), C.delete(e), q.emitChange());
}
function Z(e) {
    let t = T[e];
    null != t &&
        (t.closed || L(e),
        M(e),
        setTimeout(() => {
            V(t);
        }, 100),
        q.emitChange());
}
function F(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case g.l9w.LOADED:
                return B(n.key);
            case g.l9w.UNLOADED:
                return Z(n.key);
        }
}
function V(e) {
    if (null != e && !e.closed)
        try {
            e.close();
        } catch (e) {
            O.error('Error closing popout window', e);
        }
}
function H(e) {
    let { key: t } = e,
        n = T[t];
    null == n || n.closed || (L(t), f.default.preventPopoutClose || V(n));
}
function W() {
    for (let e of Object.keys(T)) {
        let t = T[e];
        null != t && V(t);
    }
}
function Y(e) {
    let { key: t, alwaysOnTop: n } = e;
    p.isPlatformEmbedded && (_.ZP.setAlwaysOnTop(t, n), (I[t] = n), _.ZP.isAlwaysOnTop(t).then((e) => (I[t] = e)));
}
function K(e) {
    let { url: t, integrity: n } = e;
    for (let e of Object.values(T)) null == e || e.closed || k(e, t, n);
}
class z extends (r = c.ZP.PersistedStore) {
    initialize(e) {
        window.addEventListener('message', F), window.addEventListener('beforeunload', W), (S = null != e ? e : {});
    }
    getWindow(e) {
        return T[e];
    }
    getWindowState(e) {
        return S[e];
    }
    getWindowKeys() {
        return Object.keys(T);
    }
    getWindowOpen(e) {
        let t = T[e];
        return null != t && !t.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!I[e];
    }
    getWindowFocused(e) {
        var t, n;
        let r = T[e];
        return null !== (n = null == r ? void 0 : null === (t = r.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n;
    }
    getWindowVisible(e) {
        var t;
        let n = T[e];
        return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === 'visible';
    }
    getState() {
        return S;
    }
    unmountWindow(e) {
        return Z(e);
    }
}
E(z, 'displayName', 'PopoutWindowStore'), E(z, 'persistKey', 'PopoutWindowStore');
let q = new z(u.Z, {
        POPOUT_WINDOW_OPEN: G,
        POPOUT_WINDOW_ADD_STYLESHEET: K,
        POPOUT_WINDOW_CLOSE: H,
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: Y,
        LOGOUT: W
    }),
    Q = q;
