n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(654030),
    a = n(906732),
    o = n(973616),
    s = n(789407),
    c = n(314897),
    u = n(158776),
    d = n(981631),
    p = n(616922),
    m = n(125865);
let f = (e) => {
    let { channel: t, message: n, hideParty: f } = e,
        { analyticsLocations: h } = (0, a.ZP)(),
        g = (0, i.e7)([c.default], () => c.default.getId()),
        _ = (0, i.e7)(
            [u.Z],
            () => {
                if (null == n.application) return u.Z.findActivity(n.author.id, (e) => e.type === d.IIU.LISTENING);
                {
                    var e;
                    let r = n.author.id;
                    return (null == (e = n.activity) ? void 0 : e.type) === d.mFx.JOIN_REQUEST && (r = r === g && t.isPrivate() ? t.getRecipientId() : g), u.Z.getApplicationActivity(r, n.application.id);
                }
            },
            [n, t, g]
        );
    return (0, r.jsx)(l.Z, {
        className: m.container,
        activity: _,
        activityActionType: null != n.activity ? n.activity.type : null,
        partyId: null != n.activity ? n.activity.party_id : null,
        userId: n.author.id,
        application: null != n.application ? o.ZP.createFromServer(n.application) : null != n.activity && null != n.activity.party_id && (0, p.Ps)(n.activity.party_id) ? s.r9 : void 0,
        message: n,
        channelId: t.id,
        guildId: t.getGuildId(),
        hideParty: f,
        isSender: n.author.id === g,
        analyticsLocations: h
    });
};
