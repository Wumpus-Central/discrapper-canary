n.d(t, { Z: () => f }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(881052),
    s = n(699682),
    o = n(81897),
    l = n(752048),
    u = n(621853),
    c = n(484459);
let d = [];
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, f] = (0, r.Wu)([u.Z], () => [u.Z.getMutualFriends(e), u.Z.isFetchingProfile(e)]),
        _ = (0, o.Z)(),
        [p, h] = (0, i.useState)(null),
        m = t && null == p && !f && null == n;
    (0, i.useEffect)(() => {
        m &&
            (async () => {
                try {
                    await (0, c.Z)(e, void 0, {
                        withMutualFriends: !0,
                        abortSignal: _
                    });
                } catch (e) {
                    h(new a.Hx(e));
                }
            })();
    }, [m, e, _]);
    let g = (0, r.Wu)([l.Z], () => (null == n || 0 === n.length ? d : n.length < 2 ? n : n.sort((e, t) => l.Z.compare(e.user.id, t.user.id))), [n]),
        E = (0, s.Z)(g);
    return {
        mutualFriends: null != g ? g : E,
        isFetching: f
    };
}
