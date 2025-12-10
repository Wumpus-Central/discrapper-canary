t.d(n, { Z: () => p });
var l = t(54381),
    i = t(473749),
    r = t(442837),
    a = t(481060),
    u = t(616780),
    o = t(438536),
    s = t(946273),
    d = t(346479),
    c = t(665906),
    g = t(592125),
    Z = t(430824),
    f = t(496675),
    b = t(594174),
    O = t(388032);
function m(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
function p(e, n, p) {
    let P = i.useMemo(() => ({ [n]: [e.id] }), [n, e.id]);
    (0, u.$)(P, "useThreadAdminActionItems"), (0, r.e7)([f.Z], () => f.Z.getGuildVersion(n), [n]);
    let j = (0, r.e7)([g.Z], () => g.Z.getChannel(p)),
        v = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
        N = (0, r.e7)([b.default], () => b.default.getCurrentUser()),
        y = (0, o.Z)(j, "Context Menu"),
        x = (0, c.yw)(null == j ? void 0 : j.id);
    return (null == N ? void 0 : N.id) === e.id
        ? [y]
        : null == v || null == j || null == N
          ? []
          : [
                x
                    ? (0, l.jsx)(a.sNh, {
                          id: "remove",
                          label: j.isForumPost()
                              ? O.intl.formatToPlainString(O.t.v2KNNx, { user: e.username })
                              : O.intl.formatToPlainString(O.t["27xWaT"], { user: e.username }),
                          color: "danger",
                          action: () => d.Z.removeMember(j.id, e.id, "Context Menu"),
                      })
                    : null,
                (0, s.BK)(e, v)
                    ? (0, l.jsx)(a.sNh, {
                          id: "kick",
                          label: x
                              ? O.intl.formatToPlainString(O.t["1Ie87p"], { user: e.username })
                              : O.intl.formatToPlainString(O.t["9l/iTS"], { user: e.username }),
                          color: "danger",
                          action: () =>
                              (0, a.ZDy)(async () => {
                                  let { default: n } = await t.e("79939").then(t.bind(t, 495494));
                                  return (t) =>
                                      (0, l.jsx)(
                                          n,
                                          h(m({}, t), {
                                              guildId: v.id,
                                              user: e,
                                          }),
                                      );
                              }),
                      })
                    : null,
                (0, s.mm)(e, v)
                    ? (0, l.jsx)(a.sNh, {
                          id: "ban",
                          label: x
                              ? O.intl.formatToPlainString(O.t.i62APf, { user: e.username })
                              : O.intl.formatToPlainString(O.t.WnpUBi, { user: e.username }),
                          color: "danger",
                          action: () =>
                              (0, a.ZDy)(async () => {
                                  let { default: n } = await t.e("18910").then(t.bind(t, 497880));
                                  return (t) =>
                                      (0, l.jsx)(
                                          n,
                                          h(m({}, t), {
                                              guildId: v.id,
                                              user: e,
                                          }),
                                      );
                              }),
                      })
                    : null,
            ];
}
