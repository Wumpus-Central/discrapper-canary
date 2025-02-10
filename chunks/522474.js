n.d(t, { Z: () => K }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(519149), n(411104);
var i,
    r = n(512722),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(616254),
    u = n(442837),
    c = n(570140),
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
let v = new d.Z('PopoutWindowStore'),
    y = {},
    I = {},
    T = {},
    b = {},
    S = {},
    A = new Set(),
    N = 'app-mount',
    C = () => W.emitChange(),
    R = o().debounce(C, 150),
    O = !1;
function D(e, t) {
    let n = t.document,
        i = n.body;
    for (let e of (a()(null != i, 'Body for popout window is null!'), document.querySelectorAll('style'))) {
        let t = n.importNode(e, !0);
        i.appendChild(t);
    }
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) {
        let t = n.importNode(e, !0);
        i.appendChild(t);
    }
}
function L(e) {
    let t = T[e];
    null == t ||
        t.closed ||
        (y[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!_.isPlatformEmbedded && I[e]
        });
}
function x(e) {
    let t = T[e];
    a()(null != t, 'Popout window was null during unmount'), t.removeEventListener('focus', C), t.removeEventListener('blur', C), t.removeEventListener('resize', R);
    let n = b[e];
    a()(null != n, 'Window root was null while unmounting'), n.unmount(), delete T[e], delete I[e], delete S[e], delete b[e];
}
function P(e, t, i) {
    let r = e.document,
        s = new URL(t).origin,
        o = new URL(''.concat(window.location.protocol, '//').concat(window.location.host)).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : '';
    if (s !== o && s !== l) {
        v.warn('Not injecting stylesheet, unrecognized origin', s);
        return;
    }
    let u = r.createElement('link');
    (u.href = t), (u.rel = 'stylesheet'), (u.integrity = i), a()(null != r.head, 'Document head was null'), r.head.appendChild(u);
}
function w(e, t) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) P(t, e.href, e.integrity);
}
function M(e) {
    let t = T[e],
        n = S[e];
    if (null == t) {
        v.warn('Failed to open window', e);
        return;
    }
    let i = t.document;
    (0, h.uF)(i, C), t.addEventListener('focus', C), t.addEventListener('blur', C), t.addEventListener('resize', R), O ? D(e, t) : w(e, t);
    let r = (0, l.createRoot)(i.getElementById(N));
    a()(null != r, 'No render target for popout!'), (b[e] = r), r.render(n(e));
}
function k(e) {
    let { key: t, features: n, render: i } = e;
    if (_.isPlatformEmbedded && !p.ZP.supportsFeature(g.eRX.POPOUT_WINDOWS)) throw Error('Popout windows not supported on this native module version!');
    let r = !0 === n.outOfProcessOverlay,
        a = T[t],
        s = null != a && !a.closed;
    if (s && !r) return _.isPlatformEmbedded ? p.ZP.focus(t) : null != a && a.focus(), !1;
    if (s && r) return v.info('Already has open window, skipping focus'), !1;
    let { defaultWidth: o, defaultHeight: l, defaultAlwaysOnTop: u = !1, ...c } = n,
        d = c,
        f = u,
        h = y[t];
    if (null != h) {
        let { width: e, height: t, x: n, y: i, alwaysOnTop: r } = h;
        (f = null != r ? r : u),
            (d = {
                width: null != e && 0 !== e ? e : o,
                height: null != t && 0 !== t ? t : l,
                left: n,
                top: i,
                ...d
            });
    }
    let E = window.open(g.Z5c.POPOUT_WINDOW, t, (0, m.Z)(d));
    (E.windowKey = t), r || null == E || E.focus(), (T[t] = E), (S[t] = i), _.isPlatformEmbedded && (p.ZP.setAlwaysOnTop(t, f), (I[t] = f), p.ZP.isAlwaysOnTop(t).then((e) => (I[t] = e))), A.add(t);
}
function U(e) {
    A.has(e) && (M(e), A.delete(e), W.emitChange());
}
function G(e) {
    let t = T[e];
    null != t &&
        (t.closed || L(e),
        x(e),
        setTimeout(() => {
            Z(t);
        }, 100),
        W.emitChange());
}
function B(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case g.l9w.LOADED:
                return U(n.key);
            case g.l9w.UNLOADED:
                return G(n.key);
        }
}
function Z(e) {
    if (null != e && !e.closed)
        try {
            e.close();
        } catch (e) {
            v.error('Error closing popout window', e);
        }
}
function F(e) {
    let { key: t } = e,
        n = T[t];
    null == n || n.closed || (L(t), f.default.preventPopoutClose || Z(n));
}
function V() {
    for (let e of Object.keys(T)) {
        let t = T[e];
        null != t && Z(t);
    }
}
function j(e) {
    let { key: t, alwaysOnTop: n } = e;
    _.isPlatformEmbedded && (p.ZP.setAlwaysOnTop(t, n), (I[t] = n), p.ZP.isAlwaysOnTop(t).then((e) => (I[t] = e)));
}
function H(e) {
    let { url: t, integrity: n } = e;
    for (let e of Object.values(T)) null == e || e.closed || P(e, t, n);
}
class Y extends (i = u.ZP.PersistedStore) {
    initialize(e) {
        window.addEventListener('message', B), window.addEventListener('beforeunload', V), (y = null != e ? e : {});
    }
    getWindow(e) {
        return T[e];
    }
    getWindowState(e) {
        return y[e];
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
        let i = T[e];
        return null !== (n = null == i ? void 0 : null === (t = i.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n;
    }
    getWindowVisible(e) {
        var t;
        let n = T[e];
        return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === 'visible';
    }
    getState() {
        return y;
    }
    unmountWindow(e) {
        return G(e);
    }
}
E(Y, 'displayName', 'PopoutWindowStore'), E(Y, 'persistKey', 'PopoutWindowStore');
let W = new Y(c.Z, {
        POPOUT_WINDOW_OPEN: k,
        POPOUT_WINDOW_ADD_STYLESHEET: H,
        POPOUT_WINDOW_CLOSE: F,
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: j,
        LOGOUT: V
    }),
    K = W;
