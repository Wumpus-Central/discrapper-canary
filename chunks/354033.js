i.d(t, { X: () => I, Y: () => b });
var l = i(627968);
i(64700);
var n = i(503698),
    a = i.n(n),
    s = i(311907),
    r = i(732955),
    c = i(397927),
    d = i(565645),
    o = i(241524),
    u = i(166532),
    m = i(71393),
    x = i(371794),
    h = i(500345),
    g = i(599941),
    v = i(320137),
    j = i(417360),
    A = i(759625),
    f = i(2242),
    _ = i(985018),
    p = i(90776),
    N = i(554418);
let b = (e) => {
        let { onClose: t, listing: i, step: n, guildId: s } = e,
            r = (0, g.Tq)(s),
            d = (0, o.A)(f.TQ),
            m = (() => {
                if (d) return null;
                let e =
                    r?.cover_image_asset?.application_id != null
                        ? (0, x.YE)(r.cover_image_asset.application_id, r.cover_image_asset, 440)
                        : void 0;
                return null == e && n !== u.pn.CONFIRM
                    ? null
                    : null == e
                      ? (0, l.jsx)("div", { className: p.gI })
                      : (0, l.jsx)("img", { src: e, alt: "", className: p.F0 });
            })();
        return (0, l.jsxs)("div", {
            className: a()(p.N1, { [N.GI]: null != m, [p.TP]: d || null == m }),
            children: [
                m,
                (() => {
                    if (n !== u.pn.CONFIRM) return null;
                    let e = null == i.image_asset ? void 0 : (0, x.YE)(i.application_id, i.image_asset, 80);
                    return (0, l.jsx)("div", {
                        className: p.z9,
                        children: (0, l.jsx)("img", { src: e, alt: "", className: p.ah }),
                    });
                })(),
                (0, l.jsx)(c.DUT, {
                    className: p.G3,
                    onClick: () => t(!1),
                    "aria-label": _.intl.string(_.t.cpT0Cq),
                    children: (0, l.jsx)(c.PGe, { size: "md", color: "currentColor", className: p.ut }),
                }),
            ],
        });
    },
    I = (e) => {
        let { onClose: t, listing: i, guildId: n } = e,
            a = (0, s.bG)([m.A], () => m.A.getGuild(n), [n]),
            o = (0, v.A)(n).filter((e) => e.roles.includes(i.role_id)),
            u = i.role_benefits.benefits.filter(h.B1).slice(0, null === o.length ? 4 : 3),
            x = (0, j.A)(u).slice(0, null === o.length ? 4 : 3);
        return (0, l.jsxs)("div", {
            className: p.RP,
            children: [
                (0, l.jsx)(c.Heading, {
                    className: p.RS,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: _.intl.format(_.t["1HIsTk"], { serverName: a?.name }),
                }),
                (0, l.jsx)(c.Text, {
                    className: p.sT,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: _.intl.format(_.t.oi3gip, { tier: i.name }),
                }),
                x.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: p.n2,
                                children: _.intl.string(_.t.w0CQ01),
                            }),
                            (0, l.jsx)("div", {
                                className: p.M3,
                                children: x.map((e) =>
                                    (0, l.jsx)(A.A, { benefit: e, guildId: n, onClick: () => t(!0) }, (0, h.nh)(e)),
                                ),
                            }),
                        ],
                    }),
                (() => {
                    if (0 === o.length) return null;
                    let e = o[0];
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: p.n2,
                                children: _.intl.string(_.t["6Y1FLi"]),
                            }),
                            (0, l.jsxs)("div", {
                                className: p.DI,
                                children: [
                                    (0, l.jsx)(d.A, {
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated ?? !1,
                                        className: p.mp,
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)(c.Text, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                className: p.cC,
                                                children: _.intl.string(_.t.PrKk4n),
                                            }),
                                            (0, l.jsx)(c.Text, {
                                                color: "interactive-text-default",
                                                variant: "text-sm/normal",
                                                children: _.intl.format(_.t["2ICUkG"], { count: o.length }),
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
                    className: p.EJ,
                    children: (0, l.jsx)(r.$nd, {
                        variant: "primary",
                        text: _.intl.string(_.t["Ph+ecI"]),
                        onClick: () => t(!0),
                    }),
                }),
            ],
        });
    };
