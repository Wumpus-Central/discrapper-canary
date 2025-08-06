n.d(t, { S: () => E });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(916616),
    l = n(981729),
    c = n(911969),
    u = n(558522),
    d = n(981631),
    f = n(388032),
    _ = n(868327);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let t = i.useRef(null),
        n = e.media;
    if (n.loadingState === c.f.LOADED_NOT_FOUND)
        return (0, r.jsx)(l.u, {
            text: f.intl.string(f.t.UvDfMz),
            position: 'bottom',
            align: 'center',
            targetElementRef: t,
            children: (n) =>
                (0, r.jsx)(
                    'div',
                    g(h({}, n), {
                        className: a()(e.className, _.notFoundPlaceholder, { [_.hiddenSpoilers]: e.hiddenSpoilers }),
                        style: {
                            width: e.placeholderWidth,
                            height: e.placeholderHeight
                        },
                        role: 'img',
                        children: (0, r.jsx)(u.Z, {
                            ref: t,
                            className: _.brokenImageIcon
                        })
                    })
                )
        });
    let o = n.loadingState === c.f.LOADING ? d.zo9.LOADING : d.zo9.ERROR;
    return (0, r.jsx)(s.E, {
        className: a()(e.className, { [_.hiddenSpoilers]: e.hiddenSpoilers }),
        readyState: o,
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
