n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    s = n(284539),
    o = n(18582),
    i = n(944548),
    a = n(477839),
    c = n(632916);
function l(e) {
    let { cursor: t, selected: n, onClick: s } = e,
        l = (0, a.Ly)()[t];
    return (0, r.jsx)(i.Z, {
        text: l.name,
        borderColor: 'white',
        children: (e) => {
            var t, i;
            return (0, r.jsx)(
                o.Z,
                ((t = (function (e) {
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
                })({}, e)),
                (i = i =
                    {
                        onClick: s,
                        className: c.cursor,
                        children: (0, r.jsx)('img', {
                            src: n ? l.activeSrc : l.src,
                            alt: ''
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t)
            );
        }
    });
}
function u() {
    var e;
    let [t, n] = (0, s.Z)(a.yN.CURSORS),
        o = null !== (e = t.selectedCursor) && void 0 !== e ? e : a.Vx.DEFAULT;
    return (0, r.jsx)('div', {
        className: c.cursors,
        children: a.Wq.map((e) =>
            (0, r.jsx)(
                l,
                {
                    cursor: e,
                    selected: e === o,
                    onClick: () => n({ selectedCursor: e })
                },
                e
            )
        )
    });
}
