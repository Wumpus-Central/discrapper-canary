(n.d(t, { a: () => E, v: () => b }), n(321073));
var l = n(477900),
    r = n(582128),
    a = n(661531),
    i = n(355522),
    s = n(37766),
    o = n(637956),
    c = n(352224),
    u = n(866665),
    d = n(885574),
    m = n(691885),
    x = n(834730),
    f = n(939249),
    h = n(46054),
    p = n(812745),
    v = n(649975),
    j = n(375708),
    g = n(381909);
let E = "new_payment_source_id";
function b(e) {
    let {
            value: t,
            options: n,
            onChange: b,
            onNew: N,
            noticeMessage: T,
            newPaymentMethodOptionLabel: C,
            disabled: y = !1,
            error: I,
        } = e,
        _ = r.useMemo(() => {
            let e = n.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === p.Be.BANK
                                ? (0, l.jsx)(i.M, { className: g.s7 })
                                : e.icon === p.Be.GIFT_CARD
                                  ? (0, l.jsx)(s._, { className: g.s7 })
                                  : e.icon === p.Be.PIX
                                    ? (0, l.jsx)(o.W, { className: g.s7 })
                                    : e.icon === p.Be.IDEAL
                                      ? (0, l.jsx)(c.E, { className: g.s7 })
                                      : (0, l.jsx)("img", { src: (0, p.Nj)(e.icon), alt: "", className: g.s7 })
                            : void 0,
                    n =
                        null != e.tooltipText
                            ? (0, l.jsx)(u.m, {
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
                    label: C ?? j.intl.string(v.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, C]),
        D = r.useCallback(
            (e) => {
                e === E ? N() : null != e && b(e);
            },
            [N, b],
        ),
        A = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(m.l, {
                    label: j.intl.string(j.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: j.intl.string(v.default.rNF29q),
                    value: t,
                    options: _,
                    onSelectionChange: D,
                    selectionMode: "single",
                    disabled: y || 0 === n.length,
                    errorMessage: I,
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
                                  children: "string" == typeof T ? h.A.parse(T, !1, { allowLinks: !0 }) : T,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || y
        ? A
        : (0, l.jsx)(f.D, { onClick: N, "aria-label": j.intl.string(v.default.rNF29q), className: g.OV, children: A });
}
