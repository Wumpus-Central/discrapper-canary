n.d(t, {
    W: () => c,
    h: () => l,
});
var r = n(202384),
    i = n(513461),
    a = n(212455),
    s = n(976860),
    o = n(652215);
let l = (e) => {
        var t, n;
        return (
            (null == (t = e.features) ? void 0 : t.includes(o.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) &&
            (null == (n = e.features) ? void 0 : n.includes(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))
        );
    },
    c = (e) => {
        let t = a.A.getRequest(e);
        null != t && t.applicationStatus !== i.B5.STARTED
            ? (0, s.pX)(o.BVt.GUILD_MEMBER_VERIFICATION(e))
            : (0, r.Ze)(e);
    };
