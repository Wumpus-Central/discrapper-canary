n.d(e, { A: () => f, u: () => g });
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    s = n(308368),
    a = n(627363),
    o = n(616356),
    u = n(961350),
    d = n(159426),
    c = n(762370),
    h = n(25528),
    A = n(652215),
    m = n(55705),
    p = n(985018);
function g(t, e, n) {
    let { enableRequestToStream: i } = d.m.useExperiment(
            { guildId: e.guild_id, location: n },
            { autoTrackExposure: !1 },
        ),
        r = (0, l.bG)([u.default], () => u.default.getId()),
        m = (0, h.Ay)(t, e.guild_id)[0],
        p = (0, l.bG)([o.A], () => null != o.A.getStreamForUser(t, e.getGuildId())),
        g = (0, a.YY)(m?.application_id).data,
        f = (0, c.A)(t, e.id);
    return r !== t && null != m && null != g && i && f && !p
        ? {
              playingApplication: g,
              handleRequestToStream: function (n) {
                  s.A.sendActivityInvite({
                      type: A.xL.STREAM_REQUEST,
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
                  label: p.intl.format(m.default["8qq+H7"], { applicationName: n.playingApplication.name }),
                  action: () => n.handleRequestToStream("request to stream item"),
                  icon: r.ofK,
                  leadingAccessory: { type: "icon", icon: r.ofK },
              },
              "request-to-stream",
          );
}
