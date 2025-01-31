n.d(t, {
    IE: () => O,
    K9: () => R,
    NX: () => A,
    R_: () => S,
    e$: () => _,
    ti: () => C,
    zV: () => d
}),
    n(757143),
    n(47120),
    n(627341);
var i = n(913527),
    l = n.n(i),
    r = n(278074),
    a = n(768581),
    s = n(709054),
    o = n(624138),
    c = n(219496),
    u = n(801461),
    E = n(388032);
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return a.ZP.getUserAvatarURL(
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
    let t = (0, o._I)(e.username).replace(u.RN, '').replace(u.iF, '.').toLowerCase();
    return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let I = ['@', '#', ':'],
    T = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'],
    N = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
function A(e) {
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
    for (let e of N) if (n === e.toLowerCase()) return !0;
    for (let e of T) if (n.includes(e.toLowerCase())) return !0;
    return !1;
}
function S(e) {
    return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}
function R(e) {
    let t = s.default.extractTimestamp(e);
    try {
        return l()(new Date(t)).format('MMM DD, YYYY');
    } catch (e) {}
    return null;
}
function C(e) {
    return (0, r.EQ)(e)
        .with({ rateLimited: !0 }, () => ({
            type: c.K.RATE_LIMIT,
            message: E.intl.string(E.t.T15lqq)
        }))
        .with({ error: r.P.not(r.P.nullish) }, (e) => {
            let { error: t } = e;
            return {
                type: c.K.ERROR,
                message: t
            };
        })
        .with({ taken: !1 }, () => ({
            type: c.K.AVAILABLE,
            message: E.intl.string(E.t.PgfBS0)
        }))
        .with({ taken: !0 }, () => ({
            type: c.K.ERROR,
            message: E.intl.string(E.t.mCrAUV)
        }))
        .with({ error: r.P.nullish }, () => ({
            type: c.K.INTERNAL_ERROR,
            message: ''
        }))
        .otherwise(() => void 0);
}
function O(e) {
    return new Date(2024, 2, 4).toLocaleDateString(e, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
