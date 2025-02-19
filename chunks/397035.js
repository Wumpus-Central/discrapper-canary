r.d(t, { Z: () => d });
var n = r(192379),
    l = r(835473),
    i = r(81063),
    o = r(591759),
    a = r(561308),
    c = r(206583),
    s = r(701488),
    u = r(388032);
function d(e) {
    var t, r;
    let d,
        { entry: p, baseEntryData: b } = e,
        f = (0, l.q)(p.extra.application_id),
        O = null == f ? void 0 : f.getIconURL(128),
        y = (0, i.getAssetImage)(p.extra.application_id, p.extra.media_assets_large_image, [s.Si.LARGE, s.Si.LARGE]),
        m = p.extra.media_title,
        j = p.extra.media_subtitle,
        g = (0, a.Jg)(p) ? u.t['LH+Z39'] : u.t.YuKgmp,
        h = { type: c.kG.CRUNCHYROLL },
        v = n.useMemo(() => {
            if (null == p.extra.url) return;
            let e = o.Z.safeParseWithQuery(p.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
        }, [p.extra.url]);
    return (
        null != v &&
            (d = {
                href: o.Z.format(v),
                ariaDescription: u.NW.formatToPlainString(u.t.aFFQ3t, { title: m })
            }),
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
        })({}, b)),
        (r = r =
            {
                thumbnailUrl: null != y ? y : O,
                title: m,
                titleClickable: d,
                thumbnailClickable: d,
                subtitle: j,
                userDescription: g,
                providerIconProps: h
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
