var i = n(855986),
    r = n(73153),
    l = n(652896),
    s = n(623485),
    a = n(734057),
    o = n(71393),
    u = n(495867),
    c = n(293651);
let d = { tool: "pencil", emoji: void 0, color: void 0 },
    h = null,
    m = null,
    p = d;
function f() {
    let e = null != m;
    return ((m = null), (p = d), e);
}
function g() {
    let e = null != h;
    return ((h = null), f() || e);
}
function A(e) {
    var t;
    let n = !1;
    return (null != m && m !== e && (n = f()),
    null == h ||
        ((t = h), (0, l.Iy)(t).channelId === e && u.A.isConnected() && null == s.A.getGuestStreamKey() && (0, c.E)(t)))
        ? n
        : ((h = null), !0);
}
function v() {
    return A(u.A.getChannelId() ?? null);
}
class E extends i.Ay.Store {
    static displayName = "StreamDrawingStore";
    initialize() {
        this.waitFor(u.A, s.A, a.A, o.A);
    }
    getActiveStreamKey() {
        return h;
    }
    getSelectedTool() {
        return p.tool;
    }
    getColor() {
        return p.color;
    }
    getEmoji() {
        return p.emoji;
    }
}
let y = new E(r.h, {
    STREAM_DRAWING_SET_MODE: function (e) {
        let { streamKey: t } = e;
        if (h === t) return !1;
        if (null != t) {
            if (null != s.A.getGuestStreamKey() || !(0, c.E)(t)) return !1;
            m !== (0, l.Iy)(t).channelId && f();
        }
        h = t;
    },
    STREAM_DRAWING_UPDATE_TOOLS: function (e) {
        let { streamKey: t, settings: n } = e,
            { channelId: i } = (0, l.Iy)(t),
            r = { ...(m === i ? p : d), ...n };
        if (m === i && p.tool === r.tool && p.emoji === r.emoji && p.color === r.color) return !1;
        ((m = i), (p = r));
    },
    CONNECTION_CLOSED: g,
    LOGOUT: g,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return A(t ?? null);
    },
    VOICE_SERVER_UPDATE: v,
    GUILD_DELETE: v,
    CHANNEL_DELETE: v,
    CALL_DELETE: v,
    THREAD_DELETE: v,
    VOICE_STATE_UPDATES: v,
    RTC_CONNECTION_STATE: v,
    RTC_CONNECTION_CLIENT_DISCONNECT: v,
    POST_CONNECTION_OPEN: g,
    PASS_THE_CONTROLLER_UPDATE: v,
});
n.d(t, {}, { A: y });
