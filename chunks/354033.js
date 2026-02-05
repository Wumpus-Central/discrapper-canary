"use strict";
n.d(t, { X: () => b, Y: () => C });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(732955),
    l = n(397927),
    u = n(565645),
    c = n(241524),
    d = n(166532),
    _ = n(71393),
    f = n(371794),
    p = n(500345),
    h = n(599941),
    m = n(320137),
    g = n(417360),
    E = n(759625),
    A = n(2242),
    I = n(985018),
    T = n(906489);
let y = 440,
    S = 80,
    v = 4,
    C = (e) => {
        let { onClose: t, listing: n, step: i, guildId: s } = e,
            o = (0, h.Tq)(s),
            u = (0, c.A)(A.TQ),
            _ = () => {
                if (i !== d.pn.CONFIRM) return null;
                let e = null == n.image_asset ? void 0 : (0, f.YE)(n.application_id, n.image_asset, S);
                return (0, r.jsx)("div", {
                    className: T.z9,
                    children: (0, r.jsx)("img", { src: e, alt: "", className: T.ah }),
                });
            },
            p = (() => {
                if (u) return null;
                let e =
                    o?.cover_image_asset?.application_id != null
                        ? (0, f.YE)(o.cover_image_asset.application_id, o.cover_image_asset, y)
                        : void 0;
                return null == e && i !== d.pn.CONFIRM
                    ? null
                    : null == e
                      ? (0, r.jsx)("div", { className: T.gI })
                      : (0, r.jsx)("img", { src: e, alt: "", className: T.F0 });
            })();
        return (0, r.jsxs)("div", {
            className: a()(T.N1, { [T.TP]: u || null == p }),
            children: [
                p,
                _(),
                (0, r.jsx)(l.DUT, {
                    className: T.G3,
                    onClick: () => t(!1),
                    "aria-label": I.intl.string(I.t.cpT0Cq),
                    children: (0, r.jsx)(l.PGe, { size: "md", color: "currentColor", className: T.ut }),
                }),
            ],
        });
    },
    b = (e) => {
        let { onClose: t, listing: n, guildId: i } = e,
            a = (0, s.bG)([_.A], () => _.A.getGuild(i), [i]),
            c = (0, m.A)(i).filter((e) => e.roles.includes(n.role_id)),
            d = n.role_benefits.benefits.filter(p.B1).slice(0, null === c.length ? v : v - 1),
            f = (0, g.A)(d).slice(0, null === c.length ? v : v - 1),
            h = () => {
                if (0 === c.length) return null;
                let e = c[0];
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            className: T.n2,
                            children: I.intl.string(I.t["6Y1FLi"]),
                        }),
                        (0, r.jsxs)("div", {
                            className: T.DI,
                            children: [
                                (0, r.jsx)(u.A, {
                                    emojiId: e.id,
                                    emojiName: e.name,
                                    animated: e.animated ?? !1,
                                    className: T.mp,
                                }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: T.cC,
                                            children: I.intl.string(I.t.PrKk4n),
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            color: "interactive-text-default",
                                            variant: "text-sm/normal",
                                            children: I.intl.format(I.t["2ICUkG"], { count: c.length }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
        return (0, r.jsxs)("div", {
            className: T.RP,
            children: [
                (0, r.jsx)(l.Heading, {
                    className: T.RS,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: I.intl.format(I.t["1HIsTk"], { serverName: a?.name }),
                }),
                (0, r.jsx)(l.Text, {
                    className: T.sT,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: I.intl.format(I.t.oi3gip, { tier: n.name }),
                }),
                f.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: T.n2,
                                children: I.intl.string(I.t.w0CQ01),
                            }),
                            (0, r.jsx)("div", {
                                className: T.M3,
                                children: f.map((e) =>
                                    (0, r.jsx)(E.A, { benefit: e, guildId: i, onClick: () => t(!0) }, (0, p.nh)(e)),
                                ),
                            }),
                        ],
                    }),
                h(),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: T.EJ,
                    children: (0, r.jsx)(o.$nd, {
                        variant: "primary",
                        text: I.intl.string(I.t["Ph+ecI"]),
                        onClick: () => t(!0),
                    }),
                }),
            ],
        });
    };
