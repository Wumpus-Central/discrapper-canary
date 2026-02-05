n.d(t, { P: () => h });
var i = n(64700),
    s = n(311907),
    l = n(617617),
    a = n(734057),
    r = n(994500),
    o = n(287809),
    u = n(811602),
    d = n(282108),
    m = n(975214);
function h(e) {
    let t,
        n,
        h,
        c,
        x,
        { channelId: g, authorId: p } = null == e ? {} : (0, d.nx)(e);
    return (
        (t = (0, d.ku)()),
        (n = (0, s.bG)([o.default], () => o.default.getCurrentUser())),
        (h = (0, s.bG)([a.A, r.A], () => (0, d.c2)(g, p, [a.A, r.A]))),
        (c = (0, s.bG)(
            [l.A],
            () => t.reduce((e, t) => ({ ...e, [t.harmType]: t.getProtoUserSettings(l.A.settings) }), {}),
            [t],
            m.M,
        )),
        0 ===
        (x = i.useMemo(
            () =>
                null == h || p === n?.id || null == n
                    ? []
                    : t
                          .map((e) => {
                              let t = c[e.harmType],
                                  n = null == h ? null : e.getUserSettingsWithDefaults(t)[h];
                              return (0, d.f)(n) ? e.harmType : null;
                          })
                          .filter((e) => null != e),
            [h, t, c, p, n],
        )).length
            ? u.LO.NONE
            : (0, d.LE)(x)
    );
}
