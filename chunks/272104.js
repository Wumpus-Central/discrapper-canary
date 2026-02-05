n.d(t, { A: () => h });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(397927),
    c = n(837015),
    o = n(483968),
    u = n(713517),
    d = n(927578),
    m = n(659503),
    p = n(550111),
    x = n(985018),
    A = n(390734);
let g = (e) => {
        let { currentUser: t, nameplate: n, section: s, canUsePremiumCollectibles: c, isSelected: d, onClick: g } = e,
            h = (0, i.useRef)(null),
            { isHoveringOrFocusing: _ } = (0, u.A)(h);
        return (0, l.jsxs)(a.DUT, {
            innerRef: h,
            "aria-label": n.label ?? x.intl.string(x.t.x5CoXR),
            className: A.Hj,
            onClick: g,
            children: [
                (0, l.jsx)(p.A, { nameplate: n, user: t, showPlaceholderUser: !0, isHighlighted: _ }),
                (0, l.jsx)("div", { className: r()(A.t1, { [A.wH]: d }) }),
                (0, l.jsx)(o.A, {
                    isPurchaseSection: s === m.wn.PURCHASE,
                    isPremiumSection: s === m.wn.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: c,
                    skuId: n.skuId,
                }),
            ],
        });
    },
    h = (e) => {
        let { currentUser: t, selectedNameplate: n, guildId: i, onSelect: s, onOpenShop: o } = e,
            u = d.Ay.canUseCollectibles(t),
            p = (0, m.Ay)();
        return (0, l.jsx)(a.d_W, {
            className: A.pf,
            children: p.map((e) =>
                (0, l.jsxs)(
                    a.BJc,
                    {
                        gap: 4,
                        children: [
                            (0, l.jsx)(a.Text, { variant: "text-md/medium", children: e.header }),
                            e.section === m.wn.PURCHASE &&
                                (0, l.jsxs)("div", {
                                    className: A.VQ,
                                    children: [
                                        (0, l.jsxs)(a.DUT, {
                                            className: r()(A.H5, { [A.wH]: null == n }),
                                            onClick: () => s(null),
                                            children: [
                                                (0, l.jsx)(a.KTN, { size: "md", color: "currentColor" }),
                                                (0, l.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != i
                                                            ? x.intl.string(x.t.CHf9iJ)
                                                            : x.intl.string(x.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)(a.DUT, {
                                            className: A.H5,
                                            onClick: o,
                                            children: [
                                                (0, l.jsx)(a.U1X, { size: "md", color: "currentColor" }),
                                                (0, l.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    children: x.intl.string(x.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, l.jsx)("div", {
                                className: A.p_,
                                children: e.items
                                    .filter(c.F)
                                    .map((i) =>
                                        (0, l.jsx)(
                                            g,
                                            {
                                                currentUser: t,
                                                nameplate: i,
                                                section: e.section,
                                                canUsePremiumCollectibles: u,
                                                isSelected: n?.skuId === i.skuId,
                                                onClick: () => s(i),
                                            },
                                            i.skuId,
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
