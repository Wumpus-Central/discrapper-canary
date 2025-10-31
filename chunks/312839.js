n.d(t, {
    P: () => h,
    R: () => u,
}),
    n(35282);
var i = n(13245),
    r = n(556296),
    l = n(237997),
    o = n(13140),
    s = n(981631),
    a = n(987650);
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
            let n = l.default.isInstanceLocked() ? s.Sbl.LOCKED_OVERLAY : s.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(s.rMx.NOTIFICATION_VIEWED, d(c({}, t), { location: n })), i.Z.notificationEvent(e, a.bv.Viewed);
        },
        trackClick(n) {
            let r = l.default.isInstanceLocked() ? s.Sbl.LOCKED_OVERLAY : s.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(
                s.rMx.NOTIFICATION_CLICKED,
                d(c({}, t), {
                    location: r,
                    action_type: n,
                }),
            ),
                i.Z.notificationEvent(e, a.bv.Clicked);
        },
    };
}
function h() {
    let e = r.ZP.getOverlayKeybind();
    return null != e ? (0, o.BB)(e.shortcut, !0).split(" + ") : ["???"];
}
