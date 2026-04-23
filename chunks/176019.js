n.r(t), n.d(t, { default: () => j, waitForCSSLoad: () => N });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    l = n(684013),
    o = n(964486),
    d = n(573435),
    s = n(626584),
    c = n(87001),
    u = n(923917),
    _ = n(555528),
    A = n(309010),
    h = n(531685),
    f = n(723702),
    g = n(837921),
    m = n(9302),
    b = n(365971),
    p = n(777334),
    v = n(41984),
    y = n(200042),
    w = n(833551),
    C = n(395011),
    x = n(682763),
    E = n(222506),
    I = n(203322),
    L = n(644434),
    O = n(652215);
n(703552), n(921955);
let k = !f.isPlatformEmbedded && !1,
    D = new s.A("AppOverlay");
function N(e, t) {
    return new Promise((n, r) => {
        let i = Date.now();
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
            Date.now() - i > 12e4 && (r(Error("Timed out waiting for CSS to load")), clearInterval(t.current));
        }, 200);
    });
}
async function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (f.isPlatformEmbedded) {
        try {
            await g.Ay.isAlwaysOnTop(t);
        } catch (e) {
            D.error("Window does not exist while trying to show inactive", e), (0, p.pj)(e, v.Ue.OutOfProcess);
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await g.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                g.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    D.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, p.pj)(e, v.Ue.OutOfProcess), e);
            }
    }
}
function S() {
    l.A.setFocusedPID(m.DEV_PID, null);
}
function P() {
    l.A.setFocusedPID(null, null);
}
let j = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: s } = e;
    (t = (0, a.bG)([c.A], () => c.A.getWindow(s))),
        (0, o.Ay)(() => {
            if (null != t)
                return (
                    k &&
                        (t.document.hasFocus() && l.A.setFocusedPID(m.DEV_PID, null),
                        t.addEventListener("focus", S),
                        t.addEventListener("blur", P)),
                    () => {
                        k && (t.removeEventListener("focus", S), t.removeEventListener("blur", P));
                    }
                );
        });
    let g = (function (e, t) {
            let n,
                r,
                d = (0, a.bG)([C.A], () => !f.isPlatformEmbedded || C.A.isWindowHandleInitialized()),
                s = (0, a.bG)([c.A], () => c.A.getWindow(e)),
                u = (0, a.bG)([C.A], () => C.A.getFocusedPID()),
                g = i.useMemo(() => !f.isPlatformEmbedded || (null != u && u !== m.UNSET_PID), [u]),
                [p, y] = i.useState(!1),
                E = i.useRef(!1),
                L = i.useCallback(() => {
                    let e = C.A.getTargetPID(),
                        n = null != A.A.getVoiceChannelId();
                    l.A.track(O.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: C.A.isPinned(O.uss.TEXT),
                        overlay_render_method: v.Ue[w.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, x.Fd)();
                }, [t]),
                k = i.useRef(!1),
                S = i.useRef(null),
                P = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await N(e, S), k.current)) return;
                            (0, I.A)("cssLoaded", !0);
                        } catch (e) {
                            D.error("Timed out waiting for CSS to load", e),
                                l.A.setOverlayCrashed(C.A.getTargetPID(), e),
                                (0, I.A)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await T(e, t), k.current)) return;
                            (0, x.Mq)();
                        } catch (e) {
                            l.A.setOverlayCrashed(C.A.getTargetPID(), e),
                                (0, I.A)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            k.current || (y(!0), L());
                    },
                    [L],
                ),
                j = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!E.current && ((0, I.A)("hasUseEffectFired", !0), (0, I.A)("trackedPidFocused", g), d)) {
                        if (null == s) return void (0, I.A)("errorMessage", "No targetOverlayWindow");
                        if (!g) {
                            j.current ||
                                (l.A.updateOverlayState(
                                    C.A.getTargetPID(),
                                    v.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (j.current = !0));
                            return;
                        }
                        (E.current = !0), (0, I.A)("reactInitializationStarted", !0), P(s, e);
                    }
                }, [P, g, e, s, d]),
                (0, o.l0)(() => {
                    clearInterval(S.current), (k.current = !0);
                }),
                (n = (0, a.bG)([h.A], () => h.A.windowSize(null != s ? (0, b.Q2)(s) : void 0))),
                (r = (0, a.bG)([C.A], () => C.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != s && p && s.innerHeight === n.height && s.innerWidth === n.width)
                        return (
                            (e = s.requestAnimationFrame(() => {
                                e = s.requestAnimationFrame(() => {
                                    s.clearTimeout(t), l.A.overlayUIFocusedPid(u ?? m.UNSET_PID, r);
                                });
                            })),
                            (t = s.setTimeout(() => {
                                s.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(u ?? m.UNSET_PID, r);
                            }, 500)),
                            () => {
                                s.cancelAnimationFrame(e), s.clearTimeout(t);
                            }
                        );
                }, [p, s, u, r, n]),
                p
            );
        })(s, L.G),
        p = (0, a.bG)([C.A], () => C.A.getFocusedPID()),
        j = (0, a.bG)([E.A], () => E.A.isInputLocked(p), [p]);
    return g
        ? (0, r.jsxs)(u.A, {
              themeOverride: O.NJ8.MIDNIGHT,
              appContext: O.BRT.OVERLAY,
              withTitleBar: n,
              windowKey: s,
              title: "Discord Overlay",
              hideModals: j,
              children: [(0, r.jsx)(y.A, {}), (0, r.jsx)(d.Al, {})],
          })
        : null;
});
