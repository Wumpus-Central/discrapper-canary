"use strict";
n.d(t, { a: () => r, u: () => s });
var i = n(701952);
function r(e) {
    var t;
    return {
        id: e.id,
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
function s(e) {
    let t = e.summaryMap?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summaryType);
    if (null != t) {
        let e = (0, i.i)(t.contentJson);
        if (e?.title != null && "" !== e.title) return e.title;
    }
    return e.keywords.length > 0 ? e.keywords.slice(0, 3).join(", ") : `${e.messageCount} messages`;
}
