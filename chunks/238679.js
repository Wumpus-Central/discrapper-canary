n.d(t, {
    HU: function () {
        return f;
    },
    KW: function () {
        return p;
    },
    dO: function () {
        return m;
    },
    gQ: function () {
        return g;
    }
});
var i = n(392711),
    r = n.n(i),
    l = n(570140),
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
            let r = (0, d.y)(t, n, i);
            return {
                ...(0, u.Z)(i),
                nickname: null != r ? r : void 0
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
            return !r().isEqual(i, t) && n(i), i;
        }
    };
function f(e) {
    let t = 'EMBEDDED_ACTIVITY_UPDATE',
        n = () => {
            e(m());
        };
    return l.Z.subscribe(t, n), () => l.Z.unsubscribe(t, n);
}
