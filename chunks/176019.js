"use strict";
n.r(t), n.d(t, { default: () => M, waitForCSSLoad: () => R });
var r = n(627968),
    a = n(64700),
    s = n(311907),
    i = n(684013),
    l = n(964486),
    o = n(573435),
    c = n(626584),
    d = n(87001),
    u = n(923917),
    _ = n(555528),
    p = n(309010),
    f = n(531685),
    g = n(723702),
    h = n(837921),
    m = n(9302),
    A = n(365971),
    b = n(777334),
    x = n(41984),
    I = n(200042),
    C = n(833551),
    v = n(395011),
    E = n(682763),
    T = n(222506),
    y = n(203322),
    N = n(644434),
    S = n(652215);
n(703552), n(921955);
let j = !g.isPlatformEmbedded && !1,
    O = new c.A("AppOverlay");
function R(e, t) {
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
async function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (g.isPlatformEmbedded) {
        try {
            await h.Ay.isAlwaysOnTop(t);
        } catch (e) {
            O.error("Window does not exist while trying to show inactive", e), (0, b.pj)(e, x.Ue.OutOfProcess);
        }
        for (let a = 0; a < r; a++)
            try {
                if (!(await h.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                h.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && a < r - 1) {
                    let t = (n / 2) * Math.pow(2, a + 1);
                    O.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, b.pj)(e, x.Ue.OutOfProcess), e);
            }
    }
}
function w() {
    i.A.setFocusedPID(m.DEV_PID, null);
}
function P() {
    i.A.setFocusedPID(null, null);
}
let M = a.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: c } = e;
    (t = (0, s.bG)([d.A], () => d.A.getWindow(c))),
        (0, l.Ay)(() => {
            if (null != t)
                return (
                    j &&
                        (t.document.hasFocus() && i.A.setFocusedPID(m.DEV_PID, null),
                        t.addEventListener("focus", w),
                        t.addEventListener("blur", P)),
                    () => {
                        j && (t.removeEventListener("focus", w), t.removeEventListener("blur", P));
                    }
                );
        });
    let h = (function (e, t) {
            let n,
                r,
                o = (0, s.bG)([v.A], () => !g.isPlatformEmbedded || v.A.isWindowHandleInitialized()),
                c = (0, s.bG)([d.A], () => d.A.getWindow(e)),
                u = (0, s.bG)([v.A], () => v.A.getFocusedPID()),
                h = a.useMemo(() => !g.isPlatformEmbedded || (null != u && u !== m.UNSET_PID), [u]),
                [b, I] = a.useState(!1),
                T = a.useRef(!1),
                N = a.useCallback(() => {
                    let e = v.A.getTargetPID(),
                        n = null != p.A.getVoiceChannelId();
                    i.A.track(S.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: v.A.isPinned(S.uss.TEXT),
                        overlay_render_method: x.Ue[C.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, E.Fd)();
                }, [t]),
                j = a.useRef(!1),
                w = a.useRef(null),
                P = a.useCallback(
                    async (e, t) => {
                        try {
                            if ((await R(e, w), j.current)) return;
                            (0, y.A)("cssLoaded", !0);
                        } catch (e) {
                            O.error("Timed out waiting for CSS to load", e),
                                i.A.setOverlayCrashed(v.A.getTargetPID(), e),
                                (0, y.A)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await D(e, t), j.current)) return;
                            (0, E.Mq)();
                        } catch (e) {
                            i.A.setOverlayCrashed(v.A.getTargetPID(), e),
                                (0, y.A)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            j.current || (I(!0), N());
                    },
                    [N],
                ),
                M = a.useRef(!1);
            return (
                a.useEffect(() => {
                    if (!T.current && ((0, y.A)("hasUseEffectFired", !0), (0, y.A)("trackedPidFocused", h), o)) {
                        if (null == c) return void (0, y.A)("errorMessage", "No targetOverlayWindow");
                        if (!h) {
                            M.current ||
                                (i.A.updateOverlayState(
                                    v.A.getTargetPID(),
                                    x.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (M.current = !0));
                            return;
                        }
                        (T.current = !0), (0, y.A)("reactInitializationStarted", !0), P(c, e);
                    }
                }, [P, h, e, c, o]),
                (0, l.l0)(() => {
                    clearInterval(w.current), (j.current = !0);
                }),
                (n = (0, s.bG)([f.A], () => f.A.windowSize(null != c ? (0, A.Q2)(c) : void 0))),
                (r = (0, s.bG)([v.A], () => v.A.getFocusedWindowHandle())),
                a.useEffect(() => {
                    let e, t;
                    if (null != c && b && c.innerHeight === n.height && c.innerWidth === n.width)
                        return (
                            (e = c.requestAnimationFrame(() => {
                                e = c.requestAnimationFrame(() => {
                                    c.clearTimeout(t), i.A.overlayUIFocusedPid(u ?? m.UNSET_PID, r);
                                });
                            })),
                            (t = c.setTimeout(() => {
                                c.cancelAnimationFrame(e), i.A.overlayUIFocusedPid(u ?? m.UNSET_PID, r);
                            }, 500)),
                            () => {
                                c.cancelAnimationFrame(e), c.clearTimeout(t);
                            }
                        );
                }, [b, c, u, r, n]),
                b
            );
        })(c, N.G),
        b = (0, s.bG)([v.A], () => v.A.getFocusedPID()),
        M = (0, s.bG)([T.A], () => T.A.isInputLocked(b), [b]);
    return h
        ? (0, r.jsxs)(u.A, {
              themeOverride: S.NJ8.MIDNIGHT,
              appContext: S.BRT.OVERLAY,
              withTitleBar: n,
              windowKey: c,
              title: "Discord Overlay",
              hideModals: M,
              children: [(0, r.jsx)(I.A, {}), (0, r.jsx)(o.Al, {})],
          })
        : null;
});
