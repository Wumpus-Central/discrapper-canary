n.d(t, { A: () => y, u: () => T });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(477782),
    r = n(500060),
    o = n(308368),
    d = n(627363),
    u = n(616356),
    s = n(495544),
    c = n(159426),
    _ = n(735438),
    A = n.n(_),
    h = n(734057),
    E = n(696451),
    f = n(317525),
    g = n(576705),
    p = n(488926),
    b = n(652215),
    S = n(25528),
    v = n(783198),
    I = n(985018);
function T(e, t, n) {
    var i;
    let { enableRequestToStream: a } = c.m.useExperiment(
            { guildId: t.guild_id, location: n },
            { autoTrackExposure: !1 },
        ),
        r = (0, l.bG)([s.default], () => s.default.getId()),
        _ = (0, S.Ay)(e, t.guild_id)[0],
        v = (0, l.bG)([u.A], () => null != u.A.getStreamForUser(e, t.getGuildId())),
        I = (0, d.YY)(_?.application_id).data,
        T =
            ((i = t.id),
            (0, l.bG)([g.A, h.A, E.Ay, f.A], () => {
                if (null == i) return !1;
                let t = h.A.getChannel(i);
                if (null == t) return !1;
                let n = g.A.can(b.xBc.SEND_MESSAGES, t),
                    l = E.Ay.getMember(t.guild_id, e),
                    a = A().keyBy(f.A.getManyRoles(t.guild_id, l?.roles ?? []), "id"),
                    r = p.$3({ permission: b.xBc.STREAM, user: e, context: t, roles: a });
                return n && r;
            }));
    return r !== e && null != _ && null != I && a && T && !v
        ? {
              playingApplication: I,
              handleRequestToStream: function (n) {
                  o.A.sendActivityInvite({
                      type: b.xL.STREAM_REQUEST,
                      channelId: t.id,
                      activity: _,
                      content: `<@${e}>`,
                      location: n,
                      targetUserId: e,
                  });
              },
          }
        : null;
}
function y(e, t) {
    let n = T(e, t, "useRequestToStreamItem");
    return null == n
        ? null
        : (0, i.jsx)(
              a.Dr,
              {
                  id: "request-to-stream",
                  label: I.intl.format(v.default["8qq+H7"], { applicationName: n.playingApplication.name }),
                  action: () => n.handleRequestToStream("request to stream item"),
                  icon: r.o,
                  leadingAccessory: { type: "icon", icon: r.o },
              },
              "request-to-stream",
          );
}
