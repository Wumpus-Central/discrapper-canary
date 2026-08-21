"use strict";
s.r(t), s.d(t, { baseRules: () => N, customRules: () => _ });
var l = s(477900),
    a = s(582128),
    n = s(503698),
    r = s.n(n),
    o = s(478676),
    u = s.n(o),
    c = s(707554),
    i = s(192308),
    p = s(349288),
    d = s(398590),
    g = s(46054),
    m = s(976860),
    f = s(780964),
    h = s(766075),
    R = s(174459),
    k = s(652215),
    b = s(559868),
    y = s(736541);
let C = u().defaultRules.link,
    x = { section: k.JJy.SETTINGS_CHANGELOG };
function A(e) {
    let { level: t, children: s, className: l } = e,
        n = (0, c.$)(),
        r = parseInt(t, 10),
        o = isNaN(r) ? 1 : r;
    return a.createElement(`h${n + o - 1}`, { className: l }, s);
}
let N = null != g.A ? g.A.defaultRules : null,
    _ = {
        link: {
            parse(e, t, s) {
                let l,
                    a = e[2],
                    n = a.startsWith("https://discordapp.com/nitro") || a.startsWith("https://discord.com/nitro"),
                    r = a.startsWith("/activities");
                return (
                    (l = n
                        ? (e) => {
                              R.default.track(k.HAw.PREMIUM_PROMOTION_OPENED, { location: x }),
                                  (0, h.openUserSettings)(f.X.NITRO_PANEL),
                                  s.changeLog.track(k.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "nitro" }),
                                  (0, i.closeModal)(b.lb),
                                  e.preventDefault();
                          }
                        : r
                          ? (e) => {
                                (0, m.pX)(a),
                                    s.changeLog.track(k.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        ...R.default.getCampaignParams(a),
                                    }),
                                    (0, d.bz)(),
                                    (0, i.closeModal)(b.lb),
                                    e.preventDefault();
                            }
                          : () => {
                                s && "function" == typeof s.onLinkClick && s.onLinkClick(a),
                                    s.changeLog.track(k.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        target: a,
                                        cta_type: "inline_link",
                                        ...R.default.getCampaignParams(a),
                                    });
                            }),
                    { ...C.parse(e, t, s), callToAction: l }
                );
            },
            react: (e, t, s) =>
                (0, l.jsx)(
                    p.Anchor,
                    {
                        href: u().sanitizeUrl(e.target),
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
            react: (t, s, a) => {
                var n;
                return (0, l.jsx)(
                    A,
                    {
                        level: t.level,
                        className: r()(
                            y["heading-md/bold"],
                            ...(null == (n = t.className) ? [] : n.split(" ").map((t) => e[t])),
                        ),
                        children: s(t.content, a),
                    },
                    a.key,
                );
            },
        }),
        heading: {
            react: (e, t, s) =>
                (0, l.jsx)(A, { level: e.level, className: y["heading-md/bold"], children: t(e.content, s) }, s.key),
        },
        image: {
            react(e, t, a) {
                let n = s(274516)(`./${e.target}`);
                return (0, l.jsx)("img", { alt: e.alt, src: n }, a.key);
            },
        },
        blockQuote: { react: N?.blockQuote.react },
        list: (e) => ({
            react(t, s, a) {
                let n = t.ordered ? "ol" : "ul",
                    o = t.items.map((t, n) =>
                        (0, l.jsx)("li", { className: r()(y["text-md/normal"], e.listItem), children: s(t, a) }, n),
                    );
                return (0, l.jsx)(n, { className: e.list, start: t.start, children: o }, a.key);
            },
        }),
        paragraph: (e) => ({
            react: (t, s, a) =>
                (0, l.jsx)("p", { className: r()(y["text-md/normal"], e.paragraph), children: s(t.content, a) }, a.key),
        }),
    };
