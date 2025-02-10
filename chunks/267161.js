n.r(t),
    n.d(t, {
        default: () => D,
        useAppSidebarState: () => R
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
    C = n(210887),
    N = n(592125),
    v = n(430824),
    T = n(944486),
    S = n(914010),
    Z = n(451478),
    A = n(998502),
    b = n(228488),
    x = n(950796),
    L = n(981631),
    y = n(741764),
    P = n(388032),
    O = n(823603);
let R = (0, a.U)(() => ({ isOpen: !0 }));
function j() {
    let e;
    let t = (0, r.TH)(),
        n = (0, s.e7)([T.Z], () => T.Z.getChannelId()),
        l = (0, s.e7)([S.Z], () => S.Z.getGuildId()),
        a = (0, s.e7)([N.Z], () => N.Z.getChannel(n), [n]),
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
                        className: O.guildIcon
                    })),
              (e = c.name))
            : null != a && (a.isDM() || a.isGroupDM())
              ? ((e = P.intl.string(P.t.YUU0RE)), (u = (0, i.jsx)(o.gw7, { size: 'xs' })))
              : t.pathname.startsWith(L.Z5c.GLOBAL_DISCOVERY)
                ? ((e = P.intl.string(P.t['4nEZLi'])), (u = (0, i.jsx)(o.Jmo, { size: 'xs' })))
                : t.pathname.startsWith(L.Z5c.NITRO_HOME)
                  ? ((e = P.intl.string(P.t.Ipxkoq)), (u = (0, i.jsx)(o.SrA, { size: 'xs' })))
                  : t.pathname.startsWith(L.Z5c.COLLECTIBLES_SHOP)
                    ? ((e = P.intl.string(P.t.pWG4zc)), (u = (0, i.jsx)(o.EOn, { size: 'xs' })))
                    : t.pathname.startsWith(L.Z5c.FRIENDS)
                      ? ((e = P.intl.string(P.t.TdEu5e)), (u = (0, i.jsx)(o.iFz, { size: 'xs' })))
                      : t.pathname.startsWith(L.Z5c.FAMILY_CENTER) && ((e = P.intl.string(P.t.RZqaJi)), (u = (0, i.jsx)(o.BFJ, { size: 'xs' }))),
        null != e &&
            '' !== e &&
            (0, i.jsxs)('div', {
                className: O.title,
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
function D() {
    l.useLayoutEffect(() => {
        A.ZP.setMinimumSize(y.J, y.N);
    }, []);
    let e = (0, h.TH)('AppTitleBar'),
        t = !R((e) => e.isOpen) && e,
        { hasBugReporterAccess: n } = d.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    l.useLayoutEffect(() => {
        A.ZP.setMinimumSize(y.J, y.N);
    }, []);
    let r = (0, s.e7)([C.Z], () => (C.Z.darkSidebar ? L.BRd.DARK : void 0));
    return (0, s.e7)([Z.Z, E.Z], () => (0, b.rB)())
        ? null
        : (0, i.jsx)(o.f6W, {
              theme: r,
              children: (e) =>
                  (0, i.jsx)(x.T, {
                      className: e,
                      leading:
                          t &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.P3F, {
                                      className: O.button,
                                      onClick: () => {
                                          R.setState({ isOpen: !R.getState().isOpen });
                                      },
                                      children: (0, i.jsx)(w, {})
                                  }),
                                  (0, i.jsx)(o.P3F, {
                                      className: O.button,
                                      onClick: () => {
                                          c.Z.open(L.oAB.ACCOUNT);
                                      },
                                      children: (0, i.jsx)(o.ewm, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          }),
                      title: (0, i.jsx)(j, {}),
                      trailing: (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.Z, {
                                  canShowReminder: !0,
                                  className: O.button
                              }),
                              (0, i.jsx)(I.Z, { className: O.button }),
                              n ? (0, i.jsx)(_.Z, { className: O.button }) : (0, i.jsx)(g.Z, { className: O.button }),
                              (0, i.jsx)(f.Z, { className: O.button })
                          ]
                      })
                  })
          });
}
function w() {
    return (0, i.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: O.icon,
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
