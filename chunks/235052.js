n.d(t, { A: () => f, u: () => p });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(477782),
    s = n(500060),
    r = n(308368),
    o = n(627363),
    c = n(616356),
    d = n(961350),
    u = n(159426),
    h = n(762370),
    m = n(25528),
    A = n(652215),
    g = n(783198),
    _ = n(985018);
function p(e, t, n) {
    let { enableRequestToStream: i } = u.m.useExperiment(
            { guildId: t.guild_id, location: n },
            { autoTrackExposure: !1 },
        ),
        a = (0, l.bG)([d.default], () => d.default.getId()),
        s = (0, m.Ay)(e, t.guild_id)[0],
        g = (0, l.bG)([c.A], () => null != c.A.getStreamForUser(e, t.getGuildId())),
        _ = (0, o.YY)(s?.application_id).data,
        p = (0, h.A)(e, t.id);
    return a !== e && null != s && null != _ && i && p && !g
        ? {
              playingApplication: _,
              handleRequestToStream: function (n) {
                  r.A.sendActivityInvite({
                      type: A.xL.STREAM_REQUEST,
                      channelId: t.id,
                      activity: s,
                      content: `<@${e}>`,
                      location: n,
                      targetUserId: e,
                  });
              },
          }
        : null;
}
function f(e, t) {
    let n = p(e, t, "useRequestToStreamItem");
    return null == n
        ? null
        : (0, i.jsx)(
              a.Dr,
              {
                  id: "request-to-stream",
                  label: _.intl.format(g.default["8qq+H7"], { applicationName: n.playingApplication.name }),
                  action: () => n.handleRequestToStream("request to stream item"),
                  icon: s.o,
                  leadingAccessory: { type: "icon", icon: s.o },
              },
              "request-to-stream",
          );
}
