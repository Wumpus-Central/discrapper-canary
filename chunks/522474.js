var i,
    a = r(47120);
var o = r(315314);
var s = r(610138);
var l = r(216116);
var u = r(78328);
var c = r(815648);
var d = r(519149);
var f = r(411104);
var p = r(512722),
    h = r.n(p),
    _ = r(392711),
    m = r.n(_),
    g = r(616254),
    E = r(442837),
    v = r(570140),
    y = r(710845),
    b = r(857192),
    I = r(358085),
    T = r(998502),
    S = r(228488),
    A = r(248977),
    C = r(981631);
function N(e, n, r) {
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
let R = new y.Z('PopoutWindowStore'),
    O = {},
    D = {},
    x = {},
    L = {},
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
function Z(e) {
    let n = x[e];
    null != n &&
        !n.closed &&
        (O[e] = {
            x: n.screenX,
            y: n.screenY,
            width: n.innerWidth,
            height: n.innerHeight,
            alwaysOnTop: !!I.isPlatformEmbedded && D[e]
        });
}
function F(e) {
    let n = x[e];
    h()(null != n, 'Popout window was null during unmount'), n.removeEventListener('focus', k), n.removeEventListener('blur', k), n.removeEventListener('resize', U);
    let r = L[e];
    h()(null != r, 'Window root was null while unmounting'), r.unmount(), delete x[e], delete D[e], delete w[e], delete L[e];
}
function V(e, n, i) {
    let a = e.document,
        o = new URL(n).origin,
        s = new URL(''.concat(window.location.protocol, '//').concat(window.location.host)).origin,
        l = URL.canParse(r.p) ? new URL(r.p).origin : '';
    if (o !== s && o !== l) {
        R.warn('Not injecting stylesheet, unrecognized origin', o);
        return;
    }
    let u = a.createElement('link');
    (u.href = n), (u.rel = 'stylesheet'), (u.integrity = i), h()(null != a.head, 'Document head was null'), a.head.appendChild(u);
}
function j(e, n) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) V(n, e.href, e.integrity);
}
function H(e) {
    let n = x[e],
        r = w[e];
    if (null == n) {
        R.warn('Failed to open window', e);
        return;
    }
    let i = n.document;
    (0, S.uF)(i, k), n.addEventListener('focus', k), n.addEventListener('blur', k), n.addEventListener('resize', U), B ? G(e, n) : j(e, n);
    let a = (0, g.createRoot)(i.getElementById(M));
    h()(null != a, 'No render target for popout!'), (L[e] = a), a.render(r(e));
}
function Y(e) {
    let { key: n, features: r, render: i } = e;
    if (I.isPlatformEmbedded && !T.ZP.supportsFeature(C.eRX.POPOUT_WINDOWS)) throw Error('Popout windows not supported on this native module version!');
    let a = !0 === r.outOfProcessOverlay,
        o = x[n],
        s = null != o && !o.closed;
    if (s && !a) return I.isPlatformEmbedded ? T.ZP.focus(n) : null != o && o.focus(), !1;
    if (s && a) return R.info('Already has open window, skipping focus'), !1;
    let { defaultWidth: l, defaultHeight: u, defaultAlwaysOnTop: c = !1, ...d } = r,
        f = d,
        p = c,
        h = O[n];
    if (null != h) {
        let { width: e, height: n, x: r, y: i, alwaysOnTop: a } = h;
        (p = null != a ? a : c),
            (f = {
                width: null != e && 0 !== e ? e : l,
                height: null != n && 0 !== n ? n : u,
                left: r,
                top: i,
                ...f
            });
    }
    let _ = window.open(C.Z5c.POPOUT_WINDOW, n, (0, A.Z)(f));
    (_.windowKey = n), !a && (null == _ || _.focus()), (x[n] = _), (w[n] = i), I.isPlatformEmbedded && (T.ZP.setAlwaysOnTop(n, p), (D[n] = p), T.ZP.isAlwaysOnTop(n).then((e) => (D[n] = e))), P.add(n);
}
function W(e) {
    P.has(e) && (H(e), P.delete(e), ee.emitChange());
}
function K(e) {
    let n = x[e];
    null != n && (!n.closed && Z(e), setTimeout(() => n.close(), 100), F(e), ee.emitChange());
}
function z(e) {
    let { data: n } = e;
    if (!(n instanceof Object && n.discordPopoutEvent instanceof Object)) return;
    let r = n.discordPopoutEvent;
    if (null != r.key)
        switch (r.type) {
            case C.l9w.LOADED:
                return W(r.key);
            case C.l9w.UNLOADED:
                return K(r.key);
        }
}
function q(e) {
    let { key: n } = e,
        r = x[n];
    null != r && !r.closed && (Z(n), !b.default.preventPopoutClose && r.close());
}
function Q() {
    for (let e of Object.keys(x)) {
        let n = x[e];
        null != n && n.close();
    }
}
function X(e) {
    let { key: n, alwaysOnTop: r } = e;
    I.isPlatformEmbedded && (T.ZP.setAlwaysOnTop(n, r), (D[n] = r), T.ZP.isAlwaysOnTop(n).then((e) => (D[n] = e)));
}
function J(e) {
    let { url: n, integrity: r } = e;
    for (let e of Object.values(x)) null != e && !e.closed && V(e, n, r);
}
class $ extends (i = E.ZP.PersistedStore) {
    initialize(e) {
        window.addEventListener('message', z), window.addEventListener('beforeunload', Q), (O = null != e ? e : {});
    }
    getWindow(e) {
        return x[e];
    }
    getWindowState(e) {
        return O[e];
    }
    getWindowKeys() {
        return Object.keys(x);
    }
    getWindowOpen(e) {
        let n = x[e];
        return null != n && !n.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!D[e];
    }
    getWindowFocused(e) {
        var n, r;
        let i = x[e];
        return null !== (r = null == i ? void 0 : null === (n = i.document) || void 0 === n ? void 0 : n.hasFocus()) && void 0 !== r && r;
    }
    getWindowVisible(e) {
        var n;
        let r = x[e];
        return (null == r ? void 0 : null === (n = r.document) || void 0 === n ? void 0 : n.visibilityState) === 'visible';
    }
    getState() {
        return O;
    }
    unmountWindow(e) {
        return K(e);
    }
}
N($, 'displayName', 'PopoutWindowStore'), N($, 'persistKey', 'PopoutWindowStore');
let ee = new $(v.Z, {
    POPOUT_WINDOW_OPEN: Y,
    POPOUT_WINDOW_ADD_STYLESHEET: J,
    POPOUT_WINDOW_CLOSE: q,
    POPOUT_WINDOW_SET_ALWAYS_ON_TOP: X,
    LOGOUT: Q
});
n.Z = ee;
