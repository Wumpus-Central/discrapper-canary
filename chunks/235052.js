i.d(t, { A: () => f, u: () => h });
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    r = i(308368),
    s = i(627363),
    o = i(616356),
    d = i(961350),
    c = i(159426),
    u = i(762370),
    m = i(25528),
    _ = i(652215),
    A = i(426127),
    g = i(985018);
function h(e, t, i) {
    let { enableRequestToStream: n } = c.m.useExperiment(
            { guildId: t.guild_id, location: i },
            { autoTrackExposure: !1 },
        ),
        l = (0, a.bG)([d.default], () => d.default.getId()),
        A = (0, m.A)(e, t.guild_id)[0],
        g = (0, a.bG)([o.A], () => null != o.A.getStreamForUser(e, t.getGuildId())),
        h = (0, s.YY)(A?.application_id).data,
        f = (0, u.A)(e, t.id);
    return l !== e && null != A && null != h && n && f && !g
        ? {
              playingApplication: h,
              handleRequestToStream: function (i) {
                  r.A.sendActivityInvite({
                      type: _.xL.STREAM_REQUEST,
                      channelId: t.id,
                      activity: A,
                      content: `<@${e}>`,
                      location: i,
                      targetUserId: e,
                  });
              },
          }
        : null;
}
function f(e, t) {
    let i = h(e, t, "useRequestToStreamItem");
    return null == i
        ? null
        : (0, n.jsx)(
              l.Drp,
              {
                  id: "request-to-stream",
                  label: g.intl.format(A.default["8qq+H7"], { applicationName: i.playingApplication.name }),
                  action: () => i.handleRequestToStream("request to stream item"),
                  icon: l.ofK,
                  leadingAccessory: { type: "icon", icon: l.ofK },
              },
              "request-to-stream",
          );
}
