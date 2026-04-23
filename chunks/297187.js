s.d(e, { default: () => T });
var a = s(627968),
    l = s(64700),
    n = s(17928),
    i = s(832163),
    d = s(533562),
    c = s(503698),
    r = s.n(c),
    o = s(554146),
    u = s(661531),
    m = s(777666),
    x = s(43990),
    f = s(815021),
    b = s(534514),
    p = s(834730),
    g = s(821609),
    h = s(224640),
    N = s(367727),
    A = s(954571),
    _ = s(44724),
    j = s(652215),
    v = s(49999),
    C = s(547735);
function D(t) {
    let { logo: e, titles: s, subtitle: d, features: c, buttonText: D, applicationId: k, onClose: S, ...T } = t,
        I = (0, n.bG)([i.A], () => i.A.getGuildIdFromApplicationId(k ?? void 0));
    l.useEffect(() => {
        A.default.track(j.HAw.OPEN_MODAL, { type: "Social Layer Storefront Announcement Modal", application_id: k }),
            (0, N.d6)(o.M.GAME_SHOP_ANNOUNCEMENT_MODAL, { dismissAction: v.i.AUTO_DISMISS });
    }, [k]);
    let M = l.useCallback(() => {
            null != I && (0, _.X)({ guildId: I });
        }, [I]),
        E = l.useCallback(() => {
            null != I && ((0, _.default)({ guildId: I }), S());
        }, [I, S]);
    return (0, a.jsx)(x.N, {
        theme: j.NJ8.DARK,
        children: (t) =>
            (0, a.jsx)(h.d, {
                ...T,
                onClose: S,
                size: "lg",
                children: (0, a.jsxs)("div", {
                    className: r()(t, C.Qs),
                    children: [
                        (0, a.jsx)("div", {
                            className: C.b,
                            children: (0, a.jsx)(f.J, { onClick: S, variant: "overlay-secondary" }),
                        }),
                        (0, a.jsx)("div", {
                            className: C.xX,
                            children: (0, a.jsx)("img", { src: e, alt: "", className: C.wm }),
                        }),
                        (0, a.jsxs)("div", {
                            className: C.gn,
                            children: [
                                s.map((t, e) =>
                                    (0, a.jsx)(
                                        b.D,
                                        { variant: "display-md", color: "text-strong", className: C.DD, children: t },
                                        e,
                                    ),
                                ),
                                (0, a.jsx)(p.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    className: C.VA,
                                    children: d,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: C.qT,
                            children: c.map((t, e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: C.N4,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: C.AD,
                                                children: [
                                                    (0, a.jsx)("img", { src: t.icon, alt: "" }),
                                                    null != t.iconLabelText &&
                                                        (0, a.jsx)(m.Lp, {
                                                            text: t.iconLabelText,
                                                            color: u.A.colors.STATUS_POSITIVE.css,
                                                            className: C.go,
                                                        }),
                                                ],
                                            }),
                                            (0, a.jsxs)("div", {
                                                className: C.kh,
                                                children: [
                                                    (0, a.jsx)(b.D, {
                                                        variant: "heading-md/bold",
                                                        color: "text-strong",
                                                        children: t.title,
                                                    }),
                                                    (0, a.jsx)(p.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        children: t.subtitle,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsx)("div", {
                            className: C.UD,
                            children: (0, a.jsx)(g.$, {
                                variant: "primary",
                                text: D,
                                onClick: E,
                                onMouseDown: M,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
    });
}
var k = s(430825),
    S = s(985018);
function T(t) {
    let e = (0, n.bG)([i.A], () => i.A.getAnnouncementModalConfig()),
        s = (0, d.W)() ?? e?.applicationId;
    return (0, a.jsx)(D, {
        ...t,
        applicationId: s,
        logo: "/assets/7465e33adbe91f47.png",
        titles: [S.intl.string(k.default["2FKQ2n"]), S.intl.string(k.default.JN38wW)],
        subtitle: S.intl.string(k.default.me6trO),
        features: [
            {
                icon: "https://cdn.discordapp.com/assets/content/d6cd44432975795b8080bfa7c0f571d18b272dbba4590932d3798056cddab181.png",
                title: S.intl.string(k.default["C+RsW7"]),
                subtitle: S.intl.string(k.default["7mIXs6"]),
                iconLabelText: S.intl.formatToPlainString(k.default.IraH2Q, { discountOfferAmount: 20 }),
            },
            {
                icon: "/assets/d1590c1629cb2865.png",
                title: S.intl.string(k.default["5aC9+e"]),
                subtitle: S.intl.string(k.default.RMafGC),
            },
        ],
        buttonText: S.intl.string(k.default.WBMEcr),
    });
}
