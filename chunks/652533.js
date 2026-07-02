n.d(t, { $G: () => d, Ay: () => N, MN: () => g, Mp: () => u, XN: () => m, aV: () => A });
var i,
    a,
    s = n(627968),
    r = n(64700),
    l = n(18005),
    c = n(717421),
    o = n(396583);
let d = 3e3,
    u = 4e3,
    m = 6e3;
var A = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    g = (((a = {}).UP = "up"), (a.DOWN = "down"), a);
let N = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: n,
            yAxisAnimationData: i,
            parallaxAnimationData: a,
            animateXAxisWiggle: d = !1,
            isMotionReduced: u = !1,
            animationSpeedScale: m = 1,
            children: A,
        } = e,
        g = (0, c.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * m }, loop: !0 } : { y: 0 },
        ),
        N = i?.path === "sine" ? Math.sin : Math.cos,
        [p, f] = (0, r.useState)(1),
        E = (0, c.z)(
            null != n
                ? {
                      from: { scale: p > 0 ? n.startScale : n.endScale },
                      to: { scale: p > 0 ? n.endScale : n.startScale },
                      config: { duration: n.duration * m },
                      onRest: () => f((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [x, h] = (0, r.useState)(1),
        C = (0, c.z)(
            null != t
                ? {
                      from: { blur: x > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: x > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * m },
                      onRest: () => h((e) => -1 * e),
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
        : (0, s.jsx)(l.animated.div, {
              style: {
                  transform: g.y?.to((e) => {
                      if (null == i) return "translateY(0px)";
                      let t = N(e * Math.PI * 2) * i.range,
                          n = 0;
                      if (null != a) {
                          let e = a.range * (1 - a.containerVisibilityPercentage);
                          n = "up" === a.pathDirection ? -e : e;
                      }
                      return `translateY(${t + n}px)`;
                  }),
                  translateX: d ? j.xOffset.to((e) => `${e}px`) : 0,
                  scale: E.scale,
                  filter: C.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != a && a.changeOpacity ? a.containerVisibilityPercentage : 1,
              },
              children: A,
          });
};
