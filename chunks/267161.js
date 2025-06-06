n.r(t),
    n.d(t, {
        default: () => W,
        useAppSidebarState: () => F
    });
var r = n(255367),
    i = n(73800),
    l = n(114858),
    a = n(97519),
    o = n(252258),
    s = n(442837),
    c = n(481060),
    u = n(230711),
    d = n(317381),
    p = n(812206),
    h = n(174556),
    f = n(320007),
    g = n(540059),
    m = n(916069),
    b = n(111666),
    _ = n(565138),
    E = n(300986),
    O = n(314451),
    I = n(35583),
    y = n(821020),
    v = n(370774),
    C = n(522474),
    S = n(141321),
    N = n(210887),
    T = n(592125),
    P = n(430824),
    j = n(944486),
    A = n(914010),
    x = n(451478),
    Z = n(768581),
    w = n(998502),
    L = n(228488),
    R = n(950796),
    D = n(981631),
    k = n(918559),
    M = n(741764),
    U = n(388032),
    G = n(524499),
    V = n(103609);
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = (0, a.U)(() => ({ isOpen: !0 }));
function z() {
    let e,
        t = (0, l.TH)(),
        n = (0, s.e7)([j.Z], () => j.Z.getChannelId()),
        i = (0, s.e7)([A.Z], () => A.Z.getGuildId()),
        a = (0, s.e7)([T.Z], () => T.Z.getChannel(n), [n]),
        u = null != i ? i : null == a ? void 0 : a.guild_id,
        h = (0, s.e7)([P.Z], () => P.Z.getGuild(u), [u]),
        f = (0, m.Z)(),
        g = (0, v.D)(),
        {
            application: b,
            isContextlessActivity: E,
            isActivityPanelMode: O
        } = (0, s.cj)([d.ZP, p.Z], () => {
            let e = d.ZP.getCurrentEmbeddedActivity();
            return {
                application: p.Z.getApplication(null == e ? void 0 : e.applicationId),
                isContextlessActivity: (null == e ? void 0 : e.location.kind) === o.E.CONTEXTLESS,
                isActivityPanelMode: d.ZP.getActivityPanelMode() === k.Ez.PANEL
            };
        }),
        I =
            null != b
                ? Z.ZP.getApplicationIconURL({
                      id: b.id,
                      icon: b.icon,
                      bot: b.bot
                  })
                : void 0,
        y = null;
    return (
        null != b && E && O
            ? ((e = b.name),
              (y = (0, r.jsx)('img', {
                  className: V.appIcon,
                  alt: U.intl.string(U.t.X4IxWF),
                  src: I,
                  'aria-hidden': !0,
                  draggable: !1
              })))
            : g
              ? ((e = U.intl.string(U.t.HcoRu7)), (y = (0, r.jsx)(c.Dkj, { size: 'xs' })))
              : null != h
                ? ((y = f
                      ? (0, r.jsx)(c.r7p, { size: 'xs' })
                      : (0, r.jsx)(_.Z, {
                            guild: h,
                            size: _.Z.Sizes.MINI,
                            active: !0,
                            className: V.guildIcon
                        })),
                  (e = h.name))
                : null != a && (a.isDM() || a.isGroupDM())
                  ? ((e = U.intl.string(U.t.YUU0RE)), (y = (0, r.jsx)(c.gw7, { size: 'xs' })))
                  : t.pathname.startsWith(D.Z5c.GLOBAL_DISCOVERY)
                    ? ((e = U.intl.string(U.t['4nEZLi'])), (y = (0, r.jsx)(c.Jmo, { size: 'xs' })))
                    : t.pathname.startsWith(D.Z5c.NITRO_HOME)
                      ? ((e = U.intl.string(U.t.Ipxkoq)), (y = (0, r.jsx)(c.SrA, { size: 'xs' })))
                      : t.pathname.startsWith(D.Z5c.COLLECTIBLES_SHOP)
                        ? ((e = U.intl.string(U.t.pWG4zc)), (y = (0, r.jsx)(c.EOn, { size: 'xs' })))
                        : t.pathname.startsWith(D.Z5c.FRIENDS)
                          ? ((e = U.intl.string(U.t.TdEu5e)), (y = (0, r.jsx)(c.iFz, { size: 'xs' })))
                          : t.pathname.startsWith(D.Z5c.FAMILY_CENTER) && ((e = U.intl.string(G.default.RZqaJi)), (y = (0, r.jsx)(c.BFJ, { size: 'xs' }))),
        null != e &&
            '' !== e &&
            (0, r.jsxs)('div', {
                className: V.title,
                children: [
                    y,
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        lineClamp: 1,
                        children: e
                    })
                ]
            })
    );
}
let W = i.memo(function () {
    i.useLayoutEffect(() => {
        w.ZP.setMinimumSize(M.J, M.N);
    }, []);
    let e = (0, g.TH)('AppTitleBar'),
        t = !F((e) => e.isOpen) && e,
        { hasBugReporterAccess: n } = h.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    i.useLayoutEffect(() => {
        w.ZP.setMinimumSize(M.J, M.N);
    }, []);
    let l = (0, s.e7)([N.Z], () => (N.Z.darkSidebar ? D.BRd.DARK : void 0)),
        a = (0, s.e7)([x.Z, C.Z], () => (0, L.rB)()),
        { notificationCenterVariant: o } = y.L.useExperiment({ location: 'AppTitleBar' });
    return a
        ? null
        : (0, r.jsx)(c.Wdt, {
              children: (e) =>
                  (0, r.jsx)(c.f6W, {
                      theme: l,
                      children: (i) =>
                          (0, r.jsx)(R.T, {
                              className: i,
                              leading:
                                  t &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(
                                              c.P3F,
                                              H(B({}, e), {
                                                  className: V.button,
                                                  onClick: () => {
                                                      F.setState({ isOpen: !F.getState().isOpen });
                                                  },
                                                  children: (0, r.jsx)(Y, {})
                                              })
                                          ),
                                          (0, r.jsx)(c.P3F, {
                                              className: V.button,
                                              onClick: () => {
                                                  u.Z.open(D.oAB.ACCOUNT);
                                              },
                                              children: (0, r.jsx)(c.ewm, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                              title: (0, r.jsx)(z, {}),
                              trailing: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(b.Z, { className: V.button }),
                                      (0, r.jsx)(f.Z, {
                                          canShowReminder: !0,
                                          className: V.button
                                      }),
                                      null === o && (0, r.jsx)(S.Z, H(B({}, t ? {} : e), { className: V.button })),
                                      n ? (0, r.jsx)(O.Z, { className: V.button }) : (0, r.jsx)(E.Z, { className: V.button }),
                                      (0, r.jsx)(I.Z, { className: V.button })
                                  ]
                              })
                          })
                  })
          });
});
function Y() {
    return (0, r.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: V.icon,
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
