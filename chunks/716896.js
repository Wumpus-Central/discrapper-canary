n.d(t, { Z: () => u }), n(47120);
var i = n(147913),
    r = n(592125),
    a = n(109590),
    s = n(176505);
function o(e, t, n) {
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
class l extends i.Z {
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, s.AB)(t)) return;
        let n = r.Z.getChannel(t);
        null != n && n.isForumLikeChannel() && (0, a.EB)(n);
    }
    constructor(...e) {
        super(...e), o(this, 'actions', { CHANNEL_PRELOAD: this.handleChannelPreload });
    }
}
let u = new l();
