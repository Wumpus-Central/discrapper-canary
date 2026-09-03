n.d(t, { A: () => P }), n(321073);
var i = n(635377),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(320095),
    o = n(815807),
    d = n(280450),
    c = n(734057),
    u = n(994500),
    _ = n(309010),
    E = n(287809),
    A = n(403362),
    h = n(935208),
    I = n(256331),
    f = n(435558);
function p(e) {
    var t;
    let n = e.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
        i =
            null != n
                ? (function (e) {
                      try {
                          let t = JSON.parse(e);
                          if ("string" == typeof t?.title && "string" == typeof t?.brief_summary)
                              return {
                                  title: (0, f.upperFirst)(t.title),
                                  brief_summary: t.brief_summary,
                                  key_points: Array.isArray(t.key_points)
                                      ? t.key_points.map((e) => e?.text).filter((e) => "string" == typeof e)
                                      : [],
                              };
                          return null;
                      } catch {
                          return null;
                      }
                  })(n.content_json)
                : null;
    return i?.title == null || "" === i.title
        ? null
        : {
              id: e.id,
              title: i.title,
              briefSummary: i.brief_summary ?? null,
              keyPoints: i.key_points,
              channelId: e.channel_id,
              guildId: e.guild_id,
              messageIds: e.message_ids,
              userIds: e.user_ids,
              startMessageId: e.start_message_id,
              endMessageId: e.end_message_id,
              messageCount: e.message_count,
              userCount: e.user_count,
              keywords: e.keywords ?? [],
              summaryMap:
                  null != e.summary_map
                      ? {
                            entries: e.summary_map.entries.map((e) => ({
                                summaryType: e.summary_type,
                                contentJson: e.content_json,
                            })),
                        }
                      : null,
              engagement: e.engagement,
              substance: e.substance,
              dynamics: e.dynamics,
              moderation:
                  null != e.moderation
                      ? {
                            status: (t = e.moderation).status,
                            statusReason: t.status_reason,
                            messageViolationRate: t.message_violation_rate,
                            flaggedMessageCount: t.flagged_message_count,
                            totalMessageCount: t.total_message_count,
                            flaggedMessageIds: t.flagged_message_ids,
                            flaggedMessageDetails: t.flagged_message_details.map((e) => ({
                                messageId: e.message_id,
                                category: e.category,
                                severity: e.severity,
                                confidence: e.confidence,
                                reason: e.reason,
                            })),
                            flaggedSummaryDetails: t.flagged_summary_details,
                            flaggedTitle: t.flagged_title,
                            flaggedSummary: t.flagged_summary,
                            flaggedKeyPoints: t.flagged_key_points,
                            failedMessageIds: t.failed_message_ids,
                        }
                      : null,
          };
}
var T = n(575279);
let m = new (r())({ max: 10, dispose: v }),
    g = new Map();
