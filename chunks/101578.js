n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(654030),
    r = n(906732),
    s = n(973616),
    o = n(789407),
    c = n(314897),
    d = n(158776),
    u = n(981631),
    m = n(616922),
    _ = n(423792);
let h = (e) => {
    let { channel: t, message: n, hideParty: h } = e,
        { analyticsLocations: p } = (0, r.ZP)(),
        g = (0, l.e7)([c.default], () => c.default.getId()),
        f = (0, l.e7)(
            [d.Z],
            () => {
                if (null == n.application) return d.Z.findActivity(n.author.id, (e) => e.type === u.IIU.LISTENING);
                {
                    var e;
                    let i = n.author.id;
                    return (null === (e = n.activity) || void 0 === e ? void 0 : e.type) === u.mFx.JOIN_REQUEST && (i = i === g && t.isPrivate() ? t.getRecipientId() : g), d.Z.getApplicationActivity(i, n.application.id);
                }
            },
            [n, t, g]
        );
    return (0, i.jsx)(a.Z, {
        className: _.container,
        activity: f,
        activityActionType: null != n.activity ? n.activity.type : null,
        partyId: null != n.activity ? n.activity.party_id : null,
        userId: n.author.id,
        application: null != n.application ? s.ZP.createFromServer(n.application) : null != n.activity && null != n.activity.party_id && (0, m.Ps)(n.activity.party_id) ? o.r9 : void 0,
        message: n,
        channelId: t.id,
        guildId: t.getGuildId(),
        hideParty: h,
        isSender: n.author.id === g,
        analyticsLocations: p
    });
};
