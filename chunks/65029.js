n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(28531),
    l = n(819758),
    c = n(149203),
    u = n(388032),
    d = n(191581);
let f = (e) => {
        let { emojiSubCategory: t } = e;
        return (0, r.jsxs)("div", {
            className: a()(d.badgeLabel, t === c.t0.TOP_GUILD_EMOJI ? d.topGuildEmojiBadge : d.newlyAddedBadge),
            children: [
                t === c.t0.TOP_GUILD_EMOJI
                    ? (0, r.jsx)(s.Z, { foreground: d.newlyAddedBadgeIcon })
                    : (0, r.jsx)(l.Z, { foreground: d.newlyAddedBadgeIcon }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "always-white",
                    children: t === c.t0.TOP_GUILD_EMOJI ? u.intl.string(u.t.TR2B4T) : u.intl.string(u.t["1aZ4V6"]),
                }),
            ],
        });
    },
    p = (e) => {
        let {
            className: t,
            graphicPrimary: n,
            graphicSecondary: i,
            titlePrimary: s,
            titleSecondary: l,
            isFavorite: p = !1,
            emojiSubCategory: _ = c.t0.NONE,
        } = e;
        return (0, r.jsxs)("div", {
            className: a()(d.inspector, t),
            children: [
                (0, r.jsx)("div", {
                    className: d.graphicPrimary,
                    "aria-hidden": !0,
                    children: n,
                }),
                (0, r.jsxs)("div", {
                    className: d.textWrapper,
                    children: [
                        (0, r.jsxs)(o.Text, {
                            className: d.titlePrimary,
                            variant: "text-md/semibold",
                            children: [
                                p
                                    ? (0, r.jsx)(o.r7p, {
                                          size: "custom",
                                          color: "currentColor",
                                          "aria-label": p
                                              ? u.intl.formatToPlainString(u.t["+fdUkf"], { names: s })
                                              : void 0,
                                          width: 15,
                                          height: 15,
                                          className: d.favorite,
                                      })
                                    : null,
                                s,
                            ],
                        }),
                        null != l &&
                            (0, r.jsx)(o.Text, {
                                className: d.titleSecondary,
                                variant: "text-xs/normal",
                                children: l,
                            }),
                    ],
                }),
                _ === c.t0.NONE
                    ? null != i &&
                      (0, r.jsx)("div", {
                          className: d.graphicSecondary,
                          "aria-hidden": !0,
                          children: i,
                      })
                    : (0, r.jsx)(f, { emojiSubCategory: _ }),
            ],
        });
    };
