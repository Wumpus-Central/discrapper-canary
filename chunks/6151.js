l.d(t, { a: () => f, v: () => N }), l(321073);
var s = l(627968),
    n = l(64700),
    a = l(355522),
    r = l(37766),
    i = l(637956),
    d = l(885574),
    c = l(691885),
    u = l(834730),
    o = l(939249),
    m = l(661531),
    x = l(990078),
    j = l(46054),
    h = l(812745),
    v = l(327105),
    g = l(375708),
    p = l(643892);
let f = "new_payment_source_id";
function N(e) {
    let {
            value: t,
            options: l,
            onChange: N,
            onNew: b,
            noticeMessage: E,
            newPaymentMethodOptionLabel: C,
            disabled: T = !1,
            error: y,
        } = e,
        A = n.useMemo(() => {
            let e = l.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === h.Be.BANK
                                ? (0, s.jsx)(a.M, { className: p.s7 })
                                : e.icon === h.Be.GIFT_CARD
                                  ? (0, s.jsx)(r._, { className: p.s7 })
                                  : e.icon === h.Be.PIX
                                    ? (0, s.jsx)(i.W, { className: p.s7 })
                                    : (0, s.jsx)("img", { src: (0, h.Nj)(e.icon), alt: "", className: p.s7 })
                            : void 0,
                    l =
                        null != e.tooltipText
                            ? (0, s.jsx)(x.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, s.jsx)(d.m, { size: "xs", color: m.A.colors.TEXT_MUTED }),
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
                    id: f,
                    value: f,
                    label: C ?? g.intl.string(v.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [l, C]),
        k = n.useCallback(
            (e) => {
                e === f ? b() : null != e && N(e);
            },
            [b, N],
        ),
        w = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(c.l, {
                    label: g.intl.string(g.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: g.intl.string(v.default.rNF29q),
                    value: t,
                    options: A,
                    onSelectionChange: k,
                    selectionMode: "single",
                    disabled: T || 0 === l.length,
                    errorMessage: y,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != E
                    ? (0, s.jsxs)("div", {
                          className: p.T4,
                          children: [
                              (0, s.jsx)(d.m, { size: "xs", color: m.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, s.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof E ? j.A.parse(E, !1, { allowLinks: !0 }) : E,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== l.length || T
        ? w
        : (0, s.jsx)(o.D, { onClick: b, "aria-label": g.intl.string(v.default.rNF29q), className: p.OV, children: w });
}
