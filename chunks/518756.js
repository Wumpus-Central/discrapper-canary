n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(442837),
    l = n(357156),
    r = n(984933),
    a = n(430824),
    o = n(496675),
    s = n(981631);
function c(e, t) {
    return (0, i.e7)(
        [a.Z, r.ZP, o.Z],
        () => {
            let n = a.Z.getGuild(e);
            if (o.Z.can(s.Plq.ADMINISTRATOR, n) || o.Z.can(s.Plq.CREATE_EVENTS, n)) return !0;
            for (let { channel: n } of r.ZP.getChannels(e)[r.Zb])
                if (null == t || n.type === t) {
                    let [e] = (0, l.Ob)(n);
                    if (o.Z.can(e, n)) return !0;
                }
            return !1;
        },
        [e, t]
    );
}
