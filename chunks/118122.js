n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    s = n(239091),
    a = n(906732),
    c = n(560067),
    u = n(540059),
    d = n(451603),
    h = n(885714),
    p = n(155409),
    f = n(430824),
    g = n(594174),
    m = n(40153),
    b = n(603592),
    y = n(981631),
    _ = n(675999),
    O = n(388032),
    v = n(176330);
let C = {
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
function S(e) {
    (0, s.jW)(e, async () => {
        let { default: e } = await n.e('9606').then(n.bind(n, 987578));
        return (t) =>
            (0, r.jsx)(
                e,
                (function (e) {
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
                })({}, t)
            );
    });
}
function j(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        s = (0, l.e7)([f.Z], () => f.Z.getGuilds()),
        j = i.useMemo(() => Object.values(s), [s]),
        E = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        x = i.useMemo(() => j.some((e) => e.isOwner(E)), [j, E]),
        I = (0, o.s9z)((e) => (0, o.DEQ)(e, _.PU)),
        { analyticsLocations: P } = (0, a.ZP)(),
        w = (0, u.Q3)('CreateJoinGuildButton'),
        N = (0, r.jsx)(b.Z, {
            showPill: !1,
            id: 'create-join-button',
            onClick: () => {
                (0, d.yU)()
                    ? (0, h.Z)({
                          analyticsSource: { page: y.Sbl.CREATE_JOIN_GUILD_MODAL },
                          analyticsLocation: {
                              page: y.Sbl.CREATE_JOIN_GUILD_MODAL,
                              section: y.jXE.GUILD_CAP_UPSELL_MODAL
                          },
                          analyticsLocations: P
                      })
                    : c.Z.openCreateGuildModal({ location: 'Guild List' });
            },
            selected: I,
            onContextMenu: S,
            tooltip: O.intl.string(O.t.l5WIbW),
            icon: w ? o.oFk : o.BRu
        });
    return t
        ? N
        : (0, r.jsx)('div', {
              className: v.tutorialContainer,
              children: (0, r.jsxs)(p.Z, {
                  tutorialId: x ? 'create-more-servers' : 'create-first-server',
                  inlineSpecs: C,
                  position: 'right',
                  children: [
                      N,
                      null != n &&
                          (0, r.jsx)(m.ZP, {
                              name: O.intl.string(O.t['45xjMz']),
                              targetNode: n,
                              below: !0,
                              noCombine: !0
                          })
                  ]
              })
          });
}
