i.d(t, { A: () => g, u: () => A });
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(308368),
    r = i(627363),
    o = i(616356),
    c = i(961350),
    d = i(159426),
    u = i(762370),
    m = i(25528),
    _ = i(652215),
    p = i(426127),
    h = i(985018);
function A(e, t, i) {
    let { enableRequestToStream: n } = d.m.useExperiment(
            { guildId: t.guild_id, location: i },
            { autoTrackExposure: !1 },
        ),
        l = (0, a.bG)([c.default], () => c.default.getId()),
        p = (0, m.Ay)(e, t.guild_id)[0],
        h = (0, a.bG)([o.A], () => null != o.A.getStreamForUser(e, t.getGuildId())),
        A = (0, r.YY)(p?.application_id).data,
        g = (0, u.A)(e, t.id);
    return l !== e && null != p && null != A && n && g && !h
        ? {
              playingApplication: A,
              handleRequestToStream: function (i) {
                  s.A.sendActivityInvite({
                      type: _.xL.STREAM_REQUEST,
                      channelId: t.id,
                      activity: p,
                      content: `<@${e}>`,
                      location: i,
                      targetUserId: e,
                  });
              },
          }
        : null;
}
function g(e, t) {
    let i = A(e, t, "useRequestToStreamItem");
    return null == i
        ? null
        : (0, n.jsx)(
              l.Drp,
              {
                  id: "request-to-stream",
                  label: h.intl.format(p.default["8qq+H7"], { applicationName: i.playingApplication.name }),
                  action: () => i.handleRequestToStream("request to stream item"),
                  icon: l.ofK,
                  leadingAccessory: { type: "icon", icon: l.ofK },
              },
              "request-to-stream",
          );
}
