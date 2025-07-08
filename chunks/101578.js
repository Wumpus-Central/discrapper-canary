n.d(t, { Z: () => E });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(654030),
    a = n(380249),
    o = n(627861),
    s = n(100527),
    c = n(906732),
    u = n(728345),
    d = n(973616),
    p = n(789407),
    m = n(314897),
    f = n(158776),
    g = n(981631),
    _ = n(616922),
    h = n(125865);
function b(e) {
    return null != e.application ? d.ZP.createFromServer(e.application) : null != e.activity && null != e.activity.party_id && (0, _.Ps)(e.activity.party_id) ? p.r9 : void 0;
}
let E = (e) => {
    var t;
    let { channel: n, message: d, hideParty: p } = e,
        { analyticsLocations: _ } = (0, c.ZP)(s.Z.INVITE_EMBED),
        E = (0, i.e7)([m.default], () => m.default.getId()),
        y = (0, i.e7)(
            [f.Z],
            () => {
                if (null == d.application) return f.Z.findActivity(d.author.id, (e) => e.type === g.IIU.LISTENING);
                {
                    var e;
                    let t = d.author.id;
                    return ((null == (e = d.activity) ? void 0 : e.type) === g.mFx.JOIN_REQUEST && (t = t === E && n.isPrivate() ? n.getRecipientId() : E), f.Z.getApplicationActivity(t, d.application.id));
                }
            },
            [d, n, E]
        ),
        { enabled: x } = a.m.useExperiment({ location: 'ActivityInviteEmbed' }, { autoTrackExposure: !0 }),
        C = b(d),
        { data: v } = (0, u.IX)(null == (t = d.application) ? void 0 : t.id),
        O = null != v ? v : C;
    return null != O && x
        ? (0, r.jsx)(o.c, {
              app: O,
              channel: n,
              message: d,
              hideParty: p,
              analyticsLocations: _
          })
        : (0, r.jsx)(l.Z, {
              className: h.container,
              activity: y,
              activityActionType: null != d.activity ? d.activity.type : null,
              partyId: null != d.activity ? d.activity.party_id : null,
              userId: d.author.id,
              application: b(d),
              message: d,
              channelId: n.id,
              guildId: n.getGuildId(),
              hideParty: p,
              isSender: d.author.id === E,
              analyticsLocations: _
          });
};
