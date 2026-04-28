let l;
t.r(s), t.d(s, { default: () => eo });
var a = t(627968),
    i = t(64700),
    n = t(503698),
    r = t.n(n),
    o = t(230109),
    c = t(247775),
    d = t(23339);
function N(e, s) {
    for (var t = arguments.length, l = Array(t > 2 ? t - 2 : 0), a = 2; a < t; a++) l[a - 2] = arguments[a];
    let i = l.reduce((e, s) => e + (0, d.$G)(s), ""),
        n = e[`${s}${i}`];
    return null == n ? "" : n;
}
class A extends i.PureComponent {
    static defaultProps = { tag: "a", data: {} };
    handleClick = (e) => {
        let { eventName: s, data: t, href: l, onClick: a, trackOutboundLink: i, track: n } = this.props;
        if (
            (t.googleAnalytics &&
                i &&
                (null != l
                    ? i(l)
                    : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")),
            a && a(e),
            !s)
        )
            return !1;
        n(s, t);
    };
    render() {
        let { tag: e, children: s, eventName: t, data: l, track: i, trackOutboundLink: n, ...r } = this.props;
        return null == e ? null : (0, a.jsx)(e, { ...r, onClick: this.handleClick, children: s });
    }
}
var h = t(830845),
    u = t(393285),
    I = t(968271);
class k extends i.Component {
    handleOnClick = () => {
        let { to: e, avoidRouter: s, onClick: t, history: l } = this.props;
        if (null != t) t();
        else if (s) {
            let s = "string" == typeof e ? (0, h.yJ)(e, null, void 0, l.location) : e,
                t = l.createHref(s);
            window.location = t;
        }
    };
    render() {
        let { to: e, from: s, isNavLink: t, children: l, tabIndex: i = 0, role: n, className: r } = this.props;
        if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
        let o = "string" == typeof e ? e : e.pathname,
            c = "string" == typeof e ? "" : e.hash,
            d = "string" == typeof e ? "" : e.search;
        return t
            ? (0, a.jsx)(u.k2, {
                  className: r,
                  tabIndex: i,
                  onClick: this.handleOnClick,
                  to: { pathname: o, hash: c, search: d, state: { previousLinkLocation: s } },
                  role: n,
                  children: l,
              })
            : (0, a.jsx)(u.N_, {
                  className: r,
                  tabIndex: i,
                  onClick: this.handleOnClick,
                  to: { pathname: o, hash: c, search: d, state: { previousLinkLocation: s } },
                  role: n,
                  children: l,
              });
    }
}
let p = (0, I.y)(k);
var T = t(818348),
    m = t(396574),
    O = t(855522),
    g = t(109236);
let C = "Footer Navigation",
    x = { BLURPLE: "Blurple", PRIMARY: "Primary" },
    _ = (e) => {
        let { colorVariant: s, animate: t } = e;
        return (0, a.jsx)("svg", {
            className: N(g, "footerBackground", s),
            preserveAspectRatio: "none",
            width: "1920",
            height: "100%",
            viewBox: "0 0 1920 330",
            version: "1.1",
            children: (0, a.jsx)("path", {
                className: N(g, "footerBackground", t ? "Play" : "Paused"),
                fill: "#1a1c1e",
                fillOpacity: "0.3",
                d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z",
            }),
        });
    };
class E extends i.PureComponent {
    static Variants = x;
    static defaultProps = { variant: x.PRIMARY, showWave: !0 };
    state = { animateBackground: !1, isMobile: null, token: null, isAppCompatible: !0 };
    ref = i.createRef();
    constructor(e) {
        super(e),
            null != e.locale && O.A.setLocale(e.locale),
            (l = (s) => (0, a.jsx)(A, { track: e.track, trackOutboundLink: e.trackOutboundLink, ...s }));
    }
    componentDidMount() {
        this.setState({ token: (0, c.getToken)(), isAppCompatible: m.VP });
    }
    handleVisibility = (e) => {
        this.setState({ animateBackground: e });
    };
    renderAppButton(e) {
        if ("STATIC_RENDERER" === this.props.platform) return null;
        let {
                downloadLink: s,
                isMobile: t,
                mobileDownloadText: i,
                platform: n,
                variant: r,
                authRedirectTo: o,
            } = this.props,
            { isAppCompatible: c } = this.state;
        if (t)
            return (0, a.jsx)(l, {
                eventName: "Download App",
                data: { Platform: n, PTB: !1, Released: !0, "Referring Location": "Footer" },
                alt: "Download Discord",
                target: "_blank",
                className: N(g, "button", r),
                href: s,
                children: i,
            });
        if (!c)
            return (0, a.jsx)(l, {
                eventName: "Download App",
                data: { Platform: n, PTB: !1, Released: !0, "Referring Location": "Footer" },
                alt: "Download Discord",
                className: N(g, "button", r),
                href: T.Tk.DOWNLOAD,
                children: O.A.Messages.NAVIGATION_DOWNLOAD,
            });
        let d = null != o ? T.Sb.REGISTER_WITH_REDIRECT(o) : T.Sb.REGISTER,
            A = O.A.Messages.COMMON_SIGN_UP_NOW;
        return (
            e && ((d = T.Sb.ME), (A = O.A.Messages.COMMON_OPEN_DISCORD)),
            (0, a.jsx)(l, {
                eventName: C,
                className: N(g, "button", this.props.variant),
                data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
                href: d,
                children: A,
            })
        );
    }
    render() {
        let { variant: e, style: s, className: i, avoidRouter: n, showWave: c } = this.props,
            { animateBackground: d, token: A } = this.state,
            h = [
                {
                    title: O.A.Messages.NAVIGATION_PRODUCT,
                    routes: [
                        { link: T.Tk.DOWNLOAD, title: O.A.Messages.NAVIGATION_DOWNLOAD, tracking: "download" },
                        { link: T.Tk.BRANDING, title: O.A.Messages.NAVIGATION_BRANDING, tracking: "branding" },
                        { link: T.Tk.NITRO, title: O.A.Messages.NAVIGATION_NITRO, tracking: "nitro", external: !0 },
                    ],
                },
                {
                    title: O.A.Messages.NAVIGATION_DEVELOPERS,
                    routes: [
                        {
                            link: T.Tk.RICH_PRESENCE,
                            title: O.A.Messages.NAVIGATION_RICH_PRESENCE,
                            tracking: "rich_presence",
                        },
                        {
                            link: T.Tk.VERIFICATION,
                            title: O.A.Messages.NAVIGATION_VERIFICATION,
                            tracking: "verification",
                            external: !0,
                        },
                        {
                            link: T.qF.DEV_PORTAL_APPLICATIONS,
                            title: O.A.Messages.NAVIGATION_APPLICATIONS,
                            tracking: "developers",
                            external: !0,
                        },
                        {
                            link: T.qF.DEV_PORTAL_DOCUMENTATION,
                            title: O.A.Messages.NAVIGATION_DOCUMENTATION,
                            tracking: "documentation",
                            external: !0,
                        },
                    ],
                },
                {
                    title: O.A.Messages.NAVIGATION_RESOURCES,
                    routes: [
                        {
                            link: T.qF.HELP_AND_SUPPORT,
                            title: O.A.Messages.NAVIGATION_HELP_AND_SUPPORT,
                            tracking: "helpandsupport",
                            external: !0,
                        },
                        {
                            link: T.Tk.GUIDELINES,
                            title: O.A.Messages.NAVIGATION_GUIDELINES,
                            tracking: "guidelines",
                            external: !0,
                        },
                        {
                            link: T.qF.FEEDBACK,
                            title: O.A.Messages.NAVIGATION_FEEDBACK,
                            tracking: "feedback",
                            external: !0,
                        },
                        { link: T.Tk.TERMS, title: O.A.Messages.NAVIGATION_TERMS, tracking: "terms", external: !0 },
                        {
                            link: T.Tk.PRIVACY,
                            title: O.A.Messages.NAVIGATION_PRIVACY,
                            tracking: "privacy",
                            external: !0,
                        },
                        { link: T.Tk.SECURITY, title: O.A.Messages.NAVIGATION_SECURITY, tracking: "security" },
                        { link: T.qF.STATUS, title: O.A.Messages.NAVIGATION_STATUS, tracking: "status", external: !0 },
                        {
                            link: T.Tk.SAFETY_LANDING,
                            title: O.A.Messages.NAVIGATION_SAFETY_CENTER,
                            tracking: "safetycenter",
                            external: !0,
                        },
                    ],
                },
                {
                    title: O.A.Messages.NAVIGATION_COMPANY,
                    routes: [
                        { link: T.Tk.COMPANY, title: O.A.Messages.NAVIGATION_ABOUT, tracking: "about" },
                        { link: T.Tk.BLOG, title: O.A.Messages.NAVIGATION_BLOG, tracking: "blog", external: !0 },
                        { link: T.Tk.JOBS, title: O.A.Messages.NAVIGATION_JOBS, tracking: "join", external: !0 },
                    ],
                },
                {
                    title: O.A.Messages.NAVIGATION_MORE,
                    routes: [
                        {
                            link: T.Tk.PARTNERS,
                            title: O.A.Messages.NAVIGATION_PARTNERS,
                            tracking: "partners",
                            external: !0,
                        },
                        {
                            link: T.Tk.HYPESQUAD,
                            title: O.A.Messages.NAVIGATION_HYPESQUAD,
                            tracking: "hypesquad",
                            external: !0,
                        },
                        {
                            link: T.qF.PRESS_INQUIRIES,
                            title: O.A.Messages.NAVIGATION_PRESS_INQUIRIES,
                            tracking: "pressinquiries",
                            external: !0,
                        },
                        { link: T.Tk.OPEN_SOURCE, title: O.A.Messages.NAVIGATION_OPEN_SOURCE, tracking: "open_source" },
                    ],
                },
            ].map((e) => {
                let s = e.routes.map((e, s) =>
                    e.external
                        ? (0, a.jsx)(
                              l,
                              {
                                  className: g.route,
                                  eventName: C,
                                  data: { linkClicked: e.tracking },
                                  href: e.link,
                                  children: e.title,
                              },
                              e.link || s,
                          )
                        : (0, a.jsx)(
                              p,
                              {
                                  avoidRouter: n,
                                  to: e.link,
                                  from: "footer_navigation",
                                  className: g.route,
                                  children: (0, a.jsx)(l, {
                                      tag: "span",
                                      eventName: C,
                                      data: { linkClicked: e.tracking },
                                      children: e.title,
                                  }),
                              },
                              e.link,
                          ),
                );
                return (0, a.jsxs)(
                    "div",
                    {
                        className: g.navigationSection,
                        children: [(0, a.jsx)("h3", { className: g.navigationHeader, children: e.title }), s],
                    },
                    e.title,
                );
            });
        return (0, a.jsx)(o.L, {
            innerRef: this.ref,
            onChange: this.handleVisibility,
            children: (0, a.jsxs)("footer", {
                ref: this.ref,
                className: r()(N(g, "footer", e), i),
                style: s,
                children: [
                    c ? (0, a.jsx)(_, { colorVariant: e, animate: d }) : null,
                    (0, a.jsxs)("div", {
                        className: g.footerContent,
                        children: [
                            (0, a.jsxs)("div", {
                                className: g.navigation,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: g.logoWrap,
                                        children: (0, a.jsx)(l, {
                                            className: g.logo,
                                            href: T.Tk.INDEX,
                                            eventName: C,
                                            data: { linkClicked: "logo" },
                                            children: (0, a.jsx)("img", {
                                                alt: O.A.Messages.NAVIGATION_HOME,
                                                src: t(611411),
                                            }),
                                        }),
                                    }),
                                    h,
                                ],
                            }),
                            (0, a.jsx)("div", { className: g.separator }),
                            (0, a.jsxs)("div", {
                                className: g.joinDiscord,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: g.stats,
                                        children: [
                                            (0, a.jsx)("h2", {
                                                className: g.readyToJoin,
                                                children: O.A.Messages.FOOTER_READY_TO_TRY_DISCORD,
                                            }),
                                            (0, a.jsx)("h3", {
                                                className: g.joinOtherPlayers,
                                                children: O.A.Messages.FOOTER_JOIN_OVER_PLAYERS_TODAY.format({
                                                    num: T.sh,
                                                }),
                                            }),
                                        ],
                                    }),
                                    this.renderAppButton(A),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
}
t(321073);
var v = t(323125),
    R = t(946015),
    S = t(1947);
class M extends i.PureComponent {
    render() {
        return (0, a.jsxs)(R.s, {
            wrap: R.s.Wrap.NO_WRAP,
            children: [
                (0, a.jsx)(R.s.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, a.jsxs)("svg", {
                        className: S.wI,
                        viewBox: "0 0 33 36",
                        children: [
                            (0, a.jsx)("ellipse", { cx: "19.6", cy: "17.1", rx: "1.9", ry: "2" }),
                            (0, a.jsx)("ellipse", { cx: "12.8", cy: "17.1", rx: "1.9", ry: "2" }),
                            (0, a.jsx)("path", {
                                d: "M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4,23.5s-.7-.8-1.2-1.5a5.958,5.958,0,0,0,3.3-2.1A22.059,22.059,0,0,1,21.4,21a13.817,13.817,0,0,1-2.7.8,15.394,15.394,0,0,1-4.8,0,12.544,12.544,0,0,1-2.7-.8c-.4-.2-.9-.4-1.4-.6-.1,0-.1-.1-.2-.1H9.5A5.2,5.2,0,0,0,9,20a5.932,5.932,0,0,0,3.2,2.1c-.6.7-1.2,1.5-1.2,1.5-4.1-.1-5.6-2.7-5.6-2.7A23.4,23.4,0,0,1,8.1,10.4a8.948,8.948,0,0,1,5.2-1.9l.2.2A10.672,10.672,0,0,0,8.7,11s.4-.2,1.1-.5A13.33,13.33,0,0,1,14,9.4h.3a15.243,15.243,0,0,1,3.7,0,16.225,16.225,0,0,1,5.6,1.7A12.081,12.081,0,0,0,19,8.8l.3-.3a8.948,8.948,0,0,1,5.2,1.9,23.4,23.4,0,0,1,2.7,10.5A7.865,7.865,0,0,1,21.4,23.5Z",
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)(R.s.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, a.jsx)("svg", {
                        className: S.NW,
                        viewBox: "0 0 98 36",
                        children: (0, a.jsx)("path", {
                            d: "M12.8,7.8H6.7v6.8l4.1,3.6V11.6H13c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H6.7v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C19.2,9.4,16.1,7.8,12.8,7.8ZM45,18.6V13c0-2,3.7-2.5,4.8-.5l3.4-1.3a6.069,6.069,0,0,0-5.8-3.7c-3.3,0-6.5,1.9-6.5,5.5v5.6c0,3.7,3.2,5.5,6.5,5.5a6.611,6.611,0,0,0,5.9-3.6l-3.7-1.6C48.7,21.1,45,20.6,45,18.6ZM33.8,13.8c-1.3-.3-2.1-.7-2.2-1.5.1-1.9,3-1.9,4.7-.1l2.7-2a6.884,6.884,0,0,0-5.6-2.6c-3,0-5.9,1.7-5.9,4.8s2.4,4.7,5.1,5.1c1.3.2,2.8.7,2.8,1.6-.1,1.7-3.7,1.6-5.4-.3l-2.6,2.4A7.258,7.258,0,0,0,33,24.1c3,0,6.3-1.7,6.5-4.8C39.6,15.3,36.7,14.3,33.8,13.8ZM21.4,23.9h4.2V7.8H21.5V23.9ZM91.2,7.8H85.1v6.8l4.1,3.6V11.6h2.2c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H85.1v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C97.6,9.4,94.5,7.8,91.2,7.8ZM61.1,7.6c-3.4,0-6.8,1.8-6.8,5.5v5.5c0,3.7,3.4,5.5,6.8,5.5s6.8-1.8,6.8-5.5V13.1C67.9,9.4,64.5,7.6,61.1,7.6Zm2.7,11c0,1.2-1.3,1.8-2.6,1.8s-2.7-.6-2.7-1.8V13.1c0-1.2,1.3-1.8,2.6-1.8s2.7.6,2.7,1.8Zm19-5.5c-.1-3.8-2.7-5.3-6.1-5.3H70.1V23.9h4.2V18.8H75l3.8,5.1H84l-4.5-5.5C81.6,17.8,82.8,16.1,82.8,13.1Zm-6,2.2H74.4V11.6h2.4A1.853,1.853,0,1,1,76.8,15.3Z",
                        }),
                    }),
                }),
            ],
        });
    }
}
let L = {
    ASSET_SOCIAL_TWITTER: t(412126),
    ASSET_SOCIAL_FACEBOOK: t(681713),
    ASSET_SOCIAL_INSTAGRAM: t(368531),
    ICON_TRANSLATE: t(835691),
    ICON_ARROW_DOWN: t(616327),
    ASSET_LOGO_DISCORD_SVG: t(511749),
};
var j = t(773977);
class V extends i.PureComponent {
    state = { languages: O.A.getLanguages().filter((e) => e.enabled), current: O.A.getLocaleInfo(), isOpen: !1 };
    componentDidMount() {
        this.callChangeLocale(O.A.getLocale());
    }
    setLocale = (e) => {
        null != O.A && (O.A.setLocale(e), this.callChangeLocale(e));
    };
    callChangeLocale = (e) => {
        let { onChange: s } = this.props;
        null != s && s(e);
    };
    open = () => {
        this.setState({ isOpen: !0 });
    };
    close = () => {
        this.setState({ isOpen: !1 });
    };
    toggle = () => {
        let { isOpen: e } = this.state;
        this.setState({ isOpen: !e });
    };
    render() {
        let { isOpen: e, languages: s, current: l } = this.state,
            { className: i } = this.props,
            n = null;
        return (
            null != s &&
                (n = s
                    .sort((e, s) => (e.code < s.code ? -1 : +(e.code > s.code)))
                    .map((e) => {
                        let s = (function (e) {
                                try {
                                    return t(579832)(`./${e}.png`);
                                } catch (e) {
                                    return null;
                                }
                            })(e.code),
                            i = () => this.setLocale(e.code);
                        return null == s
                            ? null
                            : (0, a.jsxs)(
                                  "li",
                                  {
                                      className: N(j, "locale", null != l && e.code === l.code ? "Current" : null),
                                      onClick: i,
                                      children: [
                                          (0, a.jsx)("img", { className: j.localeImage, src: s, alt: e.name }),
                                          e.name,
                                      ],
                                  },
                                  e.code,
                              );
                    })),
            (0, a.jsxs)("div", {
                className: r()(j.localePicker, i),
                onMouseEnter: this.open,
                onMouseLeave: this.close,
                onClick: this.toggle,
                children: [
                    (0, a.jsxs)(R.s, {
                        align: R.s.Align.CENTER,
                        className: N(j, "opener", e ? "Open" : null),
                        children: [
                            (0, a.jsx)("span", { className: j.line }),
                            (0, a.jsx)("img", { className: j.localeIcon, src: L.ICON_TRANSLATE, alt: "Choose Locale" }),
                            (0, a.jsx)("img", { className: j.arrowIcon, src: L.ICON_ARROW_DOWN, alt: "Open Locale" }),
                        ],
                    }),
                    (0, a.jsx)("ul", { className: N(j, "localeList", e ? "Open" : "Closed"), children: n }),
                ],
            })
        );
    }
}
var f = t(877227),
    P = t(393163);
let G = T.sE.MAIN_NAVIGATION_MENU;
function b(e) {
    let { isOpen: s, dropdownLinks: t, TrackClick: l, avoidRouter: i, id: n, "aria-label": r } = e,
        o = (0, f.dI)({ history: (0, I.W6)() }),
        c = t.map((e, s) =>
            e.divider
                ? (0, a.jsx)("hr", { className: P.divider }, `divider-${s}`)
                : e.external
                  ? (0, a.jsx)(
                        "li",
                        {
                            className: P.moreListItemInactive,
                            children: (0, a.jsx)(l, {
                                className: P.moreListLink,
                                eventName: G,
                                data: { linkClicked: e.linkClicked },
                                href: e.route,
                                rel: "me",
                                children: (0, a.jsx)("span", { className: P.moreListLinkCopy, children: e.title }),
                            }),
                        },
                        e.route,
                    )
                  : (0, a.jsx)(
                        "li",
                        {
                            className: N(P, "moreListItem", o(e.route) ? "Active" : "Inactive"),
                            children: (0, a.jsx)(p, {
                                avoidRouter: i,
                                className: P.moreListLink,
                                to: e.route,
                                from: T.sE.MAIN_NAVIGATION_MENU,
                                role: "menuitem",
                                children: (0, a.jsx)(l, {
                                    tag: "span",
                                    className: P.moreListLinkCopy,
                                    eventName: G,
                                    data: { linkClicked: e.linkClicked },
                                    children: e.title,
                                }),
                            }),
                        },
                        e.route,
                    ),
        );
    return (0, a.jsx)("ul", {
        id: n,
        className: N(P, "moreList", s ? "Open" : "Closed"),
        "aria-label": r,
        children: c,
    });
}
var D = t(552524);
let U = T.sE.MAIN_NAVIGATION_MENU;
function y(e) {
    let { TrackClick: s, title: t, links: l, onClose: n, onOpen: r, isOpen: o = !1, isMobile: c, avoidRouter: d } = e,
        N = (0, f.dI)({ history: (0, I.W6)() }),
        A = i.useId(),
        h = () => n(),
        u = () => r(t),
        k = () => (o ? n() : r(t)),
        m =
            c && o
                ? (0, a.jsx)("ul", {
                      className: D.Er,
                      id: A,
                      children: l.map((e) =>
                          e.external
                              ? (0, a.jsx)(
                                    "li",
                                    {
                                        className: D.ni,
                                        children: (0, a.jsx)(s, {
                                            eventName: U,
                                            className: D.qz,
                                            data: { linkClicked: `mobile-${e.linkClicked}` },
                                            rel: "me",
                                            href: e.route,
                                            children: e.title,
                                        }),
                                    },
                                    e.route,
                                )
                              : (0, a.jsx)(
                                    "li",
                                    {
                                        className: N(e.route) ? D.wL : D.ni,
                                        children: (0, a.jsx)(p, {
                                            avoidRouter: d,
                                            to: e.route,
                                            from: T.sE.MAIN_NAVIGATION_MENU,
                                            children: (0, a.jsx)(s, {
                                                className: D.qz,
                                                tag: "span",
                                                eventName: U,
                                                data: { linkClicked: `mobile-${e.linkClicked}` },
                                                children: e.title,
                                            }),
                                        }),
                                    },
                                    e.route,
                                ),
                      ),
                  })
                : null;
    return c
        ? (0, a.jsxs)(
              "li",
              {
                  className: D.__invalid_subListHeading,
                  tabIndex: -1,
                  onClick: k,
                  onKeyDown: (e) => {
                      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), k());
                  },
                  children: [
                      (0, a.jsxs)(
                          "span",
                          {
                              className: D.DC,
                              "aria-label": `Open ${t} Nav`,
                              "aria-expanded": o,
                              "aria-controls": A,
                              "aria-haspopup": "true",
                              role: "menuitem",
                              tabIndex: 0,
                              children: [
                                  t,
                                  (0, a.jsx)("img", { src: L.ICON_ARROW_DOWN, className: D.fr, alt: "Open Nav" }),
                              ],
                          },
                          "more",
                      ),
                      m,
                  ],
              },
              `dropdown_${t}`,
          )
        : (0, a.jsxs)(
              "li",
              {
                  role: "none",
                  tabIndex: -1,
                  onFocus: u,
                  onBlur: h,
                  onMouseEnter: u,
                  onMouseLeave: h,
                  className: D.pX,
                  children: [
                      (0, a.jsxs)(
                          "span",
                          {
                              className: D.Bc,
                              role: "menuitem",
                              tabIndex: 0,
                              "aria-haspopup": "true",
                              "aria-expanded": o,
                              "aria-controls": A,
                              children: [
                                  t,
                                  (0, a.jsx)("img", { src: L.ICON_ARROW_DOWN, className: D.fr, alt: "Open Nav" }),
                              ],
                          },
                          "more",
                      ),
                      (0, a.jsx)(b, {
                          id: A,
                          avoidRouter: d,
                          TrackClick: s,
                          isOpen: o,
                          dropdownLinks: l,
                          "aria-label": t,
                      }),
                  ],
              },
              `dropdown_${t}`,
          );
}
let w = T.sE.MAIN_NAVIGATION_MENU;
class B extends i.PureComponent {
    static defaultProps = { isMobile: !1, isVisible: !0 };
    state = { sectionShown: null };
    closeSubNav = () => {
        let { sectionShown: e } = this.state;
        null !== e && this.setState({ sectionShown: null });
    };
    openSubNav = (e) => {
        let { sectionShown: s } = this.state;
        s !== e && this.setState({ sectionShown: e });
    };
    render() {
        let e,
            s = (0, f.dI)(this.context.router),
            { isMobile: t, isVisible: l, styles: i, TrackClick: n, avoidRouter: r } = this.props,
            { sectionShown: o } = this.state;
        return ((e = null != O.A ? O.A.getLocale().toLowerCase() : ""),
        [
            { route: T.Tk.DOWNLOAD, linkClicked: "download", title: O.A.Messages.NAVIGATION_DOWNLOAD },
            { route: T.Tk.NITRO, linkClicked: "nitro", title: O.A.Messages.NAVIGATION_NITRO, external: !0 },
            { route: T.Tk.JOBS, linkClicked: "jobs", title: O.A.Messages.NAVIGATION_JOBS, external: !0 },
            {
                title: O.A.Messages.NAVIGATION_DEVELOPERS,
                links: [
                    {
                        route: T.Tk.RICH_PRESENCE,
                        linkClicked: "rich_presence",
                        title: O.A.Messages.NAVIGATION_RICH_PRESENCE,
                    },
                    {
                        route: T.Tk.VERIFICATION,
                        linkClicked: "verification",
                        title: O.A.Messages.NAVIGATION_VERIFICATION,
                        external: !0,
                    },
                    {
                        route: T.qF.DEV_PORTAL,
                        linkClicked: "developers",
                        title: O.A.Messages.NAVIGATION_DEVELOPER_PORTAL,
                        external: !0,
                    },
                    {
                        route: T.qF.DEV_PORTAL_DOCUMENTATION,
                        linkClicked: "documentation",
                        title: O.A.Messages.NAVIGATION_DOCUMENTATION,
                        external: !0,
                    },
                ],
            },
            {
                title: O.A.Messages.NAVIGATION_COMMUNITY,
                links: [
                    { route: T.Tk.OPEN_SOURCE, linkClicked: "open_source", title: O.A.Messages.NAVIGATION_OPEN_SOURCE },
                    {
                        route: T.Tk.PARTNERS,
                        linkClicked: "partners",
                        title: O.A.Messages.NAVIGATION_PARTNERS,
                        external: !0,
                    },
                    {
                        route: T.Tk.HYPESQUAD,
                        linkClicked: "hypesquad",
                        title: O.A.Messages.NAVIGATION_HYPESQUAD,
                        external: !0,
                    },
                    {
                        route: T.Tk.GUIDELINES,
                        linkClicked: "guidelines",
                        title: O.A.Messages.NAVIGATION_GUIDELINES,
                        external: !0,
                    },
                ],
            },
            {
                title: O.A.Messages.NAVIGATION_SUPPORT,
                links: [
                    {
                        route: `//support.discord.com/hc/${e}`,
                        linkClicked: "helpandsupport",
                        title: O.A.Messages.NAVIGATION_HELP_AND_SUPPORT,
                        external: !0,
                    },
                    { route: T.qF.STATUS, linkClicked: "status", title: O.A.Messages.NAVIGATION_STATUS, external: !0 },
                    {
                        route: T.Tk.SAFETY_LANDING,
                        linkClicked: "safetycenter",
                        title: O.A.Messages.NAVIGATION_SAFETY_CENTER,
                        external: !0,
                    },
                ],
            },
        ]).map((e) =>
            null != e.links
                ? (0, a.jsx)(
                      y,
                      {
                          title: e.title,
                          links: e.links,
                          isOpen: o === e.title,
                          isMobile: t,
                          avoidRouter: r,
                          TrackClick: n,
                          onClose: this.closeSubNav,
                          onOpen: this.openSubNav,
                      },
                      e.title,
                  )
                : e.external && null != e.route
                  ? (0, a.jsx)(
                        "li",
                        {
                            className: i.listItemInactive,
                            role: "none",
                            children: (0, a.jsx)(n, {
                                className: i.mainNavLink,
                                eventName: w,
                                data: e.linkClicked ? { linkClicked: e.linkClicked } : {},
                                href: e.route,
                                rel: "me",
                                children: e.title,
                            }),
                        },
                        `external_link_${e.route}`,
                    )
                  : null != e.route
                    ? (0, a.jsx)(
                          "li",
                          {
                              className: s(e.route) ? i.listItemActive : i.listItemInactive,
                              role: "none",
                              children: (0, a.jsx)(p, {
                                  avoidRouter: r,
                                  to: e.route,
                                  from: T.sE.MAIN_NAVIGATION_MENU,
                                  tabIndex: l ? 0 : -1,
                                  role: "menuitem",
                                  children: (0, a.jsx)(n, {
                                      tag: "span",
                                      className: i.mainNavLink,
                                      eventName: w,
                                      data: { linkClicked: e.linkClicked },
                                      children: e.title,
                                  }),
                              }),
                          },
                          `link_${e.route}`,
                      )
                    : [],
        );
    }
}
var F = t(775684);
let H = T.sE.MAIN_NAVIGATION_MENU;
class W extends i.PureComponent {
    state = { isAppCompatible: !0 };
    componentDidMount() {
        this.setState({ isAppCompatible: m.VP });
    }
    getAppButton = () => {
        let { token: e, TrackClick: s, authRedirectTo: t } = this.props,
            { isAppCompatible: l } = this.state,
            i = (0, v.T2)(t),
            n = O.A.Messages.NAVIGATION_LOGIN;
        return (
            null != e && ((i = T.Sb.ME), (n = O.A.Messages.NAVIGATION_OPEN)),
            l
                ? (0, a.jsx)(
                      "li",
                      {
                          className: F.listItemInactive,
                          children: (0, a.jsx)(s, {
                              eventName: H,
                              className: F.appButton,
                              data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
                              href: i,
                              children: n,
                          }),
                      },
                      "app-button",
                  )
                : null
        );
    };
    renderSocialMediaNav = () => {
        var e;
        let s,
            { TrackClick: t } = this.props,
            l = [
                {
                    route: ((e = T.Pq.TWITTER), (s = O.A.getLocale().toLowerCase()) in e ? e[s] : e.default),
                    linkClicked: "twitter",
                    alt: "Discord's Twitter",
                    img: L.ASSET_SOCIAL_TWITTER,
                },
                {
                    route: T.w7.FACEBOOK_URL,
                    linkClicked: "facebook",
                    alt: "Discord's Facebook",
                    img: L.ASSET_SOCIAL_FACEBOOK,
                },
                {
                    route: T.w7.INSTAGRAM_URL,
                    linkClicked: "instagram",
                    alt: "Discord's Instagram",
                    img: L.ASSET_SOCIAL_INSTAGRAM,
                },
            ].map((e) =>
                (0, a.jsx)(
                    "li",
                    {
                        className: r()(F.listItemInactive, F.listItemSocialMedia),
                        children: (0, a.jsx)(t, {
                            eventName: H,
                            className: F.rightNavLink,
                            data: { linkClicked: e.linkClicked },
                            href: e.route,
                            rel: "me",
                            target: "_blank",
                            children: (0, a.jsx)("img", { src: e.img, alt: e.alt }),
                        }),
                    },
                    e.route,
                ),
            ),
            i = this.getAppButton();
        return null != i && l.push(i), l;
    };
    render() {
        let {
            className: e,
            mainContentId: s,
            skipToContentLabel: t,
            onChangeLocale: l,
            TrackClick: i,
            avoidRouter: n,
        } = this.props;
        return (0, a.jsxs)("header", {
            className: r()(F.header, e),
            children: [
                (0, a.jsxs)("nav", {
                    className: F.headerInner,
                    children: [
                        (0, a.jsxs)("div", {
                            className: F.headerLogo,
                            children: [
                                (0, a.jsx)(i, {
                                    tag: "div",
                                    eventName: H,
                                    data: { linkClicked: "logo" },
                                    children: (0, a.jsx)(p, {
                                        avoidRouter: n,
                                        to: T.Tk.INDEX,
                                        from: T.sE.MAIN_NAVIGATION_MENU,
                                        children: (0, a.jsx)(M, {}),
                                    }),
                                }),
                                null != s
                                    ? (0, a.jsx)("a", { className: F.skipToContent, href: `#${s}`, children: t })
                                    : null,
                            ],
                        }),
                        (0, a.jsx)("ul", {
                            className: F.headerNav,
                            children: (0, a.jsx)(B, { avoidRouter: n, TrackClick: i, styles: F }),
                        }),
                        (0, a.jsxs)("ul", {
                            className: F.headerNavRight,
                            children: [this.renderSocialMediaNav(), (0, a.jsx)(V, { onChange: l })],
                        }),
                    ],
                }),
                null != s && (0, a.jsx)("div", { id: s, tabIndex: -1 }),
            ],
        });
    }
}
var Y = t(359459),
    q = t(900610);
let $ = T.sE.MAIN_NAVIGATION_MENU;
function Z(e) {
    let {
            className: s,
            TrackClick: t,
            onChangeLocale: l,
            avoidRouter: n,
            openNavAriaLabel: o,
            hideNavAriaLabel: c,
        } = e,
        d = i.useId(),
        [N, A] = i.useState(!1),
        h = i.useCallback(() => A(!N), [N]),
        u = i.useCallback(
            (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), N && h());
            },
            [N, h],
        );
    return (
        i.useEffect(() => (window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u)), [u]),
        (0, a.jsx)("header", {
            className: r()(q.header, s),
            children: (0, a.jsxs)("nav", {
                className: q.headerInner,
                children: [
                    (0, a.jsx)(t, {
                        tag: "div",
                        eventName: $,
                        className: q.headerLogo,
                        data: { linkClicked: "logo" },
                        children: (0, a.jsx)(p, {
                            avoidRouter: n,
                            className: q.logoWrapper,
                            to: T.Tk.INDEX,
                            from: T.sE.MAIN_NAVIGATION_MENU,
                            children: (0, a.jsx)("img", {
                                className: q.logo,
                                src: L.ASSET_LOGO_DISCORD_SVG,
                                alt: "Discord",
                                itemProp: "logo",
                            }),
                        }),
                    }),
                    (0, a.jsx)(t, {
                        tag: "div",
                        className: q.hamburgerButton,
                        eventName: $,
                        data: { linkClicked: "mobile-menu" },
                        children: (0, a.jsx)(Y._, {
                            open: N,
                            "aria-haspopup": "true",
                            "aria-label": N ? c : o,
                            "aria-expanded": N,
                            "aria-controls": d,
                            onClick: h,
                        }),
                    }),
                    (0, a.jsxs)("ul", {
                        className: N ? q.headerNavOpen : q.headerNav,
                        children: [
                            (0, a.jsx)(B, { avoidRouter: n, TrackClick: t, styles: q, isMobile: !0, isVisible: N }),
                            (0, a.jsx)(V, { onChange: l }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var K = t(360292);
let J = null;
class Q extends i.PureComponent {
    constructor(e) {
        super(e),
            null != e.locale && O.A.setLocale(e.locale),
            (J = (s) => (0, a.jsx)(A, { track: e.track, trackOutboundLink: e.trackOutboundLink, ...s }));
    }
    render() {
        let {
            token: e,
            className: s,
            onChangeLocale: t,
            mainContentId: l,
            mobileClassName: n,
            avoidRouter: o,
            authRedirectTo: c,
            openNavAriaLabel: d,
            hideNavAriaLabel: N,
            skipToContentLabel: A,
        } = this.props;
        return null == J
            ? null
            : (0, a.jsxs)(i.Fragment, {
                  children: [
                      (0, a.jsx)(W, {
                          className: r()(K.q, s),
                          TrackClick: J,
                          token: e,
                          avoidRouter: o,
                          authRedirectTo: c,
                          onChangeLocale: t,
                          mainContentId: l,
                          skipToContentLabel: A,
                      }),
                      (0, a.jsx)(Z, {
                          className: r()(K.O, n),
                          token: e,
                          avoidRouter: o,
                          TrackClick: J,
                          onChangeLocale: t,
                          openNavAriaLabel: d,
                          hideNavAriaLabel: N,
                      }),
                  ],
              });
    }
}
class X extends i.Component {
    scrollRef = i.createRef();
    scrollTo = (e) => {
        null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e);
    };
    getScrollTop = () => (null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop);
    componentDidUpdate(e) {
        let {
            props: { location: s, shouldScrollToTop: t },
            scrollRef: { current: l },
        } = this;
        null != l && s !== e.location && (null != t ? t(this.props) && (l.scrollTop = 0) : (l.scrollTop = 0));
    }
    render() {
        let { className: e, render: s } = this.props;
        return (0, a.jsx)("div", { ref: this.scrollRef, className: e, children: s(this.scrollTo, this.getScrollTop) });
    }
}
let z = (0, I.y)(X);
var ee = t(17928),
    es = t(817281),
    et = t(773669),
    el = t(954571),
    ea = t(652215),
    ei = t(985018),
    en = t(212515);
class er extends i.Component {
    shouldScrollToTop(e) {
        let { location: s } = e;
        return (
            s.pathname.startsWith(ea.BVt.APPLICATION_STORE_LISTING_SKU("")) ||
            s.pathname.startsWith(ea.BVt.APPLICATION_STORE_LISTING_APPLICATION(""))
        );
    }
    handleHeaderLocaleChange = (e) => {
        e !== this.props.locale && es.Ay.overrideLocale(e);
    };
    render() {
        let { location: e, className: s, render: t, locale: l } = this.props;
        return (0, a.jsx)(z, {
            className: s,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (s, n) =>
                (0, a.jsxs)(i.Fragment, {
                    children: [
                        (0, a.jsx)(Q, {
                            avoidRouter: !0,
                            locale: l,
                            authRedirectTo: e.pathname,
                            track: el.default.track,
                            className: en.Kn,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: en.Kn,
                            openNavAriaLabel: ei.intl.string(ei.t.Fs9k3K),
                            hideNavAriaLabel: ei.intl.string(ei.t.AbfyHI),
                            skipToContentLabel: ei.intl.string(ei.t["18gavA"]),
                        }),
                        t(s, n),
                        (0, a.jsx)(E, {
                            locale: l,
                            authRedirectTo: e.pathname,
                            avoidRouter: !0,
                            track: el.default.track,
                            className: en.wn,
                        }),
                    ],
                }),
        });
    }
}
let eo = ee.Ay.connectStores([et.default], () => ({ locale: et.default.locale }))(er);
