n.d(t, { A: () => y });
var i = n(477900),
    l = n(17928),
    s = n(568006),
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
    f = n(905322),
    I = n(105292);
function E(e) {
    let { currentUserId: t, message: n, channel: s, analyticsLocations: o } = e,
        d = (0, l.bG)([p.A], () => p.A.getCurrentUserActiveStream()),
        c = (0, l.bG)([A.A], () => A.A.getChannelId()),
        E = (0, x.A)(n.id),
        { analyticsLocations: v } = (0, a.Ay)(o, r.A.REQUEST_TO_STREAM_INVITE_EMBED),
        C = I.intl.string(f.default["5+172e"]),
        _ = !1;
    return (
        E
            ? ((C = I.intl.string(f.default.u4QmWl)), (_ = !0))
            : null != d
              ? ((C = I.intl.string(f.default.P0wwmM)), (_ = !0))
              : c !== s.id && ((C = I.intl.string(f.default.qRXats)), (_ = !0)),
        (0, i.jsx)(m.h, {
            header: I.intl.string(f.default.nAyuPp),
            title: (0, u.uk)(n, s, t),
            actions:
                n.author.id === t
                    ? []
                    : [
                          {
                              label: C,
                              trackingArea: h.kY.STREAM,
                              disabled: _,
                              onClick: () => {
                                  (0, g.A)(s.guild_id, s.id, v);
                              },
                          },
                      ],
        })
    );
}
var v = n(395671),
    C = n(666176),
    _ = n(280450),
    j = n(652215),
    N = n(272984);
let y = function (e) {
    let { channel: t, message: n, hideParty: u, hideInviteEmbedBanner: m } = e,
        { analyticsLocations: h } = (0, a.Ay)(r.A.INVITE_EMBED),
        g =
            null != n.application
                ? v.Ay.createFromServer(n.application)
                : null != n.activity && null != n.activity.party_id && (0, N.pH)(n.activity.party_id)
                  ? C.HT
                  : void 0,
        { data: p } = (0, o.YY)(n.application?.id),
        A = p ?? g,
        x = (0, l.bG)([_.default], () => _.default.getId()),
        { enabled: f } = c.A.useConfig({ guildId: t.guild_id, location: "MessageActivityInvite" });
    return n.activity?.type === j.xL.STREAM_REQUEST && null == A && f
        ? (0, i.jsx)(E, { channel: t, message: n, analyticsLocations: h, currentUserId: x })
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
