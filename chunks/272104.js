l.d(t, { A: () => A });
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(397927),
    c = l(837015),
    o = l(483968),
    u = l(713517),
    d = l(927578),
    m = l(659503),
    p = l(550111),
    x = l(985018),
    g = l(390734);
let b = (e) => {
        var t;
        let { currentUser: l, nameplate: i, section: c, canUsePremiumCollectibles: d, isSelected: b, onClick: A } = e,
            h = (0, r.useRef)(null),
            { isHoveringOrFocusing: f } = (0, u.A)(h);
        return (0, n.jsxs)(a.DUT, {
            innerRef: h,
            "aria-label": null != (t = i.label) ? t : x.intl.string(x.t.x5CoXR),
            className: g.Hj,
            onClick: A,
            children: [
                (0, n.jsx)(p.A, {
                    nameplate: i,
                    user: l,
                    showPlaceholderUser: !0,
                    isHighlighted: f,
                }),
                (0, n.jsx)("div", { className: s()(g.t1, { [g.wH]: b }) }),
                (0, n.jsx)(o.A, {
                    isPurchaseSection: c === m.wn.PURCHASE,
                    isPremiumSection: c === m.wn.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: d,
                    skuId: i.skuId,
                }),
            ],
        });
    },
    A = (e) => {
        let { currentUser: t, selectedNameplate: l, guildId: r, onSelect: i, onOpenShop: o } = e,
            u = d.Ay.canUseCollectibles(t),
            p = (0, m.Ay)();
        return (0, n.jsx)(a.d_W, {
            className: g.pf,
            children: p.map((e) =>
                (0, n.jsxs)(
                    a.BJc,
                    {
                        gap: 4,
                        children: [
                            (0, n.jsx)(a.Text, {
                                variant: "text-md/medium",
                                children: e.header,
                            }),
                            e.section === m.wn.PURCHASE &&
                                (0, n.jsxs)("div", {
                                    className: g.VQ,
                                    children: [
                                        (0, n.jsxs)(a.DUT, {
                                            className: s()(g.H5, { [g.wH]: null == l }),
                                            onClick: () => i(null),
                                            children: [
                                                (0, n.jsx)(a.KTN, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, n.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != r
                                                            ? x.intl.string(x.t.CHf9iJ)
                                                            : x.intl.string(x.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)(a.DUT, {
                                            className: g.H5,
                                            onClick: o,
                                            children: [
                                                (0, n.jsx)(a.U1X, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                                (0, n.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    children: x.intl.string(x.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, n.jsx)("div", {
                                className: g.p_,
                                children: e.items.filter(c.F).map((r) =>
                                    (0, n.jsx)(
                                        b,
                                        {
                                            currentUser: t,
                                            nameplate: r,
                                            section: e.section,
                                            canUsePremiumCollectibles: u,
                                            isSelected: (null == l ? void 0 : l.skuId) === r.skuId,
                                            onClick: () => i(r),
                                        },
                                        r.skuId,
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
