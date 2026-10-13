(l.d(t, { a: () => E, v: () => N }), l(321073));
var n = l(477900),
    a = l(582128),
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
    j = l(583741),
    v = l(660183),
    g = l(381909);
let E = "new_payment_source_id";
function N(e) {
    let {
            value: t,
            options: l,
            onChange: N,
            onNew: T,
            noticeMessage: A,
            newPaymentMethodOptionLabel: b,
            disabled: I = !1,
            error: C,
        } = e,
        _ = a.useMemo(() => {
            let e = l.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === h.Be.BANK
                                ? (0, n.jsx)(s.M, { className: g.s7 })
                                : e.icon === h.Be.GIFT_CARD
                                  ? (0, n.jsx)(i._, { className: g.s7 })
                                  : e.icon === h.Be.PIX
                                    ? (0, n.jsx)(o.W, { className: g.s7 })
                                    : e.icon === h.Be.IDEAL
                                      ? (0, n.jsx)(c.E, { className: g.s7 })
                                      : (0, n.jsx)("img", { src: (0, h.Nj)(e.icon), alt: "", className: g.s7 })
                            : void 0,
                    l =
                        null != e.tooltipText
                            ? (0, n.jsx)(d.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, n.jsx)(u.CircleInformationIcon, {
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
                    label: b ?? v.intl.string(j.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [l, b]),
        y = a.useCallback(
            (e) => {
                e === E ? T() : null != e && N(e);
            },
            [T, N],
        ),
        D = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(m.l, {
                    label: v.intl.string(v.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: v.intl.string(j.default.rNF29q),
                    value: t,
                    options: _,
                    onSelectionChange: y,
                    selectionMode: "single",
                    disabled: I || 0 === l.length,
                    errorMessage: C,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != A
                    ? (0, n.jsxs)("div", {
                          className: g.T4,
                          children: [
                              (0, n.jsx)(u.CircleInformationIcon, { size: "xs", color: r.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, n.jsx)(x.E, {
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
        ? D
        : (0, n.jsx)(f.D, { onClick: T, "aria-label": v.intl.string(j.default.rNF29q), className: g.OV, children: D });
}
