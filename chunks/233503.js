e.d(i, { default: () => b });
var n = e(627968),
    l = e(64700),
    a = e(477782),
    r = e(397927),
    o = e(442433),
    s = e(50268),
    c = e(253925),
    u = e(378058),
    d = e(253932),
    g = e(957565),
    p = e(690521),
    y = e(60587),
    A = e(985018);
function b(t) {
    let { target: i, onSelect: e } = t,
        b = i.getAttribute("data-type"),
        E = i.getAttribute("data-id"),
        f = i.getAttribute("data-name"),
        m = i.getAttribute("data-surrogates"),
        C = "true" === i.getAttribute("data-animated"),
        I = i.getAttribute("data-format-type"),
        S = b === y.g.EMOJI,
        x = b === y.g.STICKER,
        j = d.Q_.useSetting(),
        v = (0, c.A)({ type: b, id: E, name: f, isInExpressionPicker: !0 }),
        k =
            null != m
                ? (0, n.jsx)(a.Dr, { id: "copy", label: A.intl.string(A.t.ad58UB), action: () => (0, g.C)(m) })
                : null,
        J = (0, s.A)({
            id: E,
            shiftId: b === y.g.EMOJI ? `<${C ? "a" : ""}:${f?.split("~")[0]}:${E}>` : void 0,
            label: b === y.g.STICKER ? A.intl.string(A.t.SJ3249) : A.intl.string(A.t.Ap2oVy),
        }),
        h = l.useCallback(() => {
            if (null != E && null != f) {
                if (S) (0, g.C)((0, p.Ez)({ id: E, name: f, animated: C }));
                else if (x && null != I) {
                    let t = (0, u.zg)({ id: E, name: f, format_type: Number(I) });
                    null != t && (0, g.C)(t);
                }
            }
        }, [E, f, C, S, x, I]),
        K =
            null != E && null != f && ((S && null == m) || (x && null != I))
                ? (0, n.jsx)(a.Dr, {
                      id: "copy-image-link",
                      label: A.intl.string(A.t["8xHmxo"]),
                      action: h,
                      icon: r.qYV,
                      leadingAccessory: { type: "icon", icon: r.qYV },
                  })
                : null;
    return (0, n.jsx)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "expression-picker",
        onClose: o.Z_,
        "aria-label": A.intl.string(A.t.XoasSC),
        onSelect: e,
        className: "context-menu",
        children: (0, n.jsxs)(r.rXV, { children: [v, g.p5 && j ? (k ?? J) : null, g.p5 && j ? K : null] }),
    });
}
