"use strict";
n.d(t, { X: () => w, Y: () => L });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(821609),
    l = n(939249),
    u = n(789645),
    c = n(834730),
    d = n(534514),
    _ = n(565645),
    h = n(241524),
    f = n(166532),
    p = n(71393),
    E = n(371794),
    m = n(500345),
    g = n(599941),
    A = n(320137),
    I = n(417360),
    T = n(147925),
    S = n(807973),
    y = n(898612),
    C = n(232492),
    N = n(500174);
function v(e) {
    let { benefit: t, guildId: n, onClick: r } = e,
        s = (0, C.A)(n, t.ref_id),
        a = (0, i.jsx)(S.A, { guildId: n, emojiId: t.emoji_id, emojiName: t.emoji_name });
    return (0, i.jsxs)(l.D, {
        className: N.kL,
        onClick: function () {
            s?.navigateToChannel(), r();
        },
        "aria-label": s?.ariaLabel,
        role: "link",
        children: [
            (0, i.jsx)("div", { className: N.qq, children: a }),
            (0, i.jsxs)("div", {
                className: N.op,
                children: [
                    (0, i.jsx)(c.E, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: N.UU,
                        children: (0, y.A)(t),
                    }),
                    (0, i.jsx)(c.E, {
                        color: "interactive-text-default",
                        variant: "text-sm/normal",
                        children: t.description,
                    }),
                ],
            }),
            (0, i.jsx)(T.A, { direction: T.A.Directions.RIGHT, className: N.OW }),
        ],
    });
}
var R = n(2242),
    O = n(375708),
    b = n(28008),
    D = n(575650);
let L = (e) => {
        let { onClose: t, listing: n, step: r, guildId: a } = e,
            o = (0, g.Tq)(a),
            c = (0, h.A)(R.TQ),
            d = (() => {
                if (c) return null;
                let e =
                    o?.cover_image_asset?.application_id != null
                        ? (0, E.YE)(o.cover_image_asset.application_id, o.cover_image_asset, 440)
                        : void 0;
                return null == e && r !== f.pn.CONFIRM
                    ? null
                    : null == e
                      ? (0, i.jsx)("div", { className: b.gI })
                      : (0, i.jsx)("img", { src: e, alt: "", className: b.F0 });
            })();
        return (0, i.jsxs)("div", {
            className: s()(b.N1, { [D.G]: null != d, [b.TP]: c || null == d }),
            children: [
                d,
                (() => {
                    if (r !== f.pn.CONFIRM) return null;
                    let e = null == n.image_asset ? void 0 : (0, E.YE)(n.application_id, n.image_asset, 80);
                    return (0, i.jsx)("div", {
                        className: b.z9,
                        children: (0, i.jsx)("img", { src: e, alt: "", className: b.ah }),
                    });
                })(),
                (0, i.jsx)(l.D, {
                    className: b.G3,
                    onClick: () => t(!1),
                    "aria-label": O.intl.string(O.t.cpT0Cq),
                    children: (0, i.jsx)(u.P, { size: "md", color: "currentColor", className: b.ut }),
                }),
            ],
        });
    },
    w = (e) => {
        let { onClose: t, listing: n, guildId: r } = e,
            s = (0, a.bG)([p.A], () => p.A.getGuild(r), [r]),
            l = (0, A.A)(r).filter((e) => e.roles.includes(n.role_id)),
            u = n.role_benefits.benefits.filter(m.B1).slice(0, null === l.length ? 4 : 3),
            h = (0, I.A)(u).slice(0, null === l.length ? 4 : 3);
        return (0, i.jsxs)("div", {
            className: b.RP,
            children: [
                (0, i.jsx)(d.D, {
                    className: b.RS,
                    variant: "heading-xl/semibold",
                    color: "text-default",
                    children: O.intl.format(O.t["1HIsTk"], { serverName: s?.name }),
                }),
                (0, i.jsx)(c.E, {
                    className: b.sT,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: O.intl.format(O.t.oi3gip, { tier: n.name }),
                }),
                h.length > 0 &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(c.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: b.n2,
                                children: O.intl.string(O.t.w0CQ01),
                            }),
                            (0, i.jsx)("div", {
                                className: b.M3,
                                children: h.map((e) =>
                                    (0, i.jsx)(v, { benefit: e, guildId: r, onClick: () => t(!0) }, (0, m.nh)(e)),
                                ),
                            }),
                        ],
                    }),
                (function () {
                    if (0 === l.length) return null;
                    let e = l[0];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(c.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: b.n2,
                                children: O.intl.string(O.t["6Y1FLi"]),
                            }),
                            (0, i.jsxs)("div", {
                                className: b.DI,
                                children: [
                                    (0, i.jsx)(_.A, {
                                        emojiId: e.id,
                                        emojiName: e.name,
                                        animated: e.animated ?? !1,
                                        className: b.mp,
                                    }),
                                    (0, i.jsxs)("div", {
                                        children: [
                                            (0, i.jsx)(c.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                className: b.cC,
                                                children: O.intl.string(O.t.PrKk4n),
                                            }),
                                            (0, i.jsx)(c.E, {
                                                color: "interactive-text-default",
                                                variant: "text-sm/normal",
                                                children: O.intl.format(O.t["2ICUkG"], { count: l.length }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                })(),
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: b.EJ,
                    children: (0, i.jsx)(o.$, {
                        variant: "primary",
                        text: O.intl.string(O.t["Ph+ecI"]),
                        onClick: () => t(!0),
                    }),
                }),
            ],
        });
    };
