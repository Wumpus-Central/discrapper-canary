"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(4208),
    a = n(765671),
    o = n(700331),
    l = n(454290);
let u = 400;
function c(e) {
    let { width: t, height: n, offset: r, delta: i } = e,
        s = t > window.innerWidth,
        a = n > window.innerHeight,
        o = (window.innerWidth - t) / 2 + r.x,
        l = (window.innerHeight - n) / 2 + r.y,
        u = (window.innerWidth + t) / 2 + r.x,
        c = (window.innerHeight + n) / 2 + r.y,
        { x: d, y: _ } = r;
    return (
        s &&
            ((d += i.x),
            o + i.x > 0 && (d = (t - window.innerWidth) / 2),
            u + i.x < window.innerWidth && (d = (window.innerWidth - t) / 2)),
        a &&
            ((_ += i.y),
            l + i.y > 0 && (_ = (n - window.innerHeight) / 2),
            c + i.y < window.innerHeight && (_ = (window.innerHeight - n) / 2)),
        { x: d, y: _ }
    );
}
function d(e) {
    let { children: t } = e,
        { scale: n, x: d, y: _, setOffset: f, zoomed: p, setZoomed: h } = (0, l.Q)(),
        { ref: m, width: E, height: g } = (0, a.Ay)(),
        [A, I] = [E ?? 0, g ?? 0],
        T = i.useRef(!1),
        [S, y] = i.useState({ x: 0, y: 0 }),
        v = (e, t) => {
            let r = c({
                width: A * n.goal,
                height: I * n.goal,
                offset: { x: d.goal, y: _.goal },
                delta: { x: e, y: t },
            });
            f(r.x, r.y, { immediate: !0 });
        },
        N = (e) => {
            p && 0 === e.button && (e.preventDefault(), (T.current = !0), y({ x: e.clientX, y: e.clientY }));
        },
        C = (e) => {
            if (!p) {
                if (0 === e.button) {
                    o.l.markActionPerformed(o.N.ZOOM_IN_IMAGE_PRESSED), h(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        r = e.clientY - window.innerHeight / 2,
                        i = c({
                            width: A * n.goal,
                            height: I * n.goal,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -r * (n.goal - 1) },
                        });
                    f(i.x, i.y);
                }
                return;
            }
            (e.clientX - S.x) ** 2 + (e.clientY - S.y) ** 2 < u &&
                (o.l.markActionPerformed(o.N.ZOOM_OUT_IMAGE_PRESSED), h(!1)),
                (T.current = !1);
        };
    return (0, r.jsx)(s.animated.div, {
        ref: m,
        onMouseDown: N,
        onMouseUp: C,
        onMouseMove: (e) => T.current && v(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && v(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (T.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: d, y: _, cursor: p ? "zoom-out" : "zoom-in" },
        children: t,
    });
}
let _ = i.memo(d);
