n.r(t),
    n.d(t, {
        default: () => w,
        useAppSidebarState: () => j
    });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512969),
    o = n(15729),
    c = n(442837),
    d = n(481060),
    u = n(230711),
    h = n(174556),
    m = n(320007),
    p = n(540059),
    g = n(916069),
    _ = n(565138),
    f = n(300986),
    E = n(314451),
    I = n(35583),
    C = n(522474),
    v = n(141321),
    N = n(592125),
    T = n(430824),
    S = n(944486),
    Z = n(914010),
    x = n(451478),
    A = n(998502),
    b = n(228488),
    L = n(950796),
    y = n(981631),
    P = n(741764),
    O = n(388032),
    R = n(553512);
let j = (0, o.U)(() => ({ isOpen: !0 }));
function D() {
    let e;
    let t = (0, s.TH)(),
        n = (0, c.e7)([S.Z], () => S.Z.getChannelId()),
        l = (0, c.e7)([Z.Z], () => Z.Z.getGuildId()),
        r = (0, c.e7)([N.Z], () => N.Z.getChannel(n), [n]),
        o = T.Z.getGuild(l),
        u = (0, g.Z)(),
        h = null;
    return (
        null != o
            ? ((h = u
                  ? (0, i.jsx)(d.r7p, { size: 'xs' })
                  : (0, i.jsx)(_.Z, {
                        guild: o,
                        size: _.Z.Sizes.SMALLER,
                        active: !0,
                        className: a()(R.icon, R.guildIcon)
                    })),
              (e = o.name))
            : null != r && (r.isDM() || r.isGroupDM())
              ? ((e = O.intl.string(O.t.YUU0RE)), (h = (0, i.jsx)(d.gw7, { size: 'xs' })))
              : t.pathname.startsWith(y.Z5c.GLOBAL_DISCOVERY)
                ? ((e = O.intl.string(O.t['4nEZLi'])), (h = (0, i.jsx)(d.Jmo, { size: 'xs' })))
                : t.pathname.startsWith(y.Z5c.NITRO_HOME)
                  ? ((e = O.intl.string(O.t.Ipxkoq)), (h = (0, i.jsx)(d.SrA, { size: 'xs' })))
                  : t.pathname.startsWith(y.Z5c.COLLECTIBLES_SHOP)
                    ? ((e = O.intl.string(O.t.pWG4zc)), (h = (0, i.jsx)(d.EOn, { size: 'xs' })))
                    : t.pathname.startsWith(y.Z5c.FRIENDS)
                      ? ((e = O.intl.string(O.t.TdEu5e)), (h = (0, i.jsx)(d.iFz, { size: 'xs' })))
                      : t.pathname.startsWith(y.Z5c.FAMILY_CENTER) && ((e = O.intl.string(O.t.RZqaJi)), (h = (0, i.jsx)(d.BFJ, { size: 'xs' }))),
        null != e &&
            '' !== e &&
            (0, i.jsxs)('div', {
                className: R.guild,
                children: [
                    h,
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/medium',
                        children: e
                    })
                ]
            })
    );
}
function w() {
    l.useLayoutEffect(() => {
        A.ZP.setMinimumSize(P.J, P.N);
    }, []);
    let e = (0, p.TH)('AppTitleBar'),
        t = j((e) => e.isOpen),
        { hasBugReporterAccess: n } = h.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    return (l.useLayoutEffect(() => {
        A.ZP.setMinimumSize(P.J, P.N);
    }, []),
    (0, c.e7)([x.Z, C.Z], () => (0, b.rB)()))
        ? null
        : (0, i.jsx)(L.T, {
              leading:
                  !t &&
                  e &&
                  (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d.P3F, {
                              className: R.button,
                              onClick: () => {
                                  j.setState({ isOpen: !j.getState().isOpen });
                              },
                              children: (0, i.jsx)(M, {})
                          }),
                          (0, i.jsx)(d.P3F, {
                              className: R.button,
                              onClick: () => {
                                  u.Z.open(y.oAB.ACCOUNT);
                              },
                              children: (0, i.jsx)(d.ewm, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  }),
              title: (0, i.jsx)(D, {}),
              trailing: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(m.Z, {
                          canShowReminder: !0,
                          className: R.button
                      }),
                      (0, i.jsx)(v.Z, { className: R.button }),
                      n ? (0, i.jsx)(E.Z, { className: R.button }) : (0, i.jsx)(f.Z, { className: R.button }),
                      (0, i.jsx)(I.Z, { className: R.button })
                  ]
              })
          });
}
function M() {
    return (0, i.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: R.icon,
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
