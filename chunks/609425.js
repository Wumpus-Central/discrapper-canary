"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(311907),
    a = n(386467),
    s = n(696451),
    o = n(287809),
    l = n(824994);
function u() {
    let {
            userId: e,
            guildId: t,
            pendingDisplayNameStyles: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        u = (0, l.W)({ location: "useDisplayNameStyles" }),
        c = (0, i.bG)([o.default], () => (null != e ? o.default.getUser(e) : o.default.getCurrentUser())),
        d = (0, r.useContext)(a.A);
    null == t && (t = d);
    let _ = (0, i.bG)([s.Ay], () => (null != t && null != c ? s.Ay.getMember(t, c.id) : null));
    return u
        ? void 0 !== n
            ? null === n && null != t
                ? c?.displayNameStyles
                : n
            : (_?.displayNameStyles ?? c?.displayNameStyles)
        : null;
}
