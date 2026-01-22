r.d(t, { default: () => I }), r(896048);
var a = r(627968),
    n = r(64700),
    s = r(503698),
    c = r.n(s),
    o = r(397927),
    l = r(503852),
    i = r(363487),
    d = r(998418),
    u = r(193157),
    p = r(439156),
    f = r(568065),
    b = r(985018),
    m = r(750845),
    O = r(107836);
function I(e) {
    var t, r;
    let { guildId: s, powerup: I, onClose: k } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var r,
                a,
                n,
                s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (n = 0, r = Reflect.ownKeys(e); n < r.length; n++)
                    (a = r[n]),
                        !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (s[a] = e[a]);
                return s;
            }
            if (
                ((s = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        a,
                        n = {},
                        s = Object.getOwnPropertyNames(e);
                    for (a = 0; a < s.length; a++)
                        (r = s[a]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
                    return n;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
                    (a = r[n]),
                        !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (s[a] = e[a]);
            return s;
        })(e, ["guildId", "powerup", "onClose"]),
        [j, _] = n.useState(void 0),
        T = (0, d.Ay)(s, I),
        P = T.type === f.b_.TIER_OVERRIDE_ACTIVATED,
        g = (0, i.A)(s),
        E = null == T.sourceEntitlement || !g;
    return (
        (0, l.Z)(s, I, l.q.DETAIL),
        (0, a.jsxs)(
            o.EOs,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (a = a.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        a.forEach(function (t) {
                            var a;
                            (a = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: a,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = a);
                        });
                }
                return e;
            })(
                {
                    "data-migration-pending": !0,
                    className: m.yl,
                    size: o.rIJ.DYNAMIC,
                },
                y,
            )),
            (r = r =
                {
                    parentComponent: "GuildPowerupLevelModal",
                    children: [
                        (0, a.jsxs)(o.$mQ, {
                            "data-migration-pending": !0,
                            className: m._F,
                            scrollbarType: "none",
                            children: [
                                (0, a.jsx)("img", {
                                    alt: "",
                                    src: O,
                                    className: m.v5,
                                }),
                                (0, a.jsxs)("div", {
                                    className: m.hQ,
                                    children: [
                                        (0, a.jsx)(o.Heading, {
                                            variant: "heading-xl/extrabold",
                                            children: I.title,
                                        }),
                                        (0, a.jsx)(u.A, { powerup: I }),
                                        null != j &&
                                            (0, a.jsx)(o.Text, {
                                                color: "text-feedback-critical",
                                                variant: "text-sm/semibold",
                                                children: j,
                                            }),
                                        (0, a.jsxs)("div", {
                                            className: c()(m.qr, { [m.r9]: E }),
                                            children: [
                                                !P &&
                                                    g &&
                                                    (0, a.jsx)(p.A, {
                                                        guildId: s,
                                                        powerup: I,
                                                        onError: _,
                                                        grow: !1,
                                                        compact: !E,
                                                    }),
                                                (0, a.jsx)(o.Button, {
                                                    variant: E ? "secondary" : "primary",
                                                    onClick: k,
                                                    text: b.intl.string(b.t.cpT0Cq),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(o.s_y, {
                            "data-migration-pending": !0,
                            className: m.VN,
                            onClick: k,
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, a);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t),
        )
    );
}
