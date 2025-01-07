n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(906732),
    c = n(560067),
    u = n(540059),
    d = n(451603),
    h = n(885714),
    p = n(155409),
    f = n(430824),
    m = n(594174),
    g = n(40153),
    v = n(603592),
    C = n(981631),
    x = n(675999),
    I = n(388032),
    _ = n(940722);
let Z = {
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
        o = (0, r.e7)([f.Z], () => f.Z.getGuilds()),
        S = l.useMemo(() => Object.values(o), [o]),
        N = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
        E = l.useMemo(() => S.some((e) => e.isOwner(N)), [S, N]),
        y = (0, a.useModalsStore)((e) => (0, a.hasModalOpenSelector)(e, x.PU)),
        { analyticsLocations: j } = (0, s.ZP)(),
        T = (0, u.Q3)('CreateJoinGuildButton'),
        P = (0, i.jsx)(v.Z, {
            showPill: !1,
            id: 'create-join-button',
            onClick: () => {
                (0, d.yU)()
                    ? (0, h.Z)({
                          analyticsSource: { page: C.Sbl.CREATE_JOIN_GUILD_MODAL },
                          analyticsLocation: {
                              page: C.Sbl.CREATE_JOIN_GUILD_MODAL,
                              section: C.jXE.GUILD_CAP_UPSELL_MODAL
                          },
                          analyticsLocations: j
                      })
                    : c.Z.openCreateGuildModal({ location: 'Guild List' });
            },
            selected: y,
            onContextMenu: b,
            tooltip: I.intl.string(I.t.l5WIbW),
            icon: T ? a.CirclePlusIcon : a.PlusMediumIcon
        });
    return t
        ? P
        : (0, i.jsx)('div', {
              className: _.tutorialContainer,
              children: (0, i.jsxs)(p.Z, {
                  tutorialId: E ? 'create-more-servers' : 'create-first-server',
                  inlineSpecs: Z,
                  position: 'right',
                  children: [
                      P,
                      null != n &&
                          (0, i.jsx)(g.ZP, {
                              name: I.intl.string(I.t['45xjMz']),
                              targetNode: n,
                              below: !0,
                              noCombine: !0
                          })
                  ]
              })
          });
}
