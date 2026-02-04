n.d(t, {
    A: () => b,
    u: () => y,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(308368),
    o = n(627363),
    s = n(616356),
    c = n(961350),
    u = n(159426),
    d = n(762370),
    f = n(25528),
    p = n(652215),
    m = n(426127),
    g = n(985018);

function y(e, t, n) {
    let { enableRequestToStream: r } = u.m.useExperiment(
            {
                guildId: t.guild_id,
                location: n,
            },
            {
                autoTrackExposure: !1,
            },
        ),
        l = (0, i.bG)([c.default], () => c.default.getId()),
        m = (0, f.A)(e, t.guild_id)[0],
        g = (0, i.bG)([s.A], () => null != s.A.getStreamForUser(e, t.getGuildId())),
        y = (0, o.YY)(null == m ? void 0 : m.application_id).data,
        b = (0, d.A)(e, t.id);
    return l !== e && null != m && null != y && r && b && !g
        ? {
              playingApplication: y,
              handleRequestToStream: function (n) {
                  a.A.sendActivityInvite({
                      type: p.xL.STREAM_REQUEST,
                      channelId: t.id,
                      activity: m,
                      content: "<@".concat(e, ">"),
                      location: n,
                      targetUserId: e,
                  });
              },
          }
        : null;
}

function b(e, t) {
    let n = y(e, t, "useRequestToStreamItem");
    return null == n
        ? null
        : (0, r.jsx)(
              l.Drp,
              {
                  id: "request-to-stream",
                  label: g.intl.format(m.default["8qq+H7"], {
                      applicationName: n.playingApplication.name,
                  }),
                  action: () => n.handleRequestToStream("request to stream item"),
                  icon: l.ofK,
                  leadingAccessory: {
                      type: "icon",
                      icon: l.ofK,
                  },
              },
              "request-to-stream",
          );
}
