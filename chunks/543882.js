n.d(t, { Z: () => b }), n(47120), n(724458);
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
    _ = {},
    p = {},
    h = new Set();
function m() {
    (_ = {}), (p = {});
}
function g(e) {
    let { streamKey: t, previewURL: n } = e;
    (_[t] = {
        url: n,
        expires: Date.now() + d
    }),
        (p[t] = 0),
        h.delete(t);
}
function E(e) {
    let { streamKey: t, retryAfter: n } = e;
    (_[t] = {
        url: null,
        expires: Date.now() + (null != n ? n : f * p[t])
    }),
        h.delete(t);
}
function v(e) {
    var t;
    let { streamKey: n } = e;
    (p[n] = (null !== (t = p[n]) && void 0 !== t ? t : 0) + 1), h.add(n);
}
function y(e) {
    let { voiceStates: t } = e;
    return (
        !(a().isEmpty(_) && a().isEmpty(p)) &&
        t.reduce((e, t) => {
            let { userId: n, guildId: i, channelId: r, selfStream: a } = t;
            if (a) return e;
            let s = (0, l.V9)({
                streamType: null != i ? u.lo.GUILD : u.lo.CALL,
                guildId: i,
                channelId: r,
                ownerId: n
            });
            return delete _[s], delete p[s], !0;
        }, !1)
    );
}
class I extends (i = s.ZP.Store) {
    getPreviewURL(e, t, n) {
        let i =
            _[
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
        let i = (0, l.V9)({
                streamType: null != e ? u.lo.GUILD : u.lo.CALL,
                guildId: e,
                channelId: t,
                ownerId: n
            }),
            r = _[i];
        return (null == r || Date.now() > r.expires) && !h.has(i);
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
        return h.has(i);
    }
}
c(I, 'displayName', 'ApplicationStreamPreviewStore');
let b = new I(o.Z, {
    CONNECTION_OPEN: m,
    LOGOUT: m,
    STREAM_PREVIEW_FETCH_START: v,
    STREAM_PREVIEW_FETCH_SUCCESS: g,
    STREAM_PREVIEW_FETCH_FAIL: E,
    VOICE_STATE_UPDATES: y
});
