n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(192308),
    r = n(245604),
    o = n(442433),
    d = n(688810),
    c = n(272613),
    u = n(398884),
    h = n(772366),
    A = n(728321),
    _ = n(260509),
    m = n(71393),
    g = n(287809),
    p = n(531053),
    f = n(606256),
    E = n(652215),
    x = n(819638),
    I = n(985018),
    C = n(266062);
let b = { origin: { x: -16, y: 0 }, targetWidth: 48, targetHeight: 48, offset: { x: 0, y: 0 } };
function N(e) {
    (0, o.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
        return (t) => (0, i.jsx)(e, { ...t });
    });
}
function S(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        o = (0, s.yK)([m.A], () => m.A.getGuildsArray()),
        S = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
        v = l.useMemo(() => o.some((e) => (0, _.bM)(e, S)), [o, S]),
        T = (0, a.useModalsStore)((e) => (0, a.hasModalOpenSelector)(e, x.fc)),
        { analyticsLocations: y } = (0, d.Ay)();
    return (0, i.jsx)("div", {
        className: C.Uq,
        children: (0, i.jsxs)(A.A, {
            tutorialId: v ? "create-more-servers" : "create-first-server",
            inlineSpecs: b,
            position: "right",
            disabled: t,
            children: [
                (0, i.jsx)(f.A, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: () => {
                        (0, u.Sn)()
                            ? (0, h.A)({
                                  analyticsSource: { page: E.ThZ.CREATE_JOIN_GUILD_MODAL },
                                  analyticsLocation: {
                                      page: E.ThZ.CREATE_JOIN_GUILD_MODAL,
                                      section: E.JJy.GUILD_CAP_UPSELL_MODAL,
                                  },
                                  analyticsLocations: y,
                              })
                            : c.A.openCreateGuildModal({ location: "Guild List" });
                    },
                    selected: T,
                    onContextMenu: N,
                    tooltip: I.intl.string(I.t.l5WIbf),
                    icon: r.U,
                }),
                null != n &&
                    (0, i.jsx)(p.Ay, { name: I.intl.string(I.t["45xjM5"]), targetNode: n, below: !0, noCombine: !0 }),
            ],
        }),
    });
}
