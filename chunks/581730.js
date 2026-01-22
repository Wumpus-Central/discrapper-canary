n.d(t, {
    Jn: () => g,
    Y9: () => h,
    hM: () => m,
}),
    n(747238);
var r = n(684013),
    i = n(532624),
    a = n(256415),
    s = n(350535),
    o = n(395011),
    l = n(672396),
    c = n(652215);

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

function p(e, t) {
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

function _() {
    return a.default.isLocked(o.A.getTargetPID()) ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY;
}

function h(e, t) {
    return {
        trackView() {
            let n = _();
            r.A.track(
                c.HAw.NOTIFICATION_VIEWED,
                p(d({}, t), {
                    location: n,
                }),
            ),
                r.A.notificationEvent(e, l.uj.Viewed);
        },
        trackClick(n) {
            let i = _();
            r.A.track(
                c.HAw.NOTIFICATION_CLICKED,
                p(d({}, t), {
                    location: i,
                    action_type: n,
                }),
            ),
                r.A.notificationEvent(e, l.uj.Clicked);
        },
    };
}

function m() {
    let e = i.Ay.getOverlayKeybind();
    return null != e ? (0, s.dI)(e.shortcut, !0) : "???";
}

function g() {
    return m().split(" + ");
}
