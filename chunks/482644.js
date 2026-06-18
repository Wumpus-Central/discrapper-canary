"use strict";
s.r(t), s.d(t, { baseRules: () => N, customRules: () => _ });
var a = s(627968),
    l = s(64700),
    n = s(503698),
    r = s.n(n),
    u = s(791332),
    c = s.n(u),
    o = s(707554),
    i = s(192308),
    p = s(349288),
    d = s(398590),
    g = s(46054),
    m = s(976860),
    h = s(780964),
    f = s(766075),
    k = s(174459),
    R = s(652215),
    b = s(559868),
    y = s(198964);
let C = c().defaultRules.link,
    x = { section: R.JJy.SETTINGS_CHANGELOG };
function A(e) {
    let { level: t, children: s, className: a } = e,
        n = (0, o.$)(),
        r = parseInt(t, 10),
        u = isNaN(r) ? 1 : r;
    return l.createElement(`h${n + u - 1}`, { className: a }, s);
}
let N = null != g.A ? g.A.defaultRules : null,
    _ = {
        link: {
            parse(e, t, s) {
                let a,
                    l = e[2],
                    n = l.startsWith("https://discordapp.com/nitro") || l.startsWith("https://discord.com/nitro"),
                    r = l.startsWith("/activities");
                return (
                    (a = n
                        ? (e) => {
                              k.default.track(R.HAw.PREMIUM_PROMOTION_OPENED, { location: x }),
                                  (0, f.openUserSettings)(h.X.NITRO_PANEL),
                                  s.changeLog.track(R.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "nitro" }),
                                  (0, i.closeModal)(b.lb),
                                  e.preventDefault();
                          }
                        : r
                          ? (e) => {
                                (0, m.pX)(l),
                                    s.changeLog.track(R.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        ...k.default.getCampaignParams(l),
                                    }),
                                    (0, d.bz)(),
                                    (0, i.closeModal)(b.lb),
                                    e.preventDefault();
                            }
                          : () => {
                                s && "function" == typeof s.onLinkClick && s.onLinkClick(l),
                                    s.changeLog.track(R.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        target: l,
                                        cta_type: "inline_link",
                                        ...k.default.getCampaignParams(l),
                                    });
                            }),
                    { ...C.parse(e, t, s), callToAction: a }
                );
            },
            react: (e, t, s) =>
                (0, a.jsx)(
                    p.Anchor,
                    {
                        href: c().sanitizeUrl(e.target),
                        title: e.title,
                        onClick: e.callToAction,
                        target: "_blank",
                        className: e.callToAction ? "cta" : void 0,
                        children: t(e.content, s),
                    },
                    s.key,
                ),
        },
        lheading: (e) => ({
            react: (t, s, l) => {
                var n;
                return (0, a.jsx)(
                    A,
                    {
                        level: t.level,
                        className: r()(
                            y["heading-md/bold"],
                            ...(null == (n = t.className) ? [] : n.split(" ").map((t) => e[t])),
                        ),
                        children: s(t.content, l),
                    },
                    l.key,
                );
            },
        }),
        heading: {
            react: (e, t, s) =>
                (0, a.jsx)(A, { level: e.level, className: y["heading-md/bold"], children: t(e.content, s) }, s.key),
        },
        image: {
            react(e, t, l) {
                let n = s(274516)(`./${e.target}`);
                return (0, a.jsx)("img", { alt: e.alt, src: n }, l.key);
            },
        },
        blockQuote: { react: N?.blockQuote.react },
        list: (e) => ({
            react(t, s, l) {
                let n = t.ordered ? "ol" : "ul",
                    u = t.items.map((t, n) =>
                        (0, a.jsx)("li", { className: r()(y["text-md/normal"], e.listItem), children: s(t, l) }, n),
                    );
                return (0, a.jsx)(n, { className: e.list, start: t.start, children: u }, l.key);
            },
        }),
        paragraph: (e) => ({
            react: (t, s, l) =>
                (0, a.jsx)("p", { className: r()(y["text-md/normal"], e.paragraph), children: s(t.content, l) }, l.key),
        }),
    };
