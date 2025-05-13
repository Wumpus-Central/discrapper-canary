n.d(t, { Z: () => c }), n(642613);
var r = n(442837),
    i = n(752048),
    a = n(480294),
    o = n(594174),
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
        c = (0, r.e7)([a.Z], () => a.Z.hasConsented(l.pjP.PERSONALIZATION));
    return (0, r.Wu)(
        [o.default],
        () =>
            (c
                ? t.sort((e, t) => {
                      var r, i, a, o;
                      return (null != (a = null == (r = n.get(t)) ? void 0 : r.vcProbability) ? a : 0) - (null != (o = null == (i = n.get(e)) ? void 0 : i.vcProbability) ? o : 0);
                  })
                : t
            )
                .map((e) => o.default.getUser(e))
                .filter((e) => null != e),
        [c, n, t]
    );
}
