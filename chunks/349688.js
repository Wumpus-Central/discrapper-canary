"use strict";
n.d(t, { A: () => A, L: () => m });
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(837381),
    u = n(187322),
    c = n(608299),
    d = n(101555),
    _ = n(203982),
    f = n(844992),
    p = n(652215),
    h = n(985018),
    E = n(248201),
    m =
        (((r = {})[(r.SMALL = 0)] = "SMALL"),
        (r[(r.MEDIUM = 1)] = "MEDIUM"),
        (r[(r.CLIP = 2)] = "CLIP"),
        (r[(r.XXSMALL = 3)] = "XXSMALL"),
        (r[(r.XSMALL = 4)] = "XSMALL"),
        r);
function g(e) {
    e.stopPropagation();
}
let A = s.forwardRef(function (e, t) {
    let {
            id: n,
            channelId: r,
            className: a,
            children: m,
            actions: A,
            handleEditModal: I,
            keyboardModeEnabled: T,
            onKeyDown: S,
            draftType: y,
            size: N = 1,
        } = e,
        v = s.useRef(null),
        { onFocus: C, ...O } = (0, l.rm)(n),
        { handleFocus: R, handleBlur: b } = (0, f.G)(C),
        D = 0 === N,
        L = null != A;
    return (0, i.jsx)(u.vN, {
        children: (0, i.jsx)("li", {
            ...O,
            onFocus: R,
            onBlur: b,
            onClick: (e) => {
                if (0 === e.detail && null != v.current) {
                    let e = v.current.querySelector('[role="button"], button');
                    e?.click();
                }
            },
            onKeyDown: (e) => {
                if (T) {
                    switch (e.which) {
                        case p.Ks6.D:
                            e.preventDefault(), c.A.remove(r, n, y);
                            return;
                        case p.Ks6.E:
                            null != I && (e.preventDefault(), I(e));
                            return;
                        case p.Ks6.BACKSPACE:
                            e.ctrlKey
                                ? (e.preventDefault(), c.A.clearAll(r, y))
                                : (e.preventDefault(), c.A.remove(r, n, y));
                            return;
                        case p.Ks6.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            e.preventDefault(), _._.dispatchToLastSubscribed(p.jej.FOCUS_MESSAGES, { atEnd: !0 });
                    }
                    S?.(e);
                }
            },
            className: o()(E.Se, a, { [E.oi]: 2 === N }),
            ref: t,
            children: (0, i.jsxs)("div", {
                className: E.PO,
                ref: v,
                children: [
                    m,
                    L
                        ? (0, i.jsx)("div", {
                              className: E.TC,
                              children: (0, i.jsx)("div", {
                                  className: o()(E.KY, { [E.BN]: D }),
                                  onContextMenu: g,
                                  "aria-label": h.intl.string(h.t["8Lu3Du"]),
                                  children: (0, i.jsx)(d.Ay, { className: o()({ [E.BX]: D }), children: A }),
                              }),
                          })
                        : null,
                ],
            }),
        }),
    });
});
