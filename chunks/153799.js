n.d(t, { Z: () => l }), n(388685);
var r = n(147913),
    i = n(839606);
function a(e, t, n) {
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
    let { channelId: t } = e,
        { activePickerChannelId: n, closePicker: r } = i.B.getState();
    null != n && n !== t && r();
}
class s extends r.Z {
    constructor(...e) {
        super(...e), a(this, 'actions', { CHANNEL_SELECT: o });
    }
}
let l = new s();
