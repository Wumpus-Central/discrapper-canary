n.d(t, { Z: () => s });
var r = n(72703),
    i = n(626135),
    o = n(768581),
    a = n(981631);
function s(e) {
    let { avatarHash: t, avatarId: n, isGuildProfile: s = !1, avatarAssetOrigin: l = r.q.NEW_ASSET } = e;
    i.default.track(a.rMx.USER_AVATAR_UPDATED, {
        animated: (0, o.xR)(t),
        is_guild_profile: s,
        recent_avatar_id: l === r.q.ARCHIVED_ASSET ? Number(n) : void 0,
        is_edited_recent_avatar: l === r.q.EDITED_ARCHIVED_ASSET
    });
}
