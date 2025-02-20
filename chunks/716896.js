n.d(t, { Z: () => c }), n(47120);
var r = n(147913),
    i = n(592125),
    o = n(109590),
    a = n(176505);
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
        if ((0, a.AB)(t)) return;
        let n = i.Z.getChannel(t);
        null != n && n.isForumLikeChannel() && (0, o.EB)(n);
    }
    constructor(...e) {
        super(...e), s(this, 'actions', { CHANNEL_PRELOAD: this.handleChannelPreload });
    }
}
let c = new l();
