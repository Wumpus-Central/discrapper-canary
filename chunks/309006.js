r.d(n, {
    a: function () {
        return g;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(392711);
var l = r(772848),
    u = r(442837),
    c = r(607070),
    d = r(963838),
    f = r(39127),
    _ = r(594174),
    h = r(353368),
    p = r(685596);
let m = 50;
function g(e) {
    var n;
    let r = null == e ? void 0 : null === (n = e.parentElement) || void 0 === n ? void 0 : n.getBoundingClientRect();
    return null == r
        ? {
              width: 0,
              height: 0
          }
        : {
              width: r.width,
              height: r.height
          };
}
n.Z = s.forwardRef(function (e, n) {
    let { sound: r, containerDimensions: i } = e,
        g = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
        E = (0, u.e7)([c.Z], () => c.Z.useReducedMotion),
        [v, I] = s.useState([]),
        T = v.length < m,
        b = (null == r ? void 0 : r.emojiId) != null || (null == r ? void 0 : r.emojiName) != null,
        y = s.useCallback(() => {
            if (!E && T && b && null != g) {
                var e;
                let n = (0, d._r)({
                        id: r.emojiId,
                        name: null !== (e = r.emojiName) && void 0 !== e ? e : '',
                        animated: !1
                    }),
                    i = null != r.emojiId,
                    a = h.q.PREMIUM,
                    s = (0, o.random)(d.Jw[a].length, !1),
                    u = {
                        id: (0, l.Z)(),
                        animationId: s,
                        animationType: a,
                        shouldResize: i,
                        url: n,
                        userId: g.id
                    };
                I((e) => [...e, u]);
            }
        }, [E, T, b, g, r]);
    s.useImperativeHandle(n, () => ({ addAnimation: y }));
    let S = s.useCallback((e) => {
        I((n) => {
            let r = [...n],
                i = r.findIndex((n) => n.id === e);
            return r.splice(i, 1), r;
        });
    }, []);
    return E || !b
        ? null
        : (0, a.jsx)('div', {
              className: p.effects,
              style: {
                  width: i.width,
                  height: i.height
              },
              children: v.map((e) =>
                  (0, a.jsx)(
                      f.Z,
                      {
                          containerDimensions: i,
                          effect: e,
                          onComplete: S
                      },
                      e.id
                  )
              )
          });
});
