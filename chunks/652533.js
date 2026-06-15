a.d(t, { $G: () => d, Ay: () => g, MN: () => N, Mp: () => u, XN: () => m, aV: () => A });
var s,
    i,
    n = a(627968),
    r = a(64700),
    l = a(922139),
    c = a(717421),
    o = a(396583);
let d = 3e3,
    u = 4e3,
    m = 6e3;
var A = (((s = {}).SINE = "sine"), (s.COSINE = "cosine"), s),
    N = (((i = {}).UP = "up"), (i.DOWN = "down"), i);
let g = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: a,
            yAxisAnimationData: s,
            parallaxAnimationData: i,
            animateXAxisWiggle: d = !1,
            isMotionReduced: u = !1,
            animationSpeedScale: m = 1,
            children: A,
        } = e,
        N = (0, c.z)(
            null != s ? { from: { y: 0 }, to: { y: 1 }, config: { duration: s.duration * m }, loop: !0 } : { y: 0 },
        ),
        g = s?.path === "sine" ? Math.sin : Math.cos,
        [p, x] = (0, r.useState)(1),
        E = (0, c.z)(
            null != a
                ? {
                      from: { scale: p > 0 ? a.startScale : a.endScale },
                      to: { scale: p > 0 ? a.endScale : a.startScale },
                      config: { duration: a.duration * m },
                      onRest: () => x((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [h, f] = (0, r.useState)(1),
        C = (0, c.z)(
            null != t
                ? {
                      from: { blur: h > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: h > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * m },
                      onRest: () => f((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        R = (0, r.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * m), [m]),
        [_, I] = (0, r.useState)(0),
        [T, b] = (0, r.useState)(1),
        j = (0, c.z)({ xOffset: _, config: { tension: 10, friction: 10, duration: R } });
    return ((0, o.A)(() => {
        I(T * (0.5 * Math.random() * 5 + 2.5)), b((e) => -1 * e);
    }, R),
    u)
        ? A
        : (0, n.jsx)(l.animated.div, {
              style: {
                  transform: N.y?.to((e) => {
                      if (null == s) return "translateY(0px)";
                      let t = g(e * Math.PI * 2) * s.range,
                          a = 0;
                      if (null != i) {
                          let e = i.range * (1 - i.containerVisibilityPercentage);
                          a = "up" === i.pathDirection ? -e : e;
                      }
                      return `translateY(${t + a}px)`;
                  }),
                  translateX: d ? j.xOffset.to((e) => `${e}px`) : 0,
                  scale: E.scale,
                  filter: C.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != i && i.changeOpacity ? i.containerVisibilityPercentage : 1,
              },
              children: A,
          });
};
