n.d(t, { P: () => u });
var r = n(192379),
    i = n(442837),
    l = n(687158),
    o = n(484459),
    a = n(594174),
    s = n(74538),
    c = n(474936);
function u(e) {
    let t = (0, l.ZP)(e),
        n = (0, i.e7)([a.default], () => s.ZP.canUseChatWallpapers(a.default.getUser(e))),
        u = n || (null == t ? void 0 : t.premiumType) === c.p9.TIER_2;
    return (
        r.useEffect(() => {
            n || null != t || null == e || (0, o.Z)(e);
        }, [n, t, e]),
        u
    );
}
