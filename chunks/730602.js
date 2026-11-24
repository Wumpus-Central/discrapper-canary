(n(323874), n(14289), n(35956));
var i = n(51906),
    r = n(620632),
    a = n(46653),
    s = n(956518),
    l = n(652215);
let o = new Map();
async function d(e, t, n, i) {
    if (null != i) return { ticket: await u(e, t, n, i), prefetched: !1 };
    let r = c(e, t, n),
        a = o.get(r);
    if ((o.delete(r), null != a && a.expiresAt > Date.now()))
        try {
            let e = await a.ticket;
            if (null != e) return { ticket: e, prefetched: !0 };
        } catch {}
    return { ticket: await u(e, t, n), prefetched: !1 };
}
function c(e, t, n) {
    return [a.default.getId(), e, t ?? "", n ?? ""].join(":");
}
async function u(e, t, n, a) {
    let s;
    null != (s = _(e)) && (0, i.yO)(fetch(s, { method: "GET", mode: "no-cors", credentials: "omit" }));
    let o = { use_stateless_ticket: !0 };
    return (
        null != a && ((o.invite_channel_id = a.channelId), (o.invite_message_id = a.messageId)),
        null != t && (o.channel_id = t),
        null != n && (o.surface = n),
        (await r.Bo.post({ url: l.Rsh.APPLICATION_PROXY_TICKET(e), body: o, rejectWithError: !0 })).body.ticket
    );
}
function _(e) {
    let t = (0, s.Ay)(e);
    if (null == t) return null;
    try {
        return new URL("/.discord/prewarm", t).toString();
    } catch {
        return null;
    }
}
n.d(
    t,
    {},
    {
        D2: async function (e, t, n, i) {
            return (await d(e, t, n, i)).ticket;
        },
        Gt: d,
        M: async function (e, t, n) {
            let i = c(e, t, n),
                r = o.get(i);
            if (null != r && r.expiresAt > Date.now()) return { alreadyPrefetched: !0 };
            let a = u(e, t, n),
                s = { ticket: a, expiresAt: Date.now() + 6e4 };
            o.set(i, s);
            try {
                await a;
            } catch (e) {
                throw (o.get(i) === s && o.delete(i), e);
            }
            return { alreadyPrefetched: !1 };
        },
        SR: function (e) {
            return (0, r.TP)() + l.Rsh.APPLICATION_PROXY_TICKET(e);
        },
        WL: function (e, t, n, i) {
            o.set(c(t, n, i), { ticket: Promise.resolve(e), expiresAt: Date.now() + 6e4 });
        },
        ah: _,
    },
);
