n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(417597),
    o = n(379848),
    c = n(967198),
    u = n(533550),
    d = n(49999),
    p = n(826898);
let f = i.memo(function (e) {
    let { state: t, markAsDismissed: n } = e,
        { name: l, guildId: s, boundingRect: o } = t,
        c = i.useMemo(() => null, [l, s, n]);
    return null == c
        ? null
        : (0, r.jsx)("div", {
              className: a()(p.UX, (null == o || o.y < 0) && p.R),
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

function h() {
    let e = (0, s.bG)([c.A], () => c.A.getGuildId()),
        t = (0, u.RX)(e),
        [n, i] = (0, o.kn)(
            Object.values(t)
                .filter((e) => {
                    let { disabled: t } = e;
                    return !t;
                })
                .map((e) => {
                    let { name: t } = e;
                    return t;
                }),
            d.m.SIDEBAR,
        );
    if (null == n) return null;
    let l = t[n];
    return null == l
        ? null
        : (0, r.jsx)("div", {
              className: p.kL,
              children: (0, r.jsx)(f, {
                  state: l,
                  markAsDismissed: i,
              }),
          });
}
