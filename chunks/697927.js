n.d(t, { Z: () => f }), n(47120);
var i = n(192379),
    r = n(392711),
    a = n(442837),
    s = n(881052),
    o = n(699682),
    l = n(81897),
    u = n(814443),
    c = n(621853),
    d = n(484459);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, f] = (0, a.Wu)([c.Z], () => [c.Z.getMutualFriends(e), c.Z.isFetchingProfile(e)]),
        _ = (0, l.Z)(),
        [p, h] = (0, i.useState)(null),
        m = t && null == p && !f && null == n;
    (0, i.useEffect)(() => {
        m &&
            (async () => {
                try {
                    await (0, d.Z)(e, void 0, {
                        withMutualFriends: !0,
                        abortSignal: _
                    });
                } catch (e) {
                    h(new s.Hx(e));
                }
            })();
    }, [m, e, _]);
    let g = (0, a.e7)([u.Z], () => u.Z.getUserAffinitiesMap()),
        E = (0, i.useMemo)(
            () =>
                null == n
                    ? null
                    : n.length < 2
                      ? n
                      : (0, r.sortBy)(n, (e) => {
                            var t, n;
                            let { user: i } = e;
                            return -((null !== (n = null === (t = g.get(i.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : -1) * 1);
                        }),
            [n, g]
        ),
        v = (0, o.Z)(E);
    return {
        mutualFriends: null != E ? E : v,
        isFetching: f
    };
}
