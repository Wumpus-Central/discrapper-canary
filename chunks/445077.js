"use strict";
n.d(t, { T: () => l }), n(938796);
var r = n(562465),
    i = n(73153),
    s = n(529942),
    a = n(164956),
    o = n(652215);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return a.A.isFullServerPreview(e)
        ? void (0, s.Z$)(e, { memberOptions: t })
        : (i.h.dispatch({ type: "GUILD_MEMBER_UPDATE_LOCAL", guildId: e, roles: t.roles, flags: t.flags }),
          r.Bo.patch({ url: o.Rsh.SET_GUILD_MEMBER(e), body: t, oldFormErrors: !!n || void 0, rejectWithError: !1 }));
}
