(n.d(t, {
    SR: () => d,
    ZP: () => h,
    b5: () => u,
    eo: () => g,
    js: () => p,
    vi: () => m
}),
    n(388685));
var i,
    r,
    s = n(255367),
    a = n(73800),
    l = n(652141),
    o = n(481060),
    c = n(745735);
let d = 3000,
    u = 4000,
    m = 6000;
var p = (((i = {}).SINE = 'sine'), (i.COSINE = 'cosine'), i),
    g = (((r = {}).UP = 'up'), (r.DOWN = 'down'), r);
let h = (e) => {
    var t, n;
    let { blurAnimationData: i, scaleAnimationData: r, yAxisAnimationData: d, parallaxAnimationData: u, animateXAxisWiggle: m = !1, isMotionReduced: p = !1, children: g } = e,
        h = (0, o.q_F)(
            null != d
                ? {
                      from: { y: 0 },
                      to: { y: 1 },
                      config: { duration: d.duration },
                      loop: !0
                  }
                : { y: 0 }
        ),
        f = (null == d ? void 0 : d.path) === 'sine' ? Math.sin : Math.cos,
        [b, x] = (0, a.useState)(1),
        _ = (0, o.q_F)(
            null != r
                ? {
                      from: { scale: b > 0 ? r.startScale : r.endScale },
                      to: { scale: b > 0 ? r.endScale : r.startScale },
                      config: { duration: r.duration },
                      onRest: () => x((e) => -1 * e)
                  }
                : { scale: 1 }
        ),
        [j, E] = (0, a.useState)(1),
        O = (0, o.q_F)(
            null != i
                ? {
                      from: { blur: j > 0 ? i.startBlurRadius : i.endBlurRadius },
                      to: { blur: j > 0 ? i.endBlurRadius : i.startBlurRadius },
                      config: { duration: i.duration },
                      onRest: () => E((e) => -1 * e)
                  }
                : { blur: 0 }
        ),
        C = (0, a.useMemo)(() => Math.round(750 + (200 * Math.random() - 100)), []),
        [v, S] = (0, a.useState)(0),
        [T, N] = (0, a.useState)(1),
        I = (0, o.q_F)({
            xOffset: v,
            config: {
                tension: 10,
                friction: 10,
                duration: C
            }
        });
    return ((0, c.Z)(() => {
        (S(T * (0.5 * Math.random() * 5 + 2.5)), N((e) => -1 * e));
    }, C),
    p)
        ? g
        : (0, s.jsx)(l.animated.div, {
              style: {
                  transform:
                      null == (t = h.y)
                          ? void 0
                          : t.to((e) => {
                                if (null == d) return 'translateY(0px)';
                                let t = f(e * Math.PI * 2) * d.range,
                                    n = 0;
                                if (null != u) {
                                    let e = u.range * (1 - u.containerVisibilityPercentage);
                                    n = 'up' === u.pathDirection ? -e : e;
                                }
                                return 'translateY('.concat(t + n, 'px)');
                            }),
                  translateX: m ? I.xOffset.to((e) => ''.concat(e, 'px')) : 0,
                  scale: _.scale,
                  filter: null == (n = O.blur) ? void 0 : n.to((e) => 'blur('.concat(e, 'px)')),
                  opacity: null != u && u.changeOpacity ? u.containerVisibilityPercentage : 1
              },
              children: g
          });
};
