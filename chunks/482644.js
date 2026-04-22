"use strict";
l.r(t), l.d(t, { baseRules: () => C, customRules: () => T });
var i = l(627968),
    r = l(64700),
    n = l(503698),
    a = l.n(n),
    s = l(791332),
    o = l.n(s),
    c = l(707554),
    d = l(192308),
    u = l(349288),
    _ = l(398590),
    h = l(46054),
    p = l(976860),
    m = l(780964),
    g = l(858897),
    f = l(954571),
    A = l(652215),
    b = l(559868),
    v = l(198964);
let E = o().defaultRules.link,
    x = { section: A.JJy.SETTINGS_CHANGELOG },
    I = (e) => {
        let { level: t, children: l, className: i } = e,
            n = (0, c.$)(),
            a = parseInt(t, 10),
            s = isNaN(a) ? 1 : a;
        return r.createElement(`h${n + s - 1}`, { className: i }, l);
    },
    C = null != h.A ? h.A.defaultRules : null,
    T = {
        link: {
            parse(e, t, l) {
                let i,
                    r = e[2],
                    n = r.startsWith("https://discordapp.com/nitro") || r.startsWith("https://discord.com/nitro"),
                    a = r.startsWith("/activities");
                return (
                    (i = n
                        ? (e) => {
                              f.default.track(A.HAw.PREMIUM_PROMOTION_OPENED, { location: x }),
                                  (0, g.openUserSettings)(m.X.NITRO_PANEL),
                                  l.changeLog.track(A.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "nitro" }),
                                  (0, d.closeModal)(b.lb),
                                  e.preventDefault();
                          }
                        : a
                          ? (e) => {
                                (0, p.pX)(r),
                                    l.changeLog.track(A.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        ...f.default.getCampaignParams(r),
                                    }),
                                    (0, _.bz)(),
                                    (0, d.closeModal)(b.lb),
                                    e.preventDefault();
                            }
                          : () => {
                                l && "function" == typeof l.onLinkClick && l.onLinkClick(r),
                                    l.changeLog.track(A.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        target: r,
                                        cta_type: "inline_link",
                                        ...f.default.getCampaignParams(r),
                                    });
                            }),
                    { ...E.parse(e, t, l), callToAction: i }
                );
            },
            react: (e, t, l) =>
                (0, i.jsx)(
                    u.Anchor,
                    {
                        href: o().sanitizeUrl(e.target),
                        title: e.title,
                        onClick: e.callToAction,
                        target: "_blank",
                        className: e.callToAction ? "cta" : void 0,
                        children: t(e.content, l),
                    },
                    l.key,
                ),
        },
        lheading: (e) => ({
            react: (t, l, r) => {
                var n;
                return (0, i.jsx)(
                    I,
                    {
                        level: t.level,
                        className: a()(
                            v["heading-md/bold"],
                            ...(null == (n = t.className) ? [] : n.split(" ").map((t) => e[t])),
                        ),
                        children: l(t.content, r),
                    },
                    r.key,
                );
            },
        }),
        heading: {
            react: (e, t, l) =>
                (0, i.jsx)(I, { level: e.level, className: v["heading-md/bold"], children: t(e.content, l) }, l.key),
        },
        image: {
            react(e, t, r) {
                let n = l(274516)(`./${e.target}`);
                return (0, i.jsx)("img", { alt: e.alt, src: n }, r.key);
            },
        },
        blockQuote: { react: C?.blockQuote.react },
        list: (e) => ({
            react(t, l, r) {
                let n = t.ordered ? "ol" : "ul",
                    s = t.items.map((t, n) =>
                        (0, i.jsx)("li", { className: a()(v["text-md/normal"], e.listItem), children: l(t, r) }, n),
                    );
                return (0, i.jsx)(n, { className: e.list, start: t.start, children: s }, r.key);
            },
        }),
        paragraph: (e) => ({
            react: (t, l, r) =>
                (0, i.jsx)("p", { className: a()(v["text-md/normal"], e.paragraph), children: l(t.content, r) }, r.key),
        }),
    };
