n.r(t),
    n.d(t, {
        baseRules: () => v,
        customRules: () => b
    }),
    n(47120);
var a = n(200651),
    o = n(192379),
    i = n(120356),
    r = n.n(i),
    s = n(477660),
    l = n.n(s),
    c = n(481060),
    u = n(37234),
    d = n(230711),
    p = n(454585),
    m = n(703656),
    g = n(626135),
    _ = n(981631),
    h = n(596401);
let f = l().defaultRules.link,
    C = { section: _.jXE.SETTINGS_CHANGELOG },
    x = (e) => {
        let { level: t, children: n, className: a = null, styleSheet: i = {} } = e,
            s = (0, c.xSt)(),
            l = parseInt(t, 10),
            u = isNaN(l) ? 1 : l;
        return o.createElement('h'.concat(s + u - 1), { className: r()(...(null == a ? [] : a.split(' ').map((e) => i[e]))) }, n);
    },
    v = null != p.Z ? p.Z.defaultRules : null,
    b = {
        link: {
            parse(e, t, n) {
                let a;
                let o = e[2],
                    i = o.startsWith('https://discordapp.com/nitro') || o.startsWith('https://discord.com/nitro'),
                    r = o.startsWith('https://discordapp.com/hypesquad') || o.startsWith('https://discord.com/hypesquad'),
                    s = o.startsWith('/shop/fullscreen?source=1') || o.startsWith('/activities');
                return (
                    (a =
                        i || r
                            ? (e) => {
                                  g.default.track(_.rMx.PREMIUM_PROMOTION_OPENED, { location: C }), i ? d.Z.open(_.oAB.PREMIUM) : r && d.Z.open(_.oAB.HYPESQUAD_ONLINE), n.changeLog.track(_.rMx.CHANGE_LOG_CTA_CLICKED, { cta_type: 'nitro' }), (0, c.Mr3)(h.Xd), e.preventDefault();
                              }
                            : s
                              ? (e) => {
                                    (0, m.uL)(o), n.changeLog.track(_.rMx.CHANGE_LOG_CTA_CLICKED, { ...g.default.getCampaignParams(o) }), (0, u.Ou)(), (0, c.Mr3)(h.Xd), e.preventDefault();
                                }
                              : () => {
                                    n && 'function' == typeof n.onLinkClick && n.onLinkClick(o),
                                        n.changeLog.track(_.rMx.CHANGE_LOG_CTA_CLICKED, {
                                            target: o,
                                            cta_type: 'inline_link',
                                            ...g.default.getCampaignParams(o)
                                        });
                                }),
                    {
                        ...f.parse(e, t, n),
                        callToAction: a
                    }
                );
            },
            react: (e, t, n) =>
                (0, a.jsx)(
                    c.eee,
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
            react: (t, n, o) =>
                (0, a.jsx)(
                    x,
                    {
                        level: t.level,
                        className: t.className,
                        styleSheet: e,
                        children: n(t.content, o)
                    },
                    o.key
                )
        }),
        heading: {
            react: (e, t, n) =>
                (0, a.jsx)(
                    x,
                    {
                        level: e.level,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        image: {
            react(e, t, o) {
                let i = n(595173)('./'.concat(e.target));
                return (0, a.jsx)(
                    'img',
                    {
                        alt: e.alt,
                        src: i
                    },
                    o.key
                );
            }
        },
        blockQuote: { react: null == v ? void 0 : v.blockQuote.react },
        paragraph: { react: (e, t, n) => (0, a.jsx)('p', { children: t(e.content, n) }, n.key) }
    };
