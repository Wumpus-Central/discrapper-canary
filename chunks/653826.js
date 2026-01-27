n.d(t, {
    A: () => d,
});
var r = n(64700),
    l = n(429913),
    a = n(139675),
    i = n(998218),
    s = n(583846),
    o = n(424994),
    c = n(360469),
    u = n(985018);

function d(e) {
    var t, n;
    let d,
        { entry: m, baseEntryData: f } = e,
        p = (0, l.h)(m.extra.application_id),
        h = null == p ? void 0 : p.getIconURL(128),
        b = (0, a.uD)(m.extra.application_id, m.extra.media_assets_large_image, [c.iu.LARGE, c.iu.LARGE]),
        g = m.extra.media_title,
        x = m.extra.media_subtitle,
        y = (0, s.Hd)(m) ? u.t["LH+Z3y"] : u.t.YuKgml,
        v = {
            type: o.a4.CRUNCHYROLL,
        },
        j = r.useMemo(() => {
            if (null == m.extra.url) return;
            let e = i.A.safeParseWithQuery(m.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
        }, [m.extra.url]);
    return (
        null != j &&
            (d = {
                href: i.A.format(j),
                ariaDescription: u.intl.formatToPlainString(u.t.aFFQ3g, {
                    title: g,
                }),
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
        })({}, f)),
        (n = n =
            {
                thumbnailUrl: null != b ? b : h,
                title: g,
                titleClickable: d,
                thumbnailClickable: d,
                subtitle: x,
                userDescription: y,
                providerIconProps: v,
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
