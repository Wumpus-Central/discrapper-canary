n.d(t, { A: () => u }), n(896048);
var r = n(780964),
    i = n(840065),
    a = n(857266),
    s = n(652215);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e) {
    switch (e) {
        case a.J.MY_GAMES:
            return [r.X.REGISTERED_GAMES_PANEL, s.nc_.REGISTERED_GAMES];
        case a.J.CLIPS:
            return [r.X.CLIPS_PANEL, s.nc_.CLIPS];
        case a.J.OVERLAY:
            return [r.X.OVERLAY_PANEL, s.nc_.OVERLAY];
        case a.J.ACTIVITY_PRIVACY:
            return [r.X.ACTIVITY_PRIVACY_PANEL, s.nc_.ACTIVITY_PRIVACY];
    }
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        [n, r] = c(e);
    (0, i.openUserSettings)(n, l({ section: r }, t));
}
