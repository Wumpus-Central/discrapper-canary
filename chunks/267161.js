n.r(t),
    n.d(t, {
        default: () => D,
        useAppSidebarState: () => w
    });
var r = n(200651),
    i = n(192379),
    l = n(512969),
    o = n(15729),
    a = n(442837),
    s = n(481060),
    c = n(230711),
    u = n(174556),
    d = n(320007),
    p = n(540059),
    h = n(916069),
    f = n(565138),
    g = n(300986),
    m = n(314451),
    b = n(35583),
    _ = n(522474),
    E = n(141321),
    O = n(210887),
    N = n(592125),
    v = n(430824),
    y = n(944486),
    I = n(914010),
    C = n(451478),
    S = n(998502),
    T = n(228488),
    P = n(950796),
    j = n(981631),
    A = n(741764),
    Z = n(388032),
    x = n(635357),
    L = n(963981);
let w = (0, o.U)(() => ({ isOpen: !0 }));
function R() {
    let e;
    let t = (0, l.TH)(),
        n = (0, a.e7)([y.Z], () => y.Z.getChannelId()),
        i = (0, a.e7)([I.Z], () => I.Z.getGuildId()),
        o = (0, a.e7)([N.Z], () => N.Z.getChannel(n), [n]),
        c = v.Z.getGuild(i),
        u = (0, h.Z)(),
        d = null;
    return (
        null != c
            ? ((d = u
                  ? (0, r.jsx)(s.r7p, { size: 'xs' })
                  : (0, r.jsx)(f.Z, {
                        guild: c,
                        size: f.Z.Sizes.MINI,
                        active: !0,
                        className: L.guildIcon
                    })),
              (e = c.name))
            : null != o && (o.isDM() || o.isGroupDM())
              ? ((e = Z.NW.string(Z.t.YUU0RE)), (d = (0, r.jsx)(s.gw7, { size: 'xs' })))
              : t.pathname.startsWith(j.Z5c.GLOBAL_DISCOVERY)
                ? ((e = Z.NW.string(Z.t['4nEZLi'])), (d = (0, r.jsx)(s.Jmo, { size: 'xs' })))
                : t.pathname.startsWith(j.Z5c.NITRO_HOME)
                  ? ((e = Z.NW.string(Z.t.Ipxkoq)), (d = (0, r.jsx)(s.SrA, { size: 'xs' })))
                  : t.pathname.startsWith(j.Z5c.COLLECTIBLES_SHOP)
                    ? ((e = Z.NW.string(Z.t.pWG4zc)), (d = (0, r.jsx)(s.EOn, { size: 'xs' })))
                    : t.pathname.startsWith(j.Z5c.FRIENDS)
                      ? ((e = Z.NW.string(Z.t.TdEu5e)), (d = (0, r.jsx)(s.iFz, { size: 'xs' })))
                      : t.pathname.startsWith(j.Z5c.FAMILY_CENTER) && ((e = Z.NW.string(x.Z.RZqaJi)), (d = (0, r.jsx)(s.BFJ, { size: 'xs' }))),
        null != e &&
            '' !== e &&
            (0, r.jsxs)('div', {
                className: L.title,
                children: [
                    d,
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        lineClamp: 1,
                        children: e
                    })
                ]
            })
    );
}
let D = i.memo(function () {
    i.useLayoutEffect(() => {
        S.ZP.setMinimumSize(A.J, A.N);
    }, []);
    let e = (0, p.TH)('AppTitleBar'),
        t = !w((e) => e.isOpen) && e,
        { hasBugReporterAccess: n } = u.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    i.useLayoutEffect(() => {
        S.ZP.setMinimumSize(A.J, A.N);
    }, []);
    let l = (0, a.e7)([O.Z], () => (O.Z.darkSidebar ? j.BRd.DARK : void 0));
    return (0, a.e7)([C.Z, _.Z], () => (0, T.rB)())
        ? null
        : (0, r.jsx)(s.f6W, {
              theme: l,
              children: (e) =>
                  (0, r.jsx)(P.T, {
                      className: e,
                      leading:
                          t &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(s.P3F, {
                                      className: L.button,
                                      onClick: () => {
                                          w.setState({ isOpen: !w.getState().isOpen });
                                      },
                                      children: (0, r.jsx)(k, {})
                                  }),
                                  (0, r.jsx)(s.P3F, {
                                      className: L.button,
                                      onClick: () => {
                                          c.Z.open(j.oAB.ACCOUNT);
                                      },
                                      children: (0, r.jsx)(s.ewm, {
                                          size: 'xs',
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          }),
                      title: (0, r.jsx)(R, {}),
                      trailing: (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.Z, {
                                  canShowReminder: !0,
                                  className: L.button
                              }),
                              (0, r.jsx)(E.Z, { className: L.button }),
                              n ? (0, r.jsx)(m.Z, { className: L.button }) : (0, r.jsx)(g.Z, { className: L.button }),
                              (0, r.jsx)(b.Z, { className: L.button })
                          ]
                      })
                  })
          });
});
function k() {
    return (0, r.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: L.icon,
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        children: [
            (0, r.jsx)('rect', {
                width: '18',
                height: '18',
                x: '3',
                y: '3',
                rx: '2'
            }),
            (0, r.jsx)('path', { d: 'M9 3v18' })
        ]
    });
}
