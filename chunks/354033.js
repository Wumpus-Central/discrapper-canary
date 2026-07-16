n.d(t, { X: () => v, Y: () => x });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(17928),
    s = n(821609),
    o = n(939249),
    u = n(789645),
    c = n(834730),
    d = n(297264),
    p = n(565645),
    m = n(241524),
    C = n(166532),
    h = n(71393),
    E = n(371794),
    f = n(500345),
    A = n(599941),
    y = n(320137),
    S = n(417360),
    P = n(759625),
    I = n(2242),
    _ = n(375708),
    T = n(28008),
    g = n(575650);
function x(e) {
    let { onClose: t, listing: n, step: i, guildId: a } = e,
        s = (0, A.Tq)(a),
        c = (0, m.A)(I.TQ),
        d = (function () {
            if (c) return null;
            let e =
                s?.cover_image_asset?.application_id != null
                    ? (0, E.YE)(s.cover_image_asset.application_id, s.cover_image_asset, 440)
                    : void 0;
            return null == e && i !== C.pn.CONFIRM
                ? null
                : null == e
                  ? (0, l.jsx)("div", { className: T.gI })
                  : (0, l.jsx)("img", { src: e, alt: "", className: T.F0 });
        })();
    return (0, l.jsxs)("div", {
        className: r()(T.N1, { [g.G]: null != d, [T.TP]: c || null == d }),
        children: [
            d,
            (function () {
                if (i !== C.pn.CONFIRM) return null;
                let e = null == n.image_asset ? void 0 : (0, E.YE)(n.application_id, n.image_asset, 80);
                return (0, l.jsx)("div", {
                    className: T.z9,
                    children: (0, l.jsx)("img", { src: e, alt: "", className: T.ah }),
                });
            })(),
            (0, l.jsx)(o.D, {
                className: T.G3,
                onClick: () => t(!1),
                "aria-label": _.intl.string(_.t.cpT0Cq),
                children: (0, l.jsx)(u.P, { size: "md", color: "currentColor", className: T.ut }),
            }),
        ],
    });
}
function v(e) {
    let { onClose: t, listing: n, guildId: i } = e,
        r = (0, a.bG)([h.A], () => h.A.getGuild(i), [i]),
        o = (0, y.A)(i).filter((e) => e.roles.includes(n.role_id)),
        u = n.role_benefits.benefits.filter(f.B1).slice(0, null === o.length ? 4 : 3),
        m = (0, S.A)(u).slice(0, null === o.length ? 4 : 3);
    return (0, l.jsxs)("div", {
        className: T.RP,
        children: [
            (0, l.jsx)(d.D, {
                className: T.RS,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: _.intl.format(_.t["1HIsTk"], { serverName: r?.name }),
            }),
            (0, l.jsx)(c.E, {
                className: T.sT,
                variant: "text-md/normal",
                color: "text-default",
                children: _.intl.format(_.t.oi3gip, { tier: n.name }),
            }),
            m.length > 0 &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(c.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: T.n2,
                            children: _.intl.string(_.t.w0CQ01),
                        }),
                        (0, l.jsx)("div", {
                            className: T.M3,
                            children: m.map((e) =>
                                (0, l.jsx)(P.A, { benefit: e, guildId: i, onClick: () => t(!0) }, (0, f.nh)(e)),
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
                            className: T.n2,
                            children: _.intl.string(_.t["6Y1FLi"]),
                        }),
                        (0, l.jsxs)("div", {
                            className: T.DI,
                            children: [
                                (0, l.jsx)(p.A, {
                                    emojiId: e.id,
                                    emojiName: e.name,
                                    animated: e.animated ?? !1,
                                    className: T.mp,
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(c.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: T.cC,
                                            children: _.intl.string(_.t.PrKk4n),
                                        }),
                                        (0, l.jsx)(c.E, {
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
                className: T.EJ,
                children: (0, l.jsx)(s.$, {
                    variant: "primary",
                    text: _.intl.string(_.t["Ph+ecI"]),
                    onClick: () => t(!0),
                }),
            }),
        ],
    });
}
