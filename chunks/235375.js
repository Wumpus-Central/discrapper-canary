n.r(t),
    n.d(t, {
        baseRules: () => T,
        customRules: () => b
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(477660),
    l = n.n(o),
    u = n(481060),
    c = n(37234),
    d = n(230711),
    f = n(454585),
    _ = n(703656),
    p = n(626135),
    h = n(981631),
    m = n(596401);
let g = l().defaultRules.link,
    E = { section: h.jXE.SETTINGS_CHANGELOG };
function v() {
    p.default.track(h.rMx.PREMIUM_PROMOTION_OPENED, { location: E });
}
function y(e, t) {
    return null == t ? [] : t.split(' ').map((t) => e[t]);
}
let I = (e) => {
        let { level: t, children: n, className: i = null, styleSheet: a = {} } = e,
            o = (0, u.xSt)(),
            l = parseInt(t, 10),
            c = o + (isNaN(l) ? 1 : l) - 1;
        return r.createElement('h'.concat(c), { className: s()(...y(a, i)) }, n);
    },
    T = null != f.Z ? f.Z.defaultRules : null,
    b = {
        link: {
            parse(e, t, n) {
                let i;
                let r = e[2],
                    a = r.startsWith('https://discordapp.com/nitro') || r.startsWith('https://discord.com/nitro'),
                    s = r.startsWith('https://discordapp.com/hypesquad') || r.startsWith('https://discord.com/hypesquad'),
                    o = r.startsWith('/shop/fullscreen?source=1') || r.startsWith('/activities');
                return (
                    (i =
                        a || s
                            ? (e) => {
                                  v(), a ? d.Z.open(h.oAB.PREMIUM) : s && d.Z.open(h.oAB.HYPESQUAD_ONLINE), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, { cta_type: 'nitro' }), (0, u.Mr3)(m.Xd), e.preventDefault();
                              }
                            : o
                              ? (e) => {
                                    (0, _.uL)(r), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, { ...p.default.getCampaignParams(r) }), (0, c.Ou)(), (0, u.Mr3)(m.Xd), e.preventDefault();
                                }
                              : () => {
                                    n && 'function' == typeof n.onLinkClick && n.onLinkClick(r),
                                        n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
                                            target: r,
                                            cta_type: 'inline_link',
                                            ...p.default.getCampaignParams(r)
                                        });
                                }),
                    {
                        ...g.parse(e, t, n),
                        callToAction: i
                    }
                );
            },
            react: (e, t, n) =>
                (0, i.jsx)(
                    u.eee,
                    {
                        href: l().sanitizeUrl(e.target),
                        title: e.title,
                        onClick: e.callToAction,
                        target: '_blank',
                        className: e.callToAction ? 'cta' : void 0,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        lheading: (e) => ({
            react: (t, n, r) =>
                (0, i.jsx)(
                    I,
                    {
                        level: t.level,
                        className: t.className,
                        styleSheet: e,
                        children: n(t.content, r)
                    },
                    r.key
                )
        }),
        heading: {
            react: (e, t, n) =>
                (0, i.jsx)(
                    I,
                    {
                        level: e.level,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        image: {
            react(e, t, r) {
                let a = n(595173)('./'.concat(e.target));
                return (0, i.jsx)(
                    'img',
                    {
                        alt: e.alt,
                        src: a
                    },
                    r.key
                );
            }
        },
        blockQuote: { react: null == T ? void 0 : T.blockQuote.react },
        paragraph: { react: (e, t, n) => (0, i.jsx)('p', { children: t(e.content, n) }, n.key) }
    };
