n.d(t, { Z: () => x });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(239091),
    s = n(906732),
    c = n(560067),
    u = n(451603),
    d = n(885714),
    p = n(155409),
    h = n(601964),
    f = n(430824),
    g = n(594174),
    m = n(40153),
    b = n(603592),
    _ = n(981631),
    y = n(675999),
    O = n(388032),
    v = n(816827);
let j = {
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
function C(e) {
    (0, a.jW)(e, async () => {
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
function x(e) {
    let { disableTooltip: t, lastTargetNode: n } = e,
        a = (0, l.Wu)([f.Z], () => f.Z.getGuildsArray()),
        x = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        E = i.useMemo(() => a.some((e) => (0, h.eM)(e, x)), [a, x]),
        S = (0, o.s9z)((e) => (0, o.DEQ)(e, y.PU)),
        { analyticsLocations: I } = (0, s.ZP)(),
        P = (0, r.jsx)(b.Z, {
            showPill: !1,
            id: "create-join-button",
            onClick: () => {
                (0, u.yU)()
                    ? (0, d.Z)({
                          analyticsSource: { page: _.Sbl.CREATE_JOIN_GUILD_MODAL },
                          analyticsLocation: {
                              page: _.Sbl.CREATE_JOIN_GUILD_MODAL,
                              section: _.jXE.GUILD_CAP_UPSELL_MODAL,
                          },
                          analyticsLocations: I,
                      })
                    : c.Z.openCreateGuildModal({ location: "Guild List" });
            },
            selected: S,
            onContextMenu: C,
            tooltip: O.intl.string(O.t.l5WIbf),
            icon: o.oFk,
        });
    return t
        ? P
        : (0, r.jsx)("div", {
              className: v.tutorialContainer,
              children: (0, r.jsxs)(p.Z, {
                  tutorialId: E ? "create-more-servers" : "create-first-server",
                  inlineSpecs: j,
                  position: "right",
                  children: [
                      P,
                      null != n &&
                          (0, r.jsx)(m.ZP, {
                              name: O.intl.string(O.t["45xjM5"]),
                              targetNode: n,
                              below: !0,
                              noCombine: !0,
                          }),
                  ],
              }),
          });
}
