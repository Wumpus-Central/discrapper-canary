n.d(t, {
    h: () => S,
    x: () => A,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(159691),
    l = n(481060),
    c = n(596454),
    u = n(131388),
    d = n(409813),
    f = n(430824),
    _ = n(73346),
    p = n(817460),
    h = n(584825),
    m = n(570533),
    g = n(629262),
    E = n(575460),
    b = n(293810),
    y = n(388032),
    O = n(673854);
let v = 440,
    I = 80,
    T = 4,
    S = (e) => {
        let { onClose: t, listing: n, step: i, guildId: o } = e,
            s = (0, h.YB)(o),
            c = (0, u.Z)(b.Xy),
            f = () => {
                if (i !== d.h8.CONFIRM) return null;
                let e = null == n.image_asset ? void 0 : (0, _._W)(n.application_id, n.image_asset, I);
                return (0, r.jsx)("div", {
                    className: O.tierImageContainer,
                    children: (0, r.jsx)("img", {
                        src: e,
                        alt: "",
                        className: O.tierImage,
                    }),
                });
            },
            p = (() => {
                var e;
                if (c) return null;
                let t =
                    (null == s || null == (e = s.cover_image_asset) ? void 0 : e.application_id) != null
                        ? (0, _._W)(s.cover_image_asset.application_id, s.cover_image_asset, v)
                        : void 0;
                return null == t && i !== d.h8.CONFIRM
                    ? null
                    : null == t
                      ? (0, r.jsx)("div", { className: O.headerImageEmpty })
                      : (0, r.jsx)("img", {
                            src: t,
                            alt: "",
                            className: O.headerImage,
                        });
            })();
        return (0, r.jsxs)("div", {
            className: a()(O.headerContainer, { [O.headerEmpty]: c || null == p }),
            children: [
                p,
                f(),
                (0, r.jsx)(l.P3F, {
                    className: O.closeContainer,
                    onClick: () => t(!1),
                    "aria-label": y.intl.string(y.t.cpT0Cq),
                    children: (0, r.jsx)(l.Dio, {
                        size: "md",
                        color: "currentColor",
                        className: O.closeIcon,
                    }),
                }),
            ],
        });
    },
    A = (e) => {
        let { onClose: t, listing: n, guildId: i } = e,
            a = (0, o.e7)([f.Z], () => f.Z.getGuild(i), [i]),
            u = (0, m.Z)(i).filter((e) => e.roles.includes(n.role_id)),
            d = n.role_benefits.benefits.filter(p.rC).slice(0, null === u.length ? T : T - 1),
            _ = (0, g.Z)(d).slice(0, null === u.length ? T : T - 1),
            h = () => {
                var e;
                if (0 === u.length) return null;
                let t = u[0];
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            className: O.confirmationSectionLabel,
                            children: y.intl.string(y.t["6Y1FLi"]),
                        }),
                        (0, r.jsxs)("div", {
                            className: O.emojiBenefitsRow,
                            children: [
                                (0, r.jsx)(c.Z, {
                                    emojiId: t.id,
                                    emojiName: t.name,
                                    animated: null != (e = t.animated) && e,
                                    className: O.emojiImage,
                                }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-md/medium",
                                            color: "header-primary",
                                            className: O.emojiName,
                                            children: y.intl.string(y.t.PrKk4n),
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            color: "interactive-normal",
                                            variant: "text-sm/normal",
                                            children: y.intl.format(y.t["2ICUkG"], { count: u.length }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
        return (0, r.jsxs)("div", {
            className: O.confirmationContainer,
            children: [
                (0, r.jsx)(l.Heading, {
                    className: O.confirmationHeader,
                    variant: "heading-xl/semibold",
                    color: "header-secondary",
                    children: y.intl.format(y.t["1HIsTk"], { serverName: null == a ? void 0 : a.name }),
                }),
                (0, r.jsx)(l.Text, {
                    className: O.confirmationSubtitle,
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: y.intl.format(y.t.oi3gip, { tier: n.name }),
                }),
                _.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: O.confirmationSectionLabel,
                                children: y.intl.string(y.t.w0CQ01),
                            }),
                            (0, r.jsx)("div", {
                                className: O.confirmationBenefits,
                                children: _.map((e) =>
                                    (0, r.jsx)(
                                        E.Z,
                                        {
                                            benefit: e,
                                            guildId: i,
                                            onClick: () => t(!0),
                                        },
                                        (0, p.ab)(e),
                                    ),
                                ),
                            }),
                        ],
                    }),
                h(),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: O.confirmationButton,
                    children: (0, r.jsx)(s.zxk, {
                        variant: "primary",
                        text: y.intl.string(y.t["Ph+ecI"]),
                        onClick: () => t(!0),
                    }),
                }),
            ],
        });
    };
