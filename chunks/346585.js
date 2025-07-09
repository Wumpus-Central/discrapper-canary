(r.d(t, {
    K9: () => O,
    NX: () => h,
    R_: () => y,
    e$: () => g,
    ti: () => b,
    zV: () => m
}),
    r(704826),
    r(35282),
    r(388685),
    r(314940));
var n = r(913527),
    i = r.n(n),
    a = r(278074),
    o = r(768581),
    s = r(709054),
    l = r(624138),
    c = r(219496),
    u = r(801461),
    d = r(388032);
function m(e) {
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
function g(e) {
    let t = (0, l._I)(e.username).replace(u.RN, '').replace(u.iF, '.').toLowerCase();
    return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let f = ['@', '#', ':'],
    p = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'],
    E = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
function h(e) {
    var t;
    let r = e.username.toLowerCase();
    if (
        ((t = u.kt),
        r
            .split('')
            .filter((e) => !t.includes(e.charCodeAt(0)))
            .join('')).length < 2
    )
        return !0;
    for (let e of f) if (r.includes(e)) return !0;
    for (let e of E) if (r === e.toLowerCase()) return !0;
    for (let e of p) if (r.includes(e.toLowerCase())) return !0;
    return !1;
}
function y(e) {
    return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}
function O(e) {
    let t = s.default.extractTimestamp(e);
    try {
        return i()(new Date(t)).format('MMM DD, YYYY');
    } catch (e) {}
    return null;
}
function b(e) {
    return (0, a.EQ)(e)
        .with({ rateLimited: !0 }, () => ({
            type: c.K.RATE_LIMIT,
            message: d.intl.string(d.t.T15lqq)
        }))
        .with({ error: a.P.not(a.P.nullish) }, (e) => {
            let { error: t } = e;
            return {
                type: c.K.ERROR,
                message: t
            };
        })
        .with({ taken: !1 }, () => ({
            type: c.K.AVAILABLE,
            message: d.intl.string(d.t.PgfBS0)
        }))
        .with({ taken: !0 }, () => ({
            type: c.K.ERROR,
            message: d.intl.string(d.t.mCrAUV)
        }))
        .with({ error: a.P.nullish }, () => ({
            type: c.K.INTERNAL_ERROR,
            message: ''
        }))
        .otherwise(() => void 0);
}
