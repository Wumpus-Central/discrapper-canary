n.d(e, { default: () => y }), n(35282);
var l = n(54381),
    i = n(473749),
    r = n(828214),
    o = n(481060),
    a = n(239091),
    u = n(299206),
    c = n(519110),
    s = n(378233),
    b = n(695346),
    d = n(572004),
    p = n(176354),
    f = n(691251),
    g = n(388032);
function y(t) {
    let { target: e, onSelect: n } = t,
        y = e.getAttribute("data-type"),
        O = e.getAttribute("data-id"),
        S = e.getAttribute("data-name"),
        j = e.getAttribute("data-surrogates"),
        m = "true" === e.getAttribute("data-animated"),
        E = e.getAttribute("data-format-type"),
        v = y === f.S.EMOJI,
        P = y === f.S.STICKER,
        h = b.Sb.useSetting(),
        I = (0, c.Z)({
            type: y,
            id: O,
            name: S,
            isInExpressionPicker: !0,
        }),
        x =
            null != j
                ? (0, l.jsx)(r.sN, {
                      id: "copy",
                      label: g.intl.string(g.t.ad58UB),
                      action: () => (0, d.JG)(j),
                  })
                : null,
        C = (0, u.Z)({
            id: O,
            shiftId:
                y === f.S.EMOJI
                    ? "<"
                          .concat(m ? "a" : "", ":")
                          .concat(null == S ? void 0 : S.split("~")[0], ":")
                          .concat(O, ">")
                    : void 0,
            label: y === f.S.STICKER ? g.intl.string(g.t.SJ3249) : g.intl.string(g.t.Ap2oVy),
        }),
        N = i.useCallback(() => {
            if (null != O && null != S) {
                if (v)
                    (0, d.JG)(
                        (0, p.qc)({
                            id: O,
                            name: S,
                            animated: m,
                        }),
                    );
                else if (P && null != E) {
                    let t = (0, s.Q6)({
                        id: O,
                        name: S,
                        format_type: Number(E),
                    });
                    null != t && (0, d.JG)(t);
                }
            }
        }, [O, S, m, v, P, E]),
        k =
            null != O && null != S && ((v && null == j) || (P && null != E))
                ? (0, l.jsx)(r.sN, {
                      id: "copy-image-link",
                      label: g.intl.string(g.t["8xHmxo"]),
                      action: N,
                      icon: o.xPt,
                  })
                : null;
    return (0, l.jsx)(o.v2r, {
        navId: "expression-picker",
        onClose: a.Zy,
        "aria-label": g.intl.string(g.t.XoasSC),
        onSelect: n,
        className: "context-menu",
        children: (0, l.jsxs)(o.kSQ, {
            children: [I, d.wS && h ? (null != x ? x : C) : null, d.wS && h ? k : null],
        }),
    });
}
