n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(119837),
    a = n(802433),
    o = n(422786);
let s = (e) => {
    var t, n, s, l;
    let { layerConfig: c, animationType: u, ticking: d, time: _, hasPlayedThrough: f, setHasPlayedThrough: p, urlQueryString: h, maxLoops: m, loopEnd: g, bannerAdjustment: E } = e,
        b = !0;
    if ((d || (b = !1), _ < c.start && (b = !1), !c.loop && _ > c.duration + c.start && (b = !1), u === a.Q.PERSISTENT && !f && null != m && _ >= g && p(!0), c.loop && void 0 !== c.loopDelay && c.loopDelay > 0)) {
        let e = c.duration + c.loopDelay,
            t = Math.floor((_ - c.start) / e);
        _ - c.start - t * e > c.duration && (u === a.Q.INTERMITTENT && !f && null != m && t >= m && p(!0), (b = !1));
    }
    return b
        ? (0, r.jsx)('img', {
              src: null != h ? ''.concat(c.src, '?query=').concat(h) : c.src,
              className: o.effect,
              style: {
                  top: (null != (s = null == (t = c.position) ? void 0 : t.y) ? s : 0) - E,
                  left: null != (l = null == (n = c.position) ? void 0 : n.x) ? l : 0
              },
              alt: '',
              'aria-hidden': !0
          })
        : (0, r.jsx)('img', {
              src: i.td,
              alt: '',
              'aria-hidden': !0
          });
};
