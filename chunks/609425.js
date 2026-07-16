"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(17928),
    a = n(386467),
    s = n(696451),
    l = n(287809),
    o = n(824994);
function d() {
    let {
            userId: e,
            guildId: t,
            pendingDisplayNameStyles: n,
            ignoreDisabledStylesSetting: d = !1,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        c = (0, o.W)({ location: "useDisplayNameStyles" }),
        u = (0, r.bG)([l.default], () => (null != e ? l.default.getUser(e) : l.default.getCurrentUser())),
        _ = (0, i.useContext)(a.A);
    null == t && (t = _);
    let E = (0, r.bG)([s.Ay], () => (null != t && null != u ? s.Ay.getMember(t, u.id) : null));
    return c || d
        ? void 0 !== n
            ? null === n && null != t
                ? u?.displayNameStyles
                : n
            : (E?.displayNameStyles ?? u?.displayNameStyles)
        : null;
}
