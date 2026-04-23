"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153),
    s = n(439372),
    a = n(919577),
    o = n(961350),
    l = n(734057);
class u extends s.A {
    actions = {
        CHANNEL_DELETE: this.handleChannelDelete,
        MESSAGE_CREATE: this.handleMessageCreate,
        GUILD_DELETE: this.handleGuildDelete,
    };
    handleChannelDelete(e) {
        let { channel: t } = e;
        if (null != t.guild_id) {
            let e = l.A.getAllThreadsForParent(t.id);
            e.length > 0 &&
                r.Ay.Emitter.batched(() => {
                    for (let t of e) i.h.dispatch({ type: "THREAD_DELETE", channel: t });
                });
        }
    }
    handleMessageCreate(e) {
        let { channelId: t, message: n } = e,
            r = l.A.getChannel(t);
        if (n.author?.id !== o.default.getId() || !r?.isActiveThread()) return;
        let i = new Date(r.threadMetadata?.archiveTimestamp ?? 0).getTime();
        Date.now() - i < 5e3 && a.A.resort(r.parent_id);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        if (t.unavailable) return;
        let n = l.A.getAllThreadsForGuild(t.id);
        0 !== n.length &&
            r.Ay.Emitter.batched(() => {
                for (let e of n) i.h.dispatch({ type: "THREAD_DELETE", channel: e });
            });
    }
}
let c = new u();
