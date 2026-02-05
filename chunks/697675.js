"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(155718),
    o = n(985018),
    l = n(530255);
function u(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        u = t === s.Hr.NEW ? o.intl.string(o.t.y2b7CA) : o.intl.string(o.t["/qdhkk"]),
        c = t === s.Hr.NEW ? l.Ph : l.O5,
        [d, _] = i.useState(n ? "" : u);
    return (i.useEffect(() => {
        n
            ? _("")
            : t === s.Hr.NEW
              ? _(o.intl.string(o.t.y2b7CA))
              : t === s.Hr.UPDATED && _(o.intl.string(o.t["/qdhkk"]));
    }, [n, t]),
    t === s.Hr.NONE)
        ? null
        : (0, r.jsx)(a.LpS, { className: c, disableColor: !0, text: (0, r.jsx)("span", { children: d }) });
}
