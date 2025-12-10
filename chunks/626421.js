n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(399606),
    o = n(243778),
    c = n(914010),
    u = n(566840),
    d = n(921944),
    p = n(475915);
let f = i.memo(function (e) {
    let { state: t, markAsDismissed: n } = e,
        { name: l, guildId: s, boundingRect: o } = t,
        c = i.useMemo(() => null, [l, s, n]);
    return null == c
        ? null
        : (0, r.jsx)("div", {
              className: a()(p.upsell, (null == o || o.y < 0) && p.hidden),
              style:
                  null == o
                      ? {}
                      : {
                            top: o.top,
                            left: o.right - o.x,
                        },
              children: c,
          });
});
function g() {
    let e = (0, s.e7)([c.Z], () => c.Z.getGuildId()),
        t = (0, u.Eg)(e),
        [n, i] = (0, o.US)(
            Object.values(t)
                .filter((e) => {
                    let { disabled: t } = e;
                    return !t;
                })
                .map((e) => {
                    let { name: t } = e;
                    return t;
                }),
            d.R.SIDEBAR,
        );
    if (null == n) return null;
    let l = t[n];
    return null == l
        ? null
        : (0, r.jsx)("div", {
              className: p.container,
              children: (0, r.jsx)(f, {
                  state: l,
                  markAsDismissed: i,
              }),
          });
}
