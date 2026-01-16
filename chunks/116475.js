n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(81239),
    o = n(393238),
    s = n(254109),
    l = n(212459);
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
        { scale: n, x: d, y: f, setOffset: p, zoomed: _, setZoomed: h } = (0, l.Y)(),
        { ref: m, width: g, height: E } = (0, o.ZP)(),
        [b, y] = [null != g ? g : 0, null != E ? E : 0],
        O = i.useRef(!1),
        [v, S] = i.useState({
            x: 0,
            y: 0,
        }),
        I = (e, t) => {
            let r = u({
                width: b * n.goal,
                height: y * n.goal,
                offset: {
                    x: d.goal,
                    y: f.goal,
                },
                delta: {
                    x: e,
                    y: t,
                },
            });
            p(r.x, r.y, { immediate: !0 });
        },
        T = (e) => {
            _ &&
                0 === e.button &&
                (e.preventDefault(),
                (O.current = !0),
                S({
                    x: e.clientX,
                    y: e.clientY,
                }));
        },
        C = (e) => {
            if (!_) {
                if (0 === e.button) {
                    (0, s.yg)(s.uG.ZOOM_IN_IMAGE_PRESSED), h(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        r = e.clientY - window.innerHeight / 2,
                        i = u({
                            width: b * n.goal,
                            height: y * n.goal,
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
            (e.clientX - v.x) ** 2 + (e.clientY - v.y) ** 2 < c && ((0, s.yg)(s.uG.ZOOM_OUT_IMAGE_PRESSED), h(!1)),
                (O.current = !1);
        };
    return (0, r.jsx)(a.animated.div, {
        ref: m,
        onMouseDown: T,
        onMouseUp: C,
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
