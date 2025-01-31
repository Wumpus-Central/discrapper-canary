n.d(t, { Z: () => v }), n(47120), n(724458);
var i,
    r = n(442837),
    a = n(570140),
    s = n(981631),
    o = n(65154);
function l(e, t, n) {
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
let u = null,
    c = null,
    d = {};
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = d[e];
    if (null == i) return;
    let r = i[null != t ? t : s.kod];
    if (null != r) {
        for (let e of Object.values(o.Yn)) (n === e || null == n) && delete r[e];
        d[e][null != t ? t : s.kod] = r;
    }
}
function _(e, t, n, i) {
    var r;
    e in d || (d[e] = {});
    let a = null !== (r = d[e][null != t ? t : s.kod]) && void 0 !== r ? r : {};
    d[e][null != t ? t : s.kod] = {
        ...a,
        [i]: { streamId: n }
    };
}
function p(e) {
    let { user: t, sessionId: n } = e;
    (u = t.id), (c = n);
}
function h(e) {
    let { user: t, sessionId: n } = e;
    (u = t.id), (c = n);
}
function m(e) {
    let { userId: t, guildId: n, streamId: i, context: r } = e;
    null != i ? _(t, n, i, r) : f(t, n, r);
}
function g(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n;
        let { userId: i, sessionId: r, channelId: a, guildId: o } = t;
        if (null == a && i === u) {
            if (r !== c) return e;
            d = {};
        } else {
            if (null != a || (null === (n = d[i]) || void 0 === n ? void 0 : n[null != o ? o : s.kod]) == null) return e;
            f(i, o);
        }
        return !0;
    }, !1);
}
class E extends (i = r.ZP.Store) {
    getStreamId(e, t) {
        var n, i, r;
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Yn.DEFAULT;
        return null === (r = d[e]) || void 0 === r ? void 0 : null === (i = r[null != t ? t : s.kod]) || void 0 === i ? void 0 : null === (n = i[a]) || void 0 === n ? void 0 : n.streamId;
    }
    getUserStreamData(e, t) {
        var n, i;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Yn.DEFAULT;
        return null === (i = d[e]) || void 0 === i ? void 0 : null === (n = i[null != t ? t : s.kod]) || void 0 === n ? void 0 : n[r];
    }
}
l(E, 'displayName', 'VideoStreamStore');
let v = new E(a.Z, {
    CONNECTION_OPEN: p,
    OVERLAY_INITIALIZE: h,
    RTC_CONNECTION_VIDEO: m,
    VOICE_STATE_UPDATES: g
});
