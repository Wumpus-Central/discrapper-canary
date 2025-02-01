let i;
n.d(t, { Z: () => y }), n(47120);
var r,
    a = n(442837),
    s = n(570140),
    o = n(70956),
    l = n(709054);
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
let c = 14 * o.Z.Millis.DAY,
    d = Object.freeze([]),
    f = {},
    _ = {};
function p(e) {
    var t;
    let { messageId: n, channelId: i, attachments: r } = e,
        a = {
            messageId: n,
            channelId: i,
            attachments: r,
            reportSubmit: !1
        },
        s = null !== (t = _[i]) && void 0 !== t ? t : d;
    (_[i] = [...s, a]), (f[n] = a);
}
function h(e) {
    let { messageId: t, channelId: n } = e,
        i = _[n];
    null != i &&
        ((_[n] = i.map((e) =>
            e.messageId === t
                ? {
                      ...e,
                      reportSubmit: !0
                  }
                : e
        )),
        (f[t] = {
            ...f[t],
            reportSubmit: !0
        }));
}
function m() {
    E();
}
function g(e) {
    let { explicitContentScanVersion: t } = e;
    (i = t), E();
}
function E() {
    (f = {}), (_ = {});
}
class v extends (r = a.ZP.Store) {
    getFpMessageInfo(e) {
        return f[e];
    }
    getChannelFpInfo(e) {
        var t;
        return null !== (t = _[e]) && void 0 !== t ? t : d;
    }
    canSubmitFpReport(e) {
        let t = f[e];
        return null != t && !t.reportSubmit && l.default.age(t.messageId) < c;
    }
    get validContentScanVersion() {
        return i;
    }
}
u(v, 'displayName', 'FalsePositiveStore');
let y = new v(s.Z, {
    LOGOUT: m,
    CONNECTION_OPEN: g,
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: p,
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: h
});
