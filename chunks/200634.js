r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(392711);
var s = r(442837),
    l = r(881052),
    u = r(699682),
    c = r(81897),
    d = r(771845),
    f = r(621853),
    p = r(484459);
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [r, i] = (0, s.Wu)([f.Z], () => [f.Z.getMutualGuilds(e), f.Z.isFetchingProfile(e)]),
        h = (0, c.Z)(),
        [_, m] = (0, a.useState)(null),
        g = n && null == _ && !i && null == r;
    (0, a.useEffect)(() => {
        if (!!g)
            (async () => {
                try {
                    await (0, p.Z)(e, void 0, {
                        withMutualGuilds: !0,
                        abortSignal: h
                    });
                } catch (e) {
                    m(new l.Hx(e));
                }
            })();
    }, [g, e, h]);
    let E = (0, s.e7)([d.ZP], () => d.ZP.getFlattenedGuildIds()),
        v = (0, a.useMemo)(() => {
            if (null == r) return null;
            if (r.length < 2) return r;
            let e = Object.fromEntries(E.map((e, n) => [e, n]));
            return (0, o.sortBy)(r, (n) => {
                var r;
                let { guild: i } = n;
                return null !== (r = e[i.id]) && void 0 !== r ? r : E.length;
            });
        }, [r, E]),
        y = (0, u.Z)(v);
    return {
        mutualGuilds: null != v ? v : y,
        isFetching: i
    };
}
