n.d(e, { default: () => f }), n(747238);
var l = n(627968),
    r = n(64700),
    i = n(477782),
    o = n(397927),
    a = n(442433),
    u = n(50268),
    c = n(253925),
    s = n(378058),
    b = n(253932),
    g = n(957565),
    p = n(690521),
    d = n(60587),
    y = n(985018);
function f(t) {
    let { target: e, onSelect: n } = t,
        f = e.getAttribute("data-type"),
        O = e.getAttribute("data-id"),
        j = e.getAttribute("data-name"),
        m = e.getAttribute("data-surrogates"),
        v = "true" === e.getAttribute("data-animated"),
        E = e.getAttribute("data-format-type"),
        S = f === d.g.EMOJI,
        A = f === d.g.STICKER,
        C = b.Q_.useSetting(),
        I = (0, c.A)({
            type: f,
            id: O,
            name: j,
            isInExpressionPicker: !0,
        }),
        P =
            null != m
                ? (0, l.jsx)(i.Dr, {
                      id: "copy",
                      label: y.intl.string(y.t.ad58UB),
                      action: () => (0, g.C)(m),
                  })
                : null,
        x = (0, u.A)({
            id: O,
            shiftId:
                f === d.g.EMOJI
                    ? "<"
                          .concat(v ? "a" : "", ":")
                          .concat(null == j ? void 0 : j.split("~")[0], ":")
                          .concat(O, ">")
                    : void 0,
            label: f === d.g.STICKER ? y.intl.string(y.t.SJ3249) : y.intl.string(y.t.Ap2oVy),
        }),
        h = r.useCallback(() => {
            if (null != O && null != j) {
                if (S)
                    (0, g.C)(
                        (0, p.Ez)({
                            id: O,
                            name: j,
                            animated: v,
                        }),
                    );
                else if (A && null != E) {
                    let t = (0, s.zg)({
                        id: O,
                        name: j,
                        format_type: Number(E),
                    });
                    null != t && (0, g.C)(t);
                }
            }
        }, [O, j, v, S, A, E]),
        w =
            null != O && null != j && ((S && null == m) || (A && null != E))
                ? (0, l.jsx)(i.Dr, {
                      id: "copy-image-link",
                      label: y.intl.string(y.t["8xHmxo"]),
                      action: h,
                      icon: o.qYV,
                  })
                : null;
    return (0, l.jsx)(o.W1t, {
        navId: "expression-picker",
        onClose: a.Z_,
        "aria-label": y.intl.string(y.t.XoasSC),
        onSelect: n,
        className: "context-menu",
        children: (0, l.jsxs)(o.rXV, {
            children: [I, g.p5 && C ? (null != P ? P : x) : null, g.p5 && C ? w : null],
        }),
    });
}
