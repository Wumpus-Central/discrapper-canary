n.d(t, {
    IE: () => m,
    K9: () => N,
    NX: () => T,
    R_: () => S,
    e$: () => E,
    ti: () => f,
    zV: () => _
}),
    n(704826),
    n(35282),
    n(388685),
    n(314940);
var r = n(913527),
    i = n.n(r),
    l = n(278074),
    o = n(768581),
    a = n(709054),
    c = n(624138),
    s = n(219496),
    u = n(801461),
    d = n(388032);
function _(e) {
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
function E(e) {
    let t = (0, c._I)(e.username).replace(u.RN, '').replace(u.iF, '.').toLowerCase();
    return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let O = ['@', '#', ':'],
    I = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'],
    p = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
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
    for (let e of O) if (n.includes(e)) return !0;
    for (let e of p) if (n === e.toLowerCase()) return !0;
    for (let e of I) if (n.includes(e.toLowerCase())) return !0;
    return !1;
}
function S(e) {
    return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}
function N(e) {
    let t = a.default.extractTimestamp(e);
    try {
        return i()(new Date(t)).format('MMM DD, YYYY');
    } catch (e) {}
    return null;
}
function f(e) {
    return (0, l.EQ)(e)
        .with({ rateLimited: !0 }, () => ({
            type: s.K.RATE_LIMIT,
            message: d.intl.string(d.t.T15lqq)
        }))
        .with({ error: l.P.not(l.P.nullish) }, (e) => {
            let { error: t } = e;
            return {
                type: s.K.ERROR,
                message: t
            };
        })
        .with({ taken: !1 }, () => ({
            type: s.K.AVAILABLE,
            message: d.intl.string(d.t.PgfBS0)
        }))
        .with({ taken: !0 }, () => ({
            type: s.K.ERROR,
            message: d.intl.string(d.t.mCrAUV)
        }))
        .with({ error: l.P.nullish }, () => ({
            type: s.K.INTERNAL_ERROR,
            message: ''
        }))
        .otherwise(() => void 0);
}
function m(e) {
    return new Date(2024, 2, 4).toLocaleDateString(e, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
