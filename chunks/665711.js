"use strict";
n.d(t, { W: () => o });
var i = n(627968),
    r = n(64700),
    s = n(486020),
    a = n(236536);
let o = (e) => {
    let { application: t, iconSize: n = 20 } = e,
        o = r.useMemo(() => s.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: n }), [t, n]);
    return (0, i.jsx)("img", { className: a.I, src: o, alt: "", height: n, width: n });
};
