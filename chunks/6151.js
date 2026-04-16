"use strict";
n.d(t, { a: () => d, v: () => _ }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(827734),
    o = n(812745),
    l = n(327105),
    u = n(985018),
    c = n(643892);
let d = "new_payment_source_id";
function _(e) {
    let {
            value: t,
            options: n,
            onChange: _,
            onNew: f,
            noticeMessage: p,
            newPaymentMethodOptionLabel: h,
            disabled: m = !1,
            error: E,
        } = e,
        g = i.useMemo(() => {
            let e = n.map((e) => {
                let t =
                    null != e.icon
                        ? e.icon === o.Be.BANK
                            ? (0, r.jsx)(s.MIV, { className: c.s7 })
                            : (0, r.jsx)("img", { src: (0, o.Nj)(e.icon), alt: "", className: c.s7 })
                        : void 0;
                return {
                    id: e.id,
                    value: e.id,
                    label: e.label,
                    leading: t,
                    description: e.description,
                    disabled: e.disabled,
                };
            });
            return (
                e.push({
                    id: d,
                    value: d,
                    label: h ?? u.intl.string(l.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, h]),
        A = i.useCallback(
            (e) => {
                e === d ? f() : null != e && _(e);
            },
            [f, _],
        ),
        I = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.l6P, {
                    label: u.intl.string(u.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: u.intl.string(l.default.rNF29q),
                    value: t,
                    options: g,
                    onSelectionChange: A,
                    selectionMode: "single",
                    disabled: m || 0 === n.length,
                    errorMessage: E,
                    fullWidth: !0,
                }),
                null != p
                    ? (0, r.jsxs)("div", {
                          className: c.T4,
                          children: [
                              (0, r.jsx)(s.mir, { size: "xs", color: a.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, r.jsx)(s.EYj, { variant: "text-xs/normal", color: "text-subtle", children: p }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || m
        ? I
        : (0, r.jsx)(s.DUT, {
              onClick: f,
              "aria-label": u.intl.string(l.default.rNF29q),
              className: c.OV,
              children: I,
          });
}
