n.d(t, { Z: () => f }), n(47120), n(230036);
var r = n(192379),
    i = n(442837),
    o = n(881052),
    a = n(699682),
    s = n(81897),
    l = n(752048),
    c = n(621853),
    u = n(484459);
let d = [];
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, f] = (0, i.Wu)([c.Z], () => [c.Z.getMutualFriends(e), c.Z.isFetchingProfile(e)]),
        p = (0, s.Z)(),
        [_, h] = (0, r.useState)(null),
        m = t && null == _ && !f && null == n;
    (0, r.useEffect)(() => {
        m &&
            (async () => {
                try {
                    await (0, u.Z)(e, void 0, {
                        withMutualFriends: !0,
                        abortSignal: p
                    });
                } catch (e) {
                    h(new o.Hx(e));
                }
            })();
    }, [m, e, p]);
    let g = (0, i.Wu)([l.Z], () => (null == n || 0 === n.length ? d : n.length < 2 ? n : n.sort((e, t) => l.Z.compare(e.user.id, t.user.id))), [n]),
        E = (0, a.Z)(g);
    return {
        mutualFriends: null != g ? g : E,
        isFetching: f
    };
}
