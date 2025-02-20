n.d(t, { Z: () => c }), n(230036);
var r = n(442837),
    i = n(752048),
    o = n(480294),
    a = n(594174),
    s = n(938475),
    l = n(981631);
function c(e) {
    let t = (0, r.Wu)(
            [s.ZP],
            () =>
                s.ZP.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id]
        ),
        n = (0, r.e7)([o.Z], () => o.Z.hasConsented(l.pjP.PERSONALIZATION));
    return (0, r.Wu)([a.default, i.Z], () => (n ? t.sort((e, t) => i.Z.compare(e, t)) : t).map((e) => a.default.getUser(e)).filter((e) => null != e), [n, t]);
}
