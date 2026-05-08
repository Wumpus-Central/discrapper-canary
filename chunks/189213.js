"use strict";
n.d(t, { Modal: () => c });
var i = n(627968);
n(64700);
var r = n(224640),
    s = n(696208),
    a = n(430993),
    o = n(364840),
    l = n(20742),
    u = n(655053);
function c(e) {
    let {
            size: t,
            title: n,
            subtitle: c,
            input: d,
            preview: _,
            actions: f,
            actionBarInput: h,
            actionBarInputLayout: p = "default",
            listProps: E,
            notice: m,
            onScroll: g,
            scrollerRef: A,
            children: I,
            "aria-label": T,
            ...S
        } = e,
        N = null != t ? t : null != d || null != h || (0, a.y)(I) || null != E ? "md" : "sm";
    return (0, i.jsxs)(r.d, {
        ...S,
        "aria-label": T ?? n,
        size: N,
        children: [
            (0, i.jsx)(l.rQ, { title: n, subtitle: c }),
            (0, i.jsx)(u.i, { message: m?.message, type: m?.type }),
            (0, i.jsx)(a.c, { controls: d, listProps: E, onScroll: g, scrollerRef: A, children: I }),
            (0, i.jsx)(o.j, { children: _ }),
            (0, i.jsx)(s.H, { leading: h, leadingLayout: p, actions: f, actionsFullWidth: null == h }),
        ],
    });
}
