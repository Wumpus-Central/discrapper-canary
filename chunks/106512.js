var i = n(477900),
    o = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(534514),
    r = n(834730),
    c = n(331322),
    d = n(821609),
    u = n(129230),
    p = n(975571),
    m = n(807098),
    h = n(65470),
    x = n(810498),
    b = n(652215),
    g = n(792996),
    A = n(132344);
n.d(
    e,
    {},
    {
        m: function (t) {
            let { className: e, config: n } = t,
                l = (0, m.T)(n.asset),
                N = (0, m.T)(n.backgroundAsset),
                j = (0, x.gc)(N),
                v = o.useMemo(() => {
                    let t = n.gradient;
                    if (null != t && null != t.colors && !(t.colors.length < 2))
                        return (0, x.K5)({ gradient: t.colors, angle: t.angle }, { defaultAngle: 180 });
                }, [n.gradient]),
                y = (0, x.x)(j, v),
                I = null != n.textColor && "" !== n.textColor ? { color: n.textColor } : void 0,
                T = n.helpArticle?.id;
            return (0, i.jsxs)("div", {
                className: s()(A.WR, e),
                style: y,
                children: [
                    null != l && (0, i.jsx)("img", { alt: "", className: A.TB, "aria-hidden": !0, src: l }),
                    (0, i.jsxs)("div", {
                        className: A.QT,
                        children: [
                            (0, i.jsx)(a.D, {
                                className: A.u_,
                                style: I,
                                color: "text-strong",
                                variant: "heading-lg/semibold",
                                children: n.header,
                            }),
                            (0, i.jsx)(r.E, {
                                style: I,
                                color: "text-muted",
                                variant: "body-sm/medium",
                                children: n.body,
                            }),
                            null != n.additionalTerms &&
                                (0, i.jsx)(r.E, {
                                    className: A.KW,
                                    style: I,
                                    color: "text-muted",
                                    variant: "footnote/normal",
                                    children: n.additionalTerms,
                                }),
                            (0, i.jsxs)(c.B, {
                                direction: "horizontal",
                                gap: 16,
                                className: A.mG,
                                children: [
                                    (0, i.jsx)(h.A, {
                                        variant: "primary",
                                        size: "md",
                                        onClick: () => {
                                            u.default.track(b.HAw.PREMIUM_SETTINGS_INTERACTED, {
                                                cta_type: "gifting_button",
                                                target: "payment modal",
                                            });
                                        },
                                    }),
                                    null != T &&
                                        "" !== T &&
                                        (0, i.jsx)(d.$, {
                                            variant: "secondary",
                                            text: g.intl.string(g.t.hvVgAZ),
                                            onClick: () => window.open(p.A.getArticleURL(T), "_blank"),
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);
