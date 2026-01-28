n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(353709),
    o = n(765671),
    s = n(700331),
    l = n(454290);
let c = 400;

function u(e) {
    let { width: t, height: n, offset: r, delta: i } = e,
        a = t > window.innerWidth,
        o = n > window.innerHeight,
        s = (window.innerWidth - t) / 2 + r.x,
        l = (window.innerHeight - n) / 2 + r.y,
        c = (window.innerWidth + t) / 2 + r.x,
        u = (window.innerHeight + n) / 2 + r.y,
        { x: d, y: f } = r;
    return (
        a &&
            ((d += i.x),
            s + i.x > 0 && (d = (t - window.innerWidth) / 2),
            c + i.x < window.innerWidth && (d = (window.innerWidth - t) / 2)),
        o &&
            ((f += i.y),
            l + i.y > 0 && (f = (n - window.innerHeight) / 2),
            u + i.y < window.innerHeight && (f = (window.innerHeight - n) / 2)),
        {
            x: d,
            y: f,
        }
    );
}

function d(e) {
    let { children: t } = e,
        { scale: n, x: d, y: f, setOffset: p, zoomed: _, setZoomed: h } = (0, l.Q)(),
        { ref: m, width: g, height: E } = (0, o.Ay)(),
        [y, b] = [null != g ? g : 0, null != E ? E : 0],
        O = i.useRef(!1),
        [v, A] = i.useState({
            x: 0,
            y: 0,
        }),
        I = (e, t) => {
            let r = u({
                width: y * n.goal,
                height: b * n.goal,
                offset: {
                    x: d.goal,
                    y: f.goal,
                },
                delta: {
                    x: e,
                    y: t,
                },
            });
            p(r.x, r.y, {
                immediate: !0,
            });
        },
        S = (e) => {
            _ &&
                0 === e.button &&
                (e.preventDefault(),
                (O.current = !0),
                A({
                    x: e.clientX,
                    y: e.clientY,
                }));
        },
        T = (e) => {
            if (!_) {
                if (0 === e.button) {
                    s.l.markActionPerformed(s.N.ZOOM_IN_IMAGE_PRESSED), h(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        r = e.clientY - window.innerHeight / 2,
                        i = u({
                            width: y * n.goal,
                            height: b * n.goal,
                            offset: {
                                x: 0,
                                y: 0,
                            },
                            delta: {
                                x: -t * (n.goal - 1),
                                y: -r * (n.goal - 1),
                            },
                        });
                    p(i.x, i.y);
                }
                return;
            }
            (e.clientX - v.x) ** 2 + (e.clientY - v.y) ** 2 < c &&
                (s.l.markActionPerformed(s.N.ZOOM_OUT_IMAGE_PRESSED), h(!1)),
                (O.current = !1);
        };
    return (0, r.jsx)(a.animated.div, {
        ref: m,
        onMouseDown: S,
        onMouseUp: T,
        onMouseMove: (e) => O.current && I(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && I(-e.deltaX, -e.deltaY),
        onMouseLeave: () => (O.current = !1),
        onClick: (e) => e.stopPropagation(),
        style: {
            scale: n,
            x: d,
            y: f,
            cursor: _ ? "zoom-out" : "zoom-in",
        },
        children: t,
    });
}
let f = i.memo(d);
