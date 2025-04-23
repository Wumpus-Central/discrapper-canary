function r(e, t) {
    return null == e || null == t ? e === t : e.identityGuildId === t.identityGuildId && e.identityEnabled === t.identityEnabled && e.tag === t.tag && e.badge === t.badge;
}
function i(e) {
    if (null == e) return null;
    if ('identityGuildId' in e) return e;
    let t = e;
    return {
        identityGuildId: t.identity_guild_id,
        identityEnabled: t.identity_enabled,
        tag: t.tag,
        badge: t.badge
    };
}
n.d(t, {
    d: () => r,
    l: () => i
});
