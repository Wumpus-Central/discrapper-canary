n.d(t, { Z: () => g });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(194359),
    o = n(631937),
    s = n(702321),
    c = n(699516),
    u = n(626135),
    d = n(63063),
    p = n(862679),
    h = n(981631),
    f = n(596401),
    m = n(388032);
function g(e) {
    var t, g;
    let { channel: b, children: C } = e,
        y = (0, r.e7)([c.Z], () => c.Z.isBlocked(b.getRecipientId()));
    (0, o.Z)(b.id);
    let _ = (0, s.Z)(b.id),
        v = b.isSystemDM(),
        O = y && !v && !b.isMultiUserDM(),
        x = {};
    if (v) {
        let e = _ ? m.intl.string(m.t["+KSnWX"]) : m.intl.string(m.t.hvVgAZ);
        (x.message = m.intl.string(m.t.Bt2N7D)),
            (x.subtitle = m.intl.string(m.t["n/Vzkw"])),
            (x.buttonText = e),
            (x.buttonIcon = _ ? l.rgF : void 0),
            (x.onButtonClick = () => {
                if (_) {
                    open(f.D2),
                        u.default.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: "chat_blocker",
                            target: f.D2,
                        });
                    return;
                }
                open(d.Z.getArticleURL(h.BhN.SYSTEM_DMS));
            }),
            (x.imageSrc = n(780961));
    } else
        O &&
            ((x.message = m.intl.string(m.t["9T6N5/"])),
            (x.buttonText = m.intl.string(m.t.XyHpKH)),
            (x.onButtonClick = () => {
                a.Z.unblockUser(b.getRecipientId());
            }));
    return (0, i.jsx)(
        p.Z,
        ((t = (function (e) {
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
        })({}, x)),
        (g = g = { children: C }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(g))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(g)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(g, e));
              }),
        t),
    );
}
