n.d(t, { A: () => b });
var i = n(477900),
    l = n(17928),
    s = n(419477),
    r = n(793574),
    a = n(688810),
    o = n(627363),
    d = n(401374),
    c = n(208284);
n(582128);
var u = n(456060),
    m = n(572211),
    h = n(354287),
    g = n(471993),
    p = n(616356),
    A = n(763827),
    x = n(762644),
    f = n(768349),
    I = n(51685),
    E = n(105292);
function v(e) {
    let { currentUserId: t, message: n, channel: s, analyticsLocations: o } = e,
        d = (0, l.bG)([p.A], () => p.A.getCurrentUserActiveStream()),
        c = (0, l.bG)([A.A], () => A.A.getChannelId()),
        v = (0, x.A)(n.id),
        { analyticsLocations: C } = (0, a.Ay)(o, r.A.REQUEST_TO_STREAM_INVITE_EMBED),
        _ = E.intl.string(I.default["5+172e"]),
        j = !1;
    return (
        v
            ? ((_ = E.intl.string(I.default.u4QmWl)), (j = !0))
            : null != d
              ? ((_ = E.intl.string(I.default.P0wwmM)), (j = !0))
              : c !== s.id && ((_ = E.intl.string(I.default.qRXats)), (j = !0)),
        (0, i.jsx)(m.h, {
            title: (0, u.uk)(n, s, t),
            actions:
                n.author.id === t
                    ? []
                    : [
                          {
                              label: _,
                              trackingArea: h.kY.STREAM,
                              disabled: j,
                              onClick: () => {
                                  (0, g.A)(s.guild_id, s.id, C);
                              },
                              variant: "active",
                          },
                      ],
            trackingConfig: {
                id: "0",
                linkType: f.J.REQUEST_TO_STREAM,
                guildId: s.guild_id,
                channelId: s.id,
                messageId: n.id,
                isDeadEnd: v,
                analyticsLocations: C,
            },
        })
    );
}
var C = n(395671),
    _ = n(666176),
    j = n(280450),
    y = n(652215),
    N = n(272984);
let b = function (e) {
    let { channel: t, message: n, hideParty: u, hideInviteEmbedBanner: m } = e,
        { analyticsLocations: h } = (0, a.Ay)(r.A.INVITE_EMBED),
        g =
            null != n.application
                ? C.Ay.createFromServer(n.application)
                : null != n.activity && null != n.activity.party_id && (0, N.pH)(n.activity.party_id)
                  ? _.HT
                  : void 0,
        { data: p } = (0, o.YY)(n.application?.id),
        A = p ?? g,
        x = (0, l.bG)([j.default], () => j.default.getId()),
        { enabled: f } = c.A.useConfig({ guildId: t.guild_id, location: "MessageActivityInvite" });
    return n.activity?.type === y.xL.STREAM_REQUEST && null == A && f
        ? (0, i.jsx)(v, { channel: t, message: n, analyticsLocations: h, currentUserId: x })
        : null == A
          ? null
          : (0, i.jsx)(d.c, {
                contentClassification: A.contentClassification,
                channel: t,
                variant: "game_invite",
                children: (0, i.jsx)(s.P0, {
                    app: A,
                    channel: t,
                    message: n,
                    hideParty: u,
                    hideBanner: m,
                    analyticsLocations: h,
                }),
            });
};
