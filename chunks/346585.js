n.d(t, {
    IE: () => A,
    K9: () => p,
    NX: () => T,
    R_: () => S,
    e$: () => _,
    ti: () => f,
    zV: () => E
}),
    n(757143),
    n(301563),
    n(47120),
    n(627341);
var r = n(913527),
    i = n.n(r),
    l = n(278074),
    o = n(768581),
    a = n(709054),
    s = n(624138),
    c = n(219496),
    u = n(801461),
    d = n(388032);
function E(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return o.ZP.getUserAvatarURL(
        {
            id: e.id,
            avatar: e.avatar,
            bot: e.bot,
            discriminator: '0000'
        },
        t,
        80
    );
}
function _(e) {
    let t = (0, s._I)(e.username).replace(u.RN, '').replace(u.iF, '.').toLowerCase();
    return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let I = ['@', '#', ':'],
    N = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'],
    O = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
function T(e) {
    var t;
    let n = e.username.toLowerCase();
    if (
        ((t = u.kt),
        n
            .split('')
            .filter((e) => !t.includes(e.charCodeAt(0)))
            .join('')).length < 2
    )
        return !0;
    for (let e of I) if (n.includes(e)) return !0;
    for (let e of O) if (n === e.toLowerCase()) return !0;
    for (let e of N) if (n.includes(e.toLowerCase())) return !0;
    return !1;
}
function S(e) {
    return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}
function p(e) {
    let t = a.default.extractTimestamp(e);
    try {
        return i()(new Date(t)).format('MMM DD, YYYY');
    } catch (e) {}
    return null;
}
function f(e) {
    return (0, l.EQ)(e)
        .with({ rateLimited: !0 }, () => ({
            type: c.K.RATE_LIMIT,
            message: d.NW.string(d.t.T15lqq)
        }))
        .with({ error: l.P.not(l.P.nullish) }, (e) => {
            let { error: t } = e;
            return {
                type: c.K.ERROR,
                message: t
            };
        })
        .with({ taken: !1 }, () => ({
            type: c.K.AVAILABLE,
            message: d.NW.string(d.t.PgfBS0)
        }))
        .with({ taken: !0 }, () => ({
            type: c.K.ERROR,
            message: d.NW.string(d.t.mCrAUV)
        }))
        .with({ error: l.P.nullish }, () => ({
            type: c.K.INTERNAL_ERROR,
            message: ''
        }))
        .otherwise(() => void 0);
}
function A(e) {
    return new Date(2024, 2, 4).toLocaleDateString(e, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
