r.d(t, { Z: () => c }), r(47120);
var n = r(423875),
    l = r(740605),
    i = r(206583),
    o = r(616922),
    a = r(388032);
function c(e) {
    var t, r;
    let c,
        { entry: s, baseEntryData: u } = e,
        p = s.extra.entries[0].media,
        d = p.artists[0],
        { title: f, provider: b, image_url: O } = p,
        y = d.name,
        m = {
            onClick: () => (0, l.o)(o.Hw.TRACK, p.external_id),
            ariaDescription: a.NW.formatToPlainString(a.t.xTsar6, { itemName: f })
        },
        j = {
            onClick: () => (0, l.o)(o.Hw.ARTIST, d.external_id),
            ariaDescription: a.NW.formatToPlainString(a.t.xTsar6, { itemName: y })
        };
    return (
        b === n.p.SPOTIFY && (c = { type: i.kG.SPOTIFY }),
        (t = (function (e) {
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
        })({}, u)),
        (r = r =
            {
                title: f,
                subtitle: y,
                thumbnailUrl: O,
                titleClickable: m,
                subtitleClickable: j,
                thumbnailClickable: m,
                userDescription: a.t.CcVI1d,
                providerIconProps: c
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t
    );
}
