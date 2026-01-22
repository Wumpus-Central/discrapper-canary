n.d(t, {
    A: () => m,
});
var l = n(627968),
    i = n(311907),
    r = n(397927),
    a = n(308368),
    o = n(627363),
    u = n(616356),
    s = n(961350),
    d = n(159426),
    c = n(762370),
    A = n(25528),
    b = n(652215),
    g = n(426127),
    f = n(985018);

function m(e, t) {
    let { enableRequestToStream: n } = d.m.useExperiment(
            {
                guildId: t.guild_id,
                location: "useRequestToStreamItem",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        m = (0, i.bG)([s.default], () => s.default.getId()),
        p = (0, A.A)(e, t.guild_id)[0],
        v = (0, i.bG)([u.A], () => null != u.A.getStreamForUser(e, t.getGuildId())),
        E = (0, o.YY)(null == p ? void 0 : p.application_id).data,
        O = (0, c.A)(e, t.id);
    return m !== e && null != p && null != E && n && O && !v
        ? (0, l.jsx)(
              r.Drp,
              {
                  id: "request-to-stream",
                  label: f.intl.format(g.default["8qq+H7"], {
                      applicationName: E.name,
                  }),
                  action: function () {
                      a.A.sendActivityInvite({
                          type: b.xL.STREAM_REQUEST,
                          channelId: t.id,
                          activity: p,
                          content: "<@".concat(e, ">"),
                          location: "request to stream item",
                          targetUserId: e,
                      });
                  },
                  icon: r.ofK,
              },
              "request-to-stream",
          )
        : null;
}
