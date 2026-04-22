a.d(t, { A: () => p });
var n = a(627968);
a(64700);
var l = a(791332),
    i = a.n(l),
    s = a(349288),
    r = a(846293),
    o = a(167189),
    c = a(833291),
    d = a(481859),
    u = a(365526),
    h = a(558179);
let m = /^discord.gg\/[a-zA-Z0-9-]+/,
    p = {
        ...h.A.rules,
        heading: {
            ...h.A.rules.heading,
            react(e, t, a) {
                let l = `h${Math.min(Math.max(2, e.level + 1), 4)}`;
                return (0, n.jsx)(d.A, { tag: l, children: t(e.content, a) }, a.key);
            },
        },
        image: { ...i().defaultRules.image },
        inviteLink: {
            order: h.A.rules.link.order + 1,
            match: (e, t) => (t.inline ? m.exec(e) : null),
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
                    s.Anchor,
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
