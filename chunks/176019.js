a.r(t), a.d(t, { default: () => k, waitForCSSLoad: () => w });
var n = a(627968),
    i = a(64700),
    r = a(311907),
    l = a(684013),
    o = a(964486),
    s = a(573435),
    _ = a(626584),
    c = a(87001),
    d = a(923917),
    u = a(555528),
    f = a(309010),
    m = a(531685),
    p = a(723702),
    A = a(837921),
    g = a(9302),
    h = a(365971),
    b = a(777334),
    I = a(41984),
    C = a(200042),
    v = a(833551),
    y = a(395011),
    x = a(682763),
    E = a(222506),
    S = a(203322),
    L = a(644434),
    T = a(652215);
a(703552), a(921955);
let N = !p.isPlatformEmbedded && !1,
    P = new _.A("AppOverlay");
function w(e, t) {
    return new Promise((a, n) => {
        let i = Date.now();
        t.current = setInterval(() => {
            if (
                (function () {
                    let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        a = e.document.styleSheets,
                        n = new Map();
                    for (let e of a) null != e.href && n.set(e.href, e);
                    for (let e of t) {
                        if (null == e.href) continue;
                        let t = n.get(e.href);
                        if (null == t) return !1;
                        try {
                            if (0 === t.cssRules.length) return !1;
                        } catch (e) {}
                    }
                    return !0;
                })()
            ) {
                a(), clearInterval(t.current);
                return;
            }
            Date.now() - i > 12e4 && (n(Error("Timed out waiting for CSS to load")), clearInterval(t.current));
        }, 200);
    });
}
async function D(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await A.Ay.isAlwaysOnTop(t);
        } catch (e) {
            P.error("Window does not exist while trying to show inactive", e), (0, b.pj)(e, I.Ue.OutOfProcess);
        }
        for (let i = 0; i < n; i++)
            try {
                if (!(await A.Ay.waitForIPCReady(a, e))) throw Error("IPC not ready");
                A.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < n - 1) {
                    let t = (a / 2) * Math.pow(2, i + 1);
                    P.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, b.pj)(e, I.Ue.OutOfProcess), e);
            }
    }
}
function G() {
    l.A.setFocusedPID(g.DEV_PID, null);
}
function O() {
    l.A.setFocusedPID(null, null);
}
let k = i.memo(function (e) {
    let t,
        { withTitleBar: a, windowKey: _ } = e;
    (t = (0, r.bG)([c.A], () => c.A.getWindow(_))),
        (0, o.Ay)(() => {
            if (null != t)
                return (
                    N &&
                        (t.document.hasFocus() && l.A.setFocusedPID(g.DEV_PID, null),
                        t.addEventListener("focus", G),
                        t.addEventListener("blur", O)),
                    () => {
                        N && (t.removeEventListener("focus", G), t.removeEventListener("blur", O));
                    }
                );
        });
    let A = (function (e, t) {
            let a,
                n,
                s = (0, r.bG)([y.A], () => !p.isPlatformEmbedded || y.A.isWindowHandleInitialized()),
                _ = (0, r.bG)([c.A], () => c.A.getWindow(e)),
                d = (0, r.bG)([y.A], () => y.A.getFocusedPID()),
                A = i.useMemo(() => !p.isPlatformEmbedded || (null != d && d !== g.UNSET_PID), [d]),
                [b, C] = i.useState(!1),
                E = i.useRef(!1),
                L = i.useCallback(() => {
                    let e = y.A.getTargetPID(),
                        a = null != f.A.getVoiceChannelId();
                    l.A.track(T.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: a,
                        text_widget_connected: y.A.isPinned(T.uss.TEXT),
                        overlay_render_method: I.Ue[v.default.getOverlayMethod(e)],
                        unpinned_widget_types: u.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, x.Fd)();
                }, [t]),
                N = i.useRef(!1),
                G = i.useRef(null),
                O = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await w(e, G), N.current)) return;
                            (0, S.A)("cssLoaded", !0);
                        } catch (e) {
                            P.error("Timed out waiting for CSS to load", e),
                                l.A.setOverlayCrashed(y.A.getTargetPID(), e),
                                (0, S.A)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await D(e, t), N.current)) return;
                            (0, x.Mq)();
                        } catch (e) {
                            l.A.setOverlayCrashed(y.A.getTargetPID(), e),
                                (0, S.A)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            N.current || (C(!0), L());
                    },
                    [L],
                ),
                k = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!E.current && ((0, S.A)("hasUseEffectFired", !0), (0, S.A)("trackedPidFocused", A), s)) {
                        if (null == _) return void (0, S.A)("errorMessage", "No targetOverlayWindow");
                        if (!A) {
                            k.current ||
                                (l.A.updateOverlayState(
                                    y.A.getTargetPID(),
                                    I.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (k.current = !0));
                            return;
                        }
                        (E.current = !0), (0, S.A)("reactInitializationStarted", !0), O(_, e);
                    }
                }, [O, A, e, _, s]),
                (0, o.l0)(() => {
                    clearInterval(G.current), (N.current = !0);
                }),
                (a = (0, r.bG)([m.A], () => m.A.windowSize(null != _ ? (0, h.Q2)(_) : void 0))),
                (n = (0, r.bG)([y.A], () => y.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != _ && b && _.innerHeight === a.height && _.innerWidth === a.width)
                        return (
                            (e = _.requestAnimationFrame(() => {
                                e = _.requestAnimationFrame(() => {
                                    _.clearTimeout(t), l.A.overlayUIFocusedPid(d ?? g.UNSET_PID, n);
                                });
                            })),
                            (t = _.setTimeout(() => {
                                _.cancelAnimationFrame(e), l.A.overlayUIFocusedPid(d ?? g.UNSET_PID, n);
                            }, 500)),
                            () => {
                                _.cancelAnimationFrame(e), _.clearTimeout(t);
                            }
                        );
                }, [b, _, d, n, a]),
                b
            );
        })(_, L.G),
        b = (0, r.bG)([y.A], () => y.A.getFocusedPID()),
        k = (0, r.bG)([E.A], () => E.A.isInputLocked(b), [b]);
    return A
        ? (0, n.jsxs)(d.A, {
              themeOverride: T.NJ8.MIDNIGHT,
              appContext: T.BRT.OVERLAY,
              withTitleBar: a,
              windowKey: _,
              title: "Discord Overlay",
              hideModals: k,
              children: [(0, n.jsx)(C.A, {}), (0, n.jsx)(s.Al, {})],
          })
        : null;
});
