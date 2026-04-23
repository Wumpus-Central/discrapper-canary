n.d(t, { a: () => m, v: () => A }), n(321073);
var r = n(627968),
    a = n(64700),
    i = n(355522),
    o = n(885574),
    l = n(691885),
    s = n(834730),
    d = n(939249),
    u = n(661531),
    c = n(990078),
    _ = n(46054),
    p = n(812745),
    C = n(327105),
    h = n(985018),
    E = n(643892);
let m = "new_payment_source_id";
function A(e) {
    let {
            value: t,
            options: n,
            onChange: A,
            onNew: I,
            noticeMessage: T,
            newPaymentMethodOptionLabel: y,
            disabled: g = !1,
            error: S,
        } = e,
        N = a.useMemo(() => {
            let e = n.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === p.Be.BANK
                                ? (0, r.jsx)(i.M, { className: E.s7 })
                                : (0, r.jsx)("img", { src: (0, p.Nj)(e.icon), alt: "", className: E.s7 })
                            : void 0,
                    n =
                        null != e.tooltipText
                            ? (0, r.jsx)(c.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, r.jsx)(o.m, { size: "xs", color: u.A.colors.TEXT_MUTED }),
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
                    label: y ?? h.intl.string(C.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, y]),
        f = a.useCallback(
            (e) => {
                e === m ? I() : null != e && A(e);
            },
            [I, A],
        ),
        R = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.l, {
                    label: h.intl.string(h.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: h.intl.string(C.default.rNF29q),
                    value: t,
                    options: N,
                    onSelectionChange: f,
                    selectionMode: "single",
                    disabled: g || 0 === n.length,
                    errorMessage: S,
                    fullWidth: !0,
                }),
                null != T
                    ? (0, r.jsxs)("div", {
                          className: E.T4,
                          children: [
                              (0, r.jsx)(o.m, { size: "xs", color: u.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, r.jsx)(s.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof T ? _.A.parse(T, !1, { allowLinks: !0 }) : T,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || g
        ? R
        : (0, r.jsx)(d.D, { onClick: I, "aria-label": h.intl.string(C.default.rNF29q), className: E.OV, children: R });
}
