n.r(t),
    n.d(t, {
        default: () => F,
        useAppSidebarState: () => B
    });
var r = n(200651),
    i = n(192379),
    l = n(512969),
    a = n(290486),
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
    I = n(522474),
    v = n(141321),
    C = n(210887),
    S = n(592125),
    N = n(430824),
    T = n(944486),
    P = n(914010),
    j = n(451478),
    A = n(768581),
    Z = n(998502),
    x = n(228488),
    w = n(950796),
    L = n(981631),
    R = n(918559),
    D = n(741764),
    k = n(388032),
    M = n(332495),
    U = n(103609);
function G(e) {
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
let B = (0, a.U)(() => ({ isOpen: !0 }));
function H() {
    let e,
        t = (0, l.TH)(),
        n = (0, s.e7)([T.Z], () => T.Z.getChannelId()),
        i = (0, s.e7)([P.Z], () => P.Z.getGuildId()),
        a = (0, s.e7)([S.Z], () => S.Z.getChannel(n), [n]),
        u = N.Z.getGuild(i),
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
                isActivityPanelMode: d.ZP.getActivityPanelMode() === R.Ez.PANEL
            };
        }),
        E =
            null != f
                ? A.ZP.getApplicationIconURL({
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
                  className: U.appIcon,
                  alt: k.intl.string(k.t.X4IxWF),
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
                          className: U.guildIcon
                      })),
                (e = u.name))
              : null != a && (a.isDM() || a.isGroupDM())
                ? ((e = k.intl.string(k.t.YUU0RE)), (O = (0, r.jsx)(c.gw7, { size: 'xs' })))
                : t.pathname.startsWith(L.Z5c.GLOBAL_DISCOVERY)
                  ? ((e = k.intl.string(k.t['4nEZLi'])), (O = (0, r.jsx)(c.Jmo, { size: 'xs' })))
                  : t.pathname.startsWith(L.Z5c.NITRO_HOME)
                    ? ((e = k.intl.string(k.t.Ipxkoq)), (O = (0, r.jsx)(c.SrA, { size: 'xs' })))
                    : t.pathname.startsWith(L.Z5c.COLLECTIBLES_SHOP)
                      ? ((e = k.intl.string(k.t.pWG4zc)), (O = (0, r.jsx)(c.EOn, { size: 'xs' })))
                      : t.pathname.startsWith(L.Z5c.FRIENDS)
                        ? ((e = k.intl.string(k.t.TdEu5e)), (O = (0, r.jsx)(c.iFz, { size: 'xs' })))
                        : t.pathname.startsWith(L.Z5c.FAMILY_CENTER) && ((e = k.intl.string(M.default.RZqaJi)), (O = (0, r.jsx)(c.BFJ, { size: 'xs' }))),
        null != e &&
            '' !== e &&
            (0, r.jsxs)('div', {
                className: U.title,
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
let F = i.memo(function () {
    i.useLayoutEffect(() => {
        Z.ZP.setMinimumSize(D.J, D.N);
    }, []);
    let e = (0, g.TH)('AppTitleBar'),
        t = !B((e) => e.isOpen) && e,
        { hasBugReporterAccess: n } = h.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    i.useLayoutEffect(() => {
        Z.ZP.setMinimumSize(D.J, D.N);
    }, []);
    let l = (0, s.e7)([C.Z], () => (C.Z.darkSidebar ? L.BRd.DARK : void 0));
    return (0, s.e7)([j.Z, I.Z], () => (0, x.rB)())
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
                                              V(G({}, e), {
                                                  className: U.button,
                                                  onClick: () => {
                                                      B.setState({ isOpen: !B.getState().isOpen });
                                                  },
                                                  children: (0, r.jsx)(z, {})
                                              })
                                          ),
                                          (0, r.jsx)(c.P3F, {
                                              className: U.button,
                                              onClick: () => {
                                                  u.Z.open(L.oAB.ACCOUNT);
                                              },
                                              children: (0, r.jsx)(c.ewm, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                              title: (0, r.jsx)(H, {}),
                              trailing: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(b.Z, { className: U.button }),
                                      (0, r.jsx)(f.Z, {
                                          canShowReminder: !0,
                                          className: U.button
                                      }),
                                      (0, r.jsx)(v.Z, V(G({}, t ? {} : e), { className: U.button })),
                                      n ? (0, r.jsx)(O.Z, { className: U.button }) : (0, r.jsx)(E.Z, { className: U.button }),
                                      (0, r.jsx)(y.Z, { className: U.button })
                                  ]
                              })
                          })
                  })
          });
});
function z() {
    return (0, r.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: U.icon,
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
