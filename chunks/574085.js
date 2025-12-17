n.d(t, { Z: () => m }), n(388685), n(953529), n(539854);
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(723047),
    a = n(727843),
    s = n(290348),
    o = n(764163),
    c = n(861345),
    d = n(293810),
    u = n(388032);
function g(e) {
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
function f(e, t) {
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
function m() {
    let { editStateId: e, guildId: t } = (0, a.N)(),
        [n, m] = s.R7(e);
    function b(e, t) {
        let { name: r, description: i, emojiId: l, emojiName: a } = e,
            s = [...n],
            o = {
                name: r,
                description: i,
                emoji_id: l,
                emoji_name: a,
                ref_type: d.Qs.INTANGIBLE,
                ref_id: void 0,
            };
        null != t ? (s[t] = o) : s.push(o), m(s);
    }
    let p = (0, l.mY)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.p, {
                benefits: n,
                onEdit: function (e) {
                    (0, i.h7j)((i) =>
                        (0, r.jsx)(
                            o.DI,
                            f(g({}, i), {
                                guildId: t,
                                initialData: n[e],
                                onSave: (t) => b(t, e),
                                onDelete: () =>
                                    (function (e) {
                                        let t = [...n];
                                        t.splice(e, 1), m(t);
                                    })(e),
                            }),
                        ),
                    );
                },
                onMove: function (e, t) {
                    let r = [...n],
                        [i] = r.splice(e, 1);
                    r.splice(t, 0, i), m(r);
                },
                guildId: t,
            }),
            n.length > 0 ? (0, r.jsx)(i.LZC, { size: 8 }) : null,
            (0, r.jsx)(c.s, {
                onClick: function () {
                    (0, i.h7j)((e) =>
                        (0, r.jsx)(
                            o.DI,
                            f(g({}, e), {
                                guildId: t,
                                onSave: (e) => b(e),
                            }),
                        ),
                    );
                },
                disabled: p,
                children: u.intl.string(u.t["6dwqo0"]),
            }),
        ],
    });
}
