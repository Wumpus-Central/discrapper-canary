n.d(t, {
    $G: () => l,
    Ay: () => p,
    MN: () => f,
    Mp: () => c,
    XN: () => u,
    aV: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(432022),
    s = n(397927),
    o = n(396583);
let l = 3000,
    c = 4000,
    u = 6000;
var d = (function (e) {
        return (e.SINE = "sine"), (e.COSINE = "cosine"), e;
    })({}),
    f = (function (e) {
        return (e.UP = "up"), (e.DOWN = "down"), e;
    })({});
let p = (e) => {
    var t, n;
    let {
            blurAnimationData: l,
            scaleAnimationData: c,
            yAxisAnimationData: u,
            parallaxAnimationData: d,
            animateXAxisWiggle: f = !1,
            isMotionReduced: p = !1,
            animationSpeedScale: _ = 1,
            children: h,
        } = e,
        m = (0, s.zhh)(
            null != u
                ? {
                      from: { y: 0 },
                      to: { y: 1 },
                      config: { duration: u.duration * _ },
                      loop: !0,
                  }
                : { y: 0 },
        ),
        g = (null == u ? void 0 : u.path) === "sine" ? Math.sin : Math.cos,
        [E, b] = (0, i.useState)(1),
        y = (0, s.zhh)(
            null != c
                ? {
                      from: { scale: E > 0 ? c.startScale : c.endScale },
                      to: { scale: E > 0 ? c.endScale : c.startScale },
                      config: { duration: c.duration * _ },
                      onRest: () => b((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [O, A] = (0, i.useState)(1),
        v = (0, s.zhh)(
            null != l
                ? {
                      from: { blur: O > 0 ? l.startBlurRadius : l.endBlurRadius },
                      to: { blur: O > 0 ? l.endBlurRadius : l.startBlurRadius },
                      config: { duration: l.duration * _ },
                      onRest: () => A((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        S = (0, i.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * _), [_]),
        I = 5,
        [T, C] = (0, i.useState)(0),
        [N, R] = (0, i.useState)(1),
        w = (0, s.zhh)({
            xOffset: T,
            config: {
                tension: 10,
                friction: 10,
                duration: S,
            },
        });
    return ((0, o.A)(() => {
        C(N * (0.5 * Math.random() * I + I / 2)), R((e) => -1 * e);
    }, S),
    p)
        ? h
        : (0, r.jsx)(a.animated.div, {
              style: {
                  transform:
                      null == (t = m.y)
                          ? void 0
                          : t.to((e) => {
                                if (null == u) return "translateY(0px)";
                                let t = g(e * Math.PI * 2) * u.range,
                                    n = 0;
                                if (null != d) {
                                    let e = d.range * (1 - d.containerVisibilityPercentage);
                                    n = "up" === d.pathDirection ? -e : e;
                                }
                                return "translateY(".concat(t + n, "px)");
                            }),
                  translateX: f ? w.xOffset.to((e) => "".concat(e, "px")) : 0,
                  scale: y.scale,
                  filter: null == (n = v.blur) ? void 0 : n.to((e) => "blur(".concat(e, "px)")),
                  opacity: null != d && d.changeOpacity ? d.containerVisibilityPercentage : 1,
              },
              children: h,
          });
};
