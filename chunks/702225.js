n.d(t, { Z: () => o });
var i = n(772848);
function r(e, t, n) {
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
function a(e) {
    return {
        channelId: e,
        sessionId: (0, i.Z)()
    };
}
class s {
    getForumChannelSessionId(e) {
        return null == this.session && (this.session = a(e)), this.session.channelId !== e && (this.session = a(e)), this.session.sessionId;
    }
    constructor() {
        r(this, 'session', void 0);
    }
}
let o = new s();
