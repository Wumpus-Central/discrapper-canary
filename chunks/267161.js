n.r(t),
    n.d(t, {
        default: () => B,
        useAppSidebarState: () => U
    });
var r = n(255367),
    i = n(73800),
    l = n(114858),
    a = n(97519),
    o = n(442837),
    s = n(481060),
    c = n(230711),
    u = n(174556),
    d = n(320007),
    p = n(540059),
    h = n(916069),
    f = n(111666),
    g = n(565138),
    m = n(300986),
    b = n(314451),
    _ = n(35583),
    E = n(821020),
    O = n(370774),
    y = n(522474),
    I = n(141321),
    v = n(210887),
    C = n(592125),
    S = n(430824),
    N = n(944486),
    T = n(914010),
    P = n(451478),
    j = n(998502),
    A = n(228488),
    Z = n(950796),
    x = n(981631),
    w = n(741764),
    L = n(388032),
    R = n(916723),
    D = n(103609);
function k(e) {
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
function M(e, t) {
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
let U = (0, a.U)(() => ({ isOpen: !0 }));
function G() {
    let e,
        t = (0, l.TH)(),
        n = (0, o.e7)([N.Z], () => N.Z.getChannelId()),
        i = (0, o.e7)([T.Z], () => T.Z.getGuildId()),
        a = (0, o.e7)([C.Z], () => C.Z.getChannel(n), [n]),
        c = null != i ? i : null == a ? void 0 : a.guild_id,
        u = (0, o.e7)([S.Z], () => S.Z.getGuild(c), [c]),
        d = (0, h.Z)(),
        p = (0, O.D)(),
        f = null;
    return (
        p && ((e = L.intl.string(L.t.HcoRu7)), (f = (0, r.jsx)(s.Dkj, { size: 'xs' }))),
        null != u
            ? ((f = d
                  ? (0, r.jsx)(s.r7p, { size: 'xs' })
                  : (0, r.jsx)(g.Z, {
                        guild: u,
                        size: g.Z.Sizes.MINI,
                        active: !0,
                        className: D.guildIcon
                    })),
              (e = u.name))
            : null != a && (a.isDM() || a.isGroupDM())
              ? ((e = L.intl.string(L.t.YUU0RE)), (f = (0, r.jsx)(s.gw7, { size: 'xs' })))
              : t.pathname.startsWith(x.Z5c.GLOBAL_DISCOVERY)
                ? ((e = L.intl.string(L.t['4nEZLi'])), (f = (0, r.jsx)(s.Jmo, { size: 'xs' })))
                : t.pathname.startsWith(x.Z5c.NITRO_HOME)
                  ? ((e = L.intl.string(L.t.Ipxkoq)), (f = (0, r.jsx)(s.SrA, { size: 'xs' })))
                  : t.pathname.startsWith(x.Z5c.COLLECTIBLES_SHOP)
                    ? ((e = L.intl.string(L.t.pWG4zc)), (f = (0, r.jsx)(s.EOn, { size: 'xs' })))
                    : t.pathname.startsWith(x.Z5c.FRIENDS)
                      ? ((e = L.intl.string(L.t.TdEu5e)), (f = (0, r.jsx)(s.iFz, { size: 'xs' })))
                      : t.pathname.startsWith(x.Z5c.FAMILY_CENTER) && ((e = L.intl.string(R.default.RZqaJi)), (f = (0, r.jsx)(s.BFJ, { size: 'xs' }))),
        null != e &&
            '' !== e &&
            (0, r.jsxs)('div', {
                className: D.title,
                children: [
                    f,
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        lineClamp: 1,
                        children: e
                    })
                ]
            })
    );
}
let B = i.memo(function () {
    i.useLayoutEffect(() => {
        j.ZP.setMinimumSize(w.J, w.N);
    }, []);
    let e = (0, p.T)('AppTitleBar'),
        t = !U((e) => e.isOpen) && e,
        { hasBugReporterAccess: n } = u.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    i.useLayoutEffect(() => {
        j.ZP.setMinimumSize(w.J, w.N);
    }, []);
    let l = (0, o.e7)([v.Z], () => (v.Z.darkSidebar ? x.BRd.DARK : void 0)),
        a = (0, o.e7)([P.Z, y.Z], () => (0, A.rB)()),
        { notificationCenterVariant: h } = E.Lk.useExperiment({ location: 'AppTitleBar' });
    return a
        ? null
        : (0, r.jsx)(s.Wdt, {
              children: (e) =>
                  (0, r.jsx)(s.f6W, {
                      theme: l,
                      children: (i) =>
                          (0, r.jsx)(Z.T, {
                              className: i,
                              leading:
                                  t &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(
                                              s.P3F,
                                              M(k({}, e), {
                                                  className: D.button,
                                                  onClick: () => {
                                                      U.setState({ isOpen: !U.getState().isOpen });
                                                  },
                                                  children: (0, r.jsx)(V, {})
                                              })
                                          ),
                                          (0, r.jsx)(s.P3F, {
                                              className: D.button,
                                              onClick: () => {
                                                  c.Z.open(x.oAB.ACCOUNT);
                                              },
                                              children: (0, r.jsx)(s.ewm, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                              title: (0, r.jsx)(G, {}),
                              trailing: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(f.Z, { className: D.button }),
                                      (0, r.jsx)(d.Z, {
                                          canShowReminder: !0,
                                          className: D.button
                                      }),
                                      null === h && (0, r.jsx)(I.Z, M(k({}, t ? {} : e), { className: D.button })),
                                      n ? (0, r.jsx)(b.Z, { className: D.button }) : (0, r.jsx)(m.Z, { className: D.button }),
                                      (0, r.jsx)(_.Z, { className: D.button })
                                  ]
                              })
                          })
                  })
          });
});
function V() {
    return (0, r.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: D.icon,
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
