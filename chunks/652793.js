var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    r = n(837381),
    a = n(84571),
    o = n(890856),
    d = n(834730),
    c = n(964306),
    u = n(672812);
n.d(
    t,
    {},
    {
        G: function (e) {
            let {
                    id: t,
                    className: n,
                    innerClassName: i,
                    renderIcon: h,
                    text: m,
                    selected: g,
                    trailing: A,
                    background: f,
                    showUnread: p = !1,
                    ref: C,
                    "aria-label": E,
                    ...x
                } = e,
                N = (0, r.rm)(t),
                I = E ?? (0, a.O)(m) ?? "";
            return (0, l.jsx)("li", {
                ref: C,
                children: (0, l.jsxs)(o.s, {
                    ...x,
                    buttonProps: { ...N, id: t, role: "button" },
                    "data-list-item-id": N["data-list-item-id"],
                    onFocus: N.onFocus,
                    tag: "div",
                    "aria-label": I,
                    focusProps: { offset: { top: 1, bottom: 1, right: 4 } },
                    onContextMenu:
                        null != x.onContextMenu
                            ? x.onContextMenu
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
                                    variant: "body-md/medium",
                                    className: u.UU,
                                    "aria-hidden": !0,
                                    children: m,
                                }),
                                A,
                            ],
                        }),
                    ],
                }),
            });
        },
    },
);
