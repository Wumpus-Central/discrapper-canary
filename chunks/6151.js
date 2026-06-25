"use strict";
n.d(t, { a: () => A, v: () => I }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(355522),
    a = n(37766),
    o = n(637956),
    l = n(885574),
    u = n(691885),
    c = n(834730),
    d = n(939249),
    _ = n(661531),
    h = n(990078),
    f = n(46054),
    p = n(812745),
    E = n(982772),
    m = n(375708),
    g = n(269876);
let A = "new_payment_source_id";
function I(e) {
    let {
            value: t,
            options: n,
            onChange: I,
            onNew: T,
            noticeMessage: S,
            newPaymentMethodOptionLabel: y,
            disabled: C = !1,
            error: N,
        } = e,
        v = r.useMemo(() => {
            let e = n.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === p.Be.BANK
                                ? (0, i.jsx)(s.M, { className: g.s7 })
                                : e.icon === p.Be.GIFT_CARD
                                  ? (0, i.jsx)(a._, { className: g.s7 })
                                  : e.icon === p.Be.PIX
                                    ? (0, i.jsx)(o.W, { className: g.s7 })
                                    : (0, i.jsx)("img", { src: (0, p.Nj)(e.icon), alt: "", className: g.s7 })
                            : void 0,
                    n =
                        null != e.tooltipText
                            ? (0, i.jsx)(h.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, i.jsx)(l.m, { size: "xs", color: _.A.colors.TEXT_MUTED }),
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
                    label: y ?? m.intl.string(E.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, y]),
        R = r.useCallback(
            (e) => {
                e === A ? T() : null != e && I(e);
            },
            [T, I],
        ),
        O = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.l, {
                    label: m.intl.string(m.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: m.intl.string(E.default.rNF29q),
                    value: t,
                    options: v,
                    onSelectionChange: R,
                    selectionMode: "single",
                    disabled: C || 0 === n.length,
                    errorMessage: N,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != S
                    ? (0, i.jsxs)("div", {
                          className: g.T4,
                          children: [
                              (0, i.jsx)(l.m, { size: "xs", color: _.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, i.jsx)(c.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof S ? f.A.parse(S, !1, { allowLinks: !0 }) : S,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || C
        ? O
        : (0, i.jsx)(d.D, { onClick: T, "aria-label": m.intl.string(E.default.rNF29q), className: g.OV, children: O });
}
