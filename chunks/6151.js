n.d(t, { a: () => E, v: () => _ }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(355522),
    r = n(37766),
    a = n(637956),
    o = n(885574),
    u = n(691885),
    c = n(834730),
    d = n(939249),
    m = n(661531),
    h = n(990078),
    g = n(46054),
    f = n(812745),
    x = n(327105),
    p = n(375708),
    A = n(643892);
let E = "new_payment_source_id";
function _(e) {
    let {
            value: t,
            options: n,
            onChange: _,
            onNew: N,
            noticeMessage: j,
            newPaymentMethodOptionLabel: v,
            disabled: I = !1,
            error: C,
        } = e,
        S = i.useMemo(() => {
            let e = n.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === f.Be.BANK
                                ? (0, l.jsx)(s.M, { className: A.s7 })
                                : e.icon === f.Be.GIFT_CARD
                                  ? (0, l.jsx)(r._, { className: A.s7 })
                                  : e.icon === f.Be.PIX
                                    ? (0, l.jsx)(a.W, { className: A.s7 })
                                    : (0, l.jsx)("img", { src: (0, f.Nj)(e.icon), alt: "", className: A.s7 })
                            : void 0,
                    n =
                        null != e.tooltipText
                            ? (0, l.jsx)(h.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, l.jsx)(o.m, { size: "xs", color: m.A.colors.TEXT_MUTED }),
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
                    label: v ?? p.intl.string(x.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, v]),
        T = i.useCallback(
            (e) => {
                e === E ? N() : null != e && _(e);
            },
            [N, _],
        ),
        y = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(u.l, {
                    label: p.intl.string(p.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: p.intl.string(x.default.rNF29q),
                    value: t,
                    options: S,
                    onSelectionChange: T,
                    selectionMode: "single",
                    disabled: I || 0 === n.length,
                    errorMessage: C,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != j
                    ? (0, l.jsxs)("div", {
                          className: A.T4,
                          children: [
                              (0, l.jsx)(o.m, { size: "xs", color: m.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, l.jsx)(c.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof j ? g.A.parse(j, !1, { allowLinks: !0 }) : j,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || I
        ? y
        : (0, l.jsx)(d.D, { onClick: N, "aria-label": p.intl.string(x.default.rNF29q), className: A.OV, children: y });
}
