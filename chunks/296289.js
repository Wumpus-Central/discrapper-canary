n.d(t, { default: () => d }), n(388685), n(457542);
var r = n(54381),
    o = n(473749),
    a = n(625651),
    i = n(905551),
    l = n(162190),
    c = n(719662),
    s = n(388032),
    u = n(715909);
function d(e) {
    var { guildId: t, gameInstance: n } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["guildId", "gameInstance"]);
    let [f, m] = o.useState(!1),
        [b, p] = o.useState(void 0),
        g = (0, l.Z)(n.gameId, "cover");
    return (0, r.jsx)(
        a.f,
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
                warningText: s.intl.string(c.default.ukbS3E),
                acknowledgementText: s.intl.string(c.default.xjRtF9),
                isLoading: f,
                error: b,
                onDeactivate: () => {
                    p(void 0),
                        m(!0),
                        (0, i.s9)(t, n.planId, n.entitlementId)
                            .then(() => {
                                d.onClose();
                            })
                            .catch((e) => {
                                var t;
                                p(null != (t = e.body.message) ? t : e.message);
                            })
                            .finally(() => {
                                m(!1);
                            });
                },
            },
            d,
        ),
    );
}
