"use strict";
n.d(t, { A: () => k }), n(323874), n(14289), n(35956), n(596829);
var i = n(284009),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(507240),
    l = n(17928),
    u = n(228366),
    c = n(626584),
    d = n(777334),
    _ = n(41984),
    h = n(111162),
    f = n(723702),
    p = n(19575),
    E = n(475815),
    m = n(652215);
let g = new c.A("PopoutWindowStore"),
    A = {},
    I = {},
    T = {},
    S = {},
    y = {},
    N = new Set(),
    v = "app-mount",
    C = () => x.emitChange(),
    R = a().debounce(C, 150);
function O(e) {
    let t = T[e];
    null == t ||
        t.closed ||
        (A[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!f.isPlatformEmbedded && I[e],
        });
}
function b(e, t, i) {
    let s = e.document,
        a = new URL(t).origin,
        o = new URL(`${window.location.protocol}//${window.location.host}`).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : "";
    if (a !== o && a !== l) return void g.warn("Not injecting stylesheet, unrecognized origin", a);
    let u = s.createElement("link");
    (u.href = t),
        (u.rel = "stylesheet"),
        (u.integrity = i),
        r()(null != s.head, "Document head was null"),
        s.head.appendChild(u);
}
function D(e) {
    let t = T[e];
    if (null != t) {
        let n, i;
        t.closed || O(e),
            g.info("Unmounting popout window", e),
            (n = T[e]),
            r()(null != n, "Popout window was null during unmount"),
            n.removeEventListener("focus", C),
            n.removeEventListener("blur", C),
            n.removeEventListener("resize", R),
            (i = S[e]),
            r()(null != i, "Window root was null while unmounting"),
            i.unmount(),
            delete T[e],
            delete I[e],
            delete y[e],
            delete S[e],
            setTimeout(() => {
                w(t);
            }, 100),
            x.emitChange();
    }
}
function L(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case m.hK1.LOADED:
                var i;
                return (
                    (i = n.key),
                    void (
                        N.has(i) &&
                        (!(function (e) {
                            let t = T[e],
                                n = y[e];
                            if (null == t) return g.warn("Failed to open window", e);
                            let i = t.document;
                            (0, E.a3)(i, C),
                                t.addEventListener("focus", C),
                                t.addEventListener("blur", C),
                                t.addEventListener("resize", R);
                            for (let e of document.querySelectorAll('link[rel="stylesheet"]'))
                                b(t, e.href, e.integrity);
                            let s = (0, o.createRoot)(i.getElementById(v));
                            r()(null != s, "No render target for popout!"), (S[e] = s), s.render(n(e));
                        })(i),
                        N.delete(i),
                        x.emitChange())
                    )
                );
            case m.hK1.UNLOADED:
                return D(n.key);
        }
}
function w(e) {
    if (null != e && !e.closed)
        try {
            e.close();
        } catch (e) {
            g.error("Error closing popout window", e);
        }
}
function M() {
    for (let e of Object.keys(T)) {
        let t = T[e];
        null != t && w(t);
    }
}
class P extends l.Ay.PersistedStore {
    static displayName = "PopoutWindowStore";
    static persistKey = "PopoutWindowStore";
    initialize(e) {
        this.waitFor(h.default),
            window.addEventListener("message", L),
            window.addEventListener("beforeunload", M),
            (A = e ?? {});
    }
    getWindow(e) {
        return T[e];
    }
    getWindowState(e) {
        return A[e];
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
        let t = T[e];
        return t?.document?.hasFocus() ?? !1;
    }
    getWindowVisible(e) {
        let t = T[e];
        return t?.document?.visibilityState === "visible";
    }
    getState() {
        return A;
    }
    isWindowFullyInitialized(e) {
        return null != T[e] && null != S[e] && null != y[e];
    }
    isWindowFullScreen(e) {
        let t = T[e];
        return t?.document?.fullscreenElement?.id === v;
    }
    unmountWindow(e) {
        return (
            this.isWindowFullyInitialized(e) || g.warn(`Attempted to unmount partially initialized window ${e}`), D(e)
        );
    }
}
let x = new P(u.h, {
        POPOUT_WINDOW_OPEN: function (e) {
            let { key: t, features: n, render: i } = e;
            if (f.isPlatformEmbedded && !p.Ay.supportsFeature(m.BYE.POPOUT_WINDOWS))
                throw Error("Popout windows not supported on this native module version!");
            let r = !0 === n.outOfProcessOverlay,
                s = T[t],
                a = null != s && !s.closed;
            if (a && !r) return f.isPlatformEmbedded ? p.Ay.focus(t) : null != s && s.focus(), !1;
            if (a && r) return g.info("Already has open window, skipping focus"), !1;
            let { defaultWidth: o, defaultHeight: l, defaultAlwaysOnTop: u = !1, ...c } = n,
                h = { ...c, width: o ?? c.width, height: l ?? c.height },
                E = u,
                S = A[t];
            if (null != S) {
                let { width: e, height: t, x: n, y: i, alwaysOnTop: r } = S;
                (E = null != r ? r : u),
                    (h = {
                        ...h,
                        width: null != e && 0 !== e ? e : o,
                        height: null != t && 0 !== t ? t : l,
                        left: h.left ?? n,
                        top: h.top ?? i,
                    });
            }
            let v = (function (e) {
                let t = "";
                for (let n of Object.keys(e)) {
                    let i = e[n];
                    void 0 !== i && ("boolean" == typeof i && (i = i ? "yes" : "no"), (t += `${n}=${i},`));
                }
                return t;
            })(h);
            g.info("Opening popout window", { key: t, encodedFeatures: v });
            let C = window.open(m.BVt.POPOUT_WINDOW, t, v);
            if (null == C) return !1;
            try {
                C.windowKey = t;
            } catch (e) {
                throw (
                    ((0, d.pj)(e, r ? _.Ue.OutOfProcess : null, {
                        extra: {
                            windowKey: t,
                            totalWindowCount: Object.keys(T).length,
                            features: h,
                            encodedFeatures: v,
                            isPlatformEmbedded: f.isPlatformEmbedded,
                        },
                    }),
                    e)
                );
            }
            r ? g.verbose("Opening out of process overlay window", t) : C.focus(),
                (T[t] = C),
                (y[t] = i),
                f.isPlatformEmbedded &&
                    (p.Ay.setAlwaysOnTop(t, E), (I[t] = E), p.Ay.isAlwaysOnTop(t).then((e) => (I[t] = e))),
                N.add(t);
        },
        POPOUT_WINDOW_ADD_STYLESHEET: function (e) {
            let { url: t, integrity: n } = e;
            for (let e of Object.values(T)) null == e || e.closed || b(e, t, n);
        },
        POPOUT_WINDOW_CLOSE: function (e) {
            let { key: t } = e,
                n = T[t];
            null != n && !n.closed && (O(t), h.default.preventPopoutClose || w(n));
        },
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function (e) {
            let { key: t, alwaysOnTop: n } = e;
            f.isPlatformEmbedded &&
                (p.Ay.setAlwaysOnTop(t, n), (I[t] = n), p.Ay.isAlwaysOnTop(t).then((e) => (I[t] = e)));
        },
        LOGOUT: M,
    }),
    k = x;
