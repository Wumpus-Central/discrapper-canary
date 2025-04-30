n.d(t, { O: () => c });
var r = n(192379),
    i = n(442837),
    l = n(570140),
    a = n(621853),
    o = n(484459),
    s = n(594174);
function c(e) {
    let t = (0, i.e7)([s.default], () => s.default.getUser(e)),
        n = (0, i.Wu)([a.Z], () => {
            var t, n;
            return null != (n = null == (t = a.Z.getMutualGuilds(e)) ? void 0 : t.map((e) => e.guild)) ? n : [];
        });
    return (
        r.useEffect(() => {
            0 === n.length && null != t && null == a.Z.getMutualGuilds(e) && l.Z.wait(() => (0, o.Z)(e, void 0, { withMutualGuilds: !0 }));
        }, [n, t, e]),
        n
    );
}
