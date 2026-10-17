n.d(e, { A: () => G, u: () => E });
var i = n(477900);
n(582128);
var l = n(17928),
    a = n(477782),
    u = n(500060),
    d = n(308368),
    r = n(627363),
    o = n(616356),
    s = n(280450),
    c = n(486350),
    A = n(208284),
    g = n(435558),
    p = n.n(g),
    f = n(734057),
    y = n(696451),
    m = n(317525),
    b = n(576705),
    h = n(488926),
    q = n(652215),
    S = n(756977),
    R = n(25528),
    _ = n(431788),
    v = n(105292);
function E(t, e) {
    var n;
    let { enabled: i } = A.A.useConfig({ guildId: e.guild_id, location: "useRequestToStreamData" }),
        a = (0, l.bG)([s.default], () => s.default.getId()),
        u = (0, R.Ay)(t, e.guild_id)[0],
        g = (0, l.bG)([o.A], () => null != o.A.getStreamForUser(t, e.getGuildId())),
        S = (0, r.YY)(u?.application_id).data,
        _ =
            ((n = e.id),
            (0, l.bG)([b.A, f.A, y.Ay, m.A], () => {
                if (null == n) return !1;
                let e = f.A.getChannel(n);
                if (null == e) return !1;
                let i = b.A.can(q.xBc.SEND_MESSAGES, e),
                    l = y.Ay.getMember(e.guild_id, t),
                    a = p().keyBy(m.A.getManyRoles(e.guild_id, l?.roles ?? []), "id"),
                    u = h.$3({ permission: q.xBc.STREAM, user: t, context: e, roles: a });
                return i && u;
            }));
    return a !== t && (null != u || i) && (null != S || i) && _ && !g
        ? {
              playingApplication: S,
              handleRequestToStream: function (n) {
                  (d.A.sendActivityInvite({
                      type: q.xL.STREAM_REQUEST,
                      channelId: e.id,
                      activity: u,
                      content: `<@${t}>`,
                      location: n,
                      targetUserId: t,
                  }),
                      (0, c.p)(t));
              },
          }
        : null;
}
function G(t, e) {
    let n = E(t, e),
        [l, d] = (0, S.A)(t, e.id);
    return null == n
        ? null
        : (0, i.jsx)(
              a.Dr,
              {
                  id: "request-to-stream",
                  label:
                      null == n.playingApplication
                          ? v.intl.string(_.default.DKHhec)
                          : v.intl.format(_.default["8qq+H7"], { applicationName: n.playingApplication?.name ?? "" }),
                  action: () => n.handleRequestToStream("request to stream item"),
                  icon: u.o,
                  leadingAccessory: { type: "icon", icon: u.o },
                  disabled: l,
                  subtext: l ? d : void 0,
              },
              "request-to-stream",
          );
}
