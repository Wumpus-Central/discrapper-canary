n.d(t, { A: () => p }), n(938796), n(896048), n(321073);
var r = n(179771),
    i = n(136722),
    l = n(420970),
    a = n(994500),
    s = n(287809),
    o = n(636401),
    c = n(90924),
    u = n(613057),
    d = n(652215);
let p = {
    [d.e$_.GET_RELATIONSHIPS]: (0, l.T)(d.e$_.GET_RELATIONSHIPS, {
        scope: { [u.sm.ANY]: [r.F.RELATIONSHIPS_READ] },
        handler(e) {
            var t;
            if (i.zy(i.iu(null != (t = e.socket.application.flags) ? t : 0), i.iu(d.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                throw new o.A({ errorCode: d.Lw6.INVALID_PERMISSIONS }, "Missing Permissions");
            let n = [];
            for (let [t, r] of a.A.getMutableRelationships().entries()) {
                if (r === d.eA$.NONE) continue;
                let i = s.default.getUser(t);
                if (null == i) continue;
                let l = (0, c.Gc)(r, i);
                n.push((0, c.LP)(l, e.socket.application.id));
            }
            return { relationships: n };
        },
    }),
};
