(n.d(t, { Z: () => h }), n(388685), n(358797));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(110924),
    c = n(347469),
    d = n(853276),
    u = n(596390),
    m = n(870472),
    g = n(673569);
function p(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i } = e,
        l = (0, c.Z)({
            minDimension: u.tq,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: c.y.VERTICAL_BOTTOM,
            throttleDuration: 16
        });
    return (0, r.jsx)('div', {
        onMouseDown: l,
        className: g.resizeHandle
    });
}
let f = i.forwardRef(function (e, t) {
    let { children: n, onFocus: l, onBlur: s, onClick: o } = e,
        c = i.useRef(null),
        [d, m] = i.useState(u.tq);
    return (0, r.jsxs)(a.P3F, {
        className: g.textArea,
        onFocus: l,
        onBlur: s,
        onClick: o,
        innerRef: c,
        ignoreKeyPress: !0,
        style: { minHeight: d },
        children: [
            (0, r.jsx)(a.Den, {
                className: g.innerScroller,
                style: { minHeight: d - 2 },
                ref: t,
                children: n
            }),
            (0, r.jsx)(p, {
                resizableNode: c,
                onResize: m,
                onResizeEnd: (e) => {
                    (m(e), null == l || l());
                }
            })
        ]
    });
});
function h(e) {
    var t;
    let { initialValue: n, onChangeTags: l, onChangeNewTagValue: c, tagErrors: u = {}, placeholder: p, className: h, maxTags: x } = e,
        b = i.useRef(null),
        j = i.useRef(null),
        v = i.useRef(null),
        _ = (0, m.V)(n),
        {
            handlePasteEvent: O,
            handleInputChange: C,
            handleKeyDown: y,
            handleContainerKeyUp: N,
            handleRemoveTag: I,
            handleTagChangeEvent: E,
            handleSelectTag: S,
            handleUnselectTag: T,
            handleResetTagSelections: P,
            handleInputBlurEvent: w
        } = (0, m.Q)(_, {
            scrollerRef: v,
            mainInputRef: b,
            mainContainerRef: j
        }),
        {
            state: { value: R, tags: Z, selections: D, isSelecting: A }
        } = _,
        L = (0, o.Z)(Z),
        [k, M] = i.useState(!1),
        G = i.useCallback(() => {
            var e;
            (M(!1), P(), null == (e = b.current) || e.focus({ preventScroll: !0 }));
        }, [P]);
    (i.useEffect(() => {
        L !== Z && l(Z);
    }, [l, L, Z]),
        i.useEffect(() => {
            k || c(R);
        }, [c, R, k]));
    let U = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                (e && G(), M(!1));
            },
            [G]
        ),
        B = i.useCallback(
            (e) => (t) => {
                if (t) {
                    var n;
                    let t = D.includes(Z[e]);
                    (null == (n = b.current) || n.focus(),
                        t
                            ? T(e)
                            : (S(e),
                              setImmediate(() => {
                                  var e;
                                  (null == (e = b.current) || e.blur(),
                                      setTimeout(() => {
                                          var e;
                                          return null == (e = j.current) ? void 0 : e.focus();
                                      }, 16));
                              })));
                } else (T(e, !0), M(!0));
            },
            [S, T, D, Z]
        );
    return (0, r.jsxs)('div', {
        className: s()(g.mainContainer, h),
        ref: j,
        tabIndex: 0,
        onKeyUp: N,
        children: [
            (0, r.jsxs)(f, {
                ref: v,
                onClick: G,
                children: [
                    Z.map((e, t) =>
                        (0, r.jsx)(
                            d.Z,
                            {
                                value: e,
                                onChange: E(t),
                                onBlur: U,
                                onFocus: B(t),
                                onRemove: () => I(t),
                                isSelected: D.includes(e),
                                isSelecting: A,
                                error: u[e],
                                forceShowErrorTooltip: !k && t === Z.length - 1
                            },
                            t
                        )
                    ),
                    (0, r.jsx)('input', {
                        className: s()(g.mainTextInput, { [g.isEditingOtherNodes]: k }),
                        ref: b,
                        onChange: C,
                        onKeyDownCapture: y,
                        onPaste: O,
                        onBlur: w,
                        placeholder: 0 === Z.length ? p : void 0,
                        value: R
                    })
                ]
            }),
            null != x &&
                (0, r.jsxs)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: g.maxTags,
                    children: [null != (t = null == Z ? void 0 : Z.length) ? t : 0, '/', x]
                })
        ]
    });
}
