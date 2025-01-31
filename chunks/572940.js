n.d(t, { Z: () => s });
var a = n(200651),
    i = n(192379),
    r = n(481060),
    l = n(246364),
    o = n(388032);
let s = function (e) {
    let { className: t, sortOrder: n, onSortChange: s } = e,
        c = i.useMemo(
            () => [
                {
                    value: l.Nw.TIMESTAMP_DESC,
                    label: o.intl.string(o.t.eoXe0t)
                },
                {
                    value: l.Nw.TIMESTAMP_ASC,
                    label: o.intl.string(o.t.mmeWUF)
                }
            ],
            []
        );
    return (0, a.jsx)(r.q4e, {
        className: t,
        onChange: s,
        value: n,
        options: c
    });
};
