n.d(t, { A: () => f });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(366811),
    s = n(71393),
    o = n(531685),
    c = n(263715),
    u = n(131494),
    d = n(330465);
function f(e) {
    let { guildId: t } = e,
        n = l.useMemo(() => (0, c.EL)(t), [t]),
        f = (0, i.bG)([s.A], () => s.A.getGuild(t)),
        p = (0, i.bG)([o.A], () => o.A.isFocused()),
        h =
            t ===
            (0, a.A)((e) => {
                let { guildId: t } = e;
                return t;
            }),
        b = (0, u.A)(t);
    return null == f
        ? null
        : (0, r.jsx)(d.A, {
              guildNode: n,
              guild: f,
              animatable: p,
              selected: h,
              draggable: !1,
              mediaState: b,
          });
}
