n.d(t, { Z: () => u }), n(388685);
var r = n(313789),
    i = n(518596),
    a = n(332325),
    o = n(981631);
function s(e, t, n) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e) {
    switch (e) {
        case a.Z.MY_GAMES:
            return [r.n.REGISTERED_GAMES_PANEL, o.oAB.REGISTERED_GAMES];
        case a.Z.CLIPS:
            return [r.n.CLIPS_PANEL, o.oAB.CLIPS];
        case a.Z.OVERLAY:
            return [r.n.OVERLAY_PANEL, o.oAB.OVERLAY];
        case a.Z.ACTIVITY_PRIVACY:
            return [r.n.ACTIVITY_PRIVACY_PANEL, o.oAB.ACTIVITY_PRIVACY];
    }
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        [n, r] = c(e);
    (0, i.openUserSettings)(n, l({ section: r }, t));
}
