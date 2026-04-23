n.d(t, { A: () => T });
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    a = n(502572),
    r = n(315629),
    o = n(834730),
    d = n(403581),
    u = n(821609),
    c = n(104510),
    g = n(192308),
    m = n(987144),
    _ = n(975571),
    A = n(652215),
    h = n(788868),
    p = n(985018),
    x = n(901851),
    E = n(410229);
function T(e) {
    let { count: t, disabledReason: s } = e,
        T = _.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ);
    return (0, i.jsxs)(r.h, {
        color: "nitro-pink",
        className: x.vK,
        children: [
            (0, i.jsxs)("div", {
                className: x.nw,
                children: [
                    (0, i.jsxs)("div", {
                        className: x.MD,
                        children: [
                            (0, i.jsx)("img", { alt: "", className: x.F8, src: E.A }),
                            (0, i.jsx)("div", {
                                className: l()(x.qS, "theme-dark"),
                                children: (0, i.jsx)("span", { className: x.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: x.Tm,
                        children: [
                            (0, i.jsx)(o.E, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: p.intl.format(p.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, i.jsxs)("div", {
                                className: x.xv,
                                children: [
                                    (0, i.jsx)(d.t, { className: x.nE }),
                                    (0, i.jsx)(o.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: p.intl.format(p.t["6UAu+f"], {
                                            count: h.M4,
                                            boostCount: h.M4,
                                            helpdeskArticle: T,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(a.A, {
                shouldShow: null != s,
                text: s ?? "",
                "aria-label": s,
                children: (e) =>
                    (0, i.jsx)(u.$, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: c._,
                        text: p.intl.string(p.t.BMx1iy),
                        disabled: null != s,
                        onClick: () => {
                            (0, g.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, m.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: A.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: A.JJy.SETTINGS_PREMIUM,
                                                        object: A.ZSU.BUTTON_CTA,
                                                        objectType: A.AnalyticsObjectTypes.BUY,
                                                    },
                                                    guild: e,
                                                });
                                        },
                                    });
                            });
                        },
                    }),
            }),
        ],
    });
}
