n.d(e, { default: () => O });
var r = n(627968);
n(64700);
var o = n(827734),
    l = n(397927),
    a = n(688810),
    c = n(87719),
    i = n(244975),
    s = n(788868),
    f = n(652215),
    u = n(985018),
    p = n(915865),
    d = n(953239),
    b = n(929103);
function y(t, e) {
    return (0, r.jsx)(
        l.LpS,
        {
            text: t,
            className: d.Ad,
            color: o.A.unsafe_rawColors.BRAND_500.css,
        },
        e,
    );
}
function O(t) {
    let { guildCount: e, onClose: n, analyticsLocations: o } = t,
        d = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, n = Reflect.ownKeys(t); o < n.length; o++)
                    (r = n[o]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
                return l;
            }
            if (
                ((l = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.getOwnPropertyNames(t);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
                    return o;
                })(t, e)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
                    (r = n[o]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
            return l;
        })(t, ["guildCount", "onClose", "analyticsLocations"]),
        O = function (t, e) {
            return (0, r.jsx)(
                l.DUT,
                {
                    className: p.C,
                    tag: "span",
                    onClick: () => {
                        n(), (0, c.Z)();
                    },
                    children: t,
                },
                e,
            );
        },
        { analyticsLocations: m } = (0, a.Ay)(o);
    return (0, r.jsx)(a.f5, {
        value: m,
        children: (0, r.jsx)(
            i.A,
            (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                            }),
                        )),
                        r.forEach(function (e) {
                            var r;
                            (r = n[e]),
                                e in t
                                    ? Object.defineProperty(t, e, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (t[e] = r);
                        });
                }
                return t;
            })(
                {
                    artURL: b.A,
                    onClose: n,
                    type: s.e.GUILD_CAP_MODAL_UPSELL,
                    title: u.intl.string(u.t["CoNXB+"]),
                    body:
                        e < f.qlD
                            ? u.intl.format(u.t["5qLH7B"], {
                                  guildCount: e,
                                  onAndMore: O,
                                  newBadgeHook: y,
                              })
                            : u.intl.format(u.t.mk9CS6, {
                                  onAndMore: O,
                                  newBadgeHook: y,
                              }),
                    context:
                        e < f.qlD
                            ? u.intl.formatToPlainString(u.t["C+Hqzs"], { guildCount: e })
                            : u.intl.string(u.t.m0xavd),
                    glowUp: u.intl.format(u.t["6Dl5X1"], { onAndMore: O }),
                },
                d,
            ),
        ),
    });
}
