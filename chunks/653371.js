a.d(t, { a: () => g }), a(388685), a(539854);
var n = a(54381),
    r = a(473749),
    s = a(120356),
    l = a.n(s),
    i = a(771950),
    o = a(860911),
    c = a(66037),
    d = a(787907),
    u = a(643103),
    N = a(34211),
    m = a(231338),
    f = a(436620),
    p = a(431138),
    h = a(330711),
    I = a(784912);
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
let k = m.j_.MAIN_NAVIGATION_MENU;
class g extends r.PureComponent {
    componentDidMount() {
        this.setState({ isAppCompatible: f.KO });
    }
    render() {
        let {
            className: e,
            mainContentId: t,
            skipToContentLabel: a,
            onChangeLocale: r,
            TrackClick: s,
            avoidRouter: i,
        } = this.props;
        return (0, n.jsxs)("header", {
            className: l()(I.header, e),
            children: [
                (0, n.jsxs)("nav", {
                    className: I.headerInner,
                    children: [
                        (0, n.jsxs)("div", {
                            className: I.headerLogo,
                            children: [
                                (0, n.jsx)(s, {
                                    tag: "div",
                                    eventName: k,
                                    data: { linkClicked: "logo" },
                                    children: (0, n.jsx)(c.Z, {
                                        avoidRouter: i,
                                        to: m.am.INDEX,
                                        from: m.j_.MAIN_NAVIGATION_MENU,
                                        children: (0, n.jsx)(d.O, {}),
                                    }),
                                }),
                                null != t
                                    ? (0, n.jsx)("a", {
                                          className: I.skipToContent,
                                          href: "#".concat(t),
                                          children: a,
                                      })
                                    : null,
                            ],
                        }),
                        (0, n.jsx)("ul", {
                            className: I.headerNav,
                            children: (0, n.jsx)(N.o, {
                                avoidRouter: i,
                                TrackClick: s,
                                styles: I,
                            }),
                        }),
                        (0, n.jsxs)("ul", {
                            className: I.headerNavRight,
                            children: [this.renderSocialMediaNav(), (0, n.jsx)(u.p, { onChange: r })],
                        }),
                    ],
                }),
                null != t &&
                    (0, n.jsx)("div", {
                        id: t,
                        tabIndex: -1,
                    }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            b(this, "state", { isAppCompatible: !0 }),
            b(this, "getAppButton", () => {
                let { token: e, TrackClick: t, authRedirectTo: a } = this.props,
                    { isAppCompatible: r } = this.state,
                    s = (0, o.Ui)(a),
                    l = h.Z.Messages.NAVIGATION_LOGIN;
                return (
                    null != e && ((s = m.$w.ME), (l = h.Z.Messages.NAVIGATION_OPEN)),
                    r
                        ? (0, n.jsx)(
                              "li",
                              {
                                  className: I.listItemInactive,
                                  children: (0, n.jsx)(t, {
                                      eventName: k,
                                      className: I.appButton,
                                      data: {
                                          linkClicked: e ? "open" : "login",
                                          googleAnalytics: !0,
                                      },
                                      href: s,
                                      children: l,
                                  }),
                              },
                              "app-button",
                          )
                        : null
                );
            }),
            b(this, "renderSocialMediaNav", () => {
                let { TrackClick: e } = this.props,
                    t = [
                        {
                            route: (0, i.L)(m.RK.TWITTER),
                            linkClicked: "twitter",
                            alt: "Discord's Twitter",
                            img: p.r.ASSET_SOCIAL_TWITTER,
                        },
                        {
                            route: m.fK.FACEBOOK_URL,
                            linkClicked: "facebook",
                            alt: "Discord's Facebook",
                            img: p.r.ASSET_SOCIAL_FACEBOOK,
                        },
                        {
                            route: m.fK.INSTAGRAM_URL,
                            linkClicked: "instagram",
                            alt: "Discord's Instagram",
                            img: p.r.ASSET_SOCIAL_INSTAGRAM,
                        },
                    ].map((t) =>
                        (0, n.jsx)(
                            "li",
                            {
                                className: l()(I.listItemInactive, I.listItemSocialMedia),
                                children: (0, n.jsx)(e, {
                                    eventName: k,
                                    className: I.rightNavLink,
                                    data: { linkClicked: t.linkClicked },
                                    href: t.route,
                                    rel: "me",
                                    target: "_blank",
                                    children: (0, n.jsx)("img", {
                                        src: t.img,
                                        alt: t.alt,
                                    }),
                                }),
                            },
                            t.route,
                        ),
                    ),
                    a = this.getAppButton();
                return null != a && t.push(a), t;
            });
    }
}
