"use strict";
n.d(t, { $G: () => c, Ay: () => p, MN: () => f, Mp: () => d, XN: () => _, aV: () => h });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(873174),
    l = n(717421),
    u = n(396583);
let c = 3e3,
    d = 4e3,
    _ = 6e3;
var h = (((i = {}).SINE = "sine"), (i.COSINE = "cosine"), i),
    f = (((r = {}).UP = "up"), (r.DOWN = "down"), r);
let p = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: n,
            yAxisAnimationData: i,
            parallaxAnimationData: r,
            animateXAxisWiggle: c = !1,
            isMotionReduced: d = !1,
            animationSpeedScale: _ = 1,
            children: h,
        } = e,
        f = (0, l.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * _ }, loop: !0 } : { y: 0 },
        ),
        p = i?.path === "sine" ? Math.sin : Math.cos,
        [E, m] = (0, a.useState)(1),
        g = (0, l.z)(
            null != n
                ? {
                      from: { scale: E > 0 ? n.startScale : n.endScale },
                      to: { scale: E > 0 ? n.endScale : n.startScale },
                      config: { duration: n.duration * _ },
                      onRest: () => m((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [A, I] = (0, a.useState)(1),
        T = (0, l.z)(
            null != t
                ? {
                      from: { blur: A > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: A > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * _ },
                      onRest: () => I((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        S = (0, a.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * _), [_]),
        [y, N] = (0, a.useState)(0),
        [v, C] = (0, a.useState)(1),
        R = (0, l.z)({ xOffset: y, config: { tension: 10, friction: 10, duration: S } });
    return ((0, u.A)(() => {
        N(v * (0.5 * Math.random() * 5 + 2.5)), C((e) => -1 * e);
    }, S),
    d)
        ? h
        : (0, s.jsx)(o.animated.div, {
              style: {
                  transform: f.y?.to((e) => {
                      if (null == i) return "translateY(0px)";
                      let t = p(e * Math.PI * 2) * i.range,
                          n = 0;
                      if (null != r) {
                          let e = r.range * (1 - r.containerVisibilityPercentage);
                          n = "up" === r.pathDirection ? -e : e;
                      }
                      return `translateY(${t + n}px)`;
                  }),
                  translateX: c ? R.xOffset.to((e) => `${e}px`) : 0,
                  scale: g.scale,
                  filter: T.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != r && r.changeOpacity ? r.containerVisibilityPercentage : 1,
              },
              children: h,
          });
};
