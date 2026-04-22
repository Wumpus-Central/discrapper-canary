i.d(t, { X: () => T, Y: () => E });
var l = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(311907),
    r = i(821609),
    c = i(939249),
    d = i(789645),
    o = i(834730),
    u = i(534514),
    m = i(565645),
    x = i(241524),
    h = i(166532),
    g = i(71393),
    v = i(371794),
    j = i(500345),
    A = i(599941),
    f = i(320137),
    p = i(417360),
    _ = i(759625),
    N = i(2242),
    b = i(985018),
    I = i(28008),
    C = i(575650);
let E = (e) => {
        let { onClose: t, listing: i, step: n, guildId: a } = e,
            r = (0, A.Tq)(a),
            o = (0, x.A)(N.TQ),
            u = (() => {
                if (o) return null;
                let e =
                    r?.cover_image_asset?.application_id != null
                        ? (0, v.YE)(r.cover_image_asset.application_id, r.cover_image_asset, 440)
                        : void 0;
                return null == e && n !== h.pn.CONFIRM
                    ? null
                    : null == e
                      ? (0, l.jsx)("div", { className: I.gI })
                      : (0, l.jsx)("img", { src: e, alt: "", className: I.F0 });
            })();
        return (0, l.jsxs)("div", {
            className: s()(I.N1, { [C.GI]: null != u, [I.TP]: o || null == u }),
            children: [
                u,
                (() => {
                    if (n !== h.pn.CONFIRM) return null;
                    let e = null == i.image_asset ? void 0 : (0, v.YE)(i.application_id, i.image_asset, 80);
                    return (0, l.jsx)("div", {
                        className: I.z9,
                        children: (0, l.jsx)("img", { src: e, alt: "", className: I.ah }),
                    });
                })(),
                (0, l.jsx)(c.D, {
                    className: I.G3,
                    onClick: () => t(!1),
                    "aria-label": b.intl.string(b.t.cpT0Cq),
                    children: (0, l.jsx)(d.P, { size: "md", color: "currentColor", className: I.ut }),
                }),
            ],
        });
    },
    T = (e) => {
        let { onClose: t, listing: i, guildId: n } = e,
            s = (0, a.bG)([g.A], () => g.A.getGuild(n), [n]),
            c = (0, f.A)(n).filter((e) => e.roles.includes(i.role_id)),
            d = i.role_benefits.benefits.filter(j.B1).slice(0, null === c.length ? 4 : 3),
            x = (0, p.A)(d).slice(0, null === c.length ? 4 : 3);
        return (0, l.jsxs)("div", {
            className: I.RP,
            children: [
                (0, l.jsx)(u.D, {
                    className: I.RS,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: b.intl.format(b.t["1HIsTk"], { serverName: s?.name }),
                }),
                (0, l.jsx)(o.E, {
                    className: I.sT,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: b.intl.format(b.t.oi3gip, { tier: i.name }),
                }),
                x.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: I.n2,
                                children: b.intl.string(b.t.w0CQ01),
                            }),
                            (0, l.jsx)("div", {
                                className: I.M3,
                                children: x.map((e) =>
                                    (0, l.jsx)(_.A, { benefit: e, guildId: n, onClick: () => t(!0) }, (0, j.nh)(e)),
                                ),
                            }),
                        ],
                    }),
                (() => {
                    if (0 === c.length) return null;
                    let e = c[0];
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(o.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: I.n2,
                                children: b.intl.string(b.t["6Y1FLi"]),
                            }),
                            (0, l.jsxs)("div", {
                                className: I.DI,
                                children: [
                                    (0, l.jsx)(m.A, {
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated ?? !1,
                                        className: I.mp,
                                    }),
                                    (0, l.jsxs)("div", {
                                        children: [
                                            (0, l.jsx)(o.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                className: I.cC,
                                                children: b.intl.string(b.t.PrKk4n),
                                            }),
                                            (0, l.jsx)(o.E, {
                                                color: "interactive-text-default",
                                                variant: "text-sm/normal",
                                                children: b.intl.format(b.t["2ICUkG"], { count: c.length }),
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
                    className: I.EJ,
                    children: (0, l.jsx)(r.$, {
                        variant: "primary",
                        text: b.intl.string(b.t["Ph+ecI"]),
                        onClick: () => t(!0),
                    }),
                }),
            ],
        });
    };
