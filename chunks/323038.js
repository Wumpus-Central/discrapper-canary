n.d(t, { Z: () => c });
var i = n(392711),
    r = n(442837),
    a = n(814443),
    s = n(480294),
    o = n(594174),
    l = n(938475),
    u = n(981631);
function c(e) {
    let t = (0, r.Wu)(
            [l.ZP],
            () =>
                l.ZP.getVoiceStatesForChannelAlt(e.id, e.guild_id).map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
            [e.id, e.guild_id]
        ),
        n = (0, r.e7)([a.Z], () => a.Z.getUserAffinitiesMap()),
        c = (0, r.e7)([s.Z], () => s.Z.hasConsented(u.pjP.PERSONALIZATION));
    return (0, r.Wu)(
        [o.default],
        () =>
            (c && n.size > 0
                ? (0, i.orderBy)(
                      t,
                      (e) => {
                          var t, i;
                          return null !== (i = null === (t = n.get(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== i ? i : 0;
                      },
                      'desc'
                  )
                : t
            )
                .map((e) => o.default.getUser(e))
                .filter((e) => null != e),
        [c, n, t]
    );
}
