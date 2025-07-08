(n.r(t),
    n.d(t, {
        default: () => W,
        useAppSidebarState: () => F
    }));
var r = n(255367),
    i = n(73800),
    l = n(114858),
    a = n(97519),
    o = n(442837),
    s = n(481060),
    c = n(230711),
    u = n(812206),
    d = n(174556),
    p = n(320007),
    h = n(540059),
    f = n(916069),
    g = n(591472),
    m = n(111666),
    b = n(565138),
    _ = n(300986),
    E = n(314451),
    O = n(35583),
    y = n(821020),
    I = n(370774),
    v = n(340137),
    C = n(522474),
    S = n(141321),
    N = n(210887),
    T = n(592125),
    P = n(430824),
    j = n(944486),
    A = n(914010),
    Z = n(451478),
    x = n(768581),
    L = n(998502),
    w = n(228488),
    R = n(950796),
    D = n(981631),
    k = n(741764),
    M = n(408491),
    U = n(388032),
    G = n(916723),
    B = n(103609);
function V(e) {
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
        n = (0, o.e7)([j.Z], () => j.Z.getChannelId()),
        i = (0, o.e7)([A.Z], () => A.Z.getGuildId()),
        a = (0, o.e7)([T.Z], () => T.Z.getChannel(n), [n]),
        c = null != i ? i : null == a ? void 0 : a.guild_id,
        d = (0, o.e7)([P.Z], () => P.Z.getGuild(c), [c]),
        p = (0, f.Z)(),
        h = (0, I.D)(),
        { application: m, isFrameInFocusedMode: _ } = (0, o.cj)([u.Z, g.Z], () => {
            let e = g.Z.getConnectedFrame();
            return {
                application: u.Z.getApplication(null == e ? void 0 : e.applicationId),
                isFrameInFocusedMode: g.Z.getFrameLayoutMode() === M.U.FOCUSED
            };
        }),
        E =
            null != m
                ? x.ZP.getApplicationIconURL({
                      id: m.id,
                      icon: m.icon,
                      bot: m.bot
                  })
                : void 0,
        O = null;
    return (
        null != m && _
            ? ((e = m.name),
              (O = (0, r.jsx)('img', {
                  className: B.appIcon,
                  alt: U.intl.string(U.t.X4IxWF),
                  src: E,
                  'aria-hidden': !0,
                  draggable: !1
              })))
            : h
              ? ((e = U.intl.string(U.t.HcoRu7)), (O = (0, r.jsx)(s.Dkj, { size: 'xs' })))
              : null != d
                ? ((O = p
                      ? (0, r.jsx)(s.r7p, { size: 'xs' })
                      : (0, r.jsx)(b.Z, {
                            guild: d,
                            size: b.Z.Sizes.MINI,
                            active: !0,
                            className: B.guildIcon
                        })),
                  (e = d.name))
                : null != a && (a.isDM() || a.isGroupDM())
                  ? ((e = U.intl.string(U.t.YUU0RE)), (O = (0, r.jsx)(s.gw7, { size: 'xs' })))
                  : t.pathname.startsWith(D.Z5c.GLOBAL_DISCOVERY)
                    ? ((e = U.intl.string(U.t['4nEZLi'])), (O = (0, r.jsx)(s.Jmo, { size: 'xs' })))
                    : t.pathname.startsWith(D.Z5c.NITRO_HOME)
                      ? ((e = U.intl.string(U.t.Ipxkoq)), (O = (0, r.jsx)(s.SrA, { size: 'xs' })))
                      : t.pathname.startsWith(D.Z5c.COLLECTIBLES_SHOP)
                        ? ((e = U.intl.string(U.t.pWG4zc)), (O = (0, r.jsx)(s.EOn, { size: 'xs' })))
                        : t.pathname.startsWith(D.Z5c.FRIENDS)
                          ? ((e = U.intl.string(U.t.TdEu5e)), (O = (0, r.jsx)(s.iFz, { size: 'xs' })))
                          : t.pathname.startsWith(D.Z5c.FAMILY_CENTER) && ((e = U.intl.string(G.default.RZqaJi)), (O = (0, r.jsx)(s.BFJ, { size: 'xs' }))),
        null != e &&
            '' !== e &&
            (0, r.jsxs)('div', {
                className: B.title,
                children: [
                    O,
                    (0, r.jsx)(s.Text, {
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
        L.ZP.setMinimumSize(k.J, k.N);
    }, []);
    let e = (0, h.T)('AppTitleBar'),
        t = !F((e) => e.isOpen) && e,
        { hasBugReporterAccess: n } = d.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    i.useLayoutEffect(() => {
        L.ZP.setMinimumSize(k.J, k.N);
    }, []);
    let l = (0, o.e7)([N.Z], () => (N.Z.darkSidebar ? D.BRd.DARK : void 0)),
        a = (0, o.e7)([Z.Z, C.Z], () => (0, w.rB)()),
        { notificationCenterVariant: u, entrypoint: f } = y.Lk.useExperiment({ location: 'AppTitleBar' });
    return a
        ? null
        : (0, r.jsx)(s.Wdt, {
              children: (e) =>
                  (0, r.jsx)(s.f6W, {
                      theme: l,
                      children: (i) =>
                          (0, r.jsx)(R.T, {
                              className: i,
                              leading: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      t &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)(
                                                      s.P3F,
                                                      H(V({}, e), {
                                                          className: B.button,
                                                          onClick: () => {
                                                              F.setState({ isOpen: !F.getState().isOpen });
                                                          },
                                                          children: (0, r.jsx)(Y, {})
                                                      })
                                                  ),
                                                  (0, r.jsx)(s.P3F, {
                                                      className: B.button,
                                                      onClick: () => {
                                                          c.Z.open(D.oAB.ACCOUNT);
                                                      },
                                                      children: (0, r.jsx)(s.ewm, {
                                                          size: 'xs',
                                                          color: 'currentColor'
                                                      })
                                                  })
                                              ]
                                          }),
                                      null !== u && f === y.u3.TITLE_BAR_LEFT && (0, r.jsx)(v.Z, {})
                                  ]
                              }),
                              title: (0, r.jsx)(z, {}),
                              trailing: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(m.Z, { className: B.button }),
                                      (0, r.jsx)(p.Z, {
                                          canShowReminder: !0,
                                          className: B.button
                                      }),
                                      null === u && (0, r.jsx)(S.Z, H(V({}, t ? {} : e), { className: B.button })),
                                      n ? (0, r.jsx)(E.Z, { className: B.button }) : (0, r.jsx)(_.Z, { className: B.button }),
                                      (0, r.jsx)(O.Z, { className: B.button })
                                  ]
                              })
                          })
                  })
          });
});
function Y() {
    return (0, r.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: B.icon,
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
