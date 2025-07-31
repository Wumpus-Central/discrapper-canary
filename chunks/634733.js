(a.d(t, { w6: () => p }), a(388685), a(642613));
var n = a(924322),
    r = a(296009),
    l = a(187162),
    i = a(958521),
    s = a(570911),
    o = a(247397);
function c(e) {
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
function d(e, t) {
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
function u(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function m() {
    var e, t;
    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Set(),
        n = s.J6.filter((e) => !a.has(e));
    return {
        applicationId: u(n.length > 0 ? n : s.J6),
        comment: Math.random() > 0.5 ? u(i.x) : void 0,
        tags: Math.random() > 0.3 ? ((e = i.T), (t = Math.floor(3 * Math.random()) + 1), [...e].sort(() => 0.5 - Math.random()).slice(0, t)) : void 0
    };
}
function p(e) {
    var t;
    let a,
        i = null != (t = l.Z.getOverrideWidgets()) ? t : [];
    a =
        e === n.g.FAVORITE
            ? m()
            : (function (e, t) {
                  let a = Math.floor(Math.random() * e) + 1,
                      n = new Set();
                  return Array.from({ length: a }, () => {
                      let e = m(n);
                      return (n.add(e.applicationId), e);
                  });
              })(o.X[e]);
    let s = (function (e, t) {
        let a = e.filter((e) => e.gameWidgetType !== t.gameWidgetType);
        return [t, ...a].sort((e, t) => o.r.indexOf(e.gameWidgetType) - o.r.indexOf(t.gameWidgetType));
    })(
        i,
        (function (e, t) {
            let a = {
                id: e,
                type: r.l.GAME
            };
            return e === n.g.FAVORITE
                ? d(c({}, a), {
                      gameWidgetType: n.g.FAVORITE,
                      game: t
                  })
                : d(c({}, a), {
                      gameWidgetType: e,
                      games: t
                  });
        })(e, a)
    );
    l.Z.setOverrideWidgets(s);
}
