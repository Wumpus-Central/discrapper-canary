n.d(t, { G: () => h });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    r = n(837381),
    a = n(614820),
    o = n(890856),
    d = n(685328),
    c = n(907305),
    u = n(645591);
function h(e) {
    let {
            id: t,
            className: n,
            innerClassName: i,
            renderIcon: h,
            text: A,
            selected: g,
            trailing: m,
            background: p,
            showUnread: f = !1,
            ref: C,
            ...E
        } = e,
        x = (0, r.rm)(t),
        N = (0, a.O)(A) ?? "";
    return (0, l.jsx)("li", {
        ref: C,
        children: (0, l.jsxs)(o.s, {
            ...E,
            buttonProps: { ...x, id: t, role: "button" },
            tag: "div",
            "aria-label": N,
            focusProps: { offset: { top: 1, bottom: 1, right: 4 } },
            onContextMenu:
                null != E.onContextMenu
                    ? E.onContextMenu
                    : (e) => {
                          e.stopPropagation();
                      },
            className: s()(c.fx, u.iE, { [u.J1]: g }, n),
            children: [
                p,
                f ? (0, l.jsx)("div", { className: s()(u.gy, u.WS) }) : null,
                (0, l.jsx)("div", {
                    className: s()([u.nf, u.ae, i]),
                    children: (0, l.jsxs)("div", {
                        className: d.Q,
                        children: [
                            (0, l.jsx)("div", { className: u.zc, children: h(u.Kk) }),
                            (0, l.jsx)("div", { className: u.UU, "aria-hidden": !0, children: A }),
                            m,
                        ],
                    }),
                }),
            ],
        }),
    });
}
