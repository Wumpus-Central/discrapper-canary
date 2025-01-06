let n;
a.d(t, {
    $: function () {
        return b;
    }
});
var s,
    i = a(200651),
    r = a(192379),
    l = a(557533),
    o = a.n(l),
    c = a(622535),
    d = a(213919),
    u = a(982905),
    N = a(794010),
    h = a(66037),
    m = a(231338),
    p = a(436620),
    I = a(330711),
    _ = a(994017);
function k(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = a),
        e
    );
}
let A = 'Footer Navigation',
    g = {
        BLURPLE: 'Blurple',
        PRIMARY: 'Primary'
    },
    f = () => [
        {
            title: I.Z.Messages.NAVIGATION_PRODUCT,
            routes: [
                {
                    link: m.am.DOWNLOAD,
                    title: I.Z.Messages.NAVIGATION_DOWNLOAD,
                    tracking: 'download'
                },
                {
                    link: m.am.BRANDING,
                    title: I.Z.Messages.NAVIGATION_BRANDING,
                    tracking: 'branding'
                },
                {
                    link: m.am.NITRO,
                    title: I.Z.Messages.NAVIGATION_NITRO,
                    tracking: 'nitro',
                    external: !0
                }
            ]
        },
        {
            title: I.Z.Messages.NAVIGATION_DEVELOPERS,
            routes: [
                {
                    link: m.am.RICH_PRESENCE,
                    title: I.Z.Messages.NAVIGATION_RICH_PRESENCE,
                    tracking: 'rich_presence'
                },
                {
                    link: m.am.VERIFICATION,
                    title: I.Z.Messages.NAVIGATION_VERIFICATION,
                    tracking: 'verification',
                    external: !0
                },
                {
                    link: m.yX.DEV_PORTAL_APPLICATIONS,
                    title: I.Z.Messages.NAVIGATION_APPLICATIONS,
                    tracking: 'developers',
                    external: !0
                },
                {
                    link: m.yX.DEV_PORTAL_DOCUMENTATION,
                    title: I.Z.Messages.NAVIGATION_DOCUMENTATION,
                    tracking: 'documentation',
                    external: !0
                }
            ]
        },
        {
            title: I.Z.Messages.NAVIGATION_RESOURCES,
            routes: [
                {
                    link: m.yX.HELP_AND_SUPPORT,
                    title: I.Z.Messages.NAVIGATION_HELP_AND_SUPPORT,
                    tracking: 'helpandsupport',
                    external: !0
                },
                {
                    link: m.am.GUIDELINES,
                    title: I.Z.Messages.NAVIGATION_GUIDELINES,
                    tracking: 'guidelines',
                    external: !0
                },
                {
                    link: m.yX.FEEDBACK,
                    title: I.Z.Messages.NAVIGATION_FEEDBACK,
                    tracking: 'feedback',
                    external: !0
                },
                {
                    link: m.am.TERMS,
                    title: I.Z.Messages.NAVIGATION_TERMS,
                    tracking: 'terms',
                    external: !0
                },
                {
                    link: m.am.PRIVACY,
                    title: I.Z.Messages.NAVIGATION_PRIVACY,
                    tracking: 'privacy',
                    external: !0
                },
                {
                    link: m.am.SECURITY,
                    title: I.Z.Messages.NAVIGATION_SECURITY,
                    tracking: 'security'
                },
                {
                    link: m.yX.STATUS,
                    title: I.Z.Messages.NAVIGATION_STATUS,
                    tracking: 'status',
                    external: !0
                },
                {
                    link: m.am.SAFETY_LANDING,
                    title: I.Z.Messages.NAVIGATION_SAFETY_CENTER,
                    tracking: 'safetycenter',
                    external: !0
                }
            ]
        },
        {
            title: I.Z.Messages.NAVIGATION_COMPANY,
            routes: [
                {
                    link: m.am.COMPANY,
                    title: I.Z.Messages.NAVIGATION_ABOUT,
                    tracking: 'about'
                },
                {
                    link: m.am.BLOG,
                    title: I.Z.Messages.NAVIGATION_BLOG,
                    tracking: 'blog',
                    external: !0
                },
                {
                    link: m.am.JOBS,
                    title: I.Z.Messages.NAVIGATION_JOBS,
                    tracking: 'join',
                    external: !0
                }
            ]
        },
        {
            title: I.Z.Messages.NAVIGATION_MORE,
            routes: [
                {
                    link: m.am.PARTNERS,
                    title: I.Z.Messages.NAVIGATION_PARTNERS,
                    tracking: 'partners',
                    external: !0
                },
                {
                    link: m.am.HYPESQUAD,
                    title: I.Z.Messages.NAVIGATION_HYPESQUAD,
                    tracking: 'hypesquad',
                    external: !0
                },
                {
                    link: m.yX.PRESS_INQUIRIES,
                    title: I.Z.Messages.NAVIGATION_PRESS_INQUIRIES,
                    tracking: 'pressinquiries',
                    external: !0
                },
                {
                    link: m.am.OPEN_SOURCE,
                    title: I.Z.Messages.NAVIGATION_OPEN_SOURCE,
                    tracking: 'open_source'
                }
            ]
        }
    ],
    O = (e) => {
        let { colorVariant: t, animate: a } = e;
        return (0, i.jsx)('svg', {
            className: (0, u.l)(_, 'footerBackground', t),
            preserveAspectRatio: 'none',
            width: '1920',
            height: '100%',
            viewBox: '0 0 1920 330',
            version: '1.1',
            children: (0, i.jsx)('path', {
                className: (0, u.l)(_, 'footerBackground', a ? 'Play' : 'Paused'),
                fill: '#1a1c1e',
                fillOpacity: '0.3',
                d: 'M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z'
            })
        });
    };
