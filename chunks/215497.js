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
    f = n(105292),
    p = n(33720),
    g =
        (((l = {})[(l.SMALL = 0)] = "SMALL"),
        (l[(l.MEDIUM = 1)] = "MEDIUM"),
        (l[(l.XXSMALL = 2)] = "XXSMALL"),
        (l[(l.XSMALL = 3)] = "XSMALL"),
        l);
function x(e) {
    e.stopPropagation();
}
let E = function (e) {
    let {
            id: t,
            channelId: n,
            className: l,
            children: s,
            actions: g,
            handleEditModal: E,
            keyboardModeEnabled: S,
            onKeyDown: y,
            draftType: C,
            size: A = 1,
            ref: I,
        } = e,
        b = r.useRef(null),
        { onFocus: N, ...v } = (0, o.rm)(t),
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
        })(N),
        _ = 0 === A,
        k = null != g;
    return (0, i.jsx)(u.vN, {
        children: (0, i.jsx)("li", {
            ...v,
            onFocus: T,
            onBlur: j,
            onClick: function (e) {
                if (0 === e.detail && null != b.current) {
                    let e = b.current.querySelector('[role="button"], button');
                    e?.click();
                }
            },
            onKeyDown: function (e) {
                if (S) {
                    switch (e.which) {
                        case m.Ks6.D:
                            (e.preventDefault(), c.A.remove(n, t, C));
                            return;
                        case m.Ks6.E:
                            null != E && (e.preventDefault(), E(e));
                            return;
                        case m.Ks6.BACKSPACE:
                            e.ctrlKey
                                ? (e.preventDefault(), c.A.clearAll(n, C))
                                : (e.preventDefault(), c.A.remove(n, t, C));
                            return;
                        case m.Ks6.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            (e.preventDefault(), h._.dispatchToLastSubscribed(m.jej.FOCUS_MESSAGES, { atEnd: !0 }));
                    }
                    y?.(e);
                }
            },
            className: a()(p.Se, l),
            ref: I,
            children: (0, i.jsxs)("div", {
                className: p.PO,
                ref: b,
                children: [
                    s,
                    k
                        ? (0, i.jsx)("div", {
                              className: p.TC,
                              children: (0, i.jsx)("div", {
                                  className: a()(p.KY, { [p.BN]: _ }),
                                  onContextMenu: x,
                                  "aria-label": f.intl.string(f.t["8Lu3Du"]),
                                  children: (0, i.jsx)(d.Ay, { className: a()({ [p.BX]: _ }), children: g }),
                              }),
                          })
                        : null,
                ],
            }),
        }),
    });
};
