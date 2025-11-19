n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(480210),
    a = n(119837),
    o = n(341225);
let s = (e) => {
    var t, n, s, l;
    let {
            layerConfig: c,
            animationType: u,
            ticking: d,
            time: f,
            hasPlayedThrough: _,
            setHasPlayedThrough: p,
            urlQueryString: h,
            maxLoops: m,
            loopEnd: g,
            bannerAdjustment: E,
        } = e,
        b = !0;
    if (
        (d || (b = !1),
        f < c.start && (b = !1),
        !c.loop && f > c.duration + c.start && (b = !1),
        u === i.y.ANIMATION_TYPE_PERSISTENT && !_ && null != m && f >= g && p(!0),
        c.loop && void 0 !== c.loopDelay && c.loopDelay > 0)
    ) {
        let e = c.duration + c.loopDelay,
            t = Math.floor((f - c.start) / e);
        f - c.start - t * e > c.duration &&
            (u === i.y.ANIMATION_TYPE_INTERMITTENT && !_ && null != m && t >= m && p(!0), (b = !1));
    }
    return b
        ? (0, r.jsx)("img", {
              src: null != h ? "".concat(c.src, "?query=").concat(h) : c.src,
              className: o.effect,
              style: {
                  top: (null != (s = null == (t = c.position) ? void 0 : t.y) ? s : 0) - E,
                  left: null != (l = null == (n = c.position) ? void 0 : n.x) ? l : 0,
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
