n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    r = n(445887),
    a = n(765671),
    s = n(700331),
    o = n(454290);
function d(e) {
    let { width: t, height: n, offset: i, delta: l } = e,
        r = t > window.innerWidth,
        a = n > window.innerHeight,
        s = (window.innerWidth - t) / 2 + i.x,
        o = (window.innerHeight - n) / 2 + i.y,
        d = (window.innerWidth + t) / 2 + i.x,
        u = (window.innerHeight + n) / 2 + i.y,
        { x: c, y: h } = i;
    return (
        r &&
            ((c += l.x),
            s + l.x > 0 && (c = (t - window.innerWidth) / 2),
            d + l.x < window.innerWidth && (c = (window.innerWidth - t) / 2)),
        a &&
            ((h += l.y),
            o + l.y > 0 && (h = (n - window.innerHeight) / 2),
            u + l.y < window.innerHeight && (h = (window.innerHeight - n) / 2)),
        { x: c, y: h }
    );
}
let u = l.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: u, y: c, setOffset: h, zoomed: m, setZoomed: p } = (0, o.Q)(),
        { ref: g, width: x, height: f } = (0, a.Ay)(),
        [A, y] = [x ?? 0, f ?? 0],
        w = l.useRef(!1),
        [j, v] = l.useState({ x: 0, y: 0 }),
        C = (e, t) => {
            let i = d({
                width: A * n.goal,
                height: y * n.goal,
                offset: { x: u.goal, y: c.goal },
                delta: { x: e, y: t },
            });
            h(i.x, i.y, { immediate: !0 });
        };
    return (0, i.jsx)(r.animated.div, {
        ref: g,
        onMouseDown: (e) => {
            m && 0 === e.button && (e.preventDefault(), (w.current = !0), v({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: (e) => {
            if (!m) {
                if (0 === e.button) {
                    s.l.markActionPerformed(s.N.ZOOM_IN_IMAGE_PRESSED), p(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        i = e.clientY - window.innerHeight / 2,
                        l = d({
                            width: A * n.goal,
                            height: y * n.goal,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    h(l.x, l.y);
                }
                return;
            }
            (e.clientX - j.x) ** 2 + (e.clientY - j.y) ** 2 < 400 &&
                (s.l.markActionPerformed(s.N.ZOOM_OUT_IMAGE_PRESSED), p(!1)),
                (w.current = !1);
        },
        onMouseMove: (e) => w.current && C(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && C(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (w.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: u, y: c, cursor: m ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
