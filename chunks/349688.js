"use strict";
n.d(t, { A: () => A, L: () => _ });
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(837381),
    c = n(187322),
    u = n(608299),
    d = n(101555),
    h = n(203982),
    m = n(844992),
    p = n(652215),
    f = n(985018),
    g = n(248201),
    _ =
        (((i = {})[(i.SMALL = 0)] = "SMALL"),
        (i[(i.MEDIUM = 1)] = "MEDIUM"),
        (i[(i.CLIP = 2)] = "CLIP"),
        (i[(i.XXSMALL = 3)] = "XXSMALL"),
        (i[(i.XSMALL = 4)] = "XSMALL"),
        i);
function x(e) {
    e.stopPropagation();
}
let A = s.forwardRef(function (e, t) {
    let {
            id: n,
            channelId: i,
            className: r,
            children: _,
            actions: A,
            handleEditModal: C,
            keyboardModeEnabled: E,
            onKeyDown: I,
            draftType: v,
            size: y = 1,
        } = e,
        S = s.useRef(null),
        { onFocus: b, ...N } = (0, o.rm)(n),
        { handleFocus: T, handleBlur: j } = (0, m.G)(b),
        R = 0 === y,
        w = null != A;
    return (0, l.jsx)(c.vN, {
        children: (0, l.jsx)("li", {
            ...N,
            onFocus: T,
            onBlur: j,
            onClick: (e) => {
                if (0 === e.detail && null != S.current) {
                    let e = S.current.querySelector('[role="button"], button');
                    e?.click();
                }
            },
            onKeyDown: (e) => {
                if (E) {
                    switch (e.which) {
                        case p.Ks6.D:
                            e.preventDefault(), u.A.remove(i, n, v);
                            return;
                        case p.Ks6.E:
                            null != C && (e.preventDefault(), C(e));
                            return;
                        case p.Ks6.BACKSPACE:
                            e.ctrlKey
                                ? (e.preventDefault(), u.A.clearAll(i, v))
                                : (e.preventDefault(), u.A.remove(i, n, v));
                            return;
                        case p.Ks6.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            e.preventDefault(), h._.dispatchToLastSubscribed(p.jej.FOCUS_MESSAGES, { atEnd: !0 });
                    }
                    I?.(e);
                }
            },
            className: a()(g.Se, r, { [g.oi]: 2 === y }),
            ref: t,
            children: (0, l.jsxs)("div", {
                className: g.PO,
                ref: S,
                children: [
                    _,
                    w
                        ? (0, l.jsx)("div", {
                              className: g.TC,
                              children: (0, l.jsx)("div", {
                                  className: a()(g.KY, { [g.BN]: R }),
                                  onContextMenu: x,
                                  "aria-label": f.intl.string(f.t["8Lu3Du"]),
                                  children: (0, l.jsx)(d.Ay, { className: a()({ [g.BX]: R }), children: A }),
                              }),
                          })
                        : null,
                ],
            }),
        }),
    });
});
