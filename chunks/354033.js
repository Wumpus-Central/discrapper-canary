n.d(t, { X: () => x, Y: () => v });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(17928),
    s = n(821609),
    o = n(939249),
    u = n(789645),
    c = n(834730),
    d = n(534514),
    p = n(565645),
    m = n(241524),
    h = n(166532),
    C = n(71393),
    E = n(371794),
    A = n(500345),
    f = n(599941),
    y = n(320137),
    S = n(417360),
    P = n(759625),
    T = n(2242),
    I = n(375708),
    _ = n(946536),
    g = n(948642);
let v = (e) => {
        let { onClose: t, listing: n, step: i, guildId: a } = e,
            s = (0, f.Tq)(a),
            c = (0, m.A)(T.TQ),
            d = (() => {
                if (c) return null;
                let e =
                    s?.cover_image_asset?.application_id != null
                        ? (0, E.YE)(s.cover_image_asset.application_id, s.cover_image_asset, 440)
                        : void 0;
                return null == e && i !== h.pn.CONFIRM
                    ? null
                    : null == e
                      ? (0, l.jsx)("div", { className: _.gI })
                      : (0, l.jsx)("img", { src: e, alt: "", className: _.F0 });
            })();
        return (0, l.jsxs)("div", {
            className: r()(_.N1, { [g.G]: null != d, [_.TP]: c || null == d }),
            children: [
                d,
                (() => {
                    if (i !== h.pn.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, E.YE)(n.application_id, n.image_asset, 80);
                    return (0, l.jsx)("div", {
                        className: _.z9,
                        children: (0, l.jsx)("img", { src: e, alt: "", className: _.ah }),
                    });
                })(),
                (0, l.jsx)(o.D, {
                    className: _.G3,
                    onClick: () => t(!1),
                    "aria-label": I.intl.string(I.t.cpT0Cq),
                    children: (0, l.jsx)(u.P, { size: "md", color: "currentColor", className: _.ut }),
                }),
            ],
        });
    },
    x = (e) => {
        let { onClose: t, listing: n, guildId: i } = e,
            r = (0, a.bG)([C.A], () => C.A.getGuild(i), [i]),
            o = (0, y.A)(i).filter((e) => e.roles.includes(n.role_id)),
            u = n.role_benefits.benefits.filter(A.B1).slice(0, null === o.length ? 4 : 3),
            m = (0, S.A)(u).slice(0, null === o.length ? 4 : 3);
        return (0, l.jsxs)("div", {
            className: _.RP,
            children: [
                (0, l.jsx)(d.D, {
                    className: _.RS,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: I.intl.format(I.t["1HIsTk"], { serverName: r?.name }),
                }),
                (0, l.jsx)(c.E, {
                    className: _.sT,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: I.intl.format(I.t.oi3gip, { tier: n.name }),
                }),
                m.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(c.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: _.n2,
                                children: I.intl.string(I.t.w0CQ01),
                            }),
                            (0, l.jsx)("div", {
                                className: _.M3,
                                children: m.map((e) =>
                                    (0, l.jsx)(P.A, { benefit: e, guildId: i, onClick: () => t(!0) }, (0, A.nh)(e)),
                                ),
                            }),
                        ],
                    }),
                (function () {
                    if (0 === o.length) return null;
                    let e = o[0];
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(c.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: _.n2,
                                children: I.intl.string(I.t["6Y1FLi"]),
                            }),
                            (0, l.jsxs)("div", {
                                className: _.DI,
                                children: [
                                    (0, l.jsx)(p.A, {
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated ?? !1,
                                        className: _.mp,
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                className: _.cC,
                                                children: I.intl.string(I.t.PrKk4n),
                                            }),
                                            (0, l.jsx)(c.E, {
                                                color: "interactive-text-default",
                                                variant: "text-sm/normal",
                                                children: I.intl.format(I.t["2ICUkG"], { count: o.length }),
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
                    className: _.EJ,
                    children: (0, l.jsx)(s.$, {
                        variant: "primary",
                        text: I.intl.string(I.t["Ph+ecI"]),
                        onClick: () => t(!0),
                    }),
                }),
            ],
        });
    };
