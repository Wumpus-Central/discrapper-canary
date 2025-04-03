n.d(t, {
    P: () => d,
    R: () => u
}),
    n(301563);
var i = n(13245),
    r = n(556296),
    o = n(237997),
    l = n(13140),
    a = n(145597),
    s = n(987650),
    c = n(981631);
function u(e, t) {
    return {
        trackView() {
            i.Z.track(c.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, s.bv.Viewed);
        },
        trackClick(n) {
            var r, l;
            let u = o.default.isLocked((0, a.getPID)()) ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(
                c.rMx.NOTIFICATION_CLICKED,
                ((r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, t)),
                (l = l =
                    {
                        location: u,
                        action_type: n
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                r)
            ),
                i.Z.notificationEvent(e, s.bv.Clicked);
        }
    };
}
function d() {
    let e = r.ZP.getOverlayKeybind();
    return null != e ? (0, l.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
