n.d(t, { X: () => T, Y: () => x });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(17928),
    s = n(821609),
    o = n(939249),
    u = n(789645),
    c = n(834730),
    d = n(297264),
    m = n(565645),
    p = n(241524),
    C = n(166532),
    h = n(71393),
    f = n(371794),
    E = n(500345),
    S = n(599941),
    y = n(320137),
    I = n(417360),
    A = n(759625),
    P = n(2242),
    g = n(375708),
    v = n(631907),
    _ = n(200791);
function x(e) {
    let { onClose: t, listing: n, step: i, guildId: a } = e,
        s = (0, S.Tq)(a),
        c = (0, p.A)(P.TQ),
        d = (function () {
            if (c) return null;
            let e =
                s?.cover_image_asset?.application_id != null
                    ? (0, f.YE)(s.cover_image_asset.application_id, s.cover_image_asset, 440)
                    : void 0;
            return null == e && i !== C.pn.CONFIRM
                ? null
                : null == e
                  ? (0, l.jsx)("div", { className: v.gI })
                  : (0, l.jsx)("img", { src: e, alt: "", className: v.F0 });
        })();
    return (0, l.jsxs)("div", {
        className: r()(v.N1, { [_.G]: null != d, [v.TP]: c || null == d }),
        children: [
            d,
            (function () {
                if (i !== C.pn.CONFIRM) return null;
                let e = null == n.image_asset ? void 0 : (0, f.YE)(n.application_id, n.image_asset, 80);
                return (0, l.jsx)("div", {
                    className: v.z9,
                    children: (0, l.jsx)("img", { src: e, alt: "", className: v.ah }),
                });
            })(),
            (0, l.jsx)(o.D, {
                className: v.G3,
                onClick: () => t(!1),
                "aria-label": g.intl.string(g.t.cpT0Cq),
                children: (0, l.jsx)(u.P, { size: "md", color: "currentColor", className: v.ut }),
            }),
        ],
    });
}
function T(e) {
    let { onClose: t, listing: n, guildId: i } = e,
        r = (0, a.bG)([h.A], () => h.A.getGuild(i), [i]),
        o = (0, y.A)(i).filter((e) => e.roles.includes(n.role_id)),
        u = n.role_benefits.benefits.filter(E.B1).slice(0, null === o.length ? 4 : 3),
        p = (0, I.A)(u).slice(0, null === o.length ? 4 : 3);
    return (0, l.jsxs)("div", {
        className: v.RP,
        children: [
            (0, l.jsx)(d.D, {
                className: v.RS,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: g.intl.format(g.t["1HIsTk"], { serverName: r?.name }),
            }),
            (0, l.jsx)(c.E, {
                className: v.sT,
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
                            className: v.n2,
                            children: g.intl.string(g.t.w0CQ01),
                        }),
                        (0, l.jsx)("div", {
                            className: v.M3,
                            children: p.map((e) =>
                                (0, l.jsx)(A.A, { benefit: e, guildId: i, onClick: () => t(!0) }, (0, E.nh)(e)),
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
                            className: v.n2,
                            children: g.intl.string(g.t["6Y1FLi"]),
                        }),
                        (0, l.jsxs)("div", {
                            className: v.DI,
                            children: [
                                (0, l.jsx)(m.A, {
                                    emojiId: e.id,
                                    emojiName: e.name,
                                    animated: e.animated ?? !1,
                                    className: v.mp,
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(c.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: v.cC,
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
                className: v.EJ,
                children: (0, l.jsx)(s.$, {
                    variant: "primary",
                    text: g.intl.string(g.t["Ph+ecI"]),
                    onClick: () => t(!0),
                }),
            }),
        ],
    });
}
