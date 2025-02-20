n.d(t, { O: () => c });
var r = n(192379),
    i = n(442837),
    l = n(570140),
    o = n(621853),
    a = n(484459),
    s = n(594174);
function c(e) {
    let t = (0, i.e7)([s.default], () => s.default.getUser(e)),
        n = (0, i.Wu)([o.Z], () => {
            var t, n;
            return null !== (n = null === (t = o.Z.getMutualGuilds(e)) || void 0 === t ? void 0 : t.map((e) => e.guild)) && void 0 !== n ? n : [];
        });
    return (
        r.useEffect(() => {
            0 === n.length && null != t && null == o.Z.getMutualGuilds(e) && l.Z.wait(() => (0, a.Z)(e, void 0, { withMutualGuilds: !0 }));
        }, [n, t, e]),
        n
    );
}
