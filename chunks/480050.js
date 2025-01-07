t(47120);
var i = t(200651),
    r = t(192379),
    a = t(120356),
    l = t.n(a),
    o = t(956664),
    s = t(981656);
n.Z = r.memo(function (e) {
    let { children: n, active: t, onClick: a, className: u, style: c, width: d, height: f, maxWidth: h, maxHeight: m } = e,
        p = (0, r.useRef)(null),
        [_, E] = (0, r.useState)(!1),
        [g, S] = (0, r.useState)({
            x: 0,
            y: 0
        }),
        [x, C] = (0, r.useState)({
            x: 0,
            y: 0
        }),
        [y, I] = (0, r.useState)({
            x: 0,
            y: 0
        });
    (0, r.useEffect)(() => {
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
    let v = (0, r.useCallback)(
            (e) => {
                if (!t || 0 !== e.button) return;
                e.preventDefault();
                let { clientX: n, clientY: i } = e;
                E(!0),
                    S({
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
        O = (0, r.useCallback)(
            (e) => {
                if (!t) {
                    0 === e.button && (null == a || a(e));
                    return;
                }
                (e.clientX - g.x) ** 2 + (e.clientY - g.y) ** 2 < 400 && (null == a || a(e)), E(!1);
            },
            [t, a, g]
        ),
        b = (0, r.useCallback)(
            (e) => {
                var n;
                if (!_) return;
                let t = null === (n = p.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                if (null == t) return;
                let [i, r] = [t.width > window.innerWidth, t.height > window.innerHeight];
                if (!i && !r) return;
                let { x: a, y: l } = y,
                    [o, s] = [i ? e.clientX - x.x : 0, r ? e.clientY - x.y : 0],
                    [u, c] = [o - a, s - l];
                i && u + t.x >= 0 && (o -= u + t.x), r && c + t.y >= 0 && (s -= c + t.y);
                let [d, f] = [t.x + t.width, t.y + t.height];
                i && u + d <= window.innerWidth && (o = window.innerWidth + a - d),
                    r && c + f <= window.innerHeight && (s = window.innerHeight + l - f),
                    I({
                        x: o,
                        y: s
                    });
            },
            [_, y, x.x, x.y]
        ),
        M = t ? (0, o.vV)(d, f, h, m) : 1,
        L = (0, r.useCallback)(() => {
            let e = p.current;
            if (null == e) return !1;
            let n = null != M ? M : 1;
            return e.offsetWidth * n > window.innerWidth || e.offsetHeight * n > window.innerHeight;
        }, [M]);
    return (0, i.jsx)('div', {
        ref: p,
        onMouseDown: v,
        onMouseUp: O,
        onMouseMove: b,
        onMouseLeave: () => E(!1),
        className: l()(u, s.wrapper, {
            [s.panning]: t && _,
            [s.pannable]: t && L()
        }),
        style: {
            ...(null != c ? c : {}),
            translate: ''.concat(y.x, 'px ').concat(y.y, 'px'),
            scale: ''.concat(null != M ? M : 1)
        },
        children: n
    });
});
