l.d(t, { A: () => E });
var a = l(627968),
    s = l(64700),
    r = l(503698),
    i = l.n(r),
    n = l(939249),
    c = l(573613),
    d = l(331322),
    o = l(834730),
    u = l(428678),
    m = l(34188),
    p = l(713517),
    x = l(927578),
    _ = l(837015),
    h = l(483968),
    A = l(683917),
    g = l(512213),
    v = l(985018),
    j = l(551881);
let y = (e) => {
        let { currentUser: t, nameplate: l, section: r, canUsePremiumCollectibles: c, isSelected: d, onClick: o } = e,
            u = (0, s.useRef)(null),
            { isHoveringOrFocusing: m } = (0, p.A)(u);
        return (0, a.jsxs)(n.D, {
            innerRef: u,
            "aria-pressed": d,
            "aria-label": l.label ?? v.intl.string(v.t.x5CoXR),
            className: j.Hj,
            onClick: o,
            children: [
                (0, a.jsx)(g.A, { nameplate: l, user: t, showPlaceholderUser: !0, isHighlighted: m }),
                (0, a.jsx)("div", { className: i()(j.t1, { [j.wH]: d }) }),
                (0, a.jsx)(h.A, {
                    isPurchaseSection: r === A.wn.PURCHASE,
                    isPremiumSection: r === A.wn.PREMIUM_PURCHASE,
                    canUsePremiumCollectibles: c,
                    skuId: l.skuId,
                }),
            ],
        });
    },
    E = (e) => {
        let { currentUser: t, selectedNameplate: l, guildId: s, onSelect: r, onOpenShop: p } = e,
            h = x.Ay.canUseCollectibles(t),
            g = (0, A.Ay)();
        return (0, a.jsx)(c.d_, {
            className: j.pf,
            children: g.map((e) =>
                (0, a.jsxs)(
                    d.B,
                    {
                        gap: 4,
                        children: [
                            (0, a.jsx)(o.E, { variant: "text-md/medium", children: e.header }),
                            e.section === A.wn.PURCHASE &&
                                (0, a.jsxs)("div", {
                                    className: j.VQ,
                                    children: [
                                        (0, a.jsxs)(n.D, {
                                            "aria-pressed": null == l,
                                            className: i()(j.H5, { [j.wH]: null == l }),
                                            onClick: () => r(null),
                                            children: [
                                                (0, a.jsx)(u.K, { size: "md", color: "currentColor" }),
                                                (0, a.jsx)(o.E, {
                                                    variant: "text-xs/normal",
                                                    children:
                                                        null != s
                                                            ? v.intl.string(v.t.CHf9iJ)
                                                            : v.intl.string(v.t.PoWNfe),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)(n.D, {
                                            className: j.H5,
                                            onClick: p,
                                            children: [
                                                (0, a.jsx)(m.U, { size: "md", color: "currentColor" }),
                                                (0, a.jsx)(o.E, {
                                                    variant: "text-xs/normal",
                                                    children: v.intl.string(v.t.pWG4ze),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, a.jsx)("div", {
                                className: j.p_,
                                children: e.items
                                    .filter(_.F)
                                    .map((s) =>
                                        (0, a.jsx)(
                                            y,
                                            {
                                                currentUser: t,
                                                nameplate: s,
                                                section: e.section,
                                                canUsePremiumCollectibles: h,
                                                isSelected: l?.skuId === s.skuId,
                                                onClick: () => r(s),
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
