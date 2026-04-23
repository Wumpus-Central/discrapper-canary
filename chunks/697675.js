n.d(t, { A: () => c });
var l = n(627968),
    i = n(64700),
    a = n(777666),
    s = n(155718),
    r = n(985018),
    o = n(41614);
function c(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        c = t === s.Hr.NEW ? r.intl.string(r.t.y2b7CA) : r.intl.string(r.t["/qdhkk"]),
        d = t === s.Hr.NEW ? o.Ph : o.O5,
        [u, m] = i.useState(n ? "" : c);
    return (i.useEffect(() => {
        n
            ? m("")
            : t === s.Hr.NEW
              ? m(r.intl.string(r.t.y2b7CA))
              : t === s.Hr.UPDATED && m(r.intl.string(r.t["/qdhkk"]));
    }, [n, t]),
    t === s.Hr.NONE)
        ? null
        : (0, l.jsx)(a.Lp, { className: d, disableColor: !0, text: (0, l.jsx)("span", { children: u }) });
}
