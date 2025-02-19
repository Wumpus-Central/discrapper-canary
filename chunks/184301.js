n.d(t, { Z: () => _ }), n(47120), n(411104);
var r = n(259443),
    i = n(911284),
    o = n(598077),
    a = n(314897),
    s = n(456644),
    l = n(484459);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = 300,
    f = new r.Yd('preloadUserProfileForPopout'),
    p = async (e) => {
        let t = a.default.getId() === e,
            { recentActivityEnabled: n } = (0, s.G)({ location: 'preloadUserProfileForPopout' });
        if (n && t)
            try {
                await Promise.race([(0, i.Z)(e), new Promise((e) => setTimeout(e, d))]);
            } catch (t) {
                f.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function _() {
    let e, t, n;
    for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
    let s = i[0],
        c = i[1];
    if ('string' == typeof s && ('string' == typeof c || null == c)) (e = s), (t = c), (n = i[2]);
    else if (s instanceof o.Z && ('object' == typeof c || null == c)) (e = s.id), (t = s.getAvatarURL(void 0, 80)), (n = c);
    else throw Error('Invalid arguments');
    if (null == e) return Promise.resolve();
    let [d] = await Promise.all([
        (0, l.Z)(
            e,
            t,
            u(
                {
                    withMutualFriends: !0,
                    withMutualGuilds: !0
                },
                n
            )
        ),
        p(e)
    ]);
    return d;
}
