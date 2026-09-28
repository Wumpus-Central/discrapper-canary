n.d(e, { m: () => j });
var i = n(477900),
    l = n(582128),
    o = n(503698),
    a = n.n(o),
    s = n(297264),
    r = n(834730),
    c = n(331322),
    d = n(821609),
    p = n(174459),
    u = n(975571),
    m = n(807098),
    x = n(65470),
    h = n(810498),
    b = n(652215),
    g = n(375708),
    A = n(132344);
function j(t) {
    let { className: e, config: n } = t,
        o = (0, m.T)(n.asset),
        j = (0, m.T)(n.backgroundAsset),
        N = (0, h.gc)(j),
        v = l.useMemo(() => {
            let t = n.gradient;
            if (null != t && null != t.colors && !(t.colors.length < 2))
                return (0, h.K5)({ gradient: t.colors, angle: t.angle }, { defaultAngle: 180 });
        }, [n.gradient]),
        y = (0, h.x)(N, v),
        T = null != n.textColor && "" !== n.textColor ? { color: n.textColor } : void 0;
    return (0, i.jsxs)("div", {
        className: a()(A.WR, e),
        style: y,
        children: [
            null != o && (0, i.jsx)("img", { alt: "", className: A.TB, "aria-hidden": !0, src: o }),
            (0, i.jsxs)("div", {
                className: A.QT,
                children: [
                    (0, i.jsx)(s.D, {
                        className: A.u_,
                        style: T,
                        color: "text-strong",
                        variant: "heading-lg/extrabold",
                        children: n.header,
                    }),
                    (0, i.jsx)(r.E, { style: T, color: "text-muted", variant: "text-sm/medium", children: n.body }),
                    null != n.additionalTerms &&
                        (0, i.jsx)(r.E, {
                            className: A.KW,
                            style: T,
                            color: "text-muted",
                            variant: "text-xxs/normal",
                            children: n.additionalTerms,
                        }),
                    (0, i.jsxs)(c.B, {
                        direction: "horizontal",
                        gap: 16,
                        className: A.mG,
                        children: [
                            (0, i.jsx)(x.A, {
                                variant: "primary",
                                size: "md",
                                onClick: () => {
                                    p.default.track(b.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                        cta_type: "gifting_button",
                                        target: "payment modal",
                                    });
                                },
                            }),
                            (0, i.jsx)(d.$, {
                                variant: "secondary",
                                text: g.intl.string(g.t.hvVgAZ),
                                onClick: () => window.open(u.A.getArticleURL(0x27a74db36617), "_blank"),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
