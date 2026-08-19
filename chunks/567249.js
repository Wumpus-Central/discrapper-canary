"use strict";
n.d(t, { A: () => G }), n(323874), n(14289), n(35956), n(596829);
var i = n(284009),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(379800),
    o = n(17928),
    d = n(228366),
    c = n(626584),
    u = n(777334),
    _ = n(41984),
    E = n(111162),
    A = n(723702),
    h = n(19575),
    I = n(475815),
    f = n(652215);
let p = new c.A("PopoutWindowStore"),
    T = {},
    m = {},
    g = {},
    S = {},
    N = {},
    C = new Set(),
    O = "app-mount";
function R() {
    return w.emitChange();
}
let L = s().debounce(R, 150);
function y(e) {
    let t = g[e];
    null == t ||
        t.closed ||
        (T[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!A.isPlatformEmbedded && m[e],
        });
}
function D(e, t, i) {
    let a = e.document,
        s = new URL(t).origin,
        l = new URL(`${window.location.protocol}//${window.location.host}`).origin,
        o = URL.canParse(n.p) ? new URL(n.p).origin : "";
    if (s !== l && s !== o) return void p.warn("Not injecting stylesheet, unrecognized origin", s);
    let d = a.createElement("link");
    (d.href = t),
        (d.rel = "stylesheet"),
        (d.integrity = i),
        r()(null != a.head, "Document head was null"),
        a.head.appendChild(d);
}
function v(e) {
    let t = g[e];
    if (null != t) {
        let n, i;
        t.closed || y(e),
            p.info("Unmounting popout window", e),
            (n = g[e]),
            r()(null != n, "Popout window was null during unmount"),
            n.removeEventListener("focus", R),
            n.removeEventListener("blur", R),
            n.removeEventListener("resize", L),
            (i = S[e]),
            r()(null != i, "Window root was null while unmounting"),
            i.unmount(),
            delete g[e],
            delete m[e],
            delete N[e],
            delete S[e],
            setTimeout(() => {
                M(t);
            }, 100),
            w.emitChange();
    }
}
function b(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case f.hK1.LOADED:
                var i;
                return (
                    (i = n.key),
                    void (
                        C.has(i) &&
                        (!(function (e) {
                            let t = g[e],
                                n = N[e];
                            if (null == t) return p.warn("Failed to open window", e);
                            let i = t.document;
                            (0, I.a3)(i, R),
                                t.addEventListener("focus", R),
                                t.addEventListener("blur", R),
                                t.addEventListener("resize", L);
                            for (let e of document.querySelectorAll('link[rel="stylesheet"]'))
                                D(t, e.href, e.integrity);
                            let a = (0, l.createRoot)(i.getElementById(O));
                            r()(null != a, "No render target for popout!"), (S[e] = a), a.render(n(e));
                        })(i),
                        C.delete(i),
                        w.emitChange())
                    )
                );
            case f.hK1.UNLOADED:
                return v(n.key);
        }
}
function M(e) {
    if (null != e && !e.closed)
        try {
            e.close();
        } catch (e) {
            p.error("Error closing popout window", e);
        }
}
function P() {
    for (let e of Object.keys(g)) {
        let t = g[e];
        null != t && M(t);
    }
}
class U extends o.Ay.PersistedStore {
    static displayName = "PopoutWindowStore";
    static persistKey = "PopoutWindowStore";
    initialize(e) {
        this.waitFor(E.default),
            window.addEventListener("message", b),
            window.addEventListener("beforeunload", P),
            (T = e ?? {});
    }
    getWindow(e) {
        return g[e];
    }
    getWindowState(e) {
        return T[e];
    }
    getWindowKeys() {
        return Object.keys(g);
    }
    getWindowOpen(e) {
        let t = g[e];
        return null != t && !t.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!m[e];
    }
    getWindowFocused(e) {
        let t = g[e];
        return t?.document?.hasFocus() ?? !1;
    }
    getWindowVisible(e) {
        let t = g[e];
        return t?.document?.visibilityState === "visible";
    }
    getState() {
        return T;
    }
    isWindowFullyInitialized(e) {
        return null != g[e] && null != S[e] && null != N[e];
    }
    isWindowFullScreen(e) {
        let t = g[e];
        return t?.document?.fullscreenElement?.id === O;
    }
    unmountWindow(e) {
        return (
            this.isWindowFullyInitialized(e) || p.warn(`Attempted to unmount partially initialized window ${e}`), v(e)
        );
    }
}
let w = new U(d.h, {
        POPOUT_WINDOW_OPEN: function (e) {
            let { key: t, features: n, render: i } = e;
            if (A.isPlatformEmbedded && !h.Ay.supportsFeature(f.BYE.POPOUT_WINDOWS))
                throw Error("Popout windows not supported on this native module version!");
            let r = !0 === n.outOfProcessOverlay,
                a = g[t],
                s = null != a && !a.closed;
            if (s && !r) return A.isPlatformEmbedded ? h.Ay.focus(t) : null != a && a.focus(), !1;
            if (s && r) return p.info("Already has open window, skipping focus"), !1;
            let { defaultWidth: l, defaultHeight: o, defaultAlwaysOnTop: d = !1, ...c } = n,
                E = { ...c, width: l ?? c.width, height: o ?? c.height },
                I = d,
                S = T[t];
            if (null != S) {
                let { width: e, height: t, x: n, y: i, alwaysOnTop: r } = S;
                (I = null != r ? r : d),
                    (E = {
                        ...E,
                        width: null != e && 0 !== e ? e : l,
                        height: null != t && 0 !== t ? t : o,
                        left: E.left ?? n,
                        top: E.top ?? i,
                    });
            }
            let O = (function (e) {
                let t = "";
                for (let n of Object.keys(e)) {
                    let i = e[n];
                    void 0 !== i && ("boolean" == typeof i && (i = i ? "yes" : "no"), (t += `${n}=${i},`));
                }
                return t;
            })(E);
            p.info("Opening popout window", { key: t, encodedFeatures: O });
            let R = window.open(f.BVt.POPOUT_WINDOW, t, O);
            if (null == R) return !1;
            try {
                R.windowKey = t;
            } catch (e) {
                throw (
                    ((0, u.pj)(e, r ? _.Ue.OutOfProcess : null, {
                        extra: {
                            windowKey: t,
                            totalWindowCount: Object.keys(g).length,
                            features: E,
                            encodedFeatures: O,
                            isPlatformEmbedded: A.isPlatformEmbedded,
                        },
                    }),
                    e)
                );
            }
            r ? p.verbose("Opening out of process overlay window", t) : R.focus(),
                (g[t] = R),
                (N[t] = i),
                A.isPlatformEmbedded &&
                    (h.Ay.setAlwaysOnTop(t, I), (m[t] = I), h.Ay.isAlwaysOnTop(t).then((e) => (m[t] = e))),
                C.add(t);
        },
        POPOUT_WINDOW_ADD_STYLESHEET: function (e) {
            let { url: t, integrity: n } = e;
            for (let e of Object.values(g)) null == e || e.closed || D(e, t, n);
        },
        POPOUT_WINDOW_CLOSE: function (e) {
            let { key: t } = e,
                n = g[t];
            null != n && !n.closed && (y(t), E.default.preventPopoutClose || M(n));
        },
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function (e) {
            let { key: t, alwaysOnTop: n } = e;
            A.isPlatformEmbedded &&
                (h.Ay.setAlwaysOnTop(t, n), (m[t] = n), h.Ay.isAlwaysOnTop(t).then((e) => (m[t] = e)));
        },
        LOGOUT: P,
    }),
    G = w;
