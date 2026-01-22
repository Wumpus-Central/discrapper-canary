n.d(t, { A: () => o }), n(65821);
var r = n(427157),
    i = n(576622);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function o() {
    let e, t, n;
    for (var a = arguments.length, o = Array(a), l = 0; l < a; l++) o[l] = arguments[l];
    let c = o[0],
        u = o[1];
    if ("string" == typeof c && ("string" == typeof u || null == u)) (e = c), (t = u), (n = o[2]);
    else if (c instanceof r.A && ("object" == typeof u || null == u))
        (e = c.id), (t = c.getAvatarURL(void 0, 80)), (n = u);
    else throw Error("[preloadUserProfileForPopout] Invalid arguments");
    return null == e
        ? Promise.resolve()
        : (0, i.A)(
              e,
              t,
              s(
                  {
                      withMutualFriends: !0,
                      withMutualGuilds: !0,
                      waitForRefetch: !1,
                  },
                  n,
              ),
          );
}
