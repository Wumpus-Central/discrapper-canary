n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(843472),
    s = n(763754),
    o = n(888675),
    l = n(985018);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { message: t, usernameHook: n, onClickPins: c, compact: d } = e,
        p = (0, s.Ay)(t),
        _ = p.nick,
        h = n(p),
        m = () => {
            if (null == t.messageReference) return;
            let { channel_id: e, message_id: n } = t.messageReference;
            a.A.jumpToMessage({
                channelId: e,
                messageId: n,
                flash: !0,
            });
        },
        g = () =>
            null != t.messageReference
                ? null == c
                    ? l.intl.format(l.t.lD5tup, {
                          usernameHook: h,
                          username: _,
                          messageOnClick: m,
                      })
                    : l.intl.format(l.t.yIDvPL, {
                          usernameHook: h,
                          username: _,
                          pinsActionOnClick: c,
                          messageOnClick: m,
                      })
                : null == c
                  ? l.intl.format(l.t.vfkjqx, {
                        usernameHook: h,
                        username: _,
                    })
                  : l.intl.format(l.t.R7vZGZ, {
                        usernameHook: h,
                        username: _,
                        pinsActionOnClick: c,
                    }),
        E = {
            iconNode: (0, r.jsx)(i.tsw, {
                size: "sm",
                color: "currentColor",
            }),
        };
    return (0, r.jsx)(
        o.A,
        f(u({}, E), {
            timestamp: t.timestamp,
            compact: d,
            children: g(),
        }),
    );
}
