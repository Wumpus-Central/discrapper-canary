n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(119837),
    a = n(802433),
    s = n(264275);
let o = (e) => {
    var t, n, o, l;
    let { layerConfig: u, animationType: c, ticking: d, time: f, accessibilityLabel: _, hasPlayedThrough: p, setHasPlayedThrough: h, urlQueryString: m, maxLoops: g, loopEnd: E, bannerAdjustment: v } = e,
        y = !0;
    if ((d || (y = !1), f < u.start && (y = !1), !u.loop && f > u.duration + u.start && (y = !1), c === a.Q.PERSISTENT && !p && null != g && f >= E && h(!0), u.loop && void 0 !== u.loopDelay && u.loopDelay > 0)) {
        let e = u.duration + u.loopDelay,
            t = Math.floor((f - u.start) / e);
        f - u.start - t * e > u.duration && (c === a.Q.INTERMITTENT && !p && null != g && t >= g && h(!0), (y = !1));
    }
    return y
        ? (0, i.jsx)('img', {
              src: null != m ? ''.concat(u.src, '?query=').concat(m) : u.src,
              className: s.effect,
              style: {
                  top: (null !== (o = null === (t = u.position) || void 0 === t ? void 0 : t.y) && void 0 !== o ? o : 0) - v,
                  left: null !== (l = null === (n = u.position) || void 0 === n ? void 0 : n.x) && void 0 !== l ? l : 0
              },
              alt: _
          })
        : (0, i.jsx)('img', {
              src: r.td,
              alt: _
          });
};
