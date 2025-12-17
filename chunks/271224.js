o.d(t, { default: () => O }), o(388685);
var n = o(54381),
    a = o(473749),
    r = o(120356),
    c = o.n(r),
    s = o(481060),
    i = o(870246),
    l = o(639777),
    d = o(973772),
    u = o(17622),
    b = o(880419),
    p = o(535396),
    m = o(388032),
    f = o(631159),
    I = o(942570);
function O(e) {
    var t,
        o,
        { guildId: r, powerup: O, onClose: k } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var o,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var o,
                        n,
                        a = {},
                        r = Object.keys(e);
                    for (n = 0; n < r.length; n++) (o = r[n]), t.indexOf(o) >= 0 || (a[o] = e[o]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++)
                    (o = r[n]),
                        !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (a[o] = e[o]);
            }
            return a;
        })(e, ["guildId", "powerup", "onClose"]);
    let [g, v] = a.useState(void 0),
        x = (0, d.ZP)(r, O),
        y = x.type === p.A3.TIER_OVERRIDE_ACTIVATED,
        C = (0, l.Z)(r),
        E = null == x.sourceEntitlement || !C;
    return (
        (0, i.$)(r, O, i.w.DETAIL),
        (0, n.jsxs)(
            s.Y0X,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(o);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(o).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(o, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = o[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })(
                {
                    "data-migration-pending": !0,
                    className: f.modal,
                    size: s.CgR.DYNAMIC,
                },
                j,
            )),
            (o = o =
                {
                    parentComponent: "GuildPowerupLevelModal",
                    children: [
                        (0, n.jsxs)(s.hzk, {
                            "data-migration-pending": !0,
                            className: f.modalContentContainer,
                            scrollbarType: "none",
                            children: [
                                (0, n.jsx)("img", {
                                    alt: "",
                                    src: I,
                                    className: f.boostImage,
                                }),
                                (0, n.jsxs)("div", {
                                    className: f.contentContainer,
                                    children: [
                                        (0, n.jsx)(s.Heading, {
                                            variant: "heading-xl/extrabold",
                                            children: O.title,
                                        }),
                                        (0, n.jsx)(u.Z, { powerup: O }),
                                        null != g &&
                                            (0, n.jsx)(s.Text, {
                                                color: "status-danger",
                                                variant: "text-sm/semibold",
                                                children: g,
                                            }),
                                        (0, n.jsxs)("div", {
                                            className: c()(f.footer, { [f.disabled]: E }),
                                            children: [
                                                !y &&
                                                    C &&
                                                    (0, n.jsx)(b.Z, {
                                                        guildId: r,
                                                        powerup: O,
                                                        onError: v,
                                                        grow: !1,
                                                        compact: !E,
                                                    }),
                                                (0, n.jsx)(s.Button, {
                                                    variant: E ? "secondary" : "primary",
                                                    onClick: k,
                                                    text: m.intl.string(m.t.cpT0Cq),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)(s.olH, {
                            "data-migration-pending": !0,
                            className: f.close,
                            onClick: k,
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                : (function (e, t) {
                      var o = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          o.push.apply(o, n);
                      }
                      return o;
                  })(Object(o)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                  }),
            t),
        )
    );
}
