n.d(e, { default: () => A });
var i = n(477900),
    l = n(582128),
    a = n(477782),
    r = n(173936),
    s = n(980707),
    u = n(442433),
    d = n(50268),
    c = n(253925),
    o = n(378058),
    g = n(253932),
    p = n(957565),
    b = n(690521),
    k = n(60587),
    m = n(105292);
function A(t) {
    let { target: e, onSelect: n, showFavoriteOnly: A = !1 } = t,
        C = e.getAttribute("data-type"),
        I = e.getAttribute("data-id"),
        f = e.getAttribute("data-name"),
        h = e.getAttribute("data-surrogates"),
        x = "true" === e.getAttribute("data-animated"),
        y = e.getAttribute("data-format-type"),
        E = C === k.g.EMOJI,
        S = C === k.g.STICKER,
        _ = g.Q_.useSetting(),
        j = (0, c.A)({ type: C, id: I, name: f, isInExpressionPicker: !0 }),
        v =
            null != h
                ? (0, i.jsx)(a.Dr, { id: "copy", label: m.intl.string(m.t.ad58UB), action: () => (0, p.C)(h) })
                : null,
        J = (0, d.A)({
            id: I,
            shiftId: C === k.g.EMOJI ? `<${x ? "a" : ""}:${f?.split("~")[0]}:${I}>` : void 0,
            label: C === k.g.STICKER ? m.intl.string(m.t.SJ3249) : m.intl.string(m.t.Ap2oVy),
        }),
        $ = l.useCallback(() => {
            if (null != I && null != f) {
                if (E) (0, p.C)((0, b.Ez)({ id: I, name: f, animated: x }));
                else if (S && null != y) {
                    let t = (0, o.zg)({ id: I, name: f, format_type: Number(y) });
                    null != t && (0, p.C)(t);
                }
            }
        }, [I, f, x, E, S, y]),
        w =
            null != I && null != f && ((E && null == h) || (S && null != y))
                ? (0, i.jsx)(a.Dr, {
                      id: "copy-image-link",
                      label: m.intl.string(S ? m.t.B1ubHx : m.t.cIoudn),
                      action: $,
                      icon: r.LinkIcon,
                      leadingAccessory: { type: "icon", icon: r.LinkIcon },
                  })
                : null,
        z = p.p5 && _ && !A;
    return (0, i.jsx)(s.W, {
        "data-menu-migrated": !0,
        navId: "expression-picker",
        onClose: u.Z_,
        "aria-label": m.intl.string(m.t.XoasSC),
        onSelect: n,
        className: "context-menu",
        children: (0, i.jsxs)(a.rX, { children: [j, z ? (v ?? J) : null, z ? w : null] }),
    });
}
