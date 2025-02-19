n.d(t, { Z: () => j });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    o = n(481060),
    a = n(616780),
    u = n(438536),
    s = n(946273),
    c = n(346479),
    d = n(665906),
    f = n(592125),
    Z = n(430824),
    b = n(496675),
    g = n(594174),
    O = n(981631),
    p = n(388032);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t, j) {
    let N = l.useMemo(() => ({ [t]: [e.id] }), [t, e.id]);
    (0, a.$)(N), (0, i.e7)([b.Z], () => b.Z.getGuildVersion(t), [t]);
    let m = (0, i.e7)([f.Z], () => f.Z.getChannel(j)),
        y = (0, i.e7)([Z.Z], () => Z.Z.getGuild(t), [t]),
        v = (0, i.e7)([g.default], () => g.default.getCurrentUser()),
        E = (0, u.Z)(m, 'Context Menu'),
        x = (0, d.Xb)(m);
    if ((null == v ? void 0 : v.id) === e.id) return [E];
    if (null == y || null == m || null == v) return [];
    let C = x || (m.ownerId === v.id && m.type === O.d4z.PRIVATE_THREAD);
    return [
        C
            ? (0, r.jsx)(o.sNh, {
                  id: 'remove',
                  label: m.isForumPost() ? p.NW.formatToPlainString(p.t.v2KNNz, { user: e.username }) : p.NW.formatToPlainString(p.t['27xWaW'], { user: e.username }),
                  color: 'danger',
                  action: () => c.Z.removeMember(m, e.id, 'Context Menu')
              })
            : null,
        (0, s.BK)(e, y)
            ? (0, r.jsx)(o.sNh, {
                  id: 'kick',
                  label: C ? p.NW.formatToPlainString(p.t['1Ie87u'], { user: e.username }) : p.NW.formatToPlainString(p.t['9l/iTU'], { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, o.ZDy)(async () => {
                          let { default: t } = await n.e('5454').then(n.bind(n, 854360));
                          return (n) =>
                              (0, r.jsx)(
                                  t,
                                  h(P({}, n), {
                                      guildId: y.id,
                                      user: e
                                  })
                              );
                      })
              })
            : null,
        (0, s.mm)(e, y)
            ? (0, r.jsx)(o.sNh, {
                  id: 'ban',
                  label: C ? p.NW.formatToPlainString(p.t.i62APT, { user: e.username }) : p.NW.formatToPlainString(p.t.WnpUBg, { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, o.ZDy)(async () => {
                          let { default: t } = await n.e('43350').then(n.bind(n, 98746));
                          return (n) =>
                              (0, r.jsx)(
                                  t,
                                  h(P({}, n), {
                                      guildId: y.id,
                                      user: e
                                  })
                              );
                      })
              })
            : null
    ];
}
