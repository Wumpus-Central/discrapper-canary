var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(956664),
    c = r(981656);
let d = 400;
function f(e) {
    let { children: n, active: r, onClick: i, className: s, style: f, width: p, height: h, maxWidth: _, maxHeight: m, panPadding: g } = e,
        E = (0, o.useRef)(null),
        [v, y] = (0, o.useState)(!1),
        [b, I] = (0, o.useState)({
            x: 0,
            y: 0
        }),
        [T, S] = (0, o.useState)({
            x: 0,
            y: 0
        }),
        [A, C] = (0, o.useState)({
            x: 0,
            y: 0
        });
    (0, o.useEffect)(() => {
        !r &&
            (C({
                x: 0,
                y: 0
            }),
            S({
                x: 0,
                y: 0
            }));
    }, [r]);
    let N = (0, o.useCallback)(
            (e) => {
                if (!r || 0 !== e.button) return;
                e.preventDefault();
                let { clientX: n, clientY: i } = e;
                y(!0),
                    I({
                        x: n,
                        y: i
                    }),
                    S({
                        x: n - A.x,
                        y: i - A.y
                    });
            },
            [r, A]
        ),
        R = (0, o.useCallback)(
            (e) => {
                if (!r) {
                    0 === e.button && (null == i || i(e));
                    return;
                }
                (e.clientX - b.x) ** 2 + (e.clientY - b.y) ** 2 < d && (null == i || i(e)), y(!1);
            },
            [r, i, b]
        ),
        O = (0, o.useCallback)(
            (e) => {
                var n;
                if (!v) return;
                let r = null === (n = E.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                if (null == r) return;
                let [i, a, o, s] = [null == g ? void 0 : g.top, null == g ? void 0 : g.right, null == g ? void 0 : g.bottom, null == g ? void 0 : g.left].map((e) => (null != e ? e : 0)),
                    [l, u] = [r.width + s + a > window.innerWidth, r.height + i + o > window.innerHeight];
                if (!l && !u) return;
                let [c, d] = [l ? e.clientX - T.x : 0, u ? e.clientY - T.y : 0],
                    [f, p] = [c - A.x, d - A.y];
                l && f + r.x - s >= 0 && (c = A.x - r.x + s), u && p + r.y - i >= 0 && (d = A.y - r.y + i);
                let [h, _] = [r.x + r.width, r.y + r.height];
                l && f + h + a <= window.innerWidth && (c = window.innerWidth + A.x - h - a),
                    u && p + _ + o <= window.innerHeight && (d = window.innerHeight + A.y - _ - o),
                    C({
                        x: c,
                        y: d
                    });
            },
            [v, A, T.x, T.y, g]
        ),
        D = r ? (0, u.vV)(p, h, _, m) : 1,
        x = (0, o.useCallback)(() => {
            let e = E.current;
            if (null == e) return !1;
            let n = null != D ? D : 1;
            return e.offsetWidth * n > window.innerWidth || e.offsetHeight * n > window.innerHeight;
        }, [D]);
    return (0, a.jsx)('div', {
        ref: E,
        onMouseDown: N,
        onMouseUp: R,
        onMouseMove: O,
        onMouseLeave: () => y(!1),
        className: l()(s, c.wrapper, {
            [c.panning]: r && v,
            [c.pannable]: r && x()
        }),
        style: {
            ...(null != f ? f : {}),
            translate: ''.concat(A.x, 'px ').concat(A.y, 'px'),
            scale: ''.concat(null != D ? D : 1)
        },
        children: n
    });
}
n.Z = o.memo(f);
