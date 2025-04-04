n.d(t, { P: () => u });
var r = n(192379),
    i = n(442837),
    o = n(687158),
    a = n(484459),
    s = n(594174),
    l = n(74538),
    c = n(474936);
function u(e) {
    let t = (0, o.ZP)(e),
        n = (0, i.e7)([s.default], () => l.ZP.canUseChatWallpapers(s.default.getUser(e))),
        u = n || (null == t ? void 0 : t.premiumType) === c.p9.TIER_2;
    return (
        r.useEffect(() => {
            n || null != t || null == e || (0, a.Z)(e);
        }, [n, t, e]),
        u
    );
}
