n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(904245),
    o = n(739566),
    l = n(834129),
    s = n(388032);
function c(e) {
    var t, c;
    let { message: d, usernameHook: u, onClickPins: p, compact: m } = e,
        f = (0, o.ZP)(d),
        h = f.nick,
        g = u(f),
        _ = () => {
            if (null == d.messageReference) return;
            let { channel_id: e, message_id: t } = d.messageReference;
            a.Z.jumpToMessage({
                channelId: e,
                messageId: t,
                flash: !0
            });
        },
        b = (0, i.bWb)().enabled
            ? {
                  iconNode: (0, r.jsx)(i.qQX, {
                      size: 'sm',
                      color: 'currentColor'
                  })
              }
            : { icon: n(879066) };
    return (0, r.jsx)(
        l.Z,
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
        })({}, b)),
        (c = c =
            {
                timestamp: d.timestamp,
                compact: m,
                children:
                    null != d.messageReference
                        ? null == p
                            ? s.NW.format(s.t.lD5tur, {
                                  usernameHook: g,
                                  username: h,
                                  messageOnClick: _
                              })
                            : s.NW.format(s.t.yIDvPD, {
                                  usernameHook: g,
                                  username: h,
                                  pinsActionOnClick: p,
                                  messageOnClick: _
                              })
                        : null == p
                          ? s.NW.format(s.t.vfkjq6, {
                                usernameHook: g,
                                username: h
                            })
                          : s.NW.format(s.t.R7vZGR, {
                                usernameHook: g,
                                username: h,
                                pinsActionOnClick: p
                            })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(c))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(c)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(c, e));
              }),
        t)
    );
}
