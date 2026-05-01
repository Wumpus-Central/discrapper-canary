"use strict";
n.d(t, { t: () => o });
var i = n(392107),
    r = n(174459),
    s = n(486020),
    a = n(652215);
function o(e) {
    let { avatarHash: t, avatarId: n, isGuildProfile: o = !1, avatarAssetOrigin: l = i.E.NEW_ASSET } = e;
    r.default.track(a.HAw.USER_AVATAR_UPDATED, {
        animated: (0, s.VI)(t),
        is_guild_profile: o,
        recent_avatar_id: l === i.E.ARCHIVED_ASSET ? Number(n) : void 0,
        is_edited_recent_avatar: l === i.E.EDITED_ARCHIVED_ASSET,
    });
}
