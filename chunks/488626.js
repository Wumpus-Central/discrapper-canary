"use strict";
n.d(t, { A: () => S });
var i = n(401843),
    r = n(439372),
    s = n(616356),
    a = n(232835),
    o = n(935208),
    l = n(17928),
    d = n(228366),
    _ = n(652896),
    u = n(763827),
    c = n(652215);
let E = {},
    h = {},
    m = null;
function f() {
    (h = {}), (E = {});
}
class g extends l.Ay.Store {
    initialize() {
        this.waitFor(u.A);
    }
    getPendingRequestForUser(e) {
        return h[e];
    }
}
let p = new g(d.h, {
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { ownerId: n } = _.Iy(t);
        if (null == h[n]) return !1;
        delete h[n];
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, sendMessageOptions: n, message: i, optimistic: r } = e;
        if (t !== u.A.getChannelId()) return !1;
        if (r) {
            let e = n?.activityAction?.targetUserId;
            return null != e && ((E[i.id] = e), !1);
        }
        if (null == i.nonce || i.activity?.type !== c.xL.STREAM_REQUEST) return !1;
        let s = E[i.nonce];
        if (null == s) return !1;
        delete E[i.nonce], (h = { ...h, [s]: i.id });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        for (let [e, n] of (delete E[t], Object.entries(h))) t === n && delete h[e];
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (t === n) return !1;
        f();
    },
    VOICE_STATE_UPDATES: function () {
        if (u.A.getWasMoved()) {
            if (u.A.getChannelId() === m) return !1;
            (m = u.A.getChannelId()), f();
        } else {
            if (null == m) return !1;
            m = null;
        }
    },
    LOGOUT: f,
});
var A = n(25528),
    I = n(820672);
class T extends r.A {
    actions = { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates };
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        for (let e of t) {
            if (null == e.channelId || !0 !== e.selfStream) continue;
            let t = p.getPendingRequestForUser(e.userId);
            if (null == t) continue;
            let n = a.A.getMessage(e.channelId, t);
            if (
                n?.activity?.type !== c.xL.STREAM_REQUEST ||
                n.application?.id == null ||
                o.default.extractTimestamp(t) < Date.now() - I.M ||
                null ==
                    (0, A.nn)(e.userId, e.guildId).find(
                        (e) => n.application?.id != null && e.application_id === n.application.id,
                    )
            )
                continue;
            let r = s.A.getStreamForUser(e.userId, e.guildId);
            null != r && i.A9(r, { forceMultiple: !0, noFocus: !0 });
        }
    }
}
let S = new T();
