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
    h = n(981631),
    g = n(616922),
    _ = n(125865);
function b(e) {
    return null != e.application ? d.ZP.createFromServer(e.application) : null != e.activity && null != e.activity.party_id && (0, g.Ps)(e.activity.party_id) ? p.r9 : void 0;
}
let E = (e) => {
    var t;
    let { channel: n, message: d, hideParty: p } = e,
        { analyticsLocations: g } = (0, c.ZP)(s.Z.INVITE_EMBED),
        E = (0, i.e7)([m.default], () => m.default.getId()),
        y = (0, i.e7)(
            [f.Z],
            () => {
                if (null == d.application) return f.Z.findActivity(d.author.id, (e) => e.type === h.IIU.LISTENING);
                {
                    var e;
                    let t = d.author.id;
                    return ((null == (e = d.activity) ? void 0 : e.type) === h.mFx.JOIN_REQUEST && (t = t === E && n.isPrivate() ? n.getRecipientId() : E), f.Z.getApplicationActivity(t, d.application.id));
                }
            },
            [d, n, E]
        ),
        { enabled: x } = a.m.useExperiment({ location: 'ActivityInviteEmbed' }, { autoTrackExposure: !0 }),
        v = b(d),
        { data: C } = (0, u.IX)(null == (t = d.application) ? void 0 : t.id),
        O = null != C ? C : v;
    return null != O && x
        ? (0, r.jsx)(o.c, {
              app: O,
              channel: n,
              message: d,
              hideParty: p,
              analyticsLocations: g
          })
        : (0, r.jsx)(l.Z, {
              className: _.container,
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
              analyticsLocations: g
          });
};
