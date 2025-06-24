n.d(t, {
    Z: () => _,
    j: () => f
}),
    n(415506),
    n(388685);
var r,
    i = n(255367),
    l = n(73800),
    a = n(748780),
    o = n(442837),
    s = n(481060),
    c = n(210887),
    u = n(981631),
    d = n(388032),
    p = n(332295);
function h(e, t, n) {
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
var f = (((r = {}).SECTION_NO_RESULTS = 'SECTION_NO_RESULTS'), r);
let g = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(900933),
            darkSrc: n(67764),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(s.OZU, { note: d.intl.string(d.t.Y4vMY2) }),
                        (0, i.jsx)(s.zxk, {
                            className: p.button,
                            onClick: e,
                            children: d.intl.string(d.t.w5uwoK)
                        })
                    ]
                })
        },
        SECTION_ONLINE: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, i.jsx)(s.OZU, { note: d.intl.string(d.t.v7HbiY) })
        },
        SECTION_BLOCKED: {
            lightSrc: n(459505),
            darkSrc: n(356634),
            width: 433,
            height: 232,
            renderContent: () => (0, i.jsx)(s.OZU, { note: d.intl.string(d.t['9xdyWF']) })
        },
        SECTION_PENDING: {
            lightSrc: n(979770),
            darkSrc: n(138715),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, i.jsxs)('div', {
                    className: p.emptyStateContainer,
                    children: [
                        (0, i.jsx)(s.OZU, { note: d.intl.string(d.t['aCYQ+P']) }),
                        null != e &&
                            (0, i.jsx)(s.zxk, {
                                color: s.zxk.Colors.PRIMARY,
                                look: s.zxk.Looks.OUTLINED,
                                size: s.zxk.Sizes.TINY,
                                onClick: e,
                                className: p.spamButton,
                                children: (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: t ? d.intl.string(d.t.R40bU1) : d.intl.string(d.t.rXl8fn)
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
            renderContent: () => (0, i.jsx)(s.OZU, { note: d.intl.string(d.t['vgI/EB']) })
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, i.jsx)(s.OZU, { note: d.intl.string(d.t['7sW4h4']) })
        }
    }),
    m = (e) => {
        let { theme: t } = e,
            n = d.intl.string(d.t['oi+B4u']);
        return (0, i.jsx)(s.ubH, {
            theme: t,
            children: (0, i.jsx)(s.OZU, { note: n })
        });
    };
class b extends l.PureComponent {
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            r = { opacity: this.state.opacity },
            l = (function (e) {
                switch (e) {
                    case u.pJs.ADD_FRIEND:
                    case u.pJs.ALL:
                        return g.SECTION_ALL;
                    case u.pJs.ONLINE:
                        return g.SECTION_ONLINE;
                    case u.pJs.PENDING:
                        return g.SECTION_PENDING;
                    case u.pJs.SUGGESTIONS:
                        return g.SECTION_SUGGESTIONS;
                    case 'SECTION_NO_RESULTS':
                        return g.SECTION_NO_RESULTS;
                    default:
                        throw Error('FriendsEmptyState: Invalid empty state');
                }
            })(e);
        return e === u.pJs.ADD_FRIEND
            ? (0, i.jsx)(a.Z.div, {
                  className: p.friendsEmpty,
                  style: r,
                  children: (0, i.jsx)(m, { theme: n })
              })
            : (0, i.jsx)(a.Z.div, {
                  className: p.friendsEmpty,
                  style: r,
                  children: (0, i.jsx)(s.ubH, {
                      theme: n,
                      children: l.renderContent(t)
                  })
              });
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', { opacity: new a.Z.Value(1) }),
            h(this, 'componentWillEnter', (e) => {
                this.state.opacity.setValue(0),
                    a.Z.timing(this.state.opacity, {
                        toValue: 1,
                        duration: 250
                    }).start(e);
            }),
            h(this, 'componentWillLeave', (e) => {
                a.Z.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 250
                }).start(e);
            });
    }
}
let _ = o.ZP.connectStores([c.Z], () => ({ theme: c.Z.theme }), { forwardRef: !0 })(b);
