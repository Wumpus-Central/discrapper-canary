n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var l = n(498607),
    o = n.n(l),
    a = n(913527),
    i = n.n(a),
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
        { selectedJoinDateOption: a } = l,
        { afterDate: p, beforeDate: f, optionId: h } = a,
        j = h === d.Ol.CUSTOM,
        g = j && null != p ? i()(p).format(d.N2) : null,
        x = j && null != f ? i()(f).format(d.N2) : null;
    return (0, r.jsx)(d.ZP, {
        startDateLabel: g,
        endDateLabel: x,
        afterDate: p,
        beforeDate: f,
        selectedOption: h,
        isCustomDateRange: j,
        menuName: 'joined-date',
        accessibilityLabel: C.NW.string(C.t.XMVinZ),
        onClose: n,
        onSelectDateOption: function (e, n) {
            let r = null != n ? i()().subtract(n.input, n.unit).valueOf() : null;
            (0, u.Dr)(
                t,
                b(m({}, l), {
                    selectedJoinDateOption: {
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
                    selectedJoinDateOption: {
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
                    selectedJoinDateOption: {
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
                    selectedJoinDateOption: {
                        optionId: d.Ol.CUSTOM,
                        afterDate: p,
                        beforeDate: e.valueOf()
                    }
                })
            );
        }
    });
}
