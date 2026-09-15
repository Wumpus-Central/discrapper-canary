(l.d(t, { a: () => N, v: () => b }), l(321073));
var s = l(477900),
    n = l(582128),
    a = l(355522),
    r = l(37766),
    i = l(637956),
    c = l(352224),
    d = l(885574),
    u = l(691885),
    o = l(834730),
    m = l(939249),
    x = l(661531),
    j = l(866665),
    h = l(46054),
    v = l(812745),
    g = l(649975),
    p = l(375708),
    f = l(381909);
let N = "new_payment_source_id";
function b(e) {
    let {
            value: t,
            options: l,
            onChange: b,
            onNew: E,
            noticeMessage: C,
            newPaymentMethodOptionLabel: T,
            disabled: y = !1,
            error: k,
        } = e,
        I = n.useMemo(() => {
            let e = l.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === v.Be.BANK
                                ? (0, s.jsx)(a.M, { className: f.s7 })
                                : e.icon === v.Be.GIFT_CARD
                                  ? (0, s.jsx)(r._, { className: f.s7 })
                                  : e.icon === v.Be.PIX
                                    ? (0, s.jsx)(i.W, { className: f.s7 })
                                    : e.icon === v.Be.IDEAL
                                      ? (0, s.jsx)(c.E, { className: f.s7 })
                                      : (0, s.jsx)("img", { src: (0, v.Nj)(e.icon), alt: "", className: f.s7 })
                            : void 0,
                    l =
                        null != e.tooltipText
                            ? (0, s.jsx)(j.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, s.jsx)(d.CircleInformationIcon, {
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
                    label: T ?? p.intl.string(g.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [l, T]),
        A = n.useCallback(
            (e) => {
                e === N ? E() : null != e && b(e);
            },
            [E, b],
        ),
        S = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(u.l, {
                    label: p.intl.string(p.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: p.intl.string(g.default.rNF29q),
                    value: t,
                    options: I,
                    onSelectionChange: A,
                    selectionMode: "single",
                    disabled: y || 0 === l.length,
                    errorMessage: k,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != C
                    ? (0, s.jsxs)("div", {
                          className: f.T4,
                          children: [
                              (0, s.jsx)(d.CircleInformationIcon, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, s.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof C ? h.A.parse(C, !1, { allowLinks: !0 }) : C,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== l.length || y
        ? S
        : (0, s.jsx)(m.D, { onClick: E, "aria-label": p.intl.string(g.default.rNF29q), className: f.OV, children: S });
}
