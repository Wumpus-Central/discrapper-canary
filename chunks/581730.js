n.d(t, {
    Jn: () => g,
    Y9: () => f,
    hM: () => m,
}),
    n(747238);
var r = n(684013),
    i = n(532624),
    l = n(256415),
    a = n(350535),
    s = n(395011),
    o = n(672396),
    c = n(652215);

function u(e) {
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
}

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function p() {
    return l.default.isLocked(s.A.getTargetPID()) ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY;
}

function f(e, t) {
    return {
        trackView() {
            let n = p();
            r.A.track(
                c.HAw.NOTIFICATION_VIEWED,
                d(u({}, t), {
                    location: n,
                }),
            ),
                r.A.notificationEvent(e, o.uj.Viewed);
        },
        trackClick(n) {
            let i = p();
            r.A.track(
                c.HAw.NOTIFICATION_CLICKED,
                d(u({}, t), {
                    location: i,
                    action_type: n,
                }),
            ),
                r.A.notificationEvent(e, o.uj.Clicked);
        },
    };
}

function m() {
    let e = i.Ay.getOverlayKeybind();
    return null != e ? (0, a.dI)(e.shortcut, !0) : "???";
}

function g() {
    return m().split(" + ");
}
