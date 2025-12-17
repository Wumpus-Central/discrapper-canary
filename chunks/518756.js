n.d(t, { Z: () => c }), n(388685);
var r = n(442837),
    i = n(357156),
    l = n(984933),
    a = n(430824),
    o = n(496675),
    s = n(981631);
function c(e, t) {
    return (0, r.e7)([a.Z, l.ZP, o.Z], () => {
        let n = a.Z.getGuild(e);
        if (o.Z.can(s.Plq.ADMINISTRATOR, n) || o.Z.can(s.Plq.CREATE_EVENTS, n)) return !0;
        for (let { channel: n } of l.ZP.getChannels(e)[l.Zb])
            if (null == t || n.type === t) {
                let [e] = (0, i.Ob)(n);
                if (o.Z.can(e, n)) return !0;
            }
        return !1;
    }, [e, t]);
}
