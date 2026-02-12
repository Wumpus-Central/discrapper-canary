"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(40153),
    s = n(765671),
    o = n(700331),
    l = n(454290);
let u = 400;
function c(e) {
    let { width: t, height: n, offset: r, delta: i } = e,
        a = t > window.innerWidth,
        s = n > window.innerHeight,
        o = (window.innerWidth - t) / 2 + r.x,
        l = (window.innerHeight - n) / 2 + r.y,
        u = (window.innerWidth + t) / 2 + r.x,
        c = (window.innerHeight + n) / 2 + r.y,
        { x: d, y: _ } = r;
    return (
        a &&
            ((d += i.x),
            o + i.x > 0 && (d = (t - window.innerWidth) / 2),
            u + i.x < window.innerWidth && (d = (window.innerWidth - t) / 2)),
        s &&
            ((_ += i.y),
            l + i.y > 0 && (_ = (n - window.innerHeight) / 2),
            c + i.y < window.innerHeight && (_ = (window.innerHeight - n) / 2)),
        { x: d, y: _ }
    );
}
function d(e) {
    let { children: t } = e,
        { scale: n, x: d, y: _, setOffset: f, zoomed: h, setZoomed: p } = (0, l.Q)(),
        { ref: g, width: E, height: A } = (0, s.Ay)(),
        [I, T] = [E ?? 0, A ?? 0],
        y = i.useRef(!1),
        [S, v] = i.useState({ x: 0, y: 0 }),
        C = (e, t) => {
            let r = c({
                width: I * n.goal,
                height: T * n.goal,
                offset: { x: d.goal, y: _.goal },
                delta: { x: e, y: t },
            });
            f(r.x, r.y, { immediate: !0 });
        },
        b = (e) => {
            h && 0 === e.button && (e.preventDefault(), (y.current = !0), v({ x: e.clientX, y: e.clientY }));
        },
        N = (e) => {
            if (!h) {
                if (0 === e.button) {
                    o.l.markActionPerformed(o.N.ZOOM_IN_IMAGE_PRESSED), p(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        r = e.clientY - window.innerHeight / 2,
                        i = c({
                            width: I * n.goal,
                            height: T * n.goal,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -r * (n.goal - 1) },
                        });
                    f(i.x, i.y);
                }
                return;
            }
            (e.clientX - S.x) ** 2 + (e.clientY - S.y) ** 2 < u &&
                (o.l.markActionPerformed(o.N.ZOOM_OUT_IMAGE_PRESSED), p(!1)),
                (y.current = !1);
        };
    return (0, r.jsx)(a.animated.div, {
        ref: g,
        onMouseDown: b,
        onMouseUp: N,
        onMouseMove: (e) => y.current && C(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && C(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (y.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: d, y: _, cursor: h ? "zoom-out" : "zoom-in" },
        children: t,
    });
}
let _ = i.memo(d);
