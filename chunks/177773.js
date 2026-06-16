"use strict";
n.d(t, { A: () => r });
var i = n(401755);
function r(e) {
    return {
        code: e.code,
        state: i.QB.RESOLVED,
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
