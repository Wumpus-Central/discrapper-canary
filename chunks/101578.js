n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(654030),
    a = n(380249),
    o = n(627861),
    s = n(100527),
    c = n(906732),
    u = n(973616),
    d = n(789407),
    p = n(314897),
    m = n(158776),
    f = n(981631),
    h = n(616922),
    g = n(125865);
function _(e) {
    return null != e.application ? u.ZP.createFromServer(e.application) : null != e.activity && null != e.activity.party_id && (0, h.Ps)(e.activity.party_id) ? d.r9 : void 0;
}
let b = (e) => {
    let { channel: t, message: n, hideParty: u } = e,
        { analyticsLocations: d } = (0, c.ZP)(s.Z.INVITE_EMBED),
        h = (0, i.e7)([p.default], () => p.default.getId()),
        b = (0, i.e7)(
            [m.Z],
            () => {
                if (null == n.application) return m.Z.findActivity(n.author.id, (e) => e.type === f.IIU.LISTENING);
                {
                    var e;
                    let r = n.author.id;
                    return (null == (e = n.activity) ? void 0 : e.type) === f.mFx.JOIN_REQUEST && (r = r === h && t.isPrivate() ? t.getRecipientId() : h), m.Z.getApplicationActivity(r, n.application.id);
                }
            },
            [n, t, h]
        ),
        x = (0, a.l)(),
        y = _(n);
    return null != y && x
        ? (0, r.jsx)(o.c, {
              app: y,
              channel: t,
              message: n,
              hideParty: u,
              analyticsLocations: d
          })
        : (0, r.jsx)(l.Z, {
              className: g.container,
              activity: b,
              activityActionType: null != n.activity ? n.activity.type : null,
              partyId: null != n.activity ? n.activity.party_id : null,
              userId: n.author.id,
              application: _(n),
              message: n,
              channelId: t.id,
              guildId: t.getGuildId(),
              hideParty: u,
              isSender: n.author.id === h,
              analyticsLocations: d
          });
};
