n.r(t),
    n.d(t, {
        default: function () {
            return y;
        },
        useAppSidebarState: function () {
            return x;
        }
    });
var i = n(200651),
    r = n(192379),
    l = n(15729),
    a = n(442837),
    s = n(481060),
    o = n(230711),
    c = n(174556),
    d = n(320007),
    u = n(540059),
    h = n(565138),
    m = n(300986),
    p = n(314451),
    g = n(35583),
    f = n(522474),
    _ = n(141321),
    E = n(592125),
    I = n(430824),
    C = n(944486),
    v = n(451478),
    N = n(998502),
    T = n(228488),
    S = n(950796),
    b = n(981631),
    A = n(741764),
    Z = n(553512);
let x = (0, l.U)(() => ({ isOpen: !0 }));
function L() {
    let e = (0, a.e7)([C.Z], () => C.Z.getChannelId()),
        t = (0, a.e7)([E.Z], () => E.Z.getChannel(e), [e]),
        n = I.Z.getGuild(null == t ? void 0 : t.guild_id);
    return (
        null != n &&
        (0, i.jsxs)('div', {
            className: Z.guild,
            children: [
                (0, i.jsx)(h.Z, {
                    guild: n,
                    size: h.Z.Sizes.SMALLER,
                    active: !0,
                    className: Z.guildIcon
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/medium',
                    children: n.name
                })
            ]
        })
    );
}
function y() {
    r.useLayoutEffect(() => {
        N.ZP.setMinimumSize(A.J, A.N);
    }, []);
    let e = (0, u.TH)('AppTitleBar'),
        t = x((e) => e.isOpen),
        { hasBugReporterAccess: n } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    return (r.useLayoutEffect(() => {
        N.ZP.setMinimumSize(A.J, A.N);
    }, []),
    (0, a.e7)([v.Z, f.Z], () => (0, T.rB)()))
        ? null
        : (0, i.jsx)(S.T, {
              leading:
                  !t &&
                  e &&
                  (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(s.Clickable, {
                              className: Z.button,
                              onClick: () => {
                                  x.setState({ isOpen: !x.getState().isOpen });
                              },
                              children: (0, i.jsx)(P, {})
                          }),
                          (0, i.jsx)(s.Clickable, {
                              className: Z.button,
                              onClick: () => {
                                  o.Z.open(b.oAB.ACCOUNT);
                              },
                              children: (0, i.jsx)(s.SettingsIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  }),
              title: !1,
              trailing: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(d.Z, {
                          canShowReminder: !0,
                          className: Z.button
                      }),
                      (0, i.jsx)(_.Z, { className: Z.button }),
                      n ? (0, i.jsx)(p.Z, { className: Z.button }) : (0, i.jsx)(m.Z, { className: Z.button }),
                      (0, i.jsx)(g.Z, { className: Z.button })
                  ]
              })
          });
}
function P() {
    return (0, i.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: Z.icon,
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
