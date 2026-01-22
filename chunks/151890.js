n.d(t, { A: () => g }), n(747238);
var l,
    a,
    r = n(627968);
n(64700);
var i = n(280230),
    s = n.n(i),
    c = n(397927),
    o = n(846293),
    d = n(179389),
    u = n(167189),
    p = n(833291),
    h = n(365526),
    m = n(558179);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let f = /^discord.gg\/[a-zA-Z0-9-]+/,
    g =
        ((l = b({}, m.A.rules)),
        (a = a =
            {
                heading: b({}, d.i.heading),
                image: b({}, s().defaultRules.image),
                inviteLink: {
                    order: m.A.rules.link.order + 1,
                    match: (e, t) => (t.inline ? f.exec(e) : null),
                    parse: (e, t, n) => {
                        let l = (0, p.br)(e[0]);
                        return null == l || l.type !== u.I.INVITE
                            ? {
                                  type: "text",
                                  content: e[0],
                              }
                            : {
                                  type: "inviteLink",
                                  content: [
                                      {
                                          type: "text",
                                          content: e[0],
                                      },
                                  ],
                                  onClick: () => {
                                      var e;
                                      o.Ay.acceptInviteAndTransitionToInviteChannel({
                                          inviteKey: l.code,
                                          context: { location: "Application Directory" },
                                      }),
                                          null == (e = n.closeModal) || e.call(n);
                                  },
                              };
                    },
                    react: (e, t, n) =>
                        (0, r.jsx)(
                            c.MzZ,
                            {
                                onClick: (t) => {
                                    t.preventDefault(), e.onClick();
                                },
                                children: (0, h.t)(e, t, n),
                            },
                            n.key,
                        ),
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(a)).forEach(function (e) {
                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
              }),
        l);
