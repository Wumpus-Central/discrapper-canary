n.d(t, { Z: () => s });
var r = n(200651),
    a = n(192379),
    i = n(481060),
    o = n(246364),
    l = n(388032);
let s = function (e) {
    let { className: t, sortOrder: n, onSortChange: s } = e,
        c = a.useMemo(
            () => [
                {
                    value: o.Nw.TIMESTAMP_DESC,
                    label: l.NW.string(l.t.eoXe0t)
                },
                {
                    value: o.Nw.TIMESTAMP_ASC,
                    label: l.NW.string(l.t.mmeWUF)
                }
            ],
            []
        );
    return (0, r.jsx)(i.q4e, {
        className: t,
        onChange: s,
        value: n,
        options: c
    });
};
