n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(119837),
    a = n(802433),
    o = n(422786);
let s = (e) => {
    var t, n, s, l;
    let { layerConfig: c, animationType: u, ticking: d, time: f, accessibilityLabel: _, hasPlayedThrough: p, setHasPlayedThrough: h, urlQueryString: m, maxLoops: g, loopEnd: E, bannerAdjustment: b } = e,
        y = !0;
    if ((d || (y = !1), f < c.start && (y = !1), !c.loop && f > c.duration + c.start && (y = !1), u === a.Q.PERSISTENT && !p && null != g && f >= E && h(!0), c.loop && void 0 !== c.loopDelay && c.loopDelay > 0)) {
        let e = c.duration + c.loopDelay,
            t = Math.floor((f - c.start) / e);
        f - c.start - t * e > c.duration && (u === a.Q.INTERMITTENT && !p && null != g && t >= g && h(!0), (y = !1));
    }
    return y
        ? (0, r.jsx)('img', {
              src: null != m ? ''.concat(c.src, '?query=').concat(m) : c.src,
              className: o.effect,
              style: {
                  top: (null != (s = null == (t = c.position) ? void 0 : t.y) ? s : 0) - b,
                  left: null != (l = null == (n = c.position) ? void 0 : n.x) ? l : 0
              },
              alt: _
          })
        : (0, r.jsx)('img', {
              src: i.td,
              alt: _
          });
};
