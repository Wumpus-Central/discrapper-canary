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
    b = n(592125),
    g = n(430824),
    Z = n(496675),
    f = n(594174),
    p = n(981631),
    O = n(388032);
function h(e) {
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
function m(e, t) {
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
    let P = l.useMemo(() => ({ [t]: [e.id] }), [t, e.id]);
    (0, a.$)(P), (0, i.e7)([Z.Z], () => Z.Z.getGuildVersion(t), [t]);
    let N = (0, i.e7)([b.Z], () => b.Z.getChannel(j)),
        y = (0, i.e7)([g.Z], () => g.Z.getGuild(t), [t]),
        E = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        x = (0, u.Z)(N, 'Context Menu'),
        v = (0, d.Xb)(N);
    if ((null == E ? void 0 : E.id) === e.id) return [x];
    if (null == y || null == N || null == E) return [];
    let _ = v || (N.ownerId === E.id && N.type === p.d4z.PRIVATE_THREAD);
    return [
        _
            ? (0, r.jsx)(o.sNh, {
                  id: 'remove',
                  label: N.isForumPost() ? O.NW.formatToPlainString(O.t.v2KNNz, { user: e.username }) : O.NW.formatToPlainString(O.t['27xWaW'], { user: e.username }),
                  color: 'danger',
                  action: () => c.Z.removeMember(N, e.id, 'Context Menu')
              })
            : null,
        (0, s.BK)(e, y)
            ? (0, r.jsx)(o.sNh, {
                  id: 'kick',
                  label: _ ? O.NW.formatToPlainString(O.t['1Ie87u'], { user: e.username }) : O.NW.formatToPlainString(O.t['9l/iTU'], { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, o.ZDy)(async () => {
                          let { default: t } = await n.e('5454').then(n.bind(n, 854360));
                          return (n) =>
                              (0, r.jsx)(
                                  t,
                                  m(h({}, n), {
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
                  label: _ ? O.NW.formatToPlainString(O.t.i62APT, { user: e.username }) : O.NW.formatToPlainString(O.t.WnpUBg, { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, o.ZDy)(async () => {
                          let { default: t } = await n.e('43350').then(n.bind(n, 98746));
                          return (n) =>
                              (0, r.jsx)(
                                  t,
                                  m(h({}, n), {
                                      guildId: y.id,
                                      user: e
                                  })
                              );
                      })
              })
            : null
    ];
}
