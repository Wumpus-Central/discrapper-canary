n.d(e, {
    default: () => f,
}),
    n(747238);
var i = n(627968),
    l = n(64700),
    r = n(477782),
    o = n(397927),
    c = n(442433),
    a = n(50268),
    u = n(253925),
    s = n(378058),
    g = n(253932),
    p = n(957565),
    d = n(690521),
    y = n(60587),
    b = n(985018);

function f(t) {
    let { target: e, onSelect: n } = t,
        f = e.getAttribute("data-type"),
        O = e.getAttribute("data-id"),
        j = e.getAttribute("data-name"),
        A = e.getAttribute("data-surrogates"),
        m = "true" === e.getAttribute("data-animated"),
        v = e.getAttribute("data-format-type"),
        E = f === y.g.EMOJI,
        S = f === y.g.STICKER,
        C = g.Q_.useSetting(),
        I = (0, u.A)({
            type: f,
            id: O,
            name: j,
            isInExpressionPicker: !0,
        }),
        P =
            null != A
                ? (0, i.jsx)(r.Dr, {
                      id: "copy",
                      label: b.intl.string(b.t.ad58UB),
                      action: () => (0, p.C)(A),
                  })
                : null,
        x = (0, a.A)({
            id: O,
            shiftId:
                f === y.g.EMOJI
                    ? "<"
                          .concat(m ? "a" : "", ":")
                          .concat(null == j ? void 0 : j.split("~")[0], ":")
                          .concat(O, ">")
                    : void 0,
            label: f === y.g.STICKER ? b.intl.string(b.t.SJ3249) : b.intl.string(b.t.Ap2oVy),
        }),
        h = l.useCallback(() => {
            if (null != O && null != j) {
                if (E)
                    (0, p.C)(
                        (0, d.Ez)({
                            id: O,
                            name: j,
                            animated: m,
                        }),
                    );
                else if (S && null != v) {
                    let t = (0, s.zg)({
                        id: O,
                        name: j,
                        format_type: Number(v),
                    });
                    null != t && (0, p.C)(t);
                }
            }
        }, [O, j, m, E, S, v]),
        w =
            null != O && null != j && ((E && null == A) || (S && null != v))
                ? (0, i.jsx)(r.Dr, {
                      id: "copy-image-link",
                      label: b.intl.string(b.t["8xHmxo"]),
                      action: h,
                      icon: o.qYV,
                      leadingAccessory: {
                          type: "icon",
                          icon: o.qYV,
                      },
                  })
                : null;
    return (0, i.jsx)(o.W1t, {
        "data-menu-migrated": !0,
        navId: "expression-picker",
        onClose: c.Z_,
        "aria-label": b.intl.string(b.t.XoasSC),
        onSelect: n,
        className: "context-menu",
        children: (0, i.jsxs)(o.rXV, {
            children: [I, p.p5 && C ? (null != P ? P : x) : null, p.p5 && C ? w : null],
        }),
    });
}
