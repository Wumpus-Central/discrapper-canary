n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(417597),
    o = n(932001),
    d = n(967198),
    u = n(533550),
    c = n(49999),
    A = n(46275);
let h = r.memo(function (e) {
    let { state: t, markAsDismissed: n } = e,
        { name: a, guildId: s, boundingRect: o } = t,
        d = r.useMemo(() => null, [a, s, n]);
    return null == d
        ? null
        : (0, i.jsx)("div", {
              className: l()(A.UX, (null == o || o.y < 0) && A.R),
              style: null == o ? {} : { top: o.top, left: o.right - o.x },
              children: d,
          });
});
function _() {
    let e = (0, s.bG)([d.A], () => d.A.getGuildId()),
        t = (0, u.RX)(e),
        [n, r] = (0, o.kn)(
            Object.values(t)
                .filter((e) => {
                    let { disabled: t } = e;
                    return !t;
                })
                .map((e) => {
                    let { name: t } = e;
                    return t;
                }),
            c.m.SIDEBAR,
        );
    if (null == n) return null;
    let a = t[n];
    return null == a
        ? null
        : (0, i.jsx)("div", { className: A.kL, children: (0, i.jsx)(h, { state: a, markAsDismissed: r }) });
}
