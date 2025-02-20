n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(399606),
    s = n(243778),
    c = n(914010),
    u = n(566840),
    d = n(921944),
    p = n(430168);
let h = i.memo(function (e) {
    let { state: t, markAsDismissed: n } = e,
        { name: l, guildId: a, boundingRect: s } = t,
        c = i.useMemo(() => {
            var e, t, n;
            return (e = 0), (t = 0), (n = 0), null;
        }, [l, a, n]);
    return null == c
        ? null
        : (0, r.jsx)('div', {
              className: o()(p.upsell, (null == s || s.y < 0) && p.hidden),
              style:
                  null == s
                      ? {}
                      : {
                            top: s.top,
                            left: s.right - s.x
                        },
              children: c
          });
});
function g() {
    let e = (0, a.e7)([c.Z], () => c.Z.getGuildId()),
        t = (0, u.Eg)(e),
        [n, i] = (0, s.US)(
            Object.values(t)
                .filter((e) => {
                    let { disabled: t } = e;
                    return !t;
                })
                .map((e) => {
                    let { name: t } = e;
                    return t;
                }),
            d.R.SIDEBAR
        );
    if (null == n) return null;
    let l = t[n];
    return null == l
        ? null
        : (0, r.jsx)('div', {
              className: p.container,
              children: (0, r.jsx)(h, {
                  state: l,
                  markAsDismissed: i
              })
          });
}
