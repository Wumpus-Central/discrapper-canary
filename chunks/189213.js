n.d(t, { Modal: () => c });
var i = n(477900);
n(582128);
var r = n(224640),
    a = n(696208),
    s = n(430993),
    l = n(364840),
    o = n(20742),
    d = n(655053);
function c(e) {
    let {
            size: t,
            title: n,
            subtitle: c,
            input: u,
            preview: _,
            actions: E,
            actionBarInput: A,
            actionBarInputLayout: h = "default",
            listProps: I,
            notice: f,
            onScroll: p,
            scrollerRef: T,
            children: m,
            "aria-label": g,
            ...S
        } = e,
        N = null != t ? t : null != u || null != A || (0, s.y)(m) || null != I ? "md" : "sm";
    return (0, i.jsxs)(r.d, {
        ...S,
        "aria-label": g ?? n,
        size: N,
        children: [
            (0, i.jsx)(o.rQ, { title: n, subtitle: c }),
            (0, i.jsx)(d.i, { message: f?.message, type: f?.type }),
            (0, i.jsx)(s.c, { controls: u, listProps: I, onScroll: p, scrollerRef: T, children: m }),
            (0, i.jsx)(l.j, { children: _ }),
            (0, i.jsx)(a.H, { leading: A, leadingLayout: h, actions: E, actionsFullWidth: null == A }),
        ],
    });
}
