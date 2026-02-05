"use strict";
n.d(t, { Modal: () => c });
var r = n(627968);
n(64700);
var i = n(224640),
    a = n(696208),
    s = n(430993),
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
            actionBarInput: p,
            actionBarInputLayout: h = "default",
            listProps: m,
            notice: g,
            onScroll: E,
            scrollerRef: A,
            children: I,
            ...T
        } = e,
        y = null != t ? t : null != d || null != p || (0, s.y)(I) || null != m ? "md" : "sm";
    return (0, r.jsxs)(i.d, {
        ...T,
        size: y,
        children: [
            (0, r.jsx)(l.rQ, { title: n, subtitle: c }),
            (0, r.jsx)(u.i, { message: g?.message, type: g?.type }),
            (0, r.jsx)(s.c, { controls: d, listProps: m, onScroll: E, scrollerRef: A, children: I }),
            (0, r.jsx)(o.j, { children: _ }),
            (0, r.jsx)(a.H, { leading: p, leadingLayout: h, actions: f, actionsFullWidth: null == p }),
        ],
    });
}
