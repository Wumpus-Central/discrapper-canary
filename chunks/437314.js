n.d(t, {
    j: function () {
        return i;
    }
}),
    n(411104),
    n(47120);
var i,
    r = n(200651),
    l = n(192379),
    a = n(748780),
    s = n(442837),
    o = n(481060),
    c = n(922611),
    d = n(210887),
    u = n(981631),
    h = n(388032),
    m = n(446501);
function p(e, t, n) {
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
(i || (i = {})).SECTION_NO_RESULTS = 'SECTION_NO_RESULTS';
let g = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(900933),
            darkSrc: n(67764),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, r.jsxs)(l.Fragment, {
                    children: [
                        (0, r.jsx)(o.EmptyStateText, { note: h.intl.string(h.t['oi+B4u']) }),
                        (0, r.jsx)(o.Button, {
                            className: m.button,
                            onClick: e,
                            children: h.intl.string(h.t.w5uwoK)
                        })
                    ]
                })
        },
        SECTION_ONLINE: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, r.jsx)(o.EmptyStateText, { note: h.intl.string(h.t['1ESycn']) })
        },
        SECTION_BLOCKED: {
            lightSrc: n(459505),
            darkSrc: n(356634),
            width: 433,
            height: 232,
            renderContent: () => (0, r.jsx)(o.EmptyStateText, { note: h.intl.string(h.t.eC6imZ) })
        },
        SECTION_PENDING: {
            lightSrc: n(979770),
            darkSrc: n(138715),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, r.jsxs)('div', {
                    className: m.emptyStateContainer,
                    children: [
                        (0, r.jsx)(o.EmptyStateText, { note: h.intl.string(h.t['7uvAKS']) }),
                        null != e &&
                            (0, r.jsx)(o.Button, {
                                color: o.Button.Colors.PRIMARY,
                                look: o.Button.Looks.OUTLINED,
                                size: o.Button.Sizes.TINY,
                                onClick: e,
                                className: m.spamButton,
                                children: (0, r.jsx)(o.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: t ? h.intl.string(h.t.R40bU1) : h.intl.string(h.t.rXl8fn)
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
            renderContent: () => (0, r.jsx)(o.EmptyStateText, { note: h.intl.string(h.t['1AUTCA']) })
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(55346),
            darkSrc: n(917847),
            width: 421,
            height: 218,
            renderContent: () => (0, r.jsx)(o.EmptyStateText, { note: h.intl.string(h.t['+Zg0lZ']) })
        }
    }),
    f = (e) => {
        let { theme: t } = e,
            n = h.intl.string(h.t['oi+B4u']),
            i = g.SECTION_ALL;
        return (0, r.jsx)(l.Fragment, {
            children: (0, r.jsxs)(o.EmptyState, {
                theme: t,
                children: [
                    (0, r.jsx)(o.EmptyStateImage, {
                        width: i.width,
                        height: i.height,
                        lightSrc: i.lightSrc,
                        darkSrc: i.darkSrc
                    }),
                    (0, r.jsx)(o.EmptyStateText, { note: n })
                ]
            })
        });
    };
class _ extends l.PureComponent {
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            i = { opacity: this.state.opacity },
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
                    case u.pJs.BLOCKED:
                        return g.SECTION_BLOCKED;
                    case 'SECTION_NO_RESULTS':
                        return g.SECTION_NO_RESULTS;
                    default:
                        throw Error('FriendsEmptyState: Invalid empty state');
                }
            })(e);
        return e === u.pJs.ADD_FRIEND
            ? (0, r.jsx)(a.Z.div, {
                  className: m.friendsEmpty,
                  style: i,
                  children: (0, r.jsx)(f, { theme: n })
              })
            : (0, r.jsx)(a.Z.div, {
                  className: m.friendsEmpty,
                  style: i,
                  children: (0, r.jsxs)(o.EmptyState, {
                      theme: n,
                      children: [
                          (0, r.jsx)(o.EmptyStateImage, {
                              width: l.width,
                              height: l.height,
                              lightSrc: l.lightSrc,
                              darkSrc: l.darkSrc
                          }),
                          l.renderContent(t, this.isStealthRemediationEnabled)
                      ]
                  })
              });
    }
    constructor(...e) {
        super(...e),
            p(this, 'isStealthRemediationEnabled', (0, c.Do)({ location: 'FriendsEmptyState' })),
            p(this, 'state', { opacity: new a.Z.Value(1) }),
            p(this, 'componentWillEnter', (e) => {
                this.state.opacity.setValue(0),
                    a.Z.timing(this.state.opacity, {
                        toValue: 1,
                        duration: 250
                    }).start(e);
            }),
            p(this, 'componentWillLeave', (e) => {
                a.Z.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 250
                }).start(e);
            });
    }
}
t.Z = s.ZP.connectStores([d.Z], () => ({ theme: d.Z.theme }), { forwardRef: !0 })(_);
