n.d(t, {
    $G: () => u,
    OR: () => p,
    aL: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(345898),
    l = n(718150);
function s(e) {
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
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
let d = 660,
    u = (e) =>
        (0, r.jsx)(
            o.Z,
            c(s({}, e), {
                className: a()(e.className, {
                    [l.embedVertical]: !e.isHorizontal,
                    [l.embedHorizontal]: e.isHorizontal
                })
            })
        ),
    p = (e) => {
        let { isHorizontal: t } = e;
        return (0, r.jsx)(
            u,
            c(s({}, e), {
                media: () =>
                    (0, r.jsx)('div', {
                        className: a()(l.loadingDescription),
                        children: (0, r.jsx)('div', {
                            className: a()(l.loadingBackgroundWrapper, { [l.loadingBackgroundWrapperHorizontal]: t }),
                            children: (0, r.jsx)('div', { className: l.loadingBackground })
                        })
                    }),
                title: () => (0, r.jsx)('div', { className: a()(l.loadingImage, { [l.loadingImageHorizontal]: t }) })
            })
        );
    };
