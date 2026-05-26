i.d(t, { A: () => d });
var l = i(627968),
    n = i(64700),
    a = i(777666),
    r = i(155718),
    s = i(375708),
    o = i(41614);
function d(e) {
    let { labelType: t, collapsed: i = !1 } = e,
        d = t === r.Hr.NEW ? s.intl.string(s.t.y2b7CA) : s.intl.string(s.t["/qdhkk"]),
        p = t === r.Hr.NEW ? o.Ph : o.O5,
        [c, u] = n.useState(i ? "" : d);
    return (n.useEffect(() => {
        i
            ? u("")
            : t === r.Hr.NEW
              ? u(s.intl.string(s.t.y2b7CA))
              : t === r.Hr.UPDATED && u(s.intl.string(s.t["/qdhkk"]));
    }, [i, t]),
    t === r.Hr.NONE)
        ? null
        : (0, l.jsx)(a.Lp, { className: p, disableColor: !0, text: (0, l.jsx)("span", { children: c }) });
}
