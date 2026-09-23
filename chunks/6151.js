(n.d(t, { a: () => E, v: () => N }), n(321073));
var l = n(477900),
    r = n(582128),
    s = n(355522),
    a = n(37766),
    i = n(637956),
    o = n(352224),
    c = n(885574),
    d = n(691885),
    u = n(834730),
    m = n(939249),
    x = n(661531),
    j = n(866665),
    h = n(46054),
    v = n(812745),
    f = n(649975),
    p = n(375708),
    g = n(381909);
let E = "new_payment_source_id";
function N(e) {
    let {
            value: t,
            options: n,
            onChange: N,
            onNew: b,
            noticeMessage: C,
            newPaymentMethodOptionLabel: I,
            disabled: y = !1,
            error: T,
        } = e,
        _ = r.useMemo(() => {
            let e = n.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === v.Be.BANK
                                ? (0, l.jsx)(s.M, { className: g.s7 })
                                : e.icon === v.Be.GIFT_CARD
                                  ? (0, l.jsx)(a._, { className: g.s7 })
                                  : e.icon === v.Be.PIX
                                    ? (0, l.jsx)(i.W, { className: g.s7 })
                                    : e.icon === v.Be.IDEAL
                                      ? (0, l.jsx)(o.E, { className: g.s7 })
                                      : (0, l.jsx)("img", { src: (0, v.Nj)(e.icon), alt: "", className: g.s7 })
                            : void 0,
                    n =
                        null != e.tooltipText
                            ? (0, l.jsx)(j.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, l.jsx)(c.CircleInformationIcon, {
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
                    trailing: n,
                    description: e.description,
                    disabled: e.disabled,
                };
            });
            return (
                e.push({
                    id: E,
                    value: E,
                    label: I ?? p.intl.string(f.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, I]),
        A = r.useCallback(
            (e) => {
                e === E ? b() : null != e && N(e);
            },
            [b, N],
        ),
        D = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.l, {
                    label: p.intl.string(p.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: p.intl.string(f.default.rNF29q),
                    value: t,
                    options: _,
                    onSelectionChange: A,
                    selectionMode: "single",
                    disabled: y || 0 === n.length,
                    errorMessage: T,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != C
                    ? (0, l.jsxs)("div", {
                          className: g.T4,
                          children: [
                              (0, l.jsx)(c.CircleInformationIcon, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, l.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof C ? h.A.parse(C, !1, { allowLinks: !0 }) : C,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || y
        ? D
        : (0, l.jsx)(m.D, { onClick: b, "aria-label": p.intl.string(f.default.rNF29q), className: g.OV, children: D });
}
