n.d(t, { b: () => C });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(793030),
    s = n(393238),
    c = n(100527),
    u = n(906732),
    d = n(316243),
    p = n(720734),
    f = n(840780),
    h = n(235555),
    g = n(746508),
    m = n(210724),
    b = n(905423),
    _ = n(316173),
    E = n(410575),
    O = n(981631),
    v = n(388032),
    y = n(981028);
function I(e) {
    var t, n;
    let { analyticsLocations: i } = (0, u.ZP)(c.Z.ACTIVITY_PANEL),
        l = (0, b.Z)((e) => {
            let { guildId: t } = e;
            return t;
        });
    return (0, r.jsx)(u.Gt, {
        value: i,
        children: (0, r.jsx)(
            f.Z,
            ((t = (function (e) {
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
            })({}, e)),
            (n = n = { guildId: l }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        ),
    });
}
let C = i.memo(function () {
    let e = i.useRef(null);
    (0, s.PM)(
        e,
        (e) => {
            let { height: t } = e;
            document.body.style.setProperty("--custom-app-panels-height", "".concat(t, "px"));
        },
        [],
    );
    let { isSorting: t } = (0, d.Z)();
    return (0, r.jsx)("section", {
        ref: e,
        className: a()(y.panels, { [y.disablePointersWhileSorting]: t }),
        "aria-label": v.intl.string(v.t.StREWF),
        children: (0, r.jsxs)(o.JcV, {
            containerRef: e,
            children: [
                (0, r.jsx)(_.Z, {}),
                (0, r.jsx)(m.Z, {}),
                (0, r.jsx)(h.Z, {}),
                (0, r.jsx)(E.Z, {
                    section: O.jXE.ACTIVITY_PANEL,
                    children: (0, r.jsx)(I, { className: y.activityPanel }),
                }),
                (0, r.jsx)(E.Z, {
                    section: O.jXE.RTC_CONNECTION_PANEL,
                    children: (0, r.jsx)(g.Z, {}),
                }),
                (0, r.jsx)(E.Z, {
                    section: O.jXE.ACCOUNT_PANEL,
                    children: (0, r.jsx)(p.Z, {}),
                }),
            ],
        }),
    });
});
