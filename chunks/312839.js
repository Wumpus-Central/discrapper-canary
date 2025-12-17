n.d(t, {
    P: () => f,
    R: () => u,
}),
    n(35282);
var i = n(13245),
    r = n(556296),
    a = n(237997),
    s = n(13140),
    o = n(981631),
    l = n(987650);
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
            let n = a.default.isInstanceLocked() ? o.Sbl.LOCKED_OVERLAY : o.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(o.rMx.NOTIFICATION_VIEWED, d(c({}, t), { location: n })), i.Z.notificationEvent(e, l.bv.Viewed);
        },
        trackClick(n) {
            let r = a.default.isInstanceLocked() ? o.Sbl.LOCKED_OVERLAY : o.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(
                o.rMx.NOTIFICATION_CLICKED,
                d(c({}, t), {
                    location: r,
                    action_type: n,
                }),
            ),
                i.Z.notificationEvent(e, l.bv.Clicked);
        },
    };
}
function f() {
    let e = r.ZP.getOverlayKeybind();
    return null != e ? (0, s.BB)(e.shortcut, !0).split(" + ") : ["???"];
}
