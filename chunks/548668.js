let n;
a.d(t, { $: () => O });
var r,
    s = a(54381),
    l = a(473749),
    i = a(120356),
    o = a.n(i),
    c = a(622535),
    d = a(213919),
    u = a(982905),
    N = a(794010),
    m = a(66037),
    f = a(231338),
    p = a(436620),
    h = a(330711),
    I = a(997999);
function b(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = a),
        e
    );
}
let k = "Footer Navigation",
    g = {
        BLURPLE: "Blurple",
        PRIMARY: "Primary",
    },
    A = (e) => {
        let { colorVariant: t, animate: a } = e;
        return (0, s.jsx)("svg", {
            className: (0, u.l)(I, "footerBackground", t),
            preserveAspectRatio: "none",
            width: "1920",
            height: "100%",
            viewBox: "0 0 1920 330",
            version: "1.1",
            children: (0, s.jsx)("path", {
                className: (0, u.l)(I, "footerBackground", a ? "Play" : "Paused"),
                fill: "#1a1c1e",
                fillOpacity: "0.3",
                d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z",
            }),
        });
    };
class O extends (r = l.PureComponent) {
    componentDidMount() {
        this.setState({
            token: (0, d.getToken)(),
            isAppCompatible: p.KO,
        });
    }
    renderAppButton(e) {
        if ("STATIC_RENDERER" === this.props.platform) return null;
        let {
                downloadLink: t,
                isMobile: a,
                mobileDownloadText: r,
                platform: l,
                variant: i,
                authRedirectTo: o,
            } = this.props,
            { isAppCompatible: c } = this.state;
        if (a)
            return (0, s.jsx)(n, {
                eventName: "Download App",
                data: {
                    Platform: l,
                    PTB: !1,
                    Released: !0,
                    "Referring Location": "Footer",
                },
                alt: "Download Discord",
                target: "_blank",
                className: (0, u.l)(I, "button", i),
                href: t,
                children: r,
            });
        if (!c)
            return (0, s.jsx)(n, {
                eventName: "Download App",
                data: {
                    Platform: l,
                    PTB: !1,
                    Released: !0,
                    "Referring Location": "Footer",
                },
                alt: "Download Discord",
                className: (0, u.l)(I, "button", i),
                href: f.am.DOWNLOAD,
                children: h.Z.Messages.NAVIGATION_DOWNLOAD,
            });
        let d = null != o ? f.$w.REGISTER_WITH_REDIRECT(o) : f.$w.REGISTER,
            N = h.Z.Messages.COMMON_SIGN_UP_NOW;
        return (
            e && ((d = f.$w.ME), (N = h.Z.Messages.COMMON_OPEN_DISCORD)),
            (0, s.jsx)(n, {
                eventName: k,
                className: (0, u.l)(I, "button", this.props.variant),
                data: {
                    linkClicked: e ? "open" : "login",
                    googleAnalytics: !0,
                },
                href: d,
                children: N,
            })
        );
    }
    render() {
        let { variant: e, style: t, className: r, avoidRouter: l, showWave: i } = this.props,
            { animateBackground: d, token: N } = this.state,
            p = [
                {
                    title: h.Z.Messages.NAVIGATION_PRODUCT,
                    routes: [
                        {
                            link: f.am.DOWNLOAD,
                            title: h.Z.Messages.NAVIGATION_DOWNLOAD,
                            tracking: "download",
                        },
                        {
                            link: f.am.BRANDING,
                            title: h.Z.Messages.NAVIGATION_BRANDING,
                            tracking: "branding",
                        },
                        {
                            link: f.am.NITRO,
                            title: h.Z.Messages.NAVIGATION_NITRO,
                            tracking: "nitro",
                            external: !0,
                        },
                    ],
                },
                {
                    title: h.Z.Messages.NAVIGATION_DEVELOPERS,
                    routes: [
                        {
                            link: f.am.RICH_PRESENCE,
                            title: h.Z.Messages.NAVIGATION_RICH_PRESENCE,
                            tracking: "rich_presence",
                        },
                        {
                            link: f.am.VERIFICATION,
                            title: h.Z.Messages.NAVIGATION_VERIFICATION,
                            tracking: "verification",
                            external: !0,
                        },
                        {
                            link: f.yX.DEV_PORTAL_APPLICATIONS,
                            title: h.Z.Messages.NAVIGATION_APPLICATIONS,
                            tracking: "developers",
                            external: !0,
                        },
                        {
                            link: f.yX.DEV_PORTAL_DOCUMENTATION,
                            title: h.Z.Messages.NAVIGATION_DOCUMENTATION,
                            tracking: "documentation",
                            external: !0,
                        },
                    ],
                },
                {
                    title: h.Z.Messages.NAVIGATION_RESOURCES,
                    routes: [
                        {
                            link: f.yX.HELP_AND_SUPPORT,
                            title: h.Z.Messages.NAVIGATION_HELP_AND_SUPPORT,
                            tracking: "helpandsupport",
                            external: !0,
                        },
                        {
                            link: f.am.GUIDELINES,
                            title: h.Z.Messages.NAVIGATION_GUIDELINES,
                            tracking: "guidelines",
                            external: !0,
                        },
                        {
                            link: f.yX.FEEDBACK,
                            title: h.Z.Messages.NAVIGATION_FEEDBACK,
                            tracking: "feedback",
                            external: !0,
                        },
                        {
                            link: f.am.TERMS,
                            title: h.Z.Messages.NAVIGATION_TERMS,
                            tracking: "terms",
                            external: !0,
                        },
                        {
                            link: f.am.PRIVACY,
                            title: h.Z.Messages.NAVIGATION_PRIVACY,
                            tracking: "privacy",
                            external: !0,
                        },
                        {
                            link: f.am.SECURITY,
                            title: h.Z.Messages.NAVIGATION_SECURITY,
                            tracking: "security",
                        },
                        {
                            link: f.yX.STATUS,
                            title: h.Z.Messages.NAVIGATION_STATUS,
                            tracking: "status",
                            external: !0,
                        },
                        {
                            link: f.am.SAFETY_LANDING,
                            title: h.Z.Messages.NAVIGATION_SAFETY_CENTER,
                            tracking: "safetycenter",
                            external: !0,
                        },
                    ],
                },
                {
                    title: h.Z.Messages.NAVIGATION_COMPANY,
                    routes: [
                        {
                            link: f.am.COMPANY,
                            title: h.Z.Messages.NAVIGATION_ABOUT,
                            tracking: "about",
                        },
                        {
                            link: f.am.BLOG,
                            title: h.Z.Messages.NAVIGATION_BLOG,
                            tracking: "blog",
                            external: !0,
                        },
                        {
                            link: f.am.JOBS,
                            title: h.Z.Messages.NAVIGATION_JOBS,
                            tracking: "join",
                            external: !0,
                        },
                    ],
                },
                {
                    title: h.Z.Messages.NAVIGATION_MORE,
                    routes: [
                        {
                            link: f.am.PARTNERS,
                            title: h.Z.Messages.NAVIGATION_PARTNERS,
                            tracking: "partners",
                            external: !0,
                        },
                        {
                            link: f.am.HYPESQUAD,
                            title: h.Z.Messages.NAVIGATION_HYPESQUAD,
                            tracking: "hypesquad",
                            external: !0,
                        },
                        {
                            link: f.yX.PRESS_INQUIRIES,
                            title: h.Z.Messages.NAVIGATION_PRESS_INQUIRIES,
                            tracking: "pressinquiries",
                            external: !0,
                        },
                        {
                            link: f.am.OPEN_SOURCE,
                            title: h.Z.Messages.NAVIGATION_OPEN_SOURCE,
                            tracking: "open_source",
                        },
                    ],
                },
            ].map((e) => {
                let t = e.routes.map((e, t) =>
                    e.external
                        ? (0, s.jsx)(
                              n,
                              {
                                  className: I.route,
                                  eventName: k,
                                  data: { linkClicked: e.tracking },
                                  href: e.link,
                                  children: e.title,
                              },
                              e.link || t,
                          )
                        : (0, s.jsx)(
                              m.Z,
                              {
                                  avoidRouter: l,
                                  to: e.link,
                                  from: "footer_navigation",
                                  className: I.route,
                                  children: (0, s.jsx)(n, {
                                      tag: "span",
                                      eventName: k,
                                      data: { linkClicked: e.tracking },
                                      children: e.title,
                                  }),
                              },
                              e.link,
                          ),
                );
                return (0, s.jsxs)(
                    "div",
                    {
                        className: I.navigationSection,
                        children: [
                            (0, s.jsx)("h3", {
                                className: I.navigationHeader,
                                children: e.title,
                            }),
                            t,
                        ],
                    },
                    e.title,
                );
            });
        return (0, s.jsx)(c.$, {
            innerRef: this.ref,
            onChange: this.handleVisibility,
            children: (0, s.jsxs)("footer", {
                ref: this.ref,
                className: o()((0, u.l)(I, "footer", e), r),
                style: t,
                children: [
                    i
                        ? (0, s.jsx)(A, {
                              colorVariant: e,
                              animate: d,
                          })
                        : null,
                    (0, s.jsxs)("div", {
                        className: I.footerContent,
                        children: [
                            (0, s.jsxs)("div", {
                                className: I.navigation,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: I.logoWrap,
                                        children: (0, s.jsx)(n, {
                                            className: I.logo,
                                            href: f.am.INDEX,
                                            eventName: k,
                                            data: { linkClicked: "logo" },
                                            children: (0, s.jsx)("img", {
                                                alt: h.Z.Messages.NAVIGATION_HOME,
                                                src: a(131529),
                                            }),
                                        }),
                                    }),
                                    p,
                                ],
                            }),
                            (0, s.jsx)("div", { className: I.separator }),
                            (0, s.jsxs)("div", {
                                className: I.joinDiscord,
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: I.stats,
                                        children: [
                                            (0, s.jsx)("h2", {
                                                className: I.readyToJoin,
                                                children: h.Z.Messages.FOOTER_READY_TO_TRY_DISCORD,
                                            }),
                                            (0, s.jsx)("h3", {
                                                className: I.joinOtherPlayers,
                                                children: h.Z.Messages.FOOTER_JOIN_OVER_PLAYERS_TODAY.format({
                                                    num: f.vS,
                                                }),
                                            }),
                                        ],
                                    }),
                                    this.renderAppButton(N),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    constructor(e) {
        super(e),
            b(this, "state", {
                animateBackground: !1,
                isMobile: null,
                token: null,
                isAppCompatible: !0,
            }),
            b(this, "ref", l.createRef()),
            b(this, "handleVisibility", (e) => {
                this.setState({ animateBackground: e });
            }),
            null != e.locale && h.Z.setLocale(e.locale),
            (n = (t) =>
                (0, s.jsx)(
                    N.Z,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    b(e, t, a[t]);
                                });
                        }
                        return e;
                    })(
                        {
                            track: e.track,
                            trackOutboundLink: e.trackOutboundLink,
                        },
                        t,
                    ),
                ));
    }
}
b(O, "Variants", g),
    b(O, "defaultProps", {
        variant: g.PRIMARY,
        showWave: !0,
    });
