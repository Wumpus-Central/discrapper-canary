n.d(t, { default: () => d }), n(388685), n(457542);
var r = n(54381),
    a = n(473749),
    o = n(625651),
    i = n(905551),
    c = n(162190),
    l = n(914820),
    s = n(388032),
    u = n(535684);
function d(e) {
    var { guildId: t, gameInstance: n } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ["guildId", "gameInstance"]);
    let [f, b] = a.useState(!1),
        [m, p] = a.useState(void 0),
        g = (0, c.Z)(n.gameId, "cover");
    return (0, r.jsx)(
        o.f,
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
        })(
            {
                size: "sm",
                title: n.name,
                body: (0, r.jsx)("div", {
                    className: u.imageContainer,
                    children: (0, r.jsx)("img", {
                        alt: "",
                        src: null != g ? g : "",
                        className: u.image,
                    }),
                }),
                warningText: s.intl.string(l.default.ukbS3E),
                acknowledgementText: s.intl.string(l.default.xjRtF9),
                isLoading: f,
                error: m,
                onDeactivate: () => {
                    p(void 0),
                        b(!0),
                        (0, i.s9)(t, n.planId, n.entitlementId)
                            .then(() => {
                                d.onClose();
                            })
                            .catch((e) => {
                                var t;
                                p(null != (t = e.body.message) ? t : e.message);
                            })
                            .finally(() => {
                                b(!1);
                            });
                },
            },
            d,
        ),
    );
}
