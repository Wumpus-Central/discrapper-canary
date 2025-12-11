n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(480210),
    a = n(119837),
    o = n(664545);
let s = (e) => {
    var t, n, s, l, c;
    let {
            layerConfig: u,
            animationType: d,
            ticking: f,
            time: p,
            hasPlayedThrough: _,
            setHasPlayedThrough: m,
            maxLoops: h,
            loopEnd: g,
            bannerAdjustment: E,
            imageData: b,
        } = e,
        y = !0;
    if (
        (f || (y = !1),
        p < u.start && (y = !1),
        !u.loop && p > u.duration + u.start && (y = !1),
        d === i.y.ANIMATION_TYPE_PERSISTENT && !_ && null != h && p >= g && m(!0),
        u.loop && void 0 !== u.loopDelay && u.loopDelay > 0)
    ) {
        let e = u.duration + u.loopDelay,
            t = Math.floor((p - u.start) / e);
        p - u.start - t * e > u.duration &&
            (d === i.y.ANIMATION_TYPE_INTERMITTENT && !_ && null != h && t >= h && m(!0), (y = !1));
    }
    return y
        ? (0, r.jsx)("img", {
              src: null != (s = null == b ? void 0 : b.src) ? s : u.src,
              className: o.effect,
              style: {
                  top: (null != (l = null == (t = u.position) ? void 0 : t.y) ? l : 0) - E,
                  left: null != (c = null == (n = u.position) ? void 0 : n.x) ? c : 0,
              },
              alt: "",
              "aria-hidden": !0,
          })
        : (0, r.jsx)("img", {
              src: a.td,
              alt: "",
              "aria-hidden": !0,
          });
};
