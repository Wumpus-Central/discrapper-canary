n.d(t, { Z: () => C }), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(748780),
    c = n(846519),
    d = n(481060),
    u = n(585483),
    _ = n(981631),
    E = n(388032),
    h = n(159381);
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
let I = {
    friction: 15,
    tension: 100
};
class m extends (i = r.PureComponent) {
    componentDidMount() {
        this.setState({ shown: !0 }), u.S.subscribe(_.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), u.S.unsubscribe(_.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentDidUpdate() {
        let { hasQuery: e } = this.props;
        e || this.springTo(0);
    }
    springTo(e) {
        let { reducedMotion: t } = this.context;
        !0 !== t.enabled &&
            o.Z.spring(this.state.translateY, {
                toValue: Math.min(e, 250),
                ...I
            }).start();
    }
    renderArrowGroup(e) {
        return (0, l.jsxs)('div', {
            className: a()(h.arrowGroup, e),
            children: [
                (0, l.jsx)(o.Z.div, {
                    className: a()(h.arrowContainer, h.horizontal),
                    style: this.getStyle(),
                    children: (0, l.jsx)('img', {
                        alt: '',
                        src: n(403756),
                        className: h.arrowIcon
                    })
                }),
                (0, l.jsx)('div', {
                    className: a()(h.arrowContainer, h.diag1),
                    children: (0, l.jsx)('img', {
                        alt: '',
                        src: n(536404),
                        className: h.arrowIcon
                    })
                }),
                (0, l.jsx)('div', {
                    className: a()(h.arrowContainer, h.diag2),
                    children: (0, l.jsx)('img', {
                        alt: '',
                        src: n(569347),
                        className: h.arrowIcon
                    })
                })
            ]
        });
    }
    renderContent() {
        return (0, l.jsxs)('div', {
            className: h.tutorialMessages,
            children: [
                (0, l.jsx)('div', {
                    className: h.searchMessage,
                    children: E.intl.string(E.t.Mp0IGB)
                }),
                (0, l.jsx)('div', {
                    className: h.selectMessage,
                    children: E.intl.string(E.t['3CbpwM'])
                })
            ]
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, l.jsxs)('div', {
            ref: this.rootRef,
            className: a()(h.tutorial, {
                [h.shown]: t,
                [h.hasQuery]: e
            }),
            children: [this.renderContent(), this.renderArrowGroup(h.__invalid_left), this.renderArrowGroup(h.right)]
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
            p(this, 'state', {
                shown: !1,
                translateY: new o.Z.Value(0)
            }),
            p(this, 'rootRef', r.createRef()),
            p(this, 'focusTimeout', new c.V7()),
            p(this, 'handleResultFocus', (e) => {
                let { node: t } = e;
                this.focusTimeout.start(1, () => {
                    if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                        let { top: e } = this.rootRef.current.getBoundingClientRect(),
                            { top: n } = t.getBoundingClientRect(),
                            i = Math.abs(e - n);
                        this.springTo(i - 118 + 9);
                    } else this.springTo(0);
                });
            });
    }
}
p(m, 'contextType', d.Sfi);
let C = m;
