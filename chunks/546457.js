"use strict";
n.d(t, { A: () => h }), n(142703);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(475743),
    d = n(761929),
    c = n(273875);
n(530552);
var u = n(330299),
    m = n(698085);
function g(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: s } = e,
        l = (0, d.A)({
            minDimension: 100,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: s,
            orientation: d.R.VERTICAL_BOTTOM,
            throttleDuration: 16,
        });
    return (0, i.jsx)("div", { onMouseDown: l, className: m.Di });
}
let x = s.forwardRef(function (e, t) {
    let { children: n, onFocus: l, onBlur: r, onClick: o } = e,
        d = s.useRef(null),
        [c, u] = s.useState(100);
    return (0, i.jsxs)(a.DUT, {
        className: m.Tg,
        onFocus: l,
        onBlur: r,
        onClick: o,
        innerRef: d,
        ignoreKeyPress: !0,
        style: { minHeight: c },
        children: [
            (0, i.jsx)(a.T7Y, { className: m.Fg, style: { minHeight: c - 2 }, ref: t, children: n }),
            (0, i.jsx)(g, {
                resizableNode: d,
                onResize: u,
                onResizeEnd: (e) => {
                    u(e), l?.();
                },
            }),
        ],
    });
});
function h(e) {
    let {
            initialValue: t,
            onChangeTags: n,
            onChangeNewTagValue: l,
            tagErrors: d = {},
            placeholder: g,
            className: h,
            maxTags: _,
        } = e,
        A = s.useRef(null),
        p = s.useRef(null),
        f = s.useRef(null),
        j = (0, u.M)(t),
        {
            handlePasteEvent: N,
            handleInputChange: E,
            handleKeyDown: b,
            handleContainerKeyUp: T,
            handleRemoveTag: C,
            handleTagChangeEvent: I,
            handleSelectTag: v,
            handleUnselectTag: S,
            handleResetTagSelections: y,
            handleInputBlurEvent: R,
        } = (0, u.d)(j, { scrollerRef: f, mainInputRef: A, mainContainerRef: p }),
        {
            state: { value: O, tags: G, selections: L, isSelecting: D },
        } = j,
        M = (0, o.A)(G),
        [k, U] = s.useState(!1),
        P = s.useCallback(() => {
            U(!1), y(), A.current?.focus({ preventScroll: !0 });
        }, [y]);
    s.useEffect(() => {
        M !== G && n(G);
    }, [n, M, G]),
        s.useEffect(() => {
            k || l(O);
        }, [l, O, k]);
    let w = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && P(), U(!1);
            },
            [P],
        ),
        B = s.useCallback(
            (e) => (t) => {
                if (t) {
                    let t = L.includes(G[e]);
                    A.current?.focus(),
                        t
                            ? S(e)
                            : (v(e),
                              setImmediate(() => {
                                  A.current?.blur(), setTimeout(() => p.current?.focus(), 16);
                              }));
                } else S(e, !0), U(!0);
            },
            [v, S, L, G],
        );
    return (0, i.jsxs)("div", {
        className: r()(m.rs, h),
        ref: p,
        tabIndex: 0,
        onKeyUp: T,
        children: [
            (0, i.jsxs)(x, {
                ref: f,
                onClick: P,
                children: [
                    G.map((e, t) =>
                        (0, i.jsx)(
                            c.A,
                            {
                                value: e,
                                onChange: I(t),
                                onBlur: w,
                                onFocus: B(t),
                                onRemove: () => C(t),
                                isSelected: L.includes(e),
                                isSelecting: D,
                                error: d[e],
                                forceShowErrorTooltip: !k && t === G.length - 1,
                            },
                            t,
                        ),
                    ),
                    (0, i.jsx)("input", {
                        className: r()(m.tM, { [m.kD]: k }),
                        ref: A,
                        onChange: E,
                        onKeyDownCapture: b,
                        onPaste: N,
                        onBlur: R,
                        placeholder: 0 === G.length ? g : void 0,
                        value: O,
                    }),
                ],
            }),
            null != _ &&
                (0, i.jsxs)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: m.MH,
                    children: [G?.length ?? 0, "/", _],
                }),
        ],
    });
}
