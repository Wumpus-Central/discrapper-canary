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
        n = (0, r.e7)([i.Z], () => i.Z.getUserAffinitiesMap()),
        c = (0, r.e7)([o.Z], () => o.Z.hasConsented(l.pjP.PERSONALIZATION));
    return (0, r.Wu)(
        [a.default],
        () =>
            (c
                ? t.sort((e, t) => {
                      var r, i, o, a;
                      return (null != (o = null == (r = n.get(t)) ? void 0 : r.vcProbability) ? o : 0) - (null != (a = null == (i = n.get(e)) ? void 0 : i.vcProbability) ? a : 0);
                  })
                : t
            )
                .map((e) => a.default.getUser(e))
                .filter((e) => null != e),
        [c, n, t]
    );
}
