n.d(t, { A: () => o });
var i = n(439372),
    r = n(269073),
    a = n(216623);
async function s() {
    (0, r.A9)("saved_messages_manager") && (await (0, a.AX)());
}
class l extends i.A {
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    handlePostConnectionOpen = () => {
        s();
    };
}
let o = new l();
