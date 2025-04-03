a.d(t, { a: () => A }), a(47120), a(653041);
var n = a(200651),
    s = a(192379),
    r = a(557533),
    l = a.n(r),
    i = a(771950),
    o = a(860911),
    c = a(66037),
    d = a(787907),
    u = a(643103),
    p = a(34211),
    _ = a(231338),
    h = a(436620),
    m = a(431138),
    N = a(330711),
    I = a(306222);
function g(e, t, a) {
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
let k = _.j_.MAIN_NAVIGATION_MENU,
    O = () => [
        {
            route: (0, i.L)(_.RK.TWITTER),
            linkClicked: 'twitter',
            alt: "Discord's Twitter",
            img: m.r.ASSET_SOCIAL_TWITTER
        },
        {
            route: _.fK.FACEBOOK_URL,
            linkClicked: 'facebook',
            alt: "Discord's Facebook",
            img: m.r.ASSET_SOCIAL_FACEBOOK
        },
        {
            route: _.fK.INSTAGRAM_URL,
            linkClicked: 'instagram',
            alt: "Discord's Instagram",
            img: m.r.ASSET_SOCIAL_INSTAGRAM
        }
    ];
class A extends s.PureComponent {
    componentDidMount() {
        this.setState({ isAppCompatible: h.KO });
    }
    render() {
        let { className: e, mainContentId: t, skipToContentLabel: a, onChangeLocale: s, TrackClick: r, avoidRouter: i } = this.props;
        return (0, n.jsxs)('header', {
            className: l()(I.header, e),
            children: [
                (0, n.jsxs)('nav', {
                    className: I.headerInner,
                    children: [
                        (0, n.jsxs)('div', {
                            className: I.headerLogo,
                            children: [
                                (0, n.jsx)(r, {
                                    tag: 'div',
                                    eventName: k,
                                    data: { linkClicked: 'logo' },
                                    children: (0, n.jsx)(c.Z, {
                                        avoidRouter: i,
                                        to: _.am.INDEX,
                                        from: _.j_.MAIN_NAVIGATION_MENU,
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
                            children: (0, n.jsx)(p.o, {
                                avoidRouter: i,
                                TrackClick: r,
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
            g(this, 'state', { isAppCompatible: !0 }),
            g(this, 'getAppButton', () => {
                let { token: e, TrackClick: t, authRedirectTo: a } = this.props,
                    { isAppCompatible: s } = this.state,
                    r = (0, o.Ui)(a),
                    l = N.Z.Messages.NAVIGATION_LOGIN;
                return (
                    null != e && ((r = _.$w.ME), (l = N.Z.Messages.NAVIGATION_OPEN)),
                    s
                        ? (0, n.jsx)(
                              'li',
                              {
                                  className: I.listItemInactive,
                                  children: (0, n.jsx)(t, {
                                      eventName: k,
                                      className: I.appButton,
                                      data: {
                                          linkClicked: e ? 'open' : 'login',
                                          googleAnalytics: !0
                                      },
                                      href: r,
                                      children: l
                                  })
                              },
                              'app-button'
                          )
                        : null
                );
            }),
            g(this, 'renderSocialMediaNav', () => {
                let { TrackClick: e } = this.props,
                    t = O().map((t) =>
                        (0, n.jsx)(
                            'li',
                            {
                                className: l()(I.listItemInactive, I.listItemSocialMedia),
                                children: (0, n.jsx)(e, {
                                    eventName: k,
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
