n.d(t, { N: () => x });
var r = n(477900),
    i = n(582128),
    l = n(503698),
    s = n.n(l),
    o = n(661531),
    a = n(252392),
    d = n(888633),
    u = n(765178),
    c = n(844222),
    h = n(435462);
let f = (0, d.v)(() => ({ containerIdsBySurface: new Map() })),
    g = 0;
var m = n(435871);
function p(e) {
    return "number" == typeof e ? `${e}px` : e;
}
function A(e) {
    let { surface: t = "app", offset: n } = e,
        { entry: l, position: d } = (function (e) {
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
                l = (n ? r : void 0) ?? null,
                [s, o] = i.useState("top"),
                a = null != l ? (l.toast.position ?? "top") : s;
            a !== s && o(a);
            let { minToastDurationMs: d } = i.useContext(c.C),
                m = Math.max(l?.toast.duration ?? 3e3, d);
            return (
                i.useEffect(() => {
                    if (null == l) return;
                    let t = setTimeout(() => (0, h.VD)(e), m);
                    return () => clearTimeout(t);
                }, [l, m, e]),
                i.useEffect(() => {
                    let e = l?.toast.text;
                    null != l &&
                        l.key !== g &&
                        null != e &&
                        "" !== e &&
                        ((g = l.key), u.O.announce(e, "critical" === l.toast.variant ? "assertive" : "polite"));
                }, [l]),
                { entry: l, position: s }
            );
        })(t),
        [A, y] = i.useState({ entry: l, leaving: null, isDelayed: !1 });
    l !== A.entry && y({ entry: l, leaving: A.entry ?? A.leaving, isDelayed: null != A.entry });
    let v = i.useCallback(() => y((e) => ({ ...e, leaving: null })), []);
    return (0, r.jsxs)("div", {
        "aria-hidden": !0,
        className: s()(m.container, m[d]),
        style: {
            "--custom-toast-animation-duration": `${o.A.modules.toast.ANIMATION_DURATION_MS.resolve()}ms`,
            "--custom-toast-queue-enter-delay": `${o.A.modules.toast.QUEUE_ENTER_DELAY_MS.resolve()}ms`,
            "--toast-container-offset-top": p(n?.top),
            "--toast-container-offset-bottom": p(n?.bottom),
        },
        children: [
            null != A.leaving &&
                (0, r.jsx)(
                    "div",
                    {
                        className: s()(m.toast, m.leave),
                        onAnimationEnd: v,
                        children: (0, r.jsx)(a.y, { ...A.leaving.toast }),
                    },
                    A.leaving.key,
                ),
            null != A.entry &&
                (0, r.jsx)(
                    "div",
                    {
                        className: s()(m.toast, m.enter, { [m.delayed]: A.isDelayed }),
                        children: (0, r.jsx)(a.y, { ...A.entry.toast }),
                    },
                    A.entry.key,
                ),
        ],
    });
}
var y = n(335144),
    v = n(8062),
    w = n(652215);
function x(e) {
    let { appContext: t } = e,
        n = v.a[t],
        l = (0, y.A)(n),
        s = i.useMemo(
            () =>
                t === w.BRT.APP
                    ? { top: l ?? "var(--custom-app-top-bar-height)", bottom: 132 }
                    : null != l
                      ? { top: l }
                      : void 0,
            [t, l],
        );
    return (0, r.jsx)(A, { surface: n, offset: s });
}
