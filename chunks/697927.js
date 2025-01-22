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
    d = r(814443),
    f = r(621853),
    p = r(484459);
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [r, i] = (0, s.Wu)([f.Z], () => [f.Z.getMutualFriends(e), f.Z.isFetchingProfile(e)]),
        h = (0, c.Z)(),
        [_, m] = (0, a.useState)(null),
        g = n && null == _ && !i && null == r;
    (0, a.useEffect)(() => {
        if (!!g)
            (async () => {
                try {
                    await (0, p.Z)(e, void 0, {
                        withMutualFriends: !0,
                        abortSignal: h
                    });
                } catch (e) {
                    m(new l.Hx(e));
                }
            })();
    }, [g, e, h]);
    let E = (0, s.e7)([d.Z], () => d.Z.getUserAffinitiesMap()),
        v = (0, a.useMemo)(
            () =>
                null == r
                    ? null
                    : r.length < 2
                      ? r
                      : (0, o.sortBy)(r, (e) => {
                            var n, r;
                            let { user: i } = e;
                            return -((null !== (r = null === (n = E.get(i.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : -1) * 1);
                        }),
            [r, E]
        ),
        y = (0, u.Z)(v);
    return {
        mutualFriends: null != v ? v : y,
        isFetching: i
    };
}
