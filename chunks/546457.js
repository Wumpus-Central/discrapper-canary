n.d(t, { A: () => p }), n(142703);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(939249),
    o = n(599319),
    d = n(834730),
    c = n(475743),
    u = n(761929),
    m = n(273875);
n(530552);
var g = n(330299),
    h = n(671574);
function x(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: l } = e,
        s = (0, u.A)({
            minDimension: 100,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: l,
            orientation: u.R.VERTICAL_BOTTOM,
            throttleDuration: 16,
        });
    return (0, i.jsx)("div", { onMouseDown: s, className: h.Di });
}
let _ = l.forwardRef(function (e, t) {
    let { children: n, onFocus: s, onBlur: r, onClick: d } = e,
        c = l.useRef(null),
        [u, m] = l.useState(100);
    return (0, i.jsxs)(a.D, {
        className: h.Tg,
        onFocus: s,
        onBlur: r,
        onClick: d,
        innerRef: c,
        ignoreKeyPress: !0,
        style: { minHeight: u },
        children: [
            (0, i.jsx)(o.Ch, { className: h.Fg, style: { minHeight: u - 2 }, ref: t, children: n }),
            (0, i.jsx)(x, {
                resizableNode: c,
                onResize: m,
                onResizeEnd: (e) => {
                    m(e), s?.();
                },
            }),
        ],
    });
});
function p(e) {
    let {
            initialValue: t,
            onChangeTags: n,
            onChangeNewTagValue: s,
            tagErrors: a = {},
            placeholder: o,
            className: u,
            maxTags: x,
        } = e,
        p = l.useRef(null),
        A = l.useRef(null),
        E = l.useRef(null),
        f = (0, g.M)(t),
        {
            handlePasteEvent: j,
            handleInputChange: N,
            handleKeyDown: I,
            handleContainerKeyUp: C,
            handleRemoveTag: b,
            handleTagChangeEvent: v,
            handleSelectTag: S,
            handleUnselectTag: T,
            handleResetTagSelections: y,
            handleInputBlurEvent: R,
        } = (0, g.d)(f, { scrollerRef: E, mainInputRef: p, mainContainerRef: A }),
        {
            state: { value: L, tags: D, selections: O, isSelecting: G },
        } = f,
        M = (0, c.A)(D),
        [k, U] = l.useState(!1),
        w = l.useCallback(() => {
            U(!1), y(), p.current?.focus({ preventScroll: !0 });
        }, [y]);
    l.useEffect(() => {
        M !== D && n(D);
    }, [n, M, D]),
        l.useEffect(() => {
            k || s(L);
        }, [s, L, k]);
    let P = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && w(), U(!1);
            },
            [w],
        ),
        B = l.useCallback(
            (e) => (t) => {
                if (t) {
                    let t = O.includes(D[e]);
                    p.current?.focus(),
                        t
                            ? T(e)
                            : (S(e),
                              setImmediate(() => {
                                  p.current?.blur(), setTimeout(() => A.current?.focus(), 16);
                              }));
                } else T(e, !0), U(!0);
            },
            [S, T, O, D],
        );
    return (0, i.jsxs)("div", {
        className: r()(h.rs, u),
        ref: A,
        tabIndex: 0,
        onKeyUp: C,
        children: [
            (0, i.jsxs)(_, {
                ref: E,
                onClick: w,
                children: [
                    D.map((e, t) =>
                        (0, i.jsx)(
                            m.A,
                            {
                                value: e,
                                onChange: v(t),
                                onBlur: P,
                                onFocus: B(t),
                                onRemove: () => b(t),
                                isSelected: O.includes(e),
                                isSelecting: G,
                                error: a[e],
                                forceShowErrorTooltip: !k && t === D.length - 1,
                            },
                            t,
                        ),
                    ),
                    (0, i.jsx)("input", {
                        className: r()(h.tM, { [h.kD]: k }),
                        ref: p,
                        onChange: N,
                        onKeyDownCapture: I,
                        onPaste: j,
                        onBlur: R,
                        placeholder: 0 === D.length ? o : void 0,
                        value: L,
                    }),
                ],
            }),
            null != x &&
                (0, i.jsxs)(d.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: h.MH,
                    children: [D?.length ?? 0, "/", x],
                }),
        ],
    });
}
