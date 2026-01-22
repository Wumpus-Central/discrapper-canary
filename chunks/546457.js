n.d(t, { A: () => p }), n(896048), n(142703);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    c = n(475743),
    o = n(761929),
    d = n(273875),
    u = n(530552),
    f = n(330299),
    g = n(698085);
function b(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i } = e,
        l = (0, o.A)({
            minDimension: u.vl,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: o.R.VERTICAL_BOTTOM,
            throttleDuration: 16,
        });
    return (0, r.jsx)("div", {
        onMouseDown: l,
        className: g.Di,
    });
}
let m = i.forwardRef(function (e, t) {
    let { children: n, onFocus: l, onBlur: s, onClick: c } = e,
        o = i.useRef(null),
        [d, f] = i.useState(u.vl);
    return (0, r.jsxs)(a.DUT, {
        className: g.Tg,
        onFocus: l,
        onBlur: s,
        onClick: c,
        innerRef: o,
        ignoreKeyPress: !0,
        style: { minHeight: d },
        children: [
            (0, r.jsx)(a.T7Y, {
                className: g.Fg,
                style: { minHeight: d - 2 },
                ref: t,
                children: n,
            }),
            (0, r.jsx)(b, {
                resizableNode: o,
                onResize: f,
                onResizeEnd: (e) => {
                    f(e), null == l || l();
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
            onChangeNewTagValue: o,
            tagErrors: u = {},
            placeholder: b,
            className: p,
            maxTags: x,
        } = e,
        h = i.useRef(null),
        j = i.useRef(null),
        O = i.useRef(null),
        y = (0, f.M)(n),
        {
            handlePasteEvent: v,
            handleInputChange: A,
            handleKeyDown: E,
            handleContainerKeyUp: N,
            handleRemoveTag: _,
            handleTagChangeEvent: S,
            handleSelectTag: T,
            handleUnselectTag: I,
            handleResetTagSelections: C,
            handleInputBlurEvent: P,
        } = (0, f.d)(y, {
            scrollerRef: O,
            mainInputRef: h,
            mainContainerRef: j,
        }),
        {
            state: { value: w, tags: R, selections: D, isSelecting: G },
        } = y,
        L = (0, c.A)(R),
        [k, M] = i.useState(!1),
        U = i.useCallback(() => {
            var e;
            M(!1), C(), null == (e = h.current) || e.focus({ preventScroll: !0 });
        }, [C]);
    i.useEffect(() => {
        L !== R && l(R);
    }, [l, L, R]),
        i.useEffect(() => {
            k || o(w);
        }, [o, w, k]);
    let F = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && U(), M(!1);
            },
            [U],
        ),
        B = i.useCallback(
            (e) => (t) => {
                if (t) {
                    var n;
                    let t = D.includes(R[e]);
                    null == (n = h.current) || n.focus(),
                        t
                            ? I(e)
                            : (T(e),
                              setImmediate(() => {
                                  var e;
                                  null == (e = h.current) || e.blur(),
                                      setTimeout(() => {
                                          var e;
                                          return null == (e = j.current) ? void 0 : e.focus();
                                      }, 16);
                              }));
                } else I(e, !0), M(!0);
            },
            [T, I, D, R],
        );
    return (0, r.jsxs)("div", {
        className: s()(g.rs, p),
        ref: j,
        tabIndex: 0,
        onKeyUp: N,
        children: [
            (0, r.jsxs)(m, {
                ref: O,
                onClick: U,
                children: [
                    R.map((e, t) =>
                        (0, r.jsx)(
                            d.A,
                            {
                                value: e,
                                onChange: S(t),
                                onBlur: F,
                                onFocus: B(t),
                                onRemove: () => _(t),
                                isSelected: D.includes(e),
                                isSelecting: G,
                                error: u[e],
                                forceShowErrorTooltip: !k && t === R.length - 1,
                            },
                            t,
                        ),
                    ),
                    (0, r.jsx)("input", {
                        className: s()(g.tM, { [g.kD]: k }),
                        ref: h,
                        onChange: A,
                        onKeyDownCapture: E,
                        onPaste: v,
                        onBlur: P,
                        placeholder: 0 === R.length ? b : void 0,
                        value: w,
                    }),
                ],
            }),
            null != x &&
                (0, r.jsxs)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: g.MH,
                    children: [null != (t = null == R ? void 0 : R.length) ? t : 0, "/", x],
                }),
        ],
    });
}
