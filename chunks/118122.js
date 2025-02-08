n.d(t, { Z: () => S });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(906732),
    c = n(560067),
    d = n(540059),
    u = n(451603),
    h = n(885714),
    p = n(155409),
    g = n(430824),
    m = n(594174),
    f = n(40153),
    _ = n(603592),
    v = n(981631),
    C = n(675999),
    x = n(388032),
    Z = n(940722);
let I = {
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
function b(e) {
    (0, o.jW)(e, async () => {
        let { default: e } = await n.e('9606').then(n.bind(n, 987578));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function S(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        o = (0, r.e7)([g.Z], () => g.Z.getGuilds()),
        S = l.useMemo(() => Object.values(o), [o]),
        N = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
        E = l.useMemo(() => S.some((e) => e.isOwner(N)), [S, N]),
        j = (0, a.s9z)((e) => (0, a.DEQ)(e, C.PU)),
        { analyticsLocations: y } = (0, s.ZP)(),
        P = (0, d.Q3)('CreateJoinGuildButton'),
        T = (0, i.jsx)(_.Z, {
            showPill: !1,
            id: 'create-join-button',
            onClick: () => {
                (0, u.yU)()
                    ? (0, h.Z)({
                          analyticsSource: { page: v.Sbl.CREATE_JOIN_GUILD_MODAL },
                          analyticsLocation: {
                              page: v.Sbl.CREATE_JOIN_GUILD_MODAL,
                              section: v.jXE.GUILD_CAP_UPSELL_MODAL
                          },
                          analyticsLocations: y
                      })
                    : c.Z.openCreateGuildModal({ location: 'Guild List' });
            },
            selected: j,
            onContextMenu: b,
            tooltip: x.intl.string(x.t.l5WIbW),
            icon: P ? a.oFk : a.BRu
        });
    return t
        ? T
        : (0, i.jsx)('div', {
              className: Z.tutorialContainer,
              children: (0, i.jsxs)(p.Z, {
                  tutorialId: E ? 'create-more-servers' : 'create-first-server',
                  inlineSpecs: I,
                  position: 'right',
                  children: [
                      T,
                      null != n &&
                          (0, i.jsx)(f.ZP, {
                              name: x.intl.string(x.t['45xjMz']),
                              targetNode: n,
                              below: !0,
                              noCombine: !0
                          })
                  ]
              })
          });
}
