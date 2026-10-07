n.d(t, { A: () => o });
var i = n(439372),
    r = n(174459),
    a = n(479975),
    s = n(652215);
class l extends i.A {
    actions = { POST_CONNECTION_OPEN: this.handlePostConnectionOpen };
    async handlePostConnectionOpen() {
        let e = await (0, a.Ng)();
        r.default.track(s.HAw.NOTIFICATION_PERMISSION_STATUS, { os_enabled: e });
    }
}
let o = new l();
