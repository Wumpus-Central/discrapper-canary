"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(834730),
    a = n(27232),
    o = n(711358),
    c = n(771104),
    u = n(732139),
    d = n(985018),
    h = n(759627);
let m = (e) => {
        let { emojiSubCategory: t } = e;
        return (0, i.jsxs)("div", {
            className: s()(h.KT, t === u.tm.TOP_GUILD_EMOJI ? h.S7 : h.lD),
            children: [
                t === u.tm.TOP_GUILD_EMOJI
                    ? (0, i.jsx)(o.A, { foreground: h.Gb })
                    : (0, i.jsx)(c.A, { foreground: h.Gb }),
                (0, i.jsx)(r.E, {
                    variant: "text-sm/semibold",
                    color: "always-white",
                    children: t === u.tm.TOP_GUILD_EMOJI ? d.intl.string(d.t.TR2B4T) : d.intl.string(d.t["1aZ4V6"]),
                }),
            ],
        });
    },
    p = (e) => {
        let {
            className: t,
            graphicPrimary: n,
            graphicSecondary: l,
            titlePrimary: o,
            titleSecondary: c,
            isFavorite: p = !1,
            emojiSubCategory: f = u.tm.NONE,
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(h.qV, t),
            children: [
                (0, i.jsx)("div", { className: h.FZ, "aria-hidden": !0, children: n }),
                (0, i.jsxs)("div", {
                    className: h.tC,
                    children: [
                        (0, i.jsxs)(r.E, {
                            className: h.jn,
                            variant: "text-md/semibold",
                            children: [
                                p
                                    ? (0, i.jsx)(a.G, {
                                          size: "custom",
                                          color: "currentColor",
                                          "aria-label": d.intl.formatToPlainString(d.t["+fdUkf"], { names: o }),
                                          width: 15,
                                          height: 15,
                                          className: h.BI,
                                      })
                                    : null,
                                o,
                            ],
                        }),
                        null != c && (0, i.jsx)(r.E, { className: h.Fm, variant: "text-xs/normal", children: c }),
                    ],
                }),
                f === u.tm.NONE
                    ? null != l && (0, i.jsx)("div", { className: h.vK, "aria-hidden": !0, children: l })
                    : (0, i.jsx)(m, { emojiSubCategory: f }),
            ],
        });
    };
