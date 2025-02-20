r.d(t, { Z: () => E }), r(47120), r(978209);
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
    h = r(594174),
    x = r(259580),
    f = r(350566),
    g = r(837748),
    p = r(971401),
    v = r(306453),
    j = r(981631),
    H = r(388032),
    W = r(460086);
function E(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [r, a] = n.useState(''),
        [i, l] = n.useState(null),
        [c, d] = n.useState(null),
        u = (0, g.Z)(e.code);
    n.useEffect(() => {
        !(async function () {
            let e = h.default.getCurrentUser();
            if (null == e)
                try {
                    e = await (0, N.k)();
                } catch (e) {
                    C.Z.verifySSOToken(null);
                }
            null != e && a(H.NW.formatToPlainString(u.defaultName, { username: e.username }));
        })();
    }, [u.defaultName]),
        (0, p.Z)(e);
    let x = (0, s.jsxs)(s.Fragment, {
            children: [
                t ? (0, s.jsx)(v.Z, { guildTemplate: e }) : null,
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
                    children: H.NW.format(u.terms, { guidelinesURL: j.EYA.GUIDELINES })
                })
            ]
        }),
        E = e.serializedSourceGuild.roles.filter((e) => '@everyone' !== e.name);
    return {
        form: x,
        preview: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('div', { className: W.divider }),
                (0, s.jsxs)(o.xJW, {
                    className: W.previewSection,
                    title: H.NW.string(H.t.Zxk1OD),
                    children: [
                        (0, s.jsx)(Z, { channels: e.serializedSourceGuild.channels }),
                        (0, s.jsxs)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: W.protip,
                            children: [
                                (0, s.jsxs)('span', {
                                    className: W.protipText,
                                    children: [H.NW.string(H.t['8tvIiI']), ':']
                                }),
                                ' ',
                                H.NW.string(H.t.de7DpK)
                            ]
                        })
                    ]
                }),
                E.length > 0
                    ? (0, s.jsx)(s.Fragment, {
                          children: (0, s.jsx)(o.xJW, {
                              className: W.previewSection,
                              title: H.NW.string(H.t['RJ1e/v']),
                              children: (0, s.jsx)(M, { roles: E })
                          })
                      })
                    : null
            ]
        }),
        handleSubmit: () => {
            f.Z.acceptGuildTemplate(e.code, r, i)
                .then(() => {
                    (0, o.pTH)(), (0, m.Ou)();
                })
                .catch((e) => d(e));
        }
    };
}
function Z(e) {
    let { channels: t } = e,
        r = c()(t)
            .sortBy((e) => (null == e.parent_id ? 10000 * Number(e.id) : 10000 * Number(e.parent_id) + e.id))
            .map((e) => {
                let t = (function (e) {
                    let { type: t } = e;
                    return t === j.d4z.GUILD_VOICE ? o.gj8 : t === j.d4z.GUILD_CATEGORY ? x.Z : o.VL1;
                })(e);
                return (0, s.jsxs)(
                    'div',
                    {
                        className: i()(W.channel, { [W.category]: e.type === j.d4z.GUILD_CATEGORY }),
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
    let { roles: t } = e,
        r = t
            .slice()
            .reverse()
            .map((e) => (0, s.jsx)(T, { role: e }, e.id));
    return (0, s.jsx)('ul', {
        className: W.rolesWrapper,
        children: r
    });
}
function T(e) {
    var t;
    let { role: r } = e,
        n = null == r.color ? u.Z.unsafe_rawColors.PRIMARY_300.css : (0, d.Rf)(r.color);
    return (0, s.jsxs)('li', {
        className: W.role,
        style: { borderColor: null !== (t = (0, d.wK)(n, 0.6)) && void 0 !== t ? t : void 0 },
        children: [
            (0, s.jsx)(o.xko, {
                className: W.roleCircle,
                color: n
            }),
            (0, s.jsx)('div', {
                className: W.roleName,
                children: r.name
            })
        ]
    });
}
r(418757);
