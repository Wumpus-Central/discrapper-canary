n.d(t, { G: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(837381),
    r = n(672117),
    o = n(397927),
    c = n(452051),
    d = n(928409),
    u = n(567431);
function h(e) {
    let {
            id: t,
            className: n,
            innerClassName: l,
            renderIcon: h,
            text: A,
            selected: _,
            trailing: m,
            background: g,
            showUnread: p = !1,
            ref: f,
            ...x
        } = e,
        E = (0, a.rm)(t),
        I = (0, r.O)(A) ?? "";
    return (0, i.jsx)("li", {
        ref: f,
        children: (0, i.jsxs)(o.sqX, {
            ...x,
            buttonProps: { ...E, id: t, role: "button" },
            tag: "div",
            "aria-label": I,
            focusProps: { offset: { top: 1, bottom: 1, right: 4 } },
            onContextMenu:
                null != x.onContextMenu
                    ? x.onContextMenu
                    : (e) => {
                          e.stopPropagation();
                      },
            className: s()(d.fx, u.iE, { [u.J1]: _ }, n),
            children: [
                g,
                p ? (0, i.jsx)("div", { className: s()(u.gy, u.WS) }) : null,
                (0, i.jsx)("div", {
                    className: s()([u.nf, u.ae, l]),
                    children: (0, i.jsxs)("div", {
                        className: c.Q,
                        children: [
                            (0, i.jsx)("div", { className: u.zc, children: h(u.Kk) }),
                            (0, i.jsx)("div", { className: u.UU, "aria-hidden": !0, children: A }),
                            m,
                        ],
                    }),
                }),
            ],
        }),
    });
}
