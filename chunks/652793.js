n.d(t, { G: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(837381),
    r = n(672117),
    o = n(397927),
    d = n(69813),
    c = n(728444),
    u = n(811094);
function h(e) {
    let {
            id: t,
            className: n,
            innerClassName: l,
            renderIcon: h,
            text: A,
            selected: g,
            trailing: m,
            background: p,
            showUnread: _ = !1,
            ref: x,
            ...f
        } = e,
        E = (0, a.rm)(t),
        C = (0, r.O)(A) ?? "";
    return (0, i.jsx)("li", {
        ref: x,
        children: (0, i.jsxs)(o.sqX, {
            ...f,
            buttonProps: { ...E, id: t, role: "button" },
            tag: "div",
            "aria-label": C,
            focusProps: { offset: { top: 1, bottom: 1, right: 4 } },
            onContextMenu:
                null != f.onContextMenu
                    ? f.onContextMenu
                    : (e) => {
                          e.stopPropagation();
                      },
            className: s()(c.fx, u.iE, { [u.J1]: g }, n),
            children: [
                p,
                _ ? (0, i.jsx)("div", { className: s()(u.gy, u.WS) }) : null,
                (0, i.jsx)("div", {
                    className: s()([u.nf, u.ae, l]),
                    children: (0, i.jsxs)("div", {
                        className: d.Q,
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
