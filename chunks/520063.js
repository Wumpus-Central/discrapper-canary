t.d(n, { Z: () => h });
var l = t(255367),
    i = t(73800),
    r = t(442837),
    a = t(481060),
    o = t(616780),
    u = t(438536),
    s = t(946273),
    c = t(346479),
    d = t(665906),
    g = t(592125),
    Z = t(430824),
    b = t(496675),
    f = t(594174),
    p = t(388032);
function O(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                ((l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l));
            }));
    }
    return e;
}
function m(e, n) {
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
function h(e, n, h) {
    let j = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
    ((0, o.$)(j), (0, r.e7)([b.Z], () => b.Z.getGuildVersion(n), [n]));
    let P = (0, r.e7)([g.Z], () => g.Z.getChannel(h)),
        v = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
        x = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
        _ = (0, u.Z)(P, 'Context Menu'),
        y = (0, d.yw)(null == P ? void 0 : P.id);
    return (null == x ? void 0 : x.id) === e.id
        ? [_]
        : null == v || null == P || null == x
          ? []
          : [
                y
                    ? (0, l.jsx)(a.sNh, {
                          id: 'remove',
                          label: P.isForumPost() ? p.intl.formatToPlainString(p.t.v2KNNz, { user: e.username }) : p.intl.formatToPlainString(p.t['27xWaW'], { user: e.username }),
                          color: 'danger',
                          action: () => c.Z.removeMember(P.id, e.id, 'Context Menu')
                      })
                    : null,
                (0, s.BK)(e, v)
                    ? (0, l.jsx)(a.sNh, {
                          id: 'kick',
                          label: y ? p.intl.formatToPlainString(p.t['1Ie87u'], { user: e.username }) : p.intl.formatToPlainString(p.t['9l/iTU'], { user: e.username }),
                          color: 'danger',
                          action: () =>
                              (0, a.ZDy)(async () => {
                                  let { default: n } = await t.e('5454').then(t.bind(t, 854360));
                                  return (t) =>
                                      (0, l.jsx)(
                                          n,
                                          m(O({}, t), {
                                              guildId: v.id,
                                              user: e
                                          })
                                      );
                              })
                      })
                    : null,
                (0, s.mm)(e, v)
                    ? (0, l.jsx)(a.sNh, {
                          id: 'ban',
                          label: y ? p.intl.formatToPlainString(p.t.i62APT, { user: e.username }) : p.intl.formatToPlainString(p.t.WnpUBg, { user: e.username }),
                          color: 'danger',
                          action: () =>
                              (0, a.ZDy)(async () => {
                                  let { default: n } = await t.e('43350').then(t.bind(t, 98746));
                                  return (t) =>
                                      (0, l.jsx)(
                                          n,
                                          m(O({}, t), {
                                              guildId: v.id,
                                              user: e
                                          })
                                      );
                              })
                      })
                    : null
            ];
}
