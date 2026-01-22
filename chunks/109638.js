n.d(t, {
    A: () => m,
    o: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(835245),
    o = n(311907),
    l = n(775602),
    c = n(667050),
    u = n(407781),
    d = n(287809),
    f = n(194486),
    p = n(874880);
let _ = 50;
function h(e) {
    var t;
    let n = null == e || null == (t = e.parentElement) ? void 0 : t.getBoundingClientRect();
    return null == n
        ? {
              width: 0,
              height: 0,
          }
        : {
              width: n.width,
              height: n.height,
          };
}
let m = i.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: h } = e,
        m = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        g = (0, o.bG)([l.A], () => l.A.useReducedMotion),
        [E, b] = i.useState([]),
        y = E.length < _,
        O = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        A = i.useCallback(() => {
            if (!g && y && O && null != m) {
                var e;
                let t = (0, c.Br)({
                        id: n.emojiId,
                        name: null != (e = n.emojiName) ? e : "",
                        animated: !1,
                    }),
                    r = null != n.emojiId,
                    i = f.B.PREMIUM,
                    o = (0, a.random)(c.Bf[i].length, !1),
                    l = {
                        id: (0, s.A)(),
                        animationId: o,
                        animationType: i,
                        shouldResize: r,
                        url: t,
                        userId: m.id,
                    };
                b((e) => [...e, l]);
            }
        }, [g, y, O, m, n]);
    i.useImperativeHandle(t, () => ({ addAnimation: A }));
    let v = i.useCallback((e) => {
        b((t) => {
            let n = [...t],
                r = n.findIndex((t) => t.id === e);
            return n.splice(r, 1), n;
        });
    }, []);
    return g || !O
        ? null
        : (0, r.jsx)("div", {
              className: p.z,
              style: {
                  width: h.width,
                  height: h.height,
              },
              children: E.map((e) =>
                  (0, r.jsx)(
                      u.A,
                      {
                          containerDimensions: h,
                          effect: e,
                          onComplete: v,
                      },
                      e.id,
                  ),
              ),
          });
});
