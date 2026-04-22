n.d(t, { a: () => f, v: () => g }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(355522),
    a = n(885574),
    s = n(691885),
    o = n(834730),
    u = n(939249),
    c = n(827734),
    d = n(990078),
    _ = n(46054),
    p = n(812745),
    h = n(327105),
    m = n(985018),
    A = n(643892);
let f = "new_payment_source_id";
function g(e) {
    let {
            value: t,
            options: n,
            onChange: g,
            onNew: E,
            noticeMessage: C,
            newPaymentMethodOptionLabel: I,
            disabled: v = !1,
            error: y,
        } = e,
        T = l.useMemo(() => {
            let e = n.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === p.Be.BANK
                                ? (0, r.jsx)(i.M, { className: A.s7 })
                                : (0, r.jsx)("img", { src: (0, p.Nj)(e.icon), alt: "", className: A.s7 })
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
                    id: f,
                    value: f,
                    label: I ?? m.intl.string(h.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, I]),
        x = l.useCallback(
            (e) => {
                e === f ? E() : null != e && g(e);
            },
            [E, g],
        ),
        b = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.l, {
                    label: m.intl.string(m.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: m.intl.string(h.default.rNF29q),
                    value: t,
                    options: T,
                    onSelectionChange: x,
                    selectionMode: "single",
                    disabled: v || 0 === n.length,
                    errorMessage: y,
                    fullWidth: !0,
                }),
                null != C
                    ? (0, r.jsxs)("div", {
                          className: A.T4,
                          children: [
                              (0, r.jsx)(a.m, { size: "xs", color: c.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, r.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof C ? _.A.parse(C, !1, { allowLinks: !0 }) : C,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || v
        ? b
        : (0, r.jsx)(u.D, { onClick: E, "aria-label": m.intl.string(h.default.rNF29q), className: A.OV, children: b });
}
