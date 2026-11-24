n(938796);
var i = n(665260),
    r = n(855986),
    l = n(73153),
    s = n(652896),
    a = n(623485),
    o = n(929921),
    u = n(46653),
    c = n(734057),
    d = n(71393),
    h = n(495867),
    m = n(293651),
    f = n(652215),
    p = n(55010),
    g = n(731854);
let A = new Set(),
    v = { tool: "pencil", emoji: void 0, color: void 0 },
    E = null,
    I = null,
    y = v;
function C() {
    let e = null != I;
    return ((I = null), (y = v), e);
}
function S() {
    let e = null != E || A.size > 0;
    return ((E = null), A.clear(), C() || e);
}
function w(e) {
    return (0, s.Iy)(e).ownerId === u.default.getId() ? o.A.getState().streamDrawingEnabled : A.has(e);
}
function b(e) {
    let { guildId: t, channelId: n, userId: i } = e;
    return (0, s._z)({ streamType: null != t ? p.U4.GUILD : p.U4.CALL, guildId: t, channelId: n, ownerId: i });
}
function x(e) {
    var t;
    let n = !1;
    return (null != I && I !== e && (n = C()),
    null == E ||
        ((t = E),
        (0, s.Iy)(t).channelId === e && h.A.isConnected() && null == a.A.getGuestStreamKey() && (0, m.EG)(t) && w(t)))
        ? n
        : ((E = null), !0);
}
function T() {
    return x(h.A.getChannelId() ?? null);
}
class R extends r.Ay.Store {
    static displayName = "StreamDrawingStore";
    initialize() {
        this.waitFor(h.A, a.A, c.A, d.A, u.default, o.A);
    }
    isStreamDrawingAllowed(e) {
        return w(e);
    }
    getActiveStreamKey() {
        return E;
    }
    getSelectedTool() {
        return y.tool;
    }
    getColor() {
        return y.color;
    }
    getEmoji() {
        return y.emoji;
    }
}
let _ = new R(l.h, {
    STREAM_DRAWING_SET_MODE: function (e) {
        let { streamKey: t } = e;
        if (E === t) return !1;
        if (null != t) {
            if (null != a.A.getGuestStreamKey() || !(0, m.EG)(t) || !w(t)) return !1;
            I !== (0, s.Iy)(t).channelId && C();
        }
        E = t;
    },
    STREAM_DRAWING_UPDATE_TOOLS: function (e) {
        let { streamKey: t, settings: n } = e,
            { channelId: i } = (0, s.Iy)(t),
            r = { ...(I === i ? y : v), ...n };
        if (I === i && y.tool === r.tool && y.emoji === r.emoji && y.color === r.color) return !1;
        ((I = i), (y = r));
    },
    CONNECTION_CLOSED: S,
    LOGOUT: S,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return x(t ?? null);
    },
    VOICE_SERVER_UPDATE: T,
    GUILD_DELETE: T,
    CHANNEL_DELETE: T,
    CALL_DELETE: T,
    THREAD_DELETE: T,
    VOICE_STATE_UPDATES: T,
    RTC_CONNECTION_STATE: function (e) {
        let t = !1;
        return (e.context === g.x.DEFAULT && e.state === f.S7L.DISCONNECTED && ((t = A.size > 0), A.clear()), T() || t);
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let t = !1;
        return (e.context === g.x.DEFAULT && (t = A.delete(b(e))), T() || t);
    },
    POST_CONNECTION_OPEN: S,
    PASS_THE_CONTROLLER_UPDATE: T,
    STREAM_UPDATE_SETTINGS: function (e) {
        return T() || null != e.streamDrawingEnabled;
    },
    RTC_CONNECTION_FLAGS: function (e) {
        let t = !1;
        if (e.context === g.x.DEFAULT) {
            let n = b(e),
                r = (0, i.Lt)(e.flags, f.Ajs.ALLOW_STREAM_DRAWING);
            ((t = r !== A.has(n)), r ? A.add(n) : A.delete(n));
        }
        return T() || t;
    },
});
n.d(t, {}, { A: _ });
