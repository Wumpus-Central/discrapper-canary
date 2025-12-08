n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var l = n(498607),
    i = n.n(l),
    o = n(913527),
    a = n.n(o),
    s = n(399606),
    c = n(893966),
    u = n(527379),
    d = n(932039),
    C = n(388032);
function m(e) {
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
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { guildId: t, onClose: n } = e,
        l = (0, s.e7)([c.Z], () => c.Z.getSearchStateByGuildId(t), [t], i()),
        { selectedAccountAgeOption: o } = l,
        { afterDate: f, beforeDate: p, optionId: h } = o,
        g = h === d.Ol.CUSTOM,
        j = g && null != f ? a()(f).format(d.N2) : null,
        x = g && null != p ? a()(p).format(d.N2) : null;
    return (0, r.jsx)(d.ZP, {
        startDateLabel: j,
        endDateLabel: x,
        afterDate: f,
        beforeDate: p,
        selectedOption: h,
        isCustomDateRange: g,
        menuName: "account-age",
        accessibilityLabel: C.intl.string(C.t["D++Tgf"]),
        onClose: n,
        onSelectDateOption: function (e, n) {
            let r = null != n ? a()().subtract(n.input, n.unit).valueOf() : null;
            (0, u.Dr)(
                t,
                b(m({}, l), {
                    selectedAccountAgeOption: {
                        optionId: e,
                        afterDate: r,
                        beforeDate: null,
                    },
                }),
            );
        },
        onToggleCustomDateRange: function () {
            (0, u.Dr)(
                t,
                b(m({}, l), {
                    selectedAccountAgeOption: {
                        optionId: d.Ol.CUSTOM,
                        afterDate: g ? f : null,
                        beforeDate: g ? p : null,
                    },
                }),
            );
        },
        onSelectStartDate: function (e) {
            (0, u.Dr)(
                t,
                b(m({}, l), {
                    selectedAccountAgeOption: {
                        optionId: d.Ol.CUSTOM,
                        afterDate: e.valueOf(),
                        beforeDate: p,
                    },
                }),
            );
        },
        onSelectEndDate: function (e) {
            (0, u.Dr)(
                t,
                b(m({}, l), {
                    selectedAccountAgeOption: {
                        optionId: d.Ol.CUSTOM,
                        afterDate: f,
                        beforeDate: e.valueOf(),
                    },
                }),
            );
        },
    });
}