function S(e, t) {
    let n = g.get(e);
    return null != n && !!n.has(t) && (n.delete(t), 0 === n.size && g.delete(e), !0);
}
let N = new Map();
function C(e, t) {
    let n = N.get(e);
    null != n && (n.delete(t), 0 === n.size && N.delete(e));
}
function O(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        a = m.peek(e);
    if (null == a) return;
    let s = a.conversationMetadataById.get(t);
    if (null == s || (!i && s.fullyHydrated)) return;
    let o = [];
    for (let e of n) {
        let n = (0, l.rh)(e);
        o.push(n);
        let i = a.messageMetadataByMessageId.get(n.id);
        null != i
            ? ((i.conversationId = t), (i.message = n))
            : a.messageMetadataByMessageId.set(n.id, { conversationId: t, moderationLabel: null, message: n });
    }
    for (let e of ((s.hydratedMessages = o), (s.fullyHydrated = i), r))
        null == a.messageMetadataByMessageId.get(e.id) &&
            a.messageMetadataByMessageId.set(e.id, {
                conversationId: null,
                moderationLabel: null,
                message: (0, l.rh)(e),
            });
}
function R(e, t, n, i) {
    t.message = i;
    let r = null != t.conversationId ? e.conversationMetadataById.get(t.conversationId) : null;
    if (r?.hydratedMessages == null) return;
    let a = r.hydratedMessages.findIndex((e) => e.id === n);
    if (-1 === a) return;
    let s = r.hydratedMessages.slice();
    (s[a] = i), (r.hydratedMessages = s);
}
function L(e) {
    let { type: t, channelId: n, messageId: i, userId: r, emoji: a, reactionType: s } = e,
        l = m.peek(n);
    if (null == l) return !1;
    let c = l.messageMetadataByMessageId.get(i);
    if (c?.message == null || !(0, o.vp)(e)) return !1;
    let u = d.default.getId() === r,
        _ =
            "MESSAGE_REACTION_ADD" === t
                ? c.message.addReaction(a, u, { colors: e.colors, reactionType: s })
                : c.message.removeReaction(a, u, s);
    return R(l, c, i, _), !0;
}
function y() {
    let e = !1;
    return (
        m.forEach((t) => {
            t.messageMetadataByMessageId.forEach((n, i) => {
                if (null == n.message) return;
                let r = u.A.isBlockedForMessage(n.message),
                    a = u.A.isIgnoredForMessage(n.message);
                if (n.message.blocked !== r || n.message.ignored !== a) {
                    e = !0;
                    let s = n.message.set("blocked", r).set("ignored", a);
                    R(t, n, i, s);
                }
            });
        }),
        e
    );
}
function D(e, t) {
    let n = m.peek(e);
    if (null == n) return !1;
    let i = n.messageMetadataByMessageId.get(t);
    if (null != i) {
        let e = null != i.conversationId ? n.conversationMetadataById.get(i.conversationId) : null;
        e?.hydratedMessages != null && (e.hydratedMessages = e.hydratedMessages.filter((e) => e.id !== t));
    }
    return n.messageMetadataByMessageId.delete(t);
}
function v(e) {
    return g.delete(e);
}
function b(e) {
    let t = m.has(e);
    m.del(e);
    let n = v(e);
    return t || n;
}
class M extends a.Ay.Store {
    static displayName = "ConversationsStore";
    initialize() {
        this.waitFor(d.default, c.A, I.A, u.A, _.Ay, E.default);
    }
    hasChannelData(e) {
        return m.has(e);
    }
    getChannelConversations(e) {
        let t = m.peek(e);
        return null == t ? null : t.conversations;
    }
    getConversationForMessage(e, t) {
        return m.peek(e)?.messageMetadataByMessageId.get(t)?.conversationId ?? null;
    }
    getMessageMetadata(e, t) {
        return m.peek(e)?.messageMetadataByMessageId.get(t) ?? null;
    }
    getMessage(e, t) {
        return this.getMessageMetadata(e, t)?.message ?? null;
    }
    getConversationMetadata(e, t) {
        return m.peek(e)?.conversationMetadataById.get(t) ?? null;
    }
    getEdgeMarker(e, t) {
        let n = m.peek(e);
        return null == n ? null : "before" === t ? n.reachedOldest : n.reachedNewest;
    }
    isPendingFetch(e) {
        return g.has(e);
    }
    isListFetchPending(e, t) {
        return g.get(e)?.has(t) ?? !1;
    }
    getSelectedConversationId(e) {
        return m.peek(e)?.selectedConversationId ?? null;
    }
    getSelectedConversation(e) {
        let t = m.peek(e),
            n = t?.selectedConversationId;
        return null == n ? null : (t?.conversationMetadataById.get(n)?.conversation ?? null);
    }
    getConversationColor(e, t) {
        let n = m.peek(e);
        return null == n ? null : (n.conversationMetadataById.get(t)?.color ?? null);
    }
    getHydratedMessages(e, t) {
        return m.peek(e)?.conversationMetadataById.get(t)?.hydratedMessages ?? null;
    }
    getHydratedMessageById(e, t) {
        return m.peek(e)?.messageMetadataByMessageId.get(t)?.message ?? null;
    }
    isConversationFetchPending(e, t) {
        let n = N.get(e);
        return null != n && 0 !== n.size && (!0 !== t || n.has("full"));
    }
    getConversationFeedbackRating(e, t) {
        return m.peek(e)?.recentFeedbackRatingsByConversationId.get(t) ?? null;
    }
}
let P = new M(s.h, {
    CONVERSATION_FETCH_START: function (e) {
        var t;
        let n,
            { conversationId: i, full: r } = e;
        (t = r ? "full" : "preview"), null != (n = N.get(i)) ? n.add(t) : N.set(i, new Set([t]));
    },
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { channelId: t, conversationId: n, messages: i, messageReferences: r, fullyHydrated: a } = e;
        C(n, a ? "full" : "preview"), O(t, n, i, a, r);
    },
    CONVERSATION_FETCH_FAILURE: function (e) {
        let { conversationId: t, full: n } = e;
        C(t, n ? "full" : "preview");
    },
    CONVERSATIONS_FETCH_START: function (e) {
        let t,
            { channelId: n, requestKey: i, isJump: r } = e;
        r && g.delete(n), null == (t = g.get(n)) && ((t = new Set()), g.set(n, t)), t.add(i);
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let t,
            {
                channelId: n,
                rawConversations: i,
                direction: a,
                anchor: s,
                isJump: l,
                requestKey: o,
                fullyHydrated: d,
            } = e;
        if (!S(n, o)) return !1;
        let u = i.map(p).filter(A.Vq),
            _ = m.peek(n);
        if (l) {
            let e = _?.selectedConversationId,
                n = null != e ? _?.conversationMetadataById.get(e)?.conversation : null;
            t = null != n ? [n] : [];
        } else t = _?.conversations ?? [];
        let E = l ? null : (_?.reachedOldest ?? null),
            I = l ? null : (_?.reachedNewest ?? null),
            f = new Set(t.map((e) => e.id));
        if (
            (u.some((e) => !f.has(e.id)) ||
                null == s ||
                ("before" === a ? (E = Date.now()) : "after" === a && (I = Date.now())),
            "before" === a && null == s && (I = Date.now()),
            (u = (function (e, t) {
                let n = new Map();
                for (let t of e) n.set(t.id, t);
                for (let e of t) n.set(e.id, e);
                let i = Array.from(n.values());
                return i.sort((e, t) => h.default.compare(e.startMessageId, t.startMessageId)), i;
            })(t, u)).length > 50)
        )
            if ("after" === a) (u = u.slice(u.length - 50)), (E = null);
            else if ("before" === a) (u = u.slice(0, 50)), (I = null);
            else {
                let e = (function (e, t) {
                    if (null == t) return 0;
                    let n = e.findIndex((e) => h.default.compare(e.startMessageId, t) >= 0);
                    return -1 === n && (n = e.length), Math.max(0, Math.min(n - Math.floor(25), e.length - 50));
                })(u, s);
                e > 0 && (E = null), e + 50 < u.length && (I = null), (u = u.slice(e, e + 50));
            }
        let g = (function (e, t, n) {
            let i = n?.guildId ?? t[0]?.guildId ?? c.A.getChannel(e)?.guild_id ?? null,
                a = new Map(),
                s = new Map(),
                l = n?.colorIndex ?? 0;
            for (let e of t) {
                let t = n?.conversationMetadataById.get(e.id),
                    i = t?.color ?? T.J9[l++ % T.J9.length],
                    r = t?.hydratedMessages ?? null,
                    o = null != r && !!t?.fullyHydrated;
                a.set(e.id, { conversation: e, color: i, hydratedMessages: r, fullyHydrated: o });
                let d = null;
                if (null != e.moderation)
                    for (let t of ((d = new Map()), e.moderation.flaggedMessageDetails)) {
                        let e = d.get(t.messageId);
                        null != e ? e.push(t) : d.set(t.messageId, [t]);
                    }
                for (let t of e.messageIds) {
                    let i = n?.messageMetadataByMessageId.get(t),
                        r = null;
                    i?.moderationLabel == null &&
                        null != e.moderation &&
                        e.moderation.flaggedMessageIds.includes(t) &&
                        null != d &&
                        (r = (function (e) {
                            let t = e[0],
                                n = e.map((e) => e.category ?? e.reason).filter((e) => null != e),
                                i = t?.severity ?? null,
                                r = t?.confidence ?? null,
                                a = [null != i ? `${i} severity` : null, null != r ? `${r} confidence` : null]
                                    .filter(Boolean)
                                    .join(", "),
                                s = [n.length > 0 ? n.join(", ") : null, a.length > 0 ? a : null]
                                    .filter(Boolean)
                                    .join(" \xb7 ");
                            return s.length > 0 ? s : "Moderation Failed";
                        })(d.get(t) ?? [])),
                        s.set(t, {
                            conversationId: e.id,
                            moderationLabel: i?.moderationLabel ?? r,
                            message: i?.message ?? null,
                        });
                    let a = i?.message?.messageReference?.message_id;
                    if (null != a) {
                        let e = n?.messageMetadataByMessageId.get(a);
                        e?.message == null || s.has(a) || s.set(a, e);
                    }
                }
            }
            let o = n?.recentFeedbackRatingsByConversationId ?? new (r())({ max: 10 }),
                d = n?.selectedConversationId ?? null,
                u = null != d && t.some((e) => e.id === d) ? d : null;
            return {
                guildId: i,
                conversations: t,
                conversationMetadataById: a,
                messageMetadataByMessageId: s,
                recentFeedbackRatingsByConversationId: o,
                reachedOldest: n?.reachedOldest ?? null,
                reachedNewest: n?.reachedNewest ?? null,
                selectedConversationId: u,
                colorIndex: l,
            };
        })(n, u, _);
        for (let e of ((g.reachedOldest = E), (g.reachedNewest = I), null != _ ? Object.assign(_, g) : m.set(n, g), i))
            null != e.messages && O(n, e.id, e.messages, d);
        return !0;
    },
    CONVERSATIONS_FETCH_FAILURE: function (e) {
        let { channelId: t, requestKey: n } = e;
        return S(t, n);
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && m.has(t) && m.get(t), !1;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        return b(t.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if ("unavailable" in t && !0 === t.unavailable) return !1;
        let n = !1;
        for (let e of m.keys()) m.peek(e)?.guildId === t.id && b(e) && (n = !0);
        return n;
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, jump: n } = e;
        if (null == n || _.Ay.getChannelId() !== t) return !1;
        let i = m.peek(t);
        return null != i && ((i.reachedOldest = null), (i.reachedNewest = null), !0);
    },
    SET_SELECTED_CONVERSATION: function (e) {
        let { channelId: t, conversationId: n } = e;
        if (null == t) return !1;
        let i = m.peek(t);
        return null != i && ((i.selectedConversationId = n), !0);
    },
    CLEAR_CONVERSATION_SELECTION: function (e) {
        let { channelId: t, conversationId: n } = e,
            i = m.peek(t);
        if (null == i) return !1;
        let r = i.selectedConversationId;
        return null != r && (null == n || r === n) && ((i.selectedConversationId = null), !0);
    },
    SET_CONVERSATION_FEEDBACK_RATING: function (e) {
        let { channelId: t, conversationId: n, rating: i } = e,
            r = m.peek(t);
        return null != r && (r.recentFeedbackRatingsByConversationId.set(n, i), !0);
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e,
            n = t.channel_id,
            i = t.id;
        if (null == n || null == i) return !1;
        let r = m.peek(n);
        if (null == r) return !1;
        let a = r.messageMetadataByMessageId.get(i);
        if (a?.message == null) return !1;
        let s = (0, l.IU)(a.message, t);
        return R(r, a, i, s), !0;
    },
    MESSAGE_REACTION_ADD: L,
    MESSAGE_REACTION_REMOVE: L,
    MESSAGE_REACTION_ADD_MANY: function (e) {
        let { channelId: t, messageId: n, reactions: i } = e,
            r = m.peek(t);
        if (null == r) return !1;
        let a = r.messageMetadataByMessageId.get(n);
        if (a?.message == null) return !1;
        let s = a.message.addReactionBatch(i, d.default.getId());
        return R(r, a, n, s), !0;
    },
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { channelId: t, messageId: n } = e,
            i = m.peek(t);
        if (null == i) return !1;
        let r = i.messageMetadataByMessageId.get(n);
        if (r?.message == null) return !1;
        let a = r.message.set("reactions", []);
        return R(i, r, n, a), !0;
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e,
            r = m.peek(t);
        if (null == r) return !1;
        let a = r.messageMetadataByMessageId.get(n);
        if (a?.message == null) return !1;
        let s = a.message.removeReactionsForEmoji(i);
        return R(r, a, n, s), !0;
    },
    MESSAGE_DELETE: function (e) {
        let { channelId: t, id: n } = e;
        return D(t, n);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { channelId: t, ids: n } = e,
            i = !1;
        for (let e of n) D(t, e) && (i = !0);
        return i;
    },
    RELATIONSHIP_ADD: y,
    RELATIONSHIP_UPDATE: y,
    RELATIONSHIP_REMOVE: y,
    LOGOUT: function () {
        m.reset(), g.clear(), N.clear();
    },
});
