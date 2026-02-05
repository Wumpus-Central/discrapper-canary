n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(442433),
    o = n(688810),
    d = n(272613),
    c = n(398884),
    u = n(772366),
    h = n(728321),
    A = n(260509),
    g = n(71393),
    m = n(287809),
    p = n(531053),
    _ = n(606256),
    x = n(652215),
    f = n(819638),
    E = n(985018),
    C = n(283237);
let I = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function S(e) {
    (0, r.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function b(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        r = (0, s.yK)([g.A], () => g.A.getGuildsArray()),
        b = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        N = l.useMemo(() => r.some((e) => (0, A.bM)(e, b)), [r, b]),
        T = (0, a.red)((e) => (0, a.fDT)(e, f.fc)),
        { analyticsLocations: j } = (0, o.Ay)(),
        v = (0, i.jsx)(_.A, {
            showPill: !1,
            id: "create-join-button",
            onClick: () => {
                (0, c.Sn)()
                    ? (0, u.A)({
                          analyticsSource: { page: x.ThZ.CREATE_JOIN_GUILD_MODAL },
                          analyticsLocation: {
                              page: x.ThZ.CREATE_JOIN_GUILD_MODAL,
                              section: x.JJy.GUILD_CAP_UPSELL_MODAL,
                          },
                          analyticsLocations: j,
                      })
                    : d.A.openCreateGuildModal({ location: "Guild List" });
            },
            selected: T,
            onContextMenu: S,
            tooltip: E.intl.string(E.t.l5WIbf),
            icon: a.U1e,
        });
    return t
        ? v
        : (0, i.jsx)("div", {
              className: C.Uq,
              children: (0, i.jsxs)(h.A, {
                  tutorialId: N ? "create-more-servers" : "create-first-server",
                  inlineSpecs: I,
                  position: "right",
                  children: [
                      v,
                      null != n &&
                          (0, i.jsx)(p.Ay, {
                              name: E.intl.string(E.t["45xjM5"]),
                              targetNode: n,
                              below: !0,
                              noCombine: !0,
                          }),
                  ],
              }),
          });
}
