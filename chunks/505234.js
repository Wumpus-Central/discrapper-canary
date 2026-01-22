n.d(t, {
    A: () => l,
});
var i = n(627968);
n(64700);
var s = n(621466),
    r = n(442433);
let l = (e) => {
    let { facepileRef: t, goToThread: l, channel: a } = e;
    return {
        handleLeftClick: (e) => {
            var n;
            ((0, s.vq)(e.target) && (null == (n = t.current) ? void 0 : n.contains(e.target))) || l(a, e.shiftKey);
        },
        handleRightClick: (e) =>
            (0, r.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("88974"), n.e("21246")]).then(n.bind(n, 44536));
                return (t) => {
                    var n, s;
                    return (0, i.jsx)(
                        e,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (s = s =
                            {
                                channel: a,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        n),
                    );
                };
            }),
    };
};
