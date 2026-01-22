n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(711358),
    l = n(771104),
    c = n(732139),
    u = n(985018),
    d = n(365834);
let f = (e) => {
        let { emojiSubCategory: t } = e;
        return (0, r.jsxs)("div", {
            className: a()(d.KT, t === c.tm.TOP_GUILD_EMOJI ? d.S7 : d.lD),
            children: [
                t === c.tm.TOP_GUILD_EMOJI
                    ? (0, r.jsx)(o.A, { foreground: d.Gb })
                    : (0, r.jsx)(l.A, { foreground: d.Gb }),
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/semibold",
                    color: "always-white",
                    children: t === c.tm.TOP_GUILD_EMOJI ? u.intl.string(u.t.TR2B4T) : u.intl.string(u.t["1aZ4V6"]),
                }),
            ],
        });
    },
    p = (e) => {
        let {
            className: t,
            graphicPrimary: n,
            graphicSecondary: i,
            titlePrimary: o,
            titleSecondary: l,
            isFavorite: p = !1,
            emojiSubCategory: _ = c.tm.NONE,
        } = e;
        return (0, r.jsxs)("div", {
            className: a()(d.qV, t),
            children: [
                (0, r.jsx)("div", {
                    className: d.FZ,
                    "aria-hidden": !0,
                    children: n,
                }),
                (0, r.jsxs)("div", {
                    className: d.tC,
                    children: [
                        (0, r.jsxs)(s.Text, {
                            className: d.jn,
                            variant: "text-md/semibold",
                            children: [
                                p
                                    ? (0, r.jsx)(s.Gg5, {
                                          size: "custom",
                                          color: "currentColor",
                                          "aria-label": p
                                              ? u.intl.formatToPlainString(u.t["+fdUkf"], { names: o })
                                              : void 0,
                                          width: 15,
                                          height: 15,
                                          className: d.BI,
                                      })
                                    : null,
                                o,
                            ],
                        }),
                        null != l &&
                            (0, r.jsx)(s.Text, {
                                className: d.Fm,
                                variant: "text-xs/normal",
                                children: l,
                            }),
                    ],
                }),
                _ === c.tm.NONE
                    ? null != i &&
                      (0, r.jsx)("div", {
                          className: d.vK,
                          "aria-hidden": !0,
                          children: i,
                      })
                    : (0, r.jsx)(f, { emojiSubCategory: _ }),
            ],
        });
    };
