"use strict";
n.d(t, { L: () => g, A: () => C });
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(837381),
    c = n(187322),
    u = n(608299),
    d = n(101555),
    h = n(625494),
    m = n(652215),
    p = n(985018),
    f = n(248201),
    g =
        (((l = {})[(l.SMALL = 0)] = "SMALL"),
        (l[(l.MEDIUM = 1)] = "MEDIUM"),
        (l[(l.XXSMALL = 2)] = "XXSMALL"),
        (l[(l.XSMALL = 3)] = "XSMALL"),
        l);
function x(e) {
    e.stopPropagation();
}
let C = s.forwardRef(function (e, t) {
    let {
            id: n,
            channelId: l,
            className: a,
            children: g,
            actions: C,
            handleEditModal: A,
            keyboardModeEnabled: E,
            onKeyDown: I,
            draftType: y,
            size: v = 1,
        } = e,
        S = s.useRef(null),
        { onFocus: N, ...j } = (0, o.rm)(n),
        { handleFocus: _, handleBlur: T } = (function (e) {
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
        })(N),
        b = 0 === v,
        R = null != C;
    return (0, i.jsx)(c.vN, {
        children: (0, i.jsx)("li", {
            ...j,
            onFocus: _,
            onBlur: T,
            onClick: (e) => {
                if (0 === e.detail && null != S.current) {
                    let e = S.current.querySelector('[role="button"], button');
                    e?.click();
                }
            },
            onKeyDown: (e) => {
                if (E) {
                    switch (e.which) {
                        case m.Ks6.D:
                            e.preventDefault(), u.A.remove(l, n, y);
                            return;
                        case m.Ks6.E:
                            null != A && (e.preventDefault(), A(e));
                            return;
                        case m.Ks6.BACKSPACE:
                            e.ctrlKey
                                ? (e.preventDefault(), u.A.clearAll(l, y))
                                : (e.preventDefault(), u.A.remove(l, n, y));
                            return;
                        case m.Ks6.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            e.preventDefault(), h._.dispatchToLastSubscribed(m.jej.FOCUS_MESSAGES, { atEnd: !0 });
                    }
                    I?.(e);
                }
            },
            className: r()(f.Se, a),
            ref: t,
            children: (0, i.jsxs)("div", {
                className: f.PO,
                ref: S,
                children: [
                    g,
                    R
                        ? (0, i.jsx)("div", {
                              className: f.TC,
                              children: (0, i.jsx)("div", {
                                  className: r()(f.KY, { [f.BN]: b }),
                                  onContextMenu: x,
                                  "aria-label": p.intl.string(p.t["8Lu3Du"]),
                                  children: (0, i.jsx)(d.Ay, { className: r()({ [f.BX]: b }), children: C }),
                              }),
                          })
                        : null,
                ],
            }),
        }),
    });
});
