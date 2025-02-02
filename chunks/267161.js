n.r(t),
    n.d(t, {
        default: () => j,
        useAppSidebarState: () => O
    });
var i = n(200651),
    l = n(192379),
    r = n(512969),
    a = n(15729),
    s = n(442837),
    o = n(481060),
    c = n(230711),
    d = n(174556),
    u = n(320007),
    h = n(540059),
    m = n(916069),
    p = n(565138),
    g = n(300986),
    _ = n(314451),
    f = n(35583),
    E = n(522474),
    I = n(141321),
    C = n(592125),
    v = n(430824),
    N = n(944486),
    T = n(914010),
    S = n(451478),
    Z = n(998502),
    x = n(228488),
    A = n(950796),
    b = n(981631),
    L = n(741764),
    y = n(388032),
    P = n(553512);
let O = (0, a.U)(() => ({ isOpen: !0 }));
function R() {
    let e;
    let t = (0, r.TH)(),
        n = (0, s.e7)([N.Z], () => N.Z.getChannelId()),
        l = (0, s.e7)([T.Z], () => T.Z.getGuildId()),
        a = (0, s.e7)([C.Z], () => C.Z.getChannel(n), [n]),
        c = v.Z.getGuild(l),
        d = (0, m.Z)(),
        u = null;
    return (
        null != c
            ? ((u = d
                  ? (0, i.jsx)(o.r7p, { size: 'xs' })
                  : (0, i.jsx)(p.Z, {
                        guild: c,
                        size: p.Z.Sizes.MINI,
                        active: !0,
                        className: P.guildIcon
                    })),
              (e = c.name))
            : null != a && (a.isDM() || a.isGroupDM())
              ? ((e = y.intl.string(y.t.YUU0RE)), (u = (0, i.jsx)(o.gw7, { size: 'xs' })))
              : t.pathname.startsWith(b.Z5c.GLOBAL_DISCOVERY)
                ? ((e = y.intl.string(y.t['4nEZLi'])), (u = (0, i.jsx)(o.Jmo, { size: 'xs' })))
                : t.pathname.startsWith(b.Z5c.NITRO_HOME)
                  ? ((e = y.intl.string(y.t.Ipxkoq)), (u = (0, i.jsx)(o.SrA, { size: 'xs' })))
                  : t.pathname.startsWith(b.Z5c.COLLECTIBLES_SHOP)
                    ? ((e = y.intl.string(y.t.pWG4zc)), (u = (0, i.jsx)(o.EOn, { size: 'xs' })))
                    : t.pathname.startsWith(b.Z5c.FRIENDS)
                      ? ((e = y.intl.string(y.t.TdEu5e)), (u = (0, i.jsx)(o.iFz, { size: 'xs' })))
                      : t.pathname.startsWith(b.Z5c.FAMILY_CENTER) && ((e = y.intl.string(y.t.RZqaJi)), (u = (0, i.jsx)(o.BFJ, { size: 'xs' }))),
        null != e &&
            '' !== e &&
            (0, i.jsxs)('div', {
                className: P.title,
                children: [
                    u,
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        lineClamp: 1,
                        children: e
                    })
                ]
            })
    );
}
function j() {
    l.useLayoutEffect(() => {
        Z.ZP.setMinimumSize(L.J, L.N);
    }, []);
    let e = (0, h.TH)('AppTitleBar'),
        t = O((e) => e.isOpen),
        { hasBugReporterAccess: n } = d.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    return (l.useLayoutEffect(() => {
        Z.ZP.setMinimumSize(L.J, L.N);
    }, []),
    (0, s.e7)([S.Z, E.Z], () => (0, x.rB)()))
        ? null
        : (0, i.jsx)(A.T, {
              leading:
                  !t &&
                  e &&
                  (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.P3F, {
                              className: P.button,
                              onClick: () => {
                                  O.setState({ isOpen: !O.getState().isOpen });
                              },
                              children: (0, i.jsx)(D, {})
                          }),
                          (0, i.jsx)(o.P3F, {
                              className: P.button,
                              onClick: () => {
                                  c.Z.open(b.oAB.ACCOUNT);
                              },
                              children: (0, i.jsx)(o.ewm, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  }),
              title: (0, i.jsx)(R, {}),
              trailing: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(u.Z, {
                          canShowReminder: !0,
                          className: P.button
                      }),
                      (0, i.jsx)(I.Z, { className: P.button }),
                      n ? (0, i.jsx)(_.Z, { className: P.button }) : (0, i.jsx)(g.Z, { className: P.button }),
                      (0, i.jsx)(f.Z, { className: P.button })
                  ]
              })
          });
}
function D() {
    return (0, i.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: P.icon,
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
