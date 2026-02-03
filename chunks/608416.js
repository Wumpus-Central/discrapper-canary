n.d(t, {
    $G: () => d,
    Ay: () => g,
    MN: () => m,
    Mp: () => u,
    XN: () => _,
    aV: () => p,
}),
    n(896048);
var r,
    i,
    l = n(627968),
    s = n(64700),
    a = n(92674),
    o = n(397927),
    c = n(396583);
let d = 3e3,
    u = 4e3,
    _ = 6e3;
var p = (((r = {}).SINE = "sine"), (r.COSINE = "cosine"), r),
    m = (((i = {}).UP = "up"), (i.DOWN = "down"), i);
let g = (e) => {
    var t, n;
    let {
            blurAnimationData: r,
            scaleAnimationData: i,
            yAxisAnimationData: d,
            parallaxAnimationData: u,
            animateXAxisWiggle: _ = !1,
            isMotionReduced: p = !1,
            animationSpeedScale: m = 1,
            children: g,
        } = e,
        A = (0, o.zhh)(
            null != d
                ? {
                      from: {
                          y: 0,
                      },
                      to: {
                          y: 1,
                      },
                      config: {
                          duration: d.duration * m,
                      },
                      loop: !0,
                  }
                : {
                      y: 0,
                  },
        ),
        f = (null == d ? void 0 : d.path) === "sine" ? Math.sin : Math.cos,
        [b, h] = (0, s.useState)(1),
        E = (0, o.zhh)(
            null != i
                ? {
                      from: {
                          scale: b > 0 ? i.startScale : i.endScale,
                      },
                      to: {
                          scale: b > 0 ? i.endScale : i.startScale,
                      },
                      config: {
                          duration: i.duration * m,
                      },
                      onRest: () => h((e) => -1 * e),
                  }
                : {
                      scale: 1,
                  },
        ),
        [O, x] = (0, s.useState)(1),
        C = (0, o.zhh)(
            null != r
                ? {
                      from: {
                          blur: O > 0 ? r.startBlurRadius : r.endBlurRadius,
                      },
                      to: {
                          blur: O > 0 ? r.endBlurRadius : r.startBlurRadius,
                      },
                      config: {
                          duration: r.duration * m,
                      },
                      onRest: () => x((e) => -1 * e),
                  }
                : {
                      blur: 0,
                  },
        ),
        S = (0, s.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * m), [m]),
        [T, I] = (0, s.useState)(0),
        [N, j] = (0, s.useState)(1),
        y = (0, o.zhh)({
            xOffset: T,
            config: {
                tension: 10,
                friction: 10,
                duration: S,
            },
        });
    return ((0, c.A)(() => {
        I(N * (0.5 * Math.random() * 5 + 2.5)), j((e) => -1 * e);
    }, S),
    p)
        ? g
        : (0, l.jsx)(a.animated.div, {
              style: {
                  transform:
                      null == (t = A.y)
                          ? void 0
                          : t.to((e) => {
                                if (null == d) return "translateY(0px)";
                                let t = f(e * Math.PI * 2) * d.range,
                                    n = 0;
                                if (null != u) {
                                    let e = u.range * (1 - u.containerVisibilityPercentage);
                                    n = "up" === u.pathDirection ? -e : e;
                                }
                                return "translateY(".concat(t + n, "px)");
                            }),
                  translateX: _ ? y.xOffset.to((e) => "".concat(e, "px")) : 0,
                  scale: E.scale,
                  filter: null == (n = C.blur) ? void 0 : n.to((e) => "blur(".concat(e, "px)")),
                  opacity: null != u && u.changeOpacity ? u.containerVisibilityPercentage : 1,
              },
              children: g,
          });
};
