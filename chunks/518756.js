n.d(t, { Z: () => s }), n(47120);
var r = n(442837),
    o = n(357156),
    a = n(984933),
    i = n(430824),
    c = n(496675),
    l = n(981631);
function s(e, t) {
    return (0, r.e7)(
        [i.Z, a.ZP, c.Z],
        () => {
            let n = i.Z.getGuild(e);
            if (c.Z.can(l.Plq.ADMINISTRATOR, n) || c.Z.can(l.Plq.CREATE_EVENTS, n)) return !0;
            for (let { channel: n } of a.ZP.getChannels(e)[a.Zb])
                if (null == t || n.type === t) {
                    let [e] = (0, o.Ob)(n);
                    if (c.Z.can(e, n)) return !0;
                }
            return !1;
        },
        [e, t]
    );
}
