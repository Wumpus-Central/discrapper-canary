n.r(t),
    n.d(t, {
        default: function () {
            return Z;
        },
        useAppSidebarState: function () {
            return A;
        }
    });
var i = n(200651),
    r = n(192379),
    l = n(15729),
    a = n(442837),
    s = n(481060),
    o = n(230711),
    c = n(174556),
    d = n(320007),
    u = n(540059),
    h = n(565138),
    m = n(300986),
    p = n(314451),
    g = n(35583),
    f = n(141321),
    _ = n(592125),
    E = n(430824),
    I = n(944486),
    C = n(998502),
    N = n(950796),
    v = n(981631),
    S = n(741764),
    T = n(553512);
let A = (0, l.U)(() => ({ isOpen: !0 }));
function b() {
    let e = (0, a.e7)([I.Z], () => I.Z.getChannelId()),
        t = (0, a.e7)([_.Z], () => _.Z.getChannel(e), [e]),
        n = E.Z.getGuild(null == t ? void 0 : t.guild_id);
    return (
        null != n &&
        (0, i.jsxs)('div', {
            className: T.guild,
            children: [
                (0, i.jsx)(h.Z, {
                    guild: n,
                    size: h.Z.Sizes.SMALLER,
                    active: !0,
                    className: T.guildIcon
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/medium',
                    children: n.name
                })
            ]
        })
    );
}
function Z() {
    r.useLayoutEffect(() => {
        C.ZP.setMinimumSize(S.J, S.N);
    }, []);
    let e = (0, u.TH)('AppTitleBar'),
        t = A((e) => e.isOpen),
        { hasBugReporterAccess: n } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    return (
        r.useLayoutEffect(() => {
            C.ZP.setMinimumSize(S.J, S.N);
        }, []),
        (0, i.jsx)(N.T, {
            leading:
                !t &&
                e &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Clickable, {
                            className: T.button,
                            onClick: () => {
                                A.setState({ isOpen: !A.getState().isOpen });
                            },
                            children: (0, i.jsx)(x, {})
                        }),
                        (0, i.jsx)(s.Clickable, {
                            className: T.button,
                            onClick: () => {
                                o.Z.open(v.oAB.ACCOUNT);
                            },
                            children: (0, i.jsx)(s.SettingsIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
            title: !1,
            trailing: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.Z, {
                        canShowReminder: !0,
                        className: T.button
                    }),
                    (0, i.jsx)(f.Z, { className: T.button }),
                    n ? (0, i.jsx)(p.Z, { className: T.button }) : (0, i.jsx)(m.Z, { className: T.button }),
                    (0, i.jsx)(g.Z, { className: T.button })
                ]
            })
        })
    );
}
function x() {
    return (0, i.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: T.icon,
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        children: [
            (0, i.jsx)('rect', {
                width: '18',
                height: '18',
                x: '3',
                y: '3',
                rx: '2'
            }),
            (0, i.jsx)('path', { d: 'M9 3v18' })
        ]
    });
}
