i.d(e, { A: () => f, u: () => g });
var n = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    s = i(308368),
    a = i(627363),
    o = i(616356),
    d = i(961350),
    u = i(159426),
    c = i(762370),
    m = i(25528),
    A = i(652215),
    h = i(55705),
    p = i(985018);
function g(t, e, i) {
    let { enableRequestToStream: n } = u.m.useExperiment(
            { guildId: e.guild_id, location: i },
            { autoTrackExposure: !1 },
        ),
        r = (0, l.bG)([d.default], () => d.default.getId()),
        h = (0, m.Ay)(t, e.guild_id)[0],
        p = (0, l.bG)([o.A], () => null != o.A.getStreamForUser(t, e.getGuildId())),
        g = (0, a.YY)(h?.application_id).data,
        f = (0, c.A)(t, e.id);
    return r !== t && null != h && null != g && n && f && !p
        ? {
              playingApplication: g,
              handleRequestToStream: function (i) {
                  s.A.sendActivityInvite({
                      type: A.xL.STREAM_REQUEST,
                      channelId: e.id,
                      activity: h,
                      content: `<@${t}>`,
                      location: i,
                      targetUserId: t,
                  });
              },
          }
        : null;
}
function f(t, e) {
    let i = g(t, e, "useRequestToStreamItem");
    return null == i
        ? null
        : (0, n.jsx)(
              r.Drp,
              {
                  id: "request-to-stream",
                  label: p.intl.format(h.default["8qq+H7"], { applicationName: i.playingApplication.name }),
                  action: () => i.handleRequestToStream("request to stream item"),
                  icon: r.ofK,
                  leadingAccessory: { type: "icon", icon: r.ofK },
              },
              "request-to-stream",
          );
}
