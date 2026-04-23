n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(990078),
    d = n(939249),
    c = n(789645),
    u = n(765671),
    m = n(775602),
    g = n(530552),
    h = n(947168);
let x = l.forwardRef(function (e, t) {
    let { value: n, isSelected: s, isEditing: a, forceShowErrorTooltip: d = !1, error: c } = e,
        [u, m, g] = l.useMemo(() => {
            if (null == c) return [];
            let { erroringCharacterOffset: e = 0, erroringCharacterLength: t = n.length } = c ?? {};
            return [n.slice(0, e), n.slice(e, e + t), n.slice(e + t)];
        }, [n, c]);
    return null == c
        ? (0, i.jsx)("div", { className: r()(h.n5, { [h.JN]: a, [h.sp]: s }), ref: t, children: n })
        : (u?.length ?? 0) + (m?.length ?? 0) > 70
          ? (0, i.jsx)(o.m, {
                "aria-label": c.message,
                __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                    "aria-label": c.message,
                    children: [c.message, " ", (0, i.jsx)("span", { className: h.io, children: m })],
                }),
                position: "left",
                forceOpen: d || void 0,
                children: (0, i.jsxs)("div", {
                    ref: t,
                    className: r()(h.n5, { [h.JN]: a, [h.bJ]: null != c && !a, [h.fR]: null != c && !a }),
                    children: [
                        (0, i.jsx)("span", { children: u }),
                        (0, i.jsx)("span", { className: h.SD, children: m }),
                        (0, i.jsx)("span", { children: g }),
                    ],
                }),
            })
          : (0, i.jsxs)("div", {
                ref: t,
                className: r()(h.n5, { [h.JN]: a, [h.bJ]: null != c && !a }),
                children: [
                    (0, i.jsx)("span", { children: u }),
                    (0, i.jsx)(o.m, {
                        text: c.message,
                        position: "top",
                        forceOpen: d || void 0,
                        children: (0, i.jsx)("span", { className: h.SD, children: m }),
                    }),
                    (0, i.jsx)("span", { children: g }),
                ],
            });
});
function _(e) {
    let {
            value: t,
            onChange: n,
            onBlur: s,
            onFocus: o,
            onRemove: _,
            isSelected: p,
            isSelecting: A,
            error: E,
            forceShowErrorTooltip: f,
        } = e,
        j = l.useRef(null),
        N = l.useRef(null),
        [I, C] = l.useState(!1),
        { ref: b, width: v = 0 } = (0, u.Ay)(I),
        { ref: S, width: T = 0 } = (0, u.Ay)(I),
        y = (0, a.bG)([m.A], () => m.A.useReducedMotion),
        [R, L] = l.useState(f),
        D = l.useRef(null),
        O = v > T ? v : T;
    l.useEffect(() => {
        f
            ? (L(!0),
              (D.current = setTimeout(() => {
                  L(!1), (D.current = null);
              }, 5e3)))
            : L(!1);
    }, [f]),
        l.useEffect(
            () => () => {
                clearTimeout(D.current);
            },
            [],
        );
    let G = l.useCallback(
            (e) => {
                n(e.target.value);
            },
            [n],
        ),
        M = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                t.trim().length <= 0 && _(),
                    null != j.current &&
                        null != b.current &&
                        null != N.current &&
                        (j.current.scrollTo(0, 0),
                        j.current.setSelectionRange(0, 0),
                        (j.current.scrollLeft = 0),
                        (b.current.scrollLeft = 0),
                        N.current?.ref != null && (N.current.ref.scrollLeft = 0)),
                    C(!1),
                    s(e);
            },
            [t, b, s, _],
        ),
        k = l.useCallback(
            (e) => {
                let n = t.trim().length <= 0;
                g.Wu.has(e.key)
                    ? (e.preventDefault(), e.stopPropagation(), M(!0))
                    : "Backspace" === e.key && n && (e.preventDefault(), e.stopPropagation(), M(!0));
            },
            [M, t],
        ),
        U = l.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                o(t), t ? e.preventDefault() : C(!0), e.stopPropagation();
            },
            [o],
        ),
        w = l.useCallback(
            (e) => {
                _();
            },
            [_],
        );
    return (0, i.jsx)("div", {
        className: h.G1,
        children: (0, i.jsxs)("div", {
            ref: S,
            className: r()(h.Tm, { [h.JN]: I, [h.mV]: !I && !y, [h.sp]: p, [h.Pq]: A, [h.bJ]: null != E && !I }),
            children: [
                (0, i.jsxs)(d.D, {
                    tag: "div",
                    onBlur: () => M(!1),
                    onClick: U,
                    ignoreKeyPress: !0,
                    onMouseEnter: () => L(!0),
                    onMouseLeave: () => L(!1),
                    className: r()(h.nz, { [h.Pq]: A, [h.JN]: I }),
                    ref: N,
                    children: [
                        (0, i.jsx)("input", {
                            className: r()(h.uS, { [h.JN]: I, [h.Pq]: A }),
                            ref: j,
                            onChange: G,
                            onKeyDownCapture: k,
                            value: t,
                            style: { width: O > 0 ? O : `calc(${t.length}ch + 10px)` },
                        }),
                        (0, i.jsx)(x, {
                            ref: b,
                            value: t,
                            isEditing: I,
                            isSelected: p,
                            error: E,
                            forceShowErrorTooltip: R || I,
                        }),
                    ],
                }),
                !I &&
                    (0, i.jsx)(d.D, {
                        className: h.Nk,
                        onClick: w,
                        children: (0, i.jsx)(c.P, { size: "xxs", color: "currentColor", className: h.ut }),
                    }),
            ],
        }),
    });
}
