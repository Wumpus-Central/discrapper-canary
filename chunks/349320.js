n.d(t, {
    L: () => v,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(158954),
    o = n(51264),
    c = n(820284),
    u = n(765671),
    d = n(793574),
    p = n(688810),
    f = n(757780),
    h = n(748319),
    A = n(355205),
    g = n(652234),
    m = n(489683),
    b = n(947926),
    _ = n(366811),
    E = n(652215),
    O = n(985018),
    y = n(933460);

function I(e) {
    var t, n;
    let { analyticsLocations: i } = (0, p.Ay)(d.A.ACTIVITY_PANEL),
        l = (0, _.A)((e) => {
            let { guildId: t } = e;
            return t;
        });
    return (0, r.jsx)(p.f5, {
        value: i,
        children: (0, r.jsx)(
            A.A,
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
            (n = n =
                {
                    guildId: l,
                }),
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
let v = i.memo(function () {
    let e = i.useRef(null);
    (0, u.i4)(
        e,
        (e) => {
            let { height: t } = e;
            document.body.style.setProperty("--custom-app-panels-height", "".concat(t, "px"));
        },
        [],
    );
    let { isSorting: t } = (0, f.A)();
    return (0, r.jsx)("section", {
        ref: e,
        className: a()(y.C3, {
            [y.aB]: t,
        }),
        "aria-label": O.intl.string(O.t.StREWK),
        children: (0, r.jsxs)(s.xpW, {
            containerRef: e,
            children: [
                (0, r.jsx)(o.A, {}),
                (0, r.jsx)(b.A, {}),
                (0, r.jsx)(g.A, {}),
                (0, r.jsx)(c.A, {
                    section: E.JJy.ACTIVITY_PANEL,
                    children: (0, r.jsx)(I, {
                        className: y.iz,
                    }),
                }),
                (0, r.jsx)(c.A, {
                    section: E.JJy.RTC_CONNECTION_PANEL,
                    children: (0, r.jsx)(m.A, {}),
                }),
                (0, r.jsx)(c.A, {
                    section: E.JJy.ACCOUNT_PANEL,
                    children: (0, r.jsx)(h.A, {}),
                }),
            ],
        }),
    });
});
