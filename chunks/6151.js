(l.d(t, { a: () => N, v: () => g }), l(321073));
var a = l(477900),
    n = l(582128),
    r = l(661531),
    s = l(355522),
    i = l(37766),
    o = l(637956),
    c = l(352224),
    d = l(866665),
    u = l(885574),
    m = l(691885),
    x = l(834730),
    f = l(939249),
    p = l(46054),
    h = l(812745),
    v = l(758476),
    j = l(105292),
    E = l(381909);
let N = "new_payment_source_id";
function g(e) {
    let {
            value: t,
            options: l,
            onChange: g,
            onNew: T,
            noticeMessage: A,
            newPaymentMethodOptionLabel: b,
            disabled: I = !1,
            error: C,
        } = e,
        _ = n.useMemo(() => {
            let e = l.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === h.Be.BANK
                                ? (0, a.jsx)(s.M, { className: E.s7 })
                                : e.icon === h.Be.GIFT_CARD
                                  ? (0, a.jsx)(i._, { className: E.s7 })
                                  : e.icon === h.Be.PIX
                                    ? (0, a.jsx)(o.W, { className: E.s7 })
                                    : e.icon === h.Be.IDEAL
                                      ? (0, a.jsx)(c.E, { className: E.s7 })
                                      : (0, a.jsx)("img", { src: (0, h.Nj)(e.icon), alt: "", className: E.s7 })
                            : void 0,
                    l =
                        null != e.tooltipText
                            ? (0, a.jsx)(d.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, a.jsx)(u.CircleInformationIcon, {
                                      size: "xs",
                                      color: r.A.colors.TEXT_MUTED,
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
                    label: b ?? j.intl.string(v.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [l, b]),
        D = n.useCallback(
            (e) => {
                e === N ? T() : null != e && g(e);
            },
            [T, g],
        ),
        S = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(m.l, {
                    label: j.intl.string(j.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: j.intl.string(v.default.rNF29q),
                    value: t,
                    options: _,
                    onSelectionChange: D,
                    selectionMode: "single",
                    disabled: I || 0 === l.length,
                    errorMessage: C,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != A
                    ? (0, a.jsxs)("div", {
                          className: E.T4,
                          children: [
                              (0, a.jsx)(u.CircleInformationIcon, { size: "xs", color: r.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, a.jsx)(x.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof A ? p.A.parse(A, !1, { allowLinks: !0 }) : A,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== l.length || I
        ? S
        : (0, a.jsx)(f.D, { onClick: T, "aria-label": j.intl.string(v.default.rNF29q), className: E.OV, children: S });
}
