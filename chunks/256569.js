n.d(t, { Z: () => f }), n(47120), n(177593);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(110924),
    c = n(347469),
    d = n(853276),
    u = n(596390),
    m = n(870472),
    g = n(673569);
function p(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i } = e,
        s = (0, c.Z)({
            minDimension: u.tq,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: c.y.VERTICAL_BOTTOM,
            throttleDuration: 16
        });
    return (0, r.jsx)('div', {
        onMouseDown: s,
        className: g.resizeHandle
    });
}
let h = i.forwardRef(function (e, t) {
    let { children: n, onFocus: s, onBlur: a, onClick: o } = e,
        c = i.useRef(null),
        [d, m] = i.useState(u.tq);
    return (0, r.jsxs)(l.P3F, {
        className: g.textArea,
        onFocus: s,
        onBlur: a,
        onClick: o,
        innerRef: c,
        ignoreKeyPress: !0,
        style: { minHeight: d },
        children: [
            (0, r.jsx)(l.Den, {
                className: g.innerScroller,
                style: { minHeight: d - 2 },
                ref: t,
                children: n
            }),
            (0, r.jsx)(p, {
                resizableNode: c,
                onResize: m,
                onResizeEnd: (e) => {
                    m(e), null == s || s();
                }
            })
        ]
    });
});
function f(e) {
    var t;
    let { initialValue: n, onChangeTags: s, onChangeNewTagValue: c, tagErrors: u = {}, placeholder: p, className: f, maxTags: b } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        N = i.useRef(null),
        _ = (0, m.V)(n),
        {
            handlePasteEvent: v,
            handleInputChange: C,
            handleKeyDown: O,
            handleContainerKeyUp: y,
            handleRemoveTag: I,
            handleTagChangeEvent: E,
            handleSelectTag: S,
            handleUnselectTag: T,
            handleResetTagSelections: P,
            handleInputBlurEvent: w
        } = (0, m.Q)(_, {
            scrollerRef: N,
            mainInputRef: x,
            mainContainerRef: j
        }),
        {
            state: { value: R, tags: Z, selections: D, isSelecting: A }
        } = _,
        k = (0, o.Z)(Z),
        [W, L] = i.useState(!1),
        M = i.useCallback(() => {
            var e;
            L(!1), P(), null == (e = x.current) || e.focus({ preventScroll: !0 });
        }, [P]);
    i.useEffect(() => {
        k !== Z && s(Z);
    }, [s, k, Z]),
        i.useEffect(() => {
            W || c(R);
        }, [c, R, W]);
    let G = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && M(), L(!1);
            },
            [M]
        ),
        U = i.useCallback(
            (e) => (t) => {
                if (t) {
                    var n;
                    let t = D.includes(Z[e]);
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
                } else T(e, !0), L(!0);
            },
            [S, T, D, Z]
        );
    return (0, r.jsxs)('div', {
        className: a()(g.mainContainer, f),
        ref: j,
        tabIndex: 0,
        onKeyUp: y,
        children: [
            (0, r.jsxs)(h, {
                ref: N,
                onClick: M,
                children: [
                    Z.map((e, t) =>
                        (0, r.jsx)(
                            d.Z,
                            {
                                value: e,
                                onChange: E(t),
                                onBlur: G,
                                onFocus: U(t),
                                onRemove: () => I(t),
                                isSelected: D.includes(e),
                                isSelecting: A,
                                error: u[e],
                                forceShowErrorTooltip: !W && t === Z.length - 1
                            },
                            t
                        )
                    ),
                    (0, r.jsx)('input', {
                        className: a()(g.mainTextInput, { [g.isEditingOtherNodes]: W }),
                        ref: x,
                        onChange: C,
                        onKeyDownCapture: O,
                        onPaste: v,
                        onBlur: w,
                        placeholder: 0 === Z.length ? p : void 0,
                        value: R
                    })
                ]
            }),
            null != b &&
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: g.maxTags,
                    children: [null != (t = null == Z ? void 0 : Z.length) ? t : 0, '/', b]
                })
        ]
    });
}
