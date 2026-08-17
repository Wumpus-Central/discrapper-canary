n.d(e, { default: () => A });
var i = n(477900),
    l = n(582128),
    a = n(477782),
    r = n(173936),
    s = n(980707),
    u = n(442433),
    d = n(50268),
    c = n(253925),
    o = n(68935),
    g = n(885386),
    p = n(957565),
    b = n(690521),
    k = n(60587),
    m = n(375708);
function A(t) {
    let { target: e, onSelect: n } = t,
        A = e.getAttribute("data-type"),
        C = e.getAttribute("data-id"),
        I = e.getAttribute("data-name"),
        f = e.getAttribute("data-surrogates"),
        h = "true" === e.getAttribute("data-animated"),
        x = e.getAttribute("data-format-type"),
        y = A === k.g.EMOJI,
        E = A === k.g.STICKER,
        S = g.Q_.useSetting(),
        _ = (0, c.A)({ type: A, id: C, name: I, isInExpressionPicker: !0 }),
        j =
            null != f
                ? (0, i.jsx)(a.Dr, { id: "copy", label: m.intl.string(m.t.ad58UB), action: () => (0, p.C)(f) })
                : null,
        v = (0, d.A)({
            id: C,
            shiftId: A === k.g.EMOJI ? `<${h ? "a" : ""}:${I?.split("~")[0]}:${C}>` : void 0,
            label: A === k.g.STICKER ? m.intl.string(m.t.SJ3249) : m.intl.string(m.t.Ap2oVy),
        }),
        J = l.useCallback(() => {
            if (null != C && null != I) {
                if (y) (0, p.C)((0, b.Ez)({ id: C, name: I, animated: h }));
                else if (E && null != x) {
                    let t = (0, o.zg)({ id: C, name: I, format_type: Number(x) });
                    null != t && (0, p.C)(t);
                }
            }
        }, [C, I, h, y, E, x]),
        $ =
            null != C && null != I && ((y && null == f) || (E && null != x))
                ? (0, i.jsx)(a.Dr, {
                      id: "copy-image-link",
                      label: m.intl.string(E ? m.t.B1ubHx : m.t.cIoudn),
                      action: J,
                      icon: r.LinkIcon,
                      leadingAccessory: { type: "icon", icon: r.LinkIcon },
                  })
                : null;
    return (0, i.jsx)(s.W, {
        "data-menu-migrated": !0,
        navId: "expression-picker",
        onClose: u.Z_,
        "aria-label": m.intl.string(m.t.XoasSC),
        onSelect: n,
        className: "context-menu",
        children: (0, i.jsxs)(a.rX, { children: [_, p.p5 && S ? (j ?? v) : null, p.p5 && S ? $ : null] }),
    });
}
