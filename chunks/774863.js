let i;
var a,
    o = r(47120);
var s = r(442837),
    l = r(570140),
    u = r(70956),
    c = r(709054);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = 14 * u.Z.Millis.DAY,
    p = Object.freeze([]);
let h = {},
    _ = {};
function m(e) {
    var n;
    let { messageId: r, channelId: i, attachments: a } = e,
        o = {
            messageId: r,
            channelId: i,
            attachments: a,
            reportSubmit: !1
        },
        s = null !== (n = _[i]) && void 0 !== n ? n : p;
    (_[i] = [...s, o]), (h[r] = o);
}
function g(e) {
    let { messageId: n, channelId: r } = e,
        i = _[r];
    null != i &&
        ((_[r] = i.map((e) =>
            e.messageId === n
                ? {
                      ...e,
                      reportSubmit: !0
                  }
                : e
        )),
        (h[n] = {
            ...h[n],
            reportSubmit: !0
        }));
}
function E() {
    y();
}
function v(e) {
    let { explicitContentScanVersion: n } = e;
    (i = n), y();
}
function y() {
    (h = {}), (_ = {});
}
class b extends (a = s.ZP.Store) {
    getFpMessageInfo(e) {
        return h[e];
    }
    getChannelFpInfo(e) {
        var n;
        return null !== (n = _[e]) && void 0 !== n ? n : p;
    }
    canSubmitFpReport(e) {
        let n = h[e];
        return null != n && !n.reportSubmit && c.default.age(n.messageId) < f;
    }
    get validContentScanVersion() {
        return i;
    }
}
d(b, 'displayName', 'FalsePositiveStore'),
    (n.Z = new b(l.Z, {
        LOGOUT: E,
        CONNECTION_OPEN: v,
        MESSAGE_EXPLICIT_CONTENT_FP_CREATE: m,
        MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: g
    }));
