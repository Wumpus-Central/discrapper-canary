"use strict";
n.d(t, { A: () => m, o: () => h });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(835245),
    o = n(311907),
    l = n(775602),
    u = n(667050),
    c = n(407781),
    d = n(287809),
    _ = n(194486),
    f = n(874880);
let p = 50;
function h(e) {
    let t = e?.parentElement?.getBoundingClientRect();
    return null == t ? { width: 0, height: 0 } : { width: t.width, height: t.height };
}
let m = i.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: h } = e,
        m = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        g = (0, o.bG)([l.A], () => l.A.useReducedMotion),
        [E, A] = i.useState([]),
        I = E.length < p,
        T = n?.emojiId != null || n?.emojiName != null,
        y = i.useCallback(() => {
            if (!g && I && T && null != m) {
                let e = (0, u.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    r = _.B.PREMIUM,
                    i = (0, a.random)(u.Bf[r].length, !1),
                    o = { id: (0, s.A)(), animationId: i, animationType: r, shouldResize: t, url: e, userId: m.id };
                A((e) => [...e, o]);
            }
        }, [g, I, T, m, n]);
    i.useImperativeHandle(t, () => ({ addAnimation: y }));
    let S = i.useCallback((e) => {
        A((t) => {
            let n = [...t],
                r = n.findIndex((t) => t.id === e);
            return n.splice(r, 1), n;
        });
    }, []);
    return g || !T
        ? null
        : (0, r.jsx)("div", {
              className: f.z,
              style: { width: h.width, height: h.height },
              children: E.map((e) => (0, r.jsx)(c.A, { containerDimensions: h, effect: e, onComplete: S }, e.id)),
          });
});
