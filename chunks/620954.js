n.d(t, {
    Pb: () => g,
    Rg: () => h,
    wq: () => m,
}),
    n(35282);
var r = n(13245),
    i = n(556296),
    a = n(237997),
    o = n(13140),
    s = n(610394),
    l = n(987650),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p() {
    return a.default.isLocked(s.Z.getTargetPID()) ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY;
}
function h(e, t) {
    return {
        trackView() {
            let n = p();
            r.Z.track(c.rMx.NOTIFICATION_VIEWED, _(d({}, t), { location: n })), r.Z.notificationEvent(e, l.bv.Viewed);
        },
        trackClick(n) {
            let i = p();
            r.Z.track(
                c.rMx.NOTIFICATION_CLICKED,
                _(d({}, t), {
                    location: i,
                    action_type: n,
                }),
            ),
                r.Z.notificationEvent(e, l.bv.Clicked);
        },
    };
}
function m() {
    let e = i.ZP.getOverlayKeybind();
    return null != e ? (0, o.BB)(e.shortcut, !0) : "???";
}
function g() {
    return m().split(" + ");
}
