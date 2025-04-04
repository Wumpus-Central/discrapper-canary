n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(481060),
    c = n(607070),
    u = n(956664),
    d = n(592697);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = 400,
    h = Object.freeze({
        friction: 30,
        tension: 300
    });
function m(e) {
    let { width: t, height: n, offset: r, delta: i } = e,
        o = t > window.innerWidth,
        a = n > window.innerHeight,
        s = (window.innerWidth - t) / 2 + r.x,
        l = (window.innerHeight - n) / 2 + r.y,
        c = (window.innerWidth + t) / 2 + r.x,
        u = (window.innerHeight + n) / 2 + r.y,
        { x: d, y: f } = r;
    return (
        o && ((d += i.x), s + i.x > 0 && (d = (t - window.innerWidth) / 2), c + i.x < window.innerWidth && (d = (window.innerWidth - t) / 2)),
        a && ((f += i.y), l + i.y > 0 && (f = (n - window.innerHeight) / 2), u + i.y < window.innerHeight && (f = (window.innerHeight - n) / 2)),
        {
            x: d,
            y: f
        }
    );
}
function g(e, t, n, r, i) {
    if (null == e || null == t)
        return {
            width: void 0,
            height: void 0
        };
    let o = i ? (0, u.vV)(e, t, n, r) : 1,
        a = (0, u.Tj)({
            width: e,
            height: t,
            maxWidth: n,
            maxHeight: r
        });
    return {
        width: a.width * o,
        height: a.height * o
    };
}
function E(e) {
    let { children: t, active: n, onClick: o, className: f, width: E, height: b, maxWidth: y, maxHeight: v } = e,
        O = i.useRef(null),
        I = (0, u.vV)(E, b, y, v),
        { width: S, height: T } = g(E, b, y, v, n),
        [N, A] = (0, l.q_F)(() => ({
            scale: 1,
            config: h
        })),
        [C, R] = (0, l.q_F)(() => ({
            x: 0,
            y: 0,
            config: h
        })),
        [P, w] = i.useState(!1),
        [D, L] = i.useState({
            x: 0,
            y: 0
        }),
        x = (null != S ? S : 0) > window.innerWidth || (null != T ? T : 0) > window.innerHeight;
    i.useEffect(() => {
        let e = c.Z.useReducedMotion;
        n
            ? A({
                  scale: I,
                  immediate: e
              })
            : (A({
                  scale: 1,
                  immediate: e
              }),
              R({
                  x: 0,
                  y: 0,
                  immediate: e
              }));
    }, [n, A, I, C, R]);
    let M = (e, t) => {
            var n;
            let r = null == S ? (null == (n = O.current) ? void 0 : n.getBoundingClientRect()) : null,
                i = m({
                    width: null != S ? S : r.width,
                    height: null != T ? T : r.height,
                    offset: {
                        x: C.x.goal,
                        y: C.y.goal
                    },
                    delta: {
                        x: e,
                        y: t
                    }
                });
            C.x.set(i.x), C.y.set(i.y);
        },
        k = (e) => {
            n &&
                0 === e.button &&
                (e.preventDefault(),
                w(!0),
                L({
                    x: e.clientX,
                    y: e.clientY
                }));
        },
        j = (e) => {
            if (!n) {
                0 === e.button && (null == o || o(e));
                return;
            }
            (e.clientX - D.x) ** 2 + (e.clientY - D.y) ** 2 < p && (null == o || o(e)), w(!1);
        };
    return (0, r.jsx)(s.animated.div, {
        ref: O,
        onMouseDown: k,
        onMouseUp: j,
        onMouseMove: (e) => P && M(e.movementX, e.movementY),
        onWheel: (e) => !e.ctrlKey && M(-e.deltaX, -e.deltaY),
        onMouseLeave: () => w(!1),
        onClick: (e) => e.stopPropagation(),
        className: a()(f, d.wrapper, {
            [d.panning]: n && P,
            [d.pannable]: n && x
        }),
        style: _({}, N, C),
        children: t
    });
}
let b = i.memo(E);
