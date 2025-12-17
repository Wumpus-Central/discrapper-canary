n.d(t, { Z: () => b }), n(388685), n(953529), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(481060);
n(674180);
var a = n(723047),
    s = n(727843),
    o = n(290348),
    c = n(764163),
    d = n(861345),
    u = n(293810),
    g = n(388032);
function f(e) {
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
function b() {
    let { editStateId: e, guildId: t } = (0, s.N)(),
        [n, b] = o.UE(e),
        p = i.useMemo(() => new Set(n.map((e) => e.ref_id)), [n]);
    function h(e, t) {
        let { channelId: r, description: i, emojiId: l, emojiName: a } = e,
            s = [...n],
            o = {
                name: "",
                description: i,
                emoji_id: l,
                emoji_name: a,
                ref_type: u.Qs.CHANNEL,
                ref_id: r,
            };
        null != t ? (s[t] = o) : s.push(o), b(s);
    }
    let x = (0, a.mY)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.p, {
                benefits: n,
                onEdit: function (e) {
                    (0, l.h7j)((i) =>
                        (0, r.jsx)(
                            c.x3,
                            m(f({}, i), {
                                guildId: t,
                                omitChannelIds: p,
                                initialData: n[e],
                                onSave: (t) => h(t, e),
                                onDelete: () =>
                                    (function (e) {
                                        let t = [...n];
                                        t.splice(e, 1), b(t);
                                    })(e),
                            }),
                        ),
                    );
                },
                onMove: function (e, t) {
                    let r = [...n],
                        [i] = r.splice(e, 1);
                    r.splice(t, 0, i), b(r);
                },
                guildId: t,
            }),
            n.length > 0 && (0, r.jsx)(l.LZC, { size: 8 }),
            (0, r.jsx)(d.s, {
                onClick: function () {
                    (0, l.h7j)((e) =>
                        (0, r.jsx)(
                            c.x3,
                            m(f({}, e), {
                                guildId: t,
                                omitChannelIds: p,
                                onSave: (e) => h(e),
                            }),
                        ),
                    );
                },
                disabled: x,
                children: g.intl.string(g.t.PLSCUg),
            }),
        ],
    });
}
