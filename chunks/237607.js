n.d(t, {
    A: () => d,
}),
    n(264879);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(274372),
    o = n(372684),
    c = n(226421),
    u = n(461583);

function d() {
    var e, t;
    let n = (0, a.yK)([s.A], () => {
        var e;
        let t = null == (e = s.A.getLastClipsSession()) ? void 0 : e.newClipIds;
        return null == t
            ? []
            : s.A.getClips()
                  .slice(0, 4)
                  .filter((e) => t.includes(e.id));
    });
    return (0, r.jsx)("div", {
        className: i()(u.vH, {
            [u.gb]: 1 === n.length,
            [u.$d]: 2 === n.length,
            [u.gS]: 3 === n.length,
            [u.hA]: n.length >= 4,
        }),
        children: Array.from(
            ((e = (function (e) {
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
            })({}, n)),
            (t = t =
                {
                    length: 4,
                }),
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
            e),
        )
            .map((e, t) =>
                null != e
                    ? e.type === o.nQ.VOICE_CLIP
                        ? (0, r.jsx)(
                              c.A,
                              {
                                  className: u.xn,
                              },
                              e.id,
                          )
                        : (0, r.jsx)(
                              "img",
                              {
                                  alt: "",
                                  className: u.xn,
                                  src: e.thumbnail,
                              },
                              e.id,
                          )
                    : (0, r.jsx)("div", {}, "placeholder-".concat(t)),
            )
            .reverse(),
    });
}
