n.d(t, { Z: () => h }), n(47120), n(266796), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(481060);
n(674180);
var a = n(723047),
    l = n(727843),
    o = n(290348),
    c = n(764163),
    d = n(861345),
    u = n(293810),
    m = n(388032);
function g(e) {
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
}
function p(e, t) {
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
function h() {
    let { editStateId: e, guildId: t } = (0, l.N)(),
        [n, h] = o.UE(e),
        f = i.useMemo(() => new Set(n.map((e) => e.ref_id)), [n]);
    function b(e, t) {
        let { channelId: r, description: i, emojiId: s, emojiName: a } = e,
            l = [...n],
            o = {
                name: '',
                description: i,
                emoji_id: s,
                emoji_name: a,
                ref_type: u.Qs.CHANNEL,
                ref_id: r
            };
        null != t ? (l[t] = o) : l.push(o), h(l);
    }
    let x = (0, a.mY)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.p, {
                benefits: n,
                onEdit: function (e) {
                    (0, s.h7j)((i) =>
                        (0, r.jsx)(
                            c.x3,
                            p(g({}, i), {
                                guildId: t,
                                omitChannelIds: f,
                                initialData: n[e],
                                onSave: (t) => b(t, e),
                                onDelete: () =>
                                    (function (e) {
                                        let t = [...n];
                                        t.splice(e, 1), h(t);
                                    })(e)
                            })
                        )
                    );
                },
                onMove: function (e, t) {
                    let r = [...n],
                        [i] = r.splice(e, 1);
                    r.splice(t, 0, i), h(r);
                },
                guildId: t
            }),
            n.length > 0 && (0, r.jsx)(s.LZC, { size: 8 }),
            (0, r.jsx)(d.s, {
                onClick: function () {
                    (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            c.x3,
                            p(g({}, e), {
                                guildId: t,
                                omitChannelIds: f,
                                onSave: (e) => b(e)
                            })
                        )
                    );
                },
                disabled: x,
                children: m.NW.string(m.t.PLSCUl)
            })
        ]
    });
}
