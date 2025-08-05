(n.d(t, { Z: () => p }), n(583741));
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(435064),
    l = n(892983);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 4;
function p() {
    let e = (0, o.Wu)([s.Z], () => {
        var e;
        let t = null == (e = s.Z.getLastClipsSession()) ? void 0 : e.newClipIds;
        return null == t
            ? []
            : s.Z.getClips()
                  .slice(0, _)
                  .filter((e) => t.includes(e.id));
    });
    return (0, r.jsx)('div', {
        className: a()(l.thumbnailStack, {
            [l['height-1']]: 1 === e.length,
            [l['height-2']]: 2 === e.length,
            [l['height-3']]: 3 === e.length,
            [l['height-max']]: e.length >= 4
        }),
        children: Array.from(f(u({}, e), { length: _ }))
            .map((e, t) =>
                null != e
                    ? (0, r.jsx)(
                          'img',
                          {
                              alt: '',
                              className: l.thumbnail,
                              src: e.thumbnail
                          },
                          e.id
                      )
                    : (0, r.jsx)('div', {}, 'placeholder-'.concat(t))
            )
            .reverse()
    });
}
