n.d(t, {
    A: () => b,
}),
    n(896048),
    n(228524),
    n(321073);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(11351),
    s = n(306444),
    a = n(922975),
    c = n(626083),
    o = n(79143),
    d = n(2242),
    u = n(985018);

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

function b() {
    let { editStateId: e, guildId: t } = (0, s.O)(),
        [n, b] = a.$O(e);

    function m(e, t) {
        let { name: r, description: i, emojiId: l, emojiName: s } = e,
            a = [...n],
            c = {
                name: r,
                description: i,
                emoji_id: l,
                emoji_name: s,
                ref_type: d.bN.INTANGIBLE,
                ref_id: void 0,
            };
        null != t ? (a[t] = c) : a.push(c), b(a);
    }
    let p = (0, l.gN)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.$, {
                benefits: n,
                onEdit: function (e) {
                    (0, i.qfG)((i) =>
                        (0, r.jsx)(
                            c.aP,
                            g(f({}, i), {
                                guildId: t,
                                initialData: n[e],
                                onSave: (t) => m(t, e),
                                onDelete: () => {
                                    let t;
                                    (t = [...n]).splice(e, 1), b(t);
                                },
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
            n.length > 0
                ? (0, r.jsx)(i.hKd, {
                      size: 8,
                  })
                : null,
            (0, r.jsx)(o.n, {
                onClick: function () {
                    (0, i.qfG)((e) =>
                        (0, r.jsx)(
                            c.aP,
                            g(f({}, e), {
                                guildId: t,
                                onSave: (e) => m(e),
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
