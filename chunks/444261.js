"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    s = n(439372),
    a = n(919577),
    o = n(495544),
    l = n(734057);
class d extends s.A {
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
                i.Ay.Emitter.batched(() => {
                    for (let t of e) r.h.dispatch({ type: "THREAD_DELETE", channel: t });
                });
        }
    }
    handleMessageCreate(e) {
        let { channelId: t, message: n } = e,
            i = l.A.getChannel(t);
        if (n.author?.id !== o.default.getId() || !i?.isActiveThread()) return;
        let r = new Date(i.threadMetadata?.archiveTimestamp ?? 0).getTime();
        Date.now() - r < 5e3 && a.A.resort(i.parent_id);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        if (t.unavailable) return;
        let n = l.A.getAllThreadsForGuild(t.id);
        0 !== n.length &&
            i.Ay.Emitter.batched(() => {
                for (let e of n) r.h.dispatch({ type: "THREAD_DELETE", channel: e });
            });
    }
}
let _ = new d();
