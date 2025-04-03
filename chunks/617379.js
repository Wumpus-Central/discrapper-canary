n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(110255),
    o = n(64247),
    s = n(981631),
    c = n(388032);
function u(e) {
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
function p(e) {
    let { channel: t } = e,
        n = i.useRef(null);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: n,
        align: 'right',
        animation: a.yRy.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) =>
            t.isThread()
                ? (0, r.jsx)(
                      o.Z,
                      d(u({}, e), {
                          channel: t,
                          navId: 'recents-thread-notifications',
                          label: c.NW.string(c.t.ljs3OT)
                      })
                  )
                : (0, r.jsx)(
                      l.Z,
                      d(u({}, e), {
                          channel: t,
                          navId: 'recents-notifications',
                          label: c.NW.string(c.t.ljs3OT),
                          location: { section: s.jXE.INBOX },
                          includeGuildMute: !0
                      })
                  ),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(a.M0o, {
                ref: n,
                tooltip: c.NW.string(c.t.h850Sk),
                color: a.YX$.TERTIARY,
                icon: (0, r.jsx)(a.Dkj, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                onClick: t
            });
        }
    });
}
