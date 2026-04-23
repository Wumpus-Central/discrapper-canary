"use strict";
n.d(t, { A: () => h });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(652896),
    l = n(325278);
let d = {},
    _ = {},
    u = new Set();
function c() {
    (d = {}), (_ = {});
}
class E extends s.Ay.Store {
    static displayName = "ApplicationStreamPreviewStore";
    getPreviewURL(e, t, n) {
        let i = d[(0, o._z)({ streamType: null != e ? l.U4.GUILD : l.U4.CALL, guildId: e, channelId: t, ownerId: n })];
        return i?.url;
    }
    shouldFetchPreview(e, t, n) {
        let i = (0, o._z)({ streamType: null != e ? l.U4.GUILD : l.U4.CALL, guildId: e, channelId: t, ownerId: n }),
            r = d[i],
            s = _[i] ?? 0,
            a = null != r && Date.now() > r.expires;
        return ((null == r && s < 5) || a) && !u.has(i);
    }
    getPreviewURLForStreamKey(e) {
        let { guildId: t, channelId: n, ownerId: i } = (0, o.Iy)(e);
        return this.getPreviewURL(t, n, i);
    }
    getIsPreviewLoading(e, t, n) {
        let i = (0, o._z)({ streamType: null != e ? l.U4.GUILD : l.U4.CALL, guildId: e, channelId: t, ownerId: n });
        return u.has(i);
    }
}
let h = new E(a.h, {
    CONNECTION_OPEN: c,
    LOGOUT: c,
    STREAM_PREVIEW_FETCH_START: function (e) {
        let { streamKey: t } = e;
        (_[t] = (_[t] ?? 0) + 1), u.add(t);
    },
    STREAM_PREVIEW_FETCH_SUCCESS: function (e) {
        let { streamKey: t, previewURL: n } = e;
        (d[t] = { url: n, expires: Date.now() + 12e4 }), (_[t] = 0), u.delete(t);
    },
    STREAM_PREVIEW_FETCH_FAIL: function (e) {
        let { streamKey: t, retryAfter: n } = e;
        (d[t] = { url: null, expires: Date.now() + (null != n ? n : 1e4 * _[t]) }), u.delete(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            !(r().isEmpty(d) && r().isEmpty(_)) &&
            t.reduce((e, t) => {
                let { userId: n, guildId: i, channelId: r, selfStream: s } = t;
                if (s) return e;
                let a = (0, o._z)({
                    streamType: null != i ? l.U4.GUILD : l.U4.CALL,
                    guildId: i,
                    channelId: r,
                    ownerId: n,
                });
                return delete d[a], delete _[a], !0;
            }, !1)
        );
    },
});
