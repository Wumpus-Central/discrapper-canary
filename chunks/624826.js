n.d(t, {
    t: () => o,
});
var r = n(392107),
    i = n(954571),
    a = n(486020),
    s = n(652215);

function o(e) {
    let { avatarHash: t, avatarId: n, isGuildProfile: o = !1, avatarAssetOrigin: l = r.E.NEW_ASSET } = e;
    i.default.track(s.HAw.USER_AVATAR_UPDATED, {
        animated: (0, a.VI)(t),
        is_guild_profile: o,
        recent_avatar_id: l === r.E.ARCHIVED_ASSET ? Number(n) : void 0,
        is_edited_recent_avatar: l === r.E.EDITED_ARCHIVED_ASSET,
    });
}
