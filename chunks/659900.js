r.d(t, { Z: () => W }), r(47120), r(978209);
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
    E = r(697698);
function W(e) {
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
                    className: E.icon,
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
                    className: E.guidelines,
                    children: H.NW.format(u.terms, { guidelinesURL: j.EYA.GUIDELINES })
                })
            ]
        }),
        W = e.serializedSourceGuild.roles.filter((e) => '@everyone' !== e.name);
    return {
        form: x,
        preview: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('div', { className: E.divider }),
                (0, s.jsxs)(o.xJW, {
                    className: E.previewSection,
                    title: H.NW.string(H.t.Zxk1OD),
                    children: [
                        (0, s.jsx)(Z, { channels: e.serializedSourceGuild.channels }),
                        (0, s.jsxs)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: E.protip,
                            children: [
                                (0, s.jsxs)('span', {
                                    className: E.protipText,
                                    children: [H.NW.string(H.t['8tvIiI']), ':']
                                }),
                                ' ',
                                H.NW.string(H.t.de7DpK)
                            ]
                        })
                    ]
                }),
                W.length > 0
                    ? (0, s.jsx)(o.xJW, {
                          className: E.previewSection,
                          title: H.NW.string(H.t['RJ1e/v']),
                          children: (0, s.jsx)(T, { roles: W })
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
                        className: i()(E.channel, { [E.category]: e.type === j.d4z.GUILD_CATEGORY }),
                        children: [
                            (0, s.jsx)(t, { className: E.channelIcon }),
                            (0, s.jsx)(o.Text, {
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
    return (0, s.jsx)('div', {
        className: E.channelsWrapper,
        children: r
    });
}
function T(e) {
    let { roles: t } = e,
        r = t
            .slice()
            .reverse()
            .map((e) => (0, s.jsx)(M, { role: e }, e.id));
    return (0, s.jsx)('ul', {
        className: E.rolesWrapper,
        children: r
    });
}
function M(e) {
    var t, r;
    let { role: n } = e,
        a = (0, o.dQu)(u.Z.colors.BORDER_SUBTLE).hex(),
        i = null == n.color ? a : (0, d.Rf)(n.color);
    return (0, s.jsxs)('li', {
        className: E.role,
        style: {
            borderColor: null != (t = (0, d.wK)(i, 0.6)) ? t : void 0,
            backgroundColor: null != (r = (0, d.wK)(i, 0.075)) ? r : void 0
        },
        children: [
            (0, s.jsx)(o.xko, {
                className: E.roleCircle,
                color: i
            }),
            (0, s.jsx)(o.Text, {
                variant: 'text-xs/medium',
                children: n.name
            })
        ]
    });
}
r(418757);
