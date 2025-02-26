n.d(t, { Z: () => s }), n(411104);
var r = n(598077),
    i = n(484459);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
async function s() {
    let e, t, n;
    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++) s[l] = arguments[l];
    let c = s[0],
        u = s[1];
    if ('string' == typeof c && ('string' == typeof u || null == u)) (e = c), (t = u), (n = s[2]);
    else if (c instanceof r.Z && ('object' == typeof u || null == u)) (e = c.id), (t = c.getAvatarURL(void 0, 80)), (n = u);
    else throw Error('Invalid arguments');
    return null == e
        ? Promise.resolve()
        : await (0, i.Z)(
              e,
              t,
              a(
                  {
                      type: 'popout',
                      withMutualFriends: !0,
                      withMutualGuilds: !0
                  },
                  n
              )
          );
}
