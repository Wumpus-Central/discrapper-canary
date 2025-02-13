n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(956664),
    l = n(98176);
let u = 400;
function c(e) {
    let { children: t, active: n, onClick: a, className: c, style: d, width: f, height: _, maxWidth: p, maxHeight: h, panPadding: m } = e,
        g = (0, r.useRef)(null),
        [E, v] = (0, r.useState)(!1),
        [y, I] = (0, r.useState)({
            x: 0,
            y: 0
        }),
        [T, b] = (0, r.useState)({
            x: 0,
            y: 0
        }),
        [S, A] = (0, r.useState)({
            x: 0,
            y: 0
        });
    (0, r.useEffect)(() => {
        n ||
            (A({
                x: 0,
                y: 0
            }),
            b({
                x: 0,
                y: 0
            }));
    }, [n]);
    let N = (0, r.useCallback)(
            (e) => {
                if (!n || 0 !== e.button) return;
                e.preventDefault();
                let { clientX: t, clientY: i } = e;
                v(!0),
                    I({
                        x: t,
                        y: i
                    }),
                    b({
                        x: t - S.x,
                        y: i - S.y
                    });
            },
            [n, S]
        ),
        C = (0, r.useCallback)(
            (e) => {
                if (!n) {
                    0 === e.button && (null == a || a(e));
                    return;
                }
                (e.clientX - y.x) ** 2 + (e.clientY - y.y) ** 2 < u && (null == a || a(e)), v(!1);
            },
            [n, a, y]
        ),
        R = (0, r.useCallback)(
            (e) => {
                var t;
                if (!E) return;
                let n = null === (t = g.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
                if (null == n) return;
                let [i, r, a, s] = [null == m ? void 0 : m.top, null == m ? void 0 : m.right, null == m ? void 0 : m.bottom, null == m ? void 0 : m.left].map((e) => (null != e ? e : 0)),
                    [o, l] = [n.width + s + r > window.innerWidth, n.height + i + a > window.innerHeight];
                if (!o && !l) return;
                let [u, c] = [o ? e.clientX - T.x : 0, l ? e.clientY - T.y : 0],
                    [d, f] = [u - S.x, c - S.y];
                o && d + n.x - s >= 0 && (u = S.x - n.x + s), l && f + n.y - i >= 0 && (c = S.y - n.y + i);
                let [_, p] = [n.x + n.width, n.y + n.height];
                o && d + _ + r <= window.innerWidth && (u = window.innerWidth + S.x - _ - r),
                    l && f + p + a <= window.innerHeight && (c = window.innerHeight + S.y - p - a),
                    A({
                        x: u,
                        y: c
                    });
            },
            [E, S, T.x, T.y, m]
        ),
        O = n ? (0, o.vV)(f, _, p, h) : 1,
        D = (0, r.useCallback)(() => {
            let e = g.current;
            if (null == e) return !1;
            let t = null != O ? O : 1;
            return e.offsetWidth * t > window.innerWidth || e.offsetHeight * t > window.innerHeight;
        }, [O]);
    return (0, i.jsx)('div', {
        ref: g,
        onMouseDown: N,
        onMouseUp: C,
        onMouseMove: R,
        onMouseLeave: () => v(!1),
        className: s()(c, l.wrapper, {
            [l.panning]: n && E,
            [l.pannable]: n && D()
        }),
        style: {
            ...(null != d ? d : {}),
            translate: ''.concat(S.x, 'px ').concat(S.y, 'px'),
            scale: ''.concat(null != O ? O : 1)
        },
        children: t
    });
}
let d = r.memo(c);
