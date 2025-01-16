var i = n(200651);
n(192379);
var r = n(442837),
    l = n(654030),
    a = n(906732),
    o = n(973616),
    s = n(789407),
    c = n(314897),
    d = n(158776),
    u = n(981631),
    m = n(616922),
    h = n(634303);
t.Z = (e) => {
    var t;
    let { channel: n, message: f, hideParty: p } = e,
        { analyticsLocations: _ } = (0, a.ZP)(),
        g = (0, r.e7)([c.default], () => c.default.getId()),
        E = (0, r.e7)(
            [d.Z],
            () => {
                if (null == f.application) return d.Z.findActivity(f.author.id, (e) => e.type === u.IIU.LISTENING);
                {
                    var e;
                    let t = f.author.id;
                    return (null === (e = f.activity) || void 0 === e ? void 0 : e.type) === u.mFx.JOIN_REQUEST && (t = t === g && n.isPrivate() ? n.getRecipientId() : g), d.Z.getApplicationActivity(t, f.application.id);
                }
            },
            [f, n, g]
        );
    return (0, i.jsx)(l.Z, {
        className: h.container,
        activity: E,
        activityActionType: null != f.activity ? f.activity.type : null,
        partyId: null != f.activity ? f.activity.party_id : null,
        userId: f.author.id,
        application: null != (t = f).application ? o.ZP.createFromServer(t.application) : null != t.activity && null != t.activity.party_id && (0, m.Ps)(t.activity.party_id) ? s.r9 : void 0,
        message: f,
        channelId: n.id,
        guildId: n.getGuildId(),
        hideParty: p,
        isSender: f.author.id === g,
        analyticsLocations: _
    });
};
