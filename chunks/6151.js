(n.d(t, { a: () => E, v: () => N }), n(321073));
var l = n(477900),
    r = n(582128),
    a = n(661531),
    i = n(355522),
    s = n(37766),
    o = n(637956),
    u = n(352224),
    c = n(866665),
    d = n(885574),
    m = n(691885),
    x = n(834730),
    f = n(939249),
    p = n(46054),
    h = n(812745),
    v = n(583741),
    j = n(375708),
    g = n(381909);
let E = "new_payment_source_id";
function N(e) {
    let {
            value: t,
            options: n,
            onChange: N,
            onNew: b,
            noticeMessage: T,
            newPaymentMethodOptionLabel: A,
            disabled: I = !1,
            error: C,
        } = e,
        _ = r.useMemo(() => {
            let e = n.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === h.Be.BANK
                                ? (0, l.jsx)(i.M, { className: g.s7 })
                                : e.icon === h.Be.GIFT_CARD
                                  ? (0, l.jsx)(s._, { className: g.s7 })
                                  : e.icon === h.Be.PIX
                                    ? (0, l.jsx)(o.W, { className: g.s7 })
                                    : e.icon === h.Be.IDEAL
                                      ? (0, l.jsx)(u.E, { className: g.s7 })
                                      : (0, l.jsx)("img", { src: (0, h.Nj)(e.icon), alt: "", className: g.s7 })
                            : void 0,
                    n =
                        null != e.tooltipText
                            ? (0, l.jsx)(c.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, l.jsx)(d.CircleInformationIcon, {
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
                    trailing: n,
                    description: e.description,
                    disabled: e.disabled,
                };
            });
            return (
                e.push({
                    id: E,
                    value: E,
                    label: A ?? j.intl.string(v.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, A]),
        y = r.useCallback(
            (e) => {
                e === E ? b() : null != e && N(e);
            },
            [b, N],
        ),
        S = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(m.l, {
                    label: j.intl.string(j.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: j.intl.string(v.default.rNF29q),
                    value: t,
                    options: _,
                    onSelectionChange: y,
                    selectionMode: "single",
                    disabled: I || 0 === n.length,
                    errorMessage: C,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != T
                    ? (0, l.jsxs)("div", {
                          className: g.T4,
                          children: [
                              (0, l.jsx)(d.CircleInformationIcon, { size: "xs", color: a.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, l.jsx)(x.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof T ? p.A.parse(T, !1, { allowLinks: !0 }) : T,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || I
        ? S
        : (0, l.jsx)(f.D, { onClick: b, "aria-label": j.intl.string(v.default.rNF29q), className: g.OV, children: S });
}
