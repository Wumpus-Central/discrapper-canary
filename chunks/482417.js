n.d(t, { Z: () => f }), n(388685);
var r = n(423875),
    i = n(740605),
    a = n(206583),
    o = n(616922),
    s = n(388032);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let t,
        { entry: n, baseEntryData: l } = e,
        u = n.extra.entries[0].media,
        f = u.artists[0],
        { title: p, provider: _, image_url: m } = u,
        h = f.name,
        g = {
            onClick: () => (0, i.o)(o.Hw.TRACK, u.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, { itemName: p }),
        },
        E = {
            onClick: () => (0, i.o)(o.Hw.ARTIST, f.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, { itemName: h }),
        };
    return (
        _ === r.p.SPOTIFY && (t = { type: a.kG.SPOTIFY }),
        d(c({}, l), {
            title: p,
            subtitle: h,
            thumbnailUrl: m,
            titleClickable: g,
            subtitleClickable: E,
            thumbnailClickable: g,
            userDescription: s.t.CcVI1T,
            providerIconProps: t,
        })
    );
}
