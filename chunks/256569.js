n.d(t, { Z: () => p }), n(47120), n(177593);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(110924),
    c = n(347469),
    d = n(853276),
    u = n(596390),
    m = n(870472),
    h = n(740668);
function g(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, c.Z)({
            minDimension: u.tq,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: c.y.VERTICAL_BOTTOM,
            throttleDuration: 16
        });
    return (0, i.jsx)('div', {
        onMouseDown: l,
        className: h.resizeHandle
    });
}
let x = r.forwardRef(function (e, t) {
    let { children: n, onFocus: l, onBlur: s, onClick: o } = e,
        c = r.useRef(null),
        [d, m] = r.useState(u.tq);
    return (0, i.jsxs)(a.P3F, {
        className: h.textArea,
        onFocus: l,
        onBlur: s,
        onClick: o,
        innerRef: c,
        ignoreKeyPress: !0,
        style: { minHeight: d },
        children: [
            (0, i.jsx)(a.Den, {
                className: h.innerScroller,
                style: { minHeight: d - 2 },
                ref: t,
                children: n
            }),
            (0, i.jsx)(g, {
                resizableNode: c,
                onResize: m,
                onResizeEnd: (e) => {
                    m(e), null == l || l();
                }
            })
        ]
    });
});
function p(e) {
    var t;
    let { initialValue: n, onChangeTags: l, onChangeNewTagValue: c, tagErrors: u = {}, placeholder: g, className: p, maxTags: _ } = e,
        C = r.useRef(null),
        f = r.useRef(null),
        v = r.useRef(null),
        N = (0, m.V)(n),
        {
            handlePasteEvent: j,
            handleInputChange: I,
            handleKeyDown: E,
            handleContainerKeyUp: b,
            handleRemoveTag: T,
            handleTagChangeEvent: S,
            handleSelectTag: R,
            handleUnselectTag: Z,
            handleResetTagSelections: y,
            handleInputBlurEvent: A
        } = (0, m.Q)(N, {
            scrollerRef: v,
            mainInputRef: C,
            mainContainerRef: f
        }),
        {
            state: { value: L, tags: D, selections: O, isSelecting: k }
        } = N,
        P = (0, o.Z)(D),
        [w, M] = r.useState(!1),
        U = r.useCallback(() => {
            var e;
            M(!1), y(), null === (e = C.current) || void 0 === e || e.focus({ preventScroll: !0 });
        }, [y]);
    r.useEffect(() => {
        !w && P !== D && l(D);
    }, [l, P, D, w]),
        r.useEffect(() => {
            !w && c(L);
        }, [c, L, w]);
    let G = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && U(), M(!1);
            },
            [U]
        ),
        B = r.useCallback(
            (e) => (t) => {
                if (t) {
                    var n;
                    let t = O.includes(D[e]);
                    null === (n = C.current) || void 0 === n || n.focus(),
                        t
                            ? Z(e)
                            : (R(e),
                              setImmediate(() => {
                                  var e;
                                  null === (e = C.current) || void 0 === e || e.blur(),
                                      setTimeout(() => {
                                          var e;
                                          return null === (e = f.current) || void 0 === e ? void 0 : e.focus();
                                      }, 16);
                              }));
                } else Z(e, !0), M(!0);
            },
            [R, Z, O, D]
        );
    return (0, i.jsxs)('div', {
        className: s()(h.mainContainer, p),
        ref: f,
        tabIndex: 0,
        onKeyUp: b,
        children: [
            (0, i.jsxs)(x, {
                ref: v,
                onClick: U,
                children: [
                    D.map((e, t) =>
                        (0, i.jsx)(
                            d.Z,
                            {
                                value: e,
                                onChange: S(t),
                                onBlur: G,
                                onFocus: B(t),
                                onRemove: () => T(t),
                                isSelected: O.includes(e),
                                isSelecting: k,
                                error: u[e],
                                forceShowErrorTooltip: !w && t === D.length - 1
                            },
                            t
                        )
                    ),
                    (0, i.jsx)('input', {
                        className: s()(h.mainTextInput, { [h.isEditingOtherNodes]: w }),
                        ref: C,
                        onChange: I,
                        onKeyDownCapture: E,
                        onPaste: j,
                        onBlur: A,
                        placeholder: 0 === D.length ? g : void 0,
                        value: L
                    })
                ]
            }),
            null != _ &&
                (0, i.jsxs)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: h.maxTags,
                    children: [null !== (t = null == D ? void 0 : D.length) && void 0 !== t ? t : 0, '/', _]
                })
        ]
    });
}
