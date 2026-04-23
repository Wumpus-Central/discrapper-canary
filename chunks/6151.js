"use strict";
n.d(t, { a: () => m, v: () => g }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(355522),
    a = n(885574),
    o = n(691885),
    l = n(834730),
    u = n(939249),
    c = n(827734),
    d = n(990078),
    _ = n(46054),
    f = n(812745),
    p = n(327105),
    h = n(985018),
    E = n(643892);
let m = "new_payment_source_id";
function g(e) {
    let {
            value: t,
            options: n,
            onChange: g,
            onNew: A,
            noticeMessage: I,
            newPaymentMethodOptionLabel: T,
            disabled: S = !1,
            error: y,
        } = e,
        N = i.useMemo(() => {
            let e = n.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === f.Be.BANK
                                ? (0, r.jsx)(s.M, { className: E.s7 })
                                : (0, r.jsx)("img", { src: (0, f.Nj)(e.icon), alt: "", className: E.s7 })
                            : void 0,
                    n =
                        null != e.tooltipText
                            ? (0, r.jsx)(d.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, r.jsx)(a.m, { size: "xs", color: c.A.colors.TEXT_MUTED }),
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
                    id: m,
                    value: m,
                    label: T ?? h.intl.string(p.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, T]),
        v = i.useCallback(
            (e) => {
                e === m ? A() : null != e && g(e);
            },
            [A, g],
        ),
        C = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.l, {
                    label: h.intl.string(h.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: h.intl.string(p.default.rNF29q),
                    value: t,
                    options: N,
                    onSelectionChange: v,
                    selectionMode: "single",
                    disabled: S || 0 === n.length,
                    errorMessage: y,
                    fullWidth: !0,
                }),
                null != I
                    ? (0, r.jsxs)("div", {
                          className: E.T4,
                          children: [
                              (0, r.jsx)(a.m, { size: "xs", color: c.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, r.jsx)(l.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof I ? _.A.parse(I, !1, { allowLinks: !0 }) : I,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || S
        ? C
        : (0, r.jsx)(u.D, { onClick: A, "aria-label": h.intl.string(p.default.rNF29q), className: E.OV, children: C });
}
