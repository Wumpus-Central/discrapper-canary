n.d(t, { Z: () => c }), n(583741);
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(435064),
    s = n(538454);
function c() {
    var e, t;
    let n = (0, a.Wu)([o.Z], () => {
        var e;
        let t = null == (e = o.Z.getLastClipsSession()) ? void 0 : e.newClipIds;
        return null == t
            ? []
            : o.Z.getClips()
                  .slice(0, 4)
                  .filter((e) => t.includes(e.id));
    });
    return (0, i.jsx)("div", {
        className: l()(s.thumbnailStack, {
            [s["height-1"]]: 1 === n.length,
            [s["height-2"]]: 2 === n.length,
            [s["height-3"]]: 3 === n.length,
            [s["height-max"]]: n.length >= 4,
        }),
        children: Array.from(
            ((e = (function (e) {
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
            })({}, n)),
            (t = t = { length: 4 }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e),
        )
            .map((e, t) =>
                null != e
                    ? (0, i.jsx)(
                          "img",
                          {
                              alt: "",
                              className: s.thumbnail,
                              src: e.thumbnail,
                          },
                          e.id,
                      )
                    : (0, i.jsx)("div", {}, "placeholder-".concat(t)),
            )
            .reverse(),
    });
}
