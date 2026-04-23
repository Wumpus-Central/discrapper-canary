n.d(t, { A: () => d });
var i = n(17928),
    l = n(931991),
    s = n(808728),
    r = n(71393),
    a = n(576705),
    o = n(652215);
function d(e, t) {
    return (0, i.bG)([r.A, s.Ay, a.A], () => {
        let n = r.A.getGuild(e);
        if (a.A.can(o.xBc.ADMINISTRATOR, n) || a.A.can(o.xBc.CREATE_EVENTS, n)) return !0;
        for (let { channel: n } of s.Ay.getChannels(e)[s.vM])
            if (null == t || n.type === t) {
                let [e] = (0, l.p_)(n);
                if (a.A.can(e, n)) return !0;
            }
        return !1;
    }, [e, t]);
}
