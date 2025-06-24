n.d(t, { Z: () => P });
var r,
    i = n(442837),
    l = n(570140),
    o = n(673750),
    a = n(786761),
    u = n(592125),
    c = n(375954),
    s = n(709054),
    d = n(539573),
    p = n(825829),
    f = n(981631);
function E(e, t, n) {
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
let O = {},
    _ = 0,
    S = {},
    g = {},
    I = (e, t) => {
        let n = (0, o.hc)(e),
            r = {
                id: n,
                isBlockedEdit: (0, o.Bz)(e),
                messageData: e,
                errorMessage: (0, d.uF)(e, t)
            };
        (O[n] = r), _++;
    },
    b = (e) => O[e],
    T = (e) => {
        null != O[e] && delete O[e], _++;
    };
function h(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return I(t, n), !0;
}
function y(e) {
    var t;
    let { channelId: n, messages: r } = e,
        i = null == (t = u.Z.getChannel(n)) ? void 0 : t.getGuildId();
    if (null == i) return !1;
    let l = g[i],
        o = r.reduce((e, t) => {
            var n;
            return t.type === f.uaV.AUTO_MODERATION_ACTION &&
                (null == (n = t.embeds)
                    ? void 0
                    : n.some((e) => {
                          let { type: t } = e;
                          return t === f.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === s.default.compare(e, t.id)
                    ? t.id
                    : void 0
                : e;
        }, l);
    return null != o && g[i] !== o && ((g[i] = o), !0);
}
class C extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(c.Z), null != e && ((O = e.automodFailedMessages), (S = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: O,
            mentionRaidDetectionByGuild: S,
            lastIncidentAlertMessage: g
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null != (t = b(e)) ? t : null;
    }
    getMessagesVersion() {
        return _;
    }
    getMentionRaidDetected(e) {
        var t;
        return null != (t = S[e]) ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null != (t = g[e]) ? t : null;
    }
}
E(C, 'displayName', 'GuildAutomodMessageStore'), E(C, 'persistKey', 'GuildAutomodMessages');
let P = new C(l.Z, {
    CONNECTION_OPEN: function (e) {
        return 0 !== Object.keys(O).length && ((O = {}), _++, !0);
    },
    LOAD_MESSAGES_SUCCESS: y,
    LOCAL_MESSAGES_LOADED: y,
    MESSAGE_CREATE: function (e) {
        let { guildId: t, message: n } = e;
        if (null == t || n.type !== f.uaV.AUTO_MODERATION_ACTION) return !1;
        let r = (0, a.e5)(n);
        return !!(0, p.nY)(r) && !!(0, p.OP)(r) && ((g[t] = r.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: h,
    MESSAGE_EDIT_FAILED_AUTOMOD: h,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
        let { messageId: t } = e;
        return T(t), !0;
    },
    MESSAGE_END_EDIT: function (e) {
        let { response: t } = e;
        if ((null == t ? void 0 : t.body) == null || t.body.code === f.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = t.body.id;
        if (null == n) return !1;
        T(n);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
        let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: r } = e;
        return (
            (S[t] = {
                guildId: t,
                decisionId: n,
                suspiciousMentionActivityUntil: r
            }),
            !0
        );
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
        let { guildId: t } = e;
        return delete S[t], !0;
    }
});
