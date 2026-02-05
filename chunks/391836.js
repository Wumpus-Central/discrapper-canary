n.d(t, { A: () => A }), n(938796), n(321073);
var i = n(179771),
    r = n(136722),
    a = n(420970),
    l = n(994500),
    s = n(287809),
    o = n(636401),
    d = n(90924),
    c = n(613057),
    u = n(652215);
let A = {
    [u.e$_.GET_RELATIONSHIPS]: (0, a.T)(u.e$_.GET_RELATIONSHIPS, {
        scope: { [c.sm.ANY]: [i.F.RELATIONSHIPS_READ] },
        handler(e) {
            if (r.zy(r.iu(e.socket.application.flags ?? 0), r.iu(u.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                throw new o.A({ errorCode: u.Lw6.INVALID_PERMISSIONS }, "Missing Permissions");
            let t = [];
            for (let [n, i] of l.A.getMutableRelationships().entries()) {
                if (i === u.eA$.NONE) continue;
                let r = s.default.getUser(n);
                if (null == r) continue;
                let a = (0, d.Gc)(i, r);
                t.push((0, d.LP)(a, e.socket.application.id));
            }
            return { relationships: t };
        },
    }),
};
