n.d(t, {
    SR: () => l,
    ZP: () => _,
    b5: () => c,
    eo: () => f,
    js: () => d,
    vi: () => u,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(803948),
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
let _ = (e) => {
    var t, n;
    let {
            blurAnimationData: l,
            scaleAnimationData: c,
            yAxisAnimationData: u,
            parallaxAnimationData: d,
            animateXAxisWiggle: f = !1,
            isMotionReduced: _ = !1,
            children: p,
        } = e,
        h = (0, o.q_F)(
            null != u
                ? {
                      from: { y: 0 },
                      to: { y: 1 },
                      config: { duration: u.duration },
                      loop: !0,
                  }
                : { y: 0 },
        ),
        m = (null == u ? void 0 : u.path) === "sine" ? Math.sin : Math.cos,
        [g, E] = (0, i.useState)(1),
        b = (0, o.q_F)(
            null != c
                ? {
                      from: { scale: g > 0 ? c.startScale : c.endScale },
                      to: { scale: g > 0 ? c.endScale : c.startScale },
                      config: { duration: c.duration },
                      onRest: () => E((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [y, O] = (0, i.useState)(1),
        v = (0, o.q_F)(
            null != l
                ? {
                      from: { blur: y > 0 ? l.startBlurRadius : l.endBlurRadius },
                      to: { blur: y > 0 ? l.endBlurRadius : l.startBlurRadius },
                      config: { duration: l.duration },
                      onRest: () => O((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        I = (0, i.useMemo)(() => Math.round(750 + (200 * Math.random() - 100)), []),
        T = 5,
        [S, A] = (0, i.useState)(0),
        [C, N] = (0, i.useState)(1),
        R = (0, o.q_F)({
            xOffset: S,
            config: {
                tension: 10,
                friction: 10,
                duration: I,
            },
        });
    return ((0, s.Z)(() => {
        A(C * (0.5 * Math.random() * T + T / 2)), N((e) => -1 * e);
    }, I),
    _)
        ? p
        : (0, r.jsx)(a.animated.div, {
              style: {
                  transform:
                      null == (t = h.y)
                          ? void 0
                          : t.to((e) => {
                                if (null == u) return "translateY(0px)";
                                let t = m(e * Math.PI * 2) * u.range,
                                    n = 0;
                                if (null != d) {
                                    let e = d.range * (1 - d.containerVisibilityPercentage);
                                    n = "up" === d.pathDirection ? -e : e;
                                }
                                return "translateY(".concat(t + n, "px)");
                            }),
                  translateX: f ? R.xOffset.to((e) => "".concat(e, "px")) : 0,
                  scale: b.scale,
                  filter: null == (n = v.blur) ? void 0 : n.to((e) => "blur(".concat(e, "px)")),
                  opacity: null != d && d.changeOpacity ? d.containerVisibilityPercentage : 1,
              },
              children: p,
          });
};
