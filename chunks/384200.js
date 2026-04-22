"use strict";
n.d(t, { A: () => E });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(652896),
    l = n(502075);
let u = {},
    d = {},
    c = new Set();
function _() {
    (u = {}), (d = {});
}
class f extends s.Ay.Store {
    static displayName = "ApplicationStreamPreviewStore";
    getPreviewURL(e, t, n) {
        let r = u[(0, o._z)({ streamType: null != e ? l.U4.GUILD : l.U4.CALL, guildId: e, channelId: t, ownerId: n })];
        return r?.url;
    }
    shouldFetchPreview(e, t, n) {
        let r = (0, o._z)({ streamType: null != e ? l.U4.GUILD : l.U4.CALL, guildId: e, channelId: t, ownerId: n }),
            i = u[r],
            s = d[r] ?? 0,
            a = null != i && Date.now() > i.expires;
        return ((null == i && s < 5) || a) && !c.has(r);
    }
    getPreviewURLForStreamKey(e) {
        let { guildId: t, channelId: n, ownerId: r } = (0, o.Iy)(e);
        return this.getPreviewURL(t, n, r);
    }
    getIsPreviewLoading(e, t, n) {
        let r = (0, o._z)({ streamType: null != e ? l.U4.GUILD : l.U4.CALL, guildId: e, channelId: t, ownerId: n });
        return c.has(r);
    }
}
let E = new f(a.h, {
    CONNECTION_OPEN: _,
    LOGOUT: _,
    STREAM_PREVIEW_FETCH_START: function (e) {
        let { streamKey: t } = e;
        (d[t] = (d[t] ?? 0) + 1), c.add(t);
    },
    STREAM_PREVIEW_FETCH_SUCCESS: function (e) {
        let { streamKey: t, previewURL: n } = e;
        (u[t] = { url: n, expires: Date.now() + 12e4 }), (d[t] = 0), c.delete(t);
    },
    STREAM_PREVIEW_FETCH_FAIL: function (e) {
        let { streamKey: t, retryAfter: n } = e;
        (u[t] = { url: null, expires: Date.now() + (null != n ? n : 1e4 * d[t]) }), c.delete(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            !(i().isEmpty(u) && i().isEmpty(d)) &&
            t.reduce((e, t) => {
                let { userId: n, guildId: r, channelId: i, selfStream: s } = t;
                if (s) return e;
                let a = (0, o._z)({
                    streamType: null != r ? l.U4.GUILD : l.U4.CALL,
                    guildId: r,
                    channelId: i,
                    ownerId: n,
                });
                return delete u[a], delete d[a], !0;
            }, !1)
        );
    },
});
