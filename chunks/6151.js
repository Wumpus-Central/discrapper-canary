l.d(t, { a: () => p, v: () => g }), l(321073);
var s = l(627968),
    a = l(64700),
    n = l(355522),
    i = l(885574),
    r = l(691885),
    d = l(834730),
    c = l(939249),
    u = l(661531),
    o = l(990078),
    m = l(46054),
    x = l(812745),
    h = l(327105),
    j = l(375708),
    v = l(643892);
let p = "new_payment_source_id";
function g(e) {
    let {
            value: t,
            options: l,
            onChange: g,
            onNew: f,
            noticeMessage: N,
            newPaymentMethodOptionLabel: b,
            disabled: E = !1,
            error: T,
        } = e,
        A = a.useMemo(() => {
            let e = l.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === x.Be.BANK
                                ? (0, s.jsx)(n.M, { className: v.s7 })
                                : (0, s.jsx)("img", { src: (0, x.Nj)(e.icon), alt: "", className: v.s7 })
                            : void 0,
                    l =
                        null != e.tooltipText
                            ? (0, s.jsx)(o.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, s.jsx)(i.m, { size: "xs", color: u.A.colors.TEXT_MUTED }),
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
                    id: p,
                    value: p,
                    label: b ?? j.intl.string(h.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [l, b]),
        S = a.useCallback(
            (e) => {
                e === p ? f() : null != e && g(e);
            },
            [f, g],
        ),
        C = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(r.l, {
                    label: j.intl.string(j.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: j.intl.string(h.default.rNF29q),
                    value: t,
                    options: A,
                    onSelectionChange: S,
                    selectionMode: "single",
                    disabled: E || 0 === l.length,
                    errorMessage: T,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != N
                    ? (0, s.jsxs)("div", {
                          className: v.T4,
                          children: [
                              (0, s.jsx)(i.m, { size: "xs", color: u.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, s.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof N ? m.A.parse(N, !1, { allowLinks: !0 }) : N,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== l.length || E
        ? C
        : (0, s.jsx)(c.D, { onClick: f, "aria-label": j.intl.string(h.default.rNF29q), className: v.OV, children: C });
}
