n.d(t, { A: () => m });
var i = n(627968),
    l = n(568006),
    s = n(793574),
    r = n(688810),
    a = n(627363),
    o = n(401374),
    d = n(395671),
    c = n(666176),
    u = n(272984);
let m = function (e) {
    let { channel: t, message: n, hideParty: m, hideInviteEmbedBanner: h } = e,
        { analyticsLocations: g } = (0, r.Ay)(s.A.INVITE_EMBED),
        p =
            null != n.application
                ? d.Ay.createFromServer(n.application)
                : null != n.activity && null != n.activity.party_id && (0, u.pH)(n.activity.party_id)
                  ? c.HT
                  : void 0,
        { data: A } = (0, a.YY)(n.application?.id),
        x = A ?? p;
    return null == x
        ? null
        : (0, i.jsx)(o.c, {
              contentClassification: x.contentClassification,
              channel: t,
              variant: "game_invite",
              children: (0, i.jsx)(l.P0, {
                  app: x,
                  channel: t,
                  message: n,
                  hideParty: m,
                  hideBanner: h,
                  analyticsLocations: g,
              }),
          });
};
