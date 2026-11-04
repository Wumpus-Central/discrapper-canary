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
    j = l(379912),
    v = l(792996),
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
                    onNew: N,
                    noticeMessage: y,
                    newPaymentMethodOptionLabel: T,
                    disabled: C = !1,
                    error: I,
                } = e,
                _ = r.useMemo(() => {
                    let e = l.map((e) => {
                        let t =
                                null != e.icon
                                    ? e.icon === f.Be.BANK
                                        ? (0, n.jsx)(s.M, { className: b.s7 })
                                        : e.icon === f.Be.GIFT_CARD
                                          ? (0, n.jsx)(i._, { className: b.s7 })
                                          : e.icon === f.Be.PIX
                                            ? (0, n.jsx)(o.W, { className: b.s7 })
                                            : e.icon === f.Be.IDEAL
                                              ? (0, n.jsx)(c.E, { className: b.s7 })
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
                            label: T ?? v.intl.string(j.default.rNF29q),
                            leading: void 0,
                            description: void 0,
                        }),
                        e
                    );
                }, [l, T]),
                A = r.useCallback(
                    (e) => {
                        e === g ? N() : null != e && E(e);
                    },
                    [N, E],
                ),
                D = (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(m.l, {
                            label: v.intl.string(v.t["u+Cw58"]),
                            hideLabel: !0,
                            placeholder: v.intl.string(j.default.rNF29q),
                            value: t,
                            options: _,
                            onSelectionChange: A,
                            selectionMode: "single",
                            disabled: C || 0 === l.length,
                            errorMessage: I,
                            fullWidth: !0,
                            variant: "unsupported_payment_modal_card",
                        }),
                        null != y
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
                                          children: "string" == typeof y ? p.A.parse(y, !1, { allowLinks: !0 }) : y,
                                      }),
                                  ],
                              })
                            : null,
                    ],
                });
            return 0 !== l.length || C
                ? D
                : (0, n.jsx)(h.D, {
                      onClick: N,
                      "aria-label": v.intl.string(j.default.rNF29q),
                      className: b.OV,
                      children: D,
                  });
        },
    },
);
