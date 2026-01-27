n.d(t, {
    a: () => d,
    v: () => f,
}),
    n(228524),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    o = n(74818),
    s = n(812745),
    l = n(756366),
    c = n(985018),
    u = n(355767);
let d = "new_payment_source_id";

function f(e) {
    let {
            label: t,
            value: n,
            options: f,
            onChange: p,
            onNew: _,
            newPaymentMethodOptionLabel: h,
            disabled: m = !1,
            error: g,
        } = e,
        E = i.useMemo(() => {
            let e = f.map((e) => {
                let t = e.icon
                    ? (0, r.jsx)("img", {
                          src: (0, s.Nj)(e.icon),
                          alt: "",
                          className: u.s,
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
                    id: d,
                    value: d,
                    label: null != h ? h : c.intl.string(l.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [f, h]),
        y = i.useCallback(
            (e) => {
                e === d ? _() : null != e && p(e);
            },
            [_, p],
        ),
        b = (0, r.jsx)(o.l, {
            label: t,
            placeholder: c.intl.string(l.default.rNF29q),
            value: n,
            options: E,
            onSelectionChange: y,
            selectionMode: "single",
            disabled: m || 0 === f.length,
            errorMessage: g,
            fullWidth: !0,
        });
    return 0 !== f.length || m
        ? b
        : (0, r.jsx)(a.DUT, {
              onClick: _,
              "aria-label": c.intl.string(l.default.rNF29q),
              className: u.O,
              children: b,
          });
}
