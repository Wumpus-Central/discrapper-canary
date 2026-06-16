n.d(t, { a: () => p, v: () => A }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(355522),
    r = n(885574),
    a = n(691885),
    o = n(834730),
    c = n(939249),
    d = n(661531),
    u = n(990078),
    m = n(46054),
    h = n(812745),
    g = n(327105),
    x = n(375708),
    f = n(643892);
let p = "new_payment_source_id";
function A(e) {
    let {
            value: t,
            options: n,
            onChange: A,
            onNew: E,
            noticeMessage: _,
            newPaymentMethodOptionLabel: j,
            disabled: N = !1,
            error: v,
        } = e,
        T = l.useMemo(() => {
            let e = n.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === h.Be.BANK
                                ? (0, i.jsx)(s.M, { className: f.s7 })
                                : (0, i.jsx)("img", { src: (0, h.Nj)(e.icon), alt: "", className: f.s7 })
                            : void 0,
                    n =
                        null != e.tooltipText
                            ? (0, i.jsx)(u.m, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, i.jsx)(r.m, { size: "xs", color: d.A.colors.TEXT_MUTED }),
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
                    id: p,
                    value: p,
                    label: j ?? x.intl.string(g.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, j]),
        I = l.useCallback(
            (e) => {
                e === p ? E() : null != e && A(e);
            },
            [E, A],
        ),
        C = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.l, {
                    label: x.intl.string(x.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: x.intl.string(g.default.rNF29q),
                    value: t,
                    options: T,
                    onSelectionChange: I,
                    selectionMode: "single",
                    disabled: N || 0 === n.length,
                    errorMessage: v,
                    fullWidth: !0,
                    variant: "unsupported_payment_modal_card",
                }),
                null != _
                    ? (0, i.jsxs)("div", {
                          className: f.T4,
                          children: [
                              (0, i.jsx)(r.m, { size: "xs", color: d.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, i.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof _ ? m.A.parse(_, !1, { allowLinks: !0 }) : _,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || N
        ? C
        : (0, i.jsx)(c.D, { onClick: E, "aria-label": x.intl.string(g.default.rNF29q), className: f.OV, children: C });
}
