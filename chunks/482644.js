"use strict";
n.r(t), n.d(t, { baseRules: () => S, customRules: () => v });
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
    p = n(840065),
    h = n(954571),
    m = n(652215),
    g = n(559868);
let E = l().defaultRules.link,
    A = { section: m.JJy.SETTINGS_CHANGELOG };
function I() {
    h.default.track(m.HAw.PREMIUM_PROMOTION_OPENED, { location: A });
}
function T(e, t) {
    return null == t ? [] : t.split(" ").map((t) => e[t]);
}
let y = (e) => {
        let { level: t, children: n, className: r = null, styleSheet: a = {} } = e,
            o = (0, u.$Il)(),
            l = parseInt(t, 10),
            c = o + (isNaN(l) ? 1 : l) - 1;
        return i.createElement(`h${c}`, { className: s()(...T(a, r)) }, n);
    },
    S = null != d.A ? d.A.defaultRules : null,
    v = {
        link: {
            parse(e, t, n) {
                let r,
                    i = e[2],
                    a = i.startsWith("https://discordapp.com/nitro") || i.startsWith("https://discord.com/nitro"),
                    s = i.startsWith("/activities");
                return (
                    (r = a
                        ? (e) => {
                              I(),
                                  (0, p.openUserSettings)(f.X.NITRO_PANEL, { section: m.nc_.PREMIUM }),
                                  n.changeLog.track(m.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "nitro" }),
                                  (0, u.OoC)(g.lb),
                                  e.preventDefault();
                          }
                        : s
                          ? (e) => {
                                (0, _.pX)(i),
                                    n.changeLog.track(m.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        ...h.default.getCampaignParams(i),
                                    }),
                                    (0, c.bz)(),
                                    (0, u.OoC)(g.lb),
                                    e.preventDefault();
                            }
                          : () => {
                                n && "function" == typeof n.onLinkClick && n.onLinkClick(i),
                                    n.changeLog.track(m.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        target: i,
                                        cta_type: "inline_link",
                                        ...h.default.getCampaignParams(i),
                                    });
                            }),
                    { ...E.parse(e, t, n), callToAction: r }
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
                    y,
                    { level: t.level, className: t.className, styleSheet: e, children: n(t.content, i) },
                    i.key,
                ),
        }),
        heading: { react: (e, t, n) => (0, r.jsx)(y, { level: e.level, children: t(e.content, n) }, n.key) },
        image: {
            react(e, t, i) {
                let a = n(274516)(`./${e.target}`);
                return (0, r.jsx)("img", { alt: e.alt, src: a }, i.key);
            },
        },
        blockQuote: { react: S?.blockQuote.react },
        paragraph: { react: (e, t, n) => (0, r.jsx)("p", { children: t(e.content, n) }, n.key) },
    };
