"use strict";
n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var i = n(783878),
    s = n(268761),
    a = n(985018),
    r = n(980296);
let o = (e) => {
    let { autoArchiveDuration: t, onChange: n, isDisabled: o, helperText: d } = e,
        c = (0, s.Gk)();
    return (0, l.jsx)("div", {
        className: r.gy,
        children: (0, l.jsx)(i.Z, {
            selectionMode: "single",
            label: a.intl.string(a.t.FGjMZS),
            helperText: d,
            disabled: o,
            options: c,
            value: t,
            onSelectionChange: n,
        }),
    });
};
