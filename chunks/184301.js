r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(259443),
    s = r(911284),
    l = r(598077),
    u = r(314897),
    c = r(456644),
    d = r(484459);
let f = 300,
    p = new o.Yd('preloadUserProfileForPopout'),
    h = async (e) => {
        let n = u.default.getId() === e,
            { recentActivityEnabled: r } = (0, c.G)({ location: 'preloadUserProfileForPopout' });
        if (!!r && !!n)
            try {
                await Promise.race([(0, s.Z)(e), new Promise((e) => setTimeout(e, f))]);
            } catch (n) {
                p.log('Failed to fetch content inventory outbox for '.concat(e, ':'), n);
            }
    };
async function _() {
    let e, n, r;
    for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    let s = a[0],
        u = a[1];
    if ('string' == typeof s && ('string' == typeof u || null == u)) (e = s), (n = u), (r = a[2]);
    else if (s instanceof l.Z && ('object' == typeof u || null == u)) (e = s.id), (n = s.getAvatarURL(void 0, 80)), (r = u);
    else throw Error('Invalid arguments');
    if (null == e) return Promise.resolve();
    let [c] = await Promise.all([
        (0, d.Z)(e, n, {
            withMutualFriends: !0,
            withMutualGuilds: !0,
            ...r
        }),
        h(e)
    ]);
    return c;
}
