n.d(t, { $G: () => d, Ay: () => T, MN: () => _, Mp: () => u, XN: () => E, aV: () => A });
var i,
    l,
    r = n(627968),
    s = n(64700),
    a = n(873174),
    c = n(717421),
    o = n(396583);
let d = 3e3,
    u = 4e3,
    E = 6e3;
var A = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    _ = (((l = {}).UP = "up"), (l.DOWN = "down"), l);
let T = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: n,
            yAxisAnimationData: i,
            parallaxAnimationData: l,
            animateXAxisWiggle: d = !1,
            isMotionReduced: u = !1,
            animationSpeedScale: E = 1,
            children: A,
        } = e,
        _ = (0, c.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * E }, loop: !0 } : { y: 0 },
        ),
        T = i?.path === "sine" ? Math.sin : Math.cos,
        [I, N] = (0, s.useState)(1),
        R = (0, c.z)(
            null != n
                ? {
                      from: { scale: I > 0 ? n.startScale : n.endScale },
                      to: { scale: I > 0 ? n.endScale : n.startScale },
                      config: { duration: n.duration * E },
                      onRest: () => N((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [m, C] = (0, s.useState)(1),
        p = (0, c.z)(
            null != t
                ? {
                      from: { blur: m > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: m > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * E },
                      onRest: () => C((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        S = (0, s.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * E), [E]),
        [O, g] = (0, s.useState)(0),
        [h, f] = (0, s.useState)(1),
        P = (0, c.z)({ xOffset: O, config: { tension: 10, friction: 10, duration: S } });
    return ((0, o.A)(() => {
        g(h * (0.5 * Math.random() * 5 + 2.5)), f((e) => -1 * e);
    }, S),
    u)
        ? A
        : (0, r.jsx)(a.animated.div, {
              style: {
                  transform: _.y?.to((e) => {
                      if (null == i) return "translateY(0px)";
                      let t = T(e * Math.PI * 2) * i.range,
                          n = 0;
                      if (null != l) {
                          let e = l.range * (1 - l.containerVisibilityPercentage);
                          n = "up" === l.pathDirection ? -e : e;
                      }
                      return `translateY(${t + n}px)`;
                  }),
                  translateX: d ? P.xOffset.to((e) => `${e}px`) : 0,
                  scale: R.scale,
                  filter: p.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != l && l.changeOpacity ? l.containerVisibilityPercentage : 1,
              },
              children: A,
          });
};
