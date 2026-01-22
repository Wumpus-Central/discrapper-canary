n.d(t, {
    A: () => j,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    o = n(80682),
    s = n(660273),
    u = n(351001),
    c = n(867455),
    d = n(406704),
    A = n(734057),
    b = n(71393),
    g = n(576705),
    O = n(287809),
    f = n(985018);

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
    let h = l.useMemo(
        () => ({
            [t]: [e.id],
        }),
        [t, e.id],
    );
    (0, o.E)(h, "useThreadAdminActionItems"), (0, i.bG)([g.A], () => g.A.getGuildVersion(t), [t]);
    let y = (0, i.bG)([A.A], () => A.A.getChannel(j)),
        E = (0, i.bG)([b.A], () => b.A.getGuild(t), [t]),
        x = (0, i.bG)([O.default], () => O.default.getCurrentUser()),
        P = (0, s.A)(y, "Context Menu"),
        v = (0, d.qi)(null == y ? void 0 : y.id);
    return (null == x ? void 0 : x.id) === e.id
        ? [P]
        : null == E || null == y || null == x
          ? []
          : [
                v
                    ? (0, r.jsx)(a.Drp, {
                          id: "remove",
                          label: y.isForumPost()
                              ? f.intl.formatToPlainString(f.t.v2KNNx, {
                                    user: e.username,
                                })
                              : f.intl.formatToPlainString(f.t["27xWaT"], {
                                    user: e.username,
                                }),
                          color: "danger",
                          action: () => c.A.removeMember(y.id, e.id, "Context Menu"),
                      })
                    : null,
                (0, u.L7)(e, E)
                    ? (0, r.jsx)(a.Drp, {
                          id: "kick",
                          label: v
                              ? f.intl.formatToPlainString(f.t["1Ie87p"], {
                                    user: e.username,
                                })
                              : f.intl.formatToPlainString(f.t["9l/iTS"], {
                                    user: e.username,
                                }),
                          color: "danger",
                          action: () =>
                              (0, a.mMO)(async () => {
                                  let { default: t } = await n.e("62624").then(n.bind(n, 324785));
                                  return (n) =>
                                      (0, r.jsx)(
                                          t,
                                          m(p({}, n), {
                                              guildId: E.id,
                                              user: e,
                                          }),
                                      );
                              }),
                      })
                    : null,
                (0, u.EZ)(e, E)
                    ? (0, r.jsx)(a.Drp, {
                          id: "ban",
                          label: v
                              ? f.intl.formatToPlainString(f.t.i62APf, {
                                    user: e.username,
                                })
                              : f.intl.formatToPlainString(f.t.WnpUBi, {
                                    user: e.username,
                                }),
                          color: "danger",
                          action: () =>
                              (0, a.mMO)(async () => {
                                  let { default: t } = await n.e("80123").then(n.bind(n, 333179));
                                  return (n) =>
                                      (0, r.jsx)(
                                          t,
                                          m(p({}, n), {
                                              guildId: E.id,
                                              user: e,
                                          }),
                                      );
                              }),
                      })
                    : null,
            ];
}
