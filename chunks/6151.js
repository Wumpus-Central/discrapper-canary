"use strict";
n.d(t, { a: () => f, v: () => p }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(827734),
    o = n(435371),
    l = n(46054),
    u = n(812745),
    c = n(327105),
    d = n(985018),
    _ = n(643892);
let f = "new_payment_source_id";
function p(e) {
    let {
            value: t,
            options: n,
            onChange: p,
            onNew: h,
            noticeMessage: m,
            newPaymentMethodOptionLabel: E,
            disabled: g = !1,
            error: A,
        } = e,
        I = i.useMemo(() => {
            let e = n.map((e) => {
                let t =
                        null != e.icon
                            ? e.icon === u.Be.BANK
                                ? (0, r.jsx)(s.MIV, { className: _.s7 })
                                : (0, r.jsx)("img", { src: (0, u.Nj)(e.icon), alt: "", className: _.s7 })
                            : void 0,
                    n =
                        null != e.tooltipText
                            ? (0, r.jsx)(o.m_, {
                                  text: e.tooltipText,
                                  asContainer: !0,
                                  children: (0, r.jsx)(s.mir, { size: "xs", color: a.A.colors.TEXT_MUTED }),
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
                    label: E ?? d.intl.string(c.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [n, E]),
        T = i.useCallback(
            (e) => {
                e === f ? h() : null != e && p(e);
            },
            [h, p],
        ),
        S = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.l6P, {
                    label: d.intl.string(d.t["u+Cw58"]),
                    hideLabel: !0,
                    placeholder: d.intl.string(c.default.rNF29q),
                    value: t,
                    options: I,
                    onSelectionChange: T,
                    selectionMode: "single",
                    disabled: g || 0 === n.length,
                    errorMessage: A,
                    fullWidth: !0,
                }),
                null != m
                    ? (0, r.jsxs)("div", {
                          className: _.T4,
                          children: [
                              (0, r.jsx)(s.mir, { size: "xs", color: a.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, r.jsx)(s.EYj, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-info",
                                  children: "string" == typeof m ? l.A.parse(m, !1, { allowLinks: !0 }) : m,
                              }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== n.length || g
        ? S
        : (0, r.jsx)(s.DUT, {
              onClick: h,
              "aria-label": d.intl.string(c.default.rNF29q),
              className: _.OV,
              children: S,
          });
}
