n(724458);
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
function g(e, t, n) {
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
    E = {},
    _ = {},
    I = (e, t) => {
        let n = (0, o.hc)(e),
            i = {
                id: n,
                isBlockedEdit: (0, o.Bz)(e),
                messageData: e,
                errorMessage: (0, c.uF)(e, t)
            };
        (C[n] = i), p++;
    },
    S = (e) => C[e],
    v = (e) => {
        null != C[e] && delete C[e], p++;
    };
function m(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return I(t, n), !0;
}
function T(e) {
    var t;
    let { channelId: n, messages: i } = e,
        r = null === (t = a.Z.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
    if (null == r) return !1;
    let l = _[r],
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
    return null != o && _[r] !== o && ((_[r] = o), !0);
}
class N extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(u.Z), null != e && ((C = e.automodFailedMessages), (E = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: C,
            mentionRaidDetectionByGuild: E,
            lastIncidentAlertMessage: _
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null !== (t = S(e)) && void 0 !== t ? t : null;
    }
    getMessagesVersion() {
        return p;
    }
    getMentionRaidDetected(e) {
        var t;
        return null !== (t = E[e]) && void 0 !== t ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null !== (t = _[e]) && void 0 !== t ? t : null;
    }
}
g(N, 'displayName', 'GuildAutomodMessageStore'),
    g(N, 'persistKey', 'GuildAutomodMessages'),
    (t.Z = new N(l.Z, {
        CONNECTION_OPEN: function (e) {
            return (C = {}), p++, !0;
        },
        LOAD_MESSAGES_SUCCESS: T,
        LOCAL_MESSAGES_LOADED: T,
        MESSAGE_CREATE: function (e) {
            let { guildId: t, message: n } = e;
            if (null == t || n.type !== f.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, s.e5)(n);
            return !!(0, h.nY)(i) && !!(0, h.OP)(i) && ((_[t] = i.id), !0);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: m,
        MESSAGE_EDIT_FAILED_AUTOMOD: m,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
            let { messageId: t } = e;
            return v(t), !0;
        },
        MESSAGE_END_EDIT: function (e) {
            let { response: t } = e;
            if ((null == t ? void 0 : t.body) == null || t.body.code === f.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
            let n = t.body.id;
            if (null == n) return !1;
            v(n);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
            let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i } = e;
            return (
                (E[t] = {
                    guildId: t,
                    decisionId: n,
                    suspiciousMentionActivityUntil: i
                }),
                !0
            );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
            let { guildId: t } = e;
            return delete E[t], !0;
        }
    }));
