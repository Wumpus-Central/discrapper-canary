n.d(t, { Z: () => b }), n(388685);
var r,
    i = n(200651),
    o = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(748780),
    c = n(846519),
    u = n(481060),
    d = n(585483),
    p = n(981631),
    h = n(388032),
    _ = n(762447);
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
let m = {
    friction: 15,
    tension: 100
};
class g extends (r = o.PureComponent) {
    componentDidMount() {
        this.setState({ shown: !0 }), d.S.subscribe(p.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), d.S.unsubscribe(p.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentDidUpdate() {
        let { hasQuery: e } = this.props;
        e || this.springTo(0);
    }
    springTo(e) {
        let { reducedMotion: t } = this.context;
        !0 !== t.enabled &&
            a.Z.spring(
                this.state.translateY,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                f(e, t, n[t]);
                            });
                    }
                    return e;
                })({ toValue: Math.min(e, 250) }, m)
            ).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)('div', {
            className: s()(_.arrowGroup, e),
            children: [
                (0, i.jsx)(a.Z.div, {
                    className: s()(_.arrowContainer, _.horizontal),
                    style: this.getStyle(),
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: n(403756),
                        className: _.arrowIcon
                    })
                }),
                (0, i.jsx)('div', {
                    className: s()(_.arrowContainer, _.diag1),
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: n(536404),
                        className: _.arrowIcon
                    })
                }),
                (0, i.jsx)('div', {
                    className: s()(_.arrowContainer, _.diag2),
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: n(569347),
                        className: _.arrowIcon
                    })
                })
            ]
        });
    }
    renderContent() {
        return (0, i.jsxs)('div', {
            className: _.tutorialMessages,
            children: [
                (0, i.jsx)('div', {
                    className: _.searchMessage,
                    children: h.NW.string(h.t.Mp0IGB)
                }),
                (0, i.jsx)('div', {
                    className: _.selectMessage,
                    children: h.NW.string(h.t['3CbpwM'])
                })
            ]
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, i.jsxs)('div', {
            ref: this.rootRef,
            className: s()(_.tutorial, {
                [_.shown]: t,
                [_.hasQuery]: e
            }),
            children: [this.renderContent(), this.renderArrowGroup(_.__invalid_left), this.renderArrowGroup(_.right)]
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
            f(this, 'state', {
                shown: !1,
                translateY: new a.Z.Value(0)
            }),
            f(this, 'rootRef', o.createRef()),
            f(this, 'focusTimeout', new c.V7()),
            f(this, 'handleResultFocus', (e) => {
                let { node: t } = e;
                this.focusTimeout.start(1, () => {
                    if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                        let { top: e } = this.rootRef.current.getBoundingClientRect(),
                            { top: n } = t.getBoundingClientRect(),
                            r = Math.abs(e - n);
                        this.springTo(r - 118 + 9);
                    } else this.springTo(0);
                });
            });
    }
}
f(g, 'contextType', u.Sfi);
let b = g;
