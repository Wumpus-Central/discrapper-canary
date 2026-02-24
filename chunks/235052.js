n.d(e, { A: () => f, u: () => g });
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(308368),
    s = n(627363),
    o = n(616356),
    d = n(961350),
    u = n(159426),
    c = n(762370),
    A = n(25528),
    p = n(652215),
    m = n(55705),
    h = n(985018);
function g(t, e, n) {
    let { enableRequestToStream: i } = u.m.useExperiment(
            { guildId: e.guild_id, location: n },
            { autoTrackExposure: !1 },
        ),
        r = (0, l.bG)([d.default], () => d.default.getId()),
        m = (0, A.Ay)(t, e.guild_id)[0],
        h = (0, l.bG)([o.A], () => null != o.A.getStreamForUser(t, e.getGuildId())),
        g = (0, s.YY)(m?.application_id).data,
        f = (0, c.A)(t, e.id);
    return r !== t && null != m && null != g && i && f && !h
        ? {
              playingApplication: g,
              handleRequestToStream: function (n) {
                  a.A.sendActivityInvite({
                      type: p.xL.STREAM_REQUEST,
                      channelId: e.id,
                      activity: m,
                      content: `<@${t}>`,
                      location: n,
                      targetUserId: t,
                  });
              },
          }
        : null;
}
function f(t, e) {
    let n = g(t, e, "useRequestToStreamItem");
    return null == n
        ? null
        : (0, i.jsx)(
              r.Drp,
              {
                  id: "request-to-stream",
                  label: h.intl.format(m.default["8qq+H7"], { applicationName: n.playingApplication.name }),
                  action: () => n.handleRequestToStream("request to stream item"),
                  icon: r.ofK,
                  leadingAccessory: { type: "icon", icon: r.ofK },
              },
              "request-to-stream",
          );
}
