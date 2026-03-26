"use strict";
n.r(t), n.d(t, { baseRules: () => E, customRules: () => T });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(791332),
    o = n.n(a),
    u = n(397927),
    c = n(398590),
    d = n(46054),
    m = n(976860),
    h = n(780964),
    g = n(840065),
    A = n(954571),
    f = n(652215),
    p = n(559868),
    x = n(582756);
let C = o().defaultRules.link,
    N = { section: f.JJy.SETTINGS_CHANGELOG },
    v = (e) => {
        let { level: t, children: n, className: l } = e,
            s = (0, u.$Il)(),
            r = parseInt(t, 10),
            a = isNaN(r) ? 1 : r;
        return i.createElement(`h${s + a - 1}`, { className: l }, n);
    },
    E = null != d.A ? d.A.defaultRules : null,
    T = {
        link: {
            parse(e, t, n) {
                let l,
                    i = e[2],
                    s = i.startsWith("https://discordapp.com/nitro") || i.startsWith("https://discord.com/nitro"),
                    r = i.startsWith("/activities");
                return (
                    (l = s
                        ? (e) => {
                              A.default.track(f.HAw.PREMIUM_PROMOTION_OPENED, { location: N }),
                                  (0, g.openUserSettings)(h.X.NITRO_PANEL),
                                  n.changeLog.track(f.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "nitro" }),
                                  (0, u.OoC)(p.lb),
                                  e.preventDefault();
                          }
                        : r
                          ? (e) => {
                                (0, m.pX)(i),
                                    n.changeLog.track(f.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        ...A.default.getCampaignParams(i),
                                    }),
                                    (0, c.bz)(),
                                    (0, u.OoC)(p.lb),
                                    e.preventDefault();
                            }
                          : () => {
                                n && "function" == typeof n.onLinkClick && n.onLinkClick(i),
                                    n.changeLog.track(f.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        target: i,
                                        cta_type: "inline_link",
                                        ...A.default.getCampaignParams(i),
                                    });
                            }),
                    { ...C.parse(e, t, n), callToAction: l }
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
            react: (t, n, i) => {
                var s;
                return (0, l.jsx)(
                    v,
                    {
                        level: t.level,
                        className: r()(
                            x["heading-md/bold"],
                            ...(null == (s = t.className) ? [] : s.split(" ").map((t) => e[t])),
                        ),
                        children: n(t.content, i),
                    },
                    i.key,
                );
            },
        }),
        heading: {
            react: (e, t, n) =>
                (0, l.jsx)(v, { level: e.level, className: x["heading-md/bold"], children: t(e.content, n) }, n.key),
        },
        image: {
            react(e, t, i) {
                let s = n(274516)(`./${e.target}`);
                return (0, l.jsx)("img", { alt: e.alt, src: s }, i.key);
            },
        },
        blockQuote: { react: E?.blockQuote.react },
        list: (e) => ({
            react(t, n, i) {
                let s = t.ordered ? "ol" : "ul",
                    a = t.items.map((t, s) =>
                        (0, l.jsx)("li", { className: r()(x["text-md/normal"], e.listItem), children: n(t, i) }, s),
                    );
                return (0, l.jsx)(s, { className: e.list, start: t.start, children: a }, i.key);
            },
        }),
        paragraph: (e) => ({
            react: (t, n, i) =>
                (0, l.jsx)("p", { className: r()(x["text-md/normal"], e.paragraph), children: n(t.content, i) }, i.key),
        }),
    };
