(n(323874), n(14289), n(35956));
var i = n(507263),
    r = n(376943),
    l = n(123516),
    s = n(147036),
    a = n(811091),
    o = n(987741),
    u = n(856896),
    d = n(575279);
n.d(
    t,
    {},
    {
        jE: function (e) {
            let { pathname: t, search: n, hash: s, state: c } = e,
                h = new URLSearchParams(n),
                f = h.get(d.Nl);
            if (null == f) return null;
            h.delete(d.Nl);
            let g = (0, r.vu)(t),
                A = g?.channelId,
                p = g?.messageId;
            if (null != g && null != A && null != p && a.default.isProbablyAValidSnowflake(f)) {
                let { guildId: e } = g,
                    t = a.default.cast(f);
                (0, i.B)(async () => {
                    (await (0, l.A)(e),
                        (await (async function (e) {
                            let { channelId: t, conversationId: n, messageId: i } = e;
                            await (0, u.ik)(t, n);
                            let r = o.A.getConversation(n);
                            return (
                                null != r &&
                                !(r.messageCount <= 1) &&
                                !!r.messageIds.includes(i) &&
                                ((0, u.xI)(t, r.id, { cacheType: "preview", shouldJump: !1 }), !0)
                            );
                        })({ channelId: A, conversationId: t, messageId: p })) && (0, u.Rl)());
                });
            }
            let m = h.toString();
            return { path: "" === m ? t + s : `${t}?${m}${s}`, state: c };
        },
        zZ: function (e) {
            let { id: t, guildId: n, channelId: i, startMessageId: r } = e,
                l = new URLSearchParams({ [d.Nl]: t });
            return `${(0, s.n)(n, i, r)}?${l.toString()}`;
        },
    },
);
