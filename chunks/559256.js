n.d(t, { A: () => E, u: () => q });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(477782),
    r = n(500060),
    u = n(308368),
    d = n(627363),
    o = n(616356),
    c = n(495544),
    s = n(735438),
    A = n.n(s),
    p = n(734057),
    g = n(696451),
    m = n(317525),
    y = n(576705),
    S = n(488926),
    f = n(652215),
    h = n(25528),
    _ = n(783198),
    b = n(375708);
function q(e, t) {
    var n;
    let i = (0, l.bG)([c.default], () => c.default.getId()),
        a = (0, h.Ay)(e, t.guild_id)[0],
        r = (0, l.bG)([o.A], () => null != o.A.getStreamForUser(e, t.getGuildId())),
        s = (0, d.YY)(a?.application_id).data,
        _ =
            ((n = t.id),
            (0, l.bG)([y.A, p.A, g.Ay, m.A], () => {
                if (null == n) return !1;
                let t = p.A.getChannel(n);
                if (null == t) return !1;
                let i = y.A.can(f.xBc.SEND_MESSAGES, t),
                    l = g.Ay.getMember(t.guild_id, e),
                    a = A().keyBy(m.A.getManyRoles(t.guild_id, l?.roles ?? []), "id"),
                    r = S.$3({ permission: f.xBc.STREAM, user: e, context: t, roles: a });
                return i && r;
            }));
    return i === e || null == a || null == s || !_ || r
        ? null
        : {
              playingApplication: s,
              handleRequestToStream: function (n) {
                  u.A.sendActivityInvite({
                      type: f.xL.STREAM_REQUEST,
                      channelId: t.id,
                      activity: a,
                      content: `<@${e}>`,
                      location: n,
                      targetUserId: e,
                  });
              },
          };
}
function E(e, t) {
    let n = q(e, t);
    return null == n
        ? null
        : (0, i.jsx)(
              a.Dr,
              {
                  id: "request-to-stream",
                  label: b.intl.format(_.default["8qq+H7"], { applicationName: n.playingApplication.name }),
                  action: () => n.handleRequestToStream("request to stream item"),
                  icon: r.o,
                  leadingAccessory: { type: "icon", icon: r.o },
              },
              "request-to-stream",
          );
}
