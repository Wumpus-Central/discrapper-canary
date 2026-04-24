"use strict";
let a;
s.r(t), s.d(t, { default: () => eo });
var l = s(627968),
    r = s(64700),
    n = s(503698),
    i = s.n(n),
    o = s(230109),
    c = s(247775),
    d = s(23339);
function _(e, t) {
    for (var s = arguments.length, a = Array(s > 2 ? s - 2 : 0), l = 2; l < s; l++) a[l - 2] = arguments[l];
    let r = a.reduce((e, t) => e + (0, d.$G)(t), ""),
        n = e[`${t}${r}`];
    return null == n ? "" : n;
}
class u extends r.PureComponent {
    static defaultProps = { tag: "a", data: {} };
    handleClick = (e) => {
        let { eventName: t, data: s, href: a, onClick: l, trackOutboundLink: r, track: n } = this.props;
        if (
            (s.googleAnalytics &&
                r &&
                (null != a
                    ? r(a)
                    : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")),
            l && l(e),
            !t)
        )
            return !1;
        n(t, s);
    };
    render() {
        let { tag: e, children: t, eventName: s, data: a, track: r, trackOutboundLink: n, ...i } = this.props;
        return null == e ? null : (0, l.jsx)(e, { ...i, onClick: this.handleClick, children: t });
    }
}
var p = s(313649),
    N = s(393285),
    A = s(968271);
class g extends r.Component {
    handleOnClick = () => {
        let { to: e, avoidRouter: t, onClick: s, history: a } = this.props;
        if (null != s) s();
        else if (t) {
            let t = "string" == typeof e ? (0, p.yJ)(e, null, void 0, a.location) : e,
                s = a.createHref(t);
            window.location = s;
        }
    };
    render() {
        let { to: e, from: t, isNavLink: s, children: a, tabIndex: r = 0, role: n, className: i } = this.props;
        if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
        let o = "string" == typeof e ? e : e.pathname,
            c = "string" == typeof e ? "" : e.hash,
            d = "string" == typeof e ? "" : e.search;
        return s
            ? (0, l.jsx)(N.k2, {
                  className: i,
                  tabIndex: r,
                  onClick: this.handleOnClick,
                  to: { pathname: o, hash: c, search: d, state: { previousLinkLocation: t } },
                  role: n,
                  children: a,
              })
            : (0, l.jsx)(N.N_, {
                  className: i,
                  tabIndex: r,
                  onClick: this.handleOnClick,
                  to: { pathname: o, hash: c, search: d, state: { previousLinkLocation: t } },
                  role: n,
                  children: a,
              });
    }
}
let h = (0, A.y)(g);
var I = s(818348),
    k = s(396574),
    m = s(855522),
    f = s(109236);
let x = "Footer Navigation",
    T = { BLURPLE: "Blurple", PRIMARY: "Primary" },
    O = (e) => {
        let { colorVariant: t, animate: s } = e;
        return (0, l.jsx)("svg", {
            className: _(f, "footerBackground", t),
            preserveAspectRatio: "none",
            width: "1920",
            height: "100%",
            viewBox: "0 0 1920 330",
            version: "1.1",
            children: (0, l.jsx)("path", {
                className: _(f, "footerBackground", s ? "Play" : "Paused"),
                fill: "#1a1c1e",
                fillOpacity: "0.3",
                d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z",
            }),
        });
    };
class C extends r.PureComponent {
    static Variants = T;
    static defaultProps = { variant: T.PRIMARY, showWave: !0 };
    state = { animateBackground: !1, isMobile: null, token: null, isAppCompatible: !0 };
    ref = r.createRef();
    constructor(e) {
        super(e),
            null != e.locale && m.A.setLocale(e.locale),
            (a = (t) => (0, l.jsx)(u, { track: e.track, trackOutboundLink: e.trackOutboundLink, ...t }));
    }
    componentDidMount() {
        this.setState({ token: (0, c.getToken)(), isAppCompatible: k.VP });
    }
    handleVisibility = (e) => {
        this.setState({ animateBackground: e });
    };
    renderAppButton(e) {
        if ("STATIC_RENDERER" === this.props.platform) return null;
        let {
                downloadLink: t,
                isMobile: s,
                mobileDownloadText: r,
                platform: n,
                variant: i,
                authRedirectTo: o,
            } = this.props,
            { isAppCompatible: c } = this.state;
        if (s)
            return (0, l.jsx)(a, {
                eventName: "Download App",
                data: { Platform: n, PTB: !1, Released: !0, "Referring Location": "Footer" },
                alt: "Download Discord",
                target: "_blank",
                className: _(f, "button", i),
                href: t,
                children: r,
            });
        if (!c)
            return (0, l.jsx)(a, {
                eventName: "Download App",
                data: { Platform: n, PTB: !1, Released: !0, "Referring Location": "Footer" },
                alt: "Download Discord",
                className: _(f, "button", i),
                href: I.Tk.DOWNLOAD,
                children: m.A.Messages.NAVIGATION_DOWNLOAD,
            });
        let d = null != o ? I.Sb.REGISTER_WITH_REDIRECT(o) : I.Sb.REGISTER,
            u = m.A.Messages.COMMON_SIGN_UP_NOW;
        return (
            e && ((d = I.Sb.ME), (u = m.A.Messages.COMMON_OPEN_DISCORD)),
            (0, l.jsx)(a, {
                eventName: x,
                className: _(f, "button", this.props.variant),
                data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
                href: d,
                children: u,
            })
        );
    }
    render() {
        let { variant: e, style: t, className: r, avoidRouter: n, showWave: c } = this.props,
            { animateBackground: d, token: u } = this.state,
            p = [
                {
                    title: m.A.Messages.NAVIGATION_PRODUCT,
                    routes: [
                        { link: I.Tk.DOWNLOAD, title: m.A.Messages.NAVIGATION_DOWNLOAD, tracking: "download" },
                        { link: I.Tk.BRANDING, title: m.A.Messages.NAVIGATION_BRANDING, tracking: "branding" },
                        { link: I.Tk.NITRO, title: m.A.Messages.NAVIGATION_NITRO, tracking: "nitro", external: !0 },
                    ],
                },
                {
                    title: m.A.Messages.NAVIGATION_DEVELOPERS,
                    routes: [
                        {
                            link: I.Tk.RICH_PRESENCE,
                            title: m.A.Messages.NAVIGATION_RICH_PRESENCE,
                            tracking: "rich_presence",
                        },
                        {
                            link: I.Tk.VERIFICATION,
                            title: m.A.Messages.NAVIGATION_VERIFICATION,
                            tracking: "verification",
                            external: !0,
                        },
                        {
                            link: I.qF.DEV_PORTAL_APPLICATIONS,
                            title: m.A.Messages.NAVIGATION_APPLICATIONS,
                            tracking: "developers",
                            external: !0,
                        },
                        {
                            link: I.qF.DEV_PORTAL_DOCUMENTATION,
                            title: m.A.Messages.NAVIGATION_DOCUMENTATION,
                            tracking: "documentation",
                            external: !0,
                        },
                    ],
                },
                {
                    title: m.A.Messages.NAVIGATION_RESOURCES,
                    routes: [
                        {
                            link: I.qF.HELP_AND_SUPPORT,
                            title: m.A.Messages.NAVIGATION_HELP_AND_SUPPORT,
                            tracking: "helpandsupport",
                            external: !0,
                        },
                        {
                            link: I.Tk.GUIDELINES,
                            title: m.A.Messages.NAVIGATION_GUIDELINES,
                            tracking: "guidelines",
                            external: !0,
                        },
                        {
                            link: I.qF.FEEDBACK,
                            title: m.A.Messages.NAVIGATION_FEEDBACK,
                            tracking: "feedback",
                            external: !0,
                        },
                        { link: I.Tk.TERMS, title: m.A.Messages.NAVIGATION_TERMS, tracking: "terms", external: !0 },
                        {
                            link: I.Tk.PRIVACY,
                            title: m.A.Messages.NAVIGATION_PRIVACY,
                            tracking: "privacy",
                            external: !0,
                        },
                        { link: I.Tk.SECURITY, title: m.A.Messages.NAVIGATION_SECURITY, tracking: "security" },
                        { link: I.qF.STATUS, title: m.A.Messages.NAVIGATION_STATUS, tracking: "status", external: !0 },
                        {
                            link: I.Tk.SAFETY_LANDING,
                            title: m.A.Messages.NAVIGATION_SAFETY_CENTER,
                            tracking: "safetycenter",
                            external: !0,
                        },
                    ],
                },
                {
                    title: m.A.Messages.NAVIGATION_COMPANY,
                    routes: [
                        { link: I.Tk.COMPANY, title: m.A.Messages.NAVIGATION_ABOUT, tracking: "about" },
                        { link: I.Tk.BLOG, title: m.A.Messages.NAVIGATION_BLOG, tracking: "blog", external: !0 },
                        { link: I.Tk.JOBS, title: m.A.Messages.NAVIGATION_JOBS, tracking: "join", external: !0 },
                    ],
                },
                {
                    title: m.A.Messages.NAVIGATION_MORE,
                    routes: [
                        {
                            link: I.Tk.PARTNERS,
                            title: m.A.Messages.NAVIGATION_PARTNERS,
                            tracking: "partners",
                            external: !0,
                        },
                        {
                            link: I.Tk.HYPESQUAD,
                            title: m.A.Messages.NAVIGATION_HYPESQUAD,
                            tracking: "hypesquad",
                            external: !0,
                        },
                        {
                            link: I.qF.PRESS_INQUIRIES,
                            title: m.A.Messages.NAVIGATION_PRESS_INQUIRIES,
                            tracking: "pressinquiries",
                            external: !0,
                        },
                        { link: I.Tk.OPEN_SOURCE, title: m.A.Messages.NAVIGATION_OPEN_SOURCE, tracking: "open_source" },
                    ],
                },
            ].map((e) => {
                let t = e.routes.map((e, t) =>
                    e.external
                        ? (0, l.jsx)(
                              a,
                              {
                                  className: f.route,
                                  eventName: x,
                                  data: { linkClicked: e.tracking },
                                  href: e.link,
                                  children: e.title,
                              },
                              e.link || t,
                          )
                        : (0, l.jsx)(
                              h,
                              {
                                  avoidRouter: n,
                                  to: e.link,
                                  from: "footer_navigation",
                                  className: f.route,
                                  children: (0, l.jsx)(a, {
                                      tag: "span",
                                      eventName: x,
                                      data: { linkClicked: e.tracking },
                                      children: e.title,
                                  }),
                              },
                              e.link,
                          ),
                );
                return (0, l.jsxs)(
                    "div",
                    {
                        className: f.navigationSection,
                        children: [(0, l.jsx)("h3", { className: f.navigationHeader, children: e.title }), t],
                    },
                    e.title,
                );
            });
        return (0, l.jsx)(o.L, {
            innerRef: this.ref,
            onChange: this.handleVisibility,
            children: (0, l.jsxs)("footer", {
                ref: this.ref,
                className: i()(_(f, "footer", e), r),
                style: t,
                children: [
                    c ? (0, l.jsx)(O, { colorVariant: e, animate: d }) : null,
                    (0, l.jsxs)("div", {
                        className: f.footerContent,
                        children: [
                            (0, l.jsxs)("div", {
                                className: f.navigation,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: f.logoWrap,
                                        children: (0, l.jsx)(a, {
                                            className: f.logo,
                                            href: I.Tk.INDEX,
                                            eventName: x,
                                            data: { linkClicked: "logo" },
                                            children: (0, l.jsx)("img", {
                                                alt: m.A.Messages.NAVIGATION_HOME,
                                                src: s(611411),
                                            }),
                                        }),
                                    }),
                                    p,
                                ],
                            }),
                            (0, l.jsx)("div", { className: f.separator }),
                            (0, l.jsxs)("div", {
                                className: f.joinDiscord,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: f.stats,
                                        children: [
                                            (0, l.jsx)("h2", {
                                                className: f.readyToJoin,
                                                children: m.A.Messages.FOOTER_READY_TO_TRY_DISCORD,
                                            }),
                                            (0, l.jsx)("h3", {
                                                className: f.joinOtherPlayers,
                                                children: m.A.Messages.FOOTER_JOIN_OVER_PLAYERS_TODAY.format({
                                                    num: I.sh,
                                                }),
                                            }),
                                        ],
                                    }),
                                    this.renderAppButton(u),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
}
s(321073);
var v = s(323125),
    E = s(946015),
    b = s(1947);
class L extends r.PureComponent {
    render() {
        return (0, l.jsxs)(E.s, {
            wrap: E.s.Wrap.NO_WRAP,
            children: [
                (0, l.jsx)(E.s.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, l.jsxs)("svg", {
                        className: b.wI,
                        viewBox: "0 0 33 36",
                        children: [
                            (0, l.jsx)("ellipse", { cx: "19.6", cy: "17.1", rx: "1.9", ry: "2" }),
                            (0, l.jsx)("ellipse", { cx: "12.8", cy: "17.1", rx: "1.9", ry: "2" }),
                            (0, l.jsx)("path", {
                                d: "M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4,23.5s-.7-.8-1.2-1.5a5.958,5.958,0,0,0,3.3-2.1A22.059,22.059,0,0,1,21.4,21a13.817,13.817,0,0,1-2.7.8,15.394,15.394,0,0,1-4.8,0,12.544,12.544,0,0,1-2.7-.8c-.4-.2-.9-.4-1.4-.6-.1,0-.1-.1-.2-.1H9.5A5.2,5.2,0,0,0,9,20a5.932,5.932,0,0,0,3.2,2.1c-.6.7-1.2,1.5-1.2,1.5-4.1-.1-5.6-2.7-5.6-2.7A23.4,23.4,0,0,1,8.1,10.4a8.948,8.948,0,0,1,5.2-1.9l.2.2A10.672,10.672,0,0,0,8.7,11s.4-.2,1.1-.5A13.33,13.33,0,0,1,14,9.4h.3a15.243,15.243,0,0,1,3.7,0,16.225,16.225,0,0,1,5.6,1.7A12.081,12.081,0,0,0,19,8.8l.3-.3a8.948,8.948,0,0,1,5.2,1.9,23.4,23.4,0,0,1,2.7,10.5A7.865,7.865,0,0,1,21.4,23.5Z",
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(E.s.Child, {
                    grow: 0,
                    shrink: 0,
                    children: (0, l.jsx)("svg", {
                        className: b.NW,
                        viewBox: "0 0 98 36",
                        children: (0, l.jsx)("path", {
                            d: "M12.8,7.8H6.7v6.8l4.1,3.6V11.6H13c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H6.7v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C19.2,9.4,16.1,7.8,12.8,7.8ZM45,18.6V13c0-2,3.7-2.5,4.8-.5l3.4-1.3a6.069,6.069,0,0,0-5.8-3.7c-3.3,0-6.5,1.9-6.5,5.5v5.6c0,3.7,3.2,5.5,6.5,5.5a6.611,6.611,0,0,0,5.9-3.6l-3.7-1.6C48.7,21.1,45,20.6,45,18.6ZM33.8,13.8c-1.3-.3-2.1-.7-2.2-1.5.1-1.9,3-1.9,4.7-.1l2.7-2a6.884,6.884,0,0,0-5.6-2.6c-3,0-5.9,1.7-5.9,4.8s2.4,4.7,5.1,5.1c1.3.2,2.8.7,2.8,1.6-.1,1.7-3.7,1.6-5.4-.3l-2.6,2.4A7.258,7.258,0,0,0,33,24.1c3,0,6.3-1.7,6.5-4.8C39.6,15.3,36.7,14.3,33.8,13.8ZM21.4,23.9h4.2V7.8H21.5V23.9ZM91.2,7.8H85.1v6.8l4.1,3.6V11.6h2.2c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H85.1v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C97.6,9.4,94.5,7.8,91.2,7.8ZM61.1,7.6c-3.4,0-6.8,1.8-6.8,5.5v5.5c0,3.7,3.4,5.5,6.8,5.5s6.8-1.8,6.8-5.5V13.1C67.9,9.4,64.5,7.6,61.1,7.6Zm2.7,11c0,1.2-1.3,1.8-2.6,1.8s-2.7-.6-2.7-1.8V13.1c0-1.2,1.3-1.8,2.6-1.8s2.7.6,2.7,1.8Zm19-5.5c-.1-3.8-2.7-5.3-6.1-5.3H70.1V23.9h4.2V18.8H75l3.8,5.1H84l-4.5-5.5C81.6,17.8,82.8,16.1,82.8,13.1Zm-6,2.2H74.4V11.6h2.4A1.853,1.853,0,1,1,76.8,15.3Z",
                        }),
                    }),
                }),
            ],
        });
    }
}
let R = {
    ASSET_SOCIAL_TWITTER: s(412126),
    ASSET_SOCIAL_FACEBOOK: s(681713),
    ASSET_SOCIAL_INSTAGRAM: s(368531),
    ICON_TRANSLATE: s(835691),
    ICON_ARROW_DOWN: s(616327),
    ASSET_LOGO_DISCORD_SVG: s(511749),
};
var S = s(773977);
class M extends r.PureComponent {
    state = { languages: m.A.getLanguages().filter((e) => e.enabled), current: m.A.getLocaleInfo(), isOpen: !1 };
    componentDidMount() {
        this.callChangeLocale(m.A.getLocale());
    }
    setLocale = (e) => {
        null != m.A && (m.A.setLocale(e), this.callChangeLocale(e));
    };
    callChangeLocale = (e) => {
        let { onChange: t } = this.props;
        null != t && t(e);
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
        let { isOpen: e, languages: t, current: a } = this.state,
            { className: r } = this.props,
            n = null;
        return (
            null != t &&
                (n = t
                    .sort((e, t) => (e.code < t.code ? -1 : +(e.code > t.code)))
                    .map((e) => {
                        let t = (function (e) {
                                try {
                                    return s(579832)(`./${e}.png`);
                                } catch (e) {
                                    return null;
                                }
                            })(e.code),
                            r = () => this.setLocale(e.code);
                        return null == t
                            ? null
                            : (0, l.jsxs)(
                                  "li",
                                  {
                                      className: _(S, "locale", null != a && e.code === a.code ? "Current" : null),
                                      onClick: r,
                                      children: [
                                          (0, l.jsx)("img", { className: S.localeImage, src: t, alt: e.name }),
                                          e.name,
                                      ],
                                  },
                                  e.code,
                              );
                    })),
            (0, l.jsxs)("div", {
                className: i()(S.localePicker, r),
                onMouseEnter: this.open,
                onMouseLeave: this.close,
                onClick: this.toggle,
                children: [
                    (0, l.jsxs)(E.s, {
                        align: E.s.Align.CENTER,
                        className: _(S, "opener", e ? "Open" : null),
                        children: [
                            (0, l.jsx)("span", { className: S.line }),
                            (0, l.jsx)("img", { className: S.localeIcon, src: R.ICON_TRANSLATE, alt: "Choose Locale" }),
                            (0, l.jsx)("img", { className: S.arrowIcon, src: R.ICON_ARROW_DOWN, alt: "Open Locale" }),
                        ],
                    }),
                    (0, l.jsx)("ul", { className: _(S, "localeList", e ? "Open" : "Closed"), children: n }),
                ],
            })
        );
    }
}
var j = s(877227),
    P = s(393163);
let V = I.sE.MAIN_NAVIGATION_MENU;
function G(e) {
    let { isOpen: t, dropdownLinks: s, TrackClick: a, avoidRouter: r, id: n, "aria-label": i } = e,
        o = (0, j.dI)({ history: (0, A.W6)() }),
        c = s.map((e, t) =>
            e.divider
                ? (0, l.jsx)("hr", { className: P.divider }, `divider-${t}`)
                : e.external
                  ? (0, l.jsx)(
                        "li",
                        {
                            className: P.moreListItemInactive,
                            children: (0, l.jsx)(a, {
                                className: P.moreListLink,
                                eventName: V,
                                data: { linkClicked: e.linkClicked },
                                href: e.route,
                                rel: "me",
                                children: (0, l.jsx)("span", { className: P.moreListLinkCopy, children: e.title }),
                            }),
                        },
                        e.route,
                    )
                  : (0, l.jsx)(
                        "li",
                        {
                            className: _(P, "moreListItem", o(e.route) ? "Active" : "Inactive"),
                            children: (0, l.jsx)(h, {
                                avoidRouter: r,
                                className: P.moreListLink,
                                to: e.route,
                                from: I.sE.MAIN_NAVIGATION_MENU,
                                role: "menuitem",
                                children: (0, l.jsx)(a, {
                                    tag: "span",
                                    className: P.moreListLinkCopy,
                                    eventName: V,
                                    data: { linkClicked: e.linkClicked },
                                    children: e.title,
                                }),
                            }),
                        },
                        e.route,
                    ),
        );
    return (0, l.jsx)("ul", {
        id: n,
        className: _(P, "moreList", t ? "Open" : "Closed"),
        "aria-label": i,
        children: c,
    });
}
var D = s(552524);
let y = I.sE.MAIN_NAVIGATION_MENU;
function B(e) {
    let { TrackClick: t, title: s, links: a, onClose: n, onOpen: i, isOpen: o = !1, isMobile: c, avoidRouter: d } = e,
        _ = (0, j.dI)({ history: (0, A.W6)() }),
        u = r.useId(),
        p = () => n(),
        N = () => i(s),
        g = () => (o ? n() : i(s)),
        k =
            c && o
                ? (0, l.jsx)("ul", {
                      className: D.Er,
                      id: u,
                      children: a.map((e) =>
                          e.external
                              ? (0, l.jsx)(
                                    "li",
                                    {
                                        className: D.ni,
                                        children: (0, l.jsx)(t, {
                                            eventName: y,
                                            className: D.qz,
                                            data: { linkClicked: `mobile-${e.linkClicked}` },
                                            rel: "me",
                                            href: e.route,
                                            children: e.title,
                                        }),
                                    },
                                    e.route,
                                )
                              : (0, l.jsx)(
                                    "li",
                                    {
                                        className: _(e.route) ? D.wL : D.ni,
                                        children: (0, l.jsx)(h, {
                                            avoidRouter: d,
                                            to: e.route,
                                            from: I.sE.MAIN_NAVIGATION_MENU,
                                            children: (0, l.jsx)(t, {
                                                className: D.qz,
                                                tag: "span",
                                                eventName: y,
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
        ? (0, l.jsxs)(
              "li",
              {
                  className: D.__invalid_subListHeading,
                  tabIndex: -1,
                  onClick: g,
                  onKeyDown: (e) => {
                      ("Enter" === e.key || " " === e.key) && (e.preventDefault(), g());
                  },
                  children: [
                      (0, l.jsxs)(
                          "span",
                          {
                              className: D.DC,
                              "aria-label": `Open ${s} Nav`,
                              "aria-expanded": o,
                              "aria-controls": u,
                              "aria-haspopup": "true",
                              role: "menuitem",
                              tabIndex: 0,
                              children: [
                                  s,
                                  (0, l.jsx)("img", { src: R.ICON_ARROW_DOWN, className: D.fr, alt: "Open Nav" }),
                              ],
                          },
                          "more",
                      ),
                      k,
                  ],
              },
              `dropdown_${s}`,
          )
        : (0, l.jsxs)(
              "li",
              {
                  role: "none",
                  tabIndex: -1,
                  onFocus: N,
                  onBlur: p,
                  onMouseEnter: N,
                  onMouseLeave: p,
                  className: D.pX,
                  children: [
                      (0, l.jsxs)(
                          "span",
                          {
                              className: D.Bc,
                              role: "menuitem",
                              tabIndex: 0,
                              "aria-haspopup": "true",
                              "aria-expanded": o,
                              "aria-controls": u,
                              children: [
                                  s,
                                  (0, l.jsx)("img", { src: R.ICON_ARROW_DOWN, className: D.fr, alt: "Open Nav" }),
                              ],
                          },
                          "more",
                      ),
                      (0, l.jsx)(G, {
                          id: u,
                          avoidRouter: d,
                          TrackClick: t,
                          isOpen: o,
                          dropdownLinks: a,
                          "aria-label": s,
                      }),
                  ],
              },
              `dropdown_${s}`,
          );
}
let w = I.sE.MAIN_NAVIGATION_MENU;
class U extends r.PureComponent {
    static defaultProps = { isMobile: !1, isVisible: !0 };
    state = { sectionShown: null };
    closeSubNav = () => {
        let { sectionShown: e } = this.state;
        null !== e && this.setState({ sectionShown: null });
    };
    openSubNav = (e) => {
        let { sectionShown: t } = this.state;
        t !== e && this.setState({ sectionShown: e });
    };
    render() {
        let e,
            t = (0, j.dI)(this.context.router),
            { isMobile: s, isVisible: a, styles: r, TrackClick: n, avoidRouter: i } = this.props,
            { sectionShown: o } = this.state;
        return ((e = null != m.A ? m.A.getLocale().toLowerCase() : ""),
        [
            { route: I.Tk.DOWNLOAD, linkClicked: "download", title: m.A.Messages.NAVIGATION_DOWNLOAD },
            { route: I.Tk.NITRO, linkClicked: "nitro", title: m.A.Messages.NAVIGATION_NITRO, external: !0 },
            { route: I.Tk.JOBS, linkClicked: "jobs", title: m.A.Messages.NAVIGATION_JOBS, external: !0 },
            {
                title: m.A.Messages.NAVIGATION_DEVELOPERS,
                links: [
                    {
                        route: I.Tk.RICH_PRESENCE,
                        linkClicked: "rich_presence",
                        title: m.A.Messages.NAVIGATION_RICH_PRESENCE,
                    },
                    {
                        route: I.Tk.VERIFICATION,
                        linkClicked: "verification",
                        title: m.A.Messages.NAVIGATION_VERIFICATION,
                        external: !0,
                    },
                    {
                        route: I.qF.DEV_PORTAL,
                        linkClicked: "developers",
                        title: m.A.Messages.NAVIGATION_DEVELOPER_PORTAL,
                        external: !0,
                    },
                    {
                        route: I.qF.DEV_PORTAL_DOCUMENTATION,
                        linkClicked: "documentation",
                        title: m.A.Messages.NAVIGATION_DOCUMENTATION,
                        external: !0,
                    },
                ],
            },
            {
                title: m.A.Messages.NAVIGATION_COMMUNITY,
                links: [
                    { route: I.Tk.OPEN_SOURCE, linkClicked: "open_source", title: m.A.Messages.NAVIGATION_OPEN_SOURCE },
                    {
                        route: I.Tk.PARTNERS,
                        linkClicked: "partners",
                        title: m.A.Messages.NAVIGATION_PARTNERS,
                        external: !0,
                    },
                    {
                        route: I.Tk.HYPESQUAD,
                        linkClicked: "hypesquad",
                        title: m.A.Messages.NAVIGATION_HYPESQUAD,
                        external: !0,
                    },
                    {
                        route: I.Tk.GUIDELINES,
                        linkClicked: "guidelines",
                        title: m.A.Messages.NAVIGATION_GUIDELINES,
                        external: !0,
                    },
                ],
            },
            {
                title: m.A.Messages.NAVIGATION_SUPPORT,
                links: [
                    {
                        route: `//support.discord.com/hc/${e}`,
                        linkClicked: "helpandsupport",
                        title: m.A.Messages.NAVIGATION_HELP_AND_SUPPORT,
                        external: !0,
                    },
                    { route: I.qF.STATUS, linkClicked: "status", title: m.A.Messages.NAVIGATION_STATUS, external: !0 },
                    {
                        route: I.Tk.SAFETY_LANDING,
                        linkClicked: "safetycenter",
                        title: m.A.Messages.NAVIGATION_SAFETY_CENTER,
                        external: !0,
                    },
                ],
            },
        ]).map((e) =>
            null != e.links
                ? (0, l.jsx)(
                      B,
                      {
                          title: e.title,
                          links: e.links,
                          isOpen: o === e.title,
                          isMobile: s,
                          avoidRouter: i,
                          TrackClick: n,
                          onClose: this.closeSubNav,
                          onOpen: this.openSubNav,
                      },
                      e.title,
                  )
                : e.external && null != e.route
                  ? (0, l.jsx)(
                        "li",
                        {
                            className: r.listItemInactive,
                            role: "none",
                            children: (0, l.jsx)(n, {
                                className: r.mainNavLink,
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
                    ? (0, l.jsx)(
                          "li",
                          {
                              className: t(e.route) ? r.listItemActive : r.listItemInactive,
                              role: "none",
                              children: (0, l.jsx)(h, {
                                  avoidRouter: i,
                                  to: e.route,
                                  from: I.sE.MAIN_NAVIGATION_MENU,
                                  tabIndex: a ? 0 : -1,
                                  role: "menuitem",
                                  children: (0, l.jsx)(n, {
                                      tag: "span",
                                      className: r.mainNavLink,
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
var H = s(775684);
let W = I.sE.MAIN_NAVIGATION_MENU;
class F extends r.PureComponent {
    state = { isAppCompatible: !0 };
    componentDidMount() {
        this.setState({ isAppCompatible: k.VP });
    }
    getAppButton = () => {
        let { token: e, TrackClick: t, authRedirectTo: s } = this.props,
            { isAppCompatible: a } = this.state,
            r = (0, v.T2)(s),
            n = m.A.Messages.NAVIGATION_LOGIN;
        return (
            null != e && ((r = I.Sb.ME), (n = m.A.Messages.NAVIGATION_OPEN)),
            a
                ? (0, l.jsx)(
                      "li",
                      {
                          className: H.listItemInactive,
                          children: (0, l.jsx)(t, {
                              eventName: W,
                              className: H.appButton,
                              data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
                              href: r,
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
        let t,
            { TrackClick: s } = this.props,
            a = [
                {
                    route: ((e = I.Pq.TWITTER), (t = m.A.getLocale().toLowerCase()) in e ? e[t] : e.default),
                    linkClicked: "twitter",
                    alt: "Discord's Twitter",
                    img: R.ASSET_SOCIAL_TWITTER,
                },
                {
                    route: I.w7.FACEBOOK_URL,
                    linkClicked: "facebook",
                    alt: "Discord's Facebook",
                    img: R.ASSET_SOCIAL_FACEBOOK,
                },
                {
                    route: I.w7.INSTAGRAM_URL,
                    linkClicked: "instagram",
                    alt: "Discord's Instagram",
                    img: R.ASSET_SOCIAL_INSTAGRAM,
                },
            ].map((e) =>
                (0, l.jsx)(
                    "li",
                    {
                        className: i()(H.listItemInactive, H.listItemSocialMedia),
                        children: (0, l.jsx)(s, {
                            eventName: W,
                            className: H.rightNavLink,
                            data: { linkClicked: e.linkClicked },
                            href: e.route,
                            rel: "me",
                            target: "_blank",
                            children: (0, l.jsx)("img", { src: e.img, alt: e.alt }),
                        }),
                    },
                    e.route,
                ),
            ),
            r = this.getAppButton();
        return null != r && a.push(r), a;
    };
    render() {
        let {
            className: e,
            mainContentId: t,
            skipToContentLabel: s,
            onChangeLocale: a,
            TrackClick: r,
            avoidRouter: n,
        } = this.props;
        return (0, l.jsxs)("header", {
            className: i()(H.header, e),
            children: [
                (0, l.jsxs)("nav", {
                    className: H.headerInner,
                    children: [
                        (0, l.jsxs)("div", {
                            className: H.headerLogo,
                            children: [
                                (0, l.jsx)(r, {
                                    tag: "div",
                                    eventName: W,
                                    data: { linkClicked: "logo" },
                                    children: (0, l.jsx)(h, {
                                        avoidRouter: n,
                                        to: I.Tk.INDEX,
                                        from: I.sE.MAIN_NAVIGATION_MENU,
                                        children: (0, l.jsx)(L, {}),
                                    }),
                                }),
                                null != t
                                    ? (0, l.jsx)("a", { className: H.skipToContent, href: `#${t}`, children: s })
                                    : null,
                            ],
                        }),
                        (0, l.jsx)("ul", {
                            className: H.headerNav,
                            children: (0, l.jsx)(U, { avoidRouter: n, TrackClick: r, styles: H }),
                        }),
                        (0, l.jsxs)("ul", {
                            className: H.headerNavRight,
                            children: [this.renderSocialMediaNav(), (0, l.jsx)(M, { onChange: a })],
                        }),
                    ],
                }),
                null != t && (0, l.jsx)("div", { id: t, tabIndex: -1 }),
            ],
        });
    }
}
var Y = s(359459),
    q = s(900610);
let Z = I.sE.MAIN_NAVIGATION_MENU;
function $(e) {
    let {
            className: t,
            TrackClick: s,
            onChangeLocale: a,
            avoidRouter: n,
            openNavAriaLabel: o,
            hideNavAriaLabel: c,
        } = e,
        d = r.useId(),
        [_, u] = r.useState(!1),
        p = r.useCallback(() => u(!_), [_]),
        N = r.useCallback(
            (e) => {
                ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), _ && p());
            },
            [_, p],
        );
    return (
        r.useEffect(() => (window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N)), [N]),
        (0, l.jsx)("header", {
            className: i()(q.header, t),
            children: (0, l.jsxs)("nav", {
                className: q.headerInner,
                children: [
                    (0, l.jsx)(s, {
                        tag: "div",
                        eventName: Z,
                        className: q.headerLogo,
                        data: { linkClicked: "logo" },
                        children: (0, l.jsx)(h, {
                            avoidRouter: n,
                            className: q.logoWrapper,
                            to: I.Tk.INDEX,
                            from: I.sE.MAIN_NAVIGATION_MENU,
                            children: (0, l.jsx)("img", {
                                className: q.logo,
                                src: R.ASSET_LOGO_DISCORD_SVG,
                                alt: "Discord",
                                itemProp: "logo",
                            }),
                        }),
                    }),
                    (0, l.jsx)(s, {
                        tag: "div",
                        className: q.hamburgerButton,
                        eventName: Z,
                        data: { linkClicked: "mobile-menu" },
                        children: (0, l.jsx)(Y._, {
                            open: _,
                            "aria-haspopup": "true",
                            "aria-label": _ ? c : o,
                            "aria-expanded": _,
                            "aria-controls": d,
                            onClick: p,
                        }),
                    }),
                    (0, l.jsxs)("ul", {
                        className: _ ? q.headerNavOpen : q.headerNav,
                        children: [
                            (0, l.jsx)(U, { avoidRouter: n, TrackClick: s, styles: q, isMobile: !0, isVisible: _ }),
                            (0, l.jsx)(M, { onChange: a }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var J = s(360292);
let K = null;
class z extends r.PureComponent {
    constructor(e) {
        super(e),
            null != e.locale && m.A.setLocale(e.locale),
            (K = (t) => (0, l.jsx)(u, { track: e.track, trackOutboundLink: e.trackOutboundLink, ...t }));
    }
    render() {
        let {
            token: e,
            className: t,
            onChangeLocale: s,
            mainContentId: a,
            mobileClassName: n,
            avoidRouter: o,
            authRedirectTo: c,
            openNavAriaLabel: d,
            hideNavAriaLabel: _,
            skipToContentLabel: u,
        } = this.props;
        return null == K
            ? null
            : (0, l.jsxs)(r.Fragment, {
                  children: [
                      (0, l.jsx)(F, {
                          className: i()(J.q, t),
                          TrackClick: K,
                          token: e,
                          avoidRouter: o,
                          authRedirectTo: c,
                          onChangeLocale: s,
                          mainContentId: a,
                          skipToContentLabel: u,
                      }),
                      (0, l.jsx)($, {
                          className: i()(J.O, n),
                          token: e,
                          avoidRouter: o,
                          TrackClick: K,
                          onChangeLocale: s,
                          openNavAriaLabel: d,
                          hideNavAriaLabel: _,
                      }),
                  ],
              });
    }
}
class Q extends r.Component {
    scrollRef = r.createRef();
    scrollTo = (e) => {
        null != this.scrollRef.current && (this.scrollRef.current.scrollTop = e);
    };
    getScrollTop = () => (null == this.scrollRef.current ? 0 : this.scrollRef.current.scrollTop);
    componentDidUpdate(e) {
        let {
            props: { location: t, shouldScrollToTop: s },
            scrollRef: { current: a },
        } = this;
        null != a && t !== e.location && (null != s ? s(this.props) && (a.scrollTop = 0) : (a.scrollTop = 0));
    }
    render() {
        let { className: e, render: t } = this.props;
        return (0, l.jsx)("div", { ref: this.scrollRef, className: e, children: t(this.scrollTo, this.getScrollTop) });
    }
}
let X = (0, A.y)(Q);
var ee = s(17928),
    et = s(817281),
    es = s(773669),
    ea = s(954571),
    el = s(652215),
    er = s(985018),
    en = s(212515);
class ei extends r.Component {
    shouldScrollToTop(e) {
        let { location: t } = e;
        return (
            t.pathname.startsWith(el.BVt.APPLICATION_STORE_LISTING_SKU("")) ||
            t.pathname.startsWith(el.BVt.APPLICATION_STORE_LISTING_APPLICATION(""))
        );
    }
    handleHeaderLocaleChange = (e) => {
        e !== this.props.locale && et.Ay.overrideLocale(e);
    };
    render() {
        let { location: e, className: t, render: s, locale: a } = this.props;
        return (0, l.jsx)(X, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, n) =>
                (0, l.jsxs)(r.Fragment, {
                    children: [
                        (0, l.jsx)(z, {
                            avoidRouter: !0,
                            locale: a,
                            authRedirectTo: e.pathname,
                            track: ea.default.track,
                            className: en.Kn,
                            onChangeLocale: this.handleHeaderLocaleChange,
                            mobileClassName: en.Kn,
                            openNavAriaLabel: er.intl.string(er.t.Fs9k3K),
                            hideNavAriaLabel: er.intl.string(er.t.AbfyHI),
                            skipToContentLabel: er.intl.string(er.t["18gavA"]),
                        }),
                        s(t, n),
                        (0, l.jsx)(C, {
                            locale: a,
                            authRedirectTo: e.pathname,
                            avoidRouter: !0,
                            track: ea.default.track,
                            className: en.wn,
                        }),
                    ],
                }),
        });
    }
}
let eo = ee.Ay.connectStores([es.default], () => ({ locale: es.default.locale }))(ei);
