n.r(t),
    n.d(t, {
        default: function () {
            return A;
        },
        useAppSidebarState: function () {
            return T;
        }
    });
var i = n(200651),
    r = n(192379),
    l = n(15729),
    a = n(442837),
    s = n(481060),
    o = n(230711),
    c = n(174556),
    d = n(540059),
    u = n(565138),
    h = n(300986),
    m = n(314451),
    p = n(35583),
    g = n(141321),
    f = n(592125),
    _ = n(430824),
    E = n(944486),
    I = n(998502),
    C = n(950796),
    N = n(981631),
    v = n(741764),
    S = n(553512);
let T = (0, l.U)(() => ({ isOpen: !0 }));
function b() {
    let e = (0, a.e7)([E.Z], () => E.Z.getChannelId()),
        t = (0, a.e7)([f.Z], () => f.Z.getChannel(e), [e]),
        n = _.Z.getGuild(null == t ? void 0 : t.guild_id);
    return (
        null != n &&
        (0, i.jsxs)('div', {
            className: S.guild,
            children: [
                (0, i.jsx)(u.Z, {
                    guild: n,
                    size: u.Z.Sizes.SMALLER,
                    active: !0,
                    className: S.guildIcon
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/medium',
                    children: n.name
                })
            ]
        })
    );
}
function A() {
    r.useLayoutEffect(() => {
        I.ZP.setMinimumSize(v.J, v.N);
    }, []);
    let e = (0, d.TH)('AppTitleBar'),
        t = T((e) => e.isOpen),
        { hasBugReporterAccess: n } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    return (
        r.useLayoutEffect(() => {
            I.ZP.setMinimumSize(v.J, v.N);
        }, []),
        (0, i.jsx)(C.T, {
            leading:
                !t &&
                e &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Clickable, {
                            className: S.button,
                            onClick: () => {
                                T.setState({ isOpen: !T.getState().isOpen });
                            },
                            children: (0, i.jsx)(Z, {})
                        }),
                        (0, i.jsx)(s.Clickable, {
                            className: S.button,
                            onClick: () => {
                                o.Z.open(N.oAB.ACCOUNT);
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
                children: [(0, i.jsx)(g.Z, { className: S.button }), n ? (0, i.jsx)(m.Z, { className: S.button }) : (0, i.jsx)(h.Z, { className: S.button }), (0, i.jsx)(p.Z, { className: S.button })]
            })
        })
    );
}
function Z() {
    return (0, i.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: S.icon,
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
