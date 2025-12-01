n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(480210),
    a = n(119837),
    o = n(107225);
let s = (e) => {
    var t, n, s, l;
    let {
            layerConfig: c,
            animationType: u,
            ticking: d,
            time: f,
            hasPlayedThrough: p,
            setHasPlayedThrough: _,
            urlQueryString: m,
            maxLoops: h,
            loopEnd: g,
            bannerAdjustment: E,
        } = e,
        b = !0;
    if (
        (d || (b = !1),
        f < c.start && (b = !1),
        !c.loop && f > c.duration + c.start && (b = !1),
        u === i.y.ANIMATION_TYPE_PERSISTENT && !p && null != h && f >= g && _(!0),
        c.loop && void 0 !== c.loopDelay && c.loopDelay > 0)
    ) {
        let e = c.duration + c.loopDelay,
            t = Math.floor((f - c.start) / e);
        f - c.start - t * e > c.duration &&
            (u === i.y.ANIMATION_TYPE_INTERMITTENT && !p && null != h && t >= h && _(!0), (b = !1));
    }
    return b
        ? (0, r.jsx)("img", {
              src: null != m ? "".concat(c.src, "?query=").concat(m) : c.src,
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
