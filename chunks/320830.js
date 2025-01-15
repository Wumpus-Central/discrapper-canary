n(47120);
var i = n(200651),
    r = n(192379),
    s = n(954955),
    l = n.n(s),
    o = n(748780),
    a = n(873546),
    c = n(477690),
    d = n(481060),
    u = n(624138),
    h = n(315257);
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
let m = (0, u.Mg)(c.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    f = {
        START: 0,
        END: 1
    },
    p = {
        friction: 10,
        tension: 130
    };
t.Z = function (e) {
    return class extends r.Component {
        componentDidMount() {
            !a.tq && (window.addEventListener('resize', this.handleResizeDebounced), this.handleResize());
        }
        componentWillUnmount() {
            clearTimeout(this.timeout), window.removeEventListener('resize', this.handleResizeDebounced);
        }
        componentWillAppear(e) {
            this.state.shouldAnimate ? this.animateTo(f.END, e) : e();
        }
        componentWillEnter(e) {
            this.state.shouldAnimate ? (clearTimeout(this.timeout), (this.timeout = setTimeout(() => this.animateTo(f.END, e), 40))) : e();
        }
        componentWillLeave(e) {
            this.state.shouldAnimate ? this.animateTo(f.START, e) : e();
        }
        animateTo(e, t) {
            o.Z.spring(this.anim, {
                toValue: e,
                ...p
            }).start(t);
        }
        getAnimatedStyle(e) {
            return this.state.shouldAnimate
                ? {
                      opacity: this.anim,
                      transform: e
                          ? void 0
                          : [
                                {
                                    scale: this.anim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1.05, 1]
                                    })
                                },
                                {
                                    translateY: this.anim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['-70px', '0px']
                                    })
                                },
                                { translateZ: 0 }
                            ]
                  }
                : null;
        }
        render() {
            return (0, i.jsx)('div', {
                className: h.wrapper,
                children: (0, i.jsx)(d.AccessibilityPreferencesContext.Consumer, {
                    children: (t) => {
                        let { reducedMotion: n } = t;
                        return (0, i.jsx)(o.Z.div, {
                            style: this.getAnimatedStyle(n.enabled),
                            children: (0, i.jsx)(e, { ...this.props })
                        });
                    }
                })
            });
        }
        constructor(...e) {
            super(...e),
                g(this, 'timeout', void 0),
                g(this, 'anim', new o.Z.Value(f.START)),
                g(this, 'state', { shouldAnimate: !a.tq }),
                g(this, 'handleResize', () => {
                    let e = window.innerWidth > m;
                    !this.state.shouldAnimate && e && this.anim.setValue(f.END), this.setState({ shouldAnimate: e });
                }),
                g(this, 'handleResizeDebounced', l()(this.handleResize, 60));
        }
    };
};
