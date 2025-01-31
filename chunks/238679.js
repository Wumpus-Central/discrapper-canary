n.d(t, {
    HU: () => _,
    KW: () => p,
    dO: () => m,
    gQ: () => g
});
var i = n(392711),
    l = n.n(i),
    r = n(570140),
    a = n(317381),
    s = n(16609),
    o = n(594174),
    c = n(823379),
    d = n(5192),
    u = n(863141),
    h = n(186901);
function m() {
    let e = a.ZP.getCurrentEmbeddedActivity();
    if (null == e) return { participants: [] };
    let t = (0, s.j)(e.location),
        n = (0, s.p)(e.location);
    return {
        participants: Array.from(e.userIds, (e) => {
            let i = o.default.getUser(e);
            if (null == i) return;
            let l = (0, d.y)(t, n, i);
            return {
                ...(0, u.Z)(i),
                nickname: null != l ? l : void 0
            };
        }).filter(c.lm)
    };
}
let p = { [h.Gp.ANY]: [h.wE] },
    g = {
        scope: p,
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = m();
            return l().isEqual(i, t) || n(i), i;
        }
    };
function _(e) {
    let t = 'EMBEDDED_ACTIVITY_UPDATE',
        n = () => {
            e(m());
        };
    return r.Z.subscribe(t, n), () => r.Z.unsubscribe(t, n);
}
