n.d(t, { Z: () => j });
var l = n(200651),
    r = n(192379),
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
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
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
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t, j) {
    let P = r.useMemo(() => ({ [t]: [e.id] }), [t, e.id]);
    (0, a.$)(P), (0, i.e7)([Z.Z], () => Z.Z.getGuildVersion(t), [t]);
    let y = (0, i.e7)([b.Z], () => b.Z.getChannel(j)),
        E = (0, i.e7)([g.Z], () => g.Z.getGuild(t), [t]),
        x = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        N = (0, u.Z)(y, 'Context Menu'),
        v = (0, d.Xb)(y);
    if ((null == x ? void 0 : x.id) === e.id) return [N];
    if (null == E || null == y || null == x) return [];
    let _ = v || (y.ownerId === x.id && y.type === p.d4z.PRIVATE_THREAD);
    return [
        _
            ? (0, l.jsx)(o.sNh, {
                  id: 'remove',
                  label: y.isForumPost() ? O.intl.formatToPlainString(O.t.v2KNNz, { user: e.username }) : O.intl.formatToPlainString(O.t['27xWaW'], { user: e.username }),
                  color: 'danger',
                  action: () => c.Z.removeMember(y, e.id, 'Context Menu')
              })
            : null,
        (0, s.BK)(e, E)
            ? (0, l.jsx)(o.sNh, {
                  id: 'kick',
                  label: _ ? O.intl.formatToPlainString(O.t['1Ie87u'], { user: e.username }) : O.intl.formatToPlainString(O.t['9l/iTU'], { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, o.ZDy)(async () => {
                          let { default: t } = await n.e('5454').then(n.bind(n, 854360));
                          return (n) =>
                              (0, l.jsx)(
                                  t,
                                  m(h({}, n), {
                                      guildId: E.id,
                                      user: e
                                  })
                              );
                      })
              })
            : null,
        (0, s.mm)(e, E)
            ? (0, l.jsx)(o.sNh, {
                  id: 'ban',
                  label: _ ? O.intl.formatToPlainString(O.t.i62APT, { user: e.username }) : O.intl.formatToPlainString(O.t.WnpUBg, { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, o.ZDy)(async () => {
                          let { default: t } = await n.e('4114').then(n.bind(n, 98746));
                          return (n) =>
                              (0, l.jsx)(
                                  t,
                                  m(h({}, n), {
                                      guildId: E.id,
                                      user: e
                                  })
                              );
                      })
              })
            : null
    ];
}
