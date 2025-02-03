n.d(t, { Z: () => y }), n(724458);
var i,
    l = n(442837),
    r = n(570140),
    s = n(673750),
    a = n(786761),
    o = n(592125),
    d = n(375954),
    u = n(709054),
    c = n(539573),
    h = n(825829),
    g = n(981631);
function f(e, t, n) {
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
let C = {},
    p = 0,
    v = {},
    E = {},
    _ = (e, t) => {
        let n = (0, s.hc)(e),
            i = {
                id: n,
                isBlockedEdit: (0, s.Bz)(e),
                messageData: e,
                errorMessage: (0, c.uF)(e, t)
            };
        (C[n] = i), p++;
    },
    I = (e) => C[e],
    m = (e) => {
        null != C[e] && delete C[e], p++;
    };
function S(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return _(t, n), !0;
}
function T(e) {
    var t;
    let { channelId: n, messages: i } = e,
        l = null === (t = o.Z.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
    if (null == l) return !1;
    let r = E[l],
        s = i.reduce((e, t) => {
            var n;
            return t.type === g.uaV.AUTO_MODERATION_ACTION &&
                (null === (n = t.embeds) || void 0 === n
                    ? void 0
                    : n.some((e) => {
                          let { type: t } = e;
                          return t === g.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === u.default.compare(e, t.id)
                    ? t.id
                    : void 0
                : e;
        }, r);
    return null != s && E[l] !== s && ((E[l] = s), !0);
}
class N extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(d.Z), null != e && ((C = e.automodFailedMessages), (v = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: C,
            mentionRaidDetectionByGuild: v,
            lastIncidentAlertMessage: E
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null !== (t = I(e)) && void 0 !== t ? t : null;
    }
    getMessagesVersion() {
        return p;
    }
    getMentionRaidDetected(e) {
        var t;
        return null !== (t = v[e]) && void 0 !== t ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null !== (t = E[e]) && void 0 !== t ? t : null;
    }
}
f(N, 'displayName', 'GuildAutomodMessageStore'), f(N, 'persistKey', 'GuildAutomodMessages');
let y = new N(r.Z, {
    CONNECTION_OPEN: function (e) {
        return (C = {}), p++, !0;
    },
    LOAD_MESSAGES_SUCCESS: T,
    LOCAL_MESSAGES_LOADED: T,
    MESSAGE_CREATE: function (e) {
        let { guildId: t, message: n } = e;
        if (null == t || n.type !== g.uaV.AUTO_MODERATION_ACTION) return !1;
        let i = (0, a.e5)(n);
        return !!(0, h.nY)(i) && !!(0, h.OP)(i) && ((E[t] = i.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: S,
    MESSAGE_EDIT_FAILED_AUTOMOD: S,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
        let { messageId: t } = e;
        return m(t), !0;
    },
    MESSAGE_END_EDIT: function (e) {
        let { response: t } = e;
        if ((null == t ? void 0 : t.body) == null || t.body.code === g.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = t.body.id;
        if (null == n) return !1;
        m(n);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
        let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i } = e;
        return (
            (v[t] = {
                guildId: t,
                decisionId: n,
                suspiciousMentionActivityUntil: i
            }),
            !0
        );
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
        let { guildId: t } = e;
        return delete v[t], !0;
    }
});
