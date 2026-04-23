n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(555704),
    u = n(885574),
    m = n(534514),
    g = n(834730),
    h = n(821609),
    x = n(421838),
    _ = n(48771),
    p = n(576705),
    A = n(975571),
    E = n(652215),
    f = n(897513),
    j = n(985018),
    N = n(323679),
    I = n(628287),
    C = n(734673),
    b = n(698471),
    v = n(266332),
    S = n(386528);
let T = [
        { iconSrc: n(374229), name: "Pokemon GO Paris", position: [-230, -100] },
        { iconSrc: n(640666), name: "Python", position: [-180, -100], faded: !0, rightAlign: !0 },
        { iconSrc: v, name: "Learn Latin", position: [-280, -30], faded: !0 },
        { iconSrc: S, name: "r/leagueoflegends", position: [-320, -30], rightAlign: !0 },
        { iconSrc: n(822984), name: "Sneaker Fans", position: [-250, 40] },
        { iconSrc: b, name: "Hogwarts School", position: [-270, 40], faded: !0, rightAlign: !0 },
    ],
    y = (e) => {
        let { icon: t, color: n, size: l = 24, header: s, body: r } = e;
        return (0, i.jsxs)("div", {
            className: N.Vr,
            children: [
                (0, i.jsx)("div", {
                    className: N.AD,
                    children: (0, i.jsx)(t, { color: n ?? "currentColor", width: l, height: l, size: "custom" }),
                }),
                (0, i.jsx)(m.D, { variant: "heading-md/semibold", className: N.Uh, children: s }),
                (0, i.jsx)(g.E, { color: "text-default", variant: "text-sm/normal", children: r }),
            ],
        });
    },
    R = (e) => {
        let { iconSrc: t, name: n, position: l, faded: s, rightAlign: a, imageCoordinates: o } = e,
            d = { [a ? "right" : "left"]: o[0] + l[0], top: o[1] + l[1] };
        return (0, i.jsxs)("div", {
            className: r()(N.gI, { [N.zj]: s }),
            style: d,
            children: [
                (0, i.jsx)("div", {
                    className: N.$f,
                    children: (0, i.jsx)("img", { alt: "", src: t, width: 24, height: 24 }),
                }),
                (0, i.jsx)(m.D, { variant: "heading-deprecated-12/semibold", children: n }),
            ],
        });
    },
    L = (e) => {
        let { guild: t } = e,
            [n, s] = l.useState(0),
            [r, b] = l.useState(0),
            [v, S] = l.useState(),
            L = (0, a.bG)([p.A], () => p.A.can(E.xBc.ADMINISTRATOR, t)),
            D = v?.offsetWidth,
            O = v?.offsetHeight;
        return (
            l.useEffect(() => {
                null != D && s(D / 2), null != O && b(O / 2);
            }, [D, O, s, b]),
            l.useEffect(() => {
                (0, x.sF)(f._.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL);
            }, []),
            (0, i.jsxs)("div", {
                className: N.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: N.vK,
                        ref: (e) => S(e),
                        children: [
                            T.map((e) => (0, i.jsx)(R, { ...e, imageCoordinates: [n, r] }, e.name)),
                            (0, i.jsx)("img", { alt: "", src: I, className: N.Sl, width: 256 }),
                            (0, i.jsx)("img", { alt: "", src: C, className: N._7 }),
                        ],
                    }),
                    (0, i.jsx)(m.D, { variant: "heading-xl/semibold", children: j.intl.string(j.t["M/gBcA"]) }),
                    (0, i.jsx)(g.E, {
                        color: "text-default",
                        variant: "text-md/normal",
                        className: N.rf,
                        children: j.intl.format(j.t["52EgsM"], {
                            helpdeskArticle: A.A.getArticleURL(E.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                    }),
                    (0, i.jsx)(d.m, {
                        text: L ? null : j.intl.string(j.t["pjG+T3"]),
                        "aria-label": L ? void 0 : j.intl.string(j.t["pjG+T3"]),
                        children: (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: N.x6,
                            children: (0, i.jsx)(h.$, {
                                variant: "primary",
                                text: j.intl.string(j.t.ElKTeb),
                                onClick: () => {
                                    _.A.open();
                                },
                                disabled: !L,
                            }),
                        }),
                    }),
                    (0, i.jsx)("hr", { className: N.me }),
                    (0, i.jsx)(g.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t.OzLWLE),
                    }),
                    (0, i.jsx)(g.E, {
                        color: "text-default",
                        className: N.rf,
                        variant: "text-sm/normal",
                        children: j.intl.format(j.t.rjhrqC, {
                            helpdeskArticle: A.A.getArticleURL(E.MVz.GUILD_COMMUNITY_FEATURE),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: N.qT,
                        children: [
                            {
                                icon: c.U,
                                color: o.A.unsafe_rawColors.GREEN_360.css,
                                header: j.intl.string(j.t.oVQF2y),
                                body: j.intl.format(j.t.A6G7ak, {
                                    featureHook: (e, t) => (0, i.jsx)("strong", { className: N.A3, children: e }, t),
                                }),
                            },
                            {
                                icon: c.U,
                                color: o.A.unsafe_rawColors.PLATFORM_PARTNER.css,
                                header: j.intl.string(j.t["0rJl9y"]),
                                body: j.intl.format(j.t.XsCNky, {
                                    infoHook: () =>
                                        (0, i.jsx)(d.m, {
                                            text: j.intl.string(j.t.kPJlTh),
                                            "aria-label": j.intl.string(j.t.kPJlTh),
                                            children: (0, i.jsx)(u.m, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: N.G,
                                            }),
                                        }),
                                    featureHook: (e, t) => (0, i.jsx)("strong", { className: N.A3, children: e }, t),
                                }),
                            },
                            {
                                icon: u.m,
                                color: o.A.unsafe_rawColors.RED_360.css,
                                header: j.intl.string(j.t.W2kLJC),
                                body: j.intl.string(j.t.hyNkHz),
                            },
                        ].map((e, t) => (0, i.jsx)(y, { ...e }, t)),
                    }),
                ],
            })
        );
    };
