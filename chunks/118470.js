n.d(t, { Z: () => m }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(812206),
    s = n(82950),
    o = n(434404),
    c = n(106976),
    u = n(270144),
    d = n(981631),
    p = n(388032),
    f = n(466389);
function m(e) {
    let t,
        { guild: n } = e,
        m = (0, u.h6)(n),
        h = () => (0, c.sB)(n.id),
        g = i.useMemo(() => new Set(m.map((e) => e.applicationId)), [m]),
        _ = (0, l.Wu)([a.Z], () => {
            let e = [];
            for (let t of g) {
                let n = a.Z.getApplication(t);
                null != n && e.push(n);
            }
            return e;
        }, [g]);
    return 0 === _.length
        ? null
        : ((t =
              1 === _.length
                  ? p.intl.formatToPlainString(p.t["Egq+G/"], { a: _[0].name })
                  : 2 === _.length
                    ? p.intl.formatToPlainString(p.t.LxU9R3, {
                          a: _[0].name,
                          b: _[1].name,
                      })
                    : 3 === _.length
                      ? p.intl.formatToPlainString(p.t.crKXMC, {
                            a: _[0].name,
                            b: _[1].name,
                            c: _[2].name,
                        })
                      : p.intl.string(p.t.MvfowF)),
          (0, r.jsx)(s.Z, {
              guild: n,
              onDismissed: h,
              message: t,
              type: d.vID.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: f,
              onClick: () => {
                  h(), o.Z.open(n.id, d.pNK.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: p.intl.string(p.t.Rr3MAe),
          }));
}
