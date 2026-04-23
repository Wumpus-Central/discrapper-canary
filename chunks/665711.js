"use strict";
n.d(t, { W: () => o });
var r = n(627968),
    i = n(64700),
    s = n(486020),
    a = n(236536);
let o = (e) => {
    let { application: t, iconSize: n = 20 } = e,
        o = i.useMemo(() => s.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: n }), [t, n]);
    return (0, r.jsx)("img", { className: a.I, src: o, alt: "", height: n, width: n });
};
