t.d(n, {
    Z: function () {
        return h;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    u = t(616780),
    o = t(438536),
    d = t(946273),
    s = t(346479),
    c = t(665906),
    Z = t(592125),
    f = t(430824),
    m = t(496675),
    g = t(594174),
    M = t(981631),
    x = t(388032);
function h(e, n, h) {
    let v = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
    (0, u.$)(v), (0, r.e7)([m.Z], () => m.Z.getGuildVersion(n), [n]);
    let p = (0, r.e7)([Z.Z], () => Z.Z.getChannel(h)),
        b = (0, r.e7)([f.Z], () => f.Z.getGuild(n), [n]),
        I = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
        C = (0, o.Z)(p, 'Context Menu'),
        P = (0, c.Xb)(p);
    if ((null == I ? void 0 : I.id) === e.id) return [C];
    if (null == b || null == p || null == I) return [];
    let E = P || (p.ownerId === I.id && p.type === M.d4z.PRIVATE_THREAD);
    return [
        E
            ? (0, l.jsx)(a.MenuItem, {
                  id: 'remove',
                  label: p.isForumPost() ? x.intl.formatToPlainString(x.t.v2KNNz, { user: e.username }) : x.intl.formatToPlainString(x.t['27xWaW'], { user: e.username }),
                  color: 'danger',
                  action: () => s.Z.removeMember(p, e.id, 'Context Menu')
              })
            : null,
        (0, d.BK)(e, b)
            ? (0, l.jsx)(a.MenuItem, {
                  id: 'kick',
                  label: E ? x.intl.formatToPlainString(x.t['1Ie87u'], { user: e.username }) : x.intl.formatToPlainString(x.t['9l/iTU'], { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, a.openModalLazy)(async () => {
                          let { default: n } = await t.e('5454').then(t.bind(t, 854360));
                          return (t) =>
                              (0, l.jsx)(n, {
                                  ...t,
                                  guildId: b.id,
                                  user: e
                              });
                      })
              })
            : null,
        (0, d.mm)(e, b)
            ? (0, l.jsx)(a.MenuItem, {
                  id: 'ban',
                  label: E ? x.intl.formatToPlainString(x.t.i62APT, { user: e.username }) : x.intl.formatToPlainString(x.t.WnpUBg, { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, a.openModalLazy)(async () => {
                          let { default: n } = await t.e('43350').then(t.bind(t, 98746));
                          return (t) =>
                              (0, l.jsx)(n, {
                                  ...t,
                                  guildId: b.id,
                                  user: e
                              });
                      })
              })
            : null
    ];
}
