n.d(t, { P: () => c });
var i = n(64700),
    s = n(17928),
    l = n(617617),
    a = n(734057),
    r = n(994500),
    o = n(287809),
    u = n(811602),
    d = n(282108),
    m = n(975214);
function c(e) {
    let t,
        n,
        c,
        h,
        x,
        { channelId: g, authorId: p } = null == e ? {} : (0, d.nx)(e);
    return (
        (t = (0, d.ku)()),
        (n = (0, s.bG)([o.default], () => o.default.getCurrentUser())),
        (c = (0, s.bG)([a.A, r.A], () => (0, d.c2)(g, p, [a.A, r.A]))),
        (h = (0, s.bG)(
            [l.A],
            () => t.reduce((e, t) => ({ ...e, [t.harmType]: t.getProtoUserSettings(l.A.settings) }), {}),
            [t],
            m.M,
        )),
        0 ===
        (x = i.useMemo(
            () =>
                null == c || p === n?.id || null == n
                    ? []
                    : t
                          .map((e) => {
                              let t = h[e.harmType],
                                  n = null == c ? null : e.getUserSettingsWithDefaults(t)[c];
                              return (0, d.f)(n) ? e.harmType : null;
                          })
                          .filter((e) => null != e),
            [c, t, h, p, n],
        )).length
            ? u.LO.NONE
            : (0, d.LE)(x)
    );
}
