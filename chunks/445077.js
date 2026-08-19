"use strict";
n.d(t, { T: () => o }), n(938796);
var i = n(636537),
    r = n(228366),
    a = n(529942),
    s = n(164956),
    l = n(652215);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return s.A.isFullServerPreview(e)
        ? void (0, a.Z$)(e, { memberOptions: t })
        : (r.h.dispatch({ type: "GUILD_MEMBER_UPDATE_LOCAL", guildId: e, roles: t.roles, flags: t.flags }),
          i.Bo.patch({ url: l.Rsh.SET_GUILD_MEMBER(e), body: t, oldFormErrors: !!n || void 0, rejectWithError: !1 }));
}
