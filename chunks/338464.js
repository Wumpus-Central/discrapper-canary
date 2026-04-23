"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(834730),
    o = n(27232),
    l = n(711358),
    u = n(771104),
    c = n(732139),
    d = n(985018),
    _ = n(759627);
let f = (e) => {
        let { emojiSubCategory: t } = e;
        return (0, r.jsxs)("div", {
            className: s()(_.KT, t === c.tm.TOP_GUILD_EMOJI ? _.S7 : _.lD),
            children: [
                t === c.tm.TOP_GUILD_EMOJI
                    ? (0, r.jsx)(l.A, { foreground: _.Gb })
                    : (0, r.jsx)(u.A, { foreground: _.Gb }),
                (0, r.jsx)(a.E, {
                    variant: "text-sm/semibold",
                    color: "always-white",
                    children: t === c.tm.TOP_GUILD_EMOJI ? d.intl.string(d.t.TR2B4T) : d.intl.string(d.t["1aZ4V6"]),
                }),
            ],
        });
    },
    p = (e) => {
        let {
            className: t,
            graphicPrimary: n,
            graphicSecondary: i,
            titlePrimary: l,
            titleSecondary: u,
            isFavorite: p = !1,
            emojiSubCategory: h = c.tm.NONE,
        } = e;
        return (0, r.jsxs)("div", {
            className: s()(_.qV, t),
            children: [
                (0, r.jsx)("div", { className: _.FZ, "aria-hidden": !0, children: n }),
                (0, r.jsxs)("div", {
                    className: _.tC,
                    children: [
                        (0, r.jsxs)(a.E, {
                            className: _.jn,
                            variant: "text-md/semibold",
                            children: [
                                p
                                    ? (0, r.jsx)(o.G, {
                                          size: "custom",
                                          color: "currentColor",
                                          "aria-label": d.intl.formatToPlainString(d.t["+fdUkf"], { names: l }),
                                          width: 15,
                                          height: 15,
                                          className: _.BI,
                                      })
                                    : null,
                                l,
                            ],
                        }),
                        null != u && (0, r.jsx)(a.E, { className: _.Fm, variant: "text-xs/normal", children: u }),
                    ],
                }),
                h === c.tm.NONE
                    ? null != i && (0, r.jsx)("div", { className: _.vK, "aria-hidden": !0, children: i })
                    : (0, r.jsx)(f, { emojiSubCategory: h }),
            ],
        });
    };
