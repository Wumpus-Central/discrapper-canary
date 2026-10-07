n.d(e, { A: () => v, u: () => q });
var i = n(477900);
n(582128);
var l = n(17928),
    a = n(477782),
    r = n(500060),
    u = n(308368),
    d = n(627363),
    s = n(616356),
    o = n(280450),
    c = n(73153),
    A = n(820672),
    p = n(435558),
    g = n.n(p),
    y = n(734057),
    S = n(696451),
    h = n(317525),
    m = n(576705),
    E = n(488926),
    R = n(652215),
    _ = n(756977),
    f = n(25528),
    T = n(431788),
    b = n(660183);
function q(t, e) {
    var n;
    let i = (0, l.bG)([o.default], () => o.default.getId()),
        a = (0, f.Ay)(t, e.guild_id)[0],
        r = (0, l.bG)([s.A], () => null != s.A.getStreamForUser(t, e.getGuildId())),
        p = (0, d.YY)(a?.application_id).data,
        _ =
            ((n = e.id),
            (0, l.bG)([m.A, y.A, S.Ay, h.A], () => {
                if (null == n) return !1;
                let e = y.A.getChannel(n);
                if (null == e) return !1;
                let i = m.A.can(R.xBc.SEND_MESSAGES, e),
                    l = S.Ay.getMember(e.guild_id, t),
                    a = g().keyBy(h.A.getManyRoles(e.guild_id, l?.roles ?? []), "id"),
                    r = E.$3({ permission: R.xBc.STREAM, user: t, context: e, roles: a });
                return i && r;
            }));
    return i === t || null == a || null == p || !_ || r
        ? null
        : {
              playingApplication: p,
              handleRequestToStream: function (n) {
                  (u.A.sendActivityInvite({
                      type: R.xL.STREAM_REQUEST,
                      channelId: e.id,
                      activity: a,
                      content: `<@${t}>`,
                      location: n,
                      targetUserId: t,
                  }),
                      c.h.dispatch({ type: "STREAM_REQUEST_COOLDOWN_START", userId: t }),
                      setTimeout(() => {
                          c.h.dispatch({ type: "STREAM_REQUEST_COOLDOWN_END", userId: t });
                      }, A.e));
              },
          };
}
function v(t, e) {
    let n = q(t, e),
        [l, u] = (0, _.A)(t, e.id);
    return null == n
        ? null
        : (0, i.jsx)(
              a.Dr,
              {
                  id: "request-to-stream",
                  label: b.intl.format(T.default["8qq+H7"], { applicationName: n.playingApplication.name }),
                  action: () => n.handleRequestToStream("request to stream item"),
                  icon: r.o,
                  leadingAccessory: { type: "icon", icon: r.o },
                  disabled: l,
                  subtext: l ? u : void 0,
              },
              "request-to-stream",
          );
}
