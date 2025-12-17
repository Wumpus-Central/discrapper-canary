n.d(t, { Z: () => p }), n(388685), n(358797);
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
    f = n(420974);
function m(e) {
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
        className: f.resizeHandle,
    });
}
let b = i.forwardRef(function (e, t) {
    let { children: n, onFocus: l, onBlur: a, onClick: o } = e,
        c = i.useRef(null),
        [d, g] = i.useState(u.tq);
    return (0, r.jsxs)(s.P3F, {
        className: f.textArea,
        onFocus: l,
        onBlur: a,
        onClick: o,
        innerRef: c,
        ignoreKeyPress: !0,
        style: { minHeight: d },
        children: [
            (0, r.jsx)(s.Den, {
                className: f.innerScroller,
                style: { minHeight: d - 2 },
                ref: t,
                children: n,
            }),
            (0, r.jsx)(m, {
                resizableNode: c,
                onResize: g,
                onResizeEnd: (e) => {
                    g(e), null == l || l();
                },
            }),
        ],
    });
});
function p(e) {
    var t;
    let {
            initialValue: n,
            onChangeTags: l,
            onChangeNewTagValue: c,
            tagErrors: u = {},
            placeholder: m,
            className: p,
            maxTags: h,
        } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        v = i.useRef(null),
        O = (0, g.V)(n),
        {
            handlePasteEvent: C,
            handleInputChange: y,
            handleKeyDown: N,
            handleContainerKeyUp: E,
            handleRemoveTag: I,
            handleTagChangeEvent: S,
            handleSelectTag: _,
            handleUnselectTag: T,
            handleResetTagSelections: P,
            handleInputBlurEvent: w,
        } = (0, g.Q)(O, {
            scrollerRef: v,
            mainInputRef: x,
            mainContainerRef: j,
        }),
        {
            state: { value: Z, tags: R, selections: D, isSelecting: A },
        } = O,
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
                            : (_(e),
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
            [_, T, D, R],
        );
    return (0, r.jsxs)("div", {
        className: a()(f.mainContainer, p),
        ref: j,
        tabIndex: 0,
        onKeyUp: E,
        children: [
            (0, r.jsxs)(b, {
                ref: v,
                onClick: M,
                children: [
                    R.map((e, t) =>
                        (0, r.jsx)(
                            d.Z,
                            {
                                value: e,
                                onChange: S(t),
                                onBlur: U,
                                onFocus: B(t),
                                onRemove: () => I(t),
                                isSelected: D.includes(e),
                                isSelecting: A,
                                error: u[e],
                                forceShowErrorTooltip: !k && t === R.length - 1,
                            },
                            t,
                        ),
                    ),
                    (0, r.jsx)("input", {
                        className: a()(f.mainTextInput, { [f.isEditingOtherNodes]: k }),
                        ref: x,
                        onChange: y,
                        onKeyDownCapture: N,
                        onPaste: C,
                        onBlur: w,
                        placeholder: 0 === R.length ? m : void 0,
                        value: Z,
                    }),
                ],
            }),
            null != h &&
                (0, r.jsxs)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: f.maxTags,
                    children: [null != (t = null == R ? void 0 : R.length) ? t : 0, "/", h],
                }),
        ],
    });
}
