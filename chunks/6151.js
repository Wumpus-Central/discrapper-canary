n.d(t, {
    v: () => u,
}),
    n(228524),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(74818),
    s = n(812745),
    o = n(756366),
    l = n(985018),
    c = n(355767);

function u(e) {
    let { label: t, value: n, options: u, onChange: d, onNew: f, disabled: p = !1, error: _ } = e,
        h = i.useId(),
        m = i.useMemo(() => {
            let e = u.map((e) => {
                let t = e.icon
                    ? (0, r.jsx)("img", {
                          src: (0, s.Nj)(e.icon),
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
                };
            });
            return (
                e.push({
                    id: h,
                    value: h,
                    label: l.intl.string(o.default.rNF29q),
                    leading: void 0,
                    description: void 0,
                }),
                e
            );
        }, [u, h]),
        g = i.useCallback(
            (e) => {
                e === h ? f() : null != e && d(e);
            },
            [f, d, h],
        );
    return (0, r.jsx)(a.l, {
        label: t,
        placeholder: l.intl.string(o.default.rNF29q),
        value: n,
        options: m,
        onSelectionChange: g,
        selectionMode: "single",
        disabled: p,
        errorMessage: _,
        fullWidth: !0,
    });
}
