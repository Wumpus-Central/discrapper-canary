n.d(t, {
    a: () => u,
    v: () => d,
}),
    n(228524),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    o = n(812745),
    s = n(756366),
    l = n(985018),
    c = n(355767);
let u = "new_payment_source_id";

function d(e) {
    let {
            label: t,
            value: n,
            options: d,
            onChange: f,
            onNew: p,
            newPaymentMethodOptionLabel: _,
            disabled: h = !1,
            error: m,
        } = e,
        g = i.useMemo(() => {
            let e = d.map((e) => {
                let t = e.icon
                    ? (0, r.jsx)("img", {
                          src: (0, o.Nj)(e.icon),
                          alt: "",
                          className: c.s,
                      })
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
                    id: u,
                    value: u,
                    label: null != _ ? _ : l.intl.string(s.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [d, _]),
        E = i.useCallback(
            (e) => {
                e === u ? p() : null != e && f(e);
            },
            [p, f],
        ),
        y = (0, r.jsx)(a.l6P, {
            label: t,
            placeholder: l.intl.string(s.default.rNF29q),
            value: n,
            options: g,
            onSelectionChange: E,
            selectionMode: "single",
            disabled: h || 0 === d.length,
            errorMessage: m,
            fullWidth: !0,
        });
    return 0 !== d.length || h
        ? y
        : (0, r.jsx)(a.DUT, {
              onClick: p,
              "aria-label": l.intl.string(s.default.rNF29q),
              className: c.O,
              children: y,
          });
}
