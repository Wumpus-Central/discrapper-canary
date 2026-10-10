n.d(t, { A: () => p });
var i = n(17928),
    r = n(73153),
    a = n(652896),
    s = n(320095),
    l = n(280450),
    o = n(763827);
let d = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-09-request-to-stream-new-entry-point",
    defaultConfig: { showReminderPanel: !1 },
    variations: { 1: { showReminderPanel: !0 } },
});
var c = n(652215);
let u = {},
    _ = {},
    E = null,
    A = new Set(),
    h = null;
function f() {
    ((_ = {}), (u = {}), (h = null));
}
class I extends i.Ay.Store {
    initialize() {
        this.waitFor(l.default, o.A);
    }
    getPendingRequestForUser(e) {
        return _[e];
    }
    isRequestOnCooldown(e) {
        return A.has(e);
    }
    getMostRecentInboundRequest() {
        return h;
    }
}
let p = new I(r.h, {
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { ownerId: n } = a.Iy(t);
        if (null == _[n]) return !1;
        delete _[n];
    },
    STREAM_REQUEST_COOLDOWN_START: function (e) {
        let { userId: t } = e;
        if (A.has(t)) return !1;
        A.add(t);
    },
    STREAM_REQUEST_COOLDOWN_END: function (e) {
        let { userId: t } = e;
        if (!A.has(t)) return !1;
        A.delete(t);
    },
    STREAM_REQUEST_REMINDER_DISMISS: function (e) {
        let { messageId: t } = e;
        if (h?.id !== t) return !1;
        h = null;
    },
    STREAM_START: function () {
        if (null == h) return !1;
        h = null;
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, sendMessageOptions: n, message: i, optimistic: r } = e;
        if (t !== o.A.getChannelId()) return !1;
        if (r) {
            let e = n?.activityAction?.targetUserId;
            return null != e && ((u[i.id] = e), !1);
        }
        if (i.activity?.type !== c.xL.STREAM_REQUEST) return !1;
        let a = l.default.getId();
        if (i.author?.id !== a)
            return (
                !!i.mentions?.some((e) => {
                    let { id: t } = e;
                    return t === a;
                }) &&
                !!d.getConfig({ location: "RequestToStreamStore" }).showReminderPanel &&
                void (h = (0, s.rh)(i))
            );
        if (null == i.nonce) return !1;
        let E = u[i.nonce];
        if (null == E) return !1;
        (delete u[i.nonce], (_ = { ..._, [E]: i.id }));
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        for (let [e, n] of (delete u[t], h?.id === t && (h = null), Object.entries(_))) t === n && delete _[e];
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (t === n) return !1;
        f();
    },
    VOICE_STATE_UPDATES: function () {
        if (o.A.getWasMoved()) {
            if (o.A.getChannelId() === E) return !1;
            ((E = o.A.getChannelId()), f());
        } else {
            if (null == E) return !1;
            E = null;
        }
    },
    LOGOUT: function () {
        (f(), A.clear());
    },
});
