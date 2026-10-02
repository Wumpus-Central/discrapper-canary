n.d(t, { N: () => T });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(661531),
    a = n(252392),
    c = n(888633),
    u = n(765178),
    d = n(844222),
    h = n(435462);
let f = (0, c.v)(() => ({ containerIdsBySurface: new Map() })),
    p = 0;
var g = n(435871);
function m(e) {
    return "number" == typeof e ? `${e}px` : e;
}
function A(e) {
    let { surface: t = "app", offset: n } = e,
        { entry: s, position: c } = (function (e) {
            let t = i.useId(),
                n =
                    (i.useEffect(
                        () => (
                            f.setState((n) => {
                                let r = new Map(n.containerIdsBySurface);
                                return (r.set(e, [...(r.get(e) ?? []), t]), { containerIdsBySurface: r });
                            }),
                            () => {
                                f.setState((n) => {
                                    let r = new Map(n.containerIdsBySurface),
                                        i = (r.get(e) ?? []).filter((e) => e !== t);
                                    return (0 === i.length ? r.delete(e) : r.set(e, i), { containerIdsBySurface: r });
                                });
                            }
                        ),
                        [e, t],
                    ),
                    f((n) => {
                        let r = n.containerIdsBySurface.get(e);
                        return null != r && r[r.length - 1] === t;
                    })),
                r = (0, h.WE)((t) => t.currentToastMap.get(e)),
                s = (n ? r : void 0) ?? null,
                [l, o] = i.useState("top"),
                a = null != s ? (s.toast.position ?? "top") : l;
            a !== l && o(a);
            let { minToastDurationMs: c } = i.useContext(d.C),
                g = Math.max(s?.toast.duration ?? 3e3, c);
            return (
                i.useEffect(() => {
                    if (null == s) return;
                    let t = setTimeout(() => (0, h.VD)(e), g);
                    return () => clearTimeout(t);
                }, [s, g, e]),
                i.useEffect(() => {
                    let e = s?.toast.text;
                    null != s &&
                        s.key !== p &&
                        null != e &&
                        "" !== e &&
                        ((p = s.key), u.O.announce(e, "critical" === s.toast.variant ? "assertive" : "polite"));
                }, [s]),
                { entry: s, position: l }
            );
        })(t),
        [A, y] = i.useState({ entry: s, leaving: null, isDelayed: !1 });
    s !== A.entry && y({ entry: s, leaving: A.entry ?? A.leaving, isDelayed: null != A.entry });
    let v = i.useCallback(() => y((e) => ({ ...e, leaving: null })), []);
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: l()(g.container, g[c]),
        style: {
            "--custom-toast-animation-duration": `${o.A.modules.toast.ANIMATION_DURATION_MS.resolve()}ms`,
            "--custom-toast-queue-enter-delay": `${o.A.modules.toast.QUEUE_ENTER_DELAY_MS.resolve()}ms`,
            "--toast-container-offset-top": m(n?.top),
            "--toast-container-offset-bottom": m(n?.bottom),
        },
        children: [
            null != A.leaving &&
                (0, r.jsx)(
                    "div",
                    {
                        className: l()(g.toast, g.leave),
                        onAnimationEnd: v,
                        children: (0, r.jsx)(a.y, { ...A.leaving.toast }),
                    },
                    A.leaving.key,
                ),
            null != A.entry &&
                (0, r.jsx)(
                    "div",
                    {
                        className: l()(g.toast, g.enter, { [g.delayed]: A.isDelayed }),
                        children: (0, r.jsx)(a.y, { ...A.entry.toast }),
                    },
                    A.entry.key,
                ),
        ],
    });
}
var y = n(202091),
    v = n(866323),
    x = n(857250),
    w = n(691540),
    E = n(97483),
    C = n(773019);
let b = { duration: 300, friction: 24, tension: 280 },
    N = {
        [E.xJ.TOP]: {
            styles: C.N,
            transition: {
                trail: 400,
                from: { transform: "translate3d(0, -100%, 0)", opacity: 0, config: b },
                enter: { transform: "translate3d(0, -0px, 0)", opacity: 1, config: b },
                leave: { transform: "translate3d(0, -100%, 0)", opacity: 0, config: { ...b, friction: 40, clamp: !0 } },
            },
        },
        [E.xJ.BOTTOM]: {
            styles: C.H,
            transition: {
                trail: 400,
                from: { transform: "translate3d(0, 100%, 0)", opacity: 0, config: b },
                enter: { transform: "translate3d(0, 0px, 0)", opacity: 1, config: b },
                leave: { transform: "translate3d(0, 100%, 0)", opacity: 0, config: { ...b, friction: 40, clamp: !0 } },
            },
        },
    };
function O(e) {
    let { appContext: t } = e,
        n = (0, w.WE)((e) => e.currentToastMap.get(t)),
        s = i.useRef(n?.options?.position ?? E.jg.position),
        l = i.useRef(n?.options?.duration ?? E.jg.duration);
    i.useEffect(() => {
        null != n &&
            ((s.current = n.options?.position ?? E.jg.position), (l.current = n.options?.duration ?? E.jg.duration));
    }, [n]);
    let o = i.useMemo(() => N[n?.options?.position ?? s.current], [n]),
        a = (0, v.p)(n, { keys: (e) => e?.id ?? "", ...o.transition });
    return (
        i.useEffect(() => {
            null != n &&
                setTimeout(() => {
                    (0, w.VD)(t);
                }, l.current);
        }, [n, t]),
        (0, r.jsx)("div", {
            className: o.styles,
            children: a((e, t) =>
                null == t ? null : (0, r.jsx)(y.animated.div, { style: e, children: (0, r.jsx)(x.y, { ...t }) }, t.id),
            ),
        })
    );
}
var _ = n(335144),
    D = n(8062),
    I = n(652215);
function T(e) {
    let { appContext: t } = e,
        n = D.a[t],
        s = (0, _.A)(n),
        l = i.useMemo(
            () =>
                t === I.BRT.APP
                    ? { top: s ?? "var(--custom-app-top-bar-height)", bottom: 132 }
                    : null != s
                      ? { top: s }
                      : void 0,
            [t, s],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(O, { appContext: t }), (0, r.jsx)(A, { surface: n, offset: l })],
    });
}
