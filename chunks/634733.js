a.d(t, { w6: () => p }), a(388685), a(642613), a(539854);
var n = a(296009),
    r = a(224706),
    l = a(592183),
    i = a(224724),
    s = a(958521),
    o = a(570911),
    c = a(247397);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = a[t]),
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
function x() {
    var e, t;
    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Set(),
        n = o.J6.filter((e) => !a.has(e));
    return {
        applicationId: m(n.length > 0 ? n : o.J6),
        comment: Math.random() > 0.5 ? m(s.x) : void 0,
        tags:
            Math.random() > 0.3
                ? ((e = s.T),
                  (t = Math.floor(3 * Math.random()) + 1),
                  [...e].sort(() => 0.5 - Math.random()).slice(0, t))
                : void 0,
    };
}
function p(e) {
    var t;
    let a,
        s = null != (t = i.Z.getOverrideWidgets()) ? t : [];
    a =
        e === n.l.FAVORITE_GAMES
            ? x()
            : (function (e, t) {
                  let a = Math.floor(Math.random() * e) + 1,
                      n = new Set();
                  return Array.from({ length: a }, () => {
                      let e = x(n);
                      return n.add(e.applicationId), e;
                  });
              })(c.Xe[e]);
    let o = (function (e, t) {
        let a = e.filter((e) => e.type !== t.type);
        return [t, ...a].sort((e, t) => c.rR.indexOf(e.type) - c.rR.indexOf(t.type));
    })(
        s,
        (function (e, t) {
            let a = { id: e };
            return e === n.l.FAVORITE_GAMES
                ? u(d({}, a), {
                      type: n.l.FAVORITE_GAMES,
                      game: t,
                  })
                : u(d({}, a), {
                      type: e,
                      games: t,
                  });
        })(e, a),
    );
    l.Z.setOverrideWidgets(o);
    let m = [];
    e === n.l.FAVORITE_GAMES
        ? m.push(a.applicationId)
        : a.forEach((e) => {
              m.push(e.applicationId);
          }),
        r.Z.getDetectableGamesSupplemental(m);
}
