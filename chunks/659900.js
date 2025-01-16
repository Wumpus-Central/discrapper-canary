n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    c = n.n(a),
    u = n(866442),
    d = n(692547),
    o = n(481060),
    C = n(893776),
    m = n(37234),
    L = n(232567),
    h = n(820160),
    f = n(594174),
    x = n(259580),
    g = n(350566),
    p = n(837748),
    v = n(971401),
    j = n(306453),
    N = n(981631),
    H = n(388032),
    E = n(809893);
function Z(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, s] = i.useState(''),
        [l, a] = i.useState(null),
        [c, u] = i.useState(null),
        d = (0, p.Z)(e.code);
    i.useEffect(() => {
        (async function e() {
            let e = f.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, L.k)();
                } catch (e) {
                    C.Z.verifySSOToken(null);
                }
            null != e && s(H.intl.formatToPlainString(d.defaultName, { username: e.username }));
        })();
    }, [d.defaultName]);
    (0, v.Z)(e);
    let x = (0, r.jsxs)(r.Fragment, {
            children: [
                t ? (0, r.jsx)(j.Z, { guildTemplate: e }) : null,
                (0, r.jsx)('div', {
                    className: E.icon,
                    children: (0, r.jsx)(h.Z, {
                        icon: l,
                        onChange: a
                    })
                }),
                (0, r.jsx)(o.FormItem, {
                    title: d.nameLabel,
                    children: (0, r.jsx)(o.TextInput, {
                        type: 'text',
                        value: n,
                        maxLength: 100,
                        onChange: s,
                        error: null == c ? void 0 : c.name
                    })
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: E.guidelines,
                    children: H.intl.format(d.terms, { guidelinesURL: N.EYA.GUIDELINES })
                })
            ]
        }),
        Z = e.serializedSourceGuild.roles.filter((e) => '@everyone' !== e.name);
    return {
        form: x,
        preview: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', { className: E.divider }),
                (0, r.jsxs)(o.FormItem, {
                    className: E.previewSection,
                    title: H.intl.string(H.t.Zxk1OD),
                    children: [
                        (0, r.jsx)(M, { channels: e.serializedSourceGuild.channels }),
                        (0, r.jsxs)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: E.protip,
                            children: [
                                (0, r.jsxs)('span', {
                                    className: E.protipText,
                                    children: [H.intl.string(H.t['8tvIiI']), ':']
                                }),
                                ' ',
                                H.intl.string(H.t.de7DpK)
                            ]
                        })
                    ]
                }),
                Z.length > 0
                    ? (0, r.jsx)(r.Fragment, {
                          children: (0, r.jsx)(o.FormItem, {
                              className: E.previewSection,
                              title: H.intl.string(H.t['RJ1e/v']),
                              children: (0, r.jsx)(T, { roles: Z })
                          })
                      })
                    : null
            ]
        }),
        handleSubmit: () => {
            g.Z.acceptGuildTemplate(e.code, n, l)
                .then(() => {
                    (0, o.closeAllModals)(), (0, m.Ou)();
                })
                .catch((e) => u(e));
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
                    return t === N.d4z.GUILD_VOICE ? o.VoiceNormalIcon : t === N.d4z.GUILD_CATEGORY ? x.Z : o.TextIcon;
                })(e);
                return (0, r.jsxs)(
                    'div',
                    {
                        className: l()(E.channel, { [E.category]: e.type === N.d4z.GUILD_CATEGORY }),
                        children: [
                            (0, r.jsx)(t, { className: E.channelIcon }),
                            (0, r.jsx)(o.Text, {
                                className: E.channelText,
                                variant: 'text-sm/normal',
                                children: e.name
                            })
                        ]
                    },
                    e.id
                );
            })
            .value();
    return (0, r.jsx)('div', {
        className: E.channelsWrapper,
        children: n
    });
}
n(418757);
function T(e) {
    let { roles: t } = e,
        n = t
            .slice()
            .reverse()
            .map((e) => (0, r.jsx)(b, { role: e }, e.id));
    return (0, r.jsx)('ul', {
        className: E.rolesWrapper,
        children: n
    });
}
function b(e) {
    var t;
    let { role: n } = e,
        i = null == n.color ? d.Z.unsafe_rawColors.PRIMARY_300.css : (0, u.Rf)(n.color);
    return (0, r.jsxs)('li', {
        className: E.role,
        style: { borderColor: null !== (t = (0, u.wK)(i, 0.6)) && void 0 !== t ? t : void 0 },
        children: [
            (0, r.jsx)(o.RoleCircle, {
                className: E.roleCircle,
                color: i
            }),
            (0, r.jsx)('div', {
                className: E.roleName,
                children: n.name
            })
        ]
    });
}
