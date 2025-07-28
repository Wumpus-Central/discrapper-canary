(n.d(t, { Z: () => M }), n(388685), n(583741));
var i = n(255367),
    r = n(73800),
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
    f = n(345162),
    g = n(594174),
    p = n(259580),
    v = n(539600),
    j = n(350566),
    N = n(837748),
    H = n(971401),
    E = n(306453),
    Z = n(981631),
    T = n(388032),
    _ = n(697698);
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, s] = r.useState(''),
        [l, a] = r.useState(null),
        [c, d] = r.useState(null),
        u = (0, N.Z)(e.code);
    (r.useEffect(() => {
        !(async function () {
            let e = g.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, L.k)();
                } catch (e) {
                    C.Z.verifySSOToken('accept_guild_template', null);
                }
            null != e && s(T.intl.formatToPlainString(u.defaultName, { username: e.username }));
        })();
    }, [u.defaultName]),
        (0, H.Z)(e));
    let x = (0, i.jsxs)(i.Fragment, {
            children: [
                t ? (0, i.jsx)(E.Z, { guildTemplate: e }) : null,
                (0, i.jsx)('div', {
                    className: _.icon,
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
                    className: _.guidelines,
                    children: T.intl.format(u.terms, { guidelinesURL: Z.EYA.GUIDELINES })
                })
            ]
        }),
        p = e.serializedSourceGuild.roles.map((t) => v.wD(e.serializedSourceGuild.id, t)).filter((e) => !(0, f.fI)(e));
    return {
        form: x,
        preview: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', { className: _.divider }),
                (0, i.jsxs)(o.xJW, {
                    className: _.previewSection,
                    title: T.intl.string(T.t.Zxk1OD),
                    children: [
                        (0, i.jsx)(b, { channels: e.serializedSourceGuild.channels }),
                        (0, i.jsxs)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: _.protip,
                            children: [
                                (0, i.jsxs)('span', {
                                    className: _.protipText,
                                    children: [T.intl.string(T.t['8tvIiI']), ':']
                                }),
                                ' ',
                                T.intl.string(T.t.de7DpK)
                            ]
                        })
                    ]
                }),
                p.length > 0
                    ? (0, i.jsx)(o.xJW, {
                          className: _.previewSection,
                          title: T.intl.string(T.t['RJ1e/v']),
                          children: (0, i.jsx)(S, {
                              guildId: e.serializedSourceGuild.id,
                              roles: p
                          })
                      })
                    : null
            ]
        }),
        handleSubmit: () => {
            j.Z.acceptGuildTemplate(e.code, n, l)
                .then(() => {
                    ((0, o.pTH)(), (0, m.Ou)());
                })
                .catch((e) => d(e));
        }
    };
}
function b(e) {
    let { channels: t } = e,
        n = c()(t)
            .sortBy((e) => (null == e.parent_id ? 10000 * Number(e.id) : 10000 * Number(e.parent_id) + e.id))
            .map((e) => {
                let t = (function (e) {
                    let { type: t } = e;
                    return t === Z.d4z.GUILD_VOICE ? o.gj8 : t === Z.d4z.GUILD_CATEGORY ? p.Z : o.VL1;
                })(e);
                return (0, i.jsxs)(
                    'div',
                    {
                        className: l()(_.channel, { [_.category]: e.type === Z.d4z.GUILD_CATEGORY }),
                        children: [
                            (0, i.jsx)(t, { className: _.channelIcon }),
                            (0, i.jsx)(o.Text, {
                                className: _.channelText,
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
        className: _.channelsWrapper,
        children: n
    });
}
function S(e) {
    let { guildId: t, roles: n } = e,
        r = n
            .slice()
            .reverse()
            .map((e) =>
                (0, i.jsx)(
                    G,
                    {
                        guildId: t,
                        role: e
                    },
                    e.id
                )
            );
    return (0, i.jsx)('ul', {
        className: _.rolesWrapper,
        children: r
    });
}
function G(e) {
    var t, n;
    let { guildId: r, role: s } = e,
        l = (0, o.dQu)(u.Z.colors.BORDER_SUBTLE).hex(),
        a = null == s.color ? l : (0, d.Rf)(s.color),
        c = (0, x._f)(r, s, s.colorStrings);
    return (0, i.jsxs)('li', {
        className: _.role,
        style: {
            borderColor: null != (t = (0, d.wK)(a, 0.6)) ? t : void 0,
            backgroundColor: null != (n = (0, d.wK)(a, 0.075)) ? n : void 0
        },
        children: [
            (0, i.jsx)(o.xko, {
                className: _.roleCircle,
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
