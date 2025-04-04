n.d(t, { Z: () => N }), n(47120);
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
    _ = null,
    p = {},
    h = {};
function m(e, t) {
    return ''.concat(e, ':').concat(t);
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = p[e];
    if (null == r) return;
    let i = r[null != t ? t : a.kod];
    if (null != i) {
        for (let t of Object.values(s.Yn)) (n === t || null == n) && (delete i[t], delete h[m(null != n ? n : t, e)]);
        p[e][null != t ? t : a.kod] = i;
    }
}
function E(e, t, n, r) {
    var i;
    e in p || (p[e] = {});
    let o = null != (i = p[e][null != t ? t : a.kod]) ? i : {};
    (p[e][null != t ? t : a.kod] = d(c({}, o), { [r]: { streamId: n } })), delete h[m(r, e)];
}
function b(e) {
    let { user: t, sessionId: n } = e;
    (f = t.id), (_ = n);
}
function y(e) {
    let { user: t, sessionId: n } = e;
    (f = t.id), (_ = n);
}
function v(e) {
    let { userId: t, guildId: n, streamId: r, context: i } = e;
    null != r ? E(t, n, r, i) : g(t, n, i);
}
function O(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        var n;
        let { userId: r, sessionId: i, channelId: o, guildId: s } = t;
        if (null == o && r === f)
            if (i !== _) return e;
            else (p = {}), (h = {});
        else {
            if (null != o || (null == (n = p[r]) ? void 0 : n[null != s ? s : a.kod]) == null) return e;
            g(r, s);
        }
        return !0;
    }, !1);
}
function I(e) {
    let { videoStreamId: t, userId: n, streamKey: r, mediaContext: i } = e;
    h[m(i, n)] = {
        videoStreamId: t,
        userId: n,
        streamKey: r,
        mediaContext: i
    };
}
function S(e) {
    let { mediaContext: t, userId: n } = e,
        r = m(t, n);
    if (null == h[r]) return !1;
    delete h[r];
}
class T extends (r = i.ZP.Store) {
    getStreamId(e, t) {
        var n, r, i;
        let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Yn.DEFAULT;
        return null == (i = p[e]) || null == (r = i[null != t ? t : a.kod]) || null == (n = r[o]) ? void 0 : n.streamId;
    }
    getUserStreamData(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Yn.DEFAULT;
        return null == (r = p[e]) || null == (n = r[null != t ? t : a.kod]) ? void 0 : n[i];
    }
    getTimedoutVideos() {
        return h;
    }
    getTimedoutVideo(e, t) {
        return h[m(e, t)];
    }
}
l(T, 'displayName', 'VideoStreamStore');
let N = new T(o.Z, {
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: y,
    RTC_CONNECTION_VIDEO: v,
    VOICE_STATE_UPDATES: O,
    VIDEO_STREAM_READY_TIMEOUT: I,
    CLEAR_VIDEO_STREAM_READY_TIMEOUT: S
});
