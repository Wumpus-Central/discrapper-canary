n.d(t, { Z: () => _ }), n(301563);
var r,
    a,
    i = n(200651);
n(192379);
var l = n(477660),
    o = n.n(l),
    s = n(481060),
    c = n(447543),
    d = n(15470),
    u = n(960904),
    p = n(830121),
    m = n(746878),
    h = n(241209);
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
let f = /^discord.gg\/[a-zA-Z0-9-]+/,
    _ =
        ((r = g({}, h.Z.rules)),
        (a = a =
            {
                heading: g({}, d.i.heading),
                image: g({}, o().defaultRules.image),
                inviteLink: {
                    order: h.Z.rules.link.order + 1,
                    match: (e, t) => (t.inline ? f.exec(e) : null),
                    parse: (e, t, n) => {
                        let r = (0, p.zO)(e[0]);
                        return null == r || r.type !== u.g.INVITE
                            ? {
                                  type: 'text',
                                  content: e[0]
                              }
                            : {
                                  type: 'inviteLink',
                                  content: [
                                      {
                                          type: 'text',
                                          content: e[0]
                                      }
                                  ],
                                  onClick: () => {
                                      var e;
                                      c.ZP.acceptInviteAndTransitionToInviteChannel({
                                          inviteKey: r.code,
                                          context: { location: 'Application Directory' }
                                      }),
                                          null == (e = n.closeModal) || e.call(n);
                                  }
                              };
                    },
                    react: (e, t, n) =>
                        (0, i.jsx)(
                            s.eee,
                            {
                                onClick: (t) => {
                                    t.preventDefault(), e.onClick();
                                },
                                children: (0, m.S)(e, t, n)
                            },
                            n.key
                        )
                }
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(a)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
              }),
        r);
