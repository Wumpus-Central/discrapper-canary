n(47120);
var i,
    r,
    l,
    s = n(200651),
    a = n(192379),
    o = n(120356),
    c = n.n(o),
    d = n(392711),
    u = n.n(d),
    m = n(82923),
    h = n(773974);
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
((l = i || (i = {}))[(l.HOVERING = 0)] = 'HOVERING'), (l[(l.FLYING = 1)] = 'FLYING');
let x = Object.freeze({
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
        Y_EASING: m.Z.Easing.bezier(0.46, 0.01, 1, -0.3),
        X_VALUE: 200,
        X_EASING: m.Z.Easing.bezier(0.65, 0.05, 1, 0.25),
        FIRE_COUNT: 10,
        FIRE_MIN_INTENSITY: 1.2,
        FIRE_MAX_INTENSITY: 1.4,
        OPACITY_VALUE: 0,
        OPACITY_DURATION_DIVIDEND: 2
    }
});
function p(e, t, n, i) {
    return m.Z.sequence(
        u().times(t, (r) =>
            m.Z.timing(e, {
                toValue: i(r),
                duration: n / t
            })
        )
    );
}
class f extends (r = a.Component) {
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
        this.resetAnimation(), this.hoverAnimate(x.HOVERING.Y_VALUE);
    }
    createFireAnimation(e, t, n, i) {
        return p(this.fireScale, e, t, () => u().random(n, i));
    }
    async hoverAnimate(e) {
        var t;
        if (0 !== this.props.stage || this.isUnmounted) return;
        let n = e > 1,
            i = n ? x.HOVERING.FIRE_MIN_INTENSITY_FALLING : x.HOVERING.FIRE_MIN_INTENSITY_RISING,
            r = n ? x.HOVERING.FIRE_MAX_INTENSITY_FALLING : x.HOVERING.FIRE_MAX_INTENSITY_RISING,
            l = this.createFireAnimation(x.HOVERING.FIRE_COUNT, x.HOVERING.Y_DURATION, i, r),
            s = m.Z.timing(this.y, {
                toValue: e,
                duration: x.HOVERING.Y_DURATION,
                easing: m.Z.Easing.inOut(m.Z.Easing.ease)
            });
        (this.currentAnimation = m.Z.parallel([s, l])), await (null === (t = this.currentAnimation) || void 0 === t ? void 0 : t.start()), this.hoverAnimate(e * x.HOVERING.Y_VALUE_MODIFIER);
    }
    createShakeAnimation(e, t, n) {
        return p(this.x, e, t, (e) => u().random(1, n) * (e % 2 == 0 ? 1 : -1));
    }
    async flyAnimate() {
        var e;
        let t = m.Z.spring(this.y, {
                toValue: x.FALLING.Y_VALUE,
                overshootClamping: !0
            }),
            n = m.Z.spring(this.fireScale, {
                toValue: x.FALLING.FIRE_VALUE,
                overshootClamping: !0
            }),
            i = m.Z.parallel([t, n]),
            r = m.Z.timing(this.y, {
                toValue: x.STAGING.Y_VALUE,
                duration: x.STAGING.DURATION
            }),
            l = this.createShakeAnimation(x.STAGING.SHAKE_COUNT, x.STAGING.DURATION, x.STAGING.SHAKE_INTENSITY),
            s = this.createFireAnimation(x.STAGING.FIRE_COUNT, x.STAGING.DURATION, x.STAGING.FIRE_MIN_INTENSITY, x.STAGING.FIRE_MAX_INTENSITY),
            a = m.Z.parallel([r, l, s]),
            o = m.Z.timing(this.y, {
                toValue: x.FLYING.Y_VALUE,
                duration: x.FLYING.DURATION,
                easing: x.FLYING.Y_EASING
            }),
            c = m.Z.timing(this.x, {
                toValue: x.FLYING.X_VALUE,
                duration: x.FLYING.DURATION,
                easing: x.FLYING.X_EASING
            }),
            d = m.Z.timing(this.opacity, {
                toValue: x.FLYING.OPACITY_VALUE,
                duration: x.FLYING.DURATION / x.FLYING.OPACITY_DURATION_DIVIDEND,
                delay: x.FLYING.DURATION / x.FLYING.OPACITY_DURATION_DIVIDEND
            }),
            u = this.createFireAnimation(x.FLYING.FIRE_COUNT, x.FLYING.DURATION, x.FLYING.FIRE_MIN_INTENSITY, x.FLYING.FIRE_MAX_INTENSITY),
            h = m.Z.parallel([o, c, d, u]);
        if (((this.currentAnimation = m.Z.sequence([i, a, h])), await (null === (e = this.currentAnimation) || void 0 === e ? void 0 : e.start()), !this.isUnmounted)) {
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
        return (0, s.jsxs)(m.Z.div, {
            className: c()(h.animation, e),
            style: {
                ...t,
                ...this.getWumpusStyle()
            },
            children: [
                (0, s.jsx)('div', {
                    className: h.fireTopWrapper,
                    children: (0, s.jsx)(m.Z.div, {
                        className: h.fire,
                        style: this.getFireStyle()
                    })
                }),
                (0, s.jsx)('div', {
                    className: h.fireBottomWrapper,
                    children: (0, s.jsx)(m.Z.div, {
                        className: h.fire,
                        style: this.getFireStyle()
                    })
                }),
                (0, s.jsx)('div', { className: h.wumpus })
            ]
        });
    }
    constructor(...e) {
        super(...e), g(this, 'x', new m.Z.Value(0)), g(this, 'y', new m.Z.Value(0)), g(this, 'opacity', new m.Z.Value(1)), g(this, 'fireScale', new m.Z.Value(1)), g(this, 'currentAnimation', null), g(this, 'isUnmounted', !1);
    }
}
g(f, 'Stages', i), (t.Z = f);
