(l.d(t, { a: () => N, v: () => b }), l(321073));
var n = l(477900),
    r = l(582128),
    s = l(355522),
    i = l(37766),
    a = l(637956),
    u = l(352224),
    c = l(885574),
    o = l(691885),
    d = l(834730),
    m = l(939249),
    x = l(661531),
    h = l(866665),
    p = l(46054),
    v = l(812745),
    j = l(649975),
    f = l(375708),
    g = l(381909);
let N = "new_payment_source_id";
function b(e) {
    let {
            value: t,
            options: l,
            onChange: b,
            onNew: E,
            noticeMessage: T,
            newPaymentMethodOptionLabel: S,
            disabled: y = !1,
            error: A,
        } = e,
        C = r.useMemo(() => {
            let e = l.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === v.Be.BANK
                                ? (0, n.jsx)(s.M, { className: g.s7 })
                                : e.icon === v.Be.GIFT_CARD
                                  ? (0, n.jsx)(i._, { className: g.s7 })
                                  : e.icon === v.Be.PIX
                                    ? (0, n.jsx)(a.W, { className: g.s7 })
                                    : e.icon === v.Be.IDEAL
                                      ? (0, n.jsx)(u.E, { className: g.s7 })
                                      : (0, n.jsx)("img", { src: (0, v.Nj)(e.icon), alt: "", className: g.s7 })
                            : void 0,
                    l =
                        null != e.tooltipText
                            ? (0, n.jsx)(h.m, {
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
                    label: S ?? f.intl.string(j.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [l, S]),
        D = r.useCallback(
            (e) => {
                e === N ? E() : null != e && b(e);
            },
            [E, b],
        ),
        I = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(o.l, {
                    label: f.intl.string(f.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: f.intl.string(j.default.rNF29q),
                    value: t,
                    options: C,
                    onSelectionChange: D,
                    selectionMode: "single",
                    disabled: y || 0 === l.length,
                    errorMessage: A,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != T
                    ? (0, n.jsxs)("div", {
                          className: g.T4,
                          children: [
                              (0, n.jsx)(c.CircleInformationIcon, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, n.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof T ? p.A.parse(T, !1, { allowLinks: !0 }) : T,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== l.length || y
        ? I
        : (0, n.jsx)(m.D, { onClick: E, "aria-label": f.intl.string(j.default.rNF29q), className: g.OV, children: I });
}
