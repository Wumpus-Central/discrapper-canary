n.d(t, {
    X: () => T,
    Y: () => I,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(732955),
    l = n(397927),
    c = n(565645),
    u = n(241524),
    d = n(166532),
    f = n(71393),
    p = n(371794),
    _ = n(500345),
    h = n(599941),
    m = n(320137),
    g = n(417360),
    E = n(759625),
    b = n(2242),
    y = n(985018),
    O = n(906489);
let A = 440,
    v = 80,
    S = 4,
    I = (e) => {
        let { onClose: t, listing: n, step: i, guildId: s } = e,
            o = (0, h.Tq)(s),
            c = (0, u.A)(b.TQ),
            f = () => {
                if (i !== d.pn.CONFIRM) return null;
                let e = null == n.image_asset ? void 0 : (0, p.YE)(n.application_id, n.image_asset, v);
                return (0, r.jsx)("div", {
                    className: O.z9,
                    children: (0, r.jsx)("img", {
                        src: e,
                        alt: "",
                        className: O.ah,
                    }),
                });
            },
            _ = (() => {
                var e;
                if (c) return null;
                let t =
                    (null == o || null == (e = o.cover_image_asset) ? void 0 : e.application_id) != null
                        ? (0, p.YE)(o.cover_image_asset.application_id, o.cover_image_asset, A)
                        : void 0;
                return null == t && i !== d.pn.CONFIRM
                    ? null
                    : null == t
                      ? (0, r.jsx)("div", {
                            className: O.gI,
                        })
                      : (0, r.jsx)("img", {
                            src: t,
                            alt: "",
                            className: O.F0,
                        });
            })();
        return (0, r.jsxs)("div", {
            className: a()(O.N1, {
                [O.TP]: c || null == _,
            }),
            children: [
                _,
                f(),
                (0, r.jsx)(l.DUT, {
                    className: O.G3,
                    onClick: () => t(!1),
                    "aria-label": y.intl.string(y.t.cpT0Cq),
                    children: (0, r.jsx)(l.PGe, {
                        size: "md",
                        color: "currentColor",
                        className: O.ut,
                    }),
                }),
            ],
        });
    },
    T = (e) => {
        let { onClose: t, listing: n, guildId: i } = e,
            a = (0, s.bG)([f.A], () => f.A.getGuild(i), [i]),
            u = (0, m.A)(i).filter((e) => e.roles.includes(n.role_id)),
            d = n.role_benefits.benefits.filter(_.B1).slice(0, null === u.length ? S : S - 1),
            p = (0, g.A)(d).slice(0, null === u.length ? S : S - 1),
            h = () => {
                var e;
                if (0 === u.length) return null;
                let t = u[0];
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            className: O.n2,
                            children: y.intl.string(y.t["6Y1FLi"]),
                        }),
                        (0, r.jsxs)("div", {
                            className: O.DI,
                            children: [
                                (0, r.jsx)(c.A, {
                                    emojiId: t.id,
                                    emojiName: t.name,
                                    animated: null != (e = t.animated) && e,
                                    className: O.mp,
                                }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: O.cC,
                                            children: y.intl.string(y.t.PrKk4n),
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            color: "interactive-text-default",
                                            variant: "text-sm/normal",
                                            children: y.intl.format(y.t["2ICUkG"], {
                                                count: u.length,
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
        return (0, r.jsxs)("div", {
            className: O.RP,
            children: [
                (0, r.jsx)(l.Heading, {
                    className: O.RS,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: y.intl.format(y.t["1HIsTk"], {
                        serverName: null == a ? void 0 : a.name,
                    }),
                }),
                (0, r.jsx)(l.Text, {
                    className: O.sT,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: y.intl.format(y.t.oi3gip, {
                        tier: n.name,
                    }),
                }),
                p.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: O.n2,
                                children: y.intl.string(y.t.w0CQ01),
                            }),
                            (0, r.jsx)("div", {
                                className: O.M3,
                                children: p.map((e) =>
                                    (0, r.jsx)(
                                        E.A,
                                        {
                                            benefit: e,
                                            guildId: i,
                                            onClick: () => t(!0),
                                        },
                                        (0, _.nh)(e),
                                    ),
                                ),
                            }),
                        ],
                    }),
                h(),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: O.EJ,
                    children: (0, r.jsx)(o.$nd, {
                        variant: "primary",
                        text: y.intl.string(y.t["Ph+ecI"]),
                        onClick: () => t(!0),
                    }),
                }),
            ],
        });
    };
