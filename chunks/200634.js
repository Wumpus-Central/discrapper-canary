n.d(t, { Z: () => f }), n(47120), n(977457);
var r = n(192379),
    i = n(392711),
    o = n(442837),
    a = n(881052),
    s = n(699682),
    l = n(81897),
    c = n(771845),
    u = n(621853),
    d = n(484459);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, f] = (0, o.Wu)([u.Z], () => [u.Z.getMutualGuilds(e), u.Z.isFetchingProfile(e)]),
        p = (0, l.Z)(),
        [_, h] = (0, r.useState)(null),
        m = t && null == _ && !f && null == n;
    (0, r.useEffect)(() => {
        m &&
            (async () => {
                try {
                    await (0, d.Z)(e, void 0, {
                        withMutualGuilds: !0,
                        abortSignal: p
                    });
                } catch (e) {
                    h(new a.Hx(e));
                }
            })();
    }, [m, e, p]);
    let g = (0, o.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        E = (0, r.useMemo)(() => {
            if (null == n) return null;
            if (n.length < 2) return n;
            let e = Object.fromEntries(g.map((e, t) => [e, t]));
            return (0, i.sortBy)(n, (t) => {
                var n;
                let { guild: r } = t;
                return null !== (n = e[r.id]) && void 0 !== n ? n : g.length;
            });
        }, [n, g]),
        v = (0, s.Z)(E);
    return {
        mutualGuilds: null != E ? E : v,
        isFetching: f
    };
}
