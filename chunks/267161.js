n.r(t),
    n.d(t, {
        default: () => z,
        useAppSidebarState: () => H
    });
var r = n(255367),
    i = n(73800),
    l = n(114858),
    a = n(381814),
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
    y = n(35583),
    I = n(821020),
    v = n(522474),
    C = n(141321),
    S = n(210887),
    N = n(592125),
    T = n(430824),
    P = n(944486),
    j = n(914010),
    A = n(451478),
    Z = n(768581),
    x = n(998502),
    L = n(228488),
    w = n(950796),
    R = n(981631),
    D = n(918559),
    k = n(741764),
    M = n(388032),
    U = n(127941),
    G = n(374815);
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
function V(e, t) {
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
let H = (0, a.U)(() => ({ isOpen: !0 }));
function F() {
    let e,
        t = (0, l.TH)(),
        n = (0, s.e7)([P.Z], () => P.Z.getChannelId()),
        i = (0, s.e7)([j.Z], () => j.Z.getGuildId()),
        a = (0, s.e7)([N.Z], () => N.Z.getChannel(n), [n]),
        u = T.Z.getGuild(null != i ? i : null == a ? void 0 : a.guild_id),
        h = (0, m.Z)(),
        {
            application: f,
            isContextlessActivity: g,
            isActivityPanelMode: b
        } = (0, s.cj)([d.ZP, p.Z], () => {
            let e = d.ZP.getCurrentEmbeddedActivity();
            return {
                application: p.Z.getApplication(null == e ? void 0 : e.applicationId),
                isContextlessActivity: (null == e ? void 0 : e.location.kind) === o.E.CONTEXTLESS,
                isActivityPanelMode: d.ZP.getActivityPanelMode() === D.Ez.PANEL
            };
        }),
        E =
            null != f
                ? Z.ZP.getApplicationIconURL({
                      id: f.id,
                      icon: f.icon,
                      bot: f.bot
                  })
                : void 0,
        O = null;
    return (
        null != f && g && b
            ? ((e = f.name),
              (O = (0, r.jsx)('img', {
                  className: G.appIcon,
                  alt: M.intl.string(M.t.X4IxWF),
                  src: E,
                  'aria-hidden': !0,
                  draggable: !1
              })))
            : null != u
              ? ((O = h
                    ? (0, r.jsx)(c.r7p, { size: 'xs' })
                    : (0, r.jsx)(_.Z, {
                          guild: u,
                          size: _.Z.Sizes.MINI,
                          active: !0,
                          className: G.guildIcon
                      })),
                (e = u.name))
              : null != a && (a.isDM() || a.isGroupDM())
                ? ((e = M.intl.string(M.t.YUU0RE)), (O = (0, r.jsx)(c.gw7, { size: 'xs' })))
                : t.pathname.startsWith(R.Z5c.GLOBAL_DISCOVERY)
                  ? ((e = M.intl.string(M.t['4nEZLi'])), (O = (0, r.jsx)(c.Jmo, { size: 'xs' })))
                  : t.pathname.startsWith(R.Z5c.NITRO_HOME)
                    ? ((e = M.intl.string(M.t.Ipxkoq)), (O = (0, r.jsx)(c.SrA, { size: 'xs' })))
                    : t.pathname.startsWith(R.Z5c.COLLECTIBLES_SHOP)
                      ? ((e = M.intl.string(M.t.pWG4zc)), (O = (0, r.jsx)(c.EOn, { size: 'xs' })))
                      : t.pathname.startsWith(R.Z5c.FRIENDS)
                        ? ((e = M.intl.string(M.t.TdEu5e)), (O = (0, r.jsx)(c.iFz, { size: 'xs' })))
                        : t.pathname.startsWith(R.Z5c.FAMILY_CENTER) && ((e = M.intl.string(U.default.RZqaJi)), (O = (0, r.jsx)(c.BFJ, { size: 'xs' }))),
        null != e &&
            '' !== e &&
            (0, r.jsxs)('div', {
                className: G.title,
                children: [
                    O,
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        lineClamp: 1,
                        children: e
                    })
                ]
            })
    );
}
let z = i.memo(function () {
    i.useLayoutEffect(() => {
        x.ZP.setMinimumSize(k.J, k.N);
    }, []);
    let e = (0, g.TH)('AppTitleBar'),
        t = !H((e) => e.isOpen) && e,
        { hasBugReporterAccess: n } = h.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    i.useLayoutEffect(() => {
        x.ZP.setMinimumSize(k.J, k.N);
    }, []);
    let l = (0, s.e7)([S.Z], () => (S.Z.darkSidebar ? R.BRd.DARK : void 0)),
        a = (0, s.e7)([A.Z, v.Z], () => (0, L.rB)()),
        { notificationCenterVariant: o } = I.L.useExperiment({ location: 'AppTitleBar' });
    return a
        ? null
        : (0, r.jsx)(c.Wdt, {
              children: (e) =>
                  (0, r.jsx)(c.f6W, {
                      theme: l,
                      children: (i) =>
                          (0, r.jsx)(w.T, {
                              className: i,
                              leading:
                                  t &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(
                                              c.P3F,
                                              V(B({}, e), {
                                                  className: G.button,
                                                  onClick: () => {
                                                      H.setState({ isOpen: !H.getState().isOpen });
                                                  },
                                                  children: (0, r.jsx)(W, {})
                                              })
                                          ),
                                          (0, r.jsx)(c.P3F, {
                                              className: G.button,
                                              onClick: () => {
                                                  u.Z.open(R.oAB.ACCOUNT);
                                              },
                                              children: (0, r.jsx)(c.ewm, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                              title: (0, r.jsx)(F, {}),
                              trailing: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(b.Z, { className: G.button }),
                                      (0, r.jsx)(f.Z, {
                                          canShowReminder: !0,
                                          className: G.button
                                      }),
                                      null === o && (0, r.jsx)(C.Z, V(B({}, t ? {} : e), { className: G.button })),
                                      n ? (0, r.jsx)(O.Z, { className: G.button }) : (0, r.jsx)(E.Z, { className: G.button }),
                                      (0, r.jsx)(y.Z, { className: G.button })
                                  ]
                              })
                          })
                  })
          });
});
function W() {
    return (0, r.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: G.icon,
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
