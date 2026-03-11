"use strict";
n.d(t, { G: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(837381),
    r = n(672117),
    o = n(397927),
    c = n(814823),
    d = n(719550),
    u = n(516632);
function h(e) {
    let {
            id: t,
            className: n,
            innerClassName: s,
            renderIcon: h,
            text: A,
            selected: m,
            trailing: p,
            background: g,
            showUnread: _ = !1,
            ref: f,
            ...x
        } = e,
        C = (0, a.rm)(t),
        E = (0, r.O)(A) ?? "";
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
            className: l()(d.fx, u.iE, { [u.J1]: m }, n),
            children: [
                g,
                _ ? (0, i.jsx)("div", { className: l()(u.gy, u.WS) }) : null,
                (0, i.jsx)("div", {
                    className: l()([u.nf, u.ae, s]),
                    children: (0, i.jsxs)("div", {
                        className: c.Q,
                        children: [
                            (0, i.jsx)("div", { className: u.zc, children: h(u.Kk) }),
                            (0, i.jsx)("div", { className: u.UU, "aria-hidden": !0, children: A }),
                            p,
                        ],
                    }),
                }),
            ],
        }),
    });
}
