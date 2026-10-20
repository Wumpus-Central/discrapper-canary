n.d(t, { X: () => T, Y: () => _ });
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
    h = n(166532),
    C = n(71393),
    f = n(371794),
    E = n(500345),
    S = n(599941),
    g = n(320137),
    I = n(417360),
    y = n(759625),
    A = n(2242),
    x = n(105292),
    P = n(631907),
    v = n(200791);
function _(e) {
    let { onClose: t, listing: n, step: i, guildId: a } = e,
        s = (0, S.Tq)(a),
        c = (0, p.A)(A.TQ),
        d = (function () {
            if (c) return null;
            let e =
                s?.cover_image_asset?.application_id != null
                    ? (0, f.YE)(s.cover_image_asset.application_id, s.cover_image_asset, 440)
                    : void 0;
            return null == e && i !== h.pn.CONFIRM
                ? null
                : null == e
                  ? (0, l.jsx)("div", { className: P.gI })
                  : (0, l.jsx)("img", { src: e, alt: "", className: P.F0 });
        })();
    return (0, l.jsxs)("div", {
        className: r()(P.N1, { [v.G]: null != d, [P.TP]: c || null == d }),
        children: [
            d,
            (function () {
                if (i !== h.pn.CONFIRM) return null;
                let e = null == n.image_asset ? void 0 : (0, f.YE)(n.application_id, n.image_asset, 80);
                return (0, l.jsx)("div", {
                    className: P.z9,
                    children: (0, l.jsx)("img", { src: e, alt: "", className: P.ah }),
                });
            })(),
            (0, l.jsx)(o.D, {
                className: P.G3,
                onClick: () => t(!1),
                "aria-label": x.intl.string(x.t.cpT0Cq),
                children: (0, l.jsx)(u.P, { size: "md", color: "currentColor", className: P.ut }),
            }),
        ],
    });
}
function T(e) {
    let { onClose: t, listing: n, guildId: i } = e,
        r = (0, a.bG)([C.A], () => C.A.getGuild(i), [i]),
        o = (0, g.A)(i).filter((e) => e.roles.includes(n.role_id)),
        u = n.role_benefits.benefits.filter(E.B1).slice(0, null === o.length ? 4 : 3),
        p = (0, I.A)(u).slice(0, null === o.length ? 4 : 3);
    return (0, l.jsxs)("div", {
        className: P.RP,
        children: [
            (0, l.jsx)(d.D, {
                className: P.RS,
                variant: "heading-xl/semibold",
                color: "text-default",
                children: x.intl.format(x.t["1HIsTk"], { serverName: r?.name }),
            }),
            (0, l.jsx)(c.E, {
                className: P.sT,
                variant: "text-md/normal",
                color: "text-default",
                children: x.intl.format(x.t.oi3gip, { tier: n.name }),
            }),
            p.length > 0 &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(c.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            className: P.n2,
                            children: x.intl.string(x.t.w0CQ01),
                        }),
                        (0, l.jsx)("div", {
                            className: P.M3,
                            children: p.map((e) =>
                                (0, l.jsx)(y.A, { benefit: e, guildId: i, onClick: () => t(!0) }, (0, E.nh)(e)),
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
                            className: P.n2,
                            children: x.intl.string(x.t["6Y1FLi"]),
                        }),
                        (0, l.jsxs)("div", {
                            className: P.DI,
                            children: [
                                (0, l.jsx)(m.A, {
                                    emojiId: e.id,
                                    emojiName: e.name,
                                    animated: e.animated ?? !1,
                                    className: P.mp,
                                }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(c.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: P.cC,
                                            children: x.intl.string(x.t.PrKk4n),
                                        }),
                                        (0, l.jsx)(c.E, {
                                            color: "interactive-text-default",
                                            variant: "text-sm/normal",
                                            children: x.intl.format(x.t["2ICUkG"], { count: o.length }),
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
                className: P.EJ,
                children: (0, l.jsx)(s.$, {
                    variant: "primary",
                    text: x.intl.string(x.t["Ph+ecI"]),
                    onClick: () => t(!0),
                }),
            }),
        ],
    });
}
