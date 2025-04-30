n.d(t, { t: () => d });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(296023),
    a = n(768581),
    s = n(585835);
function c(e) {
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
function d(e) {
    var t,
        { channel: d, application: u, showApplicationImage: p } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['channel', 'application', 'showApplicationImage']);
    let b = (0, o.w)(d),
        g = i.useCallback(
            () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('30019').then(n.bind(n, 719498));
                    return (t) => {
                        var n, i;
                        return (0, r.jsx)(
                            e,
                            ((n = c({}, t)),
                            (i = i =
                                {
                                    channel: d,
                                    application: u
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n)
                        );
                    };
                }),
            [u, d]
        ),
        f = p ? (null != (t = u.getIconURL(48)) ? t : a.pK['0']) : void 0;
    return (0, r.jsx)(
        s.Z,
        c(
            {
                imageSrc: f,
                onButtonClick: g,
                details: null != b ? [{ text: b }] : void 0
            },
            m
        )
    );
}
