"use strict";
n.d(t, { A: () => f, o: () => p });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n(835245),
    a = n(311907),
    o = n(775602),
    c = n(667050),
    u = n(407781),
    d = n(287809),
    h = n(194486),
    m = n(651175);
function p(e) {
    let t = e?.parentElement?.getBoundingClientRect();
    return null == t ? { width: 0, height: 0 } : { width: t.width, height: t.height };
}
let f = l.forwardRef(function (e, t) {
    let { sound: n, containerDimensions: p } = e,
        f = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        g = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        [_, x] = l.useState([]),
        A = _.length < 50,
        C = n?.emojiId != null || n?.emojiName != null,
        E = l.useCallback(() => {
            if (!g && A && C && null != f) {
                let e = (0, c.Br)({ id: n.emojiId, name: n.emojiName ?? "", animated: !1 }),
                    t = null != n.emojiId,
                    i = h.B.PREMIUM,
                    l = (0, s.random)(c.Bf[i].length, !1),
                    a = { id: (0, r.A)(), animationId: l, animationType: i, shouldResize: t, url: e, userId: f.id };
                x((e) => [...e, a]);
            }
        }, [g, A, C, f, n]);
    l.useImperativeHandle(t, () => ({ addAnimation: E }));
    let I = l.useCallback((e) => {
        x((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return n.splice(i, 1), n;
        });
    }, []);
    return g || !C
        ? null
        : (0, i.jsx)("div", {
              className: m.z,
              style: { width: p.width, height: p.height },
              children: _.map((e) => (0, i.jsx)(u.A, { containerDimensions: p, effect: e, onComplete: I }, e.id)),
          });
});
