n.d(t, { t: () => s });
var i = n(392107),
    a = n(954571),
    r = n(486020),
    l = n(652215);
function s(e) {
    let { avatarHash: t, avatarId: n, isGuildProfile: s = !1, avatarAssetOrigin: o = i.E.NEW_ASSET } = e;
    a.default.track(l.HAw.USER_AVATAR_UPDATED, {
        animated: (0, r.VI)(t),
        is_guild_profile: s,
        recent_avatar_id: o === i.E.ARCHIVED_ASSET ? Number(n) : void 0,
        is_edited_recent_avatar: o === i.E.EDITED_ARCHIVED_ASSET,
    });
}
