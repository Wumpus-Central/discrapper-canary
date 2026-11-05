n.d(t, {
    Ay: () => G,
    Bk: () => U,
    fu: () => P,
    o2: () => M,
    Oj: () => k,
    ZD: () => F,
    ER: () => D,
    de: () => b,
    kZ: () => x,
});
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c = n(582128),
    u = (((i = {}).NICKNAME_UPDATE = "nickname_update"), (i.NICKNAME_RESET = "nickname_reset"), i),
    _ =
        (((r = {}).BLOCKED = "blocked"),
        (r.FLAGGED = "flagged"),
        (r.DELETED = "deleted"),
        (r.NOT_BLOCKED = "not_blocked"),
        r),
    E = (((a = {}).MODAL = "MODAL"), a),
    A =
        (((s = {}).RULE_NAME = "rule_name"),
        (s.CHANNEL_ID = "channel_id"),
        (s.DECISION_ID = "decision_id"),
        (s.KEYWORD = "keyword"),
        (s.KEYWORD_MATCHED_CONTENT = "keyword_matched_content"),
        (s.FLAGGED_MESSAGE_ID = "flagged_message_id"),
        (s.TIMEOUT_DURATION = "timeout_duration"),
        (s.QUARANTINE_USER = "quarantine_user"),
        (s.QUARANTINE_USER_ACTION = "quarantine_user_action"),
        (s.DECISION_REASON = "decision_reason"),
        (s.ALERT_ACTIONS_EXECUTION = "alert_actions_execution"),
        (s.QUARANTINE_EVENT = "quarantine_event"),
        (s.BLOCK_PROFILE_UPDATE_TYPE = "block_profile_update_type"),
        (s.VOICE_CHANNEL_STATUS_OUTCOME = "voice_channel_status_outcome"),
        (s.APPLICATION_NAME = "application_name"),
        (s.INTERACTION_USER_ID = "interaction_user_id"),
        (s.INTERACTION_CALLBACK_TYPE = "interaction_callback_type"),
        (s.DECISION_OUTCOME = "decision_outcome"),
        (s.GUILD_ROOM_NOTE_OUTCOME = "guild_room_note_outcome"),
        s),
    f = n(385244),
    h =
        (((l = {}).MESSAGE_SEND = "message_send"),
        (l.GUILD_JOIN = "guild_join"),
        (l.USERNAME_UPDATE = "username_update"),
        (l.CLAN_TAG_UPDATE = "clan_tag_update"),
        l),
    I =
        (((o = {}).BLOCK_PROFILE_UPDATE = "block_profile_update"),
        (o.QUARANTINE_USER = "quarantine_user"),
        (o.BLOCK_GUEST_JOIN = "block_guest_join"),
        o),
    p =
        (((d = {}).BIO = "bio"),
        (d.USERNAME = "username"),
        (d.NICKNAME = "nickname"),
        (d.GLOBAL_NAME = "display_name"),
        (d.CLAN_TAG = "clan_tag"),
        d),
    m = n(855986),
    T = n(47167),
    g = n(734057),
    S = n(576705),
    N = n(994500),
    C = n(287809),
    O = n(845625),
    R = n(615550),
    L = n(652215),
    y = n(792996);
