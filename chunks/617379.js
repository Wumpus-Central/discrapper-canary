n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(110255),
    o = n(64247),
    l = n(981631),
    s = n(388032);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
function u(e) {
    let { channel: t } = e;
    return (0, r.jsx)(i.yRy, {
        align: 'right',
        animation: i.yRy.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) =>
            t.isThread()
                ? (0, r.jsx)(
                      o.Z,
                      d(c({}, e), {
                          channel: t,
                          navId: 'recents-thread-notifications',
                          label: s.NW.string(s.t.ljs3OT)
                      })
                  )
                : (0, r.jsx)(
                      a.Z,
                      d(c({}, e), {
                          channel: t,
                          navId: 'recents-notifications',
                          label: s.NW.string(s.t.ljs3OT),
                          location: { section: l.jXE.INBOX },
                          includeGuildMute: !0
                      })
                  ),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(i.M0o, {
                tooltip: s.NW.string(s.t.h850Sk),
                color: i.YX$.TERTIARY,
                icon: (0, r.jsx)(i.Dkj, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                onClick: t
            });
        }
    });
}
