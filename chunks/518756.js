n.d(e, { Z: () => s }), n(47120);
var i = n(442837),
    d = n(357156),
    _ = n(984933),
    a = n(430824),
    r = n(496675),
    l = n(981631);
function s(t, e) {
    return (0, i.e7)(
        [a.Z, _.ZP, r.Z],
        () => {
            let n = a.Z.getGuild(t);
            if (r.Z.can(l.Plq.ADMINISTRATOR, n) || r.Z.can(l.Plq.CREATE_EVENTS, n)) return !0;
            for (let { channel: n } of _.ZP.getChannels(t)[_.Zb])
                if (null == e || n.type === e) {
                    let [t] = (0, d.Ob)(n);
                    if (r.Z.can(t, n)) return !0;
                }
            return !1;
        },
        [t, e]
    );
}
