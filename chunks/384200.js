n.d(t, { A: () => v }), n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(652896),
    c = n(502075);
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
    h = {},
    m = new Set();
function g() {
    (_ = {}), (h = {});
}
function E(e) {
    let { streamKey: t, previewURL: n } = e;
    (_[t] = {
        url: n,
        expires: Date.now() + d,
    }),
        (h[t] = 0),
        m.delete(t);
}
function b(e) {
    let { streamKey: t, retryAfter: n } = e;
    (_[t] = {
        url: null,
        expires: Date.now() + (null != n ? n : f * h[t]),
    }),
        m.delete(t);
}
function y(e) {
    var t;
    let { streamKey: n } = e;
    (h[n] = (null != (t = h[n]) ? t : 0) + 1), m.add(n);
}
function O(e) {
    let { voiceStates: t } = e;
    return (
        !(a().isEmpty(_) && a().isEmpty(h)) &&
        t.reduce((e, t) => {
            let { userId: n, guildId: r, channelId: i, selfStream: a } = t;
            if (a) return e;
            let s = (0, l._z)({
                streamType: null != r ? c.U4.GUILD : c.U4.CALL,
                guildId: r,
                channelId: i,
                ownerId: n,
            });
            return delete _[s], delete h[s], !0;
        }, !1)
    );
}
class A extends (r = s.Ay.Store) {
    getPreviewURL(e, t, n) {
        let r =
            _[
                (0, l._z)({
                    streamType: null != e ? c.U4.GUILD : c.U4.CALL,
                    guildId: e,
                    channelId: t,
                    ownerId: n,
                })
            ];
        return null == r ? void 0 : r.url;
    }
    shouldFetchPreview(e, t, n) {
        var r;
        let i = (0, l._z)({
                streamType: null != e ? c.U4.GUILD : c.U4.CALL,
                guildId: e,
                channelId: t,
                ownerId: n,
            }),
            a = _[i],
            s = null != (r = h[i]) ? r : 0,
            o = null != a && Date.now() > a.expires;
        return ((null == a && s < p) || o) && !m.has(i);
    }
    getPreviewURLForStreamKey(e) {
        let { guildId: t, channelId: n, ownerId: r } = (0, l.Iy)(e);
        return this.getPreviewURL(t, n, r);
    }
    getIsPreviewLoading(e, t, n) {
        let r = (0, l._z)({
            streamType: null != e ? c.U4.GUILD : c.U4.CALL,
            guildId: e,
            channelId: t,
            ownerId: n,
        });
        return m.has(r);
    }
}
u(A, "displayName", "ApplicationStreamPreviewStore");
let v = new A(o.h, {
    CONNECTION_OPEN: g,
    LOGOUT: g,
    STREAM_PREVIEW_FETCH_START: y,
    STREAM_PREVIEW_FETCH_SUCCESS: E,
    STREAM_PREVIEW_FETCH_FAIL: b,
    VOICE_STATE_UPDATES: O,
});
