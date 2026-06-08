n.d(t, { X: () => P, Y: () => x });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(17928),
    a = n(821609),
    o = n(939249),
    u = n(789645),
    c = n(834730),
    d = n(534514),
    C = n(565645),
    p = n(241524),
    _ = n(166532),
    m = n(71393),
    T = n(371794),
    E = n(500345),
    I = n(599941),
    A = n(320137),
    O = n(417360),
    S = n(759625),
    h = n(2242),
    g = n(375708),
    N = n(28008),
    f = n(575650);
let x = (e) => {
        let { onClose: t, listing: n, step: r, guildId: s } = e,
            a = (0, I.Tq)(s),
            c = (0, p.A)(h.TQ),
            d = (() => {
                if (c) return null;
                let e =
                    a?.cover_image_asset?.application_id != null
                        ? (0, T.YE)(a.cover_image_asset.application_id, a.cover_image_asset, 440)
                        : void 0;
                return null == e && r !== _.pn.CONFIRM
                    ? null
                    : null == e
                      ? (0, l.jsx)("div", { className: N.gI })
                      : (0, l.jsx)("img", { src: e, alt: "", className: N.F0 });
            })();
        return (0, l.jsxs)("div", {
            className: i()(N.N1, { [f.GI]: null != d, [N.TP]: c || null == d }),
            children: [
                d,
                (() => {
                    if (r !== _.pn.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, T.YE)(n.application_id, n.image_asset, 80);
                    return (0, l.jsx)("div", {
                        className: N.z9,
                        children: (0, l.jsx)("img", { src: e, alt: "", className: N.ah }),
                    });
                })(),
                (0, l.jsx)(o.D, {
                    className: N.G3,
                    onClick: () => t(!1),
                    "aria-label": g.intl.string(g.t.cpT0Cq),
                    children: (0, l.jsx)(u.P, { size: "md", color: "currentColor", className: N.ut }),
                }),
            ],
        });
    },
    P = (e) => {
        let { onClose: t, listing: n, guildId: r } = e,
            i = (0, s.bG)([m.A], () => m.A.getGuild(r), [r]),
            o = (0, A.A)(r).filter((e) => e.roles.includes(n.role_id)),
            u = n.role_benefits.benefits.filter(E.B1).slice(0, null === o.length ? 4 : 3),
            p = (0, O.A)(u).slice(0, null === o.length ? 4 : 3);
        return (0, l.jsxs)("div", {
            className: N.RP,
            children: [
                (0, l.jsx)(d.D, {
                    className: N.RS,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: g.intl.format(g.t["1HIsTk"], { serverName: i?.name }),
                }),
                (0, l.jsx)(c.E, {
                    className: N.sT,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: g.intl.format(g.t.oi3gip, { tier: n.name }),
                }),
                p.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(c.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: N.n2,
                                children: g.intl.string(g.t.w0CQ01),
                            }),
                            (0, l.jsx)("div", {
                                className: N.M3,
                                children: p.map((e) =>
                                    (0, l.jsx)(S.A, { benefit: e, guildId: r, onClick: () => t(!0) }, (0, E.nh)(e)),
                                ),
                            }),
                        ],
                    }),
                (() => {
                    if (0 === o.length) return null;
                    let e = o[0];
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(c.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: N.n2,
                                children: g.intl.string(g.t["6Y1FLi"]),
                            }),
                            (0, l.jsxs)("div", {
                                className: N.DI,
                                children: [
                                    (0, l.jsx)(C.A, {
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated ?? !1,
                                        className: N.mp,
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                className: N.cC,
                                                children: g.intl.string(g.t.PrKk4n),
                                            }),
                                            (0, l.jsx)(c.E, {
                                                color: "interactive-text-default",
                                                variant: "text-sm/normal",
                                                children: g.intl.format(g.t["2ICUkG"], { count: o.length }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                })(),
                (0, l.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: N.EJ,
                    children: (0, l.jsx)(a.$, {
                        variant: "primary",
                        text: g.intl.string(g.t["Ph+ecI"]),
                        onClick: () => t(!0),
                    }),
                }),
            ],
        });
    };
