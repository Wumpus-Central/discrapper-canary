n.d(t, { A: () => h }), n(896048);
var r,
    i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    c = n.n(a),
    o = n(735438),
    d = n.n(o),
    u = n(593100),
    f = n(6697);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var b = (((i = b || {})[(i.HOVERING = 0)] = "HOVERING"), (i[(i.FLYING = 1)] = "FLYING"), i);
let m = Object.freeze({
    HOVERING: {
        Y_DURATION: 1500,
        Y_VALUE: -5,
        Y_VALUE_MODIFIER: -1,
        FIRE_COUNT: 10,
        FIRE_MIN_INTENSITY_FALLING: 0.8,
        FIRE_MAX_INTENSITY_FALLING: 1,
        FIRE_MIN_INTENSITY_RISING: 1,
        FIRE_MAX_INTENSITY_RISING: 1.2,
    },
    FALLING: {
        Y_VALUE: 10,
        FIRE_COUNT: 10,
        FIRE_VALUE: 0.2,
    },
    STAGING: {
        DURATION: 500,
        Y_VALUE: 22,
        SHAKE_COUNT: 10,
        SHAKE_INTENSITY: 2,
        FIRE_COUNT: 4,
        FIRE_MIN_INTENSITY: 0.6,
        FIRE_MAX_INTENSITY: 1,
    },
    FLYING: {
        DURATION: 500,
        Y_VALUE: -1000,
        Y_EASING: u.A.Easing.bezier(0.46, 0.01, 1, -0.3),
        X_VALUE: 200,
        X_EASING: u.A.Easing.bezier(0.65, 0.05, 1, 0.25),
        FIRE_COUNT: 10,
        FIRE_MIN_INTENSITY: 1.2,
        FIRE_MAX_INTENSITY: 1.4,
        OPACITY_VALUE: 0,
        OPACITY_DURATION_DIVIDEND: 2,
    },
});
function p(e, t, n, r) {
    return u.A.sequence(
        d().times(t, (i) =>
            u.A.timing(e, {
                toValue: r(i),
                duration: n / t,
            }),
        ),
    );
}
class x extends (r = s.Component) {
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
        this.resetAnimation(), this.hoverAnimate(m.HOVERING.Y_VALUE);
    }
    createFireAnimation(e, t, n, r) {
        return p(this.fireScale, e, t, () => d().random(n, r));
    }
    async hoverAnimate(e) {
        var t;
        if (0 !== this.props.stage || this.isUnmounted) return;
        let n = e > 1,
            r = n ? m.HOVERING.FIRE_MIN_INTENSITY_FALLING : m.HOVERING.FIRE_MIN_INTENSITY_RISING,
            i = n ? m.HOVERING.FIRE_MAX_INTENSITY_FALLING : m.HOVERING.FIRE_MAX_INTENSITY_RISING,
            l = this.createFireAnimation(m.HOVERING.FIRE_COUNT, m.HOVERING.Y_DURATION, r, i),
            s = u.A.timing(this.y, {
                toValue: e,
                duration: m.HOVERING.Y_DURATION,
                easing: u.A.Easing.inOut(u.A.Easing.ease),
            });
        (this.currentAnimation = u.A.parallel([s, l])),
            await (null == (t = this.currentAnimation) ? void 0 : t.start()),
            this.hoverAnimate(e * m.HOVERING.Y_VALUE_MODIFIER);
    }
    createShakeAnimation(e, t, n) {
        return p(this.x, e, t, (e) => d().random(1, n) * (e % 2 == 0 ? 1 : -1));
    }
    async flyAnimate() {
        var e;
        let t = u.A.spring(this.y, {
                toValue: m.FALLING.Y_VALUE,
                overshootClamping: !0,
            }),
            n = u.A.spring(this.fireScale, {
                toValue: m.FALLING.FIRE_VALUE,
                overshootClamping: !0,
            }),
            r = u.A.parallel([t, n]),
            i = u.A.timing(this.y, {
                toValue: m.STAGING.Y_VALUE,
                duration: m.STAGING.DURATION,
            }),
            l = this.createShakeAnimation(m.STAGING.SHAKE_COUNT, m.STAGING.DURATION, m.STAGING.SHAKE_INTENSITY),
            s = this.createFireAnimation(
                m.STAGING.FIRE_COUNT,
                m.STAGING.DURATION,
                m.STAGING.FIRE_MIN_INTENSITY,
                m.STAGING.FIRE_MAX_INTENSITY,
            ),
            a = u.A.parallel([i, l, s]),
            c = u.A.timing(this.y, {
                toValue: m.FLYING.Y_VALUE,
                duration: m.FLYING.DURATION,
                easing: m.FLYING.Y_EASING,
            }),
            o = u.A.timing(this.x, {
                toValue: m.FLYING.X_VALUE,
                duration: m.FLYING.DURATION,
                easing: m.FLYING.X_EASING,
            }),
            d = u.A.timing(this.opacity, {
                toValue: m.FLYING.OPACITY_VALUE,
                duration: m.FLYING.DURATION / m.FLYING.OPACITY_DURATION_DIVIDEND,
                delay: m.FLYING.DURATION / m.FLYING.OPACITY_DURATION_DIVIDEND,
            }),
            f = this.createFireAnimation(
                m.FLYING.FIRE_COUNT,
                m.FLYING.DURATION,
                m.FLYING.FIRE_MIN_INTENSITY,
                m.FLYING.FIRE_MAX_INTENSITY,
            ),
            g = u.A.parallel([c, o, d, f]);
        if (
            ((this.currentAnimation = u.A.sequence([r, a, g])),
            await (null == (e = this.currentAnimation) ? void 0 : e.start()),
            !this.isUnmounted)
        ) {
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
                        outputRange: ["0px", "1px"],
                    }),
                },
                {
                    translateX: this.x.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0px", "1px"],
                    }),
                },
            ],
            opacity: this.opacity,
        };
    }
    getFireStyle() {
        return { transform: [{ scale: this.fireScale }] };
    }
    render() {
        let { className: e, style: t } = this.props;
        return (0, l.jsxs)(u.A.div, {
            className: c()(f.lY, e),
            style: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            g(e, t, n[t]);
                        });
                }
                return e;
            })({}, t, this.getWumpusStyle()),
            children: [
                (0, l.jsx)("div", {
                    className: f.nY,
                    children: (0, l.jsx)(u.A.div, {
                        className: f.hg,
                        style: this.getFireStyle(),
                    }),
                }),
                (0, l.jsx)("div", {
                    className: f.Xd,
                    children: (0, l.jsx)(u.A.div, {
                        className: f.hg,
                        style: this.getFireStyle(),
                    }),
                }),
                (0, l.jsx)("div", { className: f.kX }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            g(this, "x", new u.A.Value(0)),
            g(this, "y", new u.A.Value(0)),
            g(this, "opacity", new u.A.Value(1)),
            g(this, "fireScale", new u.A.Value(1)),
            g(this, "currentAnimation", null),
            g(this, "isUnmounted", !1);
    }
}
g(x, "Stages", b);
let h = x;
