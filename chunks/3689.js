n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(496675),
    c = n(981631),
    a = n(388032);
function s(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
        u = (0, i.e7)([o.Z], () => o.Z.can(c.Plq.MANAGE_CHANNELS, e), [e]);
    if (__OVERLAY__ || !u) return null;
    let d = () => {
        (0, l.ZDy)(async () => {
            let { default: t } = await Promise.all([n.e('7590'), n.e('45094'), n.e('7911')]).then(n.bind(n, 218613));
            return (n) => {
                var i, l;
                return (0, r.jsx)(
                    t,
                    ((i = (function (e) {
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
                            channelType: s,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
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
                    i)
                );
            };
        });
    };
    switch (s) {
        case c.d4z.GUILD_TEXT:
            return (0, r.jsx)(l.sNh, {
                id: 'create-text-channel',
                label: a.intl.string(a.t.HHkTJC),
                action: d
            });
        case c.d4z.GUILD_VOICE:
            return (0, r.jsx)(l.sNh, {
                id: 'create-voice-channel',
                label: a.intl.string(a.t.AlbZaG),
                action: d
            });
        default:
            return null;
    }
}
