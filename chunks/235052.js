i.d(t, { A: () => p, u: () => h });
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
    A = i(652215),
    _ = i(426127),
    g = i(985018);
function h(e, t, i) {
    let { enableRequestToStream: n } = c.m.useExperiment(
            { guildId: t.guild_id, location: i },
            { autoTrackExposure: !1 },
        ),
        l = (0, a.bG)([d.default], () => d.default.getId()),
        _ = (0, m.Ay)(e, t.guild_id)[0],
        g = (0, a.bG)([o.A], () => null != o.A.getStreamForUser(e, t.getGuildId())),
        h = (0, s.YY)(_?.application_id).data,
        p = (0, u.A)(e, t.id);
    return l !== e && null != _ && null != h && n && p && !g
        ? {
              playingApplication: h,
              handleRequestToStream: function (i) {
                  r.A.sendActivityInvite({
                      type: A.xL.STREAM_REQUEST,
                      channelId: t.id,
                      activity: _,
                      content: `<@${e}>`,
                      location: i,
                      targetUserId: e,
                  });
              },
          }
        : null;
}
function p(e, t) {
    let i = h(e, t, "useRequestToStreamItem");
    return null == i
        ? null
        : (0, n.jsx)(
              l.Drp,
              {
                  id: "request-to-stream",
                  label: g.intl.format(_.default["8qq+H7"], { applicationName: i.playingApplication.name }),
                  action: () => i.handleRequestToStream("request to stream item"),
                  icon: l.ofK,
                  leadingAccessory: { type: "icon", icon: l.ofK },
              },
              "request-to-stream",
          );
}
