n.d(t, { A: () => M }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(80682),
    c = n(845056),
    u = n(685399),
    h = n(833349),
    A = n(765379),
    g = n(713654),
    m = n(565688),
    p = n(93879),
    _ = n(961350),
    x = n(71393),
    f = n(576705),
    E = n(290863),
    C = n(461213),
    I = n(977997),
    S = n(403362),
    b = n(246084),
    N = n(667936),
    T = n(879349),
    j = n(884415),
    v = n(611330),
    y = n(652215),
    R = n(188275),
    O = n(985018),
    L = n(439792),
    D = n(335419);
function M(e) {
    let t,
        { channel: s, guild: a, onAction: g, voiceStates: x, isChannelSelected: f, shouldShowSettingNudge: I } = e;
    (t = l.useMemo(
        () =>
            null == x || x.length > 50
                ? {}
                : {
                      [s.getGuildId()]:
                          x.map((e) => {
                              let { user: t } = e;
                              return t.id;
                          }) ?? [],
                  },
        [s, x],
    )),
        (0, d.E)(t, "VoiceChannelActivities");
    let b = (0, u.Ay)(s),
        T = Array.from((0, u.Rz)(b).values()),
        j = x?.filter(S.Vq) ?? [],
        v = (0, r.bG)(
            [C.A, E.A, _.default],
            () => {
                let e = {};
                return (
                    j.forEach((t) => {
                        let n =
                            t.user.id === _.default.getId()
                                ? C.A.findActivity(c.N, !0)
                                : E.A.findActivity(t.user.id, c.N);
                        if (null != n && !(0, A.A)(n)) {
                            let i = `${n.application_id ?? ""}:${n.party?.id ?? t.user.id}`,
                                l = e[i] ?? { members: [], activity: n };
                            l.members.push(t), (0, h.A)(l.activity, y.jUm.JOIN) || (l.activity = n), (e[i] = l);
                        }
                    }),
                    Object.values(e)
                );
            },
            [j],
            r.My,
        ),
        D = (0, m.m)({ location: "voice_channel_activities" });
    return v.length + T.length === 0
        ? null
        : (0, i.jsxs)(o.HOs, {
              className: L.kL,
              children: [
                  (0, i.jsx)(G, { channel: s, isChannelSelected: f, voiceStatesCount: x?.length ?? 0 }),
                  (0, i.jsx)("div", { className: L.zN }),
                  T.map((e, t) =>
                      (0, i.jsx)(
                          N.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: s, onAction: g },
                          t,
                      ),
                  ),
                  v.map((e, t) => {
                      let { members: n, activity: a } = e;
                      return D && null != a.application_id && R.sQ.has(a.application_id)
                          ? (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsx)(N.A, { presenceActivity: a, channel: s, members: n, onAction: g }),
                                        (0, i.jsx)(p.A, {
                                            className: L.L,
                                            applicationId: a.application_id,
                                            userIds: n.map((e) => e.user.id),
                                            location: "voice_channel",
                                            guildId: s.guild_id,
                                            channelId: s.id,
                                        }),
                                    ],
                                },
                                `${t}-with-gifting-breadcrumb`,
                            )
                          : (0, i.jsx)(N.A, { presenceActivity: a, channel: s, members: n, onAction: g }, t);
                  }),
                  I &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: L.zN }),
                              (0, i.jsx)("div", {
                                  className: L.Vo,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      tag: "span",
                                      children: O.intl.format(O.t.ePyoY2, {
                                          onClick: () => {
                                              (0, o.mMO)(async () => {
                                                  let { default: e } = await n.e("62026").then(n.bind(n, 585265));
                                                  return (t) => (0, i.jsx)(e, { ...t, guild: a });
                                              });
                                          },
                                      }),
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
function G(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
        s = (0, r.bG)([f.A], () => !f.A.can(y.xBc.CONNECT, t)),
        o = (0, r.bG)([I.A], () => I.A.hasVideo(t.id)),
        d = (0, b.Ay)({ channel: t, locked: s, video: o, selected: n }),
        c = (0, r.bG)([x.A], () => x.A.getGuild(t.guild_id));
    return null == (0, g.gU)(t, c)
        ? null
        : (0, i.jsxs)("div", {
              className: a()(L.oT, D.oT),
              children: [
                  (0, i.jsx)(T.A, { channel: t }),
                  d ? (0, i.jsx)(j.A, { userCount: l, video: o, channel: t }) : (0, i.jsx)(v.A, { userCount: l }),
              ],
          });
}
