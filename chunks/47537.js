"use strict";
function r(e, t) {
    return null == e || null == t
        ? e === t
        : e.identityGuildId === t.identityGuildId &&
              e.identityEnabled === t.identityEnabled &&
              e.tag === t.tag &&
              e.badge === t.badge;
}
function i(e) {
    return null == e
        ? null
        : "identityGuildId" in e
          ? e
          : { identityGuildId: e.identity_guild_id, identityEnabled: e.identity_enabled, tag: e.tag, badge: e.badge };
}
n.d(t, { D: () => r, j: () => i });
