n.d(t, {
    A: () => m,
}),
    n(896048),
    n(733351);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    c = n(990078),
    o = n(397927),
    d = n(765671),
    u = n(775602),
    f = n(530552),
    g = n(318023);
let b = i.forwardRef(function (e, t) {
    var n, l;
    let { value: a, isSelected: o, isEditing: d, forceShowErrorTooltip: u = !1, error: f } = e,
        [b, m, p] = i.useMemo(() => {
            if (null == f) return [];
            let { erroringCharacterOffset: e = 0, erroringCharacterLength: t = a.length } = null != f ? f : {};
            return [a.slice(0, e), a.slice(e, e + t), a.slice(e + t)];
        }, [a, f]);
    return null == f
        ? (0, r.jsx)("div", {
              className: s()(g.n5, {
                  [g.JN]: d,
                  [g.sp]: o,
              }),
              ref: t,
              children: a,
          })
        : (null != (n = null == b ? void 0 : b.length) ? n : 0) +
                (null != (l = null == m ? void 0 : m.length) ? l : 0) >
            70
          ? (0, r.jsx)(c.m, {
                "aria-label": f.message,
                __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                    "aria-label": f.message,
                    children: [
                        f.message,
                        " ",
                        (0, r.jsx)("span", {
                            className: g.io,
                            children: m,
                        }),
                    ],
                }),
                position: "left",
                forceOpen: u || void 0,
                children: (0, r.jsxs)("div", {
                    ref: t,
                    className: s()(g.n5, {
                        [g.JN]: d,
                        [g.bJ]: null != f && !d,
                        [g.fR]: null != f && !d,
                    }),
                    children: [
                        (0, r.jsx)("span", {
                            children: b,
                        }),
                        (0, r.jsx)("span", {
                            className: g.SD,
                            children: m,
                        }),
                        (0, r.jsx)("span", {
                            children: p,
                        }),
                    ],
                }),
            })
          : (0, r.jsxs)("div", {
                ref: t,
                className: s()(g.n5, {
                    [g.JN]: d,
                    [g.bJ]: null != f && !d,
                }),
                children: [
                    (0, r.jsx)("span", {
                        children: b,
                    }),
                    (0, r.jsx)(c.m, {
                        text: f.message,
                        position: "top",
                        forceOpen: u || void 0,
                        children: (0, r.jsx)("span", {
                            className: g.SD,
                            children: m,
                        }),
                    }),
                    (0, r.jsx)("span", {
                        children: p,
                    }),
                ],
            });
});

function m(e) {
    let {
            value: t,
            onChange: n,
            onBlur: l,
            onFocus: c,
            onRemove: m,
            isSelected: p,
            isSelecting: x,
            error: h,
            forceShowErrorTooltip: j,
        } = e,
        O = i.useRef(null),
        y = i.useRef(null),
        [v, A] = i.useState(!1),
        { ref: E, width: N = 0 } = (0, d.Ay)(v),
        { ref: _, width: S = 0 } = (0, d.Ay)(v),
        T = (0, a.bG)([u.A], () => u.A.useReducedMotion),
        [I, C] = i.useState(j),
        P = i.useRef(null),
        w = N > S ? N : S;
    i.useEffect(() => {
        j
            ? (C(!0),
              (P.current = setTimeout(() => {
                  C(!1), (P.current = null);
              }, f.Mw)))
            : C(!1);
    }, [j]),
        i.useEffect(
            () => () => {
                clearTimeout(P.current);
            },
            [],
        );
    let R = i.useCallback(
            (e) => {
                n(e.target.value);
            },
            [n],
        ),
        D = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if ((t.trim().length <= 0 && m(), null != O.current && null != E.current && null != y.current)) {
                    var n;
                    O.current.scrollTo(0, 0),
                        O.current.setSelectionRange(0, 0),
                        (O.current.scrollLeft = 0),
                        (E.current.scrollLeft = 0),
                        (null == (n = y.current) ? void 0 : n.ref) != null && (y.current.ref.scrollLeft = 0);
                }
                A(!1), l(e);
            },
            [t, E, l, m],
        ),
        G = i.useCallback(
            (e) => {
                let n = t.trim().length <= 0;
                f.Wu.has(e.key)
                    ? (e.preventDefault(), e.stopPropagation(), D(!0))
                    : "Backspace" === e.key && n && (e.preventDefault(), e.stopPropagation(), D(!0));
            },
            [D, t],
        ),
        L = i.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                c(t), t ? e.preventDefault() : A(!0), e.stopPropagation();
            },
            [c],
        ),
        k = i.useCallback(
            (e) => {
                m();
            },
            [m],
        );
    return (0, r.jsx)("div", {
        className: g.G1,
        children: (0, r.jsxs)("div", {
            ref: _,
            className: s()(g.Tm, {
                [g.JN]: v,
                [g.mV]: !v && !T,
                [g.sp]: p,
                [g.Pq]: x,
                [g.bJ]: null != h && !v,
            }),
            children: [
                (0, r.jsxs)(o.DUT, {
                    tag: "div",
                    onBlur: () => D(!1),
                    onClick: L,
                    ignoreKeyPress: !0,
                    onMouseEnter: () => C(!0),
                    onMouseLeave: () => C(!1),
                    className: s()(g.nz, {
                        [g.Pq]: x,
                        [g.JN]: v,
                    }),
                    ref: y,
                    children: [
                        (0, r.jsx)("input", {
                            className: s()(g.uS, {
                                [g.JN]: v,
                                [g.Pq]: x,
                            }),
                            ref: O,
                            onChange: R,
                            onKeyDownCapture: G,
                            value: t,
                            style: {
                                width: w > 0 ? w : "calc(".concat(t.length, "ch + 10px)"),
                            },
                        }),
                        (0, r.jsx)(b, {
                            ref: E,
                            value: t,
                            isEditing: v,
                            isSelected: p,
                            error: h,
                            forceShowErrorTooltip: I || v,
                        }),
                    ],
                }),
                !v &&
                    (0, r.jsx)(o.DUT, {
                        className: g.Nk,
                        onClick: k,
                        children: (0, r.jsx)(o.PGe, {
                            size: "xxs",
                            color: "currentColor",
                            className: g.ut,
                        }),
                    }),
            ],
        }),
    });
}
