var i = r(47120);
var a = r(147913),
    o = r(592125),
    s = r(109590),
    l = r(176505);
function u(e, n, r) {
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
class c extends a.Z {
    handleChannelPreload(e) {
        let { channelId: n } = e;
        if ((0, l.AB)(n)) return;
        let r = o.Z.getChannel(n);
        null != r && r.isForumLikeChannel() && (0, s.EB)(r);
    }
    constructor(...e) {
        super(...e), u(this, 'actions', { CHANNEL_PRELOAD: this.handleChannelPreload });
    }
}
n.Z = new c();
