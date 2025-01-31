l.d(n, { Z: () => N });
var t = l(200651),
    i = l(192379),
    r = l(442837),
    a = l(481060),
    d = l(616780),
    s = l(438536),
    u = l(946273),
    o = l(346479),
    c = l(665906),
    Z = l(592125),
    g = l(430824),
    f = l(496675),
    h = l(594174),
    m = l(981631),
    P = l(388032);
function N(e, n, N) {
    let b = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
    (0, d.$)(b), (0, r.e7)([f.Z], () => f.Z.getGuildVersion(n), [n]);
    let x = (0, r.e7)([Z.Z], () => Z.Z.getChannel(N)),
        v = (0, r.e7)([g.Z], () => g.Z.getGuild(n), [n]),
        C = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        E = (0, s.Z)(x, 'Context Menu'),
        p = (0, c.Xb)(x);
    if ((null == C ? void 0 : C.id) === e.id) return [E];
    if (null == v || null == x || null == C) return [];
    let O = p || (x.ownerId === C.id && x.type === m.d4z.PRIVATE_THREAD);
    return [
        O
            ? (0, t.jsx)(a.sNh, {
                  id: 'remove',
                  label: x.isForumPost() ? P.intl.formatToPlainString(P.t.v2KNNz, { user: e.username }) : P.intl.formatToPlainString(P.t['27xWaW'], { user: e.username }),
                  color: 'danger',
                  action: () => o.Z.removeMember(x, e.id, 'Context Menu')
              })
            : null,
        (0, u.BK)(e, v)
            ? (0, t.jsx)(a.sNh, {
                  id: 'kick',
                  label: O ? P.intl.formatToPlainString(P.t['1Ie87u'], { user: e.username }) : P.intl.formatToPlainString(P.t['9l/iTU'], { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, a.ZDy)(async () => {
                          let { default: n } = await l.e('5454').then(l.bind(l, 854360));
                          return (l) =>
                              (0, t.jsx)(n, {
                                  ...l,
                                  guildId: v.id,
                                  user: e
                              });
                      })
              })
            : null,
        (0, u.mm)(e, v)
            ? (0, t.jsx)(a.sNh, {
                  id: 'ban',
                  label: O ? P.intl.formatToPlainString(P.t.i62APT, { user: e.username }) : P.intl.formatToPlainString(P.t.WnpUBg, { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, a.ZDy)(async () => {
                          let { default: n } = await l.e('43350').then(l.bind(l, 98746));
                          return (l) =>
                              (0, t.jsx)(n, {
                                  ...l,
                                  guildId: v.id,
                                  user: e
                              });
                      })
              })
            : null
    ];
}
