a.d(t, { a: () => O }), a(47120), a(653041);
var n = a(200651),
    s = a(192379),
    l = a(557533),
    i = a.n(l),
    r = a(771950),
    o = a(860911),
    c = a(66037),
    d = a(787907),
    u = a(643103),
    _ = a(34211),
    N = a(231338),
    h = a(436620),
    m = a(431138),
    p = a(330711),
    I = a(790730);
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
let A = N.j_.MAIN_NAVIGATION_MENU,
    g = () => [
        {
            route: (0, r.L)(N.RK.TWITTER),
            linkClicked: 'twitter',
            alt: "Discord's Twitter",
            img: m.r.ASSET_SOCIAL_TWITTER
        },
        {
            route: N.fK.FACEBOOK_URL,
            linkClicked: 'facebook',
            alt: "Discord's Facebook",
            img: m.r.ASSET_SOCIAL_FACEBOOK
        },
        {
            route: N.fK.INSTAGRAM_URL,
            linkClicked: 'instagram',
            alt: "Discord's Instagram",
            img: m.r.ASSET_SOCIAL_INSTAGRAM
        }
    ];
class O extends s.PureComponent {
    componentDidMount() {
        this.setState({ isAppCompatible: h.KO });
    }
    render() {
        let { className: e, mainContentId: t, skipToContentLabel: a, onChangeLocale: s, TrackClick: l, avoidRouter: r } = this.props;
        return (0, n.jsxs)('header', {
            className: i()(I.header, e),
            children: [
                (0, n.jsxs)('nav', {
                    className: I.headerInner,
                    children: [
                        (0, n.jsxs)('div', {
                            className: I.headerLogo,
                            children: [
                                (0, n.jsx)(l, {
                                    tag: 'div',
                                    eventName: A,
                                    data: { linkClicked: 'logo' },
                                    children: (0, n.jsx)(c.Z, {
                                        avoidRouter: r,
                                        to: N.am.INDEX,
                                        from: N.j_.MAIN_NAVIGATION_MENU,
                                        children: (0, n.jsx)(d.O, {})
                                    })
                                }),
                                null != t
                                    ? (0, n.jsx)('a', {
                                          className: I.skipToContent,
                                          href: '#'.concat(t),
                                          children: a
                                      })
                                    : null
                            ]
                        }),
                        (0, n.jsx)('ul', {
                            className: I.headerNav,
                            children: (0, n.jsx)(_.o, {
                                avoidRouter: r,
                                TrackClick: l,
                                styles: I
                            })
                        }),
                        (0, n.jsxs)('ul', {
                            className: I.headerNavRight,
                            children: [this.renderSocialMediaNav(), (0, n.jsx)(u.p, { onChange: s })]
                        })
                    ]
                }),
                null != t &&
                    (0, n.jsx)('div', {
                        id: t,
                        tabIndex: -1
                    })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            k(this, 'state', { isAppCompatible: !0 }),
            k(this, 'getAppButton', () => {
                let { token: e, TrackClick: t, authRedirectTo: a } = this.props,
                    { isAppCompatible: s } = this.state,
                    l = (0, o.Ui)(a),
                    i = p.Z.Messages.NAVIGATION_LOGIN;
                return (
                    null != e && ((l = N.$w.ME), (i = p.Z.Messages.NAVIGATION_OPEN)),
                    s
                        ? (0, n.jsx)(
                              'li',
                              {
                                  className: I.listItemInactive,
                                  children: (0, n.jsx)(t, {
                                      eventName: A,
                                      className: I.appButton,
                                      data: {
                                          linkClicked: e ? 'open' : 'login',
                                          googleAnalytics: !0
                                      },
                                      href: l,
                                      children: i
                                  })
                              },
                              'app-button'
                          )
                        : null
                );
            }),
            k(this, 'renderSocialMediaNav', () => {
                let { TrackClick: e } = this.props,
                    t = g().map((t) =>
                        (0, n.jsx)(
                            'li',
                            {
                                className: i()(I.listItemInactive, I.listItemSocialMedia),
                                children: (0, n.jsx)(e, {
                                    eventName: A,
                                    className: I.rightNavLink,
                                    data: { linkClicked: t.linkClicked },
                                    href: t.route,
                                    rel: 'me',
                                    target: '_blank',
                                    children: (0, n.jsx)('img', {
                                        src: t.img,
                                        alt: t.alt
                                    })
                                })
                            },
                            t.route
                        )
                    ),
                    a = this.getAppButton();
                return null != a && t.push(a), t;
            });
    }
}
