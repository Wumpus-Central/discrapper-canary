n.d(t, { Z: () => f }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(812206),
    o = n(324262),
    s = n(434404),
    c = n(106976),
    u = n(270144),
    d = n(981631),
    p = n(388032),
    h = n(466389);
function f(e) {
    let t,
        { guild: n } = e,
        f = (0, u.h6)(n),
        g = () => (0, c.sB)(n.id),
        m = i.useMemo(() => new Set(f.map((e) => e.applicationId)), [f]),
        b = (0, l.Wu)(
            [a.Z],
            () => {
                let e = [];
                for (let t of m) {
                    let n = a.Z.getApplication(t);
                    null != n && e.push(n);
                }
                return e;
            },
            [m]
        );
    return 0 === b.length
        ? null
        : ((t =
              1 === b.length
                  ? p.NW.formatToPlainString(p.t['Egq+Gx'], { a: b[0].name })
                  : 2 === b.length
                    ? p.NW.formatToPlainString(p.t.LxU9R0, {
                          a: b[0].name,
                          b: b[1].name
                      })
                    : 3 === b.length
                      ? p.NW.formatToPlainString(p.t.crKXMD, {
                            a: b[0].name,
                            b: b[1].name,
                            c: b[2].name
                        })
                      : p.NW.string(p.t.MvfowM)),
          (0, r.jsx)(o.Z, {
              guild: n,
              onDismissed: g,
              message: t,
              type: d.vID.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: h,
              onClick: () => {
                  g(), s.Z.open(n.id, d.pNK.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: p.NW.string(p.t.Rr3MAQ)
          }));
}
