n.d(t, { A: () => d });
var i = n(311907),
    l = n(931991),
    s = n(808728),
    a = n(71393),
    r = n(576705),
    o = n(652215);
function d(e, t) {
    return (0, i.bG)([a.A, s.Ay, r.A], () => {
        let n = a.A.getGuild(e);
        if (r.A.can(o.xBc.ADMINISTRATOR, n) || r.A.can(o.xBc.CREATE_EVENTS, n)) return !0;
        for (let { channel: n } of s.Ay.getChannels(e)[s.vM])
            if (null == t || n.type === t) {
                let [e] = (0, l.p_)(n);
                if (r.A.can(e, n)) return !0;
            }
        return !1;
    }, [e, t]);
}
