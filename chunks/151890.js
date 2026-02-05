a.d(t, { A: () => p });
var n = a(627968);
a(64700);
var i = a(791332),
    s = a.n(i),
    l = a(397927),
    r = a(846293),
    o = a(179389),
    c = a(167189),
    d = a(833291),
    u = a(365526),
    h = a(558179);
let m = /^discord.gg\/[a-zA-Z0-9-]+/,
    p = {
        ...h.A.rules,
        heading: { ...o.i.heading },
        image: { ...s().defaultRules.image },
        inviteLink: {
            order: h.A.rules.link.order + 1,
            match: (e, t) => (t.inline ? m.exec(e) : null),
            parse: (e, t, a) => {
                let n = (0, d.br)(e[0]);
                return null == n || n.type !== c.I.INVITE
                    ? { type: "text", content: e[0] }
                    : {
                          type: "inviteLink",
                          content: [{ type: "text", content: e[0] }],
                          onClick: () => {
                              r.Ay.acceptInviteAndTransitionToInviteChannel({
                                  inviteKey: n.code,
                                  context: { location: "Application Directory" },
                              }),
                                  a.closeModal?.();
                          },
                      };
            },
            react: (e, t, a) =>
                (0, n.jsx)(
                    l.MzZ,
                    {
                        onClick: (t) => {
                            t.preventDefault(), e.onClick();
                        },
                        children: (0, u.t)(e, t, a),
                    },
                    a.key,
                ),
        },
    };
