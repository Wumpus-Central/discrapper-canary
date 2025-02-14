n.d(t, { O: () => d });
var i = n(192379),
    l = n(442837),
    r = n(570140),
    a = n(621853),
    s = n(484459),
    o = n(594174);
function d(e) {
    let t = (0, l.e7)([o.default], () => o.default.getUser(e)),
        n = (0, l.Wu)([a.Z], () => {
            var t, n;
            return null !== (n = null === (t = a.Z.getMutualGuilds(e)) || void 0 === t ? void 0 : t.map((e) => e.guild)) && void 0 !== n ? n : [];
        });
    return (
        i.useEffect(() => {
            0 === n.length && null != t && null == a.Z.getMutualGuilds(e) && r.Z.wait(() => (0, s.Z)(e, void 0, { withMutualGuilds: !0 }));
        }, [n, t, e]),
        n
    );
}
