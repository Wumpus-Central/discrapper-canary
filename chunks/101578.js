n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(654030),
    o = n(906732),
    l = n(973616),
    s = n(789407),
    c = n(314897),
    d = n(158776),
    u = n(981631),
    p = n(616922),
    m = n(477112);
let f = (e) => {
    let { channel: t, message: n, hideParty: f } = e,
        { analyticsLocations: h } = (0, o.ZP)(),
        g = (0, i.e7)([c.default], () => c.default.getId()),
        _ = (0, i.e7)(
            [d.Z],
            () => {
                if (null == n.application) return d.Z.findActivity(n.author.id, (e) => e.type === u.IIU.LISTENING);
                {
                    var e;
                    let r = n.author.id;
                    return (null === (e = n.activity) || void 0 === e ? void 0 : e.type) === u.mFx.JOIN_REQUEST && (r = r === g && t.isPrivate() ? t.getRecipientId() : g), d.Z.getApplicationActivity(r, n.application.id);
                }
            },
            [n, t, g]
        );
    return (0, r.jsx)(a.Z, {
        className: m.container,
        activity: _,
        activityActionType: null != n.activity ? n.activity.type : null,
        partyId: null != n.activity ? n.activity.party_id : null,
        userId: n.author.id,
        application: null != n.application ? l.ZP.createFromServer(n.application) : null != n.activity && null != n.activity.party_id && (0, p.Ps)(n.activity.party_id) ? s.r9 : void 0,
        message: n,
        channelId: t.id,
        guildId: t.getGuildId(),
        hideParty: f,
        isSender: n.author.id === g,
        analyticsLocations: h
    });
};
