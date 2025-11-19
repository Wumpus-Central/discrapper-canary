n.d(t, { Z: () => c });
var r = n(473749),
    i = n(442837),
    a = n(372900),
    o = n(271383),
    s = n(594174),
    l = n(181430);
function c() {
    var e;
    let {
            userId: t,
            guildId: n,
            pendingDisplayNameStyles: c,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        u = (0, l.Y)({ location: "useDisplayNameStyles" }),
        d = (0, i.e7)([s.default], () => (null != t ? s.default.getUser(t) : s.default.getCurrentUser())),
        f = (0, r.useContext)(a.Z);
    null == n && (n = f);
    let _ = (0, i.e7)([o.ZP], () => (null != n && null != d ? o.ZP.getMember(n, d.id) : null));
    return u
        ? void 0 !== c
            ? null === c && null != n
                ? null == d
                    ? void 0
                    : d.displayNameStyles
                : c
            : null != (e = null == _ ? void 0 : _.displayNameStyles)
              ? e
              : null == d
                ? void 0
                : d.displayNameStyles
        : null;
}
