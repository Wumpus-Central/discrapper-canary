"use strict";
n.d(t, { t: () => s });
var r = n(392107),
    i = n(954571),
    a = n(486020),
    l = n(652215);
function s(e) {
    let { avatarHash: t, avatarId: n, isGuildProfile: s = !1, avatarAssetOrigin: o = r.E.NEW_ASSET } = e;
    i.default.track(l.HAw.USER_AVATAR_UPDATED, {
        animated: (0, a.VI)(t),
        is_guild_profile: s,
        recent_avatar_id: o === r.E.ARCHIVED_ASSET ? Number(n) : void 0,
        is_edited_recent_avatar: o === r.E.EDITED_ARCHIVED_ASSET,
    });
}
