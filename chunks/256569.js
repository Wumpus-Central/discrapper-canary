n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120),
    n(177593);
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
    h = n(15058);
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
    return (0, i.jsxs)(a.Clickable, {
        className: h.textArea,
        onFocus: l,
        onBlur: s,
        onClick: o,
        innerRef: c,
        ignoreKeyPress: !0,
        style: { minHeight: d },
        children: [
            (0, i.jsx)(a.AdvancedScroller, {
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
    let { initialValue: n, onChangeTags: l, onChangeNewTagValue: c, tagErrors: u = {}, placeholder: g, className: p, maxTags: f } = e,
        C = r.useRef(null),
        v = r.useRef(null),
        I = r.useRef(null),
        N = (0, m.V)(n),
        {
            handlePasteEvent: _,
            handleInputChange: T,
            handleKeyDown: j,
            handleContainerKeyUp: b,
            handleRemoveTag: E,
            handleTagChangeEvent: S,
            handleSelectTag: R,
            handleUnselectTag: y,
            handleResetTagSelections: A,
            handleInputBlurEvent: Z
        } = (0, m.Q)(N, {
            scrollerRef: I,
            mainInputRef: C,
            mainContainerRef: v
        }),
        {
            state: { value: L, tags: D, selections: O, isSelecting: M }
        } = N,
        P = (0, o.Z)(D),
        [k, w] = r.useState(!1),
        B = r.useCallback(() => {
            var e;
            w(!1), A(), null === (e = C.current) || void 0 === e || e.focus({ preventScroll: !0 });
        }, [A]);
    r.useEffect(() => {
        if (!k && P !== D) l(D);
    }, [l, P, D, k]),
        r.useEffect(() => {
            if (!k) c(L);
        }, [c, L, k]);
    let U = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && B(), w(!1);
            },
            [B]
        ),
        G = r.useCallback(
            (e) => (t) => {
                if (t) {
                    var n;
                    let t = O.includes(D[e]);
                    null === (n = C.current) || void 0 === n || n.focus(),
                        t
                            ? y(e)
                            : (R(e),
                              setImmediate(() => {
                                  var e;
                                  null === (e = C.current) || void 0 === e || e.blur(),
                                      setTimeout(() => {
                                          var e;
                                          return null === (e = v.current) || void 0 === e ? void 0 : e.focus();
                                      }, 16);
                              }));
                } else y(e, !0), w(!0);
            },
            [R, y, O, D]
        );
    return (0, i.jsxs)('div', {
        className: s()(h.mainContainer, p),
        ref: v,
        tabIndex: 0,
        onKeyUp: b,
        children: [
            (0, i.jsxs)(x, {
                ref: I,
                onClick: B,
                children: [
                    D.map((e, t) =>
                        (0, i.jsx)(
                            d.Z,
                            {
                                value: e,
                                onChange: S(t),
                                onBlur: U,
                                onFocus: G(t),
                                onRemove: () => E(t),
                                isSelected: O.includes(e),
                                isSelecting: M,
                                error: u[e],
                                forceShowErrorTooltip: !k && t === D.length - 1
                            },
                            t
                        )
                    ),
                    (0, i.jsx)('input', {
                        className: s()(h.mainTextInput, { [h.isEditingOtherNodes]: k }),
                        ref: C,
                        onChange: T,
                        onKeyDownCapture: j,
                        onPaste: _,
                        onBlur: Z,
                        placeholder: 0 === D.length ? g : void 0,
                        value: L
                    })
                ]
            }),
            null != f &&
                (0, i.jsxs)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: h.maxTags,
                    children: [null !== (t = null == D ? void 0 : D.length) && void 0 !== t ? t : 0, '/', f]
                })
        ]
    });
}
