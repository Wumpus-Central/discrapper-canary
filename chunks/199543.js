n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(439372),
    i = n(966597),
    a = n(216623);

function s(e, t, n) {
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

function o() {
    i.A.getCurrentConfig(
        {
            location: "saved_messages_manager",
        },
        {
            autoTrackExposure: !1,
        },
    ).enabled && (0, a.AX)();
}
class l extends r.A {
    constructor(...e) {
        super(...e),
            s(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
            }),
            s(this, "handlePostConnectionOpen", () => {
                o();
            });
    }
}
let c = new l();
