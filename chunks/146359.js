t.d(n, { A: () => x });
var l = t(627968),
    i = t(64700),
    r = t(311907),
    a = t(397927),
    d = t(80682),
    s = t(660273),
    o = t(351001),
    u = t(867455),
    c = t(406704),
    A = t(734057),
    g = t(71393),
    m = t(576705),
    f = t(287809),
    p = t(985018);
function x(e, n, x) {
    let b = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
    (0, d.Eq)(b, "useThreadAdminActionItems"), (0, r.bG)([m.A], () => m.A.getGuildVersion(n), [n]);
    let E = (0, r.bG)([A.A], () => A.A.getChannel(x)),
        h = (0, r.bG)([g.A], () => g.A.getGuild(n), [n]),
        _ = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        C = (0, s.A)(E, "Context Menu"),
        T = (0, c.qi)(E?.id);
    return _?.id === e.id
        ? [C]
        : null == h || null == E || null == _
          ? []
          : [
                T
                    ? (0, l.jsx)(a.Drp, {
                          id: "remove",
                          label: E.isForumPost()
                              ? p.intl.formatToPlainString(p.t.v2KNNx, { user: e.username })
                              : p.intl.formatToPlainString(p.t["27xWaT"], { user: e.username }),
                          color: "danger",
                          action: () => u.A.removeMember(E.id, e.id, "Context Menu"),
                      })
                    : null,
                (0, o.L7)(e, h)
                    ? (0, l.jsx)(a.Drp, {
                          id: "kick",
                          label: T
                              ? p.intl.formatToPlainString(p.t["1Ie87p"], { user: e.username })
                              : p.intl.formatToPlainString(p.t["9l/iTS"], { user: e.username }),
                          color: "danger",
                          action: () =>
                              (0, a.mMO)(async () => {
                                  let { default: n } = await t.e("62624").then(t.bind(t, 324785));
                                  return (t) => (0, l.jsx)(n, { ...t, guildId: h.id, user: e });
                              }),
                      })
                    : null,
                (0, o.EZ)(e, h)
                    ? (0, l.jsx)(a.Drp, {
                          id: "ban",
                          label: T
                              ? p.intl.formatToPlainString(p.t.i62APf, { user: e.username })
                              : p.intl.formatToPlainString(p.t.WnpUBi, { user: e.username }),
                          color: "danger",
                          action: () =>
                              (0, a.mMO)(async () => {
                                  let { default: n } = await t.e("80123").then(t.bind(t, 333179));
                                  return (t) => (0, l.jsx)(n, { ...t, guildId: h.id, user: e });
                              }),
                      })
                    : null,
            ];
}
