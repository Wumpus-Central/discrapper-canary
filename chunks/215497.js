"use strict";
n.d(t, { L: () => g, A: () => x });
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
        (l[(l.CLIP = 2)] = "CLIP"),
        (l[(l.XXSMALL = 3)] = "XXSMALL"),
        (l[(l.XSMALL = 4)] = "XSMALL"),
        l);
function _(e) {
    e.stopPropagation();
}
let x = s.forwardRef(function (e, t) {
    let {
            id: n,
            channelId: l,
            className: a,
            children: g,
            actions: x,
            handleEditModal: C,
            keyboardModeEnabled: A,
            onKeyDown: E,
            draftType: I,
            size: v = 1,
        } = e,
        y = s.useRef(null),
        { onFocus: b, ...S } = (0, o.rm)(n),
        { handleFocus: N, handleBlur: j } = (function (e) {
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
        })(b),
        T = 0 === v,
        w = null != x;
    return (0, i.jsx)(c.vN, {
        children: (0, i.jsx)("li", {
            ...S,
            onFocus: N,
            onBlur: j,
            onClick: (e) => {
                if (0 === e.detail && null != y.current) {
                    let e = y.current.querySelector('[role="button"], button');
                    e?.click();
                }
            },
            onKeyDown: (e) => {
                if (A) {
                    switch (e.which) {
                        case m.Ks6.D:
                            e.preventDefault(), u.A.remove(l, n, I);
                            return;
                        case m.Ks6.E:
                            null != C && (e.preventDefault(), C(e));
                            return;
                        case m.Ks6.BACKSPACE:
                            e.ctrlKey
                                ? (e.preventDefault(), u.A.clearAll(l, I))
                                : (e.preventDefault(), u.A.remove(l, n, I));
                            return;
                        case m.Ks6.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            e.preventDefault(), h._.dispatchToLastSubscribed(m.jej.FOCUS_MESSAGES, { atEnd: !0 });
                    }
                    E?.(e);
                }
            },
            className: r()(f.Se, a, { [f.oi]: 2 === v }),
            ref: t,
            children: (0, i.jsxs)("div", {
                className: f.PO,
                ref: y,
                children: [
                    g,
                    w
                        ? (0, i.jsx)("div", {
                              className: f.TC,
                              children: (0, i.jsx)("div", {
                                  className: r()(f.KY, { [f.BN]: T }),
                                  onContextMenu: _,
                                  "aria-label": p.intl.string(p.t["8Lu3Du"]),
                                  children: (0, i.jsx)(d.Ay, { className: r()({ [f.BX]: T }), children: x }),
                              }),
                          })
                        : null,
                ],
            }),
        }),
    });
});
