l.d(t, { a: () => j, v: () => p }), l(321073);
var n = l(627968),
    a = l(64700),
    r = l(355522),
    s = l(885574),
    i = l(691885),
    c = l(834730),
    o = l(939249),
    u = l(661531),
    d = l(990078),
    m = l(46054),
    x = l(812745),
    h = l(327105),
    g = l(985018),
    v = l(643892);
let j = "new_payment_source_id";
function p(e) {
    let {
            value: t,
            options: l,
            onChange: p,
            onNew: f,
            noticeMessage: N,
            newPaymentMethodOptionLabel: b,
            disabled: E = !1,
            error: T,
        } = e,
        y = a.useMemo(() => {
            let e = l.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === x.Be.BANK
                                ? (0, n.jsx)(r.M, { className: v.s7 })
                                : (0, n.jsx)("img", { src: (0, x.Nj)(e.icon), alt: "", className: v.s7 })
                            : void 0,
                    l =
                        null != e.tooltipText
                            ? (0, n.jsx)(d.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, n.jsx)(s.m, { size: "xs", color: u.A.colors.TEXT_MUTED }),
                              })
                            : void 0;
                return {
                    id: e.id,
                    value: e.id,
                    label: e.label,
                    leading: t,
                    trailing: l,
                    description: e.description,
                    disabled: e.disabled,
                };
            });
            return (
                e.push({
                    id: j,
                    value: j,
                    label: b ?? g.intl.string(h.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [l, b]),
        A = a.useCallback(
            (e) => {
                e === j ? f() : null != e && p(e);
            },
            [f, p],
        ),
        C = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(i.l, {
                    label: g.intl.string(g.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: g.intl.string(h.default.rNF29q),
                    value: t,
                    options: y,
                    onSelectionChange: A,
                    selectionMode: "single",
                    disabled: E || 0 === l.length,
                    errorMessage: T,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != N
                    ? (0, n.jsxs)("div", {
                          className: v.T4,
                          children: [
                              (0, n.jsx)(s.m, { size: "xs", color: u.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, n.jsx)(c.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof N ? m.A.parse(N, !1, { allowLinks: !0 }) : N,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== l.length || E
        ? C
        : (0, n.jsx)(o.D, { onClick: f, "aria-label": g.intl.string(h.default.rNF29q), className: v.OV, children: C });
}
