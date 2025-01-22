var i,
    a = r(47120);
var o = r(724458);
var s = r(442837),
    l = r(570140),
    u = r(981631),
    c = r(65154);
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
let f = null,
    p = null,
    h = {};
function _(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = h[e];
    if (null == i) return;
    let a = i[null != n ? n : u.kod];
    if (null != a) {
        for (let e of Object.values(c.Yn)) (r === e || null == r) && delete a[e];
        h[e][null != n ? n : u.kod] = a;
    }
}
function m(e, n, r, i) {
    var a;
    !(e in h) && (h[e] = {});
    let o = null !== (a = h[e][null != n ? n : u.kod]) && void 0 !== a ? a : {};
    h[e][null != n ? n : u.kod] = {
        ...o,
        [i]: { streamId: r }
    };
}
function g(e) {
    let { user: n, sessionId: r } = e;
    (f = n.id), (p = r);
}
function E(e) {
    let { user: n, sessionId: r } = e;
    (f = n.id), (p = r);
}
function v(e) {
    let { userId: n, guildId: r, streamId: i, context: a } = e;
    null != i ? m(n, r, i, a) : _(n, r, a);
}
function y(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        var r;
        let { userId: i, sessionId: a, channelId: o, guildId: s } = n;
        if (null == o && i === f) {
            if (a !== p) return e;
            h = {};
        } else {
            if (null != o || (null === (r = h[i]) || void 0 === r ? void 0 : r[null != s ? s : u.kod]) == null) return e;
            _(i, s);
        }
        return !0;
    }, !1);
}
class b extends (i = s.ZP.Store) {
    getStreamId(e, n) {
        var r, i, a;
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Yn.DEFAULT;
        return null === (a = h[e]) || void 0 === a ? void 0 : null === (i = a[null != n ? n : u.kod]) || void 0 === i ? void 0 : null === (r = i[o]) || void 0 === r ? void 0 : r.streamId;
    }
    getUserStreamData(e, n) {
        var r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Yn.DEFAULT;
        return null === (i = h[e]) || void 0 === i ? void 0 : null === (r = i[null != n ? n : u.kod]) || void 0 === r ? void 0 : r[a];
    }
}
d(b, 'displayName', 'VideoStreamStore'),
    (n.Z = new b(l.Z, {
        CONNECTION_OPEN: g,
        OVERLAY_INITIALIZE: E,
        RTC_CONNECTION_VIDEO: v,
        VOICE_STATE_UPDATES: y
    }));
