t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(956664),
    s = t(981656);
n.Z = l.memo(function (e) {
    let { children: n, active: t, onClick: r, className: u, style: c, width: d, height: f, maxWidth: m, maxHeight: h, panPadding: p } = e,
        g = (0, l.useRef)(null),
        [_, E] = (0, l.useState)(!1),
        [S, x] = (0, l.useState)({
            x: 0,
            y: 0
        }),
        [v, C] = (0, l.useState)({
            x: 0,
            y: 0
        }),
        [y, I] = (0, l.useState)({
            x: 0,
            y: 0
        });
    (0, l.useEffect)(() => {
        !t &&
            (I({
                x: 0,
                y: 0
            }),
            C({
                x: 0,
                y: 0
            }));
    }, [t]);
    let b = (0, l.useCallback)(
            (e) => {
                if (!t || 0 !== e.button) return;
                e.preventDefault();
                let { clientX: n, clientY: i } = e;
                E(!0),
                    x({
                        x: n,
                        y: i
                    }),
                    C({
                        x: n - y.x,
                        y: i - y.y
                    });
            },
            [t, y]
        ),
        M = (0, l.useCallback)(
            (e) => {
                if (!t) {
                    0 === e.button && (null == r || r(e));
                    return;
                }
                (e.clientX - S.x) ** 2 + (e.clientY - S.y) ** 2 < 400 && (null == r || r(e)), E(!1);
            },
            [t, r, S]
        ),
        O = (0, l.useCallback)(
            (e) => {
                var n;
                if (!_) return;
                let t = null === (n = g.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                if (null == t) return;
                let [i, l, r, a] = [null == p ? void 0 : p.top, null == p ? void 0 : p.right, null == p ? void 0 : p.bottom, null == p ? void 0 : p.left].map((e) => (null != e ? e : 0)),
                    [o, s] = [t.width + a + l > window.innerWidth, t.height + i + r > window.innerHeight];
                if (!o && !s) return;
                let [u, c] = [o ? e.clientX - v.x : 0, s ? e.clientY - v.y : 0],
                    [d, f] = [u - y.x, c - y.y];
                o && d + t.x - a >= 0 && (u = y.x - t.x + a), s && f + t.y - i >= 0 && (c = y.y - t.y + i);
                let [m, h] = [t.x + t.width, t.y + t.height];
                o && d + m + l <= window.innerWidth && (u = window.innerWidth + y.x - m - l),
                    s && f + h + r <= window.innerHeight && (c = window.innerHeight + y.y - h - r),
                    I({
                        x: u,
                        y: c
                    });
            },
            [_, y, v.x, v.y, p]
        ),
        L = t ? (0, o.vV)(d, f, m, h) : 1,
        T = (0, l.useCallback)(() => {
            let e = g.current;
            if (null == e) return !1;
            let n = null != L ? L : 1;
            return e.offsetWidth * n > window.innerWidth || e.offsetHeight * n > window.innerHeight;
        }, [L]);
    return (0, i.jsx)('div', {
        ref: g,
        onMouseDown: b,
        onMouseUp: M,
        onMouseMove: O,
        onMouseLeave: () => E(!1),
        className: a()(u, s.wrapper, {
            [s.panning]: t && _,
            [s.pannable]: t && T()
        }),
        style: {
            ...(null != c ? c : {}),
            translate: ''.concat(y.x, 'px ').concat(y.y, 'px'),
            scale: ''.concat(null != L ? L : 1)
        },
        children: n
    });
});
