n.d(t, {
    r: () => s,
});
var r = n(627968);
n(64700);
var l = n(442433);

function i(e) {
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

function a(e, t) {
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

function s(e, t, s, o, c) {
    let u = s.getGuildId();
    return null != u
        ? (0, l.L3)(
              e,
              async () => {
                  let { default: e } = await Promise.all([n.e("55296"), n.e("14075")]).then(n.bind(n, 335253));
                  return (n) =>
                      (0, r.jsx)(
                          e,
                          a(i({}, n), {
                              user: t,
                              channel: s,
                              guildId: u,
                              onInteraction: (e) => c("GuildVoiceUserContextMenu", e),
                          }),
                      );
              },
              o,
          )
        : (0, l.L3)(
              e,
              async () => {
                  let { default: e } = await n.e("43076").then(n.bind(n, 661455));
                  return (n) =>
                      (0, r.jsx)(
                          e,
                          a(i({}, n), {
                              user: t,
                              channel: s,
                              onInteraction: (e) => c("BaseVoiceUserContextMenu", e),
                          }),
                      );
              },
              o,
          );
}
