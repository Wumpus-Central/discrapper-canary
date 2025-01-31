n.d(t, { Z: () => f }), n(47120), n(411104);
var i = n(259443),
    r = n(911284),
    a = n(598077),
    s = n(314897),
    o = n(456644),
    l = n(484459);
let u = 300,
    c = new i.Yd('preloadUserProfileForPopout'),
    d = async (e) => {
        let t = s.default.getId() === e,
            { recentActivityEnabled: n } = (0, o.G)({ location: 'preloadUserProfileForPopout' });
        if (n && t)
            try {
                await Promise.race([(0, r.Z)(e), new Promise((e) => setTimeout(e, u))]);
            } catch (t) {
                c.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function f() {
    let e, t, n;
    for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
    let o = r[0],
        u = r[1];
    if ('string' == typeof o && ('string' == typeof u || null == u)) (e = o), (t = u), (n = r[2]);
    else if (o instanceof a.Z && ('object' == typeof u || null == u)) (e = o.id), (t = o.getAvatarURL(void 0, 80)), (n = u);
    else throw Error('Invalid arguments');
    if (null == e) return Promise.resolve();
    let [c] = await Promise.all([
        (0, l.Z)(e, t, {
            withMutualFriends: !0,
            withMutualGuilds: !0,
            ...n
        }),
        d(e)
    ]);
    return c;
}
