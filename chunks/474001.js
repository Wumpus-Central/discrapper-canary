"use strict";
n.d(t, { A: () => _ });
var i,
    s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(735438),
    d = n.n(o),
    c = n(593100),
    u = n(6697),
    g = (((i = g || {})[(i.HOVERING = 0)] = "HOVERING"), (i[(i.FLYING = 1)] = "FLYING"), i);
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
    FALLING: { Y_VALUE: 10, FIRE_COUNT: 10, FIRE_VALUE: 0.2 },
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
        Y_VALUE: -1e3,
        Y_EASING: c.A.Easing.bezier(0.46, 0.01, 1, -0.3),
        X_VALUE: 200,
        X_EASING: c.A.Easing.bezier(0.65, 0.05, 1, 0.25),
        FIRE_COUNT: 10,
        FIRE_MIN_INTENSITY: 1.2,
        FIRE_MAX_INTENSITY: 1.4,
        OPACITY_VALUE: 0,
        OPACITY_DURATION_DIVIDEND: 2,
    },
});
function x(e, t, n, i) {
    return c.A.sequence(d().times(t, (s) => c.A.timing(e, { toValue: i(s), duration: n / t })));
}
class h extends l.Component {
    static Stages = g;
    x = new c.A.Value(0);
    y = new c.A.Value(0);
    opacity = new c.A.Value(1);
    fireScale = new c.A.Value(1);
    currentAnimation = null;
    isUnmounted = !1;
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
    createFireAnimation(e, t, n, i) {
        return x(this.fireScale, e, t, () => d().random(n, i));
    }
    async hoverAnimate(e) {
        if (0 !== this.props.stage || this.isUnmounted) return;
        let t = e > 1,
            n = t ? m.HOVERING.FIRE_MIN_INTENSITY_FALLING : m.HOVERING.FIRE_MIN_INTENSITY_RISING,
            i = t ? m.HOVERING.FIRE_MAX_INTENSITY_FALLING : m.HOVERING.FIRE_MAX_INTENSITY_RISING,
            s = this.createFireAnimation(m.HOVERING.FIRE_COUNT, m.HOVERING.Y_DURATION, n, i),
            l = c.A.timing(this.y, {
                toValue: e,
                duration: m.HOVERING.Y_DURATION,
                easing: c.A.Easing.inOut(c.A.Easing.ease),
            });
        (this.currentAnimation = c.A.parallel([l, s])),
            await this.currentAnimation?.start(),
            this.hoverAnimate(e * m.HOVERING.Y_VALUE_MODIFIER);
    }
    createShakeAnimation(e, t, n) {
        return x(this.x, e, t, (e) => d().random(1, n) * (e % 2 == 0 ? 1 : -1));
    }
    async flyAnimate() {
        let e = c.A.spring(this.y, { toValue: m.FALLING.Y_VALUE, overshootClamping: !0 }),
            t = c.A.spring(this.fireScale, { toValue: m.FALLING.FIRE_VALUE, overshootClamping: !0 }),
            n = c.A.parallel([e, t]),
            i = c.A.timing(this.y, { toValue: m.STAGING.Y_VALUE, duration: m.STAGING.DURATION }),
            s = this.createShakeAnimation(m.STAGING.SHAKE_COUNT, m.STAGING.DURATION, m.STAGING.SHAKE_INTENSITY),
            l = this.createFireAnimation(
                m.STAGING.FIRE_COUNT,
                m.STAGING.DURATION,
                m.STAGING.FIRE_MIN_INTENSITY,
                m.STAGING.FIRE_MAX_INTENSITY,
            ),
            r = c.A.parallel([i, s, l]),
            a = c.A.timing(this.y, {
                toValue: m.FLYING.Y_VALUE,
                duration: m.FLYING.DURATION,
                easing: m.FLYING.Y_EASING,
            }),
            o = c.A.timing(this.x, {
                toValue: m.FLYING.X_VALUE,
                duration: m.FLYING.DURATION,
                easing: m.FLYING.X_EASING,
            }),
            d = c.A.timing(this.opacity, {
                toValue: m.FLYING.OPACITY_VALUE,
                duration: m.FLYING.DURATION / m.FLYING.OPACITY_DURATION_DIVIDEND,
                delay: m.FLYING.DURATION / m.FLYING.OPACITY_DURATION_DIVIDEND,
            }),
            u = this.createFireAnimation(
                m.FLYING.FIRE_COUNT,
                m.FLYING.DURATION,
                m.FLYING.FIRE_MIN_INTENSITY,
                m.FLYING.FIRE_MAX_INTENSITY,
            ),
            g = c.A.parallel([a, o, d, u]);
        if (
            ((this.currentAnimation = c.A.sequence([n, r, g])), await this.currentAnimation?.start(), !this.isUnmounted)
        ) {
            let { onFlyingComplete: e } = this.props;
            null != e && e();
        }
    }
    getWumpusStyle() {
        return {
            transform: [
                { translateY: this.y.interpolate({ inputRange: [0, 1], outputRange: ["0px", "1px"] }) },
                { translateX: this.x.interpolate({ inputRange: [0, 1], outputRange: ["0px", "1px"] }) },
            ],
            opacity: this.opacity,
        };
    }
    getFireStyle() {
        return { transform: [{ scale: this.fireScale }] };
    }
    render() {
        let { className: e, style: t } = this.props;
        return (0, s.jsxs)(c.A.div, {
            className: a()(u.lY, e),
            style: { ...t, ...this.getWumpusStyle() },
            children: [
                (0, s.jsx)("div", {
                    className: u.nY,
                    children: (0, s.jsx)(c.A.div, { className: u.hg, style: this.getFireStyle() }),
                }),
                (0, s.jsx)("div", {
                    className: u.Xd,
                    children: (0, s.jsx)(c.A.div, { className: u.hg, style: this.getFireStyle() }),
                }),
                (0, s.jsx)("div", { className: u.kX }),
            ],
        });
    }
}
let _ = h;
