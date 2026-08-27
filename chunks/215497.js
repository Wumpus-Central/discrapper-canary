"use strict";
n.d(t, { L: () => g, A: () => A });
var l,
    i = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(837381),
    u = n(259678),
    c = n(608299),
    d = n(101555),
    h = n(625494),
    m = n(652215),
    f = n(375708),
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
let A = s.forwardRef(function (e, t) {
    let {
            id: n,
            channelId: l,
            className: r,
            children: g,
            actions: A,
            handleEditModal: C,
            keyboardModeEnabled: E,
            onKeyDown: I,
            draftType: y,
            size: S = 1,
        } = e,
        v = s.useRef(null),
        { onFocus: N, ..._ } = (0, o.rm)(n),
        { handleFocus: j, handleBlur: T } = (function (e) {
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
        b = 0 === S,
        R = null != A;
    return (0, i.jsx)(u.vN, {
        children: (0, i.jsx)("li", {
            ..._,
            onFocus: j,
            onBlur: T,
            onClick: function (e) {
                if (0 === e.detail && null != v.current) {
                    let e = v.current.querySelector('[role="button"], button');
                    e?.click();
                }
            },
            onKeyDown: function (e) {
                if (E) {
                    switch (e.which) {
                        case m.Ks6.D:
                            e.preventDefault(), c.A.remove(l, n, y);
                            return;
                        case m.Ks6.E:
                            null != C && (e.preventDefault(), C(e));
                            return;
                        case m.Ks6.BACKSPACE:
                            e.ctrlKey
                                ? (e.preventDefault(), c.A.clearAll(l, y))
                                : (e.preventDefault(), c.A.remove(l, n, y));
                            return;
                        case m.Ks6.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            e.preventDefault(), h._.dispatchToLastSubscribed(m.jej.FOCUS_MESSAGES, { atEnd: !0 });
                    }
                    I?.(e);
                }
            },
            className: a()(p.Se, r),
            ref: t,
            children: (0, i.jsxs)("div", {
                className: p.PO,
                ref: v,
                children: [
                    g,
                    R
                        ? (0, i.jsx)("div", {
                              className: p.TC,
                              children: (0, i.jsx)("div", {
                                  className: a()(p.KY, { [p.BN]: b }),
                                  onContextMenu: x,
                                  "aria-label": f.intl.string(f.t["8Lu3Du"]),
                                  children: (0, i.jsx)(d.Ay, { className: a()({ [p.BX]: b }), children: A }),
                              }),
                          })
                        : null,
                ],
            }),
        }),
    });
});
