n.d(i, { default: () => b });
var e = n(627968),
    l = n(64700),
    a = n(477782),
    r = n(397927),
    o = n(442433),
    s = n(50268),
    u = n(253925),
    c = n(378058),
    d = n(253932),
    g = n(957565),
    p = n(690521),
    y = n(60587),
    A = n(985018);
function b(t) {
    let { target: i, onSelect: n } = t,
        b = i.getAttribute("data-type"),
        E = i.getAttribute("data-id"),
        I = i.getAttribute("data-name"),
        f = i.getAttribute("data-surrogates"),
        C = "true" === i.getAttribute("data-animated"),
        m = i.getAttribute("data-format-type"),
        S = b === y.g.EMOJI,
        x = b === y.g.STICKER,
        j = d.Q_.useSetting(),
        v = (0, u.A)({ type: b, id: E, name: I, isInExpressionPicker: !0 }),
        k =
            null != f
                ? (0, e.jsx)(a.Dr, { id: "copy", label: A.intl.string(A.t.ad58UB), action: () => (0, g.C)(f) })
                : null,
        J = (0, s.A)({
            id: E,
            shiftId: b === y.g.EMOJI ? `<${C ? "a" : ""}:${I?.split("~")[0]}:${E}>` : void 0,
            label: b === y.g.STICKER ? A.intl.string(A.t.SJ3249) : A.intl.string(A.t.Ap2oVy),
        }),
        h = l.useCallback(() => {
            if (null != E && null != I) {
                if (S) (0, g.C)((0, p.Ez)({ id: E, name: I, animated: C }));
                else if (x && null != m) {
                    let t = (0, c.zg)({ id: E, name: I, format_type: Number(m) });
                    null != t && (0, g.C)(t);
                }
            }
        }, [E, I, C, S, x, m]),
        K =
            null != E && null != I && ((S && null == f) || (x && null != m))
                ? (0, e.jsx)(a.Dr, {
                      id: "copy-image-link",
                      label: A.intl.string(x ? A.t.B1ubHx : A.t.cIoudn),
                      action: h,
                      icon: r.qYV,
                      leadingAccessory: { type: "icon", icon: r.qYV },
                  })
                : null;
    return (0, e.jsx)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "expression-picker",
        onClose: o.Z_,
        "aria-label": A.intl.string(A.t.XoasSC),
        onSelect: n,
        className: "context-menu",
        children: (0, e.jsxs)(r.rXV, { children: [v, g.p5 && j ? (k ?? J) : null, g.p5 && j ? K : null] }),
    });
}
