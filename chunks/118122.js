n.d(t, { Z: () => j });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    a = n(239091),
    s = n(906732),
    c = n(560067),
    u = n(451603),
    d = n(885714),
    h = n(155409),
    p = n(430824),
    f = n(594174),
    g = n(40153),
    m = n(603592),
    b = n(981631),
    _ = n(675999),
    O = n(388032),
    y = n(176330);
let v = {
    origin: {
        x: -16,
        y: 0
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0
    }
};
function C(e) {
    (0, a.jW)(e, async () => {
        let { default: e } = await n.e('9606').then(n.bind(n, 987578));
        return (t) =>
            (0, r.jsx)(
                e,
                (function (e) {
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
                })({}, t)
            );
    });
}
function j(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        a = (0, l.Wu)([p.Z], () => p.Z.getGuildsArray()),
        j = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        E = i.useMemo(() => a.some((e) => e.isOwner(j)), [a, j]),
        S = (0, o.s9z)((e) => (0, o.DEQ)(e, _.PU)),
        { analyticsLocations: x } = (0, s.ZP)(),
        I = (0, r.jsx)(m.Z, {
            showPill: !1,
            id: 'create-join-button',
            onClick: () => {
                (0, u.yU)()
                    ? (0, d.Z)({
                          analyticsSource: { page: b.Sbl.CREATE_JOIN_GUILD_MODAL },
                          analyticsLocation: {
                              page: b.Sbl.CREATE_JOIN_GUILD_MODAL,
                              section: b.jXE.GUILD_CAP_UPSELL_MODAL
                          },
                          analyticsLocations: x
                      })
                    : c.Z.openCreateGuildModal({ location: 'Guild List' });
            },
            selected: S,
            onContextMenu: C,
            tooltip: O.intl.string(O.t.l5WIbW),
            icon: o.oFk
        });
    return t
        ? I
        : (0, r.jsx)('div', {
              className: y.tutorialContainer,
              children: (0, r.jsxs)(h.Z, {
                  tutorialId: E ? 'create-more-servers' : 'create-first-server',
                  inlineSpecs: v,
                  position: 'right',
                  children: [
                      I,
                      null != n &&
                          (0, r.jsx)(g.ZP, {
                              name: O.intl.string(O.t['45xjMz']),
                              targetNode: n,
                              below: !0,
                              noCombine: !0
                          })
                  ]
              })
          });
}
