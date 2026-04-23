"use strict";
n.d(t, { L: () => f, A: () => p });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(837381),
    d = n(187322),
    _ = n(608299),
    u = n(101555),
    c = n(625494),
    E = n(652215),
    h = n(985018),
    m = n(248201),
    f =
        (((i = {})[(i.SMALL = 0)] = "SMALL"),
        (i[(i.MEDIUM = 1)] = "MEDIUM"),
        (i[(i.CLIP = 2)] = "CLIP"),
        (i[(i.XXSMALL = 3)] = "XXSMALL"),
        (i[(i.XSMALL = 4)] = "XSMALL"),
        i);
function g(e) {
    e.stopPropagation();
}
let p = s.forwardRef(function (e, t) {
    let {
            id: n,
            channelId: i,
            className: a,
            children: f,
            actions: p,
            handleEditModal: A,
            keyboardModeEnabled: I,
            onKeyDown: T,
            draftType: S,
            size: N = 1,
        } = e,
        C = s.useRef(null),
        { onFocus: R, ...O } = (0, l.rm)(n),
        { handleFocus: y, handleBlur: v } = (function (e) {
            let [t, n] = (0, s.useState)(!1);
            return {
                handleFocus: (0, s.useCallback)(
                    (t) => {
                        (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && n(!0),
                            null != e && e(t);
                    },
                    [e],
                ),
                handleBlur: (0, s.useCallback)(
                    (e) => {
                        (e.target !== e.currentTarget && e.currentTarget.contains(document.activeElement)) || n(!1);
                    },
                    [void 0],
                ),
                isFocused: t,
            };
        })(R),
        D = 0 === N,
        L = null != p;
    return (0, r.jsx)(d.vN, {
        children: (0, r.jsx)("li", {
            ...O,
            onFocus: y,
            onBlur: v,
            onClick: (e) => {
                if (0 === e.detail && null != C.current) {
                    let e = C.current.querySelector('[role="button"], button');
                    e?.click();
                }
            },
            onKeyDown: (e) => {
                if (I) {
                    switch (e.which) {
                        case E.Ks6.D:
                            e.preventDefault(), _.A.remove(i, n, S);
                            return;
                        case E.Ks6.E:
                            null != A && (e.preventDefault(), A(e));
                            return;
                        case E.Ks6.BACKSPACE:
                            e.ctrlKey
                                ? (e.preventDefault(), _.A.clearAll(i, S))
                                : (e.preventDefault(), _.A.remove(i, n, S));
                            return;
                        case E.Ks6.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            e.preventDefault(), c._.dispatchToLastSubscribed(E.jej.FOCUS_MESSAGES, { atEnd: !0 });
                    }
                    T?.(e);
                }
            },
            className: o()(m.Se, a, { [m.oi]: 2 === N }),
            ref: t,
            children: (0, r.jsxs)("div", {
                className: m.PO,
                ref: C,
                children: [
                    f,
                    L
                        ? (0, r.jsx)("div", {
                              className: m.TC,
                              children: (0, r.jsx)("div", {
                                  className: o()(m.KY, { [m.BN]: D }),
                                  onContextMenu: g,
                                  "aria-label": h.intl.string(h.t["8Lu3Du"]),
                                  children: (0, r.jsx)(u.Ay, { className: o()({ [m.BX]: D }), children: p }),
                              }),
                          })
                        : null,
                ],
            }),
        }),
    });
});
