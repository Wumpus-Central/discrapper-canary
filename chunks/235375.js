n.r(t),
    n.d(t, {
        baseRules: () => k,
        customRules: () => C
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(477660),
    l = n.n(s),
    d = n(481060),
    c = n(37234),
    u = n(230711),
    _ = n(454585),
    m = n(703656),
    p = n(626135),
    h = n(981631),
    g = n(596401);
let b = l().defaultRules.link,
    f = { section: h.jXE.SETTINGS_CHANGELOG },
    x = (e) => {
        let { level: t, children: n, className: r = null, styleSheet: a = {} } = e,
            s = (0, d.xSt)(),
            l = parseInt(t, 10),
            c = isNaN(l) ? 1 : l;
        return i.createElement('h'.concat(s + c - 1), { className: o()(...(null == r ? [] : r.split(' ').map((e) => a[e]))) }, n);
    },
    k = null != _.Z ? _.Z.defaultRules : null,
    C = {
        link: {
            parse(e, t, n) {
                let r;
                let i = e[2],
                    a = i.startsWith('https://discordapp.com/nitro') || i.startsWith('https://discord.com/nitro'),
                    o = i.startsWith('https://discordapp.com/hypesquad') || i.startsWith('https://discord.com/hypesquad'),
                    s = i.startsWith('/shop/fullscreen?source=1') || i.startsWith('/activities');
                return (
                    (r =
                        a || o
                            ? (e) => {
                                  p.default.track(h.rMx.PREMIUM_PROMOTION_OPENED, { location: f }), a ? u.Z.open(h.oAB.PREMIUM) : o && u.Z.open(h.oAB.HYPESQUAD_ONLINE), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, { cta_type: 'nitro' }), (0, d.Mr3)(g.Xd), e.preventDefault();
                              }
                            : s
                              ? (e) => {
                                    (0, m.uL)(i), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, { ...p.default.getCampaignParams(i) }), (0, c.Ou)(), (0, d.Mr3)(g.Xd), e.preventDefault();
                                }
                              : () => {
                                    n && 'function' == typeof n.onLinkClick && n.onLinkClick(i),
                                        n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
                                            target: i,
                                            cta_type: 'inline_link',
                                            ...p.default.getCampaignParams(i)
                                        });
                                }),
                    {
                        ...b.parse(e, t, n),
                        callToAction: r
                    }
                );
            },
            react: (e, t, n) =>
                (0, r.jsx)(
                    d.eee,
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
            react: (t, n, i) =>
                (0, r.jsx)(
                    x,
                    {
                        level: t.level,
                        className: t.className,
                        styleSheet: e,
                        children: n(t.content, i)
                    },
                    i.key
                )
        }),
        heading: {
            react: (e, t, n) =>
                (0, r.jsx)(
                    x,
                    {
                        level: e.level,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        image: {
            react(e, t, i) {
                let a = n(595173)('./'.concat(e.target));
                return (0, r.jsx)(
                    'img',
                    {
                        alt: e.alt,
                        src: a
                    },
                    i.key
                );
            }
        },
        blockQuote: { react: null == k ? void 0 : k.blockQuote.react },
        paragraph: { react: (e, t, n) => (0, r.jsx)('p', { children: t(e.content, n) }, n.key) }
    };
