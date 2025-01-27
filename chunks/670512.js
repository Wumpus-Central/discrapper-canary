s(47120);
var n,
    i = s(200651),
    r = s(192379),
    o = s(120356),
    l = s.n(o),
    a = s(748780),
    c = s(846519),
    d = s(481060),
    u = s(585483),
    h = s(981631),
    E = s(388032),
    p = s(159381);
function _(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
let m = {
    friction: 15,
    tension: 100
};
class g extends (n = r.PureComponent) {
    componentDidMount() {
        this.setState({ shown: !0 }), u.S.subscribe(h.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), u.S.unsubscribe(h.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentDidUpdate() {
        let { hasQuery: e } = this.props;
        !e && this.springTo(0);
    }
    springTo(e) {
        let { reducedMotion: t } = this.context;
        !0 !== t.enabled &&
            a.Z.spring(this.state.translateY, {
                toValue: Math.min(e, 250),
                ...m
            }).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)('div', {
            className: l()(p.arrowGroup, e),
            children: [
                (0, i.jsx)(a.Z.div, {
                    className: l()(p.arrowContainer, p.horizontal),
                    style: this.getStyle(),
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: s(403756),
                        className: p.arrowIcon
                    })
                }),
                (0, i.jsx)('div', {
                    className: l()(p.arrowContainer, p.diag1),
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: s(536404),
                        className: p.arrowIcon
                    })
                }),
                (0, i.jsx)('div', {
                    className: l()(p.arrowContainer, p.diag2),
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: s(569347),
                        className: p.arrowIcon
                    })
                })
            ]
        });
    }
    renderContent() {
        return (0, i.jsxs)('div', {
            className: p.tutorialMessages,
            children: [
                (0, i.jsx)('div', {
                    className: p.searchMessage,
                    children: E.intl.string(E.t.Mp0IGB)
                }),
                (0, i.jsx)('div', {
                    className: p.selectMessage,
                    children: E.intl.string(E.t['3CbpwM'])
                })
            ]
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, i.jsxs)('div', {
            ref: this.rootRef,
            className: l()(p.tutorial, {
                [p.shown]: t,
                [p.hasQuery]: e
            }),
            children: [this.renderContent(), this.renderArrowGroup(p.__invalid_left), this.renderArrowGroup(p.right)]
        });
    }
    getStyle() {
        let { reducedMotion: e } = this.context;
        return !0 === e.enabled
            ? {}
            : {
                  opacity: 1,
                  transform: [
                      {
                          translateY: this.state.translateY.interpolate({
                              inputRange: [0, 250],
                              outputRange: ['0px', ''.concat(250, 'px')]
                          })
                      },
                      { translateZ: 0 }
                  ]
              };
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                shown: !1,
                translateY: new a.Z.Value(0)
            }),
            _(this, 'rootRef', r.createRef()),
            _(this, 'focusTimeout', new c.V7()),
            _(this, 'handleResultFocus', (e) => {
                let { node: t } = e;
                this.focusTimeout.start(1, () => {
                    if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                        let { top: e } = this.rootRef.current.getBoundingClientRect(),
                            { top: s } = t.getBoundingClientRect(),
                            n = Math.abs(e - s);
                        this.springTo(n - 118 + 9);
                    } else this.springTo(0);
                });
            });
    }
}
_(g, 'contextType', d.AccessibilityPreferencesContext), (t.Z = g);
