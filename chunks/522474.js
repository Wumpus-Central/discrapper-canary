var i,
    a = r(47120);
var s = r(315314);
var o = r(610138);
var l = r(216116);
var u = r(78328);
var c = r(815648);
var d = r(519149);
var f = r(411104);
var _ = r(512722),
    h = r.n(_),
    p = r(392711),
    m = r.n(p),
    g = r(616254),
    E = r(442837),
    v = r(570140),
    I = r(710845),
    T = r(857192),
    b = r(358085),
    y = r(998502),
    S = r(228488),
    A = r(248977),
    N = r(981631);
function C(e, n, r) {
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
let R = new I.Z('PopoutWindowStore'),
    O = {},
    D = {},
    L = {},
    x = {},
    w = {},
    P = new Set(),
    M = 'app-mount',
    k = () => ee.emitChange(),
    U = m().debounce(k, 150),
    B = !1;
function G(e, n) {
    let r = n.document,
        i = r.body;
    for (let e of (h()(null != i, 'Body for popout window is null!'), document.querySelectorAll('style'))) {
        let n = r.importNode(e, !0);
        i.appendChild(n);
    }
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) {
        let n = r.importNode(e, !0);
        i.appendChild(n);
    }
}
function F(e) {
    let n = L[e];
    null != n &&
        !n.closed &&
        (O[e] = {
            x: n.screenX,
            y: n.screenY,
            width: n.innerWidth,
            height: n.innerHeight,
            alwaysOnTop: !!b.isPlatformEmbedded && D[e]
        });
}
function Z(e) {
    let n = L[e];
    h()(null != n, 'Popout window was null during unmount'), n.removeEventListener('focus', k), n.removeEventListener('blur', k), n.removeEventListener('resize', U);
    let r = x[e];
    h()(null != r, 'Window root was null while unmounting'), r.unmount(), delete L[e], delete D[e], delete w[e], delete x[e];
}
function V(e, n, i) {
    let a = e.document,
        s = new URL(n).origin,
        o = new URL(''.concat(window.location.protocol, '//').concat(window.location.host)).origin,
        l = URL.canParse(r.p) ? new URL(r.p).origin : '';
    if (s !== o && s !== l) {
        R.warn('Not injecting stylesheet, unrecognized origin', s);
        return;
    }
    let u = a.createElement('link');
    (u.href = n), (u.rel = 'stylesheet'), (u.integrity = i), h()(null != a.head, 'Document head was null'), a.head.appendChild(u);
}
function j(e, n) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) V(n, e.href, e.integrity);
}
function H(e) {
    let n = L[e],
        r = w[e];
    if (null == n) {
        R.warn('Failed to open window', e);
        return;
    }
    let i = n.document;
    (0, S.uF)(i, k), n.addEventListener('focus', k), n.addEventListener('blur', k), n.addEventListener('resize', U), B ? G(e, n) : j(e, n);
    let a = (0, g.createRoot)(i.getElementById(M));
    h()(null != a, 'No render target for popout!'), (x[e] = a), a.render(r(e));
}
function Y(e) {
    let { key: n, features: r, render: i } = e;
    if (b.isPlatformEmbedded && !y.ZP.supportsFeature(N.eRX.POPOUT_WINDOWS)) throw Error('Popout windows not supported on this native module version!');
    let a = !0 === r.outOfProcessOverlay,
        s = L[n],
        o = null != s && !s.closed;
    if (o && !a) return b.isPlatformEmbedded ? y.ZP.focus(n) : null != s && s.focus(), !1;
    if (o && a) return R.info('Already has open window, skipping focus'), !1;
    let { defaultWidth: l, defaultHeight: u, defaultAlwaysOnTop: c = !1, ...d } = r,
        f = d,
        _ = c,
        h = O[n];
    if (null != h) {
        let { width: e, height: n, x: r, y: i, alwaysOnTop: a } = h;
        (_ = null != a ? a : c),
            (f = {
                width: null != e && 0 !== e ? e : l,
                height: null != n && 0 !== n ? n : u,
                left: r,
                top: i,
                ...f
            });
    }
    let p = window.open(N.Z5c.POPOUT_WINDOW, n, (0, A.Z)(f));
    (p.windowKey = n), !a && (null == p || p.focus()), (L[n] = p), (w[n] = i), b.isPlatformEmbedded && (y.ZP.setAlwaysOnTop(n, _), (D[n] = _), y.ZP.isAlwaysOnTop(n).then((e) => (D[n] = e))), P.add(n);
}
function W(e) {
    P.has(e) && (H(e), P.delete(e), ee.emitChange());
}
function K(e) {
    let n = L[e];
    null != n && (!n.closed && F(e), setTimeout(() => n.close(), 100), Z(e), ee.emitChange());
}
function z(e) {
    let { data: n } = e;
    if (!(n instanceof Object && n.discordPopoutEvent instanceof Object)) return;
    let r = n.discordPopoutEvent;
    if (null != r.key)
        switch (r.type) {
            case N.l9w.LOADED:
                return W(r.key);
            case N.l9w.UNLOADED:
                return K(r.key);
        }
}
function q(e) {
    let { key: n } = e,
        r = L[n];
    null != r && !r.closed && (F(n), !T.default.preventPopoutClose && r.close());
}
function Q() {
    for (let e of Object.keys(L)) {
        let n = L[e];
        null != n && n.close();
    }
}
function X(e) {
    let { key: n, alwaysOnTop: r } = e;
    b.isPlatformEmbedded && (y.ZP.setAlwaysOnTop(n, r), (D[n] = r), y.ZP.isAlwaysOnTop(n).then((e) => (D[n] = e)));
}
function J(e) {
    let { url: n, integrity: r } = e;
    for (let e of Object.values(L)) null != e && !e.closed && V(e, n, r);
}
class $ extends (i = E.ZP.PersistedStore) {
    initialize(e) {
        window.addEventListener('message', z), window.addEventListener('beforeunload', Q), (O = null != e ? e : {});
    }
    getWindow(e) {
        return L[e];
    }
    getWindowState(e) {
        return O[e];
    }
    getWindowKeys() {
        return Object.keys(L);
    }
    getWindowOpen(e) {
        let n = L[e];
        return null != n && !n.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!D[e];
    }
    getWindowFocused(e) {
        var n, r;
        let i = L[e];
        return null !== (r = null == i ? void 0 : null === (n = i.document) || void 0 === n ? void 0 : n.hasFocus()) && void 0 !== r && r;
    }
    getWindowVisible(e) {
        var n;
        let r = L[e];
        return (null == r ? void 0 : null === (n = r.document) || void 0 === n ? void 0 : n.visibilityState) === 'visible';
    }
    getState() {
        return O;
    }
    unmountWindow(e) {
        return K(e);
    }
}
C($, 'displayName', 'PopoutWindowStore'), C($, 'persistKey', 'PopoutWindowStore');
let ee = new $(v.Z, {
    POPOUT_WINDOW_OPEN: Y,
    POPOUT_WINDOW_ADD_STYLESHEET: J,
    POPOUT_WINDOW_CLOSE: q,
    POPOUT_WINDOW_SET_ALWAYS_ON_TOP: X,
    LOGOUT: Q
});
n.Z = ee;
