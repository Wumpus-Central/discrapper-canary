n.d(t, { A: () => u });
var i = n(627968),
    a = n(64700),
    r = n(419354),
    l = n(765671),
    s = n(700331),
    o = n(454290);
function d(e) {
    let { width: t, height: n, offset: i, delta: a } = e,
        r = t > window.innerWidth,
        l = n > window.innerHeight,
        s = (window.innerWidth - t) / 2 + i.x,
        o = (window.innerHeight - n) / 2 + i.y,
        d = (window.innerWidth + t) / 2 + i.x,
        u = (window.innerHeight + n) / 2 + i.y,
        { x: h, y: c } = i;
    return (
        r &&
            ((h += a.x),
            s + a.x > 0 && (h = (t - window.innerWidth) / 2),
            d + a.x < window.innerWidth && (h = (window.innerWidth - t) / 2)),
        l &&
            ((c += a.y),
            o + a.y > 0 && (c = (n - window.innerHeight) / 2),
            u + a.y < window.innerHeight && (c = (window.innerHeight - n) / 2)),
        { x: h, y: c }
    );
}
let u = a.memo(function (e) {
    let { children: t } = e,
        { scale: n, x: u, y: h, setOffset: c, zoomed: m, setZoomed: g } = (0, o.Q)(),
        { ref: p, width: f, height: A } = (0, l.Ay)(),
        [x, y] = [f ?? 0, A ?? 0],
        w = a.useRef(!1),
        [_, E] = a.useState({ x: 0, y: 0 }),
        C = (e, t) => {
            let i = d({
                width: x * n.goal,
                height: y * n.goal,
                offset: { x: u.goal, y: h.goal },
                delta: { x: e, y: t },
            });
            c(i.x, i.y, { immediate: !0 });
        };
    return (0, i.jsx)(r.animated.div, {
        ref: p,
        onMouseDown: (e) => {
            m && 0 === e.button && (e.preventDefault(), (w.current = !0), E({ x: e.clientX, y: e.clientY }));
        },
        onMouseUp: (e) => {
            if (!m) {
                if (0 === e.button) {
                    s.l.markActionPerformed(s.N.ZOOM_IN_IMAGE_PRESSED), g(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        i = e.clientY - window.innerHeight / 2,
                        a = d({
                            width: x * n.goal,
                            height: y * n.goal,
                            offset: { x: 0, y: 0 },
                            delta: { x: -t * (n.goal - 1), y: -i * (n.goal - 1) },
                        });
                    c(a.x, a.y);
                }
                return;
            }
            (e.clientX - _.x) ** 2 + (e.clientY - _.y) ** 2 < 400 &&
                (s.l.markActionPerformed(s.N.ZOOM_OUT_IMAGE_PRESSED), g(!1)),
                (w.current = !1);
        },
        onMouseMove: (e) => w.current && C(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && C(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (w.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: { scale: n, x: u, y: h, cursor: m ? "zoom-out" : "zoom-in" },
        children: t,
    });
});
