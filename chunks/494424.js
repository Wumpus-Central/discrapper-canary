n.d(t, { Z: () => p });
var a = n(951288),
    r = n(647438),
    i = n(198168),
    l = n(848572),
    o = n(863504),
    s = n(787528),
    c = n(714167),
    d = n(474936),
    u = n(921944),
    m = n(388032);
let p = (e) => {
    var t, n;
    let { markAsDismissed: p, targetElementRef: h, children: x } = e,
        g = (0, l.Rw)(),
        f = null != (t = null == g ? void 0 : g.id) ? t : d.VU.PREMIUM_TENURE_1_MONTH,
        b =
            null != (n = null == g ? void 0 : g.nameUnformatted)
                ? n
                : d.vK[d.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted,
        v = (m.intl.string(m.t.lG6a5x) + " " + m.intl.string(b)).toLocaleUpperCase(),
        j = (0, o.Z)(f),
        _ = (0, s.J)(f),
        y = (0, r.useCallback)(() => {
            p(u.L.TAKE_ACTION);
        }, [p]),
        C = (0, r.useCallback)(() => {
            p(u.L.USER_DISMISS);
        }, [p]),
        S = m.intl.format(m.t.GSynLW, { time: 5 });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            x,
            (0, a.jsx)(c.Z, {
                targetElementRef: h,
                shouldShow: !0,
                onRequestClose: C,
                align: "right",
                position: "top",
                caretConfig: { align: "center" },
                gradientColor: j,
                size: "lg",
                graphic: {
                    type: "dynamic",
                    component: i.DynamicGraphicComponent.BADGE_IMAGE_WITH_COUNTDOWN_TIMER,
                    aspectRatio: "6/4",
                    props: {
                        src: _,
                        alt: v,
                        size: "large",
                    },
                },
                title: v,
                body: S,
                actions: [
                    {
                        text: "Reactivate",
                        variant: "expressive",
                        onClick: y,
                    },
                ],
            }),
        ],
    });
};
