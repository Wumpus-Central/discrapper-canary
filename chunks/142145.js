var i = r(200651);
r(192379);
var a = r(119837),
    s = r(802433),
    o = r(264275);
let l = (e) => {
    var n, r, l, u;
    let { layerConfig: c, animationType: d, ticking: f, time: _, accessibilityLabel: h, hasPlayedThrough: p, setHasPlayedThrough: m, urlQueryString: g, maxLoops: E, loopEnd: v, bannerAdjustment: I } = e,
        T = !0;
    if ((!f && (T = !1), _ < c.start && (T = !1), !c.loop && _ > c.duration + c.start && (T = !1), d === s.Q.PERSISTENT && !p && null != E && _ >= v && m(!0), c.loop && void 0 !== c.loopDelay && c.loopDelay > 0)) {
        let e = c.duration + c.loopDelay,
            n = Math.floor((_ - c.start) / e);
        _ - c.start - n * e > c.duration && (d === s.Q.INTERMITTENT && !p && null != E && n >= E && m(!0), (T = !1));
    }
    return T
        ? (0, i.jsx)('img', {
              src: null != g ? ''.concat(c.src, '?query=').concat(g) : c.src,
              className: o.effect,
              style: {
                  top: (null !== (l = null === (n = c.position) || void 0 === n ? void 0 : n.y) && void 0 !== l ? l : 0) - I,
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
