var n = i(477900);
i(582128);
var a = i(855986),
    u = i(189213),
    e = i(345942),
    r = i(71393),
    d = i(124077),
    s = i(674725),
    o = i(673383),
    c = i(752222),
    p = i(792996);
i.d(
    l,
    {},
    {
        default: function (t) {
            let l,
                i,
                { code: f, reason: C, transitionState: g, onClose: k } = t,
                A = (0, s.A)(f),
                b = A?.guildId,
                h = (0, a.bG)([r.A], () => null != b && null != r.A.getGuild(b));
            if (null == A) return null;
            let { title: m, subtitle: y } =
                ((l = (0, d.A)({ displayNoun: A.displayNoun, lowercase: !0 })),
                (i = C === o.ru.NO_CHARACTERS ? c.default.lXyJMS : c.default["IIR/NZ"]),
                {
                    title: p.intl.formatToPlainString(c.default.DinVUQ, { noun: l }),
                    subtitle: p.intl.formatToPlainString(i, { noun: l, guildName: A.linkedGuild.name }),
                });
            return (0, n.jsx)(u.a, {
                transitionState: g,
                onClose: k,
                title: m,
                subtitle: y,
                actions: [
                    h
                        ? {
                              text: p.intl.string(c.default.H1wMHV),
                              variant: "primary",
                              onClick: function () {
                                  null != b && (k(), (0, e.u)(b));
                              },
                          }
                        : { text: p.intl.string(p.t.cpT0Cq), variant: "secondary", onClick: k },
                ],
            });
        },
    },
);
