a.d(t, { C: () => _ });
var s = a(627968),
    l = a(64700),
    r = a(877227),
    i = a(137540),
    n = a(112895),
    o = a(818348),
    c = a(855522);
let d = o.sE.MAIN_NAVIGATION_MENU;
class _ extends l.PureComponent {
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
            t = (0, r.dI)(this.context.router),
            { isMobile: a, isVisible: l, styles: _, TrackClick: N, avoidRouter: A } = this.props,
            { sectionShown: u } = this.state;
        return ((e = null != c.A ? c.A.getLocale().toLowerCase() : ""),
        [
            { route: o.Tk.DOWNLOAD, linkClicked: "download", title: c.A.Messages.NAVIGATION_DOWNLOAD },
            { route: o.Tk.NITRO, linkClicked: "nitro", title: c.A.Messages.NAVIGATION_NITRO, external: !0 },
            { route: o.Tk.JOBS, linkClicked: "jobs", title: c.A.Messages.NAVIGATION_JOBS, external: !0 },
            {
                title: c.A.Messages.NAVIGATION_DEVELOPERS,
                links: [
                    {
                        route: o.Tk.RICH_PRESENCE,
                        linkClicked: "rich_presence",
                        title: c.A.Messages.NAVIGATION_RICH_PRESENCE,
                    },
                    {
                        route: o.Tk.VERIFICATION,
                        linkClicked: "verification",
                        title: c.A.Messages.NAVIGATION_VERIFICATION,
                        external: !0,
                    },
                    {
                        route: o.qF.DEV_PORTAL,
                        linkClicked: "developers",
                        title: c.A.Messages.NAVIGATION_DEVELOPER_PORTAL,
                        external: !0,
                    },
                    {
                        route: o.qF.DEV_PORTAL_DOCUMENTATION,
                        linkClicked: "documentation",
                        title: c.A.Messages.NAVIGATION_DOCUMENTATION,
                        external: !0,
                    },
                ],
            },
            {
                title: c.A.Messages.NAVIGATION_COMMUNITY,
                links: [
                    { route: o.Tk.OPEN_SOURCE, linkClicked: "open_source", title: c.A.Messages.NAVIGATION_OPEN_SOURCE },
                    {
                        route: o.Tk.PARTNERS,
                        linkClicked: "partners",
                        title: c.A.Messages.NAVIGATION_PARTNERS,
                        external: !0,
                    },
                    {
                        route: o.Tk.HYPESQUAD,
                        linkClicked: "hypesquad",
                        title: c.A.Messages.NAVIGATION_HYPESQUAD,
                        external: !0,
                    },
                    {
                        route: o.Tk.GUIDELINES,
                        linkClicked: "guidelines",
                        title: c.A.Messages.NAVIGATION_GUIDELINES,
                        external: !0,
                    },
                ],
            },
            {
                title: c.A.Messages.NAVIGATION_SUPPORT,
                links: [
                    {
                        route: `//support.discord.com/hc/${e}`,
                        linkClicked: "helpandsupport",
                        title: c.A.Messages.NAVIGATION_HELP_AND_SUPPORT,
                        external: !0,
                    },
                    { route: o.qF.STATUS, linkClicked: "status", title: c.A.Messages.NAVIGATION_STATUS, external: !0 },
                    {
                        route: o.Tk.SAFETY_LANDING,
                        linkClicked: "safetycenter",
                        title: c.A.Messages.NAVIGATION_SAFETY_CENTER,
                        external: !0,
                    },
                ],
            },
        ]).map((e) =>
            null != e.links
                ? (0, s.jsx)(
                      n.A,
                      {
                          title: e.title,
                          links: e.links,
                          isOpen: u === e.title,
                          isMobile: a,
                          avoidRouter: A,
                          TrackClick: N,
                          onClose: this.closeSubNav,
                          onOpen: this.openSubNav,
                      },
                      e.title,
                  )
                : e.external && null != e.route
                  ? (0, s.jsx)(
                        "li",
                        {
                            className: _.listItemInactive,
                            role: "none",
                            children: (0, s.jsx)(N, {
                                className: _.mainNavLink,
                                eventName: d,
                                data: e.linkClicked ? { linkClicked: e.linkClicked } : {},
                                href: e.route,
                                rel: "me",
                                children: e.title,
                            }),
                        },
                        `external_link_${e.route}`,
                    )
                  : null != e.route
                    ? (0, s.jsx)(
                          "li",
                          {
                              className: t(e.route) ? _.listItemActive : _.listItemInactive,
                              role: "none",
                              children: (0, s.jsx)(i.A, {
                                  avoidRouter: A,
                                  to: e.route,
                                  from: o.sE.MAIN_NAVIGATION_MENU,
                                  tabIndex: l ? 0 : -1,
                                  role: "menuitem",
                                  children: (0, s.jsx)(N, {
                                      tag: "span",
                                      className: _.mainNavLink,
                                      eventName: d,
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
