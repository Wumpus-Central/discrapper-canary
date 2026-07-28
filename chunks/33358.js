i.d(t, { P: () => c });
var s = i(582128),
    n = i(17928),
    l = i(617617),
    a = i(734057),
    r = i(994500),
    o = i(287809),
    d = i(811602),
    u = i(282108),
    m = i(975214);
function c(e) {
    let t,
        i,
        c,
        h,
        x,
        { channelId: g, authorId: p } = null == e ? {} : (0, u.nx)(e);
    return (
        (t = (0, u.ku)()),
        (i = (0, n.bG)([o.default], () => o.default.getCurrentUser())),
        (c = (0, n.bG)([a.A, r.A], () => (0, u.c2)(g, p, [a.A, r.A]))),
        (h = (0, n.bG)(
            [l.A],
            () => t.reduce((e, t) => ({ ...e, [t.harmType]: t.getProtoUserSettings(l.A.settings) }), {}),
            [t],
            m.M,
        )),
        0 ===
        (x = s.useMemo(
            () =>
                null == c || p === i?.id || null == i
                    ? []
                    : t
                          .map((e) => {
                              let t = h[e.harmType],
                                  i = null == c ? null : e.getUserSettingsWithDefaults(t)[c];
                              return (0, u.f)(i) ? e.harmType : null;
                          })
                          .filter((e) => null != e),
            [c, t, h, p, i],
        )).length
            ? d.LO.NONE
            : (0, u.LE)(x)
    );
}
