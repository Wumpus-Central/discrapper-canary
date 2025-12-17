a.d(t, { o: () => m }), a(388685);
var n,
    r = a(54381),
    s = a(473749),
    l = a(948789),
    i = a(66037),
    o = a(248108),
    c = a(231338),
    d = a(330711);
function u(e, t, a) {
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
let N = c.j_.MAIN_NAVIGATION_MENU;
class m extends (n = s.PureComponent) {
    render() {
        let e,
            t = (0, l.fQ)(this.context.router),
            { isMobile: a, isVisible: n, styles: s, TrackClick: u, avoidRouter: m } = this.props,
            { sectionShown: f } = this.state;
        return ((e = null != d.Z ? d.Z.getLocale().toLowerCase() : ""),
        [
            {
                route: c.am.DOWNLOAD,
                linkClicked: "download",
                title: d.Z.Messages.NAVIGATION_DOWNLOAD,
            },
            {
                route: c.am.NITRO,
                linkClicked: "nitro",
                title: d.Z.Messages.NAVIGATION_NITRO,
                external: !0,
            },
            {
                route: c.am.JOBS,
                linkClicked: "jobs",
                title: d.Z.Messages.NAVIGATION_JOBS,
                external: !0,
            },
            {
                title: d.Z.Messages.NAVIGATION_DEVELOPERS,
                links: [
                    {
                        route: c.am.RICH_PRESENCE,
                        linkClicked: "rich_presence",
                        title: d.Z.Messages.NAVIGATION_RICH_PRESENCE,
                    },
                    {
                        route: c.am.VERIFICATION,
                        linkClicked: "verification",
                        title: d.Z.Messages.NAVIGATION_VERIFICATION,
                        external: !0,
                    },
                    {
                        route: c.yX.DEV_PORTAL,
                        linkClicked: "developers",
                        title: d.Z.Messages.NAVIGATION_DEVELOPER_PORTAL,
                        external: !0,
                    },
                    {
                        route: c.yX.DEV_PORTAL_DOCUMENTATION,
                        linkClicked: "documentation",
                        title: d.Z.Messages.NAVIGATION_DOCUMENTATION,
                        external: !0,
                    },
                ],
            },
            {
                title: d.Z.Messages.NAVIGATION_COMMUNITY,
                links: [
                    {
                        route: c.am.OPEN_SOURCE,
                        linkClicked: "open_source",
                        title: d.Z.Messages.NAVIGATION_OPEN_SOURCE,
                    },
                    {
                        route: c.am.PARTNERS,
                        linkClicked: "partners",
                        title: d.Z.Messages.NAVIGATION_PARTNERS,
                        external: !0,
                    },
                    {
                        route: c.am.HYPESQUAD,
                        linkClicked: "hypesquad",
                        title: d.Z.Messages.NAVIGATION_HYPESQUAD,
                        external: !0,
                    },
                    {
                        route: c.am.GUIDELINES,
                        linkClicked: "guidelines",
                        title: d.Z.Messages.NAVIGATION_GUIDELINES,
                        external: !0,
                    },
                ],
            },
            {
                title: d.Z.Messages.NAVIGATION_SUPPORT,
                links: [
                    {
                        route: "//support.discord.com/hc/".concat(e),
                        linkClicked: "helpandsupport",
                        title: d.Z.Messages.NAVIGATION_HELP_AND_SUPPORT,
                        external: !0,
                    },
                    {
                        route: c.yX.STATUS,
                        linkClicked: "status",
                        title: d.Z.Messages.NAVIGATION_STATUS,
                        external: !0,
                    },
                    {
                        route: c.am.SAFETY_LANDING,
                        linkClicked: "safetycenter",
                        title: d.Z.Messages.NAVIGATION_SAFETY_CENTER,
                        external: !0,
                    },
                ],
            },
        ]).map((e) =>
            null != e.links
                ? (0, r.jsx)(
                      o.Z,
                      {
                          title: e.title,
                          links: e.links,
                          isOpen: f === e.title,
                          isMobile: a,
                          avoidRouter: m,
                          TrackClick: u,
                          onClose: this.closeSubNav,
                          onOpen: this.openSubNav,
                      },
                      e.title,
                  )
                : e.external && null != e.route
                  ? (0, r.jsx)(
                        "li",
                        {
                            className: s.listItemInactive,
                            role: "none",
                            children: (0, r.jsx)(u, {
                                className: s.mainNavLink,
                                eventName: N,
                                data: e.linkClicked ? { linkClicked: e.linkClicked } : {},
                                href: e.route,
                                rel: "me",
                                children: e.title,
                            }),
                        },
                        "external_link_".concat(e.route),
                    )
                  : null != e.route
                    ? (0, r.jsx)(
                          "li",
                          {
                              className: t(e.route) ? s.listItemActive : s.listItemInactive,
                              role: "none",
                              children: (0, r.jsx)(i.Z, {
                                  avoidRouter: m,
                                  to: e.route,
                                  from: c.j_.MAIN_NAVIGATION_MENU,
                                  tabIndex: n ? 0 : -1,
                                  role: "menuitem",
                                  children: (0, r.jsx)(u, {
                                      tag: "span",
                                      className: s.mainNavLink,
                                      eventName: N,
                                      data: { linkClicked: e.linkClicked },
                                      children: e.title,
                                  }),
                              }),
                          },
                          "link_".concat(e.route),
                      )
                    : [],
        );
    }
    constructor(...e) {
        super(...e),
            u(this, "state", { sectionShown: null }),
            u(this, "closeSubNav", () => {
                let { sectionShown: e } = this.state;
                null !== e && this.setState({ sectionShown: null });
            }),
            u(this, "openSubNav", (e) => {
                let { sectionShown: t } = this.state;
                t !== e && this.setState({ sectionShown: e });
            });
    }
}
u(m, "defaultProps", {
    isMobile: !1,
    isVisible: !0,
});
