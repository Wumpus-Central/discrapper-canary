n.d(t, {
    KW: () => m,
    dO: () => h,
    gQ: () => p
});
var i = n(392711),
    l = n.n(i),
    r = n(317381),
    a = n(16609),
    s = n(594174),
    o = n(823379),
    d = n(5192),
    c = n(863141),
    u = n(186901);
function h() {
    let e = r.ZP.getCurrentEmbeddedActivity();
    if (null == e) return { participants: [] };
    let t = (0, a.jS)(e.location),
        n = (0, a.pY)(e.location);
    return {
        participants: Array.from(e.userIds, (e) => {
            let i = s.default.getUser(e);
            if (null == i) return;
            let l = (0, d.y)(t, n, i);
            return {
                ...(0, c.Z)(i),
                nickname: null != l ? l : void 0
            };
        }).filter(o.lm)
    };
}
let m = { [u.Gp.ANY]: [u.wE] },
    p = {
        scope: m,
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = h();
            return l().isEqual(i, t) || n(i), i;
        }
    };
