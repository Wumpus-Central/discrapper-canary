"use strict";
n.r(t), n.d(t, { default: () => R, waitForCSSLoad: () => k });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(684013),
    s = n(964486),
    o = n(573435),
    d = n(626584),
    u = n(87001),
    c = n(923917),
    A = n(555528),
    h = n(309010),
    g = n(531685),
    f = n(723702),
    m = n(837921),
    v = n(9302),
    y = n(365971),
    p = n(777334),
    _ = n(41984),
    E = n(200042),
    w = n(833551),
    x = n(395011),
    b = n(682763),
    C = n(222506),
    I = n(203322),
    O = n(644434),
    L = n(652215);
n(703552), n(921955);
let D = !f.isPlatformEmbedded && !1,
    N = new d.A("AppOverlay");
function k(e, t) {
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
async function j(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (f.isPlatformEmbedded) {
        try {
            await m.Ay.isAlwaysOnTop(t);
        } catch (e) {
            N.error("Window does not exist while trying to show inactive", e), (0, p.pj)(e, _.Ue.OutOfProcess);
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await m.Ay.waitForIPCReady(n, e))) throw Error("IPC not ready");
                m.Ay.showInactive(t);
                return;
            } catch (e) {
                if (e.message?.includes("IPC") && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    N.error(`Failed to show inactive, retrying in ${t}ms`, e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, p.pj)(e, _.Ue.OutOfProcess), e);
            }
    }
}
function S() {
    a.A.setFocusedPID(v.DEV_PID, null);
}
function P() {
    a.A.setFocusedPID(null, null);
}
let R = i.memo(function (e) {
    let t,
        { withTitleBar: n, windowKey: d } = e;
    (t = (0, l.bG)([u.A], () => u.A.getWindow(d))),
        (0, s.Ay)(() => {
            if (null != t)
                return (
                    D &&
                        (t.document.hasFocus() && a.A.setFocusedPID(v.DEV_PID, null),
                        t.addEventListener("focus", S),
                        t.addEventListener("blur", P)),
                    () => {
                        D && (t.removeEventListener("focus", S), t.removeEventListener("blur", P));
                    }
                );
        });
    let m = (function (e, t) {
            let n,
                r,
                o = (0, l.bG)([x.A], () => !f.isPlatformEmbedded || x.A.isWindowHandleInitialized()),
                d = (0, l.bG)([u.A], () => u.A.getWindow(e)),
                c = (0, l.bG)([x.A], () => x.A.getFocusedPID()),
                m = i.useMemo(() => !f.isPlatformEmbedded || (null != c && c !== v.UNSET_PID), [c]),
                [p, E] = i.useState(!1),
                C = i.useRef(!1),
                O = i.useCallback(() => {
                    let e = x.A.getTargetPID(),
                        n = null != h.A.getVoiceChannelId();
                    a.A.track(L.HAw.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: x.A.isPinned(L.uss.TEXT),
                        overlay_render_method: _.Ue[w.default.getOverlayMethod(e)],
                        unpinned_widget_types: A.A.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, b.Fd)();
                }, [t]),
                D = i.useRef(!1),
                S = i.useRef(null),
                P = i.useCallback(
                    async (e, t) => {
                        try {
                            if ((await k(e, S), D.current)) return;
                            (0, I.A)("cssLoaded", !0);
                        } catch (e) {
                            N.error("Timed out waiting for CSS to load", e),
                                a.A.setOverlayCrashed(x.A.getTargetPID(), e),
                                (0, I.A)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await j(e, t), D.current)) return;
                            (0, b.Mq)();
                        } catch (e) {
                            a.A.setOverlayCrashed(x.A.getTargetPID(), e),
                                (0, I.A)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            D.current || (E(!0), O());
                    },
                    [O],
                ),
                R = i.useRef(!1);
            return (
                i.useEffect(() => {
                    if (!C.current && ((0, I.A)("hasUseEffectFired", !0), (0, I.A)("trackedPidFocused", m), o)) {
                        if (null == d) return void (0, I.A)("errorMessage", "No targetOverlayWindow");
                        if (!m) {
                            R.current ||
                                (a.A.updateOverlayState(
                                    x.A.getTargetPID(),
                                    _.AR.WAITING_FOR_PID_FOCUS,
                                    "AppOverlay - not focused",
                                ),
                                (R.current = !0));
                            return;
                        }
                        (C.current = !0), (0, I.A)("reactInitializationStarted", !0), P(d, e);
                    }
                }, [P, m, e, d, o]),
                (0, s.l0)(() => {
                    clearInterval(S.current), (D.current = !0);
                }),
                (n = (0, l.bG)([g.A], () => g.A.windowSize(null != d ? (0, y.Q2)(d) : void 0))),
                (r = (0, l.bG)([x.A], () => x.A.getFocusedWindowHandle())),
                i.useEffect(() => {
                    let e, t;
                    if (null != d && p && d.innerHeight === n.height && d.innerWidth === n.width)
                        return (
                            (e = d.requestAnimationFrame(() => {
                                e = d.requestAnimationFrame(() => {
                                    d.clearTimeout(t), a.A.overlayUIFocusedPid(c ?? v.UNSET_PID, r);
                                });
                            })),
                            (t = d.setTimeout(() => {
                                d.cancelAnimationFrame(e), a.A.overlayUIFocusedPid(c ?? v.UNSET_PID, r);
                            }, 500)),
                            () => {
                                d.cancelAnimationFrame(e), d.clearTimeout(t);
                            }
                        );
                }, [p, d, c, r, n]),
                p
            );
        })(d, O.G),
        p = (0, l.bG)([x.A], () => x.A.getFocusedPID()),
        R = (0, l.bG)([C.A], () => C.A.isInputLocked(p), [p]);
    return m
        ? (0, r.jsxs)(c.A, {
              themeOverride: L.NJ8.MIDNIGHT,
              appContext: L.BRT.OVERLAY,
              withTitleBar: n,
              windowKey: d,
              title: "Discord Overlay",
              hideModals: R,
              children: [(0, r.jsx)(E.A, {}), (0, r.jsx)(o.Al, {})],
          })
        : null;
});
