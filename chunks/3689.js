t.d(n, { Z: () => u });
var r = t(54381);
t(473749);
var i = t(442837),
    l = t(481060),
    o = t(496675),
    c = t(981631),
    a = t(388032);
function u(e, n) {
    let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
        s = (0, i.e7)([o.Z], () => o.Z.can(c.Plq.MANAGE_CHANNELS, e), [e]);
    if (__OVERLAY__ || !s) return null;
    let d = () => {
        (0, l.ZDy)(async () => {
            let { default: n } = await Promise.all([t.e("33285"), t.e("29497"), t.e("26861")]).then(t.bind(t, 241865));
            return (t) => {
                var i, l;
                return (0, r.jsx)(
                    n,
                    ((i = (function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (n) {
                                    var r;
                                    (r = t[n]),
                                        n in e
                                            ? Object.defineProperty(e, n, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[n] = r);
                                });
                        }
                        return e;
                    })({}, t)),
                    (l = l =
                        {
                            channelType: u,
                            guildId: e.guild_id,
                            categoryId: e.parent_id,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, n) {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  t.push.apply(t, r);
                              }
                              return t;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i),
                );
            };
        });
    };
    switch (u) {
        case c.d4z.GUILD_TEXT:
            return (0, r.jsx)(l.sNh, {
                id: "create-text-channel",
                label: a.intl.string(a.t.HHkTJP),
                action: d,
            });
        case c.d4z.GUILD_VOICE:
            return (0, r.jsx)(l.sNh, {
                id: "create-voice-channel",
                label: a.intl.string(a.t.AlbZaI),
                action: d,
            });
        default:
            return null;
    }
}
