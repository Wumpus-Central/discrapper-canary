"use strict";
n.d(t, { A: () => i });
var r = n(401755);
function i(e) {
    return {
        code: e.code,
        state: r.QB.RESOLVED,
        name: e.name,
        description: e.description ?? "",
        creatorId: e.creator_id,
        creator: e.creator,
        createdAt: e.created_at,
        updatedAt: e.updated_at,
        sourceGuildId: e.source_guild_id,
        serializedSourceGuild: e.serialized_source_guild,
        usageCount: e.usage_count,
        isDirty: e.is_dirty,
    };
}
