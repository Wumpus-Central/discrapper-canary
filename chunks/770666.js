n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(311907),
    l = n(931991),
    i = n(808728),
    a = n(71393),
    s = n(576705),
    o = n(652215);

function c(e, t) {
    return (0, r.bG)([a.A, i.Ay, s.A], () => {
        let n = a.A.getGuild(e);
        if (s.A.can(o.xBc.ADMINISTRATOR, n) || s.A.can(o.xBc.CREATE_EVENTS, n)) return !0;
        for (let { channel: n } of i.Ay.getChannels(e)[i.vM])
            if (null == t || n.type === t) {
                let [e] = (0, l.p_)(n);
                if (s.A.can(e, n)) return !0;
            }
        return !1;
    }, [e, t]);
}
