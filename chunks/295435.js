r.d(t, { S: () => b });
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(916616),
    c = r(981729),
    s = r(911969),
    u = r(558522),
    p = r(981631),
    d = r(388032),
    f = r(868327);
function b(e) {
    let t = l.useRef(null),
        r = e.media;
    if (r.loadingState === s.f.LOADED_NOT_FOUND)
        return (0, n.jsx)(c.u, {
            text: d.NW.string(d.t.UvDfMz),
            position: 'bottom',
            align: 'center',
            targetElementRef: t,
            children: (r) => {
                var l, i;
                return (0, n.jsx)(
                    'div',
                    ((l = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, r)),
                    (i = i =
                        {
                            className: o()(e.className, f.notFoundPlaceholder, { [f.hiddenSpoilers]: e.hiddenSpoilers }),
                            style: {
                                width: e.placeholderWidth,
                                height: e.placeholderHeight
                            },
                            role: 'img',
                            children: (0, n.jsx)(u.Z, {
                                ref: t,
                                className: f.brokenImageIcon
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    l)
                );
            }
        });
    let i = r.loadingState === s.f.LOADING ? p.zo9.LOADING : p.zo9.ERROR;
    return (0, n.jsx)(a.E, {
        className: o()(e.className, { [f.hiddenSpoilers]: e.hiddenSpoilers }),
        readyState: i,
        src: '',
        width: e.placeholderWidth,
        height: e.placeholderHeight,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        mediaLayoutType: e.mediaLayoutType,
        useFullWidth: e.useFullWidth,
        zoomable: !1
    });
}
