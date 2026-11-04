var a = i(477900),
    n = i(582128),
    l = i(771871),
    r = i(627784),
    s = i(727419),
    u = i(809505),
    d = i(242273),
    c = i(652215),
    o = i(792996);
i.d(
    t,
    {},
    {
        default: function (e) {
            let { guild: t, onClose: i, hideColors: p } = e,
                [h, f] = n.useState(t.verificationLevel),
                [v, C] = n.useState(null),
                k = t.features.has(c.GuildFeatures.COMMUNITY),
                b = (0, u.vd)(k, p).filter((e) => !e.disabled),
                g = n.useCallback(async () => {
                    null != v && C(null);
                    try {
                        (await s.A.saveGuild(t.id, { verificationLevel: h }),
                            s.A.updateGuild({ verificationLevel: h }),
                            i());
                    } catch (e) {
                        C(new r.LG(e).getAnyErrorMessage());
                    }
                }, [v, t.id, h, i]);
            return (0, a.jsx)(d.A, {
                ...e,
                title: o.intl.string(o.t.DpRdYK),
                description: o.intl.format(o.t.iuRk2j, {}),
                errorText: v,
                onConfirm: g,
                onCancel: i,
                children: (0, a.jsx)(l.z, { value: h, options: b, onChange: (e) => f(e) }),
            });
        },
    },
);
