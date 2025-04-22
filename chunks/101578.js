n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(654030),
    a = n(100527),
    o = n(906732),
    s = n(973616),
    c = n(789407),
    u = n(314897),
    d = n(158776),
    p = n(981631),
    m = n(616922),
    f = n(125865);
let h = (e) => {
    let { channel: t, message: n, hideParty: h } = e,
        { analyticsLocations: g } = (0, o.ZP)(a.Z.INVITE_EMBED),
        _ = (0, i.e7)([u.default], () => u.default.getId()),
        b = (0, i.e7)(
            [d.Z],
            () => {
                if (null == n.application) return d.Z.findActivity(n.author.id, (e) => e.type === p.IIU.LISTENING);
                {
                    var e;
                    let r = n.author.id;
                    return (null == (e = n.activity) ? void 0 : e.type) === p.mFx.JOIN_REQUEST && (r = r === _ && t.isPrivate() ? t.getRecipientId() : _), d.Z.getApplicationActivity(r, n.application.id);
                }
            },
            [n, t, _]
        );
    return (0, r.jsx)(l.Z, {
        className: f.container,
        activity: b,
        activityActionType: null != n.activity ? n.activity.type : null,
        partyId: null != n.activity ? n.activity.party_id : null,
        userId: n.author.id,
        application: null != n.application ? s.ZP.createFromServer(n.application) : null != n.activity && null != n.activity.party_id && (0, m.Ps)(n.activity.party_id) ? c.r9 : void 0,
        message: n,
        channelId: t.id,
        guildId: t.getGuildId(),
        hideParty: h,
        isSender: n.author.id === _,
        analyticsLocations: g
    });
};
