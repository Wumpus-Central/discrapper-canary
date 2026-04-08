n.d(t, { t: () => s });
var l = n(392107),
    a = n(954571),
    i = n(486020),
    r = n(652215);
function s(e) {
    let { avatarHash: t, avatarId: n, isGuildProfile: s = !1, avatarAssetOrigin: d = l.E.NEW_ASSET } = e;
    a.default.track(r.HAw.USER_AVATAR_UPDATED, {
        animated: (0, i.VI)(t),
        is_guild_profile: s,
        recent_avatar_id: d === l.E.ARCHIVED_ASSET ? Number(n) : void 0,
        is_edited_recent_avatar: d === l.E.EDITED_ARCHIVED_ASSET,
    });
}
