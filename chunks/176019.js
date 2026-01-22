t.r(a),
    t.d(a, {
        default: () => k,
        waitForCSSLoad: () => j,
    }),
    t(896048),
    t(65821);
var d = t(627968),
    c = t(64700),
    l = t(311907),
    n = t(684013),
    r = t(964486),
    i = t(573435),
    s = t(626584),
    f = t(87001),
    o = t(923917),
    u = t(555528),
    b = t(309010),
    p = t(531685),
    _ = t(723702),
    A = t(837921),
    m = t(9302),
    h = t(365971),
    I = t(777334),
    v = t(41984),
    g = t(200042),
    y = t(833551),
    x = t(395011),
    T = t(682763),
    E = t(222506),
    O = t(203322),
    w = t(644434),
    N = t(652215);
t(703552), t(921955);
let S = !_.isPlatformEmbedded && !1,
    P = new s.A("AppOverlay");

function j(e, a) {
    return new Promise((t, d) => {
        let c = Date.now();
        a.current = setInterval(() => {
            if (
                (function () {
                    let a = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        t = e.document.styleSheets,
                        d = new Map();
                    for (let e of t) null != e.href && d.set(e.href, e);
                    for (let e of a) {
                        if (null == e.href) continue;
                        let a = d.get(e.href);
                        if (null == a) return !1;
                        try {
                            if (0 === a.cssRules.length) return !1;
                        } catch (e) {}
                    }
                    return !0;
                })()
            ) {
                t(), clearInterval(a.current);
                return;
            }
            Date.now() - c > 12e4 && (d(Error("Timed out waiting for CSS to load")), clearInterval(a.current));
        }, 200);
    });
}
async function C(e, a) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (_.isPlatformEmbedded) {
        try {
            await A.Ay.isAlwaysOnTop(a);
        } catch (e) {
            P.error("Window does not exist while trying to show inactive", e), (0, I.pj)(e, v.Ue.OutOfProcess);
        }
        for (let l = 0; l < d; l++)
            try {
                if (!(await A.Ay.waitForIPCReady(t, e))) throw Error("IPC not ready");
                A.Ay.showInactive(a);
                return;
            } catch (e) {
                var c;
                if ((null == (c = e.message) ? void 0 : c.includes("IPC")) && l < d - 1) {
                    let a = (t / 2) * Math.pow(2, l + 1);
                    P.error("Failed to show inactive, retrying in ".concat(a, "ms"), e),
                        await new Promise((e) => setTimeout(e, a));
                } else throw ((0, I.pj)(e, v.Ue.OutOfProcess), e);
            }
    }
}

function D() {
    n.A.setFocusedPID(m.DEV_PID, null);
}

function V() {
    n.A.setFocusedPID(null, null);
}
let k = c.memo(function (e) {
    let a,
        { withTitleBar: t, windowKey: s } = e;
    (a = (0, l.bG)([f.A], () => f.A.getWindow(s))),
        (0, r.Ay)(() => {
            if (null != a)
                return (
                    S &&
                        (a.document.hasFocus() && n.A.setFocusedPID(m.DEV_PID, null),
                        a.addEventListener("focus", D),
                        a.addEventListener("blur", V)),
                    () => {
                        S && (a.removeEventListener("focus", D), a.removeEventListener("blur", V));
                    }
                );
        });
    let A = (function (e, a) {
            let t,
                d,
                i = (0, l.bG)([x.A], () => !_.isPlatformEmbedded || x.A.isWindowHandleInitialized()),
                s = (0, l.bG)([f.A], () => f.A.getWindow(e)),
                o = (0, l.bG)([x.A], () => x.A.getFocusedPID()),
                A = c.useMemo(() => !_.isPlatformEmbedded || (null != o && o !== m.UNSET_PID), [o]),
                [I, g] = c.useState(!1),
                E = c.useRef(!1),
                w = c.useCallback(() => {
                    let e = x.A.getTargetPID(),
                        t = null != b.A.getVoiceChannelId();
                    n.A.track(N.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: t,
                        text_widget_connected: x.A.isPinned(N.uss.TEXT),
                        overlay_render_method: v.Ue[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: u.A.getAllUnpinnedPinnedWidgets(a),
                    }),
                        (0, T.Fd)();
                }, [a]),
                S = c.useRef(!1),
                D = c.useRef(null),
                V = c.useCallback(
                    async (e, a) => {
                        try {
                            if ((await j(e, D), S.current)) return;
                            (0, O.A)("cssLoaded", !0);
                        } catch (e) {
                            P.error("Timed out waiting for CSS to load", e),
                                n.A.setOverlayCrashed(x.A.getTargetPID(), e),
                                (0, O.A)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await C(e, a), S.current)) return;
                            (0, T.Mq)();
                        } catch (e) {
                            n.A.setOverlayCrashed(x.A.getTargetPID(), e),
                                (0, O.A)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((a) => {
                            e.setTimeout(() => a(), 100);
                        }),
                            S.current || (g(!0), w());
                    },
                    [w],
                ),
                k = c.useRef(!1);
            return (
                c.useEffect(() => {
                    if (!E.current && ((0, O.A)("hasUseEffectFired", !0), (0, O.A)("trackedPidFocused", A), i)) {
                        if (null == s) return void (0, O.A)("errorMessage", "No targetOverlayWindow");
                        if (!A) {
                            k.current ||
                                (n.A.updateOverlayState(
                                    x.A.getTargetPID(),
                                    v.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (k.current = !0));
                            return;
                        }
                        (E.current = !0), (0, O.A)("reactInitializationStarted", !0), V(s, e);
                    }
                }, [V, A, e, s, i]),
                (0, r.l0)(() => {
                    clearInterval(D.current), (S.current = !0);
                }),
                (t = (0, l.bG)([p.A], () => p.A.windowSize(null != s ? (0, h.Q2)(s) : void 0))),
                (d = (0, l.bG)([x.A], () => x.A.getFocusedWindowHandle())),
                c.useEffect(() => {
                    let e, a;
                    if (null != s && I && s.innerHeight === t.height && s.innerWidth === t.width)
                        return (
                            (e = s.requestAnimationFrame(() => {
                                e = s.requestAnimationFrame(() => {
                                    s.clearTimeout(a), n.A.overlayUIFocusedPid(null != o ? o : m.UNSET_PID, d);
                                });
                            })),
                            (a = s.setTimeout(() => {
                                s.cancelAnimationFrame(e), n.A.overlayUIFocusedPid(null != o ? o : m.UNSET_PID, d);
                            }, 500)),
                            () => {
                                s.cancelAnimationFrame(e), s.clearTimeout(a);
                            }
                        );
                }, [I, s, o, d, t]),
                I
            );
        })(s, w.G),
        I = (0, l.bG)([x.A], () => x.A.getFocusedPID()),
        k = (0, l.bG)([E.A], () => E.A.isInputLocked(I), [I]);
    return A
        ? (0, d.jsxs)(o.A, {
              themeOverride: N.NJ8.MIDNIGHT,
              withTitleBar: t,
              windowKey: s,
              title: "Discord Overlay",
              hideModals: k,
              children: [(0, d.jsx)(g.A, {}), (0, d.jsx)(i.Al, {})],
          })
        : null;
});
