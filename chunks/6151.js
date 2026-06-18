n.d(t, { a: () => A, v: () => E }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(355522),
    r = n(37766),
    a = n(885574),
    o = n(691885),
    d = n(834730),
    c = n(939249),
    u = n(661531),
    h = n(990078),
    m = n(46054),
    g = n(812745),
    x = n(327105),
    f = n(375708),
    p = n(643892);
let A = "new_payment_source_id";
function E(e) {
    let {
            value: t,
            options: n,
            onChange: E,
            onNew: _,
            noticeMessage: j,
            newPaymentMethodOptionLabel: N,
            disabled: v = !1,
            error: C,
        } = e,
        I = l.useMemo(() => {
            let e = n.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === g.Be.BANK
                                ? (0, i.jsx)(s.M, { className: p.s7 })
                                : e.icon === g.Be.GIFT_CARD
                                  ? (0, i.jsx)(r._, { className: p.s7 })
                                  : (0, i.jsx)("img", { src: (0, g.Nj)(e.icon), alt: "", className: p.s7 })
                            : void 0,
                    n =
                        null != e.tooltipText
                            ? (0, i.jsx)(h.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, i.jsx)(a.m, { size: "xs", color: u.A.colors.TEXT_MUTED }),
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
                    id: A,
                    value: A,
                    label: N ?? f.intl.string(x.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, N]),
        S = l.useCallback(
            (e) => {
                e === A ? _() : null != e && E(e);
            },
            [_, E],
        ),
        T = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.l, {
                    label: f.intl.string(f.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: f.intl.string(x.default.rNF29q),
                    value: t,
                    options: I,
                    onSelectionChange: S,
                    selectionMode: "single",
                    disabled: v || 0 === n.length,
                    errorMessage: C,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != j
                    ? (0, i.jsxs)("div", {
                          className: p.T4,
                          children: [
                              (0, i.jsx)(a.m, { size: "xs", color: u.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, i.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof j ? m.A.parse(j, !1, { allowLinks: !0 }) : j,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || v
        ? T
        : (0, i.jsx)(c.D, { onClick: _, "aria-label": f.intl.string(x.default.rNF29q), className: p.OV, children: T });
}
