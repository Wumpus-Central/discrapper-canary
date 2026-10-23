E.d(t, { t: () => a });
var e = E(469054),
    i = E(174459),
    n = E(486020),
    d = E(652215);
function a(_) {
    let { avatarHash: t, avatarId: E, isGuildProfile: a = !1, avatarAssetOrigin: r = e.E.NEW_ASSET } = _;
    i.default.track(d.HAw.USER_AVATAR_UPDATED, {
        animated: (0, n.VI)(t),
        is_guild_profile: a,
        recent_avatar_id: r === e.E.ARCHIVED_ASSET ? Number(E) : void 0,
        is_edited_recent_avatar: r === e.E.EDITED_ARCHIVED_ASSET,
    });
}