class b extends (s = r.PureComponent) {
    componentDidMount() {
        this.setState({
            token: (0, d.getToken)(),
            isAppCompatible: p.KO
        });
    }
    renderAppButton(e) {
        if ('STATIC_RENDERER' === this.props.platform) return null;
        let { downloadLink: t, isMobile: a, mobileDownloadText: s, platform: r, variant: l, authRedirectTo: o } = this.props,
            { isAppCompatible: c } = this.state;
        if (a)
            return (0, i.jsx)(n, {
                eventName: 'Download App',
                data: {
                    Platform: r,
                    PTB: !1,
                    Released: !0,
                    'Referring Location': 'Footer'
                },
                alt: 'Download Discord',
                target: '_blank',
                className: (0, u.l)(_, 'button', l),
                href: t,
                children: s
            });
        if (!c)
            return (0, i.jsx)(n, {
                eventName: 'Download App',
                data: {
                    Platform: r,
                    PTB: !1,
                    Released: !0,
                    'Referring Location': 'Footer'
                },
                alt: 'Download Discord',
                className: (0, u.l)(_, 'button', l),
                href: m.am.DOWNLOAD,
                children: I.Z.Messages.NAVIGATION_DOWNLOAD
            });
        let d = null != o ? m.$w.REGISTER_WITH_REDIRECT(o) : m.$w.REGISTER,
            N = I.Z.Messages.COMMON_SIGN_UP_NOW;
        return (
            e && ((d = m.$w.ME), (N = I.Z.Messages.COMMON_OPEN_DISCORD)),
            (0, i.jsx)(n, {
                eventName: A,
                className: (0, u.l)(_, 'button', this.props.variant),
                data: {
                    linkClicked: e ? 'open' : 'login',
                    googleAnalytics: !0
                },
                href: d,
                children: N
            })
        );
    }
    render() {
        let { variant: e, style: t, className: s, avoidRouter: r, showWave: l } = this.props,
            { animateBackground: d, token: N } = this.state,
            p = f().map((e) => {
                let t = e.routes.map((e, t) =>
                    e.external
                        ? (0, i.jsx)(
                              n,
                              {
                                  className: _.route,
                                  eventName: A,
                                  data: { linkClicked: e.tracking },
                                  href: e.link,
                                  children: e.title
                              },
                              e.link || t
                          )
                        : (0, i.jsx)(
                              h.Z,
                              {
                                  avoidRouter: r,
                                  to: e.link,
                                  from: 'footer_navigation',
                                  className: _.route,
                                  children: (0, i.jsx)(n, {
                                      tag: 'span',
                                      eventName: A,
                                      data: { linkClicked: e.tracking },
                                      children: e.title
                                  })
                              },
                              e.link
                          )
                );
                return (0, i.jsxs)(
                    'div',
                    {
                        className: _.navigationSection,
                        children: [
                            (0, i.jsx)('h3', {
                                className: _.navigationHeader,
                                children: e.title
                            }),
                            t
                        ]
                    },
                    e.title
                );
            });
        return (0, i.jsx)(c.$, {
            onChange: this.handleVisibility,
            children: (0, i.jsxs)('footer', {
                className: o()((0, u.l)(_, 'footer', e), s),
                style: t,
                children: [
                    l
                        ? (0, i.jsx)(O, {
                              colorVariant: e,
                              animate: d
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: _.footerContent,
                        children: [
                            (0, i.jsxs)('div', {
                                className: _.navigation,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: _.logoWrap,
                                        children: (0, i.jsx)(n, {
                                            className: _.logo,
                                            href: m.am.INDEX,
                                            eventName: A,
                                            data: { linkClicked: 'logo' },
                                            children: (0, i.jsx)('img', {
                                                alt: I.Z.Messages.NAVIGATION_HOME,
                                                src: a(131529)
                                            })
                                        })
                                    }),
                                    p
                                ]
                            }),
                            (0, i.jsx)('div', { className: _.separator }),
                            (0, i.jsxs)('div', {
                                className: _.joinDiscord,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: _.stats,
                                        children: [
                                            (0, i.jsx)('h2', {
                                                className: _.readyToJoin,
                                                children: I.Z.Messages.FOOTER_READY_TO_TRY_DISCORD
                                            }),
                                            (0, i.jsx)('h3', {
                                                className: _.joinOtherPlayers,
                                                children: I.Z.Messages.FOOTER_JOIN_OVER_PLAYERS_TODAY.format({ num: m.vS })
                                            })
                                        ]
                                    }),
                                    this.renderAppButton(N)
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(e) {
        super(e),
            k(this, 'state', {
                animateBackground: !1,
                isMobile: null,
                token: null,
                isAppCompatible: !0
            }),
            k(this, 'handleVisibility', (e) => {
                this.setState({ animateBackground: e });
            }),
            null != e.locale && I.Z.setLocale(e.locale),
            (n = (t) =>
                (0, i.jsx)(N.Z, {
                    track: e.track,
                    trackOutboundLink: e.trackOutboundLink,
                    ...t
                }));
    }
}
k(b, 'Variants', g),
    k(b, 'defaultProps', {
        variant: g.PRIMARY,
        showWave: !0
    });
