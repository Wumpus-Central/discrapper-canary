n.d(t, { Z: () => I });
var r,
    i = n(442837),
    l = n(570140),
    a = n(673750),
    o = n(786761),
    s = n(592125),
    c = n(375954),
    u = n(709054),
    d = n(539573),
    p = n(825829),
    m = n(981631);
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
let _ = {},
    g = 0,
    h = {},
    b = {},
    E = (e, t) => {
        let n = (0, a.hc)(e),
            r = {
                id: n,
                isBlockedEdit: (0, a.Bz)(e),
                messageData: e,
                errorMessage: (0, d.uF)(e, t)
            };
        ((_[n] = r), g++);
    },
    C = (e) => _[e],
    O = (e) => {
        (null != _[e] && delete _[e], g++);
    };
function v(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return (E(t, n), !0);
}
function y(e) {
    var t;
    let { channelId: n, messages: r } = e,
        i = null == (t = s.Z.getChannel(n)) ? void 0 : t.getGuildId();
    if (null == i) return !1;
    let l = b[i],
        a = r.reduce((e, t) => {
            var n;
            return t.type === m.uaV.AUTO_MODERATION_ACTION &&
                (null == (n = t.embeds)
                    ? void 0
                    : n.some((e) => {
                          let { type: t } = e;
                          return t === m.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === u.default.compare(e, t.id)
                    ? t.id
                    : void 0
                : e;
        }, l);
    return null != a && b[i] !== a && ((b[i] = a), !0);
}
class x extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (this.waitFor(c.Z), null != e && ((_ = e.automodFailedMessages), (h = e.mentionRaidDetectionByGuild)));
    }
    getState() {
        return {
            automodFailedMessages: _,
            mentionRaidDetectionByGuild: h,
            lastIncidentAlertMessage: b
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null != (t = C(e)) ? t : null;
    }
    getMessagesVersion() {
        return g;
    }
    getMentionRaidDetected(e) {
        var t;
        return null != (t = h[e]) ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null != (t = b[e]) ? t : null;
    }
}
(f(x, 'displayName', 'GuildAutomodMessageStore'), f(x, 'persistKey', 'GuildAutomodMessages'));
let I = new x(l.Z, {
    CONNECTION_OPEN: function (e) {
        return 0 !== Object.keys(_).length && ((_ = {}), g++, !0);
    },
    LOAD_MESSAGES_SUCCESS: y,
    LOCAL_MESSAGES_LOADED: y,
    MESSAGE_CREATE: function (e) {
        let { guildId: t, message: n } = e;
        if (null == t || n.type !== m.uaV.AUTO_MODERATION_ACTION) return !1;
        let r = (0, o.e5)(n);
        return !!(0, p.nY)(r) && !!(0, p.OP)(r) && ((b[t] = r.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: v,
    MESSAGE_EDIT_FAILED_AUTOMOD: v,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
        let { messageId: t } = e;
        return (O(t), !0);
    },
    MESSAGE_END_EDIT: function (e) {
        let { response: t } = e;
        if ((null == t ? void 0 : t.body) == null || t.body.code === m.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = t.body.id;
        if (null == n) return !1;
        O(n);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
        let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: r } = e;
        return (
            (h[t] = {
                guildId: t,
                decisionId: n,
                suspiciousMentionActivityUntil: r
            }),
            !0
        );
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
        let { guildId: t } = e;
        return (delete h[t], !0);
    }
});
