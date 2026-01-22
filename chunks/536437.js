n.d(t, {
    A: () => o,
});
var r = n(835245);

function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function a(e) {
    return {
        channelId: e,
        sessionId: (0, r.A)(),
    };
}
class s {
    getForumChannelSessionId(e) {
        return (
            null == this.session && (this.session = a(e)),
            this.session.channelId !== e && (this.session = a(e)),
            this.session.sessionId
        );
    }
    constructor() {
        i(this, "session", void 0);
    }
}
let o = new s();
