n.d(t, { W: () => g });
var r = n(473749),
    i = n(115434),
    a = n(264181),
    o = n(442837),
    s = n(874703),
    l = n(619899),
    c = n(281598),
    u = n(388032),
    d = n(513767),
    f = n(78230);
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
function m(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = () => {
    let e = (0, l.zL)(c.jE.UPSELL_BANNER),
        t = (0, l.zL)(c.jE.UPSELL_BANNER_POPOUT),
        n = (0, o.e7)([s.Z], () => s.Z.getMarketingBySurface(i.K.EDIT_PROFILE_SETTINGS)),
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
            h(_({}, p), {
                type: a.Z.BANNER,
                asset: null != e ? e : p.asset,
                popoutAsset: null != t ? t : p.popoutAsset,
            }),
        [e, t, p],
    );
};
