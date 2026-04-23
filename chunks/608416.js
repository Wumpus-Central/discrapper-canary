n.d(t, { $G: () => d, Ay: () => f, MN: () => p, Mp: () => u, XN: () => _, aV: () => m });
var r,
    a,
    i = n(627968),
    s = n(64700),
    l = n(419354),
    c = n(717421),
    o = n(396583);
let d = 3e3,
    u = 4e3,
    _ = 6e3;
var m = (((r = {}).SINE = "sine"), (r.COSINE = "cosine"), r),
    p = (((a = {}).UP = "up"), (a.DOWN = "down"), a);
let f = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: n,
            yAxisAnimationData: r,
            parallaxAnimationData: a,
            animateXAxisWiggle: d = !1,
            isMotionReduced: u = !1,
            animationSpeedScale: _ = 1,
            children: m,
        } = e,
        p = (0, c.z)(
            null != r ? { from: { y: 0 }, to: { y: 1 }, config: { duration: r.duration * _ }, loop: !0 } : { y: 0 },
        ),
        f = r?.path === "sine" ? Math.sin : Math.cos,
        [A, g] = (0, s.useState)(1),
        h = (0, c.z)(
            null != n
                ? {
                      from: { scale: A > 0 ? n.startScale : n.endScale },
                      to: { scale: A > 0 ? n.endScale : n.startScale },
                      config: { duration: n.duration * _ },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [b, x] = (0, s.useState)(1),
        C = (0, c.z)(
            null != t
                ? {
                      from: { blur: b > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: b > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * _ },
                      onRest: () => x((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        v = (0, s.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * _), [_]),
        [R, N] = (0, s.useState)(0),
        [E, j] = (0, s.useState)(1),
        T = (0, c.z)({ xOffset: R, config: { tension: 10, friction: 10, duration: v } });
    return ((0, o.A)(() => {
        N(E * (0.5 * Math.random() * 5 + 2.5)), j((e) => -1 * e);
    }, v),
    u)
        ? m
        : (0, i.jsx)(l.animated.div, {
              style: {
                  transform: p.y?.to((e) => {
                      if (null == r) return "translateY(0px)";
                      let t = f(e * Math.PI * 2) * r.range,
                          n = 0;
                      if (null != a) {
                          let e = a.range * (1 - a.containerVisibilityPercentage);
                          n = "up" === a.pathDirection ? -e : e;
                      }
                      return `translateY(${t + n}px)`;
                  }),
                  translateX: d ? T.xOffset.to((e) => `${e}px`) : 0,
                  scale: h.scale,
                  filter: C.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != a && a.changeOpacity ? a.containerVisibilityPercentage : 1,
              },
              children: m,
          });
};
