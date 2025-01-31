n.d(t, { Z: () => p }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(812206),
    s = n(324262),
    o = n(434404),
    c = n(106976),
    d = n(270144),
    u = n(981631),
    h = n(388032),
    m = n(466389);
function p(e) {
    let t,
        { guild: n } = e,
        p = (0, d.h6)(n),
        g = () => (0, c.sB)(n.id),
        _ = l.useMemo(() => new Set(p.map((e) => e.applicationId)), [p]),
        f = (0, r.Wu)(
            [a.Z],
            () => {
                let e = [];
                for (let t of _) {
                    let n = a.Z.getApplication(t);
                    null != n && e.push(n);
                }
                return e;
            },
            [_]
        );
    return 0 === f.length
        ? null
        : ((t =
              1 === f.length
                  ? h.intl.formatToPlainString(h.t['Egq+Gx'], { a: f[0].name })
                  : 2 === f.length
                    ? h.intl.formatToPlainString(h.t.LxU9R0, {
                          a: f[0].name,
                          b: f[1].name
                      })
                    : 3 === f.length
                      ? h.intl.formatToPlainString(h.t.crKXMD, {
                            a: f[0].name,
                            b: f[1].name,
                            c: f[2].name
                        })
                      : h.intl.string(h.t.MvfowM)),
          (0, i.jsx)(s.Z, {
              guild: n,
              onDismissed: g,
              message: t,
              type: u.vID.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: m,
              onClick: () => {
                  g(), o.Z.open(n.id, u.pNK.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: h.intl.string(h.t.Rr3MAQ)
          }));
}
