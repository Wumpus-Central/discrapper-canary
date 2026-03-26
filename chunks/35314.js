l.d(t, { A: () => h });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    r = l.n(i),
    a = l(397927),
    c = l(713517),
    o = l(927578),
    d = l(837015),
    u = l(483968),
    m = l(683917),
    p = l(512213),
    x = l(985018),
    A = l(352784);
let g = (e) => {
        let { currentUser: t, nameplate: l, section: i, canUsePremiumCollectibles: o, isSelected: d, onClick: g } = e,
            h = (0, s.useRef)(null),
            { isHoveringOrFocusing: _ } = (0, c.A)(h);
        return (0, n.jsxs)(a.DUT, {
            innerRef: h,
            "aria-label": l.label ?? x.intl.string(x.t.x5CoXR),
            className: A.Hj,
            onClick: g,
            children: [
                (0, n.jsx)(p.A, { nameplate: l, user: t, showPlaceholderUser: !0, isHighlighted: _ }),
                (0, n.jsx)("div", { className: r()(A.t1, { [A.wH]: d }) }),
                (0, n.jsx)(u.A, {
                    isPurchaseSection: i === m.wn.PURCHASE,
                    isPremiumSection: i === m.wn.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: o,
                    skuId: l.skuId,
                }),
            ],
        });
    },
    h = (e) => {
        let { currentUser: t, selectedNameplate: l, guildId: s, onSelect: i, onOpenShop: c } = e,
            u = o.Ay.canUseCollectibles(t),
            p = (0, m.Ay)();
        return (0, n.jsx)(a.d_W, {
            className: A.pf,
            children: p.map((e) =>
                (0, n.jsxs)(
                    a.BJc,
                    {
                        gap: 4,
                        children: [
                            (0, n.jsx)(a.Text, { variant: "text-md/medium", children: e.header }),
                            e.section === m.wn.PURCHASE &&
                                (0, n.jsxs)("div", {
                                    className: A.VQ,
                                    children: [
                                        (0, n.jsxs)(a.DUT, {
                                            className: r()(A.H5, { [A.wH]: null == l }),
                                            onClick: () => i(null),
                                            children: [
                                                (0, n.jsx)(a.KTN, { size: "md", color: "currentColor" }),
                                                (0, n.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != s
                                                            ? x.intl.string(x.t.CHf9iJ)
                                                            : x.intl.string(x.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, n.jsxs)(a.DUT, {
                                            className: A.H5,
                                            onClick: c,
                                            children: [
                                                (0, n.jsx)(a.U1X, { size: "md", color: "currentColor" }),
                                                (0, n.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    children: x.intl.string(x.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, n.jsx)("div", {
                                className: A.p_,
                                children: e.items
                                    .filter(d.F)
                                    .map((s) =>
                                        (0, n.jsx)(
                                            g,
                                            {
                                                currentUser: t,
                                                nameplate: s,
                                                section: e.section,
                                                canUsePremiumCollectibles: u,
                                                isSelected: l?.skuId === s.skuId,
                                                onClick: () => i(s),
                                            },
                                            s.skuId,
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
