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
    p = n(975693);
function g(e) {
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
        className: p.resizeHandle
    });
}
let h = i.forwardRef(function (e, t) {
    let { children: n, onFocus: s, onBlur: a, onClick: o } = e,
        c = i.useRef(null),
        [d, m] = i.useState(u.tq);
    return (0, r.jsxs)(l.P3F, {
        className: p.textArea,
        onFocus: s,
        onBlur: a,
        onClick: o,
        innerRef: c,
        ignoreKeyPress: !0,
        style: { minHeight: d },
        children: [
            (0, r.jsx)(l.Den, {
                className: p.innerScroller,
                style: { minHeight: d - 2 },
                ref: t,
                children: n
            }),
            (0, r.jsx)(g, {
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
    let { initialValue: n, onChangeTags: s, onChangeNewTagValue: c, tagErrors: u = {}, placeholder: g, className: f, maxTags: b } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        N = i.useRef(null),
        v = (0, m.V)(n),
        {
            handlePasteEvent: _,
            handleInputChange: O,
            handleKeyDown: y,
            handleContainerKeyUp: C,
            handleRemoveTag: I,
            handleTagChangeEvent: E,
            handleSelectTag: S,
            handleUnselectTag: T,
            handleResetTagSelections: P,
            handleInputBlurEvent: w
        } = (0, m.Q)(v, {
            scrollerRef: N,
            mainInputRef: x,
            mainContainerRef: j
        }),
        {
            state: { value: R, tags: D, selections: Z, isSelecting: A }
        } = v,
        k = (0, o.Z)(D),
        [W, L] = i.useState(!1),
        M = i.useCallback(() => {
            var e;
            L(!1), P(), null === (e = x.current) || void 0 === e || e.focus({ preventScroll: !0 });
        }, [P]);
    i.useEffect(() => {
        !W && k !== D && s(D);
    }, [s, k, D, W]),
        i.useEffect(() => {
            !W && c(R);
        }, [c, R, W]);
    let U = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && M(), L(!1);
            },
            [M]
        ),
        G = i.useCallback(
            (e) => (t) => {
                if (t) {
                    var n;
                    let t = Z.includes(D[e]);
                    null === (n = x.current) || void 0 === n || n.focus(),
                        t
                            ? T(e)
                            : (S(e),
                              setImmediate(() => {
                                  var e;
                                  null === (e = x.current) || void 0 === e || e.blur(),
                                      setTimeout(() => {
                                          var e;
                                          return null === (e = j.current) || void 0 === e ? void 0 : e.focus();
                                      }, 16);
                              }));
                } else T(e, !0), L(!0);
            },
            [S, T, Z, D]
        );
    return (0, r.jsxs)('div', {
        className: a()(p.mainContainer, f),
        ref: j,
        tabIndex: 0,
        onKeyUp: C,
        children: [
            (0, r.jsxs)(h, {
                ref: N,
                onClick: M,
                children: [
                    D.map((e, t) =>
                        (0, r.jsx)(
                            d.Z,
                            {
                                value: e,
                                onChange: E(t),
                                onBlur: U,
                                onFocus: G(t),
                                onRemove: () => I(t),
                                isSelected: Z.includes(e),
                                isSelecting: A,
                                error: u[e],
                                forceShowErrorTooltip: !W && t === D.length - 1
                            },
                            t
                        )
                    ),
                    (0, r.jsx)('input', {
                        className: a()(p.mainTextInput, { [p.isEditingOtherNodes]: W }),
                        ref: x,
                        onChange: O,
                        onKeyDownCapture: y,
                        onPaste: _,
                        onBlur: w,
                        placeholder: 0 === D.length ? g : void 0,
                        value: R
                    })
                ]
            }),
            null != b &&
                (0, r.jsxs)(l.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: p.maxTags,
                    children: [null !== (t = null == D ? void 0 : D.length) && void 0 !== t ? t : 0, '/', b]
                })
        ]
    });
}
