var l = n(582128),
    s = n(855986),
    i = n(617617),
    r = n(734057),
    a = n(994500),
    o = n(287809),
    u = n(811602),
    c = n(282108),
    d = n(975214);
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
                { channelId: C, authorId: p } = null == e ? {} : (0, c.nx)(e);
            return (
                (t = (0, c.ku)()),
                (n = (0, s.bG)([o.default], () => o.default.getCurrentUser())),
                (m = (0, s.bG)([r.A, a.A], () => (0, c.c2)(C, p, [r.A, a.A]))),
                (h = (0, s.bG)(
                    [i.A],
                    () => t.reduce((e, t) => ({ ...e, [t.harmType]: t.getProtoUserSettings(i.A.settings) }), {}),
                    [t],
                    d.M,
                )),
                0 ===
                (x = l.useMemo(
                    () =>
                        null == m || p === n?.id || null == n
                            ? []
                            : t
                                  .map((e) => {
                                      let t = h[e.harmType],
                                          n = null == m ? null : e.getUserSettingsWithDefaults(t)[m];
                                      return (0, c.f)(n) ? e.harmType : null;
                                  })
                                  .filter((e) => null != e),
                    [m, t, h, p, n],
                )).length
                    ? u.LO.NONE
                    : (0, c.LE)(x)
            );
        },
    },
);
