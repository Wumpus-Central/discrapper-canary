var i = r(47120);
var a = r(147913),
    o = r(344185),
    s = r(314897),
    l = r(592125),
    u = r(709054),
    c = r(882252);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class f extends a.Z {
    handleThreadCreate(e) {
        let { channel: n } = e;
        if (n.isForumPost()) {
            let e = n.ownerId === s.default.getId();
            this.readStateSnapshots[n.id] = {
                isNew: !e,
                hasUnreads: !e
            };
        }
    }
    constructor(...e) {
        super(...e),
            d(this, 'readStateSnapshots', {}),
            d(this, 'actions', {
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                THREAD_CREATE: (e) => this.handleThreadCreate(e)
            }),
            d(this, 'handleChannelSelect', (e) => {
                let { channelId: n } = e;
                if (null == n) return;
                let r = l.Z.getChannel(n);
                null != r && r.isForumLikeChannel() && ((this.readStateSnapshots = {}), this.processForumChannel(r.guild_id, n));
            }),
            d(this, 'processForumChannel', (e, n) => {
                let r = o.Z.getThreadsForParent(e, n);
                u.default.keys(r).forEach((e) => {
                    let n = (0, c.nC)(e);
                    null != n && (this.readStateSnapshots[e] = n);
                });
            }),
            d(this, 'getReadStateSnapshotAnalytics', (e) => this.readStateSnapshots[e]);
    }
}
n.Z = new f();
