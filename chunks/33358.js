i.d(t, { P: () => h });
var s = i(64700),
    n = i(17928),
    l = i(617617),
    a = i(734057),
    r = i(994500),
    o = i(287809),
    d = i(811602),
    u = i(282108),
    m = i(975214);
function h(e) {
    let t,
        i,
        h,
        c,
        x,
        { channelId: g, authorId: p } = null == e ? {} : (0, u.nx)(e);
    return (
        (t = (0, u.ku)()),
        (i = (0, n.bG)([o.default], () => o.default.getCurrentUser())),
        (h = (0, n.bG)([a.A, r.A], () => (0, u.c2)(g, p, [a.A, r.A]))),
        (c = (0, n.bG)(
            [l.A],
            () => t.reduce((e, t) => ({ ...e, [t.harmType]: t.getProtoUserSettings(l.A.settings) }), {}),
            [t],
            m.M,
        )),
        0 ===
        (x = s.useMemo(
            () =>
                null == h || p === i?.id || null == i
                    ? []
                    : t
                          .map((e) => {
                              let t = c[e.harmType],
                                  i = null == h ? null : e.getUserSettingsWithDefaults(t)[h];
                              return (0, u.f)(i) ? e.harmType : null;
                          })
                          .filter((e) => null != e),
            [h, t, c, p, i],
        )).length
            ? d.LO.NONE
            : (0, u.LE)(x)
    );
}
