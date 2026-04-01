n.d(t, { A: () => T });
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
    _ = n(71393),
    m = n(287809),
    g = n(531053),
    p = n(606256),
    f = n(652215),
    x = n(819638),
    E = n(985018),
    I = n(557883);
let C = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function N(e) {
    (0, r.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function T(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        r = (0, s.yK)([_.A], () => _.A.getGuildsArray()),
        T = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        S = l.useMemo(() => r.some((e) => (0, A.bM)(e, T)), [r, T]),
        b = (0, a.red)((e) => (0, a.fDT)(e, x.fc)),
        { analyticsLocations: y } = (0, o.Ay)();
    return (0, i.jsx)("div", {
        className: I.Uq,
        children: (0, i.jsxs)(h.A, {
            tutorialId: S ? "create-more-servers" : "create-first-server",
            inlineSpecs: C,
            position: "right",
            disabled: t,
            children: [
                (0, i.jsx)(p.A, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: () => {
                        (0, c.Sn)()
                            ? (0, u.A)({
                                  analyticsSource: { page: f.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: f.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: f.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: y,
                              })
                            : d.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: b,
                    onContextMenu: N,
                    tooltip: E.intl.string(E.t.l5WIbf),
                    icon: a.U1e,
                }),
                null != n &&
                    (0, i.jsx)(g.Ay, { name: E.intl.string(E.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
