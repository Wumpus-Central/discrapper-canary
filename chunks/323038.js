n.d(t, { Z: () => u });
var i = n(442837),
    r = n(752048),
    a = n(480294),
    s = n(594174),
    o = n(938475),
    l = n(981631);
function u(e) {
    let t = (0, i.Wu)(
            [o.ZP],
            () =>
                o.ZP.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id]
        ),
        n = (0, i.e7)([a.Z], () => a.Z.hasConsented(l.pjP.PERSONALIZATION));
    return (0, i.Wu)([s.default, r.Z], () => (n ? t.sort((e, t) => r.Z.compare(e, t)) : t).map((e) => s.default.getUser(e)).filter((e) => null != e), [n, t]);
}
