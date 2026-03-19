"use strict";
n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(765671),
    u = n(775602),
    m = n(530552),
    g = n(90285);
let x = s.forwardRef(function (e, t) {
    let { value: n, isSelected: l, isEditing: a, forceShowErrorTooltip: d = !1, error: c } = e,
        [u, m, x] = s.useMemo(() => {
            if (null == c) return [];
            let { erroringCharacterOffset: e = 0, erroringCharacterLength: t = n.length } = c ?? {};
            return [n.slice(0, e), n.slice(e, e + t), n.slice(e + t)];
        }, [n, c]);
    return null == c
        ? (0, i.jsx)("div", { className: r()(g.n5, { [g.JN]: a, [g.sp]: l }), ref: t, children: n })
        : (u?.length ?? 0) + (m?.length ?? 0) > 70
          ? (0, i.jsx)(o.m, {
                "aria-label": c.message,
                __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                    "aria-label": c.message,
                    children: [c.message, " ", (0, i.jsx)("span", { className: g.io, children: m })],
                }),
                position: "left",
                forceOpen: d || void 0,
                children: (0, i.jsxs)("div", {
                    ref: t,
                    className: r()(g.n5, { [g.JN]: a, [g.bJ]: null != c && !a, [g.fR]: null != c && !a }),
                    children: [
                        (0, i.jsx)("span", { children: u }),
                        (0, i.jsx)("span", { className: g.SD, children: m }),
                        (0, i.jsx)("span", { children: x }),
                    ],
                }),
            })
          : (0, i.jsxs)("div", {
                ref: t,
                className: r()(g.n5, { [g.JN]: a, [g.bJ]: null != c && !a }),
                children: [
                    (0, i.jsx)("span", { children: u }),
                    (0, i.jsx)(o.m, {
                        text: c.message,
                        position: "top",
                        forceOpen: d || void 0,
                        children: (0, i.jsx)("span", { className: g.SD, children: m }),
                    }),
                    (0, i.jsx)("span", { children: x }),
                ],
            });
});
function h(e) {
    let {
            value: t,
            onChange: n,
            onBlur: l,
            onFocus: o,
            onRemove: h,
            isSelected: _,
            isSelecting: p,
            error: A,
            forceShowErrorTooltip: f,
        } = e,
        j = s.useRef(null),
        N = s.useRef(null),
        [E, b] = s.useState(!1),
        { ref: T, width: C = 0 } = (0, c.Ay)(E),
        { ref: I, width: v = 0 } = (0, c.Ay)(E),
        S = (0, a.bG)([u.A], () => u.A.useReducedMotion),
        [y, R] = s.useState(f),
        O = s.useRef(null),
        G = C > v ? C : v;
    s.useEffect(() => {
        f
            ? (R(!0),
              (O.current = setTimeout(() => {
                  R(!1), (O.current = null);
              }, 5e3)))
            : R(!1);
    }, [f]),
        s.useEffect(
            () => () => {
                clearTimeout(O.current);
            },
            [],
        );
    let L = s.useCallback(
            (e) => {
                n(e.target.value);
            },
            [n],
        ),
        D = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                t.trim().length <= 0 && h(),
                    null != j.current &&
                        null != T.current &&
                        null != N.current &&
                        (j.current.scrollTo(0, 0),
                        j.current.setSelectionRange(0, 0),
                        (j.current.scrollLeft = 0),
                        (T.current.scrollLeft = 0),
                        N.current?.ref != null && (N.current.ref.scrollLeft = 0)),
                    b(!1),
                    l(e);
            },
            [t, T, l, h],
        ),
        M = s.useCallback(
            (e) => {
                let n = t.trim().length <= 0;
                m.Wu.has(e.key)
                    ? (e.preventDefault(), e.stopPropagation(), D(!0))
                    : "Backspace" === e.key && n && (e.preventDefault(), e.stopPropagation(), D(!0));
            },
            [D, t],
        ),
        k = s.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                o(t), t ? e.preventDefault() : b(!0), e.stopPropagation();
            },
            [o],
        ),
        U = s.useCallback(
            (e) => {
                h();
            },
            [h],
        );
    return (0, i.jsx)("div", {
        className: g.G1,
        children: (0, i.jsxs)("div", {
            ref: I,
            className: r()(g.Tm, { [g.JN]: E, [g.mV]: !E && !S, [g.sp]: _, [g.Pq]: p, [g.bJ]: null != A && !E }),
            children: [
                (0, i.jsxs)(d.DUT, {
                    tag: "div",
                    onBlur: () => D(!1),
                    onClick: k,
                    ignoreKeyPress: !0,
                    onMouseEnter: () => R(!0),
                    onMouseLeave: () => R(!1),
                    className: r()(g.nz, { [g.Pq]: p, [g.JN]: E }),
                    ref: N,
                    children: [
                        (0, i.jsx)("input", {
                            className: r()(g.uS, { [g.JN]: E, [g.Pq]: p }),
                            ref: j,
                            onChange: L,
                            onKeyDownCapture: M,
                            value: t,
                            style: { width: G > 0 ? G : `calc(${t.length}ch + 10px)` },
                        }),
                        (0, i.jsx)(x, {
                            ref: T,
                            value: t,
                            isEditing: E,
                            isSelected: _,
                            error: A,
                            forceShowErrorTooltip: y || E,
                        }),
                    ],
                }),
                !E &&
                    (0, i.jsx)(d.DUT, {
                        className: g.Nk,
                        onClick: U,
                        children: (0, i.jsx)(d.PGe, { size: "xxs", color: "currentColor", className: g.ut }),
                    }),
            ],
        }),
    });
}
