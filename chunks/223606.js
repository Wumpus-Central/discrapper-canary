n.d(t, { Z: () => D });
var r,
    i = n(442837),
    a = n(570140),
    o = n(673750),
    s = n(786761),
    l = n(592125),
    c = n(375954),
    u = n(709054),
    d = n(539573),
    f = n(825829),
    _ = n(981631);
function p(e, t, n) {
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
let h = {},
    m = 0,
    g = {},
    E = {},
    b = (e, t) => {
        let n = (0, o.hc)(e),
            r = {
                id: n,
                isBlockedEdit: (0, o.Bz)(e),
                messageData: e,
                errorMessage: (0, d.uF)(e, t),
            };
        (h[n] = r), m++;
    },
    y = (e) => h[e],
    O = (e) => {
        null != h[e] && delete h[e], m++;
    };
function v(e) {
    return 0 !== Object.keys(h).length && ((h = {}), m++, !0);
}
function I(e) {
    let { messageData: t, errorResponseBody: n } = e;
    return b(t, n), !0;
}
function T(e) {
    let { messageId: t } = e;
    return O(t), !0;
}
function S(e) {
    let { response: t } = e;
    if ((null == t ? void 0 : t.body) == null || t.body.code === _.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
    let n = t.body.id;
    if (null == n) return !1;
    O(n);
}
function A(e) {
    let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: r } = e;
    return (
        (g[t] = {
            guildId: t,
            decisionId: n,
            suspiciousMentionActivityUntil: r,
        }),
        !0
    );
}
function C(e) {
    let { guildId: t } = e;
    return delete g[t], !0;
}
function N(e) {
    let { guildId: t, message: n } = e;
    if (null == t || n.type !== _.uaV.AUTO_MODERATION_ACTION) return !1;
    let r = (0, s.e5)(n);
    return !!(0, f.nY)(r) && !!(0, f.OP)(r) && ((E[t] = r.id), !0);
}
function R(e) {
    var t;
    let { channelId: n, messages: r } = e,
        i = null == (t = l.Z.getChannel(n)) ? void 0 : t.getGuildId();
    if (null == i) return !1;
    let a = E[i],
        o = r.reduce((e, t) => {
            var n;
            return t.type === _.uaV.AUTO_MODERATION_ACTION &&
                (null == (n = t.embeds)
                    ? void 0
                    : n.some((e) => {
                          let { type: t } = e;
                          return t === _.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == e || -1 === u.default.compare(e, t.id)
                    ? t.id
                    : void 0
                : e;
        }, a);
    return null != o && E[i] !== o && ((E[i] = o), !0);
}
class P extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(l.Z, c.Z), null != e && ((h = e.automodFailedMessages), (g = e.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: h,
            mentionRaidDetectionByGuild: g,
            lastIncidentAlertMessage: E,
        };
    }
    getMessage(e) {
        var t;
        return null == e ? null : null != (t = y(e)) ? t : null;
    }
    getMessagesVersion() {
        return m;
    }
    getMentionRaidDetected(e) {
        var t;
        return null != (t = g[e]) ? t : null;
    }
    getLastIncidentAlertMessage(e) {
        var t;
        return null != (t = E[e]) ? t : null;
    }
}
p(P, "displayName", "GuildAutomodMessageStore"), p(P, "persistKey", "GuildAutomodMessages");
let D = new P(a.Z, {
    CONNECTION_OPEN: v,
    LOAD_MESSAGES_SUCCESS: R,
    LOCAL_MESSAGES_LOADED: R,
    MESSAGE_CREATE: N,
    MESSAGE_SEND_FAILED_AUTOMOD: I,
    MESSAGE_EDIT_FAILED_AUTOMOD: I,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: T,
    MESSAGE_END_EDIT: S,
    AUTO_MODERATION_MENTION_RAID_DETECTION: A,
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: C,
});
