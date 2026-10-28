n.d(t, { a: () => r });
var i = n(435558);
function r(e) {
    let t = e.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
        n =
            null != t
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
                  })(t.content_json)
                : null;
    return n?.title == null || "" === n.title
        ? null
        : {
              id: e.id,
              title: n.title,
              briefSummary: n.brief_summary ?? null,
              keyPoints: n.key_points,
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
          };
}
