n.d(t, {
    m: () => p,
    y: () => h,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(735438),
    l = n.n(i),
    a = n(311907),
    o = n(397927),
    s = n(808728),
    d = n(181079),
    c = n(422258),
    u = n(93055),
    A = n(616075),
    f = n(652215),
    b = n(985018);
function g(e, t) {
    return e.type === f.rbe.GROUP_DM
        ? t
            ? b.intl.string(b.t["0BWmSM"])
            : b.intl.string(b.t.uuVTOK)
        : e.type === f.rbe.DM
          ? t
              ? b.intl.string(b.t["2wfKGo"])
              : b.intl.string(b.t.wPbAse)
          : t
            ? b.intl.string(b.t.Bou7lT)
            : b.intl.string(b.t["4wcdE/"]);
}
function p(e) {
    let t = (0, a.bG)([s.Ay], () => s.Ay.getChannels(f.YYv))[f.rbe.GUILD_CATEGORY],
        { isFavoritesPerk: n } = (0, A.l)("58e21a_1"),
        { notifyFavoriteAdded: i } = (0, u.CJ)();
    if (!(0, u.pe)(e)) return null;
    let [[d], b] = l().partition(t, (e) => "null" === e.channel.id);
    function p(t) {
        i(), (0, c.Jz)(e.id, t);
    }
    return 0 === b.length
        ? (0, r.jsx)(o.Drp, {
              id: "favorite-channel",
              label: g(e, !1),
              action: () => p(null),
          })
        : (0, r.jsxs)(o.Drp, {
              id: "favorite-channel",
              label: g(e, !1),
              action: () => p(null),
              children: [
                  n &&
                      (0, r.jsx)(o.rXV, {
                          children: (0, r.jsx)(
                              o.Drp,
                              {
                                  id: "favorite-".concat(d.channel.id),
                                  label: d.channel.name,
                                  action: () => p("null" === d.channel.id ? null : d.channel.id),
                              },
                              d.channel.id,
                          ),
                      }),
                  (0, r.jsx)(o.rXV, {
                      children: b.map((e) =>
                          (0, r.jsx)(
                              o.Drp,
                              {
                                  id: "favorite-".concat(e.channel.id),
                                  label: e.channel.name,
                                  action: () => p(e.channel.id),
                              },
                              e.channel.id,
                          ),
                      ),
                  }),
              ],
          });
}
function h(e) {
    let t = (0, a.bG)([d.A], () => d.A.isFavorite(e.id));
    return __OVERLAY__ || !t
        ? null
        : (0, r.jsx)(o.Drp, {
              id: "favorite-channel",
              label: g(e, !0),
              color: "danger",
              action: () =>
                  e.type === f.rbe.GUILD_CATEGORY
                      ? (0, o.mMO)(async () => {
                            let { default: t } = await n.e("52210").then(n.bind(n, 862377));
                            return (n) => {
                                var i, l;
                                return (0, r.jsx)(
                                    t,
                                    ((i = (function (e) {
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
                                    })({}, n)),
                                    (l = l =
                                        {
                                            onConfirm: () => {
                                                n.onClose(), (0, c.i_)(e.id);
                                            },
                                            channel: e,
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                          }),
                                    i),
                                );
                            };
                        })
                      : (0, c.i_)(e.id),
          });
}
