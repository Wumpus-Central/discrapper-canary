n.d(t, { Z: () => s }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(970184);
function s(e) {
    let { type: t, options: n, required: s, maxValues: l } = e,
        c = i.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        { state: u, executeStateUpdate: d } = (0, o.Ee)(
            e,
            c.length > 0
                ? {
                      type: t,
                      values: c,
                  }
                : void 0,
        ),
        f = i.useMemo(() => ((null == u ? void 0 : u.type) === t ? u.values : []), [u, t]),
        p = (e) => {
            d({
                type: t,
                values: e,
            });
        };
    return (0, r.jsx)(a.cOn, {
        options: n.map((e) => ({
            label: e.label,
            value: e.value,
            description: e.description,
            disabled: f.length >= l && !f.includes(e.value),
        })),
        selectedValues: f,
        onChange: p,
        required: s,
    });
}
