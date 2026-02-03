n.d(t, {
    A: () => L,
}),
    n(896048);
var r = n(439372),
    i = n(547),
    a = n(742984),
    o = n(95701),
    s = n(734057),
    l = n(320501),
    c = n(543465),
    u = n(41984),
    d = n(956753),
    f = n(833551),
    p = n(395011),
    _ = n(222506),
    h = n(145567),
    m = n(187667);

function g(e, t, n) {
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
let E = 1e3,
    y = (e) => (0, d.U)(e, "OverlayTextChatAutomaticLifecycleManager"),
    b = new Map(),
    O = null;

function v(e) {
    if (null == e.timestamp) return Date.now();
    let t = new Date(e.timestamp).getTime();
    return Number.isFinite(t) ? t : Date.now();
}

function A(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    if (!f.default.isAnyOverlayRendering() || null == s.A.getChannel(t) || l.A.isReady(t)) return;
    let a = b.get(t);
    null != a && clearTimeout(a);
    let o = setTimeout(() => {
        b.delete(t),
            l.A.isReady(t) ||
                i.A.fetchMessages({
                    guildId: n,
                    channelId: t,
                    messageId: r,
                });
    }, E);
    b.set(t, o);
}

function I() {
    var e, t, n;
    if (!f.default.isAnyOverlayRendering()) return;
    let r = m.A.getSelectedChannelId();
    if (null == r || r === O) return;
    let i = s.A.getChannel(r);
    null != i &&
        (0, o.pQ)(i.type) &&
        ((O = r),
        A({
            channelId: r,
            guildId:
                null !=
                (e =
                    null != (t = null == i || null == (n = i.getGuildId) ? void 0 : n.call(i))
                        ? t
                        : null == i
                          ? void 0
                          : i.guild_id)
                    ? e
                    : null,
            messageId: null,
        }));
}

function S() {
    I();
}

function T(e) {
    let { channelId: t, message: n } = e;
    if (!f.default.isAnyOverlayRendering()) return;
    let r = s.A.getChannel(t);
    if (null == r) return;
    let i = m.A.getSelectedChannelId() === t;
    if (r.isPrivate()) {
        if (c.Ay.isChannelMuted(null, t)) return;
    } else if (!i && (c.Ay.isChannelMuted(r.getGuildId(), t) || !(0, a.lx)(n, t, !0, !0))) return;
    let o = r.isPrivate() ? u.B9.INCOMING_DM_MESSAGE : u.B9.INCOMING_MENTION_MESSAGE,
        l = v(n);
    (0, h.Ml)({
        channelId: t,
        source: o,
        lastActivityAtMs: l,
        lastMessageId: n.id,
    });
}

function C(e) {
    var t, n, r;
    let { channelId: i, lastMessageId: a } = e,
        o = s.A.getChannel(i);
    A({
        channelId: i,
        guildId:
            null !=
            (t =
                null != (n = null == o || null == (r = o.getGuildId) ? void 0 : r.call(o))
                    ? n
                    : null == o
                      ? void 0
                      : o.guild_id)
                ? t
                : null,
        messageId: null != a ? a : null,
    });
}

function N(e) {
    let { channelId: t, guildId: n, messageId: r } = e;
    A({
        channelId: t,
        guildId: n,
        messageId: r,
    });
}

function w(e) {
    let { channelId: t } = e,
        n = b.get(t);
    null != n && (clearTimeout(n), b.delete(t)),
        setTimeout(() => {
            var e, n, r;
            let i = m.A.getSelectedChannelId();
            if (null == i || i === t) return;
            let a = s.A.getChannel(i);
            A({
                channelId: i,
                guildId:
                    null !=
                    (e =
                        null != (n = null == a || null == (r = a.getGuildId) ? void 0 : r.call(a))
                            ? n
                            : null == a
                              ? void 0
                              : a.guild_id)
                        ? e
                        : null,
                messageId: null,
            });
        }, 0);
}

function R(e) {
    var t, n, r;
    let { minimized: i } = e;
    if (!i) return;
    let a = m.A.getSelectedChannelId();
    if (null == a) return;
    let o = s.A.getChannel(a);
    A({
        channelId: a,
        guildId:
            null !=
            (t =
                null != (n = null == o || null == (r = o.getGuildId) ? void 0 : r.call(o))
                    ? n
                    : null == o
                      ? void 0
                      : o.guild_id)
                ? t
                : null,
        messageId: null,
    });
}

function P(e) {
    let { channelId: t } = e;
    if (!f.default.isAnyOverlayRendering() || null == t) return;
    let n = p.A.getTargetPID(),
        r = p.A.isFocused(n),
        i = _.A.isInputLocked(n);
    if (!r || i) return;
    let a = s.A.getChannel(t);
    null != a &&
        (0, o.pQ)(a.type) &&
        m.A.getSelectedChannelId() !== t &&
        (0, h.D$)({
            target: {
                kind: h.bB.CHANNEL,
                channelId: t,
                guildId: a.getGuildId(),
                messageId: null,
            },
            source: u.B9.AUTOMATIC_CHANNEL_SELECT,
            widgetType: null,
        });
}
class D extends r.A {
    constructor(...e) {
        super(...e),
            g(this, "actions", {
                CHANNEL_SELECT: y(P),
                SIDEBAR_VIEW_CHANNEL: y(P),
                MESSAGE_CREATE: y(T),
                VOICE_STATE_UPDATES: y(S),
                VOICE_CHANNEL_SELECT: y(S),
                OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: y(C),
                OVERLAY_TEXT_CHAT_SELECT_CHANNEL: y(N),
                OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: y(w),
                OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: y(R),
            });
    }
}
let L = new D();
