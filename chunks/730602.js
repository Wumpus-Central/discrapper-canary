(n(323874), n(14289), n(35956));
var i = n(620632),
    r = n(46653),
    a = n(956518),
    s = n(652215);
let l = new Map();
function o(e, t, n) {
    return [r.default.getId(), e, t ?? "", n ?? ""].join(":");
}
async function d(e, t, n, r) {
    var l = e;
    let o = (0, a.Ay)(l);
    if (null != o)
        try {
            fetch(new URL("/.discord/prewarm", o).toString(), {
                method: "GET",
                mode: "no-cors",
                credentials: "omit",
            }).catch(() => void 0);
        } catch {}
    let d = { use_stateless_ticket: !0 };
    return (
        null != r && ((d.invite_channel_id = r.channelId), (d.invite_message_id = r.messageId)),
        null != t && (d.channel_id = t),
        null != n && (d.surface = n),
        (await i.Bo.post({ url: s.Rsh.APPLICATION_PROXY_TICKET(e), body: d, rejectWithError: !0 })).body.ticket
    );
}
n.d(
    t,
    {},
    {
        D2: async function (e, t, n, i) {
            if (null != i) return d(e, t, n, i);
            let r = o(e, t, n),
                a = l.get(r);
            if ((l.delete(r), null != a && a.expiresAt > Date.now()))
                try {
                    let e = await a.ticket;
                    if (null != e) return e;
                } catch {}
            return d(e, t, n);
        },
        M: function (e, t, n) {
            let i = o(e, t, n),
                r = l.get(i);
            if (null != r && r.expiresAt > Date.now()) return;
            let a = d(e, t, n),
                s = { ticket: a, expiresAt: Date.now() + 6e4 };
            (l.set(i, s),
                a.catch(() => {
                    l.get(i) === s && l.delete(i);
                }));
        },
        WL: function (e, t, n, i) {
            l.set(o(t, n, i), { ticket: Promise.resolve(e), expiresAt: Date.now() + 6e4 });
        },
    },
);
