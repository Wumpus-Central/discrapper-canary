n.d(t, { Z: () => C }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(981631),
    s = n(65154);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
    _ = {},
    m = {};
function h(e, t) {
    return "".concat(e, ":").concat(t);
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = _[e];
    if (null == r) return;
    let i = r[null != t ? t : o.kod];
    if (null != i) {
        for (let t of Object.values(s.Yn)) (n === t || null == n) && (delete i[t], delete m[h(null != n ? n : t, e)]);
        _[e][null != t ? t : o.kod] = i;
    }
}
function E(e, t, n, r) {
    var i;
    e in _ || (_[e] = {});
    let a = null != (i = _[e][null != t ? t : o.kod]) ? i : {};
    (_[e][null != t ? t : o.kod] = d(c({}, a), { [r]: { streamId: n } })), delete m[h(r, e)];
}
function b(e) {
    let { user: t, sessionId: n } = e;
    (f = t.id), (p = n);
}
function y(e) {
    let { user: t, sessionId: n } = e;
    (f = t.id), (p = n);
}
function O(e) {
    let { userId: t, guildId: n, streamId: r, context: i } = e;
    null != r ? E(t, n, r, i) : g(t, n, i);
}
function v(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n;
        let { userId: r, sessionId: i, channelId: a, guildId: s } = t;
        if (null == a && r === f)
            if (i !== p) return e;
            else (_ = {}), (m = {});
        else {
            if (null != a || (null == (n = _[r]) ? void 0 : n[null != s ? s : o.kod]) == null) return e;
            g(r, s);
        }
        return !0;
    }, !1);
}
function S(e) {
    let { videoStreamId: t, userId: n, streamKey: r, mediaContext: i } = e;
    m[h(i, n)] = {
        videoStreamId: t,
        userId: n,
        streamKey: r,
        mediaContext: i,
    };
}
function I(e) {
    let { mediaContext: t, userId: n } = e,
        r = h(t, n);
    if (null == m[r]) return !1;
    delete m[r];
}
class T extends (r = i.ZP.Store) {
    getStreamId(e, t) {
        var n, r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Yn.DEFAULT;
        return null == (i = _[e]) || null == (r = i[null != t ? t : o.kod]) || null == (n = r[a]) ? void 0 : n.streamId;
    }
    getUserStreamData(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Yn.DEFAULT;
        return null == (r = _[e]) || null == (n = r[null != t ? t : o.kod]) ? void 0 : n[i];
    }
    getTimedoutVideos() {
        return m;
    }
    getTimedoutVideo(e, t) {
        return m[h(e, t)];
    }
}
l(T, "displayName", "VideoStreamStore");
let C = new T(a.Z, {
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: y,
    RTC_CONNECTION_VIDEO: O,
    VOICE_STATE_UPDATES: v,
    VIDEO_STREAM_READY_TIMEOUT: S,
    CLEAR_VIDEO_STREAM_READY_TIMEOUT: I,
});
