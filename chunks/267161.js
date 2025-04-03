n.r(t),
    n.d(t, {
        default: () => U,
        useAppSidebarState: () => k
    });
var r = n(200651),
    i = n(192379),
    l = n(512969),
    a = n(230383),
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
    E = n(522474),
    O = n(141321),
    N = n(210887),
    y = n(592125),
    I = n(430824),
    v = n(944486),
    C = n(914010),
    S = n(451478),
    T = n(998502),
    P = n(228488),
    j = n(950796),
    A = n(981631),
    Z = n(741764),
    x = n(388032),
    L = n(332495),
    w = n(103609);
function R(e) {
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
function D(e, t) {
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
let k = (0, a.U)(() => ({ isOpen: !0 }));
function M() {
    let e,
        t = (0, l.TH)(),
        n = (0, o.e7)([v.Z], () => v.Z.getChannelId()),
        i = (0, o.e7)([C.Z], () => C.Z.getGuildId()),
        a = (0, o.e7)([y.Z], () => y.Z.getChannel(n), [n]),
        c = I.Z.getGuild(i),
        u = (0, h.Z)(),
        d = null;
    return (
        null != c
            ? ((d = u
                  ? (0, r.jsx)(s.r7p, { size: 'xs' })
                  : (0, r.jsx)(g.Z, {
                        guild: c,
                        size: g.Z.Sizes.MINI,
                        active: !0,
                        className: w.guildIcon
                    })),
              (e = c.name))
            : null != a && (a.isDM() || a.isGroupDM())
              ? ((e = x.NW.string(x.t.YUU0RE)), (d = (0, r.jsx)(s.gw7, { size: 'xs' })))
              : t.pathname.startsWith(A.Z5c.GLOBAL_DISCOVERY)
                ? ((e = x.NW.string(x.t['4nEZLi'])), (d = (0, r.jsx)(s.Jmo, { size: 'xs' })))
                : t.pathname.startsWith(A.Z5c.NITRO_HOME)
                  ? ((e = x.NW.string(x.t.Ipxkoq)), (d = (0, r.jsx)(s.SrA, { size: 'xs' })))
                  : t.pathname.startsWith(A.Z5c.COLLECTIBLES_SHOP)
                    ? ((e = x.NW.string(x.t.pWG4zc)), (d = (0, r.jsx)(s.EOn, { size: 'xs' })))
                    : t.pathname.startsWith(A.Z5c.FRIENDS)
                      ? ((e = x.NW.string(x.t.TdEu5e)), (d = (0, r.jsx)(s.iFz, { size: 'xs' })))
                      : t.pathname.startsWith(A.Z5c.FAMILY_CENTER) && ((e = x.NW.string(L.Z.RZqaJi)), (d = (0, r.jsx)(s.BFJ, { size: 'xs' }))),
        null != e &&
            '' !== e &&
            (0, r.jsxs)('div', {
                className: w.title,
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
let U = i.memo(function () {
    i.useLayoutEffect(() => {
        T.ZP.setMinimumSize(Z.J, Z.N);
    }, []);
    let e = (0, p.TH)('AppTitleBar'),
        t = !k((e) => e.isOpen) && e,
        { hasBugReporterAccess: n } = u.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    i.useLayoutEffect(() => {
        T.ZP.setMinimumSize(Z.J, Z.N);
    }, []);
    let l = (0, o.e7)([N.Z], () => (N.Z.darkSidebar ? A.BRd.DARK : void 0));
    return (0, o.e7)([S.Z, E.Z], () => (0, P.rB)())
        ? null
        : (0, r.jsx)(s.Wdt, {
              children: (e) =>
                  (0, r.jsx)(s.f6W, {
                      theme: l,
                      children: (i) =>
                          (0, r.jsx)(j.T, {
                              className: i,
                              leading:
                                  t &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(
                                              s.P3F,
                                              D(R({}, e), {
                                                  className: w.button,
                                                  onClick: () => {
                                                      k.setState({ isOpen: !k.getState().isOpen });
                                                  },
                                                  children: (0, r.jsx)(G, {})
                                              })
                                          ),
                                          (0, r.jsx)(s.P3F, {
                                              className: w.button,
                                              onClick: () => {
                                                  c.Z.open(A.oAB.ACCOUNT);
                                              },
                                              children: (0, r.jsx)(s.ewm, {
                                                  size: 'xs',
                                                  color: 'currentColor'
                                              })
                                          })
                                      ]
                                  }),
                              title: (0, r.jsx)(M, {}),
                              trailing: (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(f.Z, { className: w.button }),
                                      (0, r.jsx)(d.Z, {
                                          canShowReminder: !0,
                                          className: w.button
                                      }),
                                      (0, r.jsx)(O.Z, D(R({}, t ? {} : e), { className: w.button })),
                                      n ? (0, r.jsx)(b.Z, { className: w.button }) : (0, r.jsx)(m.Z, { className: w.button }),
                                      (0, r.jsx)(_.Z, { className: w.button })
                                  ]
                              })
                          })
                  })
          });
});
function G() {
    return (0, r.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: w.icon,
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
