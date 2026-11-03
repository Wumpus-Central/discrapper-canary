(n.d(t, { jE: () => f, zZ: () => c }), n(323874), n(14289), n(35956));
var i = n(507263),
    l = n(376943),
    r = n(123516),
    s = n(147036),
    a = n(935208),
    o = n(987741),
    u = n(623562),
    d = n(575279);
function c(e) {
    let { id: t, guildId: n, channelId: i, startMessageId: l } = e,
        r = new URLSearchParams({ [d.Nl]: t });
    return `${(0, s.n)(n, i, l)}?${r.toString()}`;
}
async function h(e) {
    let { channelId: t, conversationId: n, messageId: i } = e;
    await (0, u.ik)(t, n);
    let l = o.A.getConversation(n);
    return (
        null != l &&
        !(l.messageCount <= 1) &&
        !!l.messageIds.includes(i) &&
        ((0, u.xI)(t, l.id, { cacheType: "preview", shouldJump: !1 }), !0)
    );
}
function f(e) {
    let { pathname: t, search: n, hash: s, state: o } = e,
        c = new URLSearchParams(n),
        f = c.get(d.Nl);
    if (null == f) return null;
    c.delete(d.Nl);
    let g = (0, l.vu)(t),
        A = g?.channelId,
        p = g?.messageId;
    if (null != g && null != A && null != p && a.default.isProbablyAValidSnowflake(f)) {
        let { guildId: e } = g,
            t = a.default.cast(f);
        (0, i.B)(async () => {
            (await (0, r.A)(e), (await h({ channelId: A, conversationId: t, messageId: p })) && (0, u.Rl)());
        });
    }
    let m = c.toString();
    return { path: "" === m ? t + s : `${t}?${m}${s}`, state: o };
}
