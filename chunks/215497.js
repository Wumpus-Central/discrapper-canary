"use strict";
n.d(t, { L: () => I, A: () => p });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(837381),
    d = n(187322),
    c = n(608299),
    u = n(101555),
    _ = n(625494),
    E = n(652215),
    A = n(375708),
    h = n(248201),
    I =
        (((i = {})[(i.SMALL = 0)] = "SMALL"),
        (i[(i.MEDIUM = 1)] = "MEDIUM"),
        (i[(i.XXSMALL = 2)] = "XXSMALL"),
        (i[(i.XSMALL = 3)] = "XSMALL"),
        i);
function f(e) {
    e.stopPropagation();
}
let p = a.forwardRef(function (e, t) {
    let {
            id: n,
            channelId: i,
            className: s,
            children: I,
            actions: p,
            handleEditModal: T,
            keyboardModeEnabled: m,
            onKeyDown: g,
            draftType: S,
            size: N = 1,
        } = e,
        C = a.useRef(null),
        { onFocus: R, ...O } = (0, o.rm)(n),
        { handleFocus: L, handleBlur: y } = (function (e) {
            let [t, n] = (0, a.useState)(!1);
            return {
                handleFocus: (0, a.useCallback)(
                    (t) => {
                        (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && n(!0),
                            null != e && e(t);
                    },
                    [e],
                ),
                handleBlur: (0, a.useCallback)(
                    (e) => {
                        (e.target !== e.currentTarget && e.currentTarget.contains(document.activeElement)) || n(!1);
                    },
                    [void 0],
                ),
                isFocused: t,
            };
        })(R),
        D = 0 === N,
        v = null != p;
    return (0, r.jsx)(d.vN, {
        children: (0, r.jsx)("li", {
            ...O,
            onFocus: L,
            onBlur: y,
            onClick: function (e) {
                if (0 === e.detail && null != C.current) {
                    let e = C.current.querySelector('[role="button"], button');
                    e?.click();
                }
            },
            onKeyDown: function (e) {
                if (m) {
                    switch (e.which) {
                        case E.Ks6.D:
                            e.preventDefault(), c.A.remove(i, n, S);
                            return;
                        case E.Ks6.E:
                            null != T && (e.preventDefault(), T(e));
                            return;
                        case E.Ks6.BACKSPACE:
                            e.ctrlKey
                                ? (e.preventDefault(), c.A.clearAll(i, S))
                                : (e.preventDefault(), c.A.remove(i, n, S));
                            return;
                        case E.Ks6.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            e.preventDefault(), _._.dispatchToLastSubscribed(E.jej.FOCUS_MESSAGES, { atEnd: !0 });
                    }
                    g?.(e);
                }
            },
            className: l()(h.Se, s),
            ref: t,
            children: (0, r.jsxs)("div", {
                className: h.PO,
                ref: C,
                children: [
                    I,
                    v
                        ? (0, r.jsx)("div", {
                              className: h.TC,
                              children: (0, r.jsx)("div", {
                                  className: l()(h.KY, { [h.BN]: D }),
                                  onContextMenu: f,
                                  "aria-label": A.intl.string(A.t["8Lu3Du"]),
                                  children: (0, r.jsx)(u.Ay, { className: l()({ [h.BX]: D }), children: p }),
                              }),
                          })
                        : null,
                ],
            }),
        }),
    });
});
