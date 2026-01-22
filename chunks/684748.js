n.d(t, {
    J: () => h,
    Y: () => u,
}),
    n(747238);
var i = n(684013),
    r = n(532624),
    s = n(256415),
    l = n(350535),
    o = n(652215),
    a = n(672396);

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function u(e, t) {
    return {
        trackView() {
            let n = s.default.isInstanceLocked() ? o.ThZ.LOCKED_OVERLAY : o.ThZ.UNLOCKED_OVERLAY;
            i.A.track(
                o.HAw.NOTIFICATION_VIEWED,
                d(c({}, t), {
                    location: n,
                }),
            ),
                i.A.notificationEvent(e, a.uj.Viewed);
        },
        trackClick(n) {
            let r = s.default.isInstanceLocked() ? o.ThZ.LOCKED_OVERLAY : o.ThZ.UNLOCKED_OVERLAY;
            i.A.track(
                o.HAw.NOTIFICATION_CLICKED,
                d(c({}, t), {
                    location: r,
                    action_type: n,
                }),
            ),
                i.A.notificationEvent(e, a.uj.Clicked);
        },
    };
}

function h() {
    let e = r.Ay.getOverlayKeybind();
    return null != e ? (0, l.dI)(e.shortcut, !0).split(" + ") : ["???"];
}
