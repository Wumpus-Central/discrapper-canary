n.d(t, { Z: () => c }), n(388685);
var r = n(442837),
    i = n(357156),
    l = n(984933),
    o = n(430824),
    s = n(496675),
    a = n(981631);
function c(e, t) {
    return (0, r.e7)(
        [o.Z, l.ZP, s.Z],
        () => {
            let n = o.Z.getGuild(e);
            if (s.Z.can(a.Plq.ADMINISTRATOR, n) || s.Z.can(a.Plq.CREATE_EVENTS, n)) return !0;
            for (let { channel: n } of l.ZP.getChannels(e)[l.Zb])
                if (null == t || n.type === t) {
                    let [e] = (0, i.Ob)(n);
                    if (s.Z.can(e, n)) return !0;
                }
            return !1;
        },
        [e, t]
    );
}
