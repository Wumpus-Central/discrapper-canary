n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(439372),
    i = n(291823);

function a(e, t, n) {
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
class s extends r.A {
    constructor(...e) {
        super(...e),
            a(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
            }),
            a(this, "handlePostConnectionOpen", () => {
                (0, i.J)();
            });
    }
}
let o = new s();
