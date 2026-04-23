"use strict";
n.d(t, { A: () => h, o: () => p });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(835245),
    o = n(311907),
    l = n(775602),
    u = n(667050),
    c = n(407781),
    d = n(287809),
    _ = n(194486),
    f = n(651175);
function p(e) {
    let t = e?.parentElement?.getBoundingClientRect();
    return null == t ? { width: 0, height: 0 } : { width: t.width, height: t.height };
}
let h = i.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: p } = e,
        h = (0, o.bG)([d.default], () => d.default.getCurrentUser()),
        E = (0, o.bG)([l.A], () => l.A.useReducedMotion),
        [m, g] = i.useState([]),
        A = m.length < 50,
        I = n?.emojiId != null || n?.emojiName != null,
        T = i.useCallback(() => {
            if (!E && A && I && null != h) {
                let e = (0, u.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    r = _.B.PREMIUM,
                    i = (0, s.random)(u.Bf[r].length, !1),
                    o = { id: (0, a.A)(), animationId: i, animationType: r, shouldResize: t, url: e, userId: h.id };
                g((e) => [...e, o]);
            }
        }, [E, A, I, h, n]);
    i.useImperativeHandle(t, () => ({ addAnimation: T }));
    let S = i.useCallback((e) => {
        g((t) => {
            let n = [...t],
                r = n.findIndex((t) => t.id === e);
            return n.splice(r, 1), n;
        });
    }, []);
    return E || !I
        ? null
        : (0, r.jsx)("div", {
              className: f.z,
              style: { width: p.width, height: p.height },
              children: m.map((e) => (0, r.jsx)(c.A, { containerDimensions: p, effect: e, onComplete: S }, e.id)),
          });
});
