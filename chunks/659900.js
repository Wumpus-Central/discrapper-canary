r.d(t, { Z: () => Z }), r(388685), r(583741);
var s = r(200651),
    n = r(192379),
    a = r(120356),
    i = r.n(a),
    l = r(392711),
    c = r.n(l),
    d = r(866442),
    u = r(692547),
    o = r(481060),
    C = r(893776),
    m = r(37234),
    N = r(232567),
    L = r(820160),
    h = r(884902),
    x = r(594174),
    f = r(259580),
    g = r(350566),
    p = r(837748),
    v = r(971401),
    j = r(306453),
    H = r(981631),
    E = r(388032),
    W = r(697698);
function Z(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [r, a] = n.useState(''),
        [i, l] = n.useState(null),
        [c, d] = n.useState(null),
        u = (0, p.Z)(e.code);
    n.useEffect(() => {
        !(async function () {
            let e = x.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, N.k)();
                } catch (e) {
                    C.Z.verifySSOToken('accept_guild_template', null);
                }
            null != e && a(E.NW.formatToPlainString(u.defaultName, { username: e.username }));
        })();
    }, [u.defaultName]),
        (0, v.Z)(e);
    let h = (0, s.jsxs)(s.Fragment, {
            children: [
                t ? (0, s.jsx)(j.Z, { guildTemplate: e }) : null,
                (0, s.jsx)('div', {
                    className: W.icon,
                    children: (0, s.jsx)(L.Z, {
                        icon: i,
                        onChange: l
                    })
                }),
                (0, s.jsx)(o.xJW, {
                    title: u.nameLabel,
                    children: (0, s.jsx)(o.oil, {
                        type: 'text',
                        value: r,
                        maxLength: 100,
                        onChange: a,
                        error: null == c ? void 0 : c.name
                    })
                }),
                (0, s.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: W.guidelines,
                    children: E.NW.format(u.terms, { guidelinesURL: H.EYA.GUIDELINES })
                })
            ]
        }),
        f = e.serializedSourceGuild.roles.filter((e) => '@everyone' !== e.name);
    return {
        form: h,
        preview: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('div', { className: W.divider }),
                (0, s.jsxs)(o.xJW, {
                    className: W.previewSection,
                    title: E.NW.string(E.t.Zxk1OD),
                    children: [
                        (0, s.jsx)(T, { channels: e.serializedSourceGuild.channels }),
                        (0, s.jsxs)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: W.protip,
                            children: [
                                (0, s.jsxs)('span', {
                                    className: W.protipText,
                                    children: [E.NW.string(E.t['8tvIiI']), ':']
                                }),
                                ' ',
                                E.NW.string(E.t.de7DpK)
                            ]
                        })
                    ]
                }),
                f.length > 0
                    ? (0, s.jsx)(o.xJW, {
                          className: W.previewSection,
                          title: E.NW.string(E.t['RJ1e/v']),
                          children: (0, s.jsx)(M, {
                              guildId: e.serializedSourceGuild.id,
                              roles: f
                          })
                      })
                    : null
            ]
        }),
        handleSubmit: () => {
            g.Z.acceptGuildTemplate(e.code, r, i)
                .then(() => {
                    (0, o.pTH)(), (0, m.Ou)();
                })
                .catch((e) => d(e));
        }
    };
}
function T(e) {
    let { channels: t } = e,
        r = c()(t)
            .sortBy((e) => (null == e.parent_id ? 10000 * Number(e.id) : 10000 * Number(e.parent_id) + e.id))
            .map((e) => {
                let t = (function (e) {
                    let { type: t } = e;
                    return t === H.d4z.GUILD_VOICE ? o.gj8 : t === H.d4z.GUILD_CATEGORY ? f.Z : o.VL1;
                })(e);
                return (0, s.jsxs)(
                    'div',
                    {
                        className: i()(W.channel, { [W.category]: e.type === H.d4z.GUILD_CATEGORY }),
                        children: [
                            (0, s.jsx)(t, { className: W.channelIcon }),
                            (0, s.jsx)(o.Text, {
                                className: W.channelText,
                                variant: 'text-sm/normal',
                                children: e.name
                            })
                        ]
                    },
                    e.id
                );
            })
            .value();
    return (0, s.jsx)('div', {
        className: W.channelsWrapper,
        children: r
    });
}
function M(e) {
    let { guildId: t, roles: r } = e,
        n = r
            .slice()
            .reverse()
            .map((e) =>
                (0, s.jsx)(
                    _,
                    {
                        guildId: t,
                        role: e
                    },
                    e.id
                )
            );
    return (0, s.jsx)('ul', {
        className: W.rolesWrapper,
        children: n
    });
}
function _(e) {
    var t, r;
    let { guildId: n, role: a } = e,
        i = (0, o.dQu)(u.Z.colors.BORDER_SUBTLE).hex(),
        l = null == a.color ? i : (0, d.Rf)(a.color),
        c = (0, h.X)(n, a.colorStrings);
    return (0, s.jsxs)('li', {
        className: W.role,
        style: {
            borderColor: null != (t = (0, d.wK)(l, 0.6)) ? t : void 0,
            backgroundColor: null != (r = (0, d.wK)(l, 0.075)) ? r : void 0
        },
        children: [
            (0, s.jsx)(o.xko, {
                className: W.roleCircle,
                color: l,
                colors: c
            }),
            (0, s.jsx)(o.Text, {
                variant: 'text-xs/medium',
                children: a.name
            })
        ]
    });
}
r(418757);
