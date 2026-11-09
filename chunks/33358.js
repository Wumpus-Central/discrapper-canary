var s = n(582128),
    l = n(855986),
    i = n(617617),
    a = n(734057),
    r = n(994500),
    o = n(287809),
    u = n(811602),
    d = n(282108),
    c = n(975214);
n.d(
    t,
    {},
    {
        P: function (e) {
            let t,
                n,
                m,
                h,
                x,
                { channelId: g, authorId: p } = null == e ? {} : (0, d.nx)(e);
            return (
                (t = (0, d.ku)()),
                (n = (0, l.bG)([o.default], () => o.default.getCurrentUser())),
                (m = (0, l.bG)([a.A, r.A], () => (0, d.c2)(g, p, [a.A, r.A]))),
                (h = (0, l.bG)(
                    [i.A],
                    () => t.reduce((e, t) => ({ ...e, [t.harmType]: t.getProtoUserSettings(i.A.settings) }), {}),
                    [t],
                    c.M,
                )),
                0 ===
                (x = s.useMemo(
                    () =>
                        null == m || p === n?.id || null == n
                            ? []
                            : t
                                  .map((e) => {
                                      let t = h[e.harmType],
                                          n = null == m ? null : e.getUserSettingsWithDefaults(t)[m];
                                      return (0, d.f)(n) ? e.harmType : null;
                                  })
                                  .filter((e) => null != e),
                    [m, t, h, p, n],
                )).length
                    ? u.LO.NONE
                    : (0, d.LE)(x)
            );
        },
    },
);
