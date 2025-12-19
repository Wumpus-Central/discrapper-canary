n.d(t, { Z: () => h });
var a = n(54381),
    r = n(793030),
    i = n(100527),
    l = n(906732),
    s = n(371286),
    o = n(164670),
    c = n(705338),
    d = n(790773),
    u = n(388032),
    m = n(993874);
function p() {
    (0, c.default)({ guildId: (0, o.ac)() });
}
function h(e) {
    var t,
        n,
        { handleOpenUserProfileModal: o, markAsDismissed: c } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    (n = i[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["handleOpenUserProfileModal", "markAsDismissed"]);
    let { analyticsLocations: f } = (0, l.ZP)([i.Z.WISHLIST_ACCOUNT_POPOUT_UPSSELL]);
    return (0, a.jsxs)(
        s.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = n[t]),
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
                heading: u.intl.string(u.t["vy/61K"]),
                subheading: u.intl.string(u.t.tEee9t),
                markAsDismissed: c,
                className: m.upsellContainer,
                contentClassName: m.contentContainer,
            },
            h,
        )),
        (n = n =
            {
                children: [
                    (0, a.jsx)(d.Z, {
                        analyticsLocations: f,
                        handleOpenUserProfileModal: o,
                    }),
                    (0, a.jsx)("div", {
                        className: m.buttonContainer,
                        children: (0, a.jsx)(r.zxk, {
                            variant: "primary",
                            fullWidth: !0,
                            text: u.intl.string(u.t.rg9FQp),
                            onClick: p,
                        }),
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
