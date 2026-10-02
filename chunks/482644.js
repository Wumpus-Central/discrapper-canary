(s.r(t), s.d(t, { baseRules: () => _, customRules: () => v }));
var l = s(477900),
    a = s(582128),
    n = s(503698),
    r = s.n(n),
    u = s(478676),
    o = s.n(u),
    c = s(707554),
    i = s(192308),
    p = s(28863),
    d = s(398590),
    g = s(46054),
    m = s(551965),
    f = s(976860),
    h = s(780964),
    R = s(766075),
    k = s(174459),
    b = s(652215),
    y = s(559868),
    C = s(736541);
let A = o().defaultRules.link,
    x = { section: b.JJy.SETTINGS_CHANGELOG };
function N(e) {
    let { level: t, children: s, className: l } = e,
        n = (0, c.$)(),
        r = parseInt(t, 10),
        u = isNaN(r) ? 1 : r;
    return a.createElement(`h${n + u - 1}`, { className: l }, s);
}
let _ = (function () {
        if (null == g.A) return null;
        let { emoji: e, customEmoji: t } = g.A.createReactRules({
            enableBuildOverrides: !0,
            enableEmojiClick: !1,
            emojiFocusable: !1,
        });
        return (0, m.A)([g.A.defaultRules, { emoji: e, customEmoji: t }]);
    })(),
    v = {
        link: {
            parse(e, t, s) {
                let l,
                    a = e[2],
                    n = a.startsWith("https://discordapp.com/nitro") || a.startsWith("https://discord.com/nitro"),
                    r = a.startsWith("/activities");
                return (
                    (l = n
                        ? (e) => {
                              (k.default.track(b.HAw.PREMIUM_PROMOTION_OPENED, { location: x }),
                                  (0, R.openUserSettings)(h.X.NITRO_PANEL),
                                  s.changeLog.track(b.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "nitro" }),
                                  (0, i.closeModal)(y.lb),
                                  e.preventDefault());
                          }
                        : r
                          ? (e) => {
                                ((0, f.pX)(a),
                                    s.changeLog.track(b.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        ...k.default.getCampaignParams(a),
                                    }),
                                    (0, d.bz)(),
                                    (0, i.closeModal)(y.lb),
                                    e.preventDefault());
                            }
                          : () => {
                                (s && "function" == typeof s.onLinkClick && s.onLinkClick(a),
                                    s.changeLog.track(b.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        target: a,
                                        cta_type: "inline_link",
                                        ...k.default.getCampaignParams(a),
                                    }));
                            }),
                    { ...A.parse(e, t, s), callToAction: l }
                );
            },
            react: (e, t, s) =>
                (0, l.jsx)(
                    p.Anchor,
                    {
                        href: o().sanitizeUrl(e.target),
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
                    N,
                    {
                        level: t.level,
                        className: r()(
                            C["heading-md/bold"],
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
                (0, l.jsx)(N, { level: e.level, className: C["heading-md/bold"], children: t(e.content, s) }, s.key),
        },
        image: {
            react(e, t, a) {
                let n = s(274516)(`./${e.target}`);
                return (0, l.jsx)("img", { alt: e.alt, src: n }, a.key);
            },
        },
        blockQuote: { react: _?.blockQuote.react },
        list: (e) => ({
            react(t, s, a) {
                let n = t.ordered ? "ol" : "ul",
                    u = t.items.map((t, n) =>
                        (0, l.jsx)("li", { className: r()(C["text-md/normal"], e.listItem), children: s(t, a) }, n),
                    );
                return (0, l.jsx)(n, { className: e.list, start: t.start, children: u }, a.key);
            },
        }),
        paragraph: (e) => ({
            react: (t, s, a) =>
                (0, l.jsx)("p", { className: r()(C["text-md/normal"], e.paragraph), children: s(t.content, a) }, a.key),
        }),
    };
