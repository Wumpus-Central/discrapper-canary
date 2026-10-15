n.d(e, { A: () => E, u: () => _ });
var i = n(477900);
n(582128);
var l = n(17928),
    a = n(477782),
    r = n(500060),
    u = n(308368),
    d = n(627363),
    o = n(616356),
    s = n(280450),
    c = n(486350),
    A = n(435558),
    p = n.n(A),
    g = n(734057),
    y = n(696451),
    f = n(317525),
    m = n(576705),
    b = n(488926),
    h = n(652215),
    q = n(756977),
    S = n(25528),
    R = n(905322),
    v = n(105292);
function _(t, e) {
    var n;
    let i = (0, l.bG)([s.default], () => s.default.getId()),
        a = (0, S.Ay)(t, e.guild_id)[0],
        r = (0, l.bG)([o.A], () => null != o.A.getStreamForUser(t, e.getGuildId())),
        A = (0, d.YY)(a?.application_id).data,
        q =
            ((n = e.id),
            (0, l.bG)([m.A, g.A, y.Ay, f.A], () => {
                if (null == n) return !1;
                let e = g.A.getChannel(n);
                if (null == e) return !1;
                let i = m.A.can(h.xBc.SEND_MESSAGES, e),
                    l = y.Ay.getMember(e.guild_id, t),
                    a = p().keyBy(f.A.getManyRoles(e.guild_id, l?.roles ?? []), "id"),
                    r = b.$3({ permission: h.xBc.STREAM, user: t, context: e, roles: a });
                return i && r;
            }));
    return i === t || null == a || null == A || !q || r
        ? null
        : {
              playingApplication: A,
              handleRequestToStream: function (n) {
                  (u.A.sendActivityInvite({
                      type: h.xL.STREAM_REQUEST,
                      channelId: e.id,
                      activity: a,
                      content: `<@${t}>`,
                      location: n,
                      targetUserId: t,
                  }),
                      (0, c.p)(t));
              },
          };
}
function E(t, e) {
    let n = _(t, e),
        [l, u] = (0, q.A)(t, e.id);
    return null == n
        ? null
        : (0, i.jsx)(
              a.Dr,
              {
                  id: "request-to-stream",
                  label: v.intl.format(R.default["8qq+H7"], { applicationName: n.playingApplication.name }),
                  action: () => n.handleRequestToStream("request to stream item"),
                  icon: r.o,
                  leadingAccessory: { type: "icon", icon: r.o },
                  disabled: l,
                  subtext: l ? u : void 0,
              },
              "request-to-stream",
          );
}
