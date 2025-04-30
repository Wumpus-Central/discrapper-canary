n.d(t, { Z: () => T }), n(388685), n(583741);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    c = n.n(a),
    d = n(866442),
    u = n(692547),
    o = n(481060),
    C = n(893776),
    m = n(37234),
    L = n(232567),
    h = n(820160),
    x = n(884902),
    f = n(594174),
    g = n(259580),
    p = n(350566),
    v = n(837748),
    j = n(971401),
    N = n(306453),
    H = n(981631),
    E = n(388032),
    Z = n(697698);
function T(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, s] = r.useState(''),
        [l, a] = r.useState(null),
        [c, d] = r.useState(null),
        u = (0, v.Z)(e.code);
    r.useEffect(() => {
        !(async function () {
            let e = f.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, L.k)();
                } catch (e) {
                    C.Z.verifySSOToken('accept_guild_template', null);
                }
            null != e && s(E.intl.formatToPlainString(u.defaultName, { username: e.username }));
        })();
    }, [u.defaultName]),
        (0, j.Z)(e);
    let x = (0, i.jsxs)(i.Fragment, {
            children: [
                t ? (0, i.jsx)(N.Z, { guildTemplate: e }) : null,
                (0, i.jsx)('div', {
                    className: Z.icon,
                    children: (0, i.jsx)(h.Z, {
                        icon: l,
                        onChange: a
                    })
                }),
                (0, i.jsx)(o.xJW, {
                    title: u.nameLabel,
                    children: (0, i.jsx)(o.oil, {
                        type: 'text',
                        value: n,
                        maxLength: 100,
                        onChange: s,
                        error: null == c ? void 0 : c.name
                    })
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: Z.guidelines,
                    children: E.intl.format(u.terms, { guidelinesURL: H.EYA.GUIDELINES })
                })
            ]
        }),
        g = e.serializedSourceGuild.roles.filter((e) => '@everyone' !== e.name);
    return {
        form: x,
        preview: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { className: Z.divider }),
                (0, i.jsxs)(o.xJW, {
                    className: Z.previewSection,
                    title: E.intl.string(E.t.Zxk1OD),
                    children: [
                        (0, i.jsx)(M, { channels: e.serializedSourceGuild.channels }),
                        (0, i.jsxs)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: Z.protip,
                            children: [
                                (0, i.jsxs)('span', {
                                    className: Z.protipText,
                                    children: [E.intl.string(E.t['8tvIiI']), ':']
                                }),
                                ' ',
                                E.intl.string(E.t.de7DpK)
                            ]
                        })
                    ]
                }),
                g.length > 0
                    ? (0, i.jsx)(o.xJW, {
                          className: Z.previewSection,
                          title: E.intl.string(E.t['RJ1e/v']),
                          children: (0, i.jsx)(_, {
                              guildId: e.serializedSourceGuild.id,
                              roles: g
                          })
                      })
                    : null
            ]
        }),
        handleSubmit: () => {
            p.Z.acceptGuildTemplate(e.code, n, l)
                .then(() => {
                    (0, o.pTH)(), (0, m.Ou)();
                })
                .catch((e) => d(e));
        }
    };
}
function M(e) {
    let { channels: t } = e,
        n = c()(t)
            .sortBy((e) => (null == e.parent_id ? 10000 * Number(e.id) : 10000 * Number(e.parent_id) + e.id))
            .map((e) => {
                let t = (function (e) {
                    let { type: t } = e;
                    return t === H.d4z.GUILD_VOICE ? o.gj8 : t === H.d4z.GUILD_CATEGORY ? g.Z : o.VL1;
                })(e);
                return (0, i.jsxs)(
                    'div',
                    {
                        className: l()(Z.channel, { [Z.category]: e.type === H.d4z.GUILD_CATEGORY }),
                        children: [
                            (0, i.jsx)(t, { className: Z.channelIcon }),
                            (0, i.jsx)(o.Text, {
                                className: Z.channelText,
                                variant: 'text-sm/normal',
                                children: e.name
                            })
                        ]
                    },
                    e.id
                );
            })
            .value();
    return (0, i.jsx)('div', {
        className: Z.channelsWrapper,
        children: n
    });
}
function _(e) {
    let { guildId: t, roles: n } = e,
        r = n
            .slice()
            .reverse()
            .map((e) =>
                (0, i.jsx)(
                    b,
                    {
                        guildId: t,
                        role: e
                    },
                    e.id
                )
            );
    return (0, i.jsx)('ul', {
        className: Z.rolesWrapper,
        children: r
    });
}
function b(e) {
    var t, n;
    let { guildId: r, role: s } = e,
        l = (0, o.dQu)(u.Z.colors.BORDER_SUBTLE).hex(),
        a = null == s.color ? l : (0, d.Rf)(s.color),
        c = (0, x.X)(r, s.colorStrings);
    return (0, i.jsxs)('li', {
        className: Z.role,
        style: {
            borderColor: null != (t = (0, d.wK)(a, 0.6)) ? t : void 0,
            backgroundColor: null != (n = (0, d.wK)(a, 0.075)) ? n : void 0
        },
        children: [
            (0, i.jsx)(o.xko, {
                className: Z.roleCircle,
                color: a,
                colors: c
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/medium',
                children: s.name
            })
        ]
    });
}
n(418757);
