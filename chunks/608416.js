i.d(t, { $G: () => o, Ay: () => g, MN: () => p, Mp: () => u, XN: () => m, aV: () => A });
var s,
    a,
    n = i(627968),
    r = i(64700),
    l = i(785651),
    c = i(717421),
    d = i(396583);
let o = 3e3,
    u = 4e3,
    m = 6e3;
var A = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
    p = (((a = {}).UP = "up"), (a.DOWN = "down"), a);
let g = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: i,
            yAxisAnimationData: s,
            parallaxAnimationData: a,
            animateXAxisWiggle: o = !1,
            isMotionReduced: u = !1,
            animationSpeedScale: m = 1,
            children: A,
        } = e,
        p = (0, c.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * m }, loop: !0 } : { y: 0 },
        ),
        g = s?.path === "sine" ? Math.sin : Math.cos,
        [x, N] = (0, r.useState)(1),
        E = (0, c.z)(
            null != i
                ? {
                      from: { scale: x > 0 ? i.startScale : i.endScale },
                      to: { scale: x > 0 ? i.endScale : i.startScale },
                      config: { duration: i.duration * m },
                      onRest: () => N((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [h, f] = (0, r.useState)(1),
        R = (0, c.z)(
            null != t
                ? {
                      from: { blur: h > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: h > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * m },
                      onRest: () => f((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        _ = (0, r.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * m), [m]),
        [C, I] = (0, r.useState)(0),
        [T, b] = (0, r.useState)(1),
        S = (0, c.z)({ xOffset: C, config: { tension: 10, friction: 10, duration: _ } });
    return ((0, d.A)(() => {
        I(T * (0.5 * Math.random() * 5 + 2.5)), b((e) => -1 * e);
    }, _),
    u)
        ? A
        : (0, n.jsx)(l.animated.div, {
              style: {
                  transform: p.y?.to((e) => {
                      if (null == s) return "translateY(0px)";
                      let t = g(e * Math.PI * 2) * s.range,
                          i = 0;
                      if (null != a) {
                          let e = a.range * (1 - a.containerVisibilityPercentage);
                          i = "up" === a.pathDirection ? -e : e;
                      }
                      return `translateY(${t + i}px)`;
                  }),
                  translateX: o ? S.xOffset.to((e) => `${e}px`) : 0,
                  scale: E.scale,
                  filter: R.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != a && a.changeOpacity ? a.containerVisibilityPercentage : 1,
              },
              children: A,
          });
};
