n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(194359),
    o = n(631937),
    s = n(702321),
    c = n(699516),
    u = n(626135),
    d = n(63063),
    p = n(862679),
    f = n(981631),
    h = n(596401),
    m = n(388032);
function g(e) {
    var t, g;
    let { channel: b, children: _ } = e,
        y = (0, i.e7)([c.Z], () => c.Z.isBlocked(b.getRecipientId()));
    (0, o.Z)(b.id);
    let C = (0, s.Z)(b.id),
        v = b.isSystemDM(),
        O = y && !v && !b.isMultiUserDM(),
        x = {};
    if (v) {
        let e = C ? m.intl.string(m.t["+KSnWX"]) : m.intl.string(m.t.hvVgAZ);
        (x.message = m.intl.string(m.t.Bt2N7D)),
            (x.subtitle = m.intl.string(m.t["n/Vzkw"])),
            (x.buttonText = e),
            (x.buttonIcon = C ? l.rgF : void 0),
            (x.onButtonClick = () => {
                if (C) {
                    open(h.D2),
                        u.default.track(f.rMx.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: "chat_blocker",
                            target: h.D2,
                        });
                    return;
                }
                open(d.Z.getArticleURL(f.BhN.SYSTEM_DMS));
            }),
            (x.imageSrc = n(780961));
    } else
        O &&
            ((x.message = m.intl.string(m.t["9T6N5/"])),
            (x.buttonText = m.intl.string(m.t.XyHpKH)),
            (x.onButtonClick = () => {
                a.Z.unblockUser(b.getRecipientId());
            }));
    return (0, r.jsx)(
        p.Z,
        ((t = (function (e) {
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
        })({}, x)),
        (g = g = { children: _ }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(g))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(g)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(g, e));
              }),
        t),
    );
}
