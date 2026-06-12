n.d(t, { X: () => N, Y: () => g });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(17928),
    s = n(821609),
    o = n(939249),
    u = n(789645),
    c = n(834730),
    d = n(534514),
    C = n(565645),
    p = n(241524),
    m = n(166532),
    _ = n(71393),
    E = n(371794),
    T = n(500345),
    I = n(599941),
    S = n(320137),
    h = n(417360),
    A = n(759625),
    O = n(2242),
    f = n(375708),
    x = n(28008),
    P = n(575650);
let g = (e) => {
        let { onClose: t, listing: n, step: r, guildId: a } = e,
            s = (0, I.Tq)(a),
            c = (0, p.A)(O.TQ),
            d = (() => {
                if (c) return null;
                let e =
                    s?.cover_image_asset?.application_id != null
                        ? (0, E.YE)(s.cover_image_asset.application_id, s.cover_image_asset, 440)
                        : void 0;
                return null == e && r !== m.pn.CONFIRM
                    ? null
                    : null == e
                      ? (0, l.jsx)("div", { className: x.gI })
                      : (0, l.jsx)("img", { src: e, alt: "", className: x.F0 });
            })();
        return (0, l.jsxs)("div", {
            className: i()(x.N1, { [P.GI]: null != d, [x.TP]: c || null == d }),
            children: [
                d,
                (() => {
                    if (r !== m.pn.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, E.YE)(n.application_id, n.image_asset, 80);
                    return (0, l.jsx)("div", {
                        className: x.z9,
                        children: (0, l.jsx)("img", { src: e, alt: "", className: x.ah }),
                    });
                })(),
                (0, l.jsx)(o.D, {
                    className: x.G3,
                    onClick: () => t(!1),
                    "aria-label": f.intl.string(f.t.cpT0Cq),
                    children: (0, l.jsx)(u.P, { size: "md", color: "currentColor", className: x.ut }),
                }),
            ],
        });
    },
    N = (e) => {
        let { onClose: t, listing: n, guildId: r } = e,
            i = (0, a.bG)([_.A], () => _.A.getGuild(r), [r]),
            o = (0, S.A)(r).filter((e) => e.roles.includes(n.role_id)),
            u = n.role_benefits.benefits.filter(T.B1).slice(0, null === o.length ? 4 : 3),
            p = (0, h.A)(u).slice(0, null === o.length ? 4 : 3);
        return (0, l.jsxs)("div", {
            className: x.RP,
            children: [
                (0, l.jsx)(d.D, {
                    className: x.RS,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: f.intl.format(f.t["1HIsTk"], { serverName: i?.name }),
                }),
                (0, l.jsx)(c.E, {
                    className: x.sT,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: f.intl.format(f.t.oi3gip, { tier: n.name }),
                }),
                p.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(c.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: x.n2,
                                children: f.intl.string(f.t.w0CQ01),
                            }),
                            (0, l.jsx)("div", {
                                className: x.M3,
                                children: p.map((e) =>
                                    (0, l.jsx)(A.A, { benefit: e, guildId: r, onClick: () => t(!0) }, (0, T.nh)(e)),
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
                                className: x.n2,
                                children: f.intl.string(f.t["6Y1FLi"]),
                            }),
                            (0, l.jsxs)("div", {
                                className: x.DI,
                                children: [
                                    (0, l.jsx)(C.A, {
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated ?? !1,
                                        className: x.mp,
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                className: x.cC,
                                                children: f.intl.string(f.t.PrKk4n),
                                            }),
                                            (0, l.jsx)(c.E, {
                                                color: "interactive-text-default",
                                                variant: "text-sm/normal",
                                                children: f.intl.format(f.t["2ICUkG"], { count: o.length }),
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
                    className: x.EJ,
                    children: (0, l.jsx)(s.$, {
                        variant: "primary",
                        text: f.intl.string(f.t["Ph+ecI"]),
                        onClick: () => t(!0),
                    }),
                }),
            ],
        });
    };
