n.d(t, { Z: () => c }), n(978209);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(442837),
    o = n(435064),
    s = n(892983);
function c() {
    var e, t;
    let n = (0, l.Wu)([o.Z], () => {
        var e;
        let t = null == (e = o.Z.getLastClipsSession()) ? void 0 : e.newClipIds;
        return null == t
            ? []
            : o.Z.getClips()
                  .slice(0, 4)
                  .filter((e) => t.includes(e.id));
    });
    return (0, r.jsx)('div', {
        className: a()(s.thumbnailStack, {
            [s['height-1']]: 1 === n.length,
            [s['height-2']]: 2 === n.length,
            [s['height-3']]: 3 === n.length,
            [s['height-max']]: n.length >= 4
        }),
        children: Array.from(
            ((e = (function (e) {
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
            })({}, n)),
            (t = t = { length: 4 }),
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
            e)
        )
            .map((e, t) =>
                null != e
                    ? (0, r.jsx)(
                          'img',
                          {
                              alt: '',
                              className: s.thumbnail,
                              src: e.thumbnail
                          },
                          e.id
                      )
                    : (0, r.jsx)('div', {}, 'placeholder-'.concat(t))
            )
            .reverse()
    });
}
