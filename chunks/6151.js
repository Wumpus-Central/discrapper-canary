(l.d(t, { a: () => E, v: () => N }), l(321073));
var a = l(477900),
    n = l(582128),
    r = l(661531),
    s = l(355522),
    i = l(37766),
    o = l(637956),
    d = l(352224),
    c = l(866665),
    u = l(885574),
    m = l(691885),
    x = l(834730),
    f = l(939249),
    p = l(46054),
    h = l(812745),
    v = l(758476),
    j = l(105292),
    b = l(381909);
let E = "new_payment_source_id";
function N(e) {
    let {
            value: t,
            options: l,
            onChange: N,
            onNew: g,
            noticeMessage: T,
            newPaymentMethodOptionLabel: y,
            disabled: A = !1,
            error: I,
        } = e,
        C = n.useMemo(() => {
            let e = l.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === h.Be.BANK
                                ? (0, a.jsx)(s.M, { className: b.s7 })
                                : e.icon === h.Be.GIFT_CARD
                                  ? (0, a.jsx)(i._, { className: b.s7 })
                                  : e.icon === h.Be.PIX
                                    ? (0, a.jsx)(o.W, { className: b.s7 })
                                    : e.icon === h.Be.IDEAL
                                      ? (0, a.jsx)(d.E, { className: b.s7 })
                                      : (0, a.jsx)("img", { src: (0, h.Nj)(e.icon), alt: "", className: b.s7 })
                            : void 0,
                    l =
                        null != e.tooltipText
                            ? (0, a.jsx)(c.m, {
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
                    id: E,
                    value: E,
                    label: y ?? j.intl.string(v.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [l, y]),
        _ = n.useCallback(
            (e) => {
                e === E ? g() : null != e && N(e);
            },
            [g, N],
        ),
        D = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(m.l, {
                    label: j.intl.string(j.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: j.intl.string(v.default.rNF29q),
                    value: t,
                    options: C,
                    onSelectionChange: _,
                    selectionMode: "single",
                    disabled: A || 0 === l.length,
                    errorMessage: I,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != T
                    ? (0, a.jsxs)("div", {
                          className: b.T4,
                          children: [
                              (0, a.jsx)(u.CircleInformationIcon, { size: "xs", color: r.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, a.jsx)(x.E, {
                                  variant: "body-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof T ? p.A.parse(T, !1, { allowLinks: !0 }) : T,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== l.length || A
        ? D
        : (0, a.jsx)(f.D, { onClick: g, "aria-label": j.intl.string(v.default.rNF29q), className: b.OV, children: D });
}
