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
let R = {},
    O = {},
    D = {},
    L = {},
    x = {},
    w = new Set(),
    P = 'app-mount',
    M = () => $.emitChange(),
    k = m().debounce(M, 150),
    U = !1;
function B(e, n) {
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
function G(e) {
    let n = D[e];
    null != n &&
        !n.closed &&
        (R[e] = {
            x: n.screenX,
            y: n.screenY,
            width: n.innerWidth,
            height: n.innerHeight,
            alwaysOnTop: !!b.isPlatformEmbedded && O[e]
        });
}
function F(e) {
    let n = D[e];
    h()(null != n, 'Popout window was null during unmount'), n.removeEventListener('focus', M), n.removeEventListener('blur', M), n.removeEventListener('resize', k);
    let r = L[e];
    h()(null != r, 'Window root was null while unmounting'), r.unmount(), delete D[e], delete O[e], delete x[e], delete L[e];
}
function Z(e, n, i) {
    let a = e.document,
        s = new URL(n).origin,
        o = new URL(''.concat(window.location.protocol, '//').concat(window.location.host)).origin,
        l = URL.canParse(r.p) ? new URL(r.p).origin : '';
    if (s !== o && s !== l) {
        new I.Z('PopoutWindowStore').warn('Not injecting stylesheet, unrecognized origin', s);
        return;
    }
    let u = a.createElement('link');
    (u.href = n), (u.rel = 'stylesheet'), (u.integrity = i), h()(null != a.head, 'Document head was null'), a.head.appendChild(u);
}
function V(e, n) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) Z(n, e.href, e.integrity);
}
function j(e) {
    let n = D[e],
        r = x[e];
    if (null == n) {
        new I.Z('PopoutWindowStore').warn('Failed to open window', e);
        return;
    }
    let i = n.document;
    (0, S.uF)(i, M), n.addEventListener('focus', M), n.addEventListener('blur', M), n.addEventListener('resize', k), U ? B(e, n) : V(e, n);
    let a = (0, g.createRoot)(i.getElementById(P));
    h()(null != a, 'No render target for popout!'), (L[e] = a), a.render(r(e));
}
function H(e) {
    let { key: n, features: r, render: i } = e;
    if (b.isPlatformEmbedded && !y.ZP.supportsFeature(N.eRX.POPOUT_WINDOWS)) throw Error('Popout windows not supported on this native module version!');
    let a = D[n];
    if (null != a && !a.closed) return b.isPlatformEmbedded ? y.ZP.focus(n) : a.focus(), !1;
    let { defaultWidth: s, defaultHeight: o, defaultAlwaysOnTop: l = !1, ...u } = r,
        c = u,
        d = l,
        f = R[n];
    if (null != f) {
        let { width: e, height: n, x: r, y: i, alwaysOnTop: a } = f;
        (d = null != a ? a : l),
            (c = {
                width: null != e && 0 !== e ? e : s,
                height: null != n && 0 !== n ? n : o,
                left: r,
                top: i,
                ...c
            });
    }
    let _ = window.open(N.Z5c.POPOUT_WINDOW, n, (0, A.Z)(c));
    (_.windowKey = n), null == _ || _.focus(), (D[n] = _), (x[n] = i), b.isPlatformEmbedded && (y.ZP.setAlwaysOnTop(n, d), (O[n] = d), y.ZP.isAlwaysOnTop(n).then((e) => (O[n] = e))), w.add(n);
}
function Y(e) {
    w.has(e) && (j(e), w.delete(e), $.emitChange());
}
function W(e) {
    let n = D[e];
    null != n && (!n.closed && G(e), setTimeout(() => n.close(), 100), F(e), $.emitChange());
}
function K(e) {
    let { data: n } = e;
    if (!(n instanceof Object && n.discordPopoutEvent instanceof Object)) return;
    let r = n.discordPopoutEvent;
    if (null != r.key)
        switch (r.type) {
            case N.l9w.LOADED:
                return Y(r.key);
            case N.l9w.UNLOADED:
                return W(r.key);
        }
}
function z(e) {
    let { key: n } = e,
        r = D[n];
    null != r && !r.closed && (G(n), !T.default.preventPopoutClose && r.close());
}
function q() {
    for (let e of Object.keys(D)) {
        let n = D[e];
        null != n && n.close();
    }
}
function Q(e) {
    let { key: n, alwaysOnTop: r } = e;
    b.isPlatformEmbedded && (y.ZP.setAlwaysOnTop(n, r), (O[n] = r), y.ZP.isAlwaysOnTop(n).then((e) => (O[n] = e)));
}
function X(e) {
    let { url: n, integrity: r } = e;
    for (let e of Object.values(D)) null != e && !e.closed && Z(e, n, r);
}
class J extends (i = E.ZP.PersistedStore) {
    initialize(e) {
        window.addEventListener('message', K), window.addEventListener('beforeunload', q), (R = null != e ? e : {});
    }
    getWindow(e) {
        return D[e];
    }
    getWindowState(e) {
        return R[e];
    }
    getWindowKeys() {
        return Object.keys(D);
    }
    getWindowOpen(e) {
        let n = D[e];
        return null != n && !n.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!O[e];
    }
    getWindowFocused(e) {
        var n, r;
        let i = D[e];
        return null !== (r = null == i ? void 0 : null === (n = i.document) || void 0 === n ? void 0 : n.hasFocus()) && void 0 !== r && r;
    }
    getWindowVisible(e) {
        var n;
        let r = D[e];
        return (null == r ? void 0 : null === (n = r.document) || void 0 === n ? void 0 : n.visibilityState) === 'visible';
    }
    getState() {
        return R;
    }
    unmountWindow(e) {
        return W(e);
    }
}
C(J, 'displayName', 'PopoutWindowStore'), C(J, 'persistKey', 'PopoutWindowStore');
let $ = new J(v.Z, {
    POPOUT_WINDOW_OPEN: H,
    POPOUT_WINDOW_ADD_STYLESHEET: X,
    POPOUT_WINDOW_CLOSE: z,
    POPOUT_WINDOW_SET_ALWAYS_ON_TOP: Q,
    LOGOUT: q
});
n.Z = $;
