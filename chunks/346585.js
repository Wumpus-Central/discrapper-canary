n.d(t, {
    IE: function () {
        return y;
    },
    K9: function () {
        return R;
    },
    NX: function () {
        return C;
    },
    R_: function () {
        return h;
    },
    e$: function () {
        return m;
    },
    ti: function () {
        return I;
    },
    zV: function () {
        return c;
    }
}),
    n(757143),
    n(47120),
    n(627341);
var i = n(913527),
    r = n.n(i),
    o = n(278074),
    a = n(768581),
    s = n(709054),
    f = n(624138),
    d = n(219496),
    u = n(801461),
    l = n(388032);
function c(e) {
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
function m(e) {
    let t = (0, f._I)(e.username).replace(u.RN, '').replace(u.iF, '.').toLowerCase();
    return ''.concat(t).concat(e.discriminator).substring(0, 32);
}
let g = ['@', '#', ':'],
    _ = ['```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage', 'clyde'],
    p = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord', 'snowsgiving'];
function C(e) {
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
    for (let e of g) if (i.includes(e)) return !0;
    for (let e of p) if (i === e.toLowerCase()) return !0;
    for (let e of _) if (i.includes(e.toLowerCase())) return !0;
    return !1;
}
function h(e) {
    return e.toLowerCase().replace(/\s/g, '').replace('@', '');
}
function R(e) {
    let t = s.default.extractTimestamp(e);
    try {
        return r()(new Date(t)).format('MMM DD, YYYY');
    } catch (e) {}
    return null;
}
function I(e) {
    return (0, o.EQ)(e)
        .with({ rateLimited: !0 }, () => ({
            type: d.K.RATE_LIMIT,
            message: l.intl.string(l.t.T15lqq)
        }))
        .with({ error: o.P.not(o.P.nullish) }, (e) => {
            let { error: t } = e;
            return {
                type: d.K.ERROR,
                message: t
            };
        })
        .with({ taken: !1 }, () => ({
            type: d.K.AVAILABLE,
            message: l.intl.string(l.t.PgfBS0)
        }))
        .with({ taken: !0 }, () => ({
            type: d.K.ERROR,
            message: l.intl.string(l.t.mCrAUV)
        }))
        .with({ error: o.P.nullish }, () => ({
            type: d.K.INTERNAL_ERROR,
            message: ''
        }))
        .otherwise(() => void 0);
}
function y(e) {
    return new Date(2024, 2, 4).toLocaleDateString(e, {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
