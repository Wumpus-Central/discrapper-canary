n.d(t, {
    P: () => d,
    R: () => c
}),
    n(35282);
var i = n(13245),
    r = n(556296),
    o = n(237997),
    s = n(13140),
    l = n(981631),
    a = n(987650);
function c(e, t) {
    return {
        trackView() {
            i.Z.track(l.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, a.bv.Viewed);
        },
        trackClick(n) {
            var r, s;
            let c = o.default.isInstanceLocked() ? l.Sbl.LOCKED_OVERLAY : l.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(
                l.rMx.NOTIFICATION_CLICKED,
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
                (s = s =
                    {
                        location: c,
                        action_type: n
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                r)
            ),
                i.Z.notificationEvent(e, a.bv.Clicked);
        }
    };
}
function d() {
    let e = r.ZP.getOverlayKeybind();
    return null != e ? (0, s.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
