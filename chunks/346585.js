n.d(t, {
    K9: () => E,
    NX: () => x,
    R_: () => _,
    e$: () => f,
    ti: () => v,
    zV: () => h,
}),
    n(704826),
    n(35282),
    n(388685),
    n(314940);
var r = n(913527),
    i = n.n(r),
    s = n(278074),
    a = n(768581),
    l = n(709054),
    o = n(624138),
    c = n(219496),
    u = n(801461),
    d = n(388032);
function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return a.ZP.getUserAvatarURL(
        {
            id: e.id,
            avatar: e.avatar,
            bot: e.bot,
            discriminator: "0000",
        },
        t,
        80,
    );
}
function f(e) {
    let t = (0, o._I)(e.username).replace(u.RN, "").replace(u.iF, ".").toLowerCase();
    return "".concat(t).concat(e.discriminator).substring(0, 32);
}
let g = ["@", "#", ":"],
    m = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
    p = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];
function x(e) {
    var t;
    let n = e.username.toLowerCase();
    if (
        ((t = u.kt),
        n
            .split("")
            .filter((e) => !t.includes(e.charCodeAt(0)))
            .join("")).length < 2
    )
        return !0;
    for (let e of g) if (n.includes(e)) return !0;
    for (let e of p) if (n === e.toLowerCase()) return !0;
    for (let e of m) if (n.includes(e.toLowerCase())) return !0;
    return !1;
}
function _(e) {
    return e.toLowerCase().replace(/\s/g, "").replace("@", "");
}
function E(e) {
    let t = l.default.extractTimestamp(e);
    try {
        return i()(new Date(t)).format("MMM DD, YYYY");
    } catch (e) {}
    return null;
}
function v(e) {
    return (0, s.EQ)(e)
        .with({ rateLimited: !0 }, () => ({
            type: c.K.RATE_LIMIT,
            message: d.intl.string(d.t.T15lqn),
        }))
        .with({ error: s.P.not(s.P.nullish) }, (e) => {
            let { error: t } = e;
            return {
                type: c.K.ERROR,
                message: t,
            };
        })
        .with({ taken: !1 }, () => ({
            type: c.K.AVAILABLE,
            message: d.intl.string(d.t.PgfBSx),
        }))
        .with({ taken: !0 }, () => ({
            type: c.K.ERROR,
            message: d.intl.string(d.t.mCrAUb),
        }))
        .with({ error: s.P.nullish }, () => ({
            type: c.K.INTERNAL_ERROR,
            message: "",
        }))
        .otherwise(() => void 0);
}
