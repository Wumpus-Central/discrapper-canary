var n = l(477900);
l(582128);
var a = l(855986),
    u = l(189213),
    e = l(345942),
    r = l(71393),
    d = l(674725),
    o = l(673383),
    s = l(752222),
    c = l(792996);
l.d(
    i,
    {},
    {
        default: function (t) {
            let i,
                l,
                { code: f, reason: p, transitionState: C, onClose: g } = t,
                k = (0, d.A)(f),
                h = k?.guildId,
                b = (0, a.bG)([r.A], () => null != h && null != r.A.getGuild(h));
            if (null == k) return null;
            let { title: m, subtitle: A } =
                ((i = k.displayNoun ?? "other"),
                (l = p === o.ru.NO_CHARACTERS ? s.default.lXyJMS : s.default["IIR/NZ"]),
                {
                    title: c.intl.formatToPlainString(s.default.DinVUQ, { displayNoun: i }),
                    subtitle: c.intl.formatToPlainString(l, { displayNoun: i, guildName: k.linkedGuild.name }),
                });
            return (0, n.jsx)(u.a, {
                transitionState: C,
                onClose: g,
                title: m,
                subtitle: A,
                actions: [
                    b
                        ? {
                              text: c.intl.string(s.default.H1wMHV),
                              variant: "primary",
                              onClick: function () {
                                  null != h && (g(), (0, e.u)(h));
                              },
                          }
                        : { text: c.intl.string(c.t.cpT0Cq), variant: "secondary", onClick: g },
                ],
            });
        },
    },
);
