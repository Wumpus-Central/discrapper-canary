n.d(t, {
    h: () => T,
    x: () => S,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(596454),
    c = n(131388),
    u = n(409813),
    d = n(430824),
    f = n(73346),
    _ = n(817460),
    p = n(584825),
    h = n(570533),
    m = n(629262),
    g = n(575460),
    E = n(293810),
    b = n(388032),
    y = n(673854);
let O = 440,
    v = 80,
    I = 4,
    T = (e) => {
        let { onClose: t, listing: n, step: i, guildId: o } = e,
            l = (0, p.YB)(o),
            d = (0, c.Z)(E.Xy),
            _ = () => {
                if (i !== u.h8.CONFIRM) return null;
                let e = null == n.image_asset ? void 0 : (0, f._W)(n.application_id, n.image_asset, v);
                return (0, r.jsx)("div", {
                    className: y.tierImageContainer,
                    children: (0, r.jsx)("img", {
                        src: e,
                        alt: "",
                        className: y.tierImage,
                    }),
                });
            },
            h = (() => {
                var e;
                if (d) return null;
                let t =
                    (null == l || null == (e = l.cover_image_asset) ? void 0 : e.application_id) != null
                        ? (0, f._W)(l.cover_image_asset.application_id, l.cover_image_asset, O)
                        : void 0;
                return null == t && i !== u.h8.CONFIRM
                    ? null
                    : null == t
                      ? (0, r.jsx)("div", { className: y.headerImageEmpty })
                      : (0, r.jsx)("img", {
                            src: t,
                            alt: "",
                            className: y.headerImage,
                        });
            })();
        return (0, r.jsxs)("div", {
            className: a()(y.headerContainer, { [y.headerEmpty]: d || null == h }),
            children: [
                h,
                _(),
                (0, r.jsx)(s.P3F, {
                    className: y.closeContainer,
                    onClick: () => t(!1),
                    "aria-label": b.intl.string(b.t.cpT0Cg),
                    children: (0, r.jsx)(s.Dio, {
                        size: "md",
                        color: "currentColor",
                        className: y.closeIcon,
                    }),
                }),
            ],
        });
    },
    S = (e) => {
        let { onClose: t, listing: n, guildId: i } = e,
            a = (0, o.e7)([d.Z], () => d.Z.getGuild(i), [i]),
            c = (0, h.Z)(i).filter((e) => e.roles.includes(n.role_id)),
            u = n.role_benefits.benefits.filter(_.rC).slice(0, null === c.length ? I : I - 1),
            f = (0, m.Z)(u).slice(0, null === c.length ? I : I - 1),
            p = () => {
                var e;
                if (0 === c.length) return null;
                let t = c[0];
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            className: y.confirmationSectionLabel,
                            children: b.intl.string(b.t["6Y1FLi"]),
                        }),
                        (0, r.jsxs)("div", {
                            className: y.emojiBenefitsRow,
                            children: [
                                (0, r.jsx)(l.Z, {
                                    emojiId: t.id,
                                    emojiName: t.name,
                                    animated: null != (e = t.animated) && e,
                                    className: y.emojiImage,
                                }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            variant: "text-md/medium",
                                            color: "header-primary",
                                            className: y.emojiName,
                                            children: b.intl.string(b.t.PrKk4u),
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            color: "interactive-normal",
                                            variant: "text-sm/normal",
                                            children: b.intl.format(b.t["2ICUkJ"], { count: c.length }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
        return (0, r.jsxs)("div", {
            className: y.confirmationContainer,
            children: [
                (0, r.jsx)(s.X6q, {
                    className: y.confirmationHeader,
                    variant: "heading-xl/semibold",
                    color: "header-secondary",
                    children: b.intl.format(b.t["1HIsTk"], { serverName: null == a ? void 0 : a.name }),
                }),
                (0, r.jsx)(s.Text, {
                    className: y.confirmationSubtitle,
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: b.intl.format(b.t.oi3gio, { tier: n.name }),
                }),
                f.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: y.confirmationSectionLabel,
                                children: b.intl.string(b.t.w0CQ09),
                            }),
                            (0, r.jsx)("div", {
                                className: y.confirmationBenefits,
                                children: f.map((e) =>
                                    (0, r.jsx)(
                                        g.Z,
                                        {
                                            benefit: e,
                                            guildId: i,
                                            onClick: () => t(!0),
                                        },
                                        (0, _.ab)(e),
                                    ),
                                ),
                            }),
                        ],
                    }),
                p(),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: y.confirmationButton,
                    children: (0, r.jsx)(s.zxk, {
                        variant: "primary",
                        text: b.intl.string(b.t["Ph+ecH"]),
                        onClick: () => t(!0),
                    }),
                }),
            ],
        });
    };
