n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(843472),
    a = n(763754),
    s = n(888675),
    o = n(985018);

function c(e) {
    var t, n;
    let { message: c, usernameHook: u, onClickPins: d, compact: p } = e,
        m = (0, a.Ay)(c),
        f = m.nick,
        g = u(m),
        h = () => {
            if (null == c.messageReference) return;
            let { channel_id: e, message_id: t } = c.messageReference;
            l.A.jumpToMessage({
                channelId: e,
                messageId: t,
                flash: !0,
            });
        },
        _ = {
            iconNode: (0, r.jsx)(i.tsw, {
                size: "sm",
                color: "currentColor",
            }),
        };
    return (0, r.jsx)(
        s.A,
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
        })({}, _)),
        (n = n =
            {
                timestamp: c.timestamp,
                compact: p,
                children:
                    null != c.messageReference
                        ? null == d
                            ? o.intl.format(o.t.lD5tup, {
                                  usernameHook: g,
                                  username: f,
                                  messageOnClick: h,
                              })
                            : o.intl.format(o.t.yIDvPL, {
                                  usernameHook: g,
                                  username: f,
                                  pinsActionOnClick: d,
                                  messageOnClick: h,
                              })
                        : null == d
                          ? o.intl.format(o.t.vfkjqx, {
                                usernameHook: g,
                                username: f,
                            })
                          : o.intl.format(o.t.R7vZGZ, {
                                usernameHook: g,
                                username: f,
                                pinsActionOnClick: d,
                            }),
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
        t),
    );
}
