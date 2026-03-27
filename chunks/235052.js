i.d(t, { A: () => f, u: () => g });
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
    A = i(25528),
    h = i(652215),
    m = i(426127),
    p = i(985018);
function g(e, t, i) {
    let { enableRequestToStream: n } = u.m.useExperiment(
            { guildId: t.guild_id, location: i },
            { autoTrackExposure: !1 },
        ),
        r = (0, l.bG)([d.default], () => d.default.getId()),
        m = (0, A.Ay)(e, t.guild_id)[0],
        p = (0, l.bG)([o.A], () => null != o.A.getStreamForUser(e, t.getGuildId())),
        g = (0, a.YY)(m?.application_id).data,
        f = (0, c.A)(e, t.id);
    return r !== e && null != m && null != g && n && f && !p
        ? {
              playingApplication: g,
              handleRequestToStream: function (i) {
                  s.A.sendActivityInvite({
                      type: h.xL.STREAM_REQUEST,
                      channelId: t.id,
                      activity: m,
                      content: `<@${e}>`,
                      location: i,
                      targetUserId: e,
                  });
              },
          }
        : null;
}
function f(e, t) {
    let i = g(e, t, "useRequestToStreamItem");
    return null == i
        ? null
        : (0, n.jsx)(
              r.Drp,
              {
                  id: "request-to-stream",
                  label: p.intl.format(m.default["8qq+H7"], { applicationName: i.playingApplication.name }),
                  action: () => i.handleRequestToStream("request to stream item"),
                  icon: r.ofK,
                  leadingAccessory: { type: "icon", icon: r.ofK },
              },
              "request-to-stream",
          );
}
