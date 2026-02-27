"use strict";
n.r(t), n.d(t, { baseRules: () => j, customRules: () => C });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    a = n(791332),
    o = n.n(a),
    u = n(397927),
    c = n(398590),
    d = n(46054),
    m = n(976860),
    h = n(780964),
    g = n(840065),
    p = n(954571),
    A = n(652215),
    f = n(559868),
    x = n(60639);
let v = o().defaultRules.link,
    N = { section: A.JJy.SETTINGS_CHANGELOG },
    b = (e) => {
        let { level: t, children: n, className: l } = e,
            i = (0, u.$Il)(),
            r = parseInt(t, 10),
            a = isNaN(r) ? 1 : r;
        return s.createElement(`h${i + a - 1}`, { className: l }, n);
    },
    j = null != d.A ? d.A.defaultRules : null,
    C = {
        link: {
            parse(e, t, n) {
                let l,
                    s = e[2],
                    i = s.startsWith("https://discordapp.com/nitro") || s.startsWith("https://discord.com/nitro"),
                    r = s.startsWith("/activities");
                return (
                    (l = i
                        ? (e) => {
                              p.default.track(A.HAw.PREMIUM_PROMOTION_OPENED, { location: N }),
                                  (0, g.openUserSettings)(h.X.NITRO_PANEL, { section: A.nc_.PREMIUM }),
                                  n.changeLog.track(A.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "nitro" }),
                                  (0, u.OoC)(f.lb),
                                  e.preventDefault();
                          }
                        : r
                          ? (e) => {
                                (0, m.pX)(s),
                                    n.changeLog.track(A.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        ...p.default.getCampaignParams(s),
                                    }),
                                    (0, c.bz)(),
                                    (0, u.OoC)(f.lb),
                                    e.preventDefault();
                            }
                          : () => {
                                n && "function" == typeof n.onLinkClick && n.onLinkClick(s),
                                    n.changeLog.track(A.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        target: s,
                                        cta_type: "inline_link",
                                        ...p.default.getCampaignParams(s),
                                    });
                            }),
                    { ...v.parse(e, t, n), callToAction: l }
                );
            },
            react: (e, t, n) =>
                (0, l.jsx)(
                    u.MzZ,
                    {
                        href: o().sanitizeUrl(e.target),
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
            react: (t, n, s) => {
                var i;
                return (0, l.jsx)(
                    b,
                    {
                        level: t.level,
                        className: r()(
                            x["heading-md/bold"],
                            ...(null == (i = t.className) ? [] : i.split(" ").map((t) => e[t])),
                        ),
                        children: n(t.content, s),
                    },
                    s.key,
                );
            },
        }),
        heading: {
            react: (e, t, n) =>
                (0, l.jsx)(b, { level: e.level, className: x["heading-md/bold"], children: t(e.content, n) }, n.key),
        },
        image: {
            react(e, t, s) {
                let i = n(274516)(`./${e.target}`);
                return (0, l.jsx)("img", { alt: e.alt, src: i }, s.key);
            },
        },
        blockQuote: { react: j?.blockQuote.react },
        list: (e) => ({
            react(t, n, s) {
                let i = t.ordered ? "ol" : "ul",
                    a = t.items.map((t, i) =>
                        (0, l.jsx)("li", { className: r()(x["text-md/normal"], e.listItem), children: n(t, s) }, i),
                    );
                return (0, l.jsx)(i, { className: e.list, start: t.start, children: a }, s.key);
            },
        }),
        paragraph: (e) => ({
            react: (t, n, s) =>
                (0, l.jsx)("p", { className: r()(x["text-md/normal"], e.paragraph), children: n(t.content, s) }, s.key),
        }),
    };
