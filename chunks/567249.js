"use strict";
n.d(t, { A: () => U }), n(323874), n(14289), n(35956), n(596829);
var i = n(284009),
    r = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(507240),
    l = n(17928),
    d = n(228366),
    _ = n(626584),
    u = n(777334),
    c = n(41984),
    E = n(111162),
    h = n(723702),
    m = n(19575),
    f = n(475815),
    g = n(652215);
let p = new _.A("PopoutWindowStore"),
    A = {},
    I = {},
    T = {},
    S = {},
    N = {},
    C = new Set(),
    R = "app-mount",
    O = () => M.emitChange(),
    y = a().debounce(O, 150);
function v(e) {
    let t = T[e];
    null == t ||
        t.closed ||
        (A[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!h.isPlatformEmbedded && I[e],
        });
}
function D(e, t, i) {
    let s = e.document,
        a = new URL(t).origin,
        o = new URL(`${window.location.protocol}//${window.location.host}`).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : "";
    if (a !== o && a !== l) return void p.warn("Not injecting stylesheet, unrecognized origin", a);
    let d = s.createElement("link");
    (d.href = t),
        (d.rel = "stylesheet"),
        (d.integrity = i),
        r()(null != s.head, "Document head was null"),
        s.head.appendChild(d);
}
function L(e) {
    let t = T[e];
    if (null != t) {
        let n, i;
        t.closed || v(e),
            p.info("Unmounting popout window", e),
            (n = T[e]),
            r()(null != n, "Popout window was null during unmount"),
            n.removeEventListener("focus", O),
            n.removeEventListener("blur", O),
            n.removeEventListener("resize", y),
            (i = S[e]),
            r()(null != i, "Window root was null while unmounting"),
            i.unmount(),
            delete T[e],
            delete I[e],
            delete N[e],
            delete S[e],
            setTimeout(() => {
                w(t);
            }, 100),
            M.emitChange();
    }
}
function b(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case g.hK1.LOADED:
                var i;
                return (
                    (i = n.key),
                    void (
                        C.has(i) &&
                        (!(function (e) {
                            let t = T[e],
                                n = N[e];
                            if (null == t) return p.warn("Failed to open window", e);
                            let i = t.document;
                            (0, f.a3)(i, O),
                                t.addEventListener("focus", O),
                                t.addEventListener("blur", O),
                                t.addEventListener("resize", y);
                            for (let e of document.querySelectorAll('link[rel="stylesheet"]'))
                                D(t, e.href, e.integrity);
                            let s = (0, o.createRoot)(i.getElementById(R));
                            r()(null != s, "No render target for popout!"), (S[e] = s), s.render(n(e));
                        })(i),
                        C.delete(i),
                        M.emitChange())
                    )
                );
            case g.hK1.UNLOADED:
                return L(n.key);
        }
}
function w(e) {
    if (null != e && !e.closed)
        try {
            e.close();
        } catch (e) {
            p.error("Error closing popout window", e);
        }
}
function P() {
    for (let e of Object.keys(T)) {
        let t = T[e];
        null != t && w(t);
    }
}
class k extends l.Ay.PersistedStore {
    static displayName = "PopoutWindowStore";
    static persistKey = "PopoutWindowStore";
    initialize(e) {
        this.waitFor(E.default),
            window.addEventListener("message", b),
            window.addEventListener("beforeunload", P),
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
        return null != T[e] && null != S[e] && null != N[e];
    }
    isWindowFullScreen(e) {
        let t = T[e];
        return t?.document?.fullscreenElement?.id === R;
    }
    unmountWindow(e) {
        return (
            this.isWindowFullyInitialized(e) || p.warn(`Attempted to unmount partially initialized window ${e}`), L(e)
        );
    }
}
let M = new k(d.h, {
        POPOUT_WINDOW_OPEN: function (e) {
            let { key: t, features: n, render: i } = e;
            if (h.isPlatformEmbedded && !m.Ay.supportsFeature(g.BYE.POPOUT_WINDOWS))
                throw Error("Popout windows not supported on this native module version!");
            let r = !0 === n.outOfProcessOverlay,
                s = T[t],
                a = null != s && !s.closed;
            if (a && !r) return h.isPlatformEmbedded ? m.Ay.focus(t) : null != s && s.focus(), !1;
            if (a && r) return p.info("Already has open window, skipping focus"), !1;
            let { defaultWidth: o, defaultHeight: l, defaultAlwaysOnTop: d = !1, ..._ } = n,
                E = { ..._, width: o ?? _.width, height: l ?? _.height },
                f = d,
                S = A[t];
            if (null != S) {
                let { width: e, height: t, x: n, y: i, alwaysOnTop: r } = S;
                (f = null != r ? r : d),
                    (E = {
                        ...E,
                        width: null != e && 0 !== e ? e : o,
                        height: null != t && 0 !== t ? t : l,
                        left: n,
                        top: i,
                    });
            }
            let R = (function (e) {
                let t = "";
                for (let n of Object.keys(e)) {
                    let i = e[n];
                    void 0 !== i && ("boolean" == typeof i && (i = i ? "yes" : "no"), (t += `${n}=${i},`));
                }
                return t;
            })(E);
            p.info("Opening popout window", { key: t, encodedFeatures: R });
            let O = window.open(g.BVt.POPOUT_WINDOW, t, R);
            if (null == O) return !1;
            try {
                O.windowKey = t;
            } catch (e) {
                throw (
                    ((0, u.pj)(e, r ? c.Ue.OutOfProcess : null, {
                        extra: {
                            windowKey: t,
                            totalWindowCount: Object.keys(T).length,
                            features: E,
                            encodedFeatures: R,
                            isPlatformEmbedded: h.isPlatformEmbedded,
                        },
                    }),
                    e)
                );
            }
            r ? p.verbose("Opening out of process overlay window", t) : O.focus(),
                (T[t] = O),
                (N[t] = i),
                h.isPlatformEmbedded &&
                    (m.Ay.setAlwaysOnTop(t, f), (I[t] = f), m.Ay.isAlwaysOnTop(t).then((e) => (I[t] = e))),
                C.add(t);
        },
        POPOUT_WINDOW_ADD_STYLESHEET: function (e) {
            let { url: t, integrity: n } = e;
            for (let e of Object.values(T)) null == e || e.closed || D(e, t, n);
        },
        POPOUT_WINDOW_CLOSE: function (e) {
            let { key: t } = e,
                n = T[t];
            null != n && !n.closed && (v(t), E.default.preventPopoutClose || w(n));
        },
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function (e) {
            let { key: t, alwaysOnTop: n } = e;
            h.isPlatformEmbedded &&
                (m.Ay.setAlwaysOnTop(t, n), (I[t] = n), m.Ay.isAlwaysOnTop(t).then((e) => (I[t] = e)));
        },
        LOGOUT: P,
    }),
    U = M;
