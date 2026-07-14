"use strict";
n.d(t, { t: () => l });
var i = n(392107),
    r = n(174459),
    a = n(486020),
    s = n(652215);
function l(e) {
    let { avatarHash: t, avatarId: n, isGuildProfile: l = !1, avatarAssetOrigin: o = i.E.NEW_ASSET } = e;
    r.default.track(s.HAw.USER_AVATAR_UPDATED, {
        animated: (0, a.VI)(t),
        is_guild_profile: l,
        recent_avatar_id: o === i.E.ARCHIVED_ASSET ? Number(n) : void 0,
        is_edited_recent_avatar: o === i.E.EDITED_ARCHIVED_ASSET,
    });
}
