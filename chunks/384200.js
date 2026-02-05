"use strict";
n.d(t, { A: () => T });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(652896),
    l = n(502075);
let u = 12e4,
    c = 1e4,
    d = 5,
    _ = {},
    f = {},
    p = new Set();
function h() {
    (_ = {}), (f = {});
}
function m(e) {
    let { streamKey: t, previewURL: n } = e;
    (_[t] = { url: n, expires: Date.now() + u }), (f[t] = 0), p.delete(t);
}
function g(e) {
    let { streamKey: t, retryAfter: n } = e;
    (_[t] = { url: null, expires: Date.now() + (null != n ? n : c * f[t]) }), p.delete(t);
}
function E(e) {
    let { streamKey: t } = e;
    (f[t] = (f[t] ?? 0) + 1), p.add(t);
}
function A(e) {
    let { voiceStates: t } = e;
    return (
        !(i().isEmpty(_) && i().isEmpty(f)) &&
        t.reduce((e, t) => {
            let { userId: n, guildId: r, channelId: i, selfStream: a } = t;
            if (a) return e;
            let s = (0, o._z)({ streamType: null != r ? l.U4.GUILD : l.U4.CALL, guildId: r, channelId: i, ownerId: n });
            return delete _[s], delete f[s], !0;
        }, !1)
    );
}
class I extends a.Ay.Store {
    static displayName = "ApplicationStreamPreviewStore";
    getPreviewURL(e, t, n) {
        let r = _[(0, o._z)({ streamType: null != e ? l.U4.GUILD : l.U4.CALL, guildId: e, channelId: t, ownerId: n })];
        return r?.url;
    }
    shouldFetchPreview(e, t, n) {
        let r = (0, o._z)({ streamType: null != e ? l.U4.GUILD : l.U4.CALL, guildId: e, channelId: t, ownerId: n }),
            i = _[r],
            a = f[r] ?? 0,
            s = null != i && Date.now() > i.expires;
        return ((null == i && a < d) || s) && !p.has(r);
    }
    getPreviewURLForStreamKey(e) {
        let { guildId: t, channelId: n, ownerId: r } = (0, o.Iy)(e);
        return this.getPreviewURL(t, n, r);
    }
    getIsPreviewLoading(e, t, n) {
        let r = (0, o._z)({ streamType: null != e ? l.U4.GUILD : l.U4.CALL, guildId: e, channelId: t, ownerId: n });
        return p.has(r);
    }
}
let T = new I(s.h, {
    CONNECTION_OPEN: h,
    LOGOUT: h,
    STREAM_PREVIEW_FETCH_START: E,
    STREAM_PREVIEW_FETCH_SUCCESS: m,
    STREAM_PREVIEW_FETCH_FAIL: g,
    VOICE_STATE_UPDATES: A,
});
