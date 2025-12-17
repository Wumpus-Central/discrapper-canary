n.d(t, {
    SR: () => l,
    ZP: () => p,
    b5: () => c,
    eo: () => f,
    js: () => d,
    vi: () => u,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(236726),
    o = n(481060),
    s = n(745735);
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
            children: m,
        } = e,
        h = (0, o.q_F)(
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
        y = (0, o.q_F)(
            null != c
                ? {
                      from: { scale: E > 0 ? c.startScale : c.endScale },
                      to: { scale: E > 0 ? c.endScale : c.startScale },
                      config: { duration: c.duration * _ },
                      onRest: () => b((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [O, v] = (0, i.useState)(1),
        S = (0, o.q_F)(
            null != l
                ? {
                      from: { blur: O > 0 ? l.startBlurRadius : l.endBlurRadius },
                      to: { blur: O > 0 ? l.endBlurRadius : l.startBlurRadius },
                      config: { duration: l.duration * _ },
                      onRest: () => v((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        I = (0, i.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * _), [_]),
        T = 5,
        [C, A] = (0, i.useState)(0),
        [N, P] = (0, i.useState)(1),
        R = (0, o.q_F)({
            xOffset: C,
            config: {
                tension: 10,
                friction: 10,
                duration: I,
            },
        });
    return ((0, s.Z)(() => {
        A(N * (0.5 * Math.random() * T + T / 2)), P((e) => -1 * e);
    }, I),
    p)
        ? m
        : (0, r.jsx)(a.animated.div, {
              style: {
                  transform:
                      null == (t = h.y)
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
                  translateX: f ? R.xOffset.to((e) => "".concat(e, "px")) : 0,
                  scale: y.scale,
                  filter: null == (n = S.blur) ? void 0 : n.to((e) => "blur(".concat(e, "px)")),
                  opacity: null != d && d.changeOpacity ? d.containerVisibilityPercentage : 1,
              },
              children: m,
          });
};
