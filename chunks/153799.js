n.d(t, { Z: () => l }), n(47120);
var r = n(147913),
    i = n(611725);
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
function a(e) {
    let { channelId: t } = e,
        { activePickerChannelId: n, closePicker: r } = i.B.getState();
    null != n && n !== t && r();
}
class s extends r.Z {
    constructor(...e) {
        super(...e), o(this, 'actions', { CHANNEL_SELECT: a });
    }
}
let l = new s();
