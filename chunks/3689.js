n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var c = n(442837),
    l = n(481060),
    i = n(496675),
    o = n(981631),
    a = n(388032);
function u(e, t) {
    let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
        s = (0, c.e7)([i.Z], () => i.Z.can(o.Plq.MANAGE_CHANNELS, e), [e]);
    if (__OVERLAY__ || !s) return null;
    let b = () => {
        (0, l.ZDy)(async () => {
            let { default: t } = await Promise.all([n.e('7590'), n.e('45094'), n.e('7911')]).then(n.bind(n, 218613));
            return (n) => {
                var c, l;
                return (0, r.jsx)(
                    t,
                    ((c = (function (e) {
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
                    })({}, n)),
                    (l = l =
                        {
                            channelType: u,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    c)
                );
            };
        });
    };
    switch (u) {
        case o.d4z.GUILD_TEXT:
            return (0, r.jsx)(l.sNh, {
                id: 'create-text-channel',
                label: a.intl.string(a.t.HHkTJC),
                action: b
            });
        case o.d4z.GUILD_VOICE:
            return (0, r.jsx)(l.sNh, {
                id: 'create-voice-channel',
                label: a.intl.string(a.t.AlbZaG),
                action: b
            });
        default:
            return null;
    }
}
