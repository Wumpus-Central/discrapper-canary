n.d(t, { Z: () => E });
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
    p = n(601964),
    f = n(430824),
    g = n(594174),
    m = n(40153),
    b = n(603592),
    _ = n(981631),
    O = n(675999),
    y = n(388032),
    C = n(176330);
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
function j(e) {
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
function E(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        a = (0, l.Wu)([f.Z], () => f.Z.getGuildsArray()),
        E = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        S = i.useMemo(() => a.some((e) => (0, p.eM)(e, E)), [a, E]),
        x = (0, o.s9z)((e) => (0, o.DEQ)(e, O.PU)),
        { analyticsLocations: I } = (0, s.ZP)(),
        P = (0, r.jsx)(b.Z, {
            showPill: !1,
            id: 'create-join-button',
            onClick: () => {
                (0, u.yU)()
                    ? (0, d.Z)({
                          analyticsSource: { page: _.Sbl.CREATE_JOIN_GUILD_MODAL },
                          analyticsLocation: {
                              page: _.Sbl.CREATE_JOIN_GUILD_MODAL,
                              section: _.jXE.GUILD_CAP_UPSELL_MODAL
                          },
                          analyticsLocations: I
                      })
                    : c.Z.openCreateGuildModal({ location: 'Guild List' });
            },
            selected: x,
            onContextMenu: j,
            tooltip: y.intl.string(y.t.l5WIbW),
            icon: o.oFk
        });
    return t
        ? P
        : (0, r.jsx)('div', {
              className: C.tutorialContainer,
              children: (0, r.jsxs)(h.Z, {
                  tutorialId: S ? 'create-more-servers' : 'create-first-server',
                  inlineSpecs: v,
                  position: 'right',
                  children: [
                      P,
                      null != n &&
                          (0, r.jsx)(m.ZP, {
                              name: y.intl.string(y.t['45xjMz']),
                              targetNode: n,
                              below: !0,
                              noCombine: !0
                          })
                  ]
              })
          });
}
