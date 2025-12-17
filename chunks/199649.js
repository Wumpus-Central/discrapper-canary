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
    f = n(981631),
    h = n(596401),
    m = n(388032);
function g(e) {
    var t, g;
    let { channel: b, children: C } = e,
        y = (0, r.e7)([c.Z], () => c.Z.isBlocked(b.getRecipientId()));
    (0, o.Z)(b.id);
    let v = (0, s.Z)(b.id),
        x = b.isSystemDM(),
        O = y && !x && !b.isMultiUserDM(),
        E = {};
    if (x) {
        let e = v ? m.intl.string(m.t["+KSnWX"]) : m.intl.string(m.t.hvVgAZ);
        (E.message = m.intl.string(m.t.Bt2N7D)),
            (E.subtitle = m.intl.string(m.t["n/Vzkw"])),
            (E.buttonText = e),
            (E.buttonIcon = v ? l.rgF : void 0),
            (E.onButtonClick = () => {
                if (v) {
                    open(h.D2),
                        u.default.track(f.rMx.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: "chat_blocker",
                            target: h.D2,
                        });
                    return;
                }
                open(d.Z.getArticleURL(f.BhN.SYSTEM_DMS));
            }),
            (E.imageSrc = n(780961));
    } else
        O &&
            ((E.message = m.intl.string(m.t["9T6N5/"])),
            (E.buttonText = m.intl.string(m.t.XyHpKH)),
            (E.onButtonClick = () => {
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
        })({}, E)),
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
