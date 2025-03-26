n.d(t, { Z: () => l }), n(411104);
var r = n(598077),
    i = n(830181),
    o = n(484459);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
async function l() {
    let e, t, n;
    for (var a = arguments.length, l = Array(a), c = 0; c < a; c++) l[c] = arguments[c];
    let u = l[0],
        d = l[1];
    if ('string' == typeof u && ('string' == typeof d || null == d)) (e = u), (t = d), (n = l[2]);
    else if (u instanceof r.Z && ('object' == typeof d || null == d)) (e = u.id), (t = u.getAvatarURL(void 0, 80)), (n = d);
    else throw Error('Invalid arguments');
    if (null == e) return Promise.resolve();
    let { waitForRefetch: f } = (0, i.x)({ location: 'preloadUserProfileForPopout' });
    await (0, o.Z)(
        e,
        t,
        s(
            {
                type: 'popout',
                withMutualFriends: !0,
                withMutualGuilds: !0,
                waitForRefetch: f
            },
            n
        )
    );
}
