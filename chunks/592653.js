n.d(t, { WW: () => h, Y$: () => A, t$: () => _ });
var i = n(735438),
    r = n.n(i),
    a = n(933958),
    l = n(969151),
    s = n(287809),
    o = n(403362),
    d = n(562153),
    u = n(639621),
    c = n(613057);
function A() {
    let e = a.Ay.getCurrentEmbeddedActivity();
    if (null == e) return { participants: [] };
    let t = (0, l.D)(e.location),
        n = (0, l.H)(e.location);
    return {
        participants: Array.from(e.userIds, (e) => {
            let i = s.default.getUser(e);
            if (null == i) return;
            let r = (0, d.tJ)(t, n, i);
            return { ...(0, u.A)(i), nickname: r ?? void 0 };
        }).filter(o.Vq),
    };
}
let h = { [c.sm.ANY]: [c.VH] },
    _ = {
        scope: h,
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = A();
            return r().isEqual(i, t) || n(i), i;
        },
    };
