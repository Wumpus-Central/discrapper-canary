n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(399606),
    o = n(243778),
    c = n(914010),
    d = n(566840),
    u = n(921944),
    h = n(913208);
let m = l.memo(function (e) {
    let { state: t, markAsDismissed: n } = e,
        { name: r, guildId: s, boundingRect: o } = t,
        c = l.useMemo(() => {
            var e, t, n;
            return (e = 0), (t = 0), (n = 0), null;
        }, [r, s, n]);
    return null == c
        ? null
        : (0, i.jsx)('div', {
              className: a()(h.upsell, !(null != o && !(o.y < 0)) && h.hidden),
              style:
                  null == o
                      ? {}
                      : {
                            top: o.top,
                            left: o.right - o.x
                        },
              children: c
          });
});
function p() {
    let e = (0, s.e7)([c.Z], () => c.Z.getGuildId()),
        t = (0, d.Eg)(e),
        [n, l] = (0, o.US)(
            Object.values(t)
                .filter((e) => {
                    let { disabled: t } = e;
                    return !t;
                })
                .map((e) => {
                    let { name: t } = e;
                    return t;
                }),
            u.R.SIDEBAR
        );
    if (null == n) return null;
    let r = t[n];
    return null == r
        ? null
        : (0, i.jsx)('div', {
              className: h.container,
              children: (0, i.jsx)(m, {
                  state: r,
                  markAsDismissed: l
              })
          });
}
