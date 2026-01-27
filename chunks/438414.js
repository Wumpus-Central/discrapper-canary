n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(205327),
    l = n(261020),
    a = n(424994),
    i = n(272984),
    s = n(985018);

function o(e) {
    var t, n;
    let o,
        { entry: c, baseEntryData: u } = e,
        d = c.extra.entries[0].media,
        m = d.artists[0],
        { title: f, provider: p, image_url: h } = d,
        b = m.name,
        g = {
            onClick: () => (0, l.n)(i.M0.TRACK, d.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, {
                itemName: f,
            }),
        },
        x = {
            onClick: () => (0, l.n)(i.M0.ARTIST, m.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, {
                itemName: b,
            }),
        };
    return (
        p === r.X.SPOTIFY &&
            (o = {
                type: a.a4.SPOTIFY,
            }),
        (t = (function (e) {
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
        })({}, u)),
        (n = n =
            {
                title: f,
                subtitle: b,
                thumbnailUrl: h,
                titleClickable: g,
                subtitleClickable: x,
                thumbnailClickable: g,
                userDescription: s.t.CcVI1T,
                providerIconProps: o,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t
    );
}
