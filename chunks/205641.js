n.d(t, { Z: () => x }), n(47120);
var r,
    i,
    s = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(392711),
    d = n.n(c),
    u = n(82923),
    m = n(834404);
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
var p = (((i = p || {})[(i.HOVERING = 0)] = 'HOVERING'), (i[(i.FLYING = 1)] = 'FLYING'), i);
let h = Object.freeze({
    HOVERING: {
        Y_DURATION: 1500,
        Y_VALUE: -5,
        Y_VALUE_MODIFIER: -1,
        FIRE_COUNT: 10,
        FIRE_MIN_INTENSITY_FALLING: 0.8,
        FIRE_MAX_INTENSITY_FALLING: 1,
        FIRE_MIN_INTENSITY_RISING: 1,
        FIRE_MAX_INTENSITY_RISING: 1.2
    },
    FALLING: {
        Y_VALUE: 10,
        FIRE_COUNT: 10,
        FIRE_VALUE: 0.2
    },
    STAGING: {
        DURATION: 500,
        Y_VALUE: 22,
        SHAKE_COUNT: 10,
        SHAKE_INTENSITY: 2,
        FIRE_COUNT: 4,
        FIRE_MIN_INTENSITY: 0.6,
        FIRE_MAX_INTENSITY: 1
    },
    FLYING: {
        DURATION: 500,
        Y_VALUE: -1000,
        Y_EASING: u.Z.Easing.bezier(0.46, 0.01, 1, -0.3),
        X_VALUE: 200,
        X_EASING: u.Z.Easing.bezier(0.65, 0.05, 1, 0.25),
        FIRE_COUNT: 10,
        FIRE_MIN_INTENSITY: 1.2,
        FIRE_MAX_INTENSITY: 1.4,
        OPACITY_VALUE: 0,
        OPACITY_DURATION_DIVIDEND: 2
    }
});
function f(e, t, n, r) {
    return u.Z.sequence(
        d().times(t, (i) =>
            u.Z.timing(e, {
                toValue: r(i),
                duration: n / t
            })
        )
    );
}
class b extends (r = a.Component) {
    componentDidMount() {
        this.startAnimation();
    }
    componentWillUnmount() {
        this.isUnmounted = !0;
    }
    componentDidUpdate(e) {
        this.props.stage !== e.stage && this.startAnimation();
    }
    startAnimation() {
        switch ((null != this.currentAnimation && this.currentAnimation.stop(), this.props.stage)) {
            case 0:
                return this.startHoverAnimate();
            case 1:
                return this.flyAnimate();
        }
    }
    resetAnimation() {
        this.y.setValue(0), this.x.setValue(0), this.opacity.setValue(1), this.fireScale.setValue(1);
    }
    startHoverAnimate() {
        this.resetAnimation(), this.hoverAnimate(h.HOVERING.Y_VALUE);
    }
    createFireAnimation(e, t, n, r) {
        return f(this.fireScale, e, t, () => d().random(n, r));
    }
    async hoverAnimate(e) {
        var t;
        if (0 !== this.props.stage || this.isUnmounted) return;
        let n = e > 1,
            r = n ? h.HOVERING.FIRE_MIN_INTENSITY_FALLING : h.HOVERING.FIRE_MIN_INTENSITY_RISING,
            i = n ? h.HOVERING.FIRE_MAX_INTENSITY_FALLING : h.HOVERING.FIRE_MAX_INTENSITY_RISING,
            s = this.createFireAnimation(h.HOVERING.FIRE_COUNT, h.HOVERING.Y_DURATION, r, i),
            a = u.Z.timing(this.y, {
                toValue: e,
                duration: h.HOVERING.Y_DURATION,
                easing: u.Z.Easing.inOut(u.Z.Easing.ease)
            });
        (this.currentAnimation = u.Z.parallel([a, s])), await (null == (t = this.currentAnimation) ? void 0 : t.start()), this.hoverAnimate(e * h.HOVERING.Y_VALUE_MODIFIER);
    }
    createShakeAnimation(e, t, n) {
        return f(this.x, e, t, (e) => d().random(1, n) * (e % 2 == 0 ? 1 : -1));
    }
    async flyAnimate() {
        var e;
        let t = u.Z.spring(this.y, {
                toValue: h.FALLING.Y_VALUE,
                overshootClamping: !0
            }),
            n = u.Z.spring(this.fireScale, {
                toValue: h.FALLING.FIRE_VALUE,
                overshootClamping: !0
            }),
            r = u.Z.parallel([t, n]),
            i = u.Z.timing(this.y, {
                toValue: h.STAGING.Y_VALUE,
                duration: h.STAGING.DURATION
            }),
            s = this.createShakeAnimation(h.STAGING.SHAKE_COUNT, h.STAGING.DURATION, h.STAGING.SHAKE_INTENSITY),
            a = this.createFireAnimation(h.STAGING.FIRE_COUNT, h.STAGING.DURATION, h.STAGING.FIRE_MIN_INTENSITY, h.STAGING.FIRE_MAX_INTENSITY),
            l = u.Z.parallel([i, s, a]),
            o = u.Z.timing(this.y, {
                toValue: h.FLYING.Y_VALUE,
                duration: h.FLYING.DURATION,
                easing: h.FLYING.Y_EASING
            }),
            c = u.Z.timing(this.x, {
                toValue: h.FLYING.X_VALUE,
                duration: h.FLYING.DURATION,
                easing: h.FLYING.X_EASING
            }),
            d = u.Z.timing(this.opacity, {
                toValue: h.FLYING.OPACITY_VALUE,
                duration: h.FLYING.DURATION / h.FLYING.OPACITY_DURATION_DIVIDEND,
                delay: h.FLYING.DURATION / h.FLYING.OPACITY_DURATION_DIVIDEND
            }),
            m = this.createFireAnimation(h.FLYING.FIRE_COUNT, h.FLYING.DURATION, h.FLYING.FIRE_MIN_INTENSITY, h.FLYING.FIRE_MAX_INTENSITY),
            g = u.Z.parallel([o, c, d, m]);
        if (((this.currentAnimation = u.Z.sequence([r, l, g])), await (null == (e = this.currentAnimation) ? void 0 : e.start()), !this.isUnmounted)) {
            let { onFlyingComplete: e } = this.props;
            null != e && e();
        }
    }
    getWumpusStyle() {
        return {
            transform: [
                {
                    translateY: this.y.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0px', '1px']
                    })
                },
                {
                    translateX: this.x.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0px', '1px']
                    })
                }
            ],
            opacity: this.opacity
        };
    }
    getFireStyle() {
        return { transform: [{ scale: this.fireScale }] };
    }
    render() {
        let { className: e, style: t } = this.props;
        return (0, s.jsxs)(u.Z.div, {
            className: o()(m.animation, e),
            style: (function (e) {
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
                            g(e, t, n[t]);
                        });
                }
                return e;
            })({}, t, this.getWumpusStyle()),
            children: [
                (0, s.jsx)('div', {
                    className: m.fireTopWrapper,
                    children: (0, s.jsx)(u.Z.div, {
                        className: m.fire,
                        style: this.getFireStyle()
                    })
                }),
                (0, s.jsx)('div', {
                    className: m.fireBottomWrapper,
                    children: (0, s.jsx)(u.Z.div, {
                        className: m.fire,
                        style: this.getFireStyle()
                    })
                }),
                (0, s.jsx)('div', { className: m.wumpus })
            ]
        });
    }
    constructor(...e) {
        super(...e), g(this, 'x', new u.Z.Value(0)), g(this, 'y', new u.Z.Value(0)), g(this, 'opacity', new u.Z.Value(1)), g(this, 'fireScale', new u.Z.Value(1)), g(this, 'currentAnimation', null), g(this, 'isUnmounted', !1);
    }
}
g(b, 'Stages', p);
let x = b;
