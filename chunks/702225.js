n.d(t, { Z: () => s });
var r = n(772848);
function i(e, t, n) {
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
function o(e) {
    return {
        channelId: e,
        sessionId: (0, r.Z)()
    };
}
class a {
    getForumChannelSessionId(e) {
        return null == this.session && (this.session = o(e)), this.session.channelId !== e && (this.session = o(e)), this.session.sessionId;
    }
    constructor() {
        i(this, 'session', void 0);
    }
}
let s = new a();
