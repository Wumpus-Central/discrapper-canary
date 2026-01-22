n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(155718),
    o = n(985018),
    l = n(530255);

function c(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        c = t === s.Hr.NEW ? o.intl.string(o.t.y2b7CA) : o.intl.string(o.t["/qdhkk"]),
        u = t === s.Hr.NEW ? l.Ph : l.O5,
        [d, f] = i.useState(n ? "" : c);
    return (i.useEffect(() => {
        n
            ? f("")
            : t === s.Hr.NEW
              ? f(o.intl.string(o.t.y2b7CA))
              : t === s.Hr.UPDATED && f(o.intl.string(o.t["/qdhkk"]));
    }, [n, t]),
    t === s.Hr.NONE)
        ? null
        : (0, r.jsx)(a.LpS, {
              className: u,
              disableColor: !0,
              text: (0, r.jsx)("span", {
                  children: d,
              }),
          });
}
