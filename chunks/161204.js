n.d(t, { a: () => r });
var i = n(435558);
function r(e) {
    var t;
    let n = e.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
        r =
            null != n
                ? (function (e) {
                      try {
                          let t = JSON.parse(e);
                          if ("string" == typeof t?.title && "string" == typeof t?.brief_summary)
                              return {
                                  title: (0, i.upperFirst)(t.title),
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
    return r?.title == null || "" === r.title
        ? null
        : {
              id: e.id,
              title: r.title,
              briefSummary: r.brief_summary ?? null,
              keyPoints: r.key_points,
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
