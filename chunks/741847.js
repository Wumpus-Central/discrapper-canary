n.d(t, { Z: () => r });
var i = n(58346);
function r(e) {
    var t;
    return {
        code: e.code,
        state: i.Rj.RESOLVED,
        name: e.name,
        description: null !== (t = e.description) && void 0 !== t ? t : '',
        creatorId: e.creator_id,
        creator: e.creator,
        createdAt: e.created_at,
        updatedAt: e.updated_at,
        sourceGuildId: e.source_guild_id,
        serializedSourceGuild: e.serialized_source_guild,
        usageCount: e.usage_count,
        isDirty: e.is_dirty
    };
}
