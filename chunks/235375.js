r.r(n),
    r.d(n, {
        baseRules: function () {
            return S;
        },
        customRules: function () {
            return A;
        }
    });
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(477660),
    c = r.n(u),
    d = r(481060),
    f = r(37234),
    p = r(230711),
    h = r(454585),
    _ = r(703656),
    m = r(626135),
    g = r(981631),
    E = r(596401);
let v = c().defaultRules.link,
    y = { section: g.jXE.SETTINGS_CHANGELOG };
function b() {
    m.default.track(g.rMx.PREMIUM_PROMOTION_OPENED, { location: y });
}
function I(e, n) {
    return null == n ? [] : n.split(' ').map((n) => e[n]);
}
let T = (e) => {
        let { level: n, children: r, className: i = null, styleSheet: a = {} } = e,
            s = (0, d.usePrivateHeadingLevel)(),
            u = parseInt(n, 10),
            c = s + (isNaN(u) ? 1 : u) - 1;
        return o.createElement('h'.concat(c), { className: l()(...I(a, i)) }, r);
    },
    S = null != h.Z ? h.Z.defaultRules : null,
    A = {
        link: {
            parse(e, n, r) {
                let i;
                let a = e[2],
                    o = a.startsWith('https://discordapp.com/nitro') || a.startsWith('https://discord.com/nitro'),
                    s = a.startsWith('https://discordapp.com/hypesquad') || a.startsWith('https://discord.com/hypesquad'),
                    l = a.startsWith('/shop/fullscreen?source=1') || a.startsWith('/activities');
                return (
                    (i =
                        o || s
                            ? (e) => {
                                  b(), o ? p.Z.open(g.oAB.PREMIUM) : s && p.Z.open(g.oAB.HYPESQUAD_ONLINE), r.changeLog.track(g.rMx.CHANGE_LOG_CTA_CLICKED, { cta_type: 'nitro' }), (0, d.closeModal)(E.Xd), e.preventDefault();
                              }
                            : l
                              ? (e) => {
                                    (0, _.uL)(a), r.changeLog.track(g.rMx.CHANGE_LOG_CTA_CLICKED, { ...m.default.getCampaignParams(a) }), (0, f.Ou)(), (0, d.closeModal)(E.Xd), e.preventDefault();
                                }
                              : () => {
                                    r && 'function' == typeof r.onLinkClick && r.onLinkClick(a),
                                        r.changeLog.track(g.rMx.CHANGE_LOG_CTA_CLICKED, {
                                            target: a,
                                            cta_type: 'inline_link',
                                            ...m.default.getCampaignParams(a)
                                        });
                                }),
                    {
                        ...v.parse(e, n, r),
                        callToAction: i
                    }
                );
            },
            react: (e, n, r) =>
                (0, a.jsx)(
                    d.Anchor,
                    {
                        href: c().sanitizeUrl(e.target),
                        title: e.title,
                        onClick: e.callToAction,
                        target: '_blank',
                        className: e.callToAction ? 'cta' : void 0,
                        children: n(e.content, r)
                    },
                    r.key
                )
        },
        lheading: (e) => ({
            react: (n, r, i) =>
                (0, a.jsx)(
                    T,
                    {
                        level: n.level,
                        className: n.className,
                        styleSheet: e,
                        children: r(n.content, i)
                    },
                    i.key
                )
        }),
        heading: {
            react: (e, n, r) =>
                (0, a.jsx)(
                    T,
                    {
                        level: e.level,
                        children: n(e.content, r)
                    },
                    r.key
                )
        },
        image: {
            react(e, n, i) {
                let o = r(595173)('./'.concat(e.target));
                return (0, a.jsx)(
                    'img',
                    {
                        alt: e.alt,
                        src: o
                    },
                    i.key
                );
            }
        },
        blockQuote: { react: null == S ? void 0 : S.blockQuote.react },
        paragraph: { react: (e, n, r) => (0, a.jsx)('p', { children: n(e.content, r) }, r.key) }
    };
