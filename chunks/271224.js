o.d(t, { default: () => _ }), o(388685);
var n = o(54381),
    r = o(473749),
    a = o(120356),
    c = o.n(a),
    s = o(481060),
    i = o(870246),
    l = o(639777),
    d = o(973772),
    u = o(17622),
    p = o(880419),
    b = o(535396),
    m = o(388032),
    f = o(893922),
    I = o(942570);
function _(e) {
    var t,
        o,
        { guildId: a, powerup: _, onClose: O } = e,
        k = (function (e, t) {
            if (null == e) return {};
            var o,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var o,
                        n,
                        r = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (o = a[n]), t.indexOf(o) >= 0 || (r[o] = e[o]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (o = a[n]),
                        !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]);
            }
            return r;
        })(e, ["guildId", "powerup", "onClose"]);
    let [j, g] = r.useState(void 0),
        v = (0, d.ZP)(a, _),
        x = v.type === b.A3.TIER_OVERRIDE_ACTIVATED,
        y = (0, l.Z)(a),
        C = null == v.sourceEntitlement || !y;
    return (
        (0, i.$)(a, _, i.w.DETAIL),
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
                k,
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
                                            children: _.title,
                                        }),
                                        (0, n.jsx)(u.Z, { powerup: _ }),
                                        null != j &&
                                            (0, n.jsx)(s.Text, {
                                                color: "status-danger",
                                                variant: "text-sm/semibold",
                                                children: j,
                                            }),
                                        (0, n.jsxs)("div", {
                                            className: c()(f.footer, { [f.disabled]: C }),
                                            children: [
                                                !x &&
                                                    y &&
                                                    (0, n.jsx)(p.Z, {
                                                        guildId: a,
                                                        powerup: _,
                                                        onError: g,
                                                        grow: !1,
                                                        compact: !C,
                                                    }),
                                                (0, n.jsx)(s.Button, {
                                                    variant: C ? "secondary" : "primary",
                                                    onClick: O,
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
                            onClick: O,
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
