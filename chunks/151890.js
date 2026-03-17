a.d(t, { A: () => p });
var n = a(627968);
a(64700);
var i = a(791332),
    l = a.n(i),
    s = a(397927),
    r = a(846293),
    o = a(167189),
    c = a(833291),
    d = a(481859),
    u = a(365526),
    m = a(558179);
let h = /^discord.gg\/[a-zA-Z0-9-]+/,
    p = {
        ...m.A.rules,
        heading: {
            ...m.A.rules.heading,
            react(e, t, a) {
                let i = `h${Math.min(Math.max(2, e.level + 1), 4)}`;
                return (0, n.jsx)(d.A, { tag: i, children: t(e.content, a) }, a.key);
            },
        },
        image: { ...l().defaultRules.image },
        inviteLink: {
            order: m.A.rules.link.order + 1,
            match: (e, t) => (t.inline ? h.exec(e) : null),
            parse: (e, t, a) => {
                let n = (0, c.br)(e[0]);
                return null == n || n.type !== o.I.INVITE
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
                    s.MzZ,
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
