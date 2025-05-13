n.d(t, { Z: () => c }), n(388685);
var r = n(147913),
    i = n(592125),
    a = n(109590),
    o = n(176505);
function s(e, t, n) {
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
class l extends r.Z {
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, o.AB)(t)) return;
        let n = i.Z.getChannel(t);
        null != n && n.isForumLikeChannel() && (0, a.EB)(n);
    }
    constructor(...e) {
        super(...e), s(this, 'actions', { CHANNEL_PRELOAD: this.handleChannelPreload });
    }
}
let c = new l();
