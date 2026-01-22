n.d(t, {
    A: () => E,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(442433),
    o = n(688810),
    c = n(272613),
    u = n(398884),
    d = n(772366),
    f = n(728321),
    p = n(260509),
    h = n(71393),
    b = n(287809),
    g = n(531053),
    m = n(606256),
    A = n(652215),
    y = n(819638),
    O = n(985018),
    j = n(283237);
let v = {
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
    (0, s.L3)(e, async () => {
        let { default: e } = await n.e("17288").then(n.bind(n, 4571));
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
        s = (0, i.yK)([h.A], () => h.A.getGuildsArray()),
        E = (0, i.bG)([b.default], () => b.default.getCurrentUser()),
        _ = l.useMemo(() => s.some((e) => (0, p.bM)(e, E)), [s, E]),
        C = (0, a.red)((e) => (0, a.fDT)(e, y.fc)),
        { analyticsLocations: S } = (0, o.Ay)(),
        I = (0, r.jsx)(m.A, {
            showPill: !1,
            id: "create-join-button",
            onClick: () => {
                (0, u.Sn)()
                    ? (0, d.A)({
                          analyticsSource: {
                              page: A.ThZ.CREATE_JOIN_GUILD_MODAL,
                          },
                          analyticsLocation: {
                              page: A.ThZ.CREATE_JOIN_GUILD_MODAL,
                              section: A.JJy.GUILD_CAP_UPSELL_MODAL,
                          },
                          analyticsLocations: S,
                      })
                    : c.A.openCreateGuildModal({
                          location: "Guild List",
                      });
            },
            selected: C,
            onContextMenu: x,
            tooltip: O.intl.string(O.t.l5WIbf),
            icon: a.U1e,
        });
    return t
        ? I
        : (0, r.jsx)("div", {
              className: j.Uq,
              children: (0, r.jsxs)(f.A, {
                  tutorialId: _ ? "create-more-servers" : "create-first-server",
                  inlineSpecs: v,
                  position: "right",
                  children: [
                      I,
                      null != n &&
                          (0, r.jsx)(g.Ay, {
                              name: O.intl.string(O.t["45xjM5"]),
                              targetNode: n,
                              below: !0,
                              noCombine: !0,
                          }),
                  ],
              }),
          });
}
