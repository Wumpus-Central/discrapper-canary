n.d(t, { A: () => d }), n(896048);
var r = n(311907),
    i = n(73153),
    a = n(439372),
    s = n(919577),
    o = n(961350),
    l = n(734057);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class u extends a.A {
    handleChannelDelete(e) {
        let { channel: t } = e;
        if (null != t.guild_id) {
            let e = l.A.getAllThreadsForParent(t.id);
            e.length > 0 &&
                r.Ay.Emitter.batched(() => {
                    for (let t of e)
                        i.h.dispatch({
                            type: "THREAD_DELETE",
                            channel: t,
                        });
                });
        }
    }
    handleMessageCreate(e) {
        var t, n, r;
        let { channelId: i, message: a } = e,
            c = l.A.getChannel(i);
        if (
            (null == (n = a.author) ? void 0 : n.id) !== o.default.getId() ||
            !(null == c ? void 0 : c.isActiveThread())
        )
            return;
        let u = new Date(null != (t = null == (r = c.threadMetadata) ? void 0 : r.archiveTimestamp) ? t : 0).getTime();
        Date.now() - u < 5000 && s.A.resort(c.parent_id);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        if (t.unavailable) return;
        let n = l.A.getAllThreadsForGuild(t.id);
        0 !== n.length &&
            r.Ay.Emitter.batched(() => {
                for (let e of n)
                    i.h.dispatch({
                        type: "THREAD_DELETE",
                        channel: e,
                    });
            });
    }
    constructor(...e) {
        super(...e),
            c(this, "actions", {
                CHANNEL_DELETE: this.handleChannelDelete,
                MESSAGE_CREATE: this.handleMessageCreate,
                GUILD_DELETE: this.handleGuildDelete,
            });
    }
}
let d = new u();
