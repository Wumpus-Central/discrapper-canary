(a.d(t, { w6: () => x }), a(388685), a(642613), a(539854));
var n = a(924322),
    r = a(296009),
    l = a(224706),
    i = a(187162),
    s = a(958521),
    o = a(570911),
    c = a(247397);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
function m(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function p() {
    var e, t;
    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Set(),
        n = o.J6.filter((e) => !a.has(e));
    return {
        applicationId: m(n.length > 0 ? n : o.J6),
        comment: Math.random() > 0.5 ? m(s.x) : void 0,
        tags: Math.random() > 0.3 ? ((e = s.T), (t = Math.floor(3 * Math.random()) + 1), [...e].sort(() => 0.5 - Math.random()).slice(0, t)) : void 0
    };
}
function x(e) {
    var t;
    let a,
        s = null != (t = i.Z.getOverrideWidgets()) ? t : [];
    a =
        e === n.g.FAVORITE
            ? p()
            : (function (e, t) {
                  let a = Math.floor(Math.random() * e) + 1,
                      n = new Set();
                  return Array.from({ length: a }, () => {
                      let e = p(n);
                      return (n.add(e.applicationId), e);
                  });
              })(c.Xe[e]);
    let o = (function (e, t) {
        let a = e.filter((e) => e.gameWidgetType !== t.gameWidgetType);
        return [t, ...a].sort((e, t) => c.rR.indexOf(e.gameWidgetType) - c.rR.indexOf(t.gameWidgetType));
    })(
        s,
        (function (e, t) {
            let a = {
                id: e,
                type: r.l.GAME
            };
            return e === n.g.FAVORITE
                ? u(d({}, a), {
                      gameWidgetType: n.g.FAVORITE,
                      game: t
                  })
                : u(d({}, a), {
                      gameWidgetType: e,
                      games: t
                  });
        })(e, a)
    );
    i.Z.setOverrideWidgets(o);
    let m = [];
    (e === n.g.FAVORITE
        ? m.push(a.applicationId)
        : a.forEach((e) => {
              m.push(e.applicationId);
          }),
        l.Z.getDetectableGamesSupplemental(m));
}
