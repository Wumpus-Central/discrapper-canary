n.d(t, { Z: () => d }), n(47120);
var r = n(147913),
    i = n(344185),
    o = n(314897),
    a = n(592125),
    s = n(709054),
    l = n(882252);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class u extends r.Z {
    handleThreadCreate(e) {
        let { channel: t } = e;
        if (t.isForumPost()) {
            let e = t.ownerId === o.default.getId();
            this.readStateSnapshots[t.id] = {
                isNew: !e,
                hasUnreads: !e
            };
        }
    }
    constructor(...e) {
        super(...e),
            c(this, 'readStateSnapshots', {}),
            c(this, 'actions', {
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                THREAD_CREATE: (e) => this.handleThreadCreate(e)
            }),
            c(this, 'handleChannelSelect', (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                let n = a.Z.getChannel(t);
                null != n && n.isForumLikeChannel() && ((this.readStateSnapshots = {}), this.processForumChannel(n.guild_id, t));
            }),
            c(this, 'processForumChannel', (e, t) => {
                let n = i.Z.getThreadsForParent(e, t);
                s.default.keys(n).forEach((e) => {
                    let t = (0, l.nC)(e);
                    null != t && (this.readStateSnapshots[e] = t);
                });
            }),
            c(this, 'getReadStateSnapshotAnalytics', (e) => this.readStateSnapshots[e]);
    }
}
let d = new u();
