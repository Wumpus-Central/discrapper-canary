var n = l(477900);
l(582128);
var a = l(855986),
    u = l(772707),
    e = l(345942),
    r = l(71393),
    d = l(124077),
    o = l(674725),
    s = l(673383),
    c = l(752222),
    p = l(792996);
l.d(
    i,
    {},
    {
        default: function (t) {
            let i,
                l,
                { code: f, reason: g, transitionState: k, onClose: C } = t,
                h = (0, o.A)(f),
                A = h?.guildId,
                b = (0, a.bG)([r.A], () => null != A && null != r.A.getGuild(A));
            if (null == h) return null;
            let { title: m, subtitle: v } =
                ((i = (0, d.A)({ displayNoun: h.displayNoun, lowercase: !0 })),
                (l = g === s.ru.NO_CHARACTERS ? c.default.lXyJMS : c.default["IIR/NZ"]),
                {
                    title: p.intl.formatToPlainString(c.default.DinVUQ, { noun: i }),
                    subtitle: p.intl.formatToPlainString(l, { noun: i, guildName: h.linkedGuild.name }),
                });
            return (0, n.jsx)(u.k, {
                transitionState: k,
                onClose: C,
                graphic: void 0,
                title: m,
                subtitle: v,
                actions: [
                    b
                        ? {
                              text: p.intl.string(c.default.H1wMHV),
                              variant: "primary",
                              onClick: function () {
                                  null != A && (C(), (0, e.u)(A));
                              },
                          }
                        : { text: p.intl.string(p.t.cpT0Cq), variant: "secondary", onClick: C },
                ],
            });
        },
    },
);