function D(e) {
    return e.type === L.lAJ.AUTO_MODERATION_ACTION;
}
function b(e) {
    return e.embeds?.some((e) => {
        let { type: t } = e;
        return t === L.Auw.AUTO_MODERATION_NOTIFICATION;
    });
}
function v(e, t) {
    let [n] = e.embeds ?? [];
    if (null != n && (n.type === L.Auw.AUTO_MODERATION_MESSAGE || n.type === L.Auw.AUTO_MODERATION_NOTIFICATION))
        return n?.fields?.find((e) => {
            let { rawName: n } = e;
            return n === t;
        })?.rawValue;
}
function P(e, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L.FXj,
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0,
        s = null != t ? (0, T.m1)(t, C.default, N.A) : y.intl.string(y.t.J90oLW),
        l = (function (e) {
            let t = v(e, A.BLOCK_PROFILE_UPDATE_TYPE);
            if (null != t) return t;
        })(e),
        o = (function (e) {
            let t = v(e, A.QUARANTINE_USER_ACTION);
            if (null != t) return t;
        })(e),
        d = (function (e) {
            let t = v(e, A.QUARANTINE_EVENT);
            if (null != t) return t;
        })(e),
        c = (function (e) {
            let t = v(e, A.QUARANTINE_USER);
            if (null != t) return t;
        })(e),
        f = (function (e) {
            let t = v(e, A.DECISION_OUTCOME);
            if (null != t) return t;
        })(e),
        p = v(e, A.INTERACTION_CALLBACK_TYPE),
        m = v(e, A.APPLICATION_NAME);
    if (null != c) {
        let e = (function (e, t, n) {
            switch (t) {
                case I.BLOCK_PROFILE_UPDATE:
                    var i = e;
                    switch (i) {
                        case u.NICKNAME_UPDATE:
                            return y.intl.string(y.t.t98DPb);
                        case u.NICKNAME_RESET:
                            return y.intl.string(y.t["7u/rlU"]);
                        default:
                            return;
                    }
                case I.QUARANTINE_USER:
                    var r = n;
                    switch (r) {
                        case h.MESSAGE_SEND:
                            return y.intl.string(y.t.PmSMMS);
                        case h.GUILD_JOIN:
                            return y.intl.string(y.t.m9wWzo);
                        case h.USERNAME_UPDATE:
                            return y.intl.string(y.t.KNSkC6);
                        case h.CLAN_TAG_UPDATE:
                            return y.intl.string(y.t.qV4K6j);
                        default:
                            return;
                    }
                case I.BLOCK_GUEST_JOIN:
                    return y.intl.string(y.t.MrYeyS);
            }
        })(l, o, d);
        if (null != e) return e;
    }
    let g = S.A.can(L.xBc.VIEW_CHANNEL, t);
    n = null == t ? (e) => e : g ? i : L.FXj;
    let O = (function (e, t, n) {
        let i = v(e, A.VOICE_CHANNEL_STATUS_OUTCOME);
        if (null == i) return null;
        let r = "blocked" === i ? y.t.cLQrqz : y.t.bma6cs;
        return y.intl.format(r, { channelName: t, channelHook: n });
    })(e, s, i);
    if (null != O) return O;
    let R = (function (e, t, n) {
        let i = v(e, A.GUILD_ROOM_NOTE_OUTCOME);
        if (null == i) return null;
        let r = "blocked" === i ? y.t["9x7Jdd"] : y.t["srla2+"];
        return y.intl.format(r, { channelName: t, channelHook: n });
    })(e, s, i);
    return null != R
        ? R
        : null != m
          ? p === E.MODAL && null != a
              ? f !== _.BLOCKED
                  ? y.intl.format(y.t["4xL9Sk"], {
                        applicationName: m,
                        interactionUserHook: a,
                        integrationOwnerHook: r,
                    })
                  : y.intl.format(y.t.S3lNIT, { applicationName: m, interactionUserHook: a, integrationOwnerHook: r })
              : f !== _.BLOCKED
                ? y.intl.format(y.t.AXQufN, {
                      applicationName: m,
                      channelName: s,
                      channelHook: n,
                      integrationOwnerHook: r,
                  })
                : y.intl.format(y.t.s3tjMN, {
                      applicationName: m,
                      channelName: s,
                      channelHook: n,
                      integrationOwnerHook: r,
                  })
          : f !== _.BLOCKED
            ? y.intl.format(y.t.IZg0VQ, { channelName: s, channelHook: n })
            : y.intl.format(y.t.lOIOSK, { channelName: s, channelHook: n });
}
function M(e) {
    switch (e) {
        case p.NICKNAME:
            return y.intl.string(y.t["fkBQa/"]);
        case p.USERNAME:
            return y.intl.string(y.t.pJQVnr);
        case p.GLOBAL_NAME:
            return y.intl.string(y.t.V9eJ85);
        case p.CLAN_TAG:
            return y.intl.string(y.t.Rtum01);
        default:
            return y.intl.string(y.t.pJQVnr);
    }
}
function U(e) {
    let t = v(e, f.E.NOTIFICATION_TYPE),
        n = v(e, f.E.JOIN_ATTEMPTS),
        i = v(e, f.E.RAID_DATETIME),
        r = v(e, f.E.DMS_SENT),
        a = v(e, f.E.RAID_TYPE),
        s = v(e, f.E.RESOLVED_REASON),
        l = v(e, f.E.DECISION_ID),
        o = v(e, f.E.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
    return {
        notificationType: (null == t ? null : t) ?? void 0,
        joinAttempts: null != n ? parseInt(n) : void 0,
        raidDatetime: null != i ? new Date(i) : void 0,
        dmsSent: null != r ? parseInt(r) : void 0,
        raidType: null != a ? a : void 0,
        resolvedReason: null != s ? s : void 0,
        decisionId: null != l ? l : void 0,
        suspiciousMentionActivityUntil: null != o ? new Date(o) : void 0,
    };
}
function w(e) {
    let t = v(e, A.CHANNEL_ID),
        n = v(e, A.ALERT_ACTIONS_EXECUTION),
        i = (0, O.v)(n);
    return {
        content: (function (e) {
            let [t] = e.embeds ?? [];
            return t?.rawDescription ?? "";
        })(e),
        ruleName: v(e, A.RULE_NAME),
        decisionId: v(e, A.DECISION_ID),
        keyword: v(e, A.KEYWORD),
        keywordMatchedContent: v(e, A.KEYWORD_MATCHED_CONTENT),
        flaggedMessageId: v(e, A.FLAGGED_MESSAGE_ID),
        timeoutDuration: v(e, A.TIMEOUT_DURATION),
        quarantineType: v(e, A.QUARANTINE_USER),
        quarantineAction: v(e, A.QUARANTINE_USER_ACTION),
        decisionReason: v(e, A.DECISION_REASON),
        applicationName: v(e, A.APPLICATION_NAME),
        interactionUserId: v(e, A.INTERACTION_USER_ID),
        interactionCallbackType: v(e, A.INTERACTION_CALLBACK_TYPE),
        embedChannel: g.A.getChannel(t),
        embedChannelId: t,
        alertActionsExecution: i ?? void 0,
    };
}
function G(e) {
    let t = c.useMemo(() => w(e), [e]),
        n = (0, m.bG)([g.A], () => g.A.getChannel(t.embedChannelId), [t.embedChannelId]);
    return { ...t, embedChannel: n };
}
function x(e) {
    if (null == e) return null;
    let { alertActionsExecution: t } = w(e);
    return t ?? null;
}
function k(e) {
    if (null == e) return y.intl.string(y.t.Gh3A0O);
    switch (e) {
        case R.no.LEGITIMATE_ACTIVITY:
            return y.intl.string(y.t["riQ+HH"]);
        case R.no.DM_SPAM:
            return y.intl.string(y.t.j5V0ij);
        case R.no.JOIN_RAID:
            return y.intl.string(y.t.qhaRbG);
        default:
            return y.intl.string(y.t.GPg6JM);
    }
}
function F(e) {
    return v(e, f.E.ACTION_BY_USER_ID);
}
