n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var l = n(498607),
    o = n.n(l),
    i = n(913527),
    a = n.n(i),
    s = n(399606),
    c = n(893966),
    u = n(527379),
    d = n(932039),
    C = n(388032);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
function p(e) {
    let { guildId: t, onClose: n } = e,
        l = (0, s.e7)([c.Z], () => c.Z.getSearchStateByGuildId(t), [t], o()),
        { selectedAccountAgeOption: i } = l,
        { afterDate: p, beforeDate: f, optionId: h } = i,
        j = h === d.Ol.CUSTOM,
        g = j && null != p ? a()(p).format(d.N2) : null,
        x = j && null != f ? a()(f).format(d.N2) : null;
    return (0, r.jsx)(d.ZP, {
        startDateLabel: g,
        endDateLabel: x,
        afterDate: p,
        beforeDate: f,
        selectedOption: h,
        isCustomDateRange: j,
        menuName: 'account-age',
        accessibilityLabel: C.intl.string(C.t['D++TgY']),
        onClose: n,
        onSelectDateOption: function (e, n) {
            let r = null != n ? a()().subtract(n.input, n.unit).valueOf() : null;
            (0, u.Dr)(
                t,
                b(m({}, l), {
                    selectedAccountAgeOption: {
                        optionId: e,
                        afterDate: r,
                        beforeDate: null
                    }
                })
            );
        },
        onToggleCustomDateRange: function () {
            (0, u.Dr)(
                t,
                b(m({}, l), {
                    selectedAccountAgeOption: {
                        optionId: d.Ol.CUSTOM,
                        afterDate: j ? p : null,
                        beforeDate: j ? f : null
                    }
                })
            );
        },
        onSelectStartDate: function (e) {
            (0, u.Dr)(
                t,
                b(m({}, l), {
                    selectedAccountAgeOption: {
                        optionId: d.Ol.CUSTOM,
                        afterDate: e.valueOf(),
                        beforeDate: f
                    }
                })
            );
        },
        onSelectEndDate: function (e) {
            (0, u.Dr)(
                t,
                b(m({}, l), {
                    selectedAccountAgeOption: {
                        optionId: d.Ol.CUSTOM,
                        afterDate: p,
                        beforeDate: e.valueOf()
                    }
                })
            );
        }
    });
}
