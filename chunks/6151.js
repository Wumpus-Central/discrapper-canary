"use strict";
n.d(t, { a: () => d, v: () => _ }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(827734),
    o = n(812745),
    l = n(523376),
    u = n(985018),
    c = n(478969);
let d = "new_payment_source_id";
function _(e) {
    let {
            label: t,
            value: n,
            options: _,
            onChange: f,
            onNew: p,
            noticeMessage: h,
            newPaymentMethodOptionLabel: m,
            disabled: E = !1,
            error: g,
        } = e,
        A = i.useMemo(() => {
            let e = _.map((e) => {
                let t =
                    null != e.icon ? (0, r.jsx)("img", { src: (0, o.Nj)(e.icon), alt: "", className: c.s7 }) : void 0;
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
                    label: m ?? u.intl.string(l.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [_, m]),
        I = i.useCallback(
            (e) => {
                e === d ? p() : null != e && f(e);
            },
            [p, f],
        ),
        T = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.l6P, {
                    label: t,
                    placeholder: u.intl.string(l.default.rNF29q),
                    value: n,
                    options: A,
                    onSelectionChange: I,
                    selectionMode: "single",
                    disabled: E || 0 === _.length,
                    errorMessage: g,
                    fullWidth: !0,
                }),
                null != h
                    ? (0, r.jsxs)("div", {
                          className: c.T4,
                          children: [
                              (0, r.jsx)(s.mir, { size: "xs", color: a.A.colors.TEXT_FEEDBACK_INFO }),
                              (0, r.jsx)(s.EYj, { variant: "text-xs/normal", color: "text-subtle", children: h }),
                          ],
                      })
                    : null,
            ],
        });
    return 0 !== _.length || E
        ? T
        : (0, r.jsx)(s.DUT, {
              onClick: p,
              "aria-label": u.intl.string(l.default.rNF29q),
              className: c.OV,
              children: T,
          });
}
