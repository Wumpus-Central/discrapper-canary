n.d(t, { A: () => x });
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    r = n(502572),
    a = n(397927),
    o = n(987144),
    d = n(975571),
    c = n(652215),
    u = n(788868),
    m = n(985018),
    g = n(901851),
    _ = n(410229);
function x(e) {
    let { count: t, disabledReason: s } = e,
        x = d.A.getArticleURL(c.MVz.GUILD_BOOSTING_FAQ);
    return (0, i.jsxs)(a.hLv, {
        color: "nitro-pink",
        className: g.vK,
        children: [
            (0, i.jsxs)("div", {
                className: g.nw,
                children: [
                    (0, i.jsxs)("div", {
                        className: g.MD,
                        children: [
                            (0, i.jsx)("img", { alt: "", className: g.F8, src: _.A }),
                            (0, i.jsx)("div", {
                                className: l()(g.qS, "theme-dark"),
                                children: (0, i.jsx)("span", { className: g.Vv, children: t }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: g.Tm,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: "heading-md/semibold",
                                color: "text-default",
                                tag: "span",
                                children: m.intl.format(m.t.KewnLu, { count: t, boostCount: t }),
                            }),
                            (0, i.jsxs)("div", {
                                className: g.xv,
                                children: [
                                    (0, i.jsx)(a.tvc, { className: g.nE }),
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-xs/semibold",
                                        color: "text-subtle",
                                        children: m.intl.format(m.t["6UAu+f"], {
                                            count: u.M4,
                                            boostCount: u.M4,
                                            helpdeskArticle: x,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(r.A, {
                shouldShow: null != s,
                text: s ?? "",
                "aria-label": s,
                children: (e) =>
                    (0, i.jsx)(a.Button, {
                        ...e,
                        variant: "primary",
                        size: "sm",
                        icon: a._Jp,
                        text: m.intl.string(m.t.BMx1iy),
                        disabled: null != s,
                        onClick: () => {
                            (0, a.mMO)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        onSelectGuild: (e) => {
                                            t.onClose(),
                                                (0, o.g)({
                                                    analyticsLocations: [],
                                                    analyticsLocation: {
                                                        page: c.liQ.GUILD_BOOSTING_USER_SETTINGS,
                                                        section: c.JJy.SETTINGS_PREMIUM,
                                                        object: c.ZSU.BUTTON_CTA,
                                                        objectType: c.AnalyticsObjectTypes.BUY,
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
