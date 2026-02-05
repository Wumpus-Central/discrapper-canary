n.d(t, { $G: () => d, Ay: () => g, MN: () => A, Mp: () => u, XN: () => _, aV: () => m });
var i,
    s,
    r = n(627968),
    a = n(64700),
    l = n(563495),
    o = n(397927),
    c = n(396583);
let d = 3e3,
    u = 4e3,
    _ = 6e3;
var m = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    A = (((s = {}).UP = "up"), (s.DOWN = "down"), s);
let g = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: n,
            yAxisAnimationData: i,
            parallaxAnimationData: s,
            animateXAxisWiggle: d = !1,
            isMotionReduced: u = !1,
            animationSpeedScale: _ = 1,
            children: m,
        } = e,
        A = (0, o.zhh)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * _ }, loop: !0 } : { y: 0 },
        ),
        g = i?.path === "sine" ? Math.sin : Math.cos,
        [E, h] = (0, a.useState)(1),
        p = (0, o.zhh)(
            null != n
                ? {
                      from: { scale: E > 0 ? n.startScale : n.endScale },
                      to: { scale: E > 0 ? n.endScale : n.startScale },
                      config: { duration: n.duration * _ },
                      onRest: () => h((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [C, x] = (0, a.useState)(1),
        T = (0, o.zhh)(
            null != t
                ? {
                      from: { blur: C > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: C > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * _ },
                      onRest: () => x((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        I = (0, a.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * _), [_]),
        [S, f] = (0, a.useState)(0),
        [N, b] = (0, a.useState)(1),
        R = (0, o.zhh)({ xOffset: S, config: { tension: 10, friction: 10, duration: I } });
    return ((0, c.A)(() => {
        f(N * (0.5 * Math.random() * 5 + 2.5)), b((e) => -1 * e);
    }, I),
    u)
        ? m
        : (0, r.jsx)(l.animated.div, {
              style: {
                  transform: A.y?.to((e) => {
                      if (null == i) return "translateY(0px)";
                      let t = g(e * Math.PI * 2) * i.range,
                          n = 0;
                      if (null != s) {
                          let e = s.range * (1 - s.containerVisibilityPercentage);
                          n = "up" === s.pathDirection ? -e : e;
                      }
                      return `translateY(${t + n}px)`;
                  }),
                  translateX: d ? R.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: T.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != s && s.changeOpacity ? s.containerVisibilityPercentage : 1,
              },
              children: m,
          });
};
