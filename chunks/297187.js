e.d(s, { default: () => E });
var i = e(627968),
    l = e(64700),
    a = e(17928),
    n = e(832163),
    d = e(533562),
    c = e(503698),
    r = e.n(c),
    o = e(554146),
    u = e(661531),
    m = e(777666),
    x = e(43990),
    f = e(815021),
    p = e(534514),
    h = e(834730),
    b = e(821609),
    g = e(224640),
    N = e(367727),
    j = e(954571),
    A = e(44724),
    v = e(652215),
    C = e(49999),
    D = e(547735);
function M(t) {
    let { logo: s, titles: e, subtitle: d, features: c, buttonText: M, applicationId: T, onClose: k, ...E } = t,
        I = (0, a.bG)([n.A], () => n.A.getGuildIdFromApplicationId(T ?? void 0));
    l.useEffect(() => {
        j.default.track(v.HAw.OPEN_MODAL, { type: "Social Layer Storefront Announcement Modal", application_id: T }),
            (0, N.d6)(o.M.GAME_SHOP_ANNOUNCEMENT_MODAL, { dismissAction: C.i.AUTO_DISMISS });
    }, [T]);
    let S = l.useCallback(() => {
            null != I && (0, A.X)({ guildId: I });
        }, [I]),
        O = l.useCallback(() => {
            null != I && ((0, A.default)({ guildId: I }), k());
        }, [I, k]);
    return (0, i.jsx)(x.N, {
        theme: v.NJ8.DARKER,
        children: (t) =>
            (0, i.jsx)(g.d, {
                ...E,
                onClose: k,
                size: "lg",
                children: (0, i.jsxs)("div", {
                    className: r()(t, D.Qs),
                    children: [
                        (0, i.jsx)("div", {
                            className: D.b,
                            children: (0, i.jsx)(f.J, { onClick: k, variant: "overlay-secondary" }),
                        }),
                        (0, i.jsx)("div", {
                            className: D.xX,
                            children: (0, i.jsx)("img", { src: s, alt: "", className: D.wm }),
                        }),
                        (0, i.jsxs)("div", {
                            className: D.gn,
                            children: [
                                e.map((t, s) =>
                                    (0, i.jsx)(
                                        p.D,
                                        { variant: "display-md", color: "text-strong", className: D.DD, children: t },
                                        s,
                                    ),
                                ),
                                (0, i.jsx)(h.E, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    className: D.VA,
                                    children: d,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: D.qT,
                            children: c.map((t, s) =>
                                (0, i.jsxs)(
                                    "div",
                                    {
                                        className: D.N4,
                                        children: [
                                            (0, i.jsxs)("div", {
                                                className: D.AD,
                                                children: [
                                                    (0, i.jsx)("img", { src: t.icon, alt: "" }),
                                                    null != t.iconLabelText &&
                                                        (0, i.jsx)(m.Lp, {
                                                            text: t.iconLabelText,
                                                            color: u.A.colors.STATUS_POSITIVE.css,
                                                            className: D.go,
                                                        }),
                                                ],
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: D.kh,
                                                children: [
                                                    (0, i.jsx)(p.D, {
                                                        variant: "heading-md/bold",
                                                        color: "text-strong",
                                                        children: t.title,
                                                    }),
                                                    (0, i.jsx)(h.E, {
                                                        variant: "text-sm/medium",
                                                        color: "text-muted",
                                                        children: t.subtitle,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    },
                                    s,
                                ),
                            ),
                        }),
                        (0, i.jsx)("div", {
                            className: D.UD,
                            children: (0, i.jsx)(b.$, {
                                variant: "primary",
                                text: M,
                                onClick: O,
                                onMouseDown: S,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
    });
}
var T = e(430825),
    k = e(985018);
function E(t) {
    let s = (0, a.bG)([n.A], () => n.A.getAnnouncementModalConfig()),
        e = (0, d.W)() ?? s?.applicationId;
    return (0, i.jsx)(M, {
        ...t,
        applicationId: e,
        logo: "/assets/7465e33adbe91f47.png",
        titles: [k.intl.string(T.default["2FKQ2n"]), k.intl.string(T.default.JN38wW)],
        subtitle: k.intl.string(T.default.me6trO),
        features: [
            {
                icon: "https://cdn.discordapp.com/assets/content/d6cd44432975795b8080bfa7c0f571d18b272dbba4590932d3798056cddab181.png",
                title: k.intl.string(T.default["C+RsW7"]),
                subtitle: k.intl.string(T.default["7mIXs6"]),
                iconLabelText: k.intl.formatToPlainString(T.default.IraH2Q, { discountOfferAmount: 20 }),
            },
            {
                icon: "/assets/d1590c1629cb2865.png",
                title: k.intl.string(T.default["5aC9+e"]),
                subtitle: k.intl.string(T.default.RMafGC),
            },
        ],
        buttonText: k.intl.string(T.default.WBMEcr),
    });
}
