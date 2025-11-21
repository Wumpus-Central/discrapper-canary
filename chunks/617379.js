n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(681715),
    o = n(481060),
    a = n(110255),
    s = n(64247),
    c = n(981631),
    u = n(388032);
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
function f(e, t) {
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
    return (0, r.jsx)(o.yRy, {
        targetElementRef: n,
        align: "right",
        animation: o.yRy.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, r.jsx)(
                      s.Z,
                      f(d({}, e), {
                          channel: t,
                          navId: "recents-thread-notifications",
                          label: u.intl.string(u.t.ljs3Oe),
                      }),
                  )
                : (0, r.jsx)(
                      a.Z,
                      f(d({}, e), {
                          channel: t,
                          navId: "recents-notifications",
                          label: u.intl.string(u.t.ljs3Oe),
                          location: { section: c.jXE.INBOX },
                          includeGuildMute: !0,
                      }),
                  ),
        children: (e) => {
            let { onClick: t } = e;
            return (0, r.jsx)(l.u, {
                text: u.intl.string(u.t.h850Ss),
                targetElementRef: n,
                children: (0, r.jsx)(o.hU, {
                    "aria-label": u.intl.string(u.t.h850Ss),
                    icon: o.Dkj,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
