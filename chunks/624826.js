E.d(t, { t: () => a });
var e = E(392107),
    S = E(954571),
    i = E(486020),
    n = E(652215);
function a(_) {
    let { avatarHash: t, avatarId: E, isGuildProfile: a = !1, avatarAssetOrigin: o = e.E.NEW_ASSET } = _;
    S.default.track(n.HAw.USER_AVATAR_UPDATED, {
        animated: (0, i.VI)(t),
        is_guild_profile: a,
        recent_avatar_id: o === e.E.ARCHIVED_ASSET ? Number(E) : void 0,
        is_edited_recent_avatar: o === e.E.EDITED_ARCHIVED_ASSET,
    });
}
