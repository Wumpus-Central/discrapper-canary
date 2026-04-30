e.d(t, { t: () => a });
var E = e(392107),
    i = e(954571),
    S = e(486020),
    n = e(652215);
function a(_) {
    let { avatarHash: t, avatarId: e, isGuildProfile: a = !1, avatarAssetOrigin: d = E.E.NEW_ASSET } = _;
    i.default.track(n.HAw.USER_AVATAR_UPDATED, {
        animated: (0, S.VI)(t),
        is_guild_profile: a,
        recent_avatar_id: d === E.E.ARCHIVED_ASSET ? Number(e) : void 0,
        is_edited_recent_avatar: d === E.E.EDITED_ARCHIVED_ASSET,
    });
}
