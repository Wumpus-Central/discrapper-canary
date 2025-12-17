n.d(t, { Z: () => b }), n(35282);
var a,
    r,
    i = n(54381);
n(473749);
var l = n(159635),
    s = n.n(l),
    o = n(481060),
    c = n(447543),
    d = n(15470),
    u = n(960904),
    p = n(830121),
    m = n(746878),
    h = n(241209);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
let g = /^discord.gg\/[a-zA-Z0-9-]+/,
    b =
        ((a = f({}, h.Z.rules)),
        (r = r =
            {
                heading: f({}, d.i.heading),
                image: f({}, s().defaultRules.image),
                inviteLink: {
                    order: h.Z.rules.link.order + 1,
                    match: (e, t) => (t.inline ? g.exec(e) : null),
                    parse: (e, t, n) => {
                        let a = (0, p.zO)(e[0]);
                        return null == a || a.type !== u.g.INVITE
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
                                      c.ZP.acceptInviteAndTransitionToInviteChannel({
                                          inviteKey: a.code,
                                          context: { location: "Application Directory" },
                                      }),
                                          null == (e = n.closeModal) || e.call(n);
                                  },
                              };
                    },
                    react: (e, t, n) =>
                        (0, i.jsx)(
                            o.Anchor,
                            {
                                onClick: (t) => {
                                    t.preventDefault(), e.onClick();
                                },
                                children: (0, m.S)(e, t, n),
                            },
                            n.key,
                        ),
                },
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        a);
