var i,
    a = r(47120);
var s = r(724458);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(570140),
    d = r(569545),
    f = r(70722);
function _(e, n, r) {
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
let h = 120000,
    p = 10000,
    m = {},
    g = {},
    E = new Set();
function v() {
    (m = {}), (g = {});
}
function I(e) {
    let { streamKey: n, previewURL: r } = e;
    (m[n] = {
        url: r,
        expires: Date.now() + h
    }),
        (g[n] = 0),
        E.delete(n);
}
function T(e) {
    let { streamKey: n, retryAfter: r } = e;
    (m[n] = {
        url: null,
        expires: Date.now() + (null != r ? r : p * g[n])
    }),
        E.delete(n);
}
function b(e) {
    var n;
    let { streamKey: r } = e;
    (g[r] = (null !== (n = g[r]) && void 0 !== n ? n : 0) + 1), E.add(r);
}
function y(e) {
    let { voiceStates: n } = e;
    return (
        !(l().isEmpty(m) && l().isEmpty(g)) &&
        n.reduce((e, n) => {
            let { userId: r, guildId: i, channelId: a, selfStream: s } = n;
            if (s) return e;
            let o = (0, d.V9)({
                streamType: null != i ? f.lo.GUILD : f.lo.CALL,
                guildId: i,
                channelId: a,
                ownerId: r
            });
            return delete m[o], delete g[o], !0;
        }, !1)
    );
}
class S extends (i = u.ZP.Store) {
    getPreviewURL(e, n, r) {
        let i =
            m[
                (0, d.V9)({
                    streamType: null != e ? f.lo.GUILD : f.lo.CALL,
                    guildId: e,
                    channelId: n,
                    ownerId: r
                })
            ];
        return null == i ? void 0 : i.url;
    }
    shouldFetchPreview(e, n, r) {
        let i = (0, d.V9)({
                streamType: null != e ? f.lo.GUILD : f.lo.CALL,
                guildId: e,
                channelId: n,
                ownerId: r
            }),
            a = m[i];
        return (null == a || Date.now() > a.expires) && !E.has(i);
    }
    getPreviewURLForStreamKey(e) {
        let { guildId: n, channelId: r, ownerId: i } = (0, d.my)(e);
        return this.getPreviewURL(n, r, i);
    }
    getIsPreviewLoading(e, n, r) {
        let i = (0, d.V9)({
            streamType: null != e ? f.lo.GUILD : f.lo.CALL,
            guildId: e,
            channelId: n,
            ownerId: r
        });
        return E.has(i);
    }
}
_(S, 'displayName', 'ApplicationStreamPreviewStore'),
    (n.Z = new S(c.Z, {
        CONNECTION_OPEN: v,
        LOGOUT: v,
        STREAM_PREVIEW_FETCH_START: b,
        STREAM_PREVIEW_FETCH_SUCCESS: I,
        STREAM_PREVIEW_FETCH_FAIL: T,
        VOICE_STATE_UPDATES: y
    }));
