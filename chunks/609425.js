"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(17928),
    s = n(386467),
    a = n(696451),
    o = n(287809),
    l = n(824994);
function d() {
    let {
            userId: e,
            guildId: t,
            pendingDisplayNameStyles: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        d = (0, l.W)({ location: "useDisplayNameStyles" }),
        _ = (0, r.bG)([o.default], () => (null != e ? o.default.getUser(e) : o.default.getCurrentUser())),
        u = (0, i.useContext)(s.A);
    null == t && (t = u);
    let c = (0, r.bG)([a.Ay], () => (null != t && null != _ ? a.Ay.getMember(t, _.id) : null));
    return d
        ? void 0 !== n
            ? null === n && null != t
                ? _?.displayNameStyles
                : n
            : (c?.displayNameStyles ?? _?.displayNameStyles)
        : null;
}
