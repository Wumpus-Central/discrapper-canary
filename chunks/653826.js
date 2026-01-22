n.d(t, { A: () => h });
var r = n(64700),
    i = n(429913),
    a = n(139675),
    s = n(998218),
    o = n(583846),
    l = n(424994),
    c = n(360469),
    u = n(985018);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let t,
        { entry: n, baseEntryData: d } = e,
        p = (0, i.h)(n.extra.application_id),
        h = null == p ? void 0 : p.getIconURL(128),
        m = (0, a.uD)(n.extra.application_id, n.extra.media_assets_large_image, [c.iu.LARGE, c.iu.LARGE]),
        g = n.extra.media_title,
        E = n.extra.media_subtitle,
        b = (0, o.Hd)(n) ? u.t["LH+Z3y"] : u.t.YuKgml,
        y = { type: l.a4.CRUNCHYROLL },
        O = r.useMemo(() => {
            if (null == n.extra.url) return;
            let e = s.A.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
        }, [n.extra.url]);
    return (
        null != O &&
            (t = {
                href: s.A.format(O),
                ariaDescription: u.intl.formatToPlainString(u.t.aFFQ3g, { title: g }),
            }),
        _(f({}, d), {
            thumbnailUrl: null != m ? m : h,
            title: g,
            titleClickable: t,
            thumbnailClickable: t,
            subtitle: E,
            userDescription: b,
            providerIconProps: y,
        })
    );
}
