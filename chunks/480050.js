n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(956664),
    l = n(969263);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 400;
function _(e) {
    let { children: t, active: n, onClick: o, className: c, style: d, width: _, height: h, maxWidth: m, maxHeight: g, panPadding: E } = e,
        v = (0, i.useRef)(null),
        [b, y] = (0, i.useState)(!1),
        [O, S] = (0, i.useState)({
            x: 0,
            y: 0
        }),
        [I, T] = (0, i.useState)({
            x: 0,
            y: 0
        }),
        [N, A] = (0, i.useState)({
            x: 0,
            y: 0
        });
    (0, i.useEffect)(() => {
        n ||
            (A({
                x: 0,
                y: 0
            }),
            T({
                x: 0,
                y: 0
            }));
    }, [n]);
    let C = (0, i.useCallback)(
            (e) => {
                if (!n || 0 !== e.button) return;
                e.preventDefault();
                let { clientX: t, clientY: r } = e;
                y(!0),
                    S({
                        x: t,
                        y: r
                    }),
                    T({
                        x: t - N.x,
                        y: r - N.y
                    });
            },
            [n, N]
        ),
        R = (0, i.useCallback)(
            (e) => {
                if (!n) {
                    0 === e.button && (null == o || o(e));
                    return;
                }
                (e.clientX - O.x) ** 2 + (e.clientY - O.y) ** 2 < p && (null == o || o(e)), y(!1);
            },
            [n, o, O]
        ),
        P = (0, i.useCallback)(
            (e) => {
                var t;
                if (!b) return;
                let n = null === (t = v.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
                if (null == n) return;
                let [r, i, o, a] = [null == E ? void 0 : E.top, null == E ? void 0 : E.right, null == E ? void 0 : E.bottom, null == E ? void 0 : E.left].map((e) => (null != e ? e : 0)),
                    [s, l] = [n.width + a + i > window.innerWidth, n.height + r + o > window.innerHeight];
                if (!s && !l) return;
                let [c, u] = [s ? e.clientX - I.x : 0, l ? e.clientY - I.y : 0],
                    [d, f] = [c - N.x, u - N.y];
                s && d + n.x - a >= 0 && (c = N.x - n.x + a), l && f + n.y - r >= 0 && (u = N.y - n.y + r);
                let [p, _] = [n.x + n.width, n.y + n.height];
                s && d + p + i <= window.innerWidth && (c = window.innerWidth + N.x - p - i),
                    l && f + _ + o <= window.innerHeight && (u = window.innerHeight + N.y - _ - o),
                    A({
                        x: c,
                        y: u
                    });
            },
            [b, N, I.x, I.y, E]
        ),
        w = n ? (0, s.vV)(_, h, m, g) : 1,
        D = (0, i.useCallback)(() => {
            let e = v.current;
            if (null == e) return !1;
            let t = null != w ? w : 1;
            return e.offsetWidth * t > window.innerWidth || e.offsetHeight * t > window.innerHeight;
        }, [w]);
    return (0, r.jsx)('div', {
        ref: v,
        onMouseDown: C,
        onMouseUp: R,
        onMouseMove: P,
        onMouseLeave: () => y(!1),
        className: a()(c, l.wrapper, {
            [l.panning]: n && b,
            [l.pannable]: n && D()
        }),
        style: f(u({}, null != d ? d : {}), {
            translate: ''.concat(N.x, 'px ').concat(N.y, 'px'),
            scale: ''.concat(null != w ? w : 1)
        }),
        children: t
    });
}
let h = i.memo(_);
