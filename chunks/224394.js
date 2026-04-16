"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(421838),
    m = n(48771),
    g = n(576705),
    x = n(975571),
    h = n(652215),
    _ = n(897513),
    A = n(985018),
    p = n(323679),
    f = n(628287),
    j = n(734673),
    N = n(920852),
    E = n(266332),
    C = n(386528);
let T = [
        { iconSrc: n(374229), name: "Pokemon GO Paris", position: [-230, -100] },
        { iconSrc: n(640666), name: "Python", position: [-180, -100], faded: !0, rightAlign: !0 },
        { iconSrc: E, name: "Learn Latin", position: [-280, -30], faded: !0 },
        { iconSrc: C, name: "r/leagueoflegends", position: [-320, -30], rightAlign: !0 },
        { iconSrc: n(822984), name: "Sneaker Fans", position: [-250, 40] },
        { iconSrc: N, name: "Hogwarts School", position: [-270, 40], faded: !0, rightAlign: !0 },
    ],
    I = (e) => {
        let { icon: t, color: n, size: s = 24, header: l, body: r } = e;
        return (0, i.jsxs)("div", {
            className: p.Vr,
            children: [
                (0, i.jsx)("div", {
                    className: p.AD,
                    children: (0, i.jsx)(t, { color: n ?? "currentColor", width: s, height: s, size: "custom" }),
                }),
                (0, i.jsx)(c.Heading, { variant: "heading-md/semibold", className: p.Uh, children: l }),
                (0, i.jsx)(c.Text, { color: "text-default", variant: "text-sm/normal", children: r }),
            ],
        });
    },
    b = (e) => {
        let { iconSrc: t, name: n, position: s, faded: l, rightAlign: a, imageCoordinates: o } = e,
            d = { [a ? "right" : "left"]: o[0] + s[0], top: o[1] + s[1] };
        return (0, i.jsxs)("div", {
            className: r()(p.gI, { [p.zj]: l }),
            style: d,
            children: [
                (0, i.jsx)("div", {
                    className: p.$f,
                    children: (0, i.jsx)("img", { alt: "", src: t, width: 24, height: 24 }),
                }),
                (0, i.jsx)(c.Heading, { variant: "heading-deprecated-12/semibold", children: n }),
            ],
        });
    },
    v = (e) => {
        let { guild: t } = e,
            [n, l] = s.useState(0),
            [r, N] = s.useState(0),
            [E, C] = s.useState(),
            v = (0, a.bG)([g.A], () => g.A.can(h.xBc.ADMINISTRATOR, t)),
            S = E?.offsetWidth,
            y = E?.offsetHeight;
        return (
            s.useEffect(() => {
                null != S && l(S / 2), null != y && N(y / 2);
            }, [S, y, l, N]),
            s.useEffect(() => {
                (0, u.sF)(_._.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL);
            }, []),
            (0, i.jsxs)("div", {
                className: p.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: p.vK,
                        ref: (e) => C(e),
                        children: [
                            T.map((e) => (0, i.jsx)(b, { ...e, imageCoordinates: [n, r] }, e.name)),
                            (0, i.jsx)("img", { alt: "", src: f, className: p.Sl, width: 256 }),
                            (0, i.jsx)("img", { alt: "", src: j, className: p._7 }),
                        ],
                    }),
                    (0, i.jsx)(c.Heading, { variant: "heading-xl/semibold", children: A.intl.string(A.t["M/gBcA"]) }),
                    (0, i.jsx)(c.Text, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: p.rf,
                        children: A.intl.format(A.t["52EgsM"], {
                            helpdeskArticle: x.A.getArticleURL(h.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                    }),
                    (0, i.jsx)(d.m, {
                        text: v ? null : A.intl.string(A.t["pjG+T3"]),
                        "aria-label": v ? void 0 : A.intl.string(A.t["pjG+T3"]),
                        children: (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: p.x6,
                            children: (0, i.jsx)(c.Button, {
                                variant: "primary",
                                text: A.intl.string(A.t.ElKTeb),
                                onClick: () => {
                                    m.A.open();
                                },
                                disabled: !v,
                            }),
                        }),
                    }),
                    (0, i.jsx)("hr", { className: p.me }),
                    (0, i.jsx)(c.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: A.intl.string(A.t.OzLWLE),
                    }),
                    (0, i.jsx)(c.Text, {
                        color: "text-default",
                        className: p.rf,
                        variant: "text-sm/normal",
                        children: A.intl.format(A.t.rjhrqC, {
                            helpdeskArticle: x.A.getArticleURL(h.MVz.GUILD_COMMUNITY_FEATURE),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: p.qT,
                        children: [
                            {
                                icon: c.Uy2,
                                color: o.A.unsafe_rawColors.GREEN_360.css,
                                header: A.intl.string(A.t.oVQF2y),
                                body: A.intl.format(A.t.A6G7ak, {
                                    featureHook: (e, t) => (0, i.jsx)("strong", { className: p.A3, children: e }, t),
                                }),
                            },
                            {
                                icon: c.Uy2,
                                color: o.A.unsafe_rawColors.PLATFORM_PARTNER.css,
                                header: A.intl.string(A.t["0rJl9y"]),
                                body: A.intl.format(A.t.XsCNky, {
                                    infoHook: () =>
                                        (0, i.jsx)(d.m, {
                                            text: A.intl.string(A.t.kPJlTh),
                                            "aria-label": A.intl.string(A.t.kPJlTh),
                                            children: (0, i.jsx)(c.mir, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: p.G,
                                            }),
                                        }),
                                    featureHook: (e, t) => (0, i.jsx)("strong", { className: p.A3, children: e }, t),
                                }),
                            },
                            {
                                icon: c.mir,
                                color: o.A.unsafe_rawColors.RED_360.css,
                                header: A.intl.string(A.t.W2kLJC),
                                body: A.intl.string(A.t.hyNkHz),
                            },
                        ].map((e, t) => (0, i.jsx)(I, { ...e }, t)),
                    }),
                ],
            })
        );
    };
