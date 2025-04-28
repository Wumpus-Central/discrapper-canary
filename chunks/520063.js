t.d(n, { Z: () => j });
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    o = t(616780),
    u = t(438536),
    s = t(946273),
    c = t(346479),
    d = t(665906),
    g = t(592125),
    b = t(430824),
    Z = t(496675),
    f = t(594174),
    p = t(981631),
    O = t(388032);
function m(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function h(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function j(e, n, j) {
    let P = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
    (0, o.$)(P), (0, r.e7)([Z.Z], () => Z.Z.getGuildVersion(n), [n]);
    let v = (0, r.e7)([g.Z], () => g.Z.getChannel(j)),
        x = (0, r.e7)([b.Z], () => b.Z.getGuild(n), [n]),
        y = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
        N = (0, u.Z)(v, 'Context Menu'),
        _ = (0, d.Xb)(v);
    if ((null == y ? void 0 : y.id) === e.id) return [N];
    if (null == x || null == v || null == y) return [];
    let E = _ || (v.ownerId === y.id && v.type === p.d4z.PRIVATE_THREAD);
    return [
        E
            ? (0, l.jsx)(a.sNh, {
                  id: 'remove',
                  label: v.isForumPost() ? O.intl.formatToPlainString(O.t.v2KNNz, { user: e.username }) : O.intl.formatToPlainString(O.t['27xWaW'], { user: e.username }),
                  color: 'danger',
                  action: () => c.Z.removeMember(v, e.id, 'Context Menu')
              })
            : null,
        (0, s.BK)(e, x)
            ? (0, l.jsx)(a.sNh, {
                  id: 'kick',
                  label: E ? O.intl.formatToPlainString(O.t['1Ie87u'], { user: e.username }) : O.intl.formatToPlainString(O.t['9l/iTU'], { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, a.ZDy)(async () => {
                          let { default: n } = await t.e('5454').then(t.bind(t, 854360));
                          return (t) =>
                              (0, l.jsx)(
                                  n,
                                  h(m({}, t), {
                                      guildId: x.id,
                                      user: e
                                  })
                              );
                      })
              })
            : null,
        (0, s.mm)(e, x)
            ? (0, l.jsx)(a.sNh, {
                  id: 'ban',
                  label: E ? O.intl.formatToPlainString(O.t.i62APT, { user: e.username }) : O.intl.formatToPlainString(O.t.WnpUBg, { user: e.username }),
                  color: 'danger',
                  action: () =>
                      (0, a.ZDy)(async () => {
                          let { default: n } = await t.e('4114').then(t.bind(t, 98746));
                          return (t) =>
                              (0, l.jsx)(
                                  n,
                                  h(m({}, t), {
                                      guildId: x.id,
                                      user: e
                                  })
                              );
                      })
              })
            : null
    ];
}
