n.d(t, {
    Z: () => m,
    a: () => h
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n(772848),
    o = n(442837),
    l = n(607070),
    u = n(963838),
    c = n(39127),
    d = n(594174),
    f = n(353368),
    _ = n(740829);
let p = 50;
function h(e) {
    var t;
    let n = null == e ? void 0 : null === (t = e.parentElement) || void 0 === t ? void 0 : t.getBoundingClientRect();
    return null == n
        ? {
              width: 0,
              height: 0
          }
        : {
              width: n.width,
              height: n.height
          };
}
let m = r.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: h } = e,
        m = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        g = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        [E, v] = r.useState([]),
        y = E.length < p,
        I = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        T = r.useCallback(() => {
            if (!g && y && I && null != m) {
                var e;
                let t = (0, u._r)({
                        id: n.emojiId,
                        name: null !== (e = n.emojiName) && void 0 !== e ? e : '',
                        animated: !1
                    }),
                    i = null != n.emojiId,
                    r = f.q.PREMIUM,
                    o = (0, a.random)(u.Jw[r].length, !1),
                    l = {
                        id: (0, s.Z)(),
                        animationId: o,
                        animationType: r,
                        shouldResize: i,
                        url: t,
                        userId: m.id
                    };
                v((e) => [...e, l]);
            }
        }, [g, y, I, m, n]);
    r.useImperativeHandle(t, () => ({ addAnimation: T }));
    let b = r.useCallback((e) => {
        v((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return n.splice(i, 1), n;
        });
    }, []);
    return g || !I
        ? null
        : (0, i.jsx)('div', {
              className: _.effects,
              style: {
                  width: h.width,
                  height: h.height
              },
              children: E.map((e) =>
                  (0, i.jsx)(
                      c.Z,
                      {
                          containerDimensions: h,
                          effect: e,
                          onComplete: b
                      },
                      e.id
                  )
              )
          });
});
