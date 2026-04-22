l.d(t, { A: () => v });
var r = l(627968),
    a = l(64700),
    s = l(503698),
    n = l.n(s),
    i = l(939249),
    c = l(573613),
    o = l(331322),
    u = l(834730),
    d = l(428678),
    m = l(34188),
    A = l(713517),
    p = l(927578),
    _ = l(837015),
    h = l(483968),
    g = l(683917),
    f = l(512213),
    x = l(985018),
    E = l(551881);
let I = (e) => {
        let { currentUser: t, nameplate: l, section: s, canUsePremiumCollectibles: c, isSelected: o, onClick: u } = e,
            d = (0, a.useRef)(null),
            { isHoveringOrFocusing: m } = (0, A.A)(d);
        return (0, r.jsxs)(i.D, {
            innerRef: d,
            "aria-pressed": o,
            "aria-label": l.label ?? x.intl.string(x.t.x5CoXR),
            className: E.Hj,
            onClick: u,
            children: [
                (0, r.jsx)(f.A, { nameplate: l, user: t, showPlaceholderUser: !0, isHighlighted: m }),
                (0, r.jsx)("div", { className: n()(E.t1, { [E.wH]: o }) }),
                (0, r.jsx)(h.A, {
                    isPurchaseSection: s === g.wn.PURCHASE,
                    isPremiumSection: s === g.wn.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: c,
                    skuId: l.skuId,
                }),
            ],
        });
    },
    v = (e) => {
        let { currentUser: t, selectedNameplate: l, guildId: a, onSelect: s, onOpenShop: A } = e,
            h = p.Ay.canUseCollectibles(t),
            f = (0, g.Ay)();
        return (0, r.jsx)(c.d_, {
            className: E.pf,
            children: f.map((e) =>
                (0, r.jsxs)(
                    o.B,
                    {
                        gap: 4,
                        children: [
                            (0, r.jsx)(u.E, { variant: "text-md/medium", children: e.header }),
                            e.section === g.wn.PURCHASE &&
                                (0, r.jsxs)("div", {
                                    className: E.VQ,
                                    children: [
                                        (0, r.jsxs)(i.D, {
                                            "aria-pressed": null == l,
                                            className: n()(E.H5, { [E.wH]: null == l }),
                                            onClick: () => s(null),
                                            children: [
                                                (0, r.jsx)(d.K, { size: "md", color: "currentColor" }),
                                                (0, r.jsx)(u.E, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != a
                                                            ? x.intl.string(x.t.CHf9iJ)
                                                            : x.intl.string(x.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)(i.D, {
                                            className: E.H5,
                                            onClick: A,
                                            children: [
                                                (0, r.jsx)(m.U, { size: "md", color: "currentColor" }),
                                                (0, r.jsx)(u.E, {
                                                    variant: "text-xs/normal",
                                                    children: x.intl.string(x.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, r.jsx)("div", {
                                className: E.p_,
                                children: e.items
                                    .filter(_.F)
                                    .map((a) =>
                                        (0, r.jsx)(
                                            I,
                                            {
                                                currentUser: t,
                                                nameplate: a,
                                                section: e.section,
                                                canUsePremiumCollectibles: h,
                                                isSelected: l?.skuId === a.skuId,
                                                onClick: () => s(a),
                                            },
                                            a.skuId,
                                        ),
                                    ),
                            }),
                        ],
                    },
                    e.section,
                ),
            ),
        });
    };
