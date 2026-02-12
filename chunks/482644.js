"use strict";
n.r(t), n.d(t, { baseRules: () => C, customRules: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(791332),
    l = n.n(o),
    u = n(397927),
    c = n(398590),
    d = n(46054),
    _ = n(976860),
    f = n(780964),
    h = n(840065),
    p = n(954571),
    g = n(652215),
    E = n(559868),
    A = n(60639);
let I = l().defaultRules.link,
    T = { section: g.JJy.SETTINGS_CHANGELOG };
function y() {
    p.default.track(g.HAw.PREMIUM_PROMOTION_OPENED, { location: T });
}
function S(e, t) {
    return null == t ? [] : t.split(" ").map((t) => e[t]);
}
let v = (e) => {
        let { level: t, children: n, className: r } = e,
            a = (0, u.$Il)(),
            s = parseInt(t, 10),
            o = a + (isNaN(s) ? 1 : s) - 1;
        return i.createElement(`h${o}`, { className: r }, n);
    },
    C = null != d.A ? d.A.defaultRules : null,
    b = {
        link: {
            parse(e, t, n) {
                let r,
                    i = e[2],
                    a = i.startsWith("https://discordapp.com/nitro") || i.startsWith("https://discord.com/nitro"),
                    s = i.startsWith("/activities");
                return (
                    (r = a
                        ? (e) => {
                              y(),
                                  (0, h.openUserSettings)(f.X.NITRO_PANEL, { section: g.nc_.PREMIUM }),
                                  n.changeLog.track(g.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "nitro" }),
                                  (0, u.OoC)(E.lb),
                                  e.preventDefault();
                          }
                        : s
                          ? (e) => {
                                (0, _.pX)(i),
                                    n.changeLog.track(g.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        ...p.default.getCampaignParams(i),
                                    }),
                                    (0, c.bz)(),
                                    (0, u.OoC)(E.lb),
                                    e.preventDefault();
                            }
                          : () => {
                                n && "function" == typeof n.onLinkClick && n.onLinkClick(i),
                                    n.changeLog.track(g.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        target: i,
                                        cta_type: "inline_link",
                                        ...p.default.getCampaignParams(i),
                                    });
                            }),
                    { ...I.parse(e, t, n), callToAction: r }
                );
            },
            react: (e, t, n) =>
                (0, r.jsx)(
                    u.MzZ,
                    {
                        href: l().sanitizeUrl(e.target),
                        title: e.title,
                        onClick: e.callToAction,
                        target: "_blank",
                        className: e.callToAction ? "cta" : void 0,
                        children: t(e.content, n),
                    },
                    n.key,
                ),
        },
        lheading: (e) => ({
            react: (t, n, i) =>
                (0, r.jsx)(
                    v,
                    {
                        level: t.level,
                        className: s()(A["heading-md/bold"], ...S(e, t.className)),
                        children: n(t.content, i),
                    },
                    i.key,
                ),
        }),
        heading: {
            react: (e, t, n) =>
                (0, r.jsx)(v, { level: e.level, className: A["heading-md/bold"], children: t(e.content, n) }, n.key),
        },
        image: {
            react(e, t, i) {
                let a = n(274516)(`./${e.target}`);
                return (0, r.jsx)("img", { alt: e.alt, src: a }, i.key);
            },
        },
        blockQuote: { react: C?.blockQuote.react },
        list: (e) => ({
            react(t, n, i) {
                let a = t.ordered ? "ol" : "ul",
                    o = t.items.map((t, a) =>
                        (0, r.jsx)("li", { className: s()(A["text-md/normal"], e.listItem), children: n(t, i) }, a),
                    );
                return (0, r.jsx)(a, { className: e.list, start: t.start, children: o }, i.key);
            },
        }),
        paragraph: (e) => ({
            react: (t, n, i) =>
                (0, r.jsx)("p", { className: s()(A["text-md/normal"], e.paragraph), children: n(t.content, i) }, i.key),
        }),
    };
