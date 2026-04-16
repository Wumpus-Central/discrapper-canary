"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(155718),
    o = n(985018),
    l = n(41614);
function u(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        u = t === a.Hr.NEW ? o.intl.string(o.t.y2b7CA) : o.intl.string(o.t["/qdhkk"]),
        c = t === a.Hr.NEW ? l.Ph : l.O5,
        [d, _] = i.useState(n ? "" : u);
    return (i.useEffect(() => {
        n
            ? _("")
            : t === a.Hr.NEW
              ? _(o.intl.string(o.t.y2b7CA))
              : t === a.Hr.UPDATED && _(o.intl.string(o.t["/qdhkk"]));
    }, [n, t]),
    t === a.Hr.NONE)
        ? null
        : (0, r.jsx)(s.LpS, { className: c, disableColor: !0, text: (0, r.jsx)("span", { children: d }) });
}
