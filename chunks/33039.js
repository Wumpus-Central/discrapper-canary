n.d(t, { Z: () => O }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(981631),
    s = n(65154);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = null,
    p = null,
    _ = {};
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = _[e];
    if (null == r) return;
    let i = r[null != t ? t : a.kod];
    if (null != i) {
        for (let e of Object.values(s.Yn)) (n === e || null == n) && delete i[e];
        _[e][null != t ? t : a.kod] = i;
    }
}
function m(e, t, n, r) {
    var i;
    e in _ || (_[e] = {});
    let o = null !== (i = _[e][null != t ? t : a.kod]) && void 0 !== i ? i : {};
    _[e][null != t ? t : a.kod] = d(c({}, o), { [r]: { streamId: n } });
}
function g(e) {
    let { user: t, sessionId: n } = e;
    (f = t.id), (p = n);
}
function E(e) {
    let { user: t, sessionId: n } = e;
    (f = t.id), (p = n);
}
function v(e) {
    let { userId: t, guildId: n, streamId: r, context: i } = e;
    null != r ? m(t, n, r, i) : h(t, n, i);
}
function b(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n;
        let { userId: r, sessionId: i, channelId: o, guildId: s } = t;
        if (null == o && r === f) {
            if (i !== p) return e;
            _ = {};
        } else {
            if (null != o || (null === (n = _[r]) || void 0 === n ? void 0 : n[null != s ? s : a.kod]) == null) return e;
            h(r, s);
        }
        return !0;
    }, !1);
}
class y extends (r = i.ZP.Store) {
    getStreamId(e, t) {
        var n, r, i;
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Yn.DEFAULT;
        return null === (i = _[e]) || void 0 === i ? void 0 : null === (r = i[null != t ? t : a.kod]) || void 0 === r ? void 0 : null === (n = r[o]) || void 0 === n ? void 0 : n.streamId;
    }
    getUserStreamData(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Yn.DEFAULT;
        return null === (r = _[e]) || void 0 === r ? void 0 : null === (n = r[null != t ? t : a.kod]) || void 0 === n ? void 0 : n[i];
    }
}
l(y, 'displayName', 'VideoStreamStore');
let O = new y(o.Z, {
    CONNECTION_OPEN: g,
    OVERLAY_INITIALIZE: E,
    RTC_CONNECTION_VIDEO: v,
    VOICE_STATE_UPDATES: b
});
