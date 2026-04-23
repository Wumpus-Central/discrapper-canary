l.d(e, { default: () => C });
var i = l(627968),
    n = l(64700),
    a = l(477782),
    r = l(173936),
    s = l(550079),
    u = l(442433),
    d = l(50268),
    c = l(253925),
    o = l(68935),
    g = l(253932),
    p = l(957565),
    b = l(690521),
    m = l(60587),
    A = l(985018);
function C(t) {
    let { target: e, onSelect: l } = t,
        C = e.getAttribute("data-type"),
        f = e.getAttribute("data-id"),
        h = e.getAttribute("data-name"),
        k = e.getAttribute("data-surrogates"),
        x = "true" === e.getAttribute("data-animated"),
        y = e.getAttribute("data-format-type"),
        I = C === m.g.EMOJI,
        E = C === m.g.STICKER,
        S = g.Q_.useSetting(),
        _ = (0, c.A)({ type: C, id: f, name: h, isInExpressionPicker: !0 }),
        j =
            null != k
                ? (0, i.jsx)(a.Dr, { id: "copy", label: A.intl.string(A.t.ad58UB), action: () => (0, p.C)(k) })
                : null,
        v = (0, d.A)({
            id: f,
            shiftId: C === m.g.EMOJI ? `<${x ? "a" : ""}:${h?.split("~")[0]}:${f}>` : void 0,
            label: C === m.g.STICKER ? A.intl.string(A.t.SJ3249) : A.intl.string(A.t.Ap2oVy),
        }),
        J = n.useCallback(() => {
            if (null != f && null != h) {
                if (I) (0, p.C)((0, b.Ez)({ id: f, name: h, animated: x }));
                else if (E && null != y) {
                    let t = (0, o.zg)({ id: f, name: h, format_type: Number(y) });
                    null != t && (0, p.C)(t);
                }
            }
        }, [f, h, x, I, E, y]),
        $ =
            null != f && null != h && ((I && null == k) || (E && null != y))
                ? (0, i.jsx)(a.Dr, {
                      id: "copy-image-link",
                      label: A.intl.string(E ? A.t.B1ubHx : A.t.cIoudn),
                      action: J,
                      icon: r.q,
                      leadingAccessory: { type: "icon", icon: r.q },
                  })
                : null;
    return (0, i.jsx)(s.W, {
        "data-menu-migrated": !0,
        navId: "expression-picker",
        onClose: u.Z_,
        "aria-label": A.intl.string(A.t.XoasSC),
        onSelect: l,
        className: "context-menu",
        children: (0, i.jsxs)(a.rX, { children: [_, p.p5 && S ? (j ?? v) : null, p.p5 && S ? $ : null] }),
    });
}
