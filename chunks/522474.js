n.d(t, { Z: () => ee }),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(831579),
    n(415506);
var r,
    i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(748721),
    c = n(442837),
    u = n(570140),
    d = n(710845),
    f = n(41534),
    p = n(837268),
    _ = n(857192),
    m = n(358085),
    h = n(998502),
    g = n(228488),
    E = n(248977),
    b = n(981631);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = new d.Z("PopoutWindowStore"),
    C = {},
    N = {},
    P = {},
    R = {},
    w = {},
    D = new Set(),
    x = "app-mount",
    L = () => $.emitChange(),
    j = s().debounce(L, 150),
    M = !1;
function k(e, t) {
    let n = t.document,
        r = n.head;
    for (let e of (a()(null != r, "Body for popout window is null!"), document.querySelectorAll("style"))) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
}
function U(e) {
    let t = P[e];
    null == t ||
        t.closed ||
        (C[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!m.isPlatformEmbedded && N[e],
        });
}
function G(e) {
    A.info("Unmounting popout window", e);
    let t = P[e];
    a()(null != t, "Popout window was null during unmount"),
        t.removeEventListener("focus", L),
        t.removeEventListener("blur", L),
        t.removeEventListener("resize", j);
    let n = R[e];
    a()(null != n, "Window root was null while unmounting"),
        n.unmount(),
        delete P[e],
        delete N[e],
        delete w[e],
        delete R[e];
}
function Z(e, t, r) {
    let i = e.document,
        o = new URL(t).origin,
        s = new URL("".concat(window.location.protocol, "//").concat(window.location.host)).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : "";
    if (o !== s && o !== l) return void A.warn("Not injecting stylesheet, unrecognized origin", o);
    let c = i.createElement("link");
    (c.href = t),
        (c.rel = "stylesheet"),
        (c.integrity = r),
        a()(null != i.head, "Document head was null"),
        i.head.appendChild(c);
}
function B(e, t) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) Z(t, e.href, e.integrity);
}
function F(e) {
    let t = P[e],
        n = w[e];
    if (null == t) return void A.warn("Failed to open window", e);
    let r = t.document;
    (0, g.uF)(r, L),
        t.addEventListener("focus", L),
        t.addEventListener("blur", L),
        t.addEventListener("resize", j),
        M ? k(e, t) : B(e, t);
    let i = (0, l.createRoot)(r.getElementById(x));
    a()(null != i, "No render target for popout!"), (R[e] = i), i.render(n(e));
}
function V(e) {
    let { key: t, features: n, render: r } = e;
    if (m.isPlatformEmbedded && !h.ZP.supportsFeature(b.eRX.POPOUT_WINDOWS))
        throw Error("Popout windows not supported on this native module version!");
    let i = !0 === n.outOfProcessOverlay,
        a = P[t],
        o = null != a && !a.closed;
    if (o && !i) return m.isPlatformEmbedded ? h.ZP.focus(t) : null != a && a.focus(), !1;
    if (o && i) return A.info("Already has open window, skipping focus"), !1;
    let { defaultWidth: s, defaultHeight: l, defaultAlwaysOnTop: c = !1 } = n,
        u = I(n, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]),
        d = S(O({}, u), {
            width: null != s ? s : u.width,
            height: null != l ? l : u.height,
        }),
        _ = c,
        g = C[t];
    if (null != g) {
        let { width: e, height: t, x: n, y: r, alwaysOnTop: i } = g;
        (_ = null != i ? i : c),
            (d = S(O({}, d), {
                width: null != e && 0 !== e ? e : s,
                height: null != t && 0 !== t ? t : l,
                left: n,
                top: r,
            }));
    }
    let y = (0, E.Z)(d);
    A.info("Opening popout window", {
        key: t,
        encodedFeatures: y,
    });
    let v = window.open(b.Z5c.POPOUT_WINDOW, t, y);
    try {
        v.windowKey = t;
    } catch (e) {
        throw (
            ((0, f.D1)(e, i ? p.gl.OutOfProcess : null, {
                extra: {
                    windowKey: t,
                    totalWindowCount: Object.keys(P).length,
                    features: d,
                    encodedFeatures: y,
                    isPlatformEmbedded: m.isPlatformEmbedded,
                },
            }),
            e)
        );
    }
    i ? A.verbose("Opening out of process overlay window", t) : null == v || v.focus(),
        (P[t] = v),
        (w[t] = r),
        m.isPlatformEmbedded && (h.ZP.setAlwaysOnTop(t, _), (N[t] = _), h.ZP.isAlwaysOnTop(t).then((e) => (N[t] = e))),
        D.add(t);
}
function H(e) {
    D.has(e) && (F(e), D.delete(e), $.emitChange());
}
function Y(e) {
    let t = P[e];
    null != t &&
        (t.closed || U(e),
        G(e),
        setTimeout(() => {
            K(t);
        }, 100),
        $.emitChange());
}
function W(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case b.l9w.LOADED:
                return H(n.key);
            case b.l9w.UNLOADED:
                return Y(n.key);
        }
}
function K(e) {
    if (null != e && !e.closed)
        try {
            e.close();
        } catch (e) {
            A.error("Error closing popout window", e);
        }
}
function z(e) {
    let { key: t } = e,
        n = P[t];
    null != n && !n.closed && (U(t), _.default.preventPopoutClose || K(n));
}
function q() {
    for (let e of Object.keys(P)) {
        let t = P[e];
        null != t && K(t);
    }
}
function X(e) {
    let { key: t, alwaysOnTop: n } = e;
    m.isPlatformEmbedded && (h.ZP.setAlwaysOnTop(t, n), (N[t] = n), h.ZP.isAlwaysOnTop(t).then((e) => (N[t] = e)));
}
function Q(e) {
    let { url: t, integrity: n } = e;
    for (let e of Object.values(P)) null == e || e.closed || Z(e, t, n);
}
class J extends (r = c.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(_.default),
            window.addEventListener("message", W),
            window.addEventListener("beforeunload", q),
            (C = null != e ? e : {});
    }
    getWindow(e) {
        return P[e];
    }
    getWindowState(e) {
        return C[e];
    }
    getWindowKeys() {
        return Object.keys(P);
    }
    getWindowOpen(e) {
        let t = P[e];
        return null != t && !t.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!N[e];
    }
    getWindowFocused(e) {
        var t, n;
        let r = P[e];
        return null != (n = null == r || null == (t = r.document) ? void 0 : t.hasFocus()) && n;
    }
    getWindowVisible(e) {
        var t;
        let n = P[e];
        return (null == n || null == (t = n.document) ? void 0 : t.visibilityState) === "visible";
    }
    getState() {
        return C;
    }
    isWindowFullyInitialized(e) {
        return null != P[e] && null != R[e] && null != w[e];
    }
    isWindowFullScreen(e) {
        var t, n;
        let r = P[e];
        return (null == r || null == (n = r.document) || null == (t = n.fullscreenElement) ? void 0 : t.id) === x;
    }
    unmountWindow(e) {
        return (
            this.isWindowFullyInitialized(e) || A.warn("Attempted to unmount partially initialized window ".concat(e)),
            Y(e)
        );
    }
}
y(J, "displayName", "PopoutWindowStore"), y(J, "persistKey", "PopoutWindowStore");
let $ = new J(u.Z, {
        POPOUT_WINDOW_OPEN: V,
        POPOUT_WINDOW_ADD_STYLESHEET: Q,
        POPOUT_WINDOW_CLOSE: z,
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: X,
        LOGOUT: q,
    }),
    ee = $;
