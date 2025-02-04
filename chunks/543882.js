n.d(t, { Z: () => T }), n(47120), n(724458);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(569545),
    u = n(70722);
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
let d = 120000,
    f = 10000,
    _ = 5,
    p = {},
    h = {},
    m = new Set();
function g() {
    (p = {}), (h = {});
}
function E(e) {
    let { streamKey: t, previewURL: n } = e;
    (p[t] = {
        url: n,
        expires: Date.now() + d
    }),
        (h[t] = 0),
        m.delete(t);
}
function v(e) {
    let { streamKey: t, retryAfter: n } = e;
    (p[t] = {
        url: null,
        expires: Date.now() + (null != n ? n : f * h[t])
    }),
        m.delete(t);
}
function y(e) {
    var t;
    let { streamKey: n } = e;
    (h[n] = (null !== (t = h[n]) && void 0 !== t ? t : 0) + 1), m.add(n);
}
function I(e) {
    let { voiceStates: t } = e;
    return (
        !(a().isEmpty(p) && a().isEmpty(h)) &&
        t.reduce((e, t) => {
            let { userId: n, guildId: i, channelId: r, selfStream: a } = t;
            if (a) return e;
            let s = (0, l.V9)({
                streamType: null != i ? u.lo.GUILD : u.lo.CALL,
                guildId: i,
                channelId: r,
                ownerId: n
            });
            return delete p[s], delete h[s], !0;
        }, !1)
    );
}
class b extends (i = s.ZP.Store) {
    getPreviewURL(e, t, n) {
        let i =
            p[
                (0, l.V9)({
                    streamType: null != e ? u.lo.GUILD : u.lo.CALL,
                    guildId: e,
                    channelId: t,
                    ownerId: n
                })
            ];
        return null == i ? void 0 : i.url;
    }
    shouldFetchPreview(e, t, n) {
        var i;
        let r = (0, l.V9)({
                streamType: null != e ? u.lo.GUILD : u.lo.CALL,
                guildId: e,
                channelId: t,
                ownerId: n
            }),
            a = p[r],
            s = null !== (i = h[r]) && void 0 !== i ? i : 0,
            o = null != a && Date.now() > a.expires;
        return ((null == a && s < _) || o) && !m.has(r);
    }
    getPreviewURLForStreamKey(e) {
        let { guildId: t, channelId: n, ownerId: i } = (0, l.my)(e);
        return this.getPreviewURL(t, n, i);
    }
    getIsPreviewLoading(e, t, n) {
        let i = (0, l.V9)({
            streamType: null != e ? u.lo.GUILD : u.lo.CALL,
            guildId: e,
            channelId: t,
            ownerId: n
        });
        return m.has(i);
    }
}
c(b, 'displayName', 'ApplicationStreamPreviewStore');
let T = new b(o.Z, {
    CONNECTION_OPEN: g,
    LOGOUT: g,
    STREAM_PREVIEW_FETCH_START: y,
    STREAM_PREVIEW_FETCH_SUCCESS: E,
    STREAM_PREVIEW_FETCH_FAIL: v,
    VOICE_STATE_UPDATES: I
});
