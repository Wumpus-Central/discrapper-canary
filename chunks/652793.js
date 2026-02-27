"use strict";
n.d(t, { G: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(837381),
    a = n(672117),
    o = n(397927),
    c = n(69813),
    d = n(728444),
    u = n(811094);
function h(e) {
    let {
            id: t,
            className: n,
            innerClassName: s,
            renderIcon: h,
            text: A,
            selected: p,
            trailing: g,
            background: m,
            showUnread: _ = !1,
            ref: f,
            ...x
        } = e,
        C = (0, r.rm)(t),
        E = (0, a.O)(A) ?? "";
    return (0, i.jsx)("li", {
        ref: f,
        children: (0, i.jsxs)(o.sqX, {
            ...x,
            buttonProps: { ...C, id: t, role: "button" },
            tag: "div",
            "aria-label": E,
            focusProps: { offset: { top: 1, bottom: 1, right: 4 } },
            onContextMenu:
                null != x.onContextMenu
                    ? x.onContextMenu
                    : (e) => {
                          e.stopPropagation();
                      },
            className: l()(d.fx, u.iE, { [u.J1]: p }, n),
            children: [
                m,
                _ ? (0, i.jsx)("div", { className: l()(u.gy, u.WS) }) : null,
                (0, i.jsx)("div", {
                    className: l()([u.nf, u.ae, s]),
                    children: (0, i.jsxs)("div", {
                        className: c.Q,
                        children: [
                            (0, i.jsx)("div", { className: u.zc, children: h(u.Kk) }),
                            (0, i.jsx)("div", { className: u.UU, "aria-hidden": !0, children: A }),
                            g,
                        ],
                    }),
                }),
            ],
        }),
    });
}
