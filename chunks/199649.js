n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(194359),
    a = n(631937),
    s = n(702321),
    c = n(377171),
    u = n(699516),
    d = n(626135),
    p = n(63063),
    h = n(862679),
    f = n(981631),
    m = n(596401),
    g = n(388032);
function b(e) {
    var t, b;
    let { channel: _, children: C } = e,
        y = (0, i.e7)([u.Z], () => u.Z.isBlocked(_.getRecipientId()));
    (0, a.Z)(_.id);
    let x = (0, s.Z)(_.id),
        v = _.isSystemDM(),
        j = y && !v && !_.isMultiUserDM(),
        O = {};
    if (v) {
        let e = x
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      g.NW.string(g.t['+KSnWV']),
                      (0, r.jsx)(l.rgF, {
                          size: 'xs',
                          color: c.Z.HEADER_PRIMARY
                      })
                  ]
              })
            : g.NW.string(g.t.hvVgAQ);
        (O.message = g.NW.string(g.t.Bt2N7O)),
            (O.subtitle = g.NW.string(g.t['n/Vzk5'])),
            (O.buttonText = e),
            (O.onButtonClick = () => {
                if (x) {
                    open(m.D2),
                        d.default.track(f.rMx.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: 'chat_blocker',
                            target: m.D2
                        });
                    return;
                }
                open(p.Z.getArticleURL(f.BhN.SYSTEM_DMS));
            }),
            (O.imageSrc = n(780961));
    } else
        j &&
            ((O.message = g.NW.string(g.t['9T6N5+'])),
            (O.buttonText = g.NW.string(g.t.XyHpKC)),
            (O.onButtonClick = () => {
                o.Z.unblockUser(_.getRecipientId());
            }));
    return (0, r.jsx)(
        h.Z,
        ((t = (function (e) {
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
        })({}, O)),
        (b = b = { children: C }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(b))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(b)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(b, e));
              }),
        t)
    );
}
