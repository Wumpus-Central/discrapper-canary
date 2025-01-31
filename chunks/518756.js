t.d(n, { Z: () => d }), t(47120);
var a = t(442837),
    o = t(357156),
    i = t(984933),
    r = t(430824),
    c = t(496675),
    l = t(981631);
function d(e, n) {
    return (0, a.e7)(
        [r.Z, i.ZP, c.Z],
        () => {
            let t = r.Z.getGuild(e);
            if (c.Z.can(l.Plq.ADMINISTRATOR, t) || c.Z.can(l.Plq.CREATE_EVENTS, t)) return !0;
            for (let { channel: t } of i.ZP.getChannels(e)[i.Zb])
                if (null == n || t.type === n) {
                    let [e] = (0, o.Ob)(t);
                    if (c.Z.can(e, t)) return !0;
                }
            return !1;
        },
        [e, n]
    );
}
