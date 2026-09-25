E.d(t, { t: () => o });
var e = E(469054),
    i = E(174459),
    d = E(486020),
    n = E(652215);
function o(_) {
    let { avatarHash: t, avatarId: E, isGuildProfile: o = !1, avatarAssetOrigin: a = e.E.NEW_ASSET } = _;
    i.default.track(n.HAw.USER_AVATAR_UPDATED, {
        animated: (0, d.VI)(t),
        is_guild_profile: o,
        recent_avatar_id: a === e.E.ARCHIVED_ASSET ? Number(E) : void 0,
        is_edited_recent_avatar: a === e.E.EDITED_ARCHIVED_ASSET,
    });
}
