n.d(t, {
    Z: () => E,
    j: () => g
}),
    n(411104),
    n(47120);
var r,
    i = n(200651),
    l = n(192379),
    a = n(748780),
    o = n(442837),
    s = n(481060),
    c = n(540059),
    u = n(210887),
    d = n(981631),
    p = n(388032),
    h = n(332295);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var g = (((r = {}).SECTION_NO_RESULTS = 'SECTION_NO_RESULTS'), r);
let m = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(900933),
            darkSrc: n(67764),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(s.OZU, { note: p.NW.string(p.t.Y4vMY2) }),
                        (0, i.jsx)(s.zxk, {
                            className: h.button,
                            onClick: e,
                            children: p.NW.string(p.t.w5uwoK)
                        })
                    ]
                })
        },
        SECTION_ONLINE: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, i.jsx)(s.OZU, { note: p.NW.string(p.t.v7HbiY) })
        },
        SECTION_BLOCKED: {
            lightSrc: n(459505),
            darkSrc: n(356634),
            width: 433,
            height: 232,
            renderContent: () => (0, i.jsx)(s.OZU, { note: p.NW.string(p.t['9xdyWF']) })
        },
        SECTION_PENDING: {
            lightSrc: n(979770),
            darkSrc: n(138715),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, i.jsxs)('div', {
                    className: h.emptyStateContainer,
                    children: [
                        (0, i.jsx)(s.OZU, { note: p.NW.string(p.t['aCYQ+P']) }),
                        null != e &&
                            (0, i.jsx)(s.zxk, {
                                color: s.zxk.Colors.PRIMARY,
                                look: s.zxk.Looks.OUTLINED,
                                size: s.zxk.Sizes.TINY,
                                onClick: e,
                                className: h.spamButton,
                                children: (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: t ? p.NW.string(p.t.R40bU1) : p.NW.string(p.t.rXl8fn)
                                })
                            })
                    ]
                })
        },
        SECTION_SUGGESTIONS: {
            lightSrc: n(979770),
            darkSrc: n(138715),
            width: 415,
            height: 200,
            renderContent: () => (0, i.jsx)(s.OZU, { note: p.NW.string(p.t['vgI/EB']) })
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, i.jsx)(s.OZU, { note: p.NW.string(p.t['7sW4h4']) })
        }
    }),
    b = (e) => {
        let { theme: t } = e,
            n = p.NW.string(p.t['oi+B4u']),
            r = m.SECTION_ALL,
            l = (0, c.Q3)('AddFriendEmpty');
        return (0, i.jsxs)(s.ubH, {
            theme: t,
            children: [
                !l &&
                    (0, i.jsx)(s.oxh, {
                        width: r.width,
                        height: r.height,
                        lightSrc: r.lightSrc,
                        darkSrc: r.darkSrc
                    }),
                (0, i.jsx)(s.OZU, { note: n })
            ]
        });
    };
class _ extends l.PureComponent {
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            r = { opacity: this.state.opacity },
            l = (function (e) {
                switch (e) {
                    case d.pJs.ADD_FRIEND:
                    case d.pJs.ALL:
                        return m.SECTION_ALL;
                    case d.pJs.ONLINE:
                        return m.SECTION_ONLINE;
                    case d.pJs.PENDING:
                        return m.SECTION_PENDING;
                    case d.pJs.SUGGESTIONS:
                        return m.SECTION_SUGGESTIONS;
                    case 'SECTION_NO_RESULTS':
                        return m.SECTION_NO_RESULTS;
                    default:
                        throw Error('FriendsEmptyState: Invalid empty state');
                }
            })(e);
        return e === d.pJs.ADD_FRIEND
            ? (0, i.jsx)(a.Z.div, {
                  className: h.friendsEmpty,
                  style: r,
                  children: (0, i.jsx)(b, { theme: n })
              })
            : (0, i.jsx)(a.Z.div, {
                  className: h.friendsEmpty,
                  style: r,
                  children: (0, i.jsxs)(s.ubH, {
                      theme: n,
                      children: [
                          !this.isDesktopVisualRefreshEnabled &&
                              (0, i.jsx)(s.oxh, {
                                  width: l.width,
                                  height: l.height,
                                  lightSrc: l.lightSrc,
                                  darkSrc: l.darkSrc
                              }),
                          l.renderContent(t)
                      ]
                  })
              });
    }
    constructor(...e) {
        super(...e),
            f(this, 'isDesktopVisualRefreshEnabled', (0, c.i9)('FriendsEmptyState')),
            f(this, 'state', { opacity: new a.Z.Value(1) }),
            f(this, 'componentWillEnter', (e) => {
                this.state.opacity.setValue(0),
                    a.Z.timing(this.state.opacity, {
                        toValue: 1,
                        duration: 250
                    }).start(e);
            }),
            f(this, 'componentWillLeave', (e) => {
                a.Z.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 250
                }).start(e);
            });
    }
}
let E = o.ZP.connectStores([u.Z], () => ({ theme: u.Z.theme }), { forwardRef: !0 })(_);
