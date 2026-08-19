l.d(t, { a: () => N, v: () => E }), l(321073);
var n = l(477900),
    r = l(582128),
    a = l(355522),
    i = l(37766),
    s = l(637956),
    o = l(352224),
    c = l(885574),
    u = l(691885),
    d = l(834730),
    m = l(939249),
    x = l(661531),
    f = l(866665),
    p = l(46054),
    v = l(812745),
    h = l(327105),
    j = l(375708),
    g = l(255900);
let N = "new_payment_source_id";
function E(e) {
    let {
            value: t,
            options: l,
            onChange: E,
            onNew: T,
            noticeMessage: b,
            newPaymentMethodOptionLabel: A,
            disabled: S = !1,
            error: C,
        } = e,
        I = r.useMemo(() => {
            let e = l.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === v.Be.BANK
                                ? (0, n.jsx)(a.M, { className: g.s7 })
                                : e.icon === v.Be.GIFT_CARD
                                  ? (0, n.jsx)(i._, { className: g.s7 })
                                  : e.icon === v.Be.PIX
                                    ? (0, n.jsx)(s.W, { className: g.s7 })
                                    : e.icon === v.Be.IDEAL
                                      ? (0, n.jsx)(o.E, { className: g.s7 })
                                      : (0, n.jsx)("img", { src: (0, v.Nj)(e.icon), alt: "", className: g.s7 })
                            : void 0,
                    l =
                        null != e.tooltipText
                            ? (0, n.jsx)(f.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, n.jsx)(c.CircleInformationIcon, {
                                      size: "xs",
                                      color: x.A.colors.TEXT_MUTED,
                                  }),
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
                    id: N,
                    value: N,
                    label: A ?? j.intl.string(h.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [l, A]),
        P = r.useCallback(
            (e) => {
                e === N ? T() : null != e && E(e);
            },
            [T, E],
        ),
        D = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(u.l, {
                    label: j.intl.string(j.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: j.intl.string(h.default.rNF29q),
                    value: t,
                    options: I,
                    onSelectionChange: P,
                    selectionMode: "single",
                    disabled: S || 0 === l.length,
                    errorMessage: C,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != b
                    ? (0, n.jsxs)("div", {
                          className: g.T4,
                          children: [
                              (0, n.jsx)(c.CircleInformationIcon, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, n.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof b ? p.A.parse(b, !1, { allowLinks: !0 }) : b,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== l.length || S
        ? D
        : (0, n.jsx)(m.D, { onClick: T, "aria-label": j.intl.string(h.default.rNF29q), className: g.OV, children: D });
}
