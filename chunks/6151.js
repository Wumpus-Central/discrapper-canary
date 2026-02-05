"use strict";
n.d(t, { a: () => c, v: () => d }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(812745),
    o = n(756366),
    l = n(985018),
    u = n(355767);
let c = "new_payment_source_id";
function d(e) {
    let {
            label: t,
            value: n,
            options: d,
            onChange: _,
            onNew: f,
            newPaymentMethodOptionLabel: p,
            disabled: h = !1,
            error: m,
        } = e,
        g = i.useMemo(() => {
            let e = d.map((e) => {
                let t = e.icon ? (0, r.jsx)("img", { src: (0, s.Nj)(e.icon), alt: "", className: u.s }) : void 0;
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
                    id: c,
                    value: c,
                    label: p ?? l.intl.string(o.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [d, p]),
        E = i.useCallback(
            (e) => {
                e === c ? f() : null != e && _(e);
            },
            [f, _],
        ),
        A = (0, r.jsx)(a.l6P, {
            label: t,
            placeholder: l.intl.string(o.default.rNF29q),
            value: n,
            options: g,
            onSelectionChange: E,
            selectionMode: "single",
            disabled: h || 0 === d.length,
            errorMessage: m,
            fullWidth: !0,
        });
    return 0 !== d.length || h
        ? A
        : (0, r.jsx)(a.DUT, { onClick: f, "aria-label": l.intl.string(o.default.rNF29q), className: u.O, children: A });
}
