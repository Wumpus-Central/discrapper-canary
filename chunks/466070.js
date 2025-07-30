n.d(t, { t: () => d });
var i = n(255367),
    r = n(73800),
    l = n(481060),
    o = n(296023),
    a = n(768581),
    s = n(585835);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function d(e) {
    var t,
        { channel: d, application: u, showApplicationImage: p } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) ((n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) ((n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['channel', 'application', 'showApplicationImage']);
    let b = (0, o.w)(d),
        g = r.useCallback(
            () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('30019').then(n.bind(n, 719498));
                    return (t) => {
                        var n, r;
                        return (0, i.jsx)(
                            e,
                            ((n = c({}, t)),
                            (r = r =
                                {
                                    channel: d,
                                    application: u
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n)
                        );
                    };
                }),
            [u, d]
        ),
        f = p ? (null != (t = u.getIconURL(48)) ? t : a.pK['0']) : void 0;
    return (0, i.jsx)(
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
