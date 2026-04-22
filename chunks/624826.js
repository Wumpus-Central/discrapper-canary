"use strict";
a.d(t, { t: () => s });
var r = a(392107),
    l = a(954571),
    n = a(486020),
    i = a(652215);
function s(e) {
    let { avatarHash: t, avatarId: a, isGuildProfile: s = !1, avatarAssetOrigin: o = r.E.NEW_ASSET } = e;
    l.default.track(i.HAw.USER_AVATAR_UPDATED, {
        animated: (0, n.VI)(t),
        is_guild_profile: s,
        recent_avatar_id: o === r.E.ARCHIVED_ASSET ? Number(a) : void 0,
        is_edited_recent_avatar: o === r.E.EDITED_ARCHIVED_ASSET,
    });
}
