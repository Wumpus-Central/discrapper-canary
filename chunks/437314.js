n.d(t, {
    Z: () => C,
    j: () => _
}),
    n(411104),
    n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(748780),
    s = n(442837),
    o = n(481060),
    c = n(540059),
    d = n(922611),
    u = n(210887),
    h = n(981631),
    m = n(388032),
    p = n(66116);
function g(e, t, n) {
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
var _ = (((i = {}).SECTION_NO_RESULTS = 'SECTION_NO_RESULTS'), i);
let f = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(900933),
            darkSrc: n(67764),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, l.jsxs)(r.Fragment, {
                    children: [
                        (0, l.jsx)(o.OZU, { note: m.intl.string(m.t.Y4vMY2) }),
                        (0, l.jsx)(o.zxk, {
                            className: p.button,
                            onClick: e,
                            children: m.intl.string(m.t.w5uwoK)
                        })
                    ]
                })
        },
        SECTION_ONLINE: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, l.jsx)(o.OZU, { note: m.intl.string(m.t.v7HbiY) })
        },
        SECTION_BLOCKED: {
            lightSrc: n(459505),
            darkSrc: n(356634),
            width: 433,
            height: 232,
            renderContent: () => (0, l.jsx)(o.OZU, { note: m.intl.string(m.t['9xdyWF']) })
        },
        SECTION_PENDING: {
            lightSrc: n(979770),
            darkSrc: n(138715),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, l.jsxs)('div', {
                    className: p.emptyStateContainer,
                    children: [
                        (0, l.jsx)(o.OZU, { note: m.intl.string(m.t['aCYQ+P']) }),
                        null != e &&
                            (0, l.jsx)(o.zxk, {
                                color: o.zxk.Colors.PRIMARY,
                                look: o.zxk.Looks.OUTLINED,
                                size: o.zxk.Sizes.TINY,
                                onClick: e,
                                className: p.spamButton,
                                children: (0, l.jsx)(o.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: t ? m.intl.string(m.t.R40bU1) : m.intl.string(m.t.rXl8fn)
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
            renderContent: () => (0, l.jsx)(o.OZU, { note: m.intl.string(m.t['vgI/EB']) })
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, l.jsx)(o.OZU, { note: m.intl.string(m.t['7sW4h4']) })
        }
    }),
    E = (e) => {
        let { theme: t } = e,
            n = m.intl.string(m.t['oi+B4u']),
            i = f.SECTION_ALL,
            a = (0, c.Q3)('AddFriendEmpty');
        return (0, l.jsx)(r.Fragment, {
            children: (0, l.jsxs)(o.ubH, {
                theme: t,
                children: [
                    !a &&
                        (0, l.jsx)(o.oxh, {
                            width: i.width,
                            height: i.height,
                            lightSrc: i.lightSrc,
                            darkSrc: i.darkSrc
                        }),
                    (0, l.jsx)(o.OZU, { note: n })
                ]
            })
        });
    };
class I extends r.PureComponent {
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            i = { opacity: this.state.opacity },
            r = (function (e) {
                switch (e) {
                    case h.pJs.ADD_FRIEND:
                    case h.pJs.ALL:
                        return f.SECTION_ALL;
                    case h.pJs.ONLINE:
                        return f.SECTION_ONLINE;
                    case h.pJs.PENDING:
                        return f.SECTION_PENDING;
                    case h.pJs.SUGGESTIONS:
                        return f.SECTION_SUGGESTIONS;
                    case h.pJs.BLOCKED:
                        return f.SECTION_BLOCKED;
                    case 'SECTION_NO_RESULTS':
                        return f.SECTION_NO_RESULTS;
                    default:
                        throw Error('FriendsEmptyState: Invalid empty state');
                }
            })(e);
        return e === h.pJs.ADD_FRIEND
            ? (0, l.jsx)(a.Z.div, {
                  className: p.friendsEmpty,
                  style: i,
                  children: (0, l.jsx)(E, { theme: n })
              })
            : (0, l.jsx)(a.Z.div, {
                  className: p.friendsEmpty,
                  style: i,
                  children: (0, l.jsxs)(o.ubH, {
                      theme: n,
                      children: [
                          !this.isDesktopVisualRefreshEnabled &&
                              (0, l.jsx)(o.oxh, {
                                  width: r.width,
                                  height: r.height,
                                  lightSrc: r.lightSrc,
                                  darkSrc: r.darkSrc
                              }),
                          r.renderContent(t, this.isStealthRemediationEnabled)
                      ]
                  })
              });
    }
    constructor(...e) {
        super(...e),
            g(this, 'isStealthRemediationEnabled', (0, d.Do)({ location: 'FriendsEmptyState' })),
            g(this, 'isDesktopVisualRefreshEnabled', (0, c.i9)('FriendsEmptyState')),
            g(this, 'state', { opacity: new a.Z.Value(1) }),
            g(this, 'componentWillEnter', (e) => {
                this.state.opacity.setValue(0),
                    a.Z.timing(this.state.opacity, {
                        toValue: 1,
                        duration: 250
                    }).start(e);
            }),
            g(this, 'componentWillLeave', (e) => {
                a.Z.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 250
                }).start(e);
            });
    }
}
let C = s.ZP.connectStores([u.Z], () => ({ theme: u.Z.theme }), { forwardRef: !0 })(I);
