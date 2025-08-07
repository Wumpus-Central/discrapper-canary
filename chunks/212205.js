e.d(n, { Z: () => o });
var i = e(255367);
e(73800);
var r = e(442837),
    l = e(481060),
    s = e(914010),
    a = e(362658),
    d = e(981631),
    u = e(388032);
function o(t) {
    let n = (0, r.e7)([s.Z], () => s.Z.getGuildId()),
        o = t.type === d.d4z.GUILD_CATEGORY,
        { isFavoritesPerk: c } = (0, a.z)("useChannelFavoriteSetNickname");
    return __OVERLAY__ || n !== d.I_8
        ? null
        : (0, i.jsx)(l.sNh, {
              id: "set-channel-nickname",
              label: c && o ? u.intl.string(u.t.xXYKiI) : u.intl.string(u.t.dilOFx),
              action: function () {
                  (0, l.ZDy)(async () => {
                      let { default: n } = await e.e("46161").then(e.bind(e, 238716));
                      return (e) => {
                          var r, l;
                          return (0, i.jsx)(
                              n,
                              ((r = (function (t) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var e = null != arguments[n] ? arguments[n] : {},
                                          i = Object.keys(e);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(e).filter(function (t) {
                                                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                              }),
                                          )),
                                          i.forEach(function (n) {
                                              var i;
                                              (i = e[n]),
                                                  n in t
                                                      ? Object.defineProperty(t, n, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (t[n] = i);
                                          });
                                  }
                                  return t;
                              })({}, e)),
                              (l = l =
                                  {
                                      channelId: t.id,
                                      heading: c && o ? u.intl.string(u.t.xXYKiI) : u.intl.string(u.t.dilOFx),
                                      formTitle: c && o ? u.intl.string(u.t.OCAkGB) : u.intl.string(u.t["621LJC"]),
                                      allowReset: !(c && o),
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                  : (function (t, n) {
                                        var e = Object.keys(t);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(t);
                                            e.push.apply(e, i);
                                        }
                                        return e;
                                    })(Object(l)).forEach(function (t) {
                                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(l, t));
                                    }),
                              r),
                          );
                      };
                  });
              },
          });
}
