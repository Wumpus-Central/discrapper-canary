l(321073);
var n = l(477900),
    r = l(582128),
    a = l(646514),
    s = l(355522),
    i = l(37766),
    o = l(637956),
    c = l(352224),
    d = l(866665),
    u = l(885574),
    m = l(691885),
    x = l(834730),
    h = l(939249),
    p = l(46054),
    f = l(812745),
    v = l(379912),
    j = l(792996),
    b = l(381909);
let g = "new_payment_source_id";
l.d(
    t,
    {},
    {
        a: g,
        v: function (e) {
            let {
                    value: t,
                    options: l,
                    onChange: E,
                    onNew: y,
                    noticeMessage: N,
                    newPaymentMethodOptionLabel: T,
                    disabled: I = !1,
                    error: C,
                } = e,
                A = r.useMemo(() => {
                    let e = l.map((e) => {
                        let t =
                                null != e.icon
                                    ? e.icon === f.Be.BANK
                                        ? (0, n.jsx)(s.BankIcon, { className: b.s7 })
                                        : e.icon === f.Be.GIFT_CARD
                                          ? (0, n.jsx)(i.PaymentTypeGiftCardIcon, { className: b.s7 })
                                          : e.icon === f.Be.PIX
                                            ? (0, n.jsx)(o.PaymentTypePixLogoIcon, { className: b.s7 })
                                            : e.icon === f.Be.IDEAL
                                              ? (0, n.jsx)(c.PaymentTypeIDealWeroIcon, { className: b.s7 })
                                              : (0, n.jsx)("img", { src: (0, f.Nj)(e.icon), alt: "", className: b.s7 })
                                    : void 0,
                            l =
                                null != e.tooltipText
                                    ? (0, n.jsx)(d.m, {
                                          text: e.tooltipText,
                                          asContainer: !0,
                                          children: (0, n.jsx)(u.CircleInformationIcon, {
                                              size: "xs",
                                              color: a.A.colors.TEXT_MUTED,
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
                            id: g,
                            value: g,
                            label: T ?? j.intl.string(v.default.rNF29q),
                            leading: void 0,
                            description: void 0,
                        }),
                        e
                    );
                }, [l, T]),
                _ = r.useCallback(
                    (e) => {
                        e === g ? y() : null != e && E(e);
                    },
                    [y, E],
                ),
                D = (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(m.l, {
                            label: j.intl.string(j.t["u+Cw58"]),
                            hideLabel: !0,
                            placeholder: j.intl.string(v.default.rNF29q),
                            value: t,
                            options: A,
                            onSelectionChange: _,
                            selectionMode: "single",
                            disabled: I || 0 === l.length,
                            errorMessage: C,
                            fullWidth: !0,
                            variant: "unsupported_payment_modal_card",
                        }),
                        null != N
                            ? (0, n.jsxs)("div", {
                                  className: b.T4,
                                  children: [
                                      (0, n.jsx)(u.CircleInformationIcon, {
                                          size: "xs",
                                          color: a.A.colors.TEXT_FEEDBACK_INFO,
                                      }),
                                      (0, n.jsx)(x.E, {
                                          variant: "body-xs/normal",
                                          color: "text-feedback-info",
                                          children: "string" == typeof N ? p.A.parse(N, !1, { allowLinks: !0 }) : N,
                                      }),
                                  ],
                              })
                            : null,
                    ],
                });
            return 0 !== l.length || I
                ? D
                : (0, n.jsx)(h.D, {
                      onClick: y,
                      "aria-label": j.intl.string(v.default.rNF29q),
                      className: b.OV,
                      children: D,
                  });
        },
    },
);
