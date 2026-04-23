l.d(n, { A: () => h });
var t = l(627968),
    i = l(64700),
    r = l(311907),
    a = l(477782),
    d = l(192308),
    s = l(80682),
    o = l(660273),
    u = l(351001),
    c = l(867455),
    A = l(406704),
    g = l(734057),
    b = l(71393),
    m = l(576705),
    x = l(287809),
    f = l(985018);
function h(e, n, h) {
    let E = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
    (0, s.Eq)(E, "useThreadAdminActionItems"), (0, r.bG)([m.A], () => m.A.getGuildVersion(n), [n]);
    let C = (0, r.bG)([g.A], () => g.A.getChannel(h)),
        p = (0, r.bG)([b.A], () => b.A.getGuild(n), [n]),
        _ = (0, r.bG)([x.default], () => x.default.getCurrentUser()),
        v = (0, o.A)(C, "Context Menu"),
        N = (0, A.qi)(C?.id);
    return _?.id === e.id
        ? [v]
        : null == p || null == C || null == _
          ? []
          : [
                N
                    ? (0, t.jsx)(a.Dr, {
                          id: "remove",
                          label: C.isForumPost()
                              ? f.intl.formatToPlainString(f.t.v2KNNx, { user: e.username })
                              : f.intl.formatToPlainString(f.t["27xWaT"], { user: e.username }),
                          color: "danger",
                          action: () => c.A.removeMember(C.id, e.id, "Context Menu"),
                      })
                    : null,
                (0, u.L7)(e, p)
                    ? (0, t.jsx)(a.Dr, {
                          id: "kick",
                          label: N
                              ? f.intl.formatToPlainString(f.t["1Ie87p"], { user: e.username })
                              : f.intl.formatToPlainString(f.t["9l/iTS"], { user: e.username }),
                          color: "danger",
                          action: () =>
                              (0, d.openModalLazy)(async () => {
                                  let { default: n } = await l.e("95481").then(l.bind(l, 324785));
                                  return (l) => (0, t.jsx)(n, { ...l, guildId: p.id, user: e });
                              }),
                      })
                    : null,
                (0, u.EZ)(e, p)
                    ? (0, t.jsx)(a.Dr, {
                          id: "ban",
                          label: N
                              ? f.intl.formatToPlainString(f.t.i62APf, { user: e.username })
                              : f.intl.formatToPlainString(f.t.WnpUBi, { user: e.username }),
                          color: "danger",
                          action: () =>
                              (0, d.openModalLazy)(async () => {
                                  let { default: n } = await l.e("57742").then(l.bind(l, 333179));
                                  return (l) => (0, t.jsx)(n, { ...l, guildId: p.id, user: e });
                              }),
                      })
                    : null,
            ];
}
