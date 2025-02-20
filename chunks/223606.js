n.d(t, { Z: () => y });
var i,
    r = n(442837),
    l = n(570140),
    o = n(673750),
    s = n(786761),
    a = n(592125),
    u = n(375954),
    d = n(709054),
    c = n(539573),
    h = n(825829),
    f = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = {},
    v = 0,
    C = {},
    E = {},
    O = (e, t) => {
        let n = (0, o.hc)(e),
            i = {
                id: n,
                isBlockedEdit: (0, o.Bz)(e),
                messageData: e,
                errorMessage: (0, c.uF)(e, t)
            };
        (g[n] = i), v++;
    },
    m = (e) => g[e],
    S = (e) => {
        null != g[e] && delete g[e], v++;
    };
function _(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return O(t, n), !0;
}
function b(e) {
    var t;
    let { channelId: n, messages: i } = e,
        r = null === (t = a.Z.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
    if (null == r) return !1;
    let l = E[r],
        o = i.reduce((e, t) => {
            var n;
            return t.type === f.uaV.AUTO_MODERATION_ACTION &&
                (null === (n = t.embeds) || void 0 === n
                    ? void 0
                    : n.some((e) => {
                          let { type: t } = e;
                          return t === f.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === d.default.compare(e, t.id)
                    ? t.id
                    : void 0
                : e;
        }, l);
    return null != o && E[r] !== o && ((E[r] = o), !0);
}
class I extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(u.Z), null != e && ((g = e.automodFailedMessages), (C = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: g,
            mentionRaidDetectionByGuild: C,
            lastIncidentAlertMessage: E
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null !== (t = m(e)) && void 0 !== t ? t : null;
    }
    getMessagesVersion() {
        return v;
    }
    getMentionRaidDetected(e) {
        var t;
        return null !== (t = C[e]) && void 0 !== t ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null !== (t = E[e]) && void 0 !== t ? t : null;
    }
}
p(I, 'displayName', 'GuildAutomodMessageStore'), p(I, 'persistKey', 'GuildAutomodMessages');
let y = new I(l.Z, {
    CONNECTION_OPEN: function (e) {
        return (g = {}), v++, !0;
    },
    LOAD_MESSAGES_SUCCESS: b,
    LOCAL_MESSAGES_LOADED: b,
    MESSAGE_CREATE: function (e) {
        let { guildId: t, message: n } = e;
        if (null == t || n.type !== f.uaV.AUTO_MODERATION_ACTION) return !1;
        let i = (0, s.e5)(n);
        return !!(0, h.nY)(i) && !!(0, h.OP)(i) && ((E[t] = i.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: _,
    MESSAGE_EDIT_FAILED_AUTOMOD: _,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
        let { messageId: t } = e;
        return S(t), !0;
    },
    MESSAGE_END_EDIT: function (e) {
        let { response: t } = e;
        if ((null == t ? void 0 : t.body) == null || t.body.code === f.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = t.body.id;
        if (null == n) return !1;
        S(n);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
        let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i } = e;
        return (
            (C[t] = {
                guildId: t,
                decisionId: n,
                suspiciousMentionActivityUntil: i
            }),
            !0
        );
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
        let { guildId: t } = e;
        return delete C[t], !0;
    }
});
