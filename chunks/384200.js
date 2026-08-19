"use strict";
n.d(t, { A: () => A });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(652896),
    o = n(325278);
let d = {},
    c = {},
    u = new Set();
function _() {
    (d = {}), (c = {});
}
class E extends a.Ay.Store {
    static displayName = "ApplicationStreamPreviewStore";
    getPreviewURL(e, t, n) {
        let i = d[(0, l._z)({ streamType: null != e ? o.U4.GUILD : o.U4.CALL, guildId: e, channelId: t, ownerId: n })];
        return i?.url;
    }
    shouldFetchPreview(e, t, n) {
        let i = (0, l._z)({ streamType: null != e ? o.U4.GUILD : o.U4.CALL, guildId: e, channelId: t, ownerId: n }),
            r = d[i],
            a = c[i] ?? 0,
            s = null != r && Date.now() > r.expires;
        return ((null == r && a < 5) || s) && !u.has(i);
    }
    getPreviewURLForStreamKey(e) {
        let { guildId: t, channelId: n, ownerId: i } = (0, l.Iy)(e);
        return this.getPreviewURL(t, n, i);
    }
    getIsPreviewLoading(e, t, n) {
        let i = (0, l._z)({ streamType: null != e ? o.U4.GUILD : o.U4.CALL, guildId: e, channelId: t, ownerId: n });
        return u.has(i);
    }
}
let A = new E(s.h, {
    CONNECTION_OPEN: _,
    LOGOUT: _,
    STREAM_PREVIEW_FETCH_START: function (e) {
        let { streamKey: t } = e;
        (c[t] = (c[t] ?? 0) + 1), u.add(t);
    },
    STREAM_PREVIEW_FETCH_SUCCESS: function (e) {
        let { streamKey: t, previewURL: n } = e;
        (d[t] = { url: n, expires: Date.now() + 12e4 }), (c[t] = 0), u.delete(t);
    },
    STREAM_PREVIEW_FETCH_FAIL: function (e) {
        let { streamKey: t, retryAfter: n } = e;
        (d[t] = { url: null, expires: Date.now() + (null != n ? n : 1e4 * c[t]) }), u.delete(t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return (
            !(r().isEmpty(d) && r().isEmpty(c)) &&
            t.reduce((e, t) => {
                let { userId: n, guildId: i, channelId: r, selfStream: a } = t;
                if (a) return e;
                let s = (0, l._z)({
                    streamType: null != i ? o.U4.GUILD : o.U4.CALL,
                    guildId: i,
                    channelId: r,
                    ownerId: n,
                });
                return delete d[s], delete c[s], !0;
            }, !1)
        );
    },
});
