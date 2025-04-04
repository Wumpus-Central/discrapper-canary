n.d(t, { Z: () => _ }), n(47120);
var r = n(470167),
    i = n(147913),
    o = n(681678),
    a = n(375954),
    s = n(480916),
    l = n(81643),
    c = n(484710);
function u(e, t, n) {
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
function d(e) {
    var t, n, i;
    let { channelId: u, message: d } = e,
        f = a.Z.getMessage(u, d.id);
    if ((null == f || null == (n = f.embeds) || null == (t = n[0]) ? void 0 : t.type) === r.h.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
        let e = null == (i = f.embeds[0].fields) ? void 0 : i.find((e) => e.rawName === l.g0.CONTENT_TYPE);
        (null == e ? void 0 : e.rawValue) === l.L0.ERROR ? (o.Z.showFailedToast(c.w.TIGGER_PAWTECT_ERROR), (0, s.zi)(s.o6.ERROR)) : (null == e ? void 0 : e.rawValue) === l.L0.VERIFIED_ADULT ? (o.Z.showSuccessToast(c.w.TIGGER_PAWTECT_VERIFIED), (0, s.zi)(s.o6.VERIFIED_ADULT)) : (null == e ? void 0 : e.rawValue) === l.L0.VERIFIED_TEEN && (o.Z.showSuccessToast(c.w.TIGGER_PAWTECT_VERIFIED), (0, s.zi)(s.o6.VERIFIED_TEEN));
    }
}
class f extends i.Z {
    constructor(...e) {
        super(...e), u(this, 'actions', { MESSAGE_CREATE: d });
    }
}
let _ = new f();
