n.d(t, { Z: () => h }), n(388685), n(358797);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(110924),
    c = n(347469),
    d = n(853276),
    u = n(596390),
    g = n(870472),
    m = n(961010);
function p(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i } = e,
        l = (0, c.Z)({
            minDimension: u.tq,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: c.y.VERTICAL_BOTTOM,
            throttleDuration: 16,
        });
    return (0, r.jsx)("div", {
        onMouseDown: l,
        className: m.resizeHandle,
    });
}
let f = i.forwardRef(function (e, t) {
    let { children: n, onFocus: l, onBlur: a, onClick: o } = e,
        c = i.useRef(null),
        [d, g] = i.useState(u.tq);
    return (0, r.jsxs)(s.P3F, {
        className: m.textArea,
        onFocus: l,
        onBlur: a,
        onClick: o,
        innerRef: c,
        ignoreKeyPress: !0,
        style: { minHeight: d },
        children: [
            (0, r.jsx)(s.Den, {
                className: m.innerScroller,
                style: { minHeight: d - 2 },
                ref: t,
                children: n,
            }),
            (0, r.jsx)(p, {
                resizableNode: c,
                onResize: g,
                onResizeEnd: (e) => {
                    g(e), null == l || l();
                },
            }),
        ],
    });
});
function h(e) {
    var t;
    let {
            initialValue: n,
            onChangeTags: l,
            onChangeNewTagValue: c,
            tagErrors: u = {},
            placeholder: p,
            className: h,
            maxTags: b,
        } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        _ = i.useRef(null),
        v = (0, g.V)(n),
        {
            handlePasteEvent: O,
            handleInputChange: C,
            handleKeyDown: y,
            handleContainerKeyUp: N,
            handleRemoveTag: E,
            handleTagChangeEvent: I,
            handleSelectTag: S,
            handleUnselectTag: T,
            handleResetTagSelections: P,
            handleInputBlurEvent: w,
        } = (0, g.Q)(v, {
            scrollerRef: _,
            mainInputRef: x,
            mainContainerRef: j,
        }),
        {
            state: { value: Z, tags: R, selections: D, isSelecting: A },
        } = v,
        L = (0, o.Z)(R),
        [k, G] = i.useState(!1),
        M = i.useCallback(() => {
            var e;
            G(!1), P(), null == (e = x.current) || e.focus({ preventScroll: !0 });
        }, [P]);
    i.useEffect(() => {
        L !== R && l(R);
    }, [l, L, R]),
        i.useEffect(() => {
            k || c(Z);
        }, [c, Z, k]);
    let U = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && M(), G(!1);
            },
            [M],
        ),
        B = i.useCallback(
            (e) => (t) => {
                if (t) {
                    var n;
                    let t = D.includes(R[e]);
                    null == (n = x.current) || n.focus(),
                        t
                            ? T(e)
                            : (S(e),
                              setImmediate(() => {
                                  var e;
                                  null == (e = x.current) || e.blur(),
                                      setTimeout(() => {
                                          var e;
                                          return null == (e = j.current) ? void 0 : e.focus();
                                      }, 16);
                              }));
                } else T(e, !0), G(!0);
            },
            [S, T, D, R],
        );
    return (0, r.jsxs)("div", {
        className: a()(m.mainContainer, h),
        ref: j,
        tabIndex: 0,
        onKeyUp: N,
        children: [
            (0, r.jsxs)(f, {
                ref: _,
                onClick: M,
                children: [
                    R.map((e, t) =>
                        (0, r.jsx)(
                            d.Z,
                            {
                                value: e,
                                onChange: I(t),
                                onBlur: U,
                                onFocus: B(t),
                                onRemove: () => E(t),
                                isSelected: D.includes(e),
                                isSelecting: A,
                                error: u[e],
                                forceShowErrorTooltip: !k && t === R.length - 1,
                            },
                            t,
                        ),
                    ),
                    (0, r.jsx)("input", {
                        className: a()(m.mainTextInput, { [m.isEditingOtherNodes]: k }),
                        ref: x,
                        onChange: C,
                        onKeyDownCapture: y,
                        onPaste: O,
                        onBlur: w,
                        placeholder: 0 === R.length ? p : void 0,
                        value: Z,
                    }),
                ],
            }),
            null != b &&
                (0, r.jsxs)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: m.maxTags,
                    children: [null != (t = null == R ? void 0 : R.length) ? t : 0, "/", b],
                }),
        ],
    });
}
