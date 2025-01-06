n(724458);
var i,
    r = n(442837),
    l = n(570140),
    o = n(673750),
    u = n(786761),
    a = n(592125),
    s = n(375954),
    c = n(709054),
    d = n(539573),
    f = n(825829),
    _ = n(981631);
function E(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let p = {},
    m = 0,
    g = {},
    I = {},
    S = (t, e) => {
        let n = (0, o.hc)(t),
            i = {
                id: n,
                isBlockedEdit: (0, o.Bz)(t),
                messageData: t,
                errorMessage: (0, d.uF)(t, e)
            };
        (p[n] = i), m++;
    },
    h = (t) => p[t],
    C = (t) => {
        null != p[t] && delete p[t], m++;
    };
function T(t) {
    let { messageData: e, errorResponseBody: n } = t;
    return S(e, n), !0;
}
function v(t) {
    var e;
    let { channelId: n, messages: i } = t,
        r = null === (e = a.Z.getChannel(n)) || void 0 === e ? void 0 : e.getGuildId();
    if (null == r) return !1;
    let l = I[r],
        o = i.reduce((t, e) => {
            var n;
            return e.type === _.uaV.AUTO_MODERATION_ACTION &&
                (null === (n = e.embeds) || void 0 === n
                    ? void 0
                    : n.some((t) => {
                          let { type: e } = t;
                          return e === _.hBH.AUTO_MODERATION_NOTIFICATION;
                      }))
                ? null == t || -1 === c.default.compare(t, e.id)
                    ? e.id
                    : void 0
                : t;
        }, l);
    return null != o && I[r] !== o && ((I[r] = o), !0);
}
class N extends (i = r.ZP.PersistedStore) {
    initialize(t) {
        this.waitFor(s.Z), null != t && ((p = t.automodFailedMessages), (g = t.mentionRaidDetectionByGuild));
    }
    getState() {
        return {
            automodFailedMessages: p,
            mentionRaidDetectionByGuild: g,
            lastIncidentAlertMessage: I
        };
    }
    getMessage(t) {
        var e;
        return null == t ? null : null !== (e = h(t)) && void 0 !== e ? e : null;
    }
    getMessagesVersion() {
        return m;
    }
    getMentionRaidDetected(t) {
        var e;
        return null !== (e = g[t]) && void 0 !== e ? e : null;
    }
    getLastIncidentAlertMessage(t) {
        var e;
        return null !== (e = I[t]) && void 0 !== e ? e : null;
    }
}
E(N, 'displayName', 'GuildAutomodMessageStore'),
    E(N, 'persistKey', 'GuildAutomodMessages'),
    (e.Z = new N(l.Z, {
        CONNECTION_OPEN: function (t) {
            return (p = {}), m++, !0;
        },
        LOAD_MESSAGES_SUCCESS: v,
        LOCAL_MESSAGES_LOADED: v,
        MESSAGE_CREATE: function (t) {
            let { guildId: e, message: n } = t;
            if (null == e || n.type !== _.uaV.AUTO_MODERATION_ACTION) return !1;
            let i = (0, u.e5)(n);
            return !!(0, f.nY)(i) && !!(0, f.OP)(i) && ((I[e] = i.id), !0);
        },
        MESSAGE_SEND_FAILED_AUTOMOD: T,
        MESSAGE_EDIT_FAILED_AUTOMOD: T,
        REMOVE_AUTOMOD_MESSAGE_NOTICE: function (t) {
            let { messageId: e } = t;
            return C(e), !0;
        },
        MESSAGE_END_EDIT: function (t) {
            let { response: e } = t;
            if ((null == e ? void 0 : e.body) == null || e.body.code === _.evJ.AUTOMOD_MESSAGE_BLOCKED) return !1;
            let n = e.body.id;
            if (null == n) return !1;
            C(n);
        },
        AUTO_MODERATION_MENTION_RAID_DETECTION: function (t) {
            let { guildId: e, decisionId: n, suspiciousMentionActivityUntil: i } = t;
            return (
                (g[e] = {
                    guildId: e,
                    decisionId: n,
                    suspiciousMentionActivityUntil: i
                }),
                !0
            );
        },
        AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (t) {
            let { guildId: e } = t;
            return delete g[e], !0;
        }
    }));
