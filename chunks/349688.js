"use strict";
n.d(t, { A: () => A, L: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(837381),
    l = n(397927),
    u = n(608299),
    c = n(101555),
    d = n(203982),
    _ = n(844992),
    f = n(652215),
    p = n(985018),
    h = n(735314),
    m = (function (e) {
        return (
            (e[(e.SMALL = 0)] = "SMALL"),
            (e[(e.MEDIUM = 1)] = "MEDIUM"),
            (e[(e.CLIP = 2)] = "CLIP"),
            (e[(e.XXSMALL = 3)] = "XXSMALL"),
            (e[(e.XSMALL = 4)] = "XSMALL"),
            e
        );
    })({});
function g(e) {
    e.stopPropagation();
}
function E(e, t) {
    let {
            id: n,
            channelId: a,
            className: m,
            children: E,
            actions: A,
            handleEditModal: I,
            keyboardModeEnabled: T,
            onKeyDown: y,
            draftType: S,
            size: v = 1,
        } = e,
        C = i.useRef(null),
        { onFocus: b, ...N } = (0, o.rm)(n),
        { handleFocus: R, handleBlur: O } = (0, _.G)(b),
        D = 0 === v,
        L = null != A,
        w = (e) => {
            if (0 === e.detail && null != C.current) {
                let e = C.current.querySelector('[role="button"], button');
                e?.click();
            }
        },
        x = (e) => {
            if (T) {
                switch (e.which) {
                    case f.Ks6.D:
                        e.preventDefault(), u.A.remove(a, n, S);
                        return;
                    case f.Ks6.E:
                        null != I && (e.preventDefault(), I(e));
                        return;
                    case f.Ks6.BACKSPACE:
                        e.ctrlKey
                            ? (e.preventDefault(), u.A.clearAll(a, S))
                            : (e.preventDefault(), u.A.remove(a, n, S));
                        return;
                    case f.Ks6.ARROW_UP:
                        let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
                        if (t) return;
                        e.preventDefault(), d._.dispatchToLastSubscribed(f.jej.FOCUS_MESSAGES, { atEnd: !0 });
                }
                y?.(e);
            }
        };
    return (0, r.jsx)(l.vN3, {
        children: (0, r.jsx)("li", {
            ...N,
            onFocus: R,
            onBlur: O,
            onClick: w,
            onKeyDown: x,
            className: s()(h.Se, m, { [h.oi]: 2 === v }),
            ref: t,
            children: (0, r.jsxs)("div", {
                className: h.PO,
                ref: C,
                children: [
                    E,
                    L
                        ? (0, r.jsx)("div", {
                              className: h.TC,
                              children: (0, r.jsx)("div", {
                                  className: s()(h.KY, { [h.BN]: D }),
                                  onContextMenu: g,
                                  "aria-label": p.intl.string(p.t["8Lu3Du"]),
                                  children: (0, r.jsx)(c.Ay, { className: s()({ [h.BX]: D }), children: A }),
                              }),
                          })
                        : null,
                ],
            }),
        }),
    });
}
let A = i.forwardRef(E);
