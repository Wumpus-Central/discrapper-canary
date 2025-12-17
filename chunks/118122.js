n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(906732),
    c = n(560067),
    u = n(451603),
    d = n(885714),
    f = n(155409),
    h = n(601964),
    p = n(430824),
    g = n(594174),
    b = n(40153),
    m = n(603592),
    y = n(981631),
    O = n(675999),
    v = n(388032),
    j = n(105303);
let C = {
    origin: {
        x: -16,
        y: 0,
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0,
    },
};
function x(e) {
    (0, o.jW)(e, async () => {
        let { default: e } = await n.e("9606").then(n.bind(n, 987578));
        return (t) =>
            (0, r.jsx)(
                e,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, t),
            );
    });
}
function E(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        o = (0, l.Wu)([p.Z], () => p.Z.getGuildsArray()),
        E = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        S = i.useMemo(() => o.some((e) => (0, h.eM)(e, E)), [o, E]),
        I = (0, a.s9z)((e) => (0, a.DEQ)(e, O.PU)),
        { analyticsLocations: _ } = (0, s.ZP)(),
        P = (0, r.jsx)(m.Z, {
            showPill: !1,
            id: "create-join-button",
            onClick: () => {
                (0, u.yU)()
                    ? (0, d.Z)({
                          analyticsSource: { page: y.Sbl.CREATE_JOIN_GUILD_MODAL },
                          analyticsLocation: {
                              page: y.Sbl.CREATE_JOIN_GUILD_MODAL,
                              section: y.jXE.GUILD_CAP_UPSELL_MODAL,
                          },
                          analyticsLocations: _,
                      })
                    : c.Z.openCreateGuildModal({ location: "Guild List" });
            },
            selected: I,
            onContextMenu: x,
            tooltip: v.intl.string(v.t.l5WIbf),
            icon: a.oFk,
        });
    return t
        ? P
        : (0, r.jsx)("div", {
              className: j.tutorialContainer,
              children: (0, r.jsxs)(f.Z, {
                  tutorialId: S ? "create-more-servers" : "create-first-server",
                  inlineSpecs: C,
                  position: "right",
                  children: [
                      P,
                      null != n &&
                          (0, r.jsx)(b.ZP, {
                              name: v.intl.string(v.t["45xjM5"]),
                              targetNode: n,
                              below: !0,
                              noCombine: !0,
                          }),
                  ],
              }),
          });
}
