n.r(t),
    n.d(t, {
        default: () => k,
        waitForCSSLoad: () => S,
    }),
    n(896048),
    n(65821);
var r = n(627968),
    a = n(64700),
    i = n(311907),
    l = n(684013),
    s = n(964486),
    o = n(573435),
    c = n(626584),
    u = n(87001),
    d = n(923917),
    p = n(555528),
    f = n(309010),
    b = n(531685),
    _ = n(723702),
    g = n(837921),
    m = n(9302),
    h = n(365971),
    A = n(777334),
    y = n(41984),
    v = n(200042),
    x = n(833551),
    I = n(395011),
    O = n(682763),
    j = n(222506),
    T = n(203322),
    E = n(644434),
    C = n(652215);
n(703552), n(921955);
let w = !_.isPlatformEmbedded && !1,
    P = new c.A("AppOverlay");

function S(e, t) {
    return new Promise((n, r) => {
        let a = Date.now();
        t.current = setInterval(() => {
            if (
                (function () {
                    let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        n = e.document.styleSheets,
                        r = new Map();
                    for (let e of n) null != e.href && r.set(e.href, e);
                    for (let e of t) {
                        if (null == e.href) continue;
                        let t = r.get(e.href);
                        if (null == t) return !1;
                        try {
                            if (0 === t.cssRules.length) return !1;
                        } catch (e) {}
                    }
                    return !0;
                })()
            ) {
                n(), clearInterval(t.current);
                return;
            }
            Date.now() - a > 12e4 && (r(Error("Timed out waiting for CSS to load")), clearInterval(t.current));
        }, 200);
    });
}
async function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (_.isPlatformEmbedded) {
        try {
            await g.Ay.isAlwaysOnTop(t);
        } catch (e) {
            P.error("Window does not exist while trying to show inactive", e), (0, A.pj)(e, y.Ue.OutOfProcess);
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await g.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                g.Ay.showInactive(t);
                return;
            } catch (e) {
                var a;
                if ((null == (a = e.message) ? void 0 : a.includes("IPC")) && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    P.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, A.pj)(e, y.Ue.OutOfProcess), e);
            }
    }
}

function D() {
    l.A.setFocusedPID(m.DEV_PID, null);
}

function G() {
    l.A.setFocusedPID(null, null);
}
let k = a.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: c } = e;
    (t = (0, i.bG)([u.A], () => u.A.getWindow(c))),
        (0, s.Ay)(() => {
            if (null != t)
                return (
                    w &&
                        (t.document.hasFocus() && l.A.setFocusedPID(m.DEV_PID, null),
                        t.addEventListener("focus", D),
                        t.addEventListener("blur", G)),
                    () => {
                        w && (t.removeEventListener("focus", D), t.removeEventListener("blur", G));
                    }
                );
        });
    let g = (function (e, t) {
            let n,
                r,
                o = (0, i.bG)([I.A], () => !_.isPlatformEmbedded || I.A.isWindowHandleInitialized()),
                c = (0, i.bG)([u.A], () => u.A.getWindow(e)),
                d = (0, i.bG)([I.A], () => I.A.getFocusedPID()),
                g = a.useMemo(() => !_.isPlatformEmbedded || (null != d && d !== m.UNSET_PID), [d]),
                [A, v] = a.useState(!1),
                j = a.useRef(!1),
                E = a.useCallback(() => {
                    let e = I.A.getTargetPID(),
                        n = null != f.A.getVoiceChannelId();
                    l.A.track(C.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: I.A.isPinned(C.uss.TEXT),
                        overlay_render_method: y.Ue[x.default.getOverlayMethod(e)],
                        unpinned_widget_types: p.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, O.Fd)();
                }, [t]),
                w = a.useRef(!1),
                D = a.useRef(null),
                G = a.useCallback(
                    async (e, t) => {
                        try {
                            if ((await S(e, D), w.current)) return;
                            (0, T.A)("cssLoaded", !0);
                        } catch (e) {
                            P.error("Timed out waiting for CSS to load", e),
                                l.A.setOverlayCrashed(I.A.getTargetPID(), e),
                                (0, T.A)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await N(e, t), w.current)) return;
                            (0, O.Mq)();
                        } catch (e) {
                            l.A.setOverlayCrashed(I.A.getTargetPID(), e),
                                (0, T.A)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            w.current || (v(!0), E());
                    },
                    [E],
                ),
                k = a.useRef(!1);
            return (
                a.useEffect(() => {
                    if (!j.current && ((0, T.A)("hasUseEffectFired", !0), (0, T.A)("trackedPidFocused", g), o)) {
                        if (null == c) return void (0, T.A)("errorMessage", "No targetOverlayWindow");
                        if (!g) {
                            k.current ||
                                (l.A.updateOverlayState(
                                    I.A.getTargetPID(),
                                    y.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (k.current = !0));
                            return;
                        }
                        (j.current = !0), (0, T.A)("reactInitializationStarted", !0), G(c, e);
                    }
                }, [G, g, e, c, o]),
                (0, s.l0)(() => {
                    clearInterval(D.current), (w.current = !0);
                }),
                (n = (0, i.bG)([b.A], () => b.A.windowSize(null != c ? (0, h.Q2)(c) : void 0))),
                (r = (0, i.bG)([I.A], () => I.A.getFocusedWindowHandle())),
                a.useEffect(() => {
                    let e, t;
                    if (null != c && A && c.innerHeight === n.height && c.innerWidth === n.width)
                        return (
                            (e = c.requestAnimationFrame(() => {
                                e = c.requestAnimationFrame(() => {
                                    c.clearTimeout(t), l.A.overlayUIFocusedPid(null != d ? d : m.UNSET_PID, r);
                                });
                            })),
                            (t = c.setTimeout(() => {
                                c.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(null != d ? d : m.UNSET_PID, r);
                            }, 500)),
                            () => {
                                c.cancelAnimationFrame(e), c.clearTimeout(t);
                            }
                        );
                }, [A, c, d, r, n]),
                A
            );
        })(c, E.G),
        A = (0, i.bG)([I.A], () => I.A.getFocusedPID()),
        k = (0, i.bG)([j.A], () => j.A.isInputLocked(A), [A]);
    return g
        ? (0, r.jsxs)(d.A, {
              themeOverride: C.NJ8.MIDNIGHT,
              appContext: C.BRT.OVERLAY,
              withTitleBar: n,
              windowKey: c,
              title: "Discord Overlay",
              hideModals: k,
              children: [(0, r.jsx)(v.A, {}), (0, r.jsx)(o.Al, {})],
          })
        : null;
});
