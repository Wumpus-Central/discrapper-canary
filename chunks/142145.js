var i = r(200651);
r(192379);
var a = r(119837),
    o = r(802433),
    s = r(264275);
let l = (e) => {
    var n, r, l, u;
    let { layerConfig: c, animationType: d, ticking: f, time: p, accessibilityLabel: h, hasPlayedThrough: _, setHasPlayedThrough: m, urlQueryString: g, maxLoops: E, loopEnd: v, bannerAdjustment: y } = e,
        b = !0;
    if ((!f && (b = !1), p < c.start && (b = !1), !c.loop && p > c.duration + c.start && (b = !1), d === o.Q.PERSISTENT && !_ && null != E && p >= v && m(!0), c.loop && void 0 !== c.loopDelay && c.loopDelay > 0)) {
        let e = c.duration + c.loopDelay,
            n = Math.floor((p - c.start) / e);
        p - c.start - n * e > c.duration && (d === o.Q.INTERMITTENT && !_ && null != E && n >= E && m(!0), (b = !1));
    }
    return b
        ? (0, i.jsx)('img', {
              src: null != g ? ''.concat(c.src, '?query=').concat(g) : c.src,
              className: s.effect,
              style: {
                  top: (null !== (l = null === (n = c.position) || void 0 === n ? void 0 : n.y) && void 0 !== l ? l : 0) - y,
                  left: null !== (u = null === (r = c.position) || void 0 === r ? void 0 : r.x) && void 0 !== u ? u : 0
              },
              alt: h
          })
        : (0, i.jsx)('img', {
              src: a.td,
              alt: h
          });
};
n.Z = l;
