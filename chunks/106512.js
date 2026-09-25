n.d(e, { m: () => h });
var i = n(477900),
    l = n(582128),
    o = n(503698),
    s = n.n(o),
    a = n(297264),
    r = n(834730),
    c = n(174459),
    d = n(807098),
    u = n(65470),
    p = n(810498),
    m = n(652215),
    x = n(132344);
function h(t) {
    let { className: e, config: n } = t,
        o = (0, d.T)(n.asset),
        h = (0, d.T)(n.backgroundAsset),
        b = (0, p.gc)(h),
        g = l.useMemo(() => {
            let t = n.gradient;
            if (null != t && null != t.colors && !(t.colors.length < 2))
                return (0, p.K5)({ gradient: t.colors, angle: t.angle }, { defaultAngle: 180 });
        }, [n.gradient]),
        A = (0, p.x)(b, g),
        N = null != n.textColor && "" !== n.textColor ? { color: n.textColor } : void 0;
    return (0, i.jsxs)("div", {
        className: s()(x.WR, e),
        style: A,
        children: [
            null != o && (0, i.jsx)("img", { alt: "", className: x.TB, "aria-hidden": !0, src: o }),
            (0, i.jsxs)("div", {
                className: x.QT,
                children: [
                    (0, i.jsx)(a.D, {
                        className: x.u_,
                        style: N,
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        children: n.header,
                    }),
                    (0, i.jsx)(r.E, {
                        className: s()(x.Oi, x.F_),
                        style: N,
                        color: "text-muted",
                        variant: "text-sm/medium",
                        children: n.body,
                    }),
                    null != n.additionalTerms &&
                        (0, i.jsx)(r.E, {
                            className: x.KW,
                            style: N,
                            color: "text-muted",
                            variant: "text-xxs/normal",
                            children: n.additionalTerms,
                        }),
                    (0, i.jsx)(u.A, {
                        variant: "primary",
                        size: "md",
                        onClick: () => {
                            c.default.track(m.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                cta_type: "gifting_button",
                                target: "payment modal",
                            });
                        },
                    }),
                ],
            }),
        ],
    });
}
