n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(119837),
    o = n(802433),
    a = n(663058);
let s = (e) => {
    var t, n, s, l;
    let { layerConfig: c, animationType: u, ticking: d, time: f, accessibilityLabel: p, hasPlayedThrough: _, setHasPlayedThrough: h, urlQueryString: m, maxLoops: g, loopEnd: E, bannerAdjustment: v } = e,
        b = !0;
    if ((d || (b = !1), f < c.start && (b = !1), !c.loop && f > c.duration + c.start && (b = !1), u === o.Q.PERSISTENT && !_ && null != g && f >= E && h(!0), c.loop && void 0 !== c.loopDelay && c.loopDelay > 0)) {
        let e = c.duration + c.loopDelay,
            t = Math.floor((f - c.start) / e);
        f - c.start - t * e > c.duration && (u === o.Q.INTERMITTENT && !_ && null != g && t >= g && h(!0), (b = !1));
    }
    return b
        ? (0, r.jsx)('img', {
              src: null != m ? ''.concat(c.src, '?query=').concat(m) : c.src,
              className: a.effect,
              style: {
                  top: (null !== (s = null === (t = c.position) || void 0 === t ? void 0 : t.y) && void 0 !== s ? s : 0) - v,
                  left: null !== (l = null === (n = c.position) || void 0 === n ? void 0 : n.x) && void 0 !== l ? l : 0
              },
              alt: p
          })
        : (0, r.jsx)('img', {
              src: i.td,
              alt: p
          });
};
