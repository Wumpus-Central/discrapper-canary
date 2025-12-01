n.d(t, { Z: () => f });
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
        { provider: u, image_url: f } = n.extra.media,
        p = n.extra.artist.name,
        _ = {
            onClick: () => (0, i.o)(o.Hw.ALBUM, n.extra.media.external_parent_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, { itemName: n.extra.media.parent_title }),
        },
        m = {
            onClick: () => (0, i.o)(o.Hw.ARTIST, n.extra.artist.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, { itemName: p }),
        };
    return (
        u === r.p.SPOTIFY && (t = { type: a.kG.SPOTIFY }),
        d(c({}, l), {
            title: p,
            thumbnailUrl: f,
            titleClickable: m,
            subtitleClickable: _,
            thumbnailClickable: _,
            userDescription: s.t.CcVI1T,
            providerIconProps: t,
        })
    );
}
