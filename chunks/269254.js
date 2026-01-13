n.d(e, { default: () => f }), n(35282);
var i = n(54381),
    l = n(473749),
    r = n(828214),
    o = n(481060),
    a = n(239091),
    c = n(299206),
    u = n(519110),
    s = n(695346),
    b = n(572004),
    d = n(176354),
    p = n(691251),
    g = n(388032);
function f(t) {
    let { target: e, onSelect: n } = t,
        f = e.getAttribute("data-type"),
        y = e.getAttribute("data-id"),
        O = e.getAttribute("data-name"),
        S = e.getAttribute("data-surrogates"),
        j = "true" === e.getAttribute("data-animated"),
        v = s.Sb.useSetting(),
        E = (0, u.Z)({
            type: f,
            id: y,
            name: O,
            isInExpressionPicker: !0,
        }),
        P =
            null != S
                ? (0, i.jsx)(r.sN, {
                      id: "copy",
                      label: g.intl.string(g.t.ad58UB),
                      action: () => (0, b.JG)(S),
                  })
                : null,
        h = (0, c.Z)({
            id: y,
            shiftId:
                f === p.S.EMOJI
                    ? "<"
                          .concat(j ? "a" : "", ":")
                          .concat(null == O ? void 0 : O.split("~")[0], ":")
                          .concat(y, ">")
                    : void 0,
            label: f === p.S.STICKER ? g.intl.string(g.t.SJ3249) : g.intl.string(g.t.Ap2oVy),
        }),
        m = l.useCallback(() => {
            null != y &&
                null != O &&
                (0, b.JG)(
                    (0, d.qc)({
                        id: y,
                        name: O,
                        animated: j,
                    }),
                );
        }, [y, O, j]),
        I =
            null != y && null != O && null == S && f === p.S.EMOJI
                ? (0, i.jsx)(r.sN, {
                      id: "copy-image-link",
                      label: g.intl.string(g.t["8xHmxo"]),
                      action: m,
                      icon: o.xPt,
                  })
                : null;
    return (0, i.jsx)(o.v2r, {
        navId: "expression-picker",
        onClose: a.Zy,
        "aria-label": g.intl.string(g.t.XoasSC),
        onSelect: n,
        className: "context-menu",
        children: (0, i.jsxs)(o.kSQ, {
            children: [E, b.wS && v ? (null != P ? P : h) : null, b.wS && v ? I : null],
        }),
    });
}
