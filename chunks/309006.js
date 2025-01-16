r.d(n, {
    a: function () {
        return E;
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
    h = r(74538),
    p = r(353368),
    m = r(685596);
let g = 50;
function E(e) {
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
        E = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
        v = (0, u.e7)([c.Z], () => c.Z.useReducedMotion),
        [I, T] = s.useState([]),
        b = I.length < g,
        y = (null == r ? void 0 : r.emojiId) != null || (null == r ? void 0 : r.emojiName) != null,
        S = s.useCallback(() => {
            if (!v && b && y && null != E) {
                var e;
                let n = (0, d._r)({
                        id: r.emojiId,
                        name: null !== (e = r.emojiName) && void 0 !== e ? e : '',
                        animated: !1
                    }),
                    i = null != r.emojiId,
                    a = h.ZP.isPremium(E) ? p.q.PREMIUM : p.q.BASIC,
                    s = (0, o.random)(d.Jw[a].length, !1),
                    u = {
                        id: (0, l.Z)(),
                        animationId: s,
                        animationType: a,
                        shouldResize: i,
                        url: n,
                        userId: E.id
                    };
                T((e) => [...e, u]);
            }
        }, [v, b, y, E, r]);
    s.useImperativeHandle(n, () => ({ addAnimation: S }));
    let A = s.useCallback((e) => {
        T((n) => {
            let r = [...n],
                i = r.findIndex((n) => n.id === e);
            return r.splice(i, 1), r;
        });
    }, []);
    return v || !y
        ? null
        : (0, a.jsx)('div', {
              className: m.effects,
              style: {
                  width: i.width,
                  height: i.height
              },
              children: I.map((e) =>
                  (0, a.jsx)(
                      f.Z,
                      {
                          containerDimensions: i,
                          effect: e,
                          onComplete: A
                      },
                      e.id
                  )
              )
          });
});
