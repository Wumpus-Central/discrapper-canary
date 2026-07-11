n.d(t, { G: () => u });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    r = n(837381),
    a = n(614820),
    o = n(890856),
    d = n(907305),
    c = n(645591);
function u(e) {
    let {
            id: t,
            className: n,
            innerClassName: i,
            renderIcon: u,
            text: h,
            selected: A,
            trailing: g,
            background: m,
            showUnread: f = !1,
            ref: p,
            ...C
        } = e,
        E = (0, r.rm)(t),
        x = (0, a.O)(h) ?? "";
    return (0, l.jsx)("li", {
        ref: p,
        children: (0, l.jsxs)(o.s, {
            ...C,
            buttonProps: { ...E, id: t, role: "button" },
            tag: "div",
            "aria-label": x,
            focusProps: { offset: { top: 1, bottom: 1, right: 4 } },
            onContextMenu:
                null != C.onContextMenu
                    ? C.onContextMenu
                    : (e) => {
                          e.stopPropagation();
                      },
            className: s()(d.fx, c.iE, { [c.J1]: A }, n),
            children: [
                m,
                f ? (0, l.jsx)("div", { className: s()(c.gy, c.WS) }) : null,
                (0, l.jsxs)("div", {
                    className: s()([c.nf, c.ae, i]),
                    children: [u(c.Kk), (0, l.jsx)("div", { className: c.UU, "aria-hidden": !0, children: h }), g],
                }),
            ],
        }),
    });
}
