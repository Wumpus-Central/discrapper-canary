n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    a = n(386467),
    s = n(696451),
    o = n(287809),
    l = n(824994);
function c() {
    var e;
    let {
            userId: t,
            guildId: n,
            pendingDisplayNameStyles: c,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        u = (0, l.W)({ location: "useDisplayNameStyles" }),
        d = (0, i.bG)([o.default], () => (null != t ? o.default.getUser(t) : o.default.getCurrentUser())),
        f = (0, r.useContext)(a.A);
    null == n && (n = f);
    let p = (0, i.bG)([s.Ay], () => (null != n && null != d ? s.Ay.getMember(n, d.id) : null));
    return u
        ? void 0 !== c
            ? null === c && null != n
                ? null == d
                    ? void 0
                    : d.displayNameStyles
                : c
            : null != (e = null == p ? void 0 : p.displayNameStyles)
              ? e
              : null == d
                ? void 0
                : d.displayNameStyles
        : null;
}
