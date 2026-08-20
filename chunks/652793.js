n.d(t, { G: () => h });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    r = n(837381),
    a = n(614820),
    o = n(890856),
    d = n(834730),
    c = n(964306),
    u = n(672812);
function h(e) {
    let {
            id: t,
            className: n,
            innerClassName: i,
            renderIcon: h,
            text: A,
            selected: g,
            trailing: m,
            background: f,
            showUnread: p = !1,
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
                f,
                p ? (0, l.jsx)("div", { className: s()(u.gy, u.WS) }) : null,
                (0, l.jsxs)("div", {
                    className: s()([u.nf, u.ae, i]),
                    children: [
                        h(u.Kk),
                        (0, l.jsx)(d.E, {
                            color: "none",
                            variant: "text-md/medium",
                            className: u.UU,
                            "aria-hidden": !0,
                            children: A,
                        }),
                        m,
                    ],
                }),
            ],
        }),
    });
}
