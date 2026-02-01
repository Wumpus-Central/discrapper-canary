n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(439372),
    i = n(547),
    a = n(95701),
    o = n(734057),
    s = n(320501),
    l = n(41984),
    c = n(833551),
    u = n(395011),
    d = n(222506),
    f = n(145567),
    p = n(187667),
    _ = n(652215);

function h(e, t, n) {
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
let m = 1e3;
class g extends r.A {
    constructor(...e) {
        super(...e),
            h(this, "pendingFetchTimeoutsByChannelId", new Map()),
            h(this, "scheduleFetchMessages", (e) => {
                let { channelId: t, guildId: n, messageId: r } = e;
                if (!c.default.isAnyOverlayRendering() || null == o.A.getChannel(t) || s.A.isReady(t)) return;
                let a = this.pendingFetchTimeoutsByChannelId.get(t);
                null != a && clearTimeout(a);
                let l = setTimeout(() => {
                    this.pendingFetchTimeoutsByChannelId.delete(t),
                        s.A.isReady(t) ||
                            i.A.fetchMessages({
                                guildId: n,
                                channelId: t,
                                messageId: r,
                            });
                }, m);
                this.pendingFetchTimeoutsByChannelId.set(t, l);
            }),
            h(this, "handleOverlayTextChatAddOrUpdateChannel", (e) => {
                var t, n, r;
                let { channelId: i, lastMessageId: a } = e,
                    s = o.A.getChannel(i),
                    l =
                        null !=
                        (t =
                            null != (n = null == s || null == (r = s.getGuildId) ? void 0 : r.call(s))
                                ? n
                                : null == s
                                  ? void 0
                                  : s.guild_id)
                            ? t
                            : null;
                this.scheduleFetchMessages({
                    channelId: i,
                    guildId: l,
                    messageId: null != a ? a : null,
                });
            }),
            h(this, "handleOverlayTextChatSelectChannel", (e) => {
                let { channelId: t, guildId: n, messageId: r } = e;
                this.scheduleFetchMessages({
                    channelId: t,
                    guildId: n,
                    messageId: r,
                });
            }),
            h(this, "handleOverlayTextChatRemoveChannel", (e) => {
                let { channelId: t } = e,
                    n = this.pendingFetchTimeoutsByChannelId.get(t);
                null != n && (clearTimeout(n), this.pendingFetchTimeoutsByChannelId.delete(t)),
                    setTimeout(() => {
                        var e, n, r;
                        let i = p.A.getSelectedChannelId();
                        if (null == i || i === t) return;
                        let a = o.A.getChannel(i),
                            s =
                                null !=
                                (e =
                                    null != (n = null == a || null == (r = a.getGuildId) ? void 0 : r.call(a))
                                        ? n
                                        : null == a
                                          ? void 0
                                          : a.guild_id)
                                    ? e
                                    : null;
                        this.scheduleFetchMessages({
                            channelId: i,
                            guildId: s,
                            messageId: null,
                        });
                    }, 0);
            }),
            h(this, "handleChannelSelect", (e) => {
                let { channelId: t } = e;
                if (!c.default.isAnyOverlayRendering() || null == t) return;
                let n = u.A.getTargetPID(),
                    r = u.A.isFocused(n),
                    i = d.A.isInputLocked(n);
                if (!r || i) return;
                let s = o.A.getChannel(t);
                null != s &&
                    (0, a.pQ)(s.type) &&
                    p.A.getSelectedChannelId() !== t &&
                    (0, f.D$)({
                        channelId: t,
                        source: l.B9.AUTOMATIC_CHANNEL_SELECT,
                        guildId: s.getGuildId(),
                        messageId: null,
                        widgetType: _.uss.TEXT_CHAT_V3,
                    });
            }),
            h(this, "actions", {
                CHANNEL_SELECT: this.handleChannelSelect,
                SIDEBAR_VIEW_CHANNEL: this.handleChannelSelect,
                OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: this.handleOverlayTextChatAddOrUpdateChannel,
                OVERLAY_TEXT_CHAT_SELECT_CHANNEL: this.handleOverlayTextChatSelectChannel,
                OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: this.handleOverlayTextChatRemoveChannel,
            });
    }
}
let E = new g();
