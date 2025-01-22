n.d(t, {
    IE: function () {
        return x;
    },
    K9: function () {
        return C;
    },
    NX: function () {
        return g;
    },
    R_: function () {
        return E;
    },
    e$: function () {
        return h;
    },
    ti: function () {
        return I;
    },
    zV: function () {
        return m;
    }
}),
    n(757143),
    n(47120),
    n(627341);
var i = n(913527),
    r = n.n(i),
    l = n(278074),
    a = n(768581),
    o = n(709054),
    s = n(624138),
    c = n(219496),
    u = n(801461),
    d = n(388032);
function m(e) {
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
function h(e) {
    let t = (0, s._I)(e.username).replace(u.RN, '').replace(u.iF, '.').toLowerCase();
    return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let f = ['@', '#', ':'],
    p = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'],
    _ = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
function g(e) {
    var t, n;
    let i = e.username.toLowerCase();
    if (
        ((t = i),
        (n = u.kt),
        t
            .split('')
            .filter((e) => !n.includes(e.charCodeAt(0)))
            .join('')).length < 2
    )
        return !0;
    for (let e of f) if (i.includes(e)) return !0;
    for (let e of _) if (i === e.toLowerCase()) return !0;
    for (let e of p) if (i.includes(e.toLowerCase())) return !0;
    return !1;
}
function E(e) {
    return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}
function C(e) {
    let t = o.default.extractTimestamp(e);
    try {
        return r()(new Date(t)).format('MMM DD, YYYY');
    } catch (e) {}
    return null;
}
function I(e) {
    return (0, l.EQ)(e)
        .with({ rateLimited: !0 }, () => ({
            type: c.K.RATE_LIMIT,
            message: d.intl.string(d.t.T15lqq)
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
            message: d.intl.string(d.t.PgfBS0)
        }))
        .with({ taken: !0 }, () => ({
            type: c.K.ERROR,
            message: d.intl.string(d.t.mCrAUV)
        }))
        .with({ error: l.P.nullish }, () => ({
            type: c.K.INTERNAL_ERROR,
            message: ''
        }))
        .otherwise(() => void 0);
}
function x(e) {
    return new Date(2024, 2, 4).toLocaleDateString(e, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
