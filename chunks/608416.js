n.d(t, { $G: () => d, Ay: () => f, MN: () => p, Mp: () => u, XN: () => _, aV: () => m });
var a,
    i,
    r = n(627968),
    s = n(64700),
    l = n(419354),
    c = n(717421),
    o = n(396583);
let d = 3e3,
    u = 4e3,
    _ = 6e3;
var m = (((a = {}).SINE = "sine"), (a.COSINE = "cosine"), a),
    p = (((i = {}).UP = "up"), (i.DOWN = "down"), i);
let f = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: n,
            yAxisAnimationData: a,
            parallaxAnimationData: i,
            animateXAxisWiggle: d = !1,
            isMotionReduced: u = !1,
            animationSpeedScale: _ = 1,
            children: m,
        } = e,
        p = (0, c.z)(
            null != a ? { from: { y: 0 }, to: { y: 1 }, config: { duration: a.duration * _ }, loop: !0 } : { y: 0 },
        ),
        f = a?.path === "sine" ? Math.sin : Math.cos,
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
        [x, b] = (0, s.useState)(1),
        C = (0, c.z)(
            null != t
                ? {
                      from: { blur: x > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: x > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * _ },
                      onRest: () => b((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        N = (0, s.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * _), [_]),
        [E, R] = (0, s.useState)(0),
        [I, v] = (0, s.useState)(1),
        T = (0, c.z)({ xOffset: E, config: { tension: 10, friction: 10, duration: N } });
    return ((0, o.A)(() => {
        R(I * (0.5 * Math.random() * 5 + 2.5)), v((e) => -1 * e);
    }, N),
    u)
        ? m
        : (0, r.jsx)(l.animated.div, {
              style: {
                  transform: p.y?.to((e) => {
                      if (null == a) return "translateY(0px)";
                      let t = f(e * Math.PI * 2) * a.range,
                          n = 0;
                      if (null != i) {
                          let e = i.range * (1 - i.containerVisibilityPercentage);
                          n = "up" === i.pathDirection ? -e : e;
                      }
                      return `translateY(${t + n}px)`;
                  }),
                  translateX: d ? T.xOffset.to((e) => `${e}px`) : 0,
                  scale: h.scale,
                  filter: C.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != i && i.changeOpacity ? i.containerVisibilityPercentage : 1,
              },
              children: m,
          });
};
