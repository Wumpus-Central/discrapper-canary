n.d(t, { L: () => g, A: () => E });
var l,
    i = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    u = n(559106),
    c = n(608299),
    d = n(101555),
    h = n(625494),
    m = n(652215),
    p = n(375708),
    f = n(33720),
    g =
        (((l = {})[(l.SMALL = 0)] = "SMALL"),
        (l[(l.MEDIUM = 1)] = "MEDIUM"),
        (l[(l.XXSMALL = 2)] = "XXSMALL"),
        (l[(l.XSMALL = 3)] = "XSMALL"),
        l);
function x(e) {
    e.stopPropagation();
}
let E = r.forwardRef(function (e, t) {
    let {
            id: n,
            channelId: l,
            className: s,
            children: g,
            actions: E,
            handleEditModal: S,
            keyboardModeEnabled: y,
            onKeyDown: C,
            draftType: A,
            size: b = 1,
        } = e,
        I = r.useRef(null),
        { onFocus: v, ...N } = (0, o.rm)(n),
        { handleFocus: T, handleBlur: j } = (function (e) {
            let [t, n] = (0, r.useState)(!1);
            return {
                handleFocus: (0, r.useCallback)(
                    (t) => {
                        ((t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && n(!0),
                            null != e && e(t));
                    },
                    [e],
                ),
                handleBlur: (0, r.useCallback)(
                    (e) => {
                        (e.target !== e.currentTarget && e.currentTarget.contains(document.activeElement)) || n(!1);
                    },
                    [void 0],
                ),
                isFocused: t,
            };
        })(v),
        k = 0 === b,
        _ = null != E;
    return (0, i.jsx)(u.vN, {
        children: (0, i.jsx)("li", {
            ...N,
            onFocus: T,
            onBlur: j,
            onClick: function (e) {
                if (0 === e.detail && null != I.current) {
                    let e = I.current.querySelector('[role="button"], button');
                    e?.click();
                }
            },
            onKeyDown: function (e) {
                if (y) {
                    switch (e.which) {
                        case m.Ks6.D:
                            (e.preventDefault(), c.A.remove(l, n, A));
                            return;
                        case m.Ks6.E:
                            null != S && (e.preventDefault(), S(e));
                            return;
                        case m.Ks6.BACKSPACE:
                            e.ctrlKey
                                ? (e.preventDefault(), c.A.clearAll(l, A))
                                : (e.preventDefault(), c.A.remove(l, n, A));
                            return;
                        case m.Ks6.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            (e.preventDefault(), h._.dispatchToLastSubscribed(m.jej.FOCUS_MESSAGES, { atEnd: !0 }));
                    }
                    C?.(e);
                }
            },
            className: a()(f.Se, s),
            ref: t,
            children: (0, i.jsxs)("div", {
                className: f.PO,
                ref: I,
                children: [
                    g,
                    _
                        ? (0, i.jsx)("div", {
                              className: f.TC,
                              children: (0, i.jsx)("div", {
                                  className: a()(f.KY, { [f.BN]: k }),
                                  onContextMenu: x,
                                  "aria-label": p.intl.string(p.t["8Lu3Du"]),
                                  children: (0, i.jsx)(d.Ay, { className: a()({ [f.BX]: k }), children: E }),
                              }),
                          })
                        : null,
                ],
            }),
        }),
    });
});
