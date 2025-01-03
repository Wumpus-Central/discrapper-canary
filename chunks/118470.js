n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(442837),
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
        f = r.useMemo(() => new Set(p.map((e) => e.applicationId)), [p]),
        _ = (0, l.Wu)(
            [a.Z],
            () => {
                let e = [];
                for (let t of f) {
                    let n = a.Z.getApplication(t);
                    null != n && e.push(n);
                }
                return e;
            },
            [f]
        );
    return 0 === _.length
        ? null
        : ((t =
              1 === _.length
                  ? h.intl.formatToPlainString(h.t['Egq+Gx'], { a: _[0].name })
                  : 2 === _.length
                    ? h.intl.formatToPlainString(h.t.LxU9R0, {
                          a: _[0].name,
                          b: _[1].name
                      })
                    : 3 === _.length
                      ? h.intl.formatToPlainString(h.t.crKXMD, {
                            a: _[0].name,
                            b: _[1].name,
                            c: _[2].name
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
