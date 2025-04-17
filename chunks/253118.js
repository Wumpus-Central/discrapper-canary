n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(904245),
    l = n(739566),
    o = n(834129),
    s = n(388032);
function c(e) {
    var t, n;
    let { message: c, usernameHook: u, onClickPins: d, compact: p } = e,
        m = (0, l.ZP)(c),
        f = m.nick,
        h = u(m),
        g = () => {
            if (null == c.messageReference) return;
            let { channel_id: e, message_id: t } = c.messageReference;
            a.Z.jumpToMessage({
                channelId: e,
                messageId: t,
                flash: !0
            });
        },
        _ = {
            iconNode: (0, r.jsx)(i.qQX, {
                size: 'sm',
                color: 'currentColor'
            })
        };
    return (0, r.jsx)(
        o.Z,
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
        })({}, _)),
        (n = n =
            {
                timestamp: c.timestamp,
                compact: p,
                children:
                    null != c.messageReference
                        ? null == d
                            ? s.NW.format(s.t.lD5tur, {
                                  usernameHook: h,
                                  username: f,
                                  messageOnClick: g
                              })
                            : s.NW.format(s.t.yIDvPD, {
                                  usernameHook: h,
                                  username: f,
                                  pinsActionOnClick: d,
                                  messageOnClick: g
                              })
                        : null == d
                          ? s.NW.format(s.t.vfkjq6, {
                                usernameHook: h,
                                username: f
                            })
                          : s.NW.format(s.t.R7vZGR, {
                                usernameHook: h,
                                username: f,
                                pinsActionOnClick: d
                            })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
