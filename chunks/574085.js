n.d(t, { Z: () => p }), n(388685), n(953529), n(539854);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(723047),
    s = n(727843),
    a = n(290348),
    o = n(764163),
    c = n(861345),
    u = n(293810),
    d = n(388032);
function m(e) {
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
function g(e, t) {
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
function p() {
    let { editStateId: e, guildId: t } = (0, s.N)(),
        [n, p] = a.R7(e);
    function f(e, t) {
        let { name: r, description: i, emojiId: l, emojiName: s } = e,
            a = [...n],
            o = {
                name: r,
                description: i,
                emoji_id: l,
                emoji_name: s,
                ref_type: u.Qs.INTANGIBLE,
                ref_id: void 0
            };
        null != t ? (a[t] = o) : a.push(o), p(a);
    }
    let h = (0, l.mY)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.p, {
                benefits: n,
                onEdit: function (e) {
                    (0, i.h7j)((i) =>
                        (0, r.jsx)(
                            o.DI,
                            g(m({}, i), {
                                guildId: t,
                                initialData: n[e],
                                onSave: (t) => f(t, e),
                                onDelete: () =>
                                    (function (e) {
                                        let t = [...n];
                                        t.splice(e, 1), p(t);
                                    })(e)
                            })
                        )
                    );
                },
                onMove: function (e, t) {
                    let r = [...n],
                        [i] = r.splice(e, 1);
                    r.splice(t, 0, i), p(r);
                },
                guildId: t
            }),
            n.length > 0 ? (0, r.jsx)(i.LZC, { size: 8 }) : null,
            (0, r.jsx)(c.s, {
                onClick: function () {
                    (0, i.h7j)((e) =>
                        (0, r.jsx)(
                            o.DI,
                            g(m({}, e), {
                                guildId: t,
                                onSave: (e) => f(e)
                            })
                        )
                    );
                },
                disabled: h,
                children: d.intl.string(d.t['6dwqo6'])
            })
        ]
    });
}
