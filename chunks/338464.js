"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(711358),
    l = n(771104),
    u = n(732139),
    c = n(985018),
    d = n(627707);
let _ = (e) => {
        let { emojiSubCategory: t } = e;
        return (0, r.jsxs)("div", {
            className: s()(d.KT, t === u.tm.TOP_GUILD_EMOJI ? d.S7 : d.lD),
            children: [
                t === u.tm.TOP_GUILD_EMOJI
                    ? (0, r.jsx)(o.A, { foreground: d.Gb })
                    : (0, r.jsx)(l.A, { foreground: d.Gb }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/semibold",
                    color: "always-white",
                    children: t === u.tm.TOP_GUILD_EMOJI ? c.intl.string(c.t.TR2B4T) : c.intl.string(c.t["1aZ4V6"]),
                }),
            ],
        });
    },
    f = (e) => {
        let {
            className: t,
            graphicPrimary: n,
            graphicSecondary: i,
            titlePrimary: o,
            titleSecondary: l,
            isFavorite: f = !1,
            emojiSubCategory: p = u.tm.NONE,
        } = e;
        return (0, r.jsxs)("div", {
            className: s()(d.qV, t),
            children: [
                (0, r.jsx)("div", { className: d.FZ, "aria-hidden": !0, children: n }),
                (0, r.jsxs)("div", {
                    className: d.tC,
                    children: [
                        (0, r.jsxs)(a.Text, {
                            className: d.jn,
                            variant: "text-md/semibold",
                            children: [
                                f
                                    ? (0, r.jsx)(a.Gg5, {
                                          size: "custom",
                                          color: "currentColor",
                                          "aria-label": c.intl.formatToPlainString(c.t["+fdUkf"], { names: o }),
                                          width: 15,
                                          height: 15,
                                          className: d.BI,
                                      })
                                    : null,
                                o,
                            ],
                        }),
                        null != l && (0, r.jsx)(a.Text, { className: d.Fm, variant: "text-xs/normal", children: l }),
                    ],
                }),
                p === u.tm.NONE
                    ? null != i && (0, r.jsx)("div", { className: d.vK, "aria-hidden": !0, children: i })
                    : (0, r.jsx)(_, { emojiSubCategory: p }),
            ],
        });
    };
