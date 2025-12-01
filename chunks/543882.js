n.d(t, { Z: () => S }), n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(569545),
    c = n(70722);
function u(e, t, n) {
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
let d = 120000,
    f = 10000,
    p = 5,
    _ = {},
    m = {},
    h = new Set();
function g() {
    (_ = {}), (m = {});
}
function E(e) {
    let { streamKey: t, previewURL: n } = e;
    (_[t] = {
        url: n,
        expires: Date.now() + d,
    }),
        (m[t] = 0),
        h.delete(t);
}
function b(e) {
    let { streamKey: t, retryAfter: n } = e;
    (_[t] = {
        url: null,
        expires: Date.now() + (null != n ? n : f * m[t]),
    }),
        h.delete(t);
}
function y(e) {
    var t;
    let { streamKey: n } = e;
    (m[n] = (null != (t = m[n]) ? t : 0) + 1), h.add(n);
}
function O(e) {
    let { voiceStates: t } = e;
    return (
        !(a().isEmpty(_) && a().isEmpty(m)) &&
        t.reduce((e, t) => {
            let { userId: n, guildId: r, channelId: i, selfStream: a } = t;
            if (a) return e;
            let o = (0, l.V9)({
                streamType: null != r ? c.lo.GUILD : c.lo.CALL,
                guildId: r,
                channelId: i,
                ownerId: n,
            });
            return delete _[o], delete m[o], !0;
        }, !1)
    );
}
class v extends (r = o.ZP.Store) {
    getPreviewURL(e, t, n) {
        let r =
            _[
                (0, l.V9)({
                    streamType: null != e ? c.lo.GUILD : c.lo.CALL,
                    guildId: e,
                    channelId: t,
                    ownerId: n,
                })
            ];
        return null == r ? void 0 : r.url;
    }
    shouldFetchPreview(e, t, n) {
        var r;
        let i = (0, l.V9)({
                streamType: null != e ? c.lo.GUILD : c.lo.CALL,
                guildId: e,
                channelId: t,
                ownerId: n,
            }),
            a = _[i],
            o = null != (r = m[i]) ? r : 0,
            s = null != a && Date.now() > a.expires;
        return ((null == a && o < p) || s) && !h.has(i);
    }
    getPreviewURLForStreamKey(e) {
        let { guildId: t, channelId: n, ownerId: r } = (0, l.my)(e);
        return this.getPreviewURL(t, n, r);
    }
    getIsPreviewLoading(e, t, n) {
        let r = (0, l.V9)({
            streamType: null != e ? c.lo.GUILD : c.lo.CALL,
            guildId: e,
            channelId: t,
            ownerId: n,
        });
        return h.has(r);
    }
}
u(v, "displayName", "ApplicationStreamPreviewStore");
let S = new v(s.Z, {
    CONNECTION_OPEN: g,
    LOGOUT: g,
    STREAM_PREVIEW_FETCH_START: y,
    STREAM_PREVIEW_FETCH_SUCCESS: E,
    STREAM_PREVIEW_FETCH_FAIL: b,
    VOICE_STATE_UPDATES: O,
});
