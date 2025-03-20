n.d(t, { Z: () => f }), n(47120);
var r = n(470167),
    i = n(147913),
    o = n(681678),
    a = n(375954),
    s = n(81643),
    l = n(484710);
function c(e, t, n) {
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
function u(e) {
    var t, n, i;
    let { channelId: c, message: u } = e,
        d = a.Z.getMessage(c, u.id);
    if ((null == d ? void 0 : null === (n = d.embeds) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.type) === r.h.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
        let e = null === (i = d.embeds[0].fields) || void 0 === i ? void 0 : i.find((e) => e.rawName === s.g0.CONTENT_TYPE);
        (null == e ? void 0 : e.rawValue) === s.L0.ERROR ? o.Z.showFailedToast(l.w.TIGGER_PAWTECT_ERROR) : o.Z.showSuccessToast(l.w.TIGGER_PAWTECT_VERIFIED);
    }
}
class d extends i.Z {
    constructor(...e) {
        super(...e), c(this, 'actions', { MESSAGE_CREATE: u });
    }
}
let f = new d();
