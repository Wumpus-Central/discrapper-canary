(n.r(t),
    n.d(t, {
        default: () => V,
        useAppSidebarState: () => G
    }));
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
    O = n(821020),
    E = n(370774),
    y = n(340137),
    I = n(522474),
    v = n(141321),
    C = n(210887),
    S = n(592125),
    N = n(430824),
    T = n(944486),
    P = n(914010),
    j = n(451478),
    A = n(998502),
    Z = n(228488),
    x = n(950796),
    L = n(981631),
    w = n(741764),
    R = n(388032),
    D = n(916723),
    k = n(103609);
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function U(e, t) {
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
let G = (0, a.U)(() => ({ isOpen: !0 }));
function B() {
    let e,
        t = (0, l.TH)(),
        n = (0, o.e7)([T.Z], () => T.Z.getChannelId()),
        i = (0, o.e7)([P.Z], () => P.Z.getGuildId()),
        a = (0, o.e7)([S.Z], () => S.Z.getChannel(n), [n]),
        c = null != i ? i : null == a ? void 0 : a.guild_id,
        u = (0, o.e7)([N.Z], () => N.Z.getGuild(c), [c]),
        d = (0, h.Z)(),
        p = (0, E.D)(),
        f = null;
    return (
        p
            ? ((e = R.intl.string(R.t.HcoRu7)), (f = (0, r.jsx)(s.Dkj, { size: 'xs' })))
            : null != u
              ? ((f = d
                    ? (0, r.jsx)(s.r7p, { size: 'xs' })
                    : (0, r.jsx)(g.Z, {
                          guild: u,
                          size: g.Z.Sizes.MINI,
                          active: !0,
                          className: k.guildIcon
                      })),
                (e = u.name))
              : null != a && (a.isDM() || a.isGroupDM())
                ? ((e = R.intl.string(R.t.YUU0RE)), (f = (0, r.jsx)(s.gw7, { size: 'xs' })))
                : t.pathname.startsWith(L.Z5c.GLOBAL_DISCOVERY)
                  ? ((e = R.intl.string(R.t['4nEZLi'])), (f = (0, r.jsx)(s.Jmo, { size: 'xs' })))
                  : t.pathname.startsWith(L.Z5c.NITRO_HOME)
                    ? ((e = R.intl.string(R.t.Ipxkoq)), (f = (0, r.jsx)(s.SrA, { size: 'xs' })))
                    : t.pathname.startsWith(L.Z5c.COLLECTIBLES_SHOP)
                      ? ((e = R.intl.string(R.t.pWG4zc)), (f = (0, r.jsx)(s.EOn, { size: 'xs' })))
                      : t.pathname.startsWith(L.Z5c.FRIENDS)
                        ? ((e = R.intl.string(R.t.TdEu5e)), (f = (0, r.jsx)(s.iFz, { size: 'xs' })))
                        : t.pathname.startsWith(L.Z5c.FAMILY_CENTER) && ((e = R.intl.string(D.default.RZqaJi)), (f = (0, r.jsx)(s.BFJ, { size: 'xs' }))),
        null != e &&
            '' !== e &&
            (0, r.jsxs)('div', {
                className: k.title,
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
let V = i.memo(function () {
    i.useLayoutEffect(() => {
        A.ZP.setMinimumSize(w.J, w.N);
    }, []);
    let e = (0, p.T)('AppTitleBar'),
        t = !G((e) => e.isOpen) && e,
        { hasBugReporterAccess: n } = u.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    i.useLayoutEffect(() => {
        A.ZP.setMinimumSize(w.J, w.N);
    }, []);
    let l = (0, o.e7)([C.Z], () => (C.Z.darkSidebar ? L.BRd.DARK : void 0)),
        a = (0, o.e7)([j.Z, I.Z], () => (0, Z.rB)()),
        { notificationCenterVariant: h, entrypoint: g } = O.Lk.useExperiment({ location: 'AppTitleBar' });
    return a
        ? null
        : (0, r.jsx)(s.Wdt, {
              children: (e) =>
                  (0, r.jsx)(s.f6W, {
                      theme: l,
                      children: (i) =>
                          (0, r.jsx)(x.T, {
                              className: i,
                              leading: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      t &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(
                                                      s.P3F,
                                                      U(M({}, e), {
                                                          className: k.button,
                                                          onClick: () => {
                                                              G.setState({ isOpen: !G.getState().isOpen });
                                                          },
                                                          children: (0, r.jsx)(H, {})
                                                      })
                                                  ),
                                                  (0, r.jsx)(s.P3F, {
                                                      className: k.button,
                                                      onClick: () => {
                                                          c.Z.open(L.oAB.ACCOUNT);
                                                      },
                                                      children: (0, r.jsx)(s.ewm, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      })
                                                  })
                                              ]
                                          }),
                                      null !== h && g === O.u3.TITLE_BAR_LEFT && (0, r.jsx)(y.Z, {})
                                  ]
                              }),
                              title: (0, r.jsx)(B, {}),
                              trailing: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(f.Z, { className: k.button }),
                                      (0, r.jsx)(d.Z, {
                                          canShowReminder: !0,
                                          className: k.button
                                      }),
                                      null === h && (0, r.jsx)(v.Z, U(M({}, t ? {} : e), { className: k.button })),
                                      n ? (0, r.jsx)(b.Z, { className: k.button }) : (0, r.jsx)(m.Z, { className: k.button }),
                                      (0, r.jsx)(_.Z, { className: k.button })
                                  ]
                              })
                          })
                  })
          });
});
function H() {
    return (0, r.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: k.icon,
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
