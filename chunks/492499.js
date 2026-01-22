n.d(t, {
    M: () => g,
});
var r = n(64700),
    i = n(379197),
    a = n(488430),
    s = n(311907),
    o = n(457421),
    l = n(940622),
    c = n(559474),
    u = n(985018),
    d = n(795056),
    f = n(996613);

function p(e, t, n) {
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

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = () => {
    let e = (0, l.mb)(c.RN.UPSELL_BANNER),
        t = (0, l.mb)(c.RN.UPSELL_BANNER_POPOUT),
        n = (0, s.bG)([o.A], () => o.A.getMarketingBySurface(i.R.EDIT_PROFILE_SETTINGS)),
        p = r.useMemo(
            () =>
                null != n
                    ? n
                    : {
                          asset: f,
                          popoutAsset: d,
                          title: u.intl.string(u.t.QZVVBh),
                          body: u.intl.string(u.t.sajmAq),
                          version: 0,
                          revertTextColor: !1,
                      },
            [n],
        );
    return r.useMemo(
        () =>
            m(_({}, p), {
                type: a.G.BANNER,
                asset: null != e ? e : p.asset,
                popoutAsset: null != t ? t : p.popoutAsset,
            }),
        [e, t, p],
    );
};
