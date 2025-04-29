n.d(t, { Z: () => h }), n(388685), n(953529), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(481060);
n(674180);
var s = n(723047),
    a = n(727843),
    o = n(290348),
    c = n(764163),
    u = n(861345),
    d = n(293810),
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
    let { editStateId: e, guildId: t } = (0, a.N)(),
        [n, h] = o.UE(e),
        f = i.useMemo(() => new Set(n.map((e) => e.ref_id)), [n]);
    function x(e, t) {
        let { channelId: r, description: i, emojiId: l, emojiName: s } = e,
            a = [...n],
            o = {
                name: '',
                description: i,
                emoji_id: l,
                emoji_name: s,
                ref_type: d.Qs.CHANNEL,
                ref_id: r
            };
        null != t ? (a[t] = o) : a.push(o), h(a);
    }
    let b = (0, s.mY)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.p, {
                benefits: n,
                onEdit: function (e) {
                    (0, l.h7j)((i) =>
                        (0, r.jsx)(
                            c.x3,
                            p(g({}, i), {
                                guildId: t,
                                omitChannelIds: f,
                                initialData: n[e],
                                onSave: (t) => x(t, e),
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
            n.length > 0 && (0, r.jsx)(l.LZC, { size: 8 }),
            (0, r.jsx)(u.s, {
                onClick: function () {
                    (0, l.h7j)((e) =>
                        (0, r.jsx)(
                            c.x3,
                            p(g({}, e), {
                                guildId: t,
                                omitChannelIds: f,
                                onSave: (e) => x(e)
                            })
                        )
                    );
                },
                disabled: b,
                children: m.intl.string(m.t.PLSCUl)
            })
        ]
    });
}
